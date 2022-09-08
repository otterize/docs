---
sidebar_position: 5
title: Deploy mTLS between pods and Kafka
---

# Kafka + mTLS

This tutorial will walk you through deploying mTLS certificates between a client and a Kafka cluster.
We will:

- Install Otterize
- Learn how to configure bitnami's kafka chart to use Otterize-provided mTLS credentials
- Deploy a Kafka cluster
- Learn how to annotate pods for automatic credentials generation
- Deploy a client connecting to Kafka with mTLS
- Inspect the credentials

## Install Otterize

:::note
If you already have Otterize installed on your cluster you can skip this step.
:::

1. To install Otterize run the following commands
   ```shell
   helm repo add otterize https://otterize.github.io/helm-charts
   helm repo update
   helm upgrade --install --create-namespace -n otterize otterize otterize/otterize-kubernetes
   ```
2. It can take several minutes for the pods to **stabilize** into the `Ready` and `Running` states. You can monitor with
   the following command:
   ```
   kubectl get pods -n otterize
   ```
   After **stabilization** you should see:
   ```bash
   NAME                                                             READY   STATUS    RESTARTS      AGE
   intents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s
   otterize-spire-agent-9s8w7                                       1/1     Running   0             54s
   otterize-spire-agent-np2wf                                       1/1     Running   1 (33s ago)   54s
   otterize-spire-server-0                                          1/1     Running   0             53s
   otterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s
   spire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s
   ```

## Configure Kafka (explainer)

We will deploy a Kafka cluster using bitnami's [chart](https://github.com/bitnami/charts/tree/master/bitnami/kafka)
To configure the chart to use the Otterize-provided credentials we need to configure it to

1. Use SSL for it's listeners
2. Tell Otterize using pod annotations how it requires it's credentials
3. Authenticate using mTLS credentials provided as a K8s secret

```yaml
listeners: # 1. Use SSL for it's listeners
  - "CLIENT://:9092"
  - "INTERNAL://:9093"
advertisedListeners:
  - "CLIENT://:9092"
  - "INTERNAL://:9093"
listenerSecurityProtocolMap: "INTERNAL:SSL,CLIENT:SSL"
podAnnotations: # 2. Annotations for Otterize to generate credentials
  otterize/cert-type: jks
  otterize/tls-secret-name: kafka-tls-secret
  otterize/truststore-file-name: kafka.truststore.jks
  otterize/keystore-file-name: kafka-keystore.jks
  otterize/dns-names: "kafka-0.kafka-headless.kafka.svc.cluster.local,kafka.kafka.svc.cluster.local"
auth: # 3. Authenticate clients using mTLS
  clientProtocol: mtls
  interBrokerProtocol: mtls
  tls:
    type: jks
    existingSecrets:
      - kafka-tls-secret
    password: password
authorizerClassName: kafka.security.authorizer.AclAuthorizer
allowEveryoneIfNoAclFound: true
```

## Install Kafka

The following command will deploy a Kafka cluster configured to use Otterize-provided mTLS credentials.

 ```bash
 helm repo add bitnami https://charts.bitnami.com/bitnami
 helm upgrade --install --create-namespace -n kafka kafka \
 --version 14.x.x bitnami/kafka \
 -f https://docs.otterize.com/code-examples/kafka-mtls/helm/values.yaml
 ```

It can take several minutes for the pods to **stabilize** into the `Ready` and `Running` states. You can monitor with
the following command:

 ```bash
kubectl get pods -n kafka
 ```

After **stabilization** you should see:

 ```bash
 NAME                READY   STATUS    RESTARTS      AGE
kafka-0             1/1     Running   1 (25s ago)   45s
kafka-zookeeper-0   1/1     Running   0             56s
 ```

## Pod annotation  (explainer)

To generate credentials for a pod we simply need to update the deployment by annotating it.
The required steps are to

1. Annotate the pod - Otterize automatically identifies the `otterize/credentials-secret-name` annotation, generates
   mTLS credentials, and stores them as K8s secret named as the annotation value.
2. Mount the credentials stored as a K8s secret as a volume
3. Mount the volume into the container

```yaml
spec:
  template:
    metadata:
      ...
      annotations:
        # highlight-next-line
        otterize/credentials-secret-name: client-credentials-secret       # 1 Generate credentials
    spec:
      volumes:
        # highlight-start
        - name: otterize-credentials
          secret:
            secretName: client-credentials-secret                      # 2 Mount credentials as a volume
            # highlight-end
      containers:
        - name: client
        ...
        volumeMounts:
          # highlight-start
          - name: otterize-credentials
            mountPath: /var/otterize/credentials                      # 3 Mount volume into container 
            readOnly: true
            # highlight-end
```

:::info
Visit the [Behavior](/documentation/credential-operator/behavior) section to view all parameters available as pod
annotation for generating mTLS credentials.
:::

## Deploy

1. Deploy a client connecting to Kafka
    ```bash
    kubectl apply -f https://docs.otterize.com/code-examples/kafka-mtls/all.yaml
    ```
2. Check that the `client` `pod` was deployed
   ```bash
   kubectl get pods -n otterize-tutorial-kafka-mtls
   ```
   You should see
   ```
   NAME                     READY   STATUS    RESTARTS   AGE
   client-dcff84688-4b2xm   1/1     Running   0          32s
   ```

:::note
Client logs require improvement. Client is compiling on startup so it can take some time before it's ready.
Need to solve this.
:::

3. Check that the client succesfully connected to Kafka using mTLS
    ```bash
    kubectl logs --tail=5 -n otterize-tutorial-kafka-mtls deploy/client
    ```
   You should get
    ```bash
    [sarama] 2022/09/04 11:52:48 Successfully initialized new client
    time="2022-09-04T11:52:48Z" level=info msg=Topics topics="[test]"
    time="2022-09-04T11:52:48Z" level=info msg="Ensuring topic" topicName=test
    [sarama] 2022/09/04 11:52:48 Connected to broker at kafka-0.kafka-headless.kafka.svc.cluster.local:9092 (registered as #0)
    time="2022-09-04T11:52:48Z" level=info msg="Ensured topic" topicName=test
    ```

## What happened behind the scenes

3. We configured the Kafka helm chart to
    1. Use the SSL protocol for its listeners
    2. Annotated its pod to let Otterize know it should generate mTLS credentials in the Java Key Store and Java Trust
       Store format and store them as a K8s secret.
    3. Use the K8s secret for mTLS by configuring Kafka's auth mechanism.
4. We annotated the client pod to let Otterize know it should generate mTLS credentials in a PEM format.
5. The Otterize SPIRE integration operator
    1. For each of [Kafka, client]
        1. Created an entries for the annotated pods with the SPIRE server.
        2. Generated matching mTLS credentials using the SPIRE server.
        3. Stored the mTLS credentials into a K8s secrets.
6. The secrets were mounted (separately) into each pod's container.
7. The client pod connected and authenticated to Kafka using mTLS.

## Teardown

To remove the deployed resources run

```bash
kubectl delete namespace otterize-tutorial-kafka-mtls
helm uninstall -n kafka kafka
helm repo remove bitnami
```