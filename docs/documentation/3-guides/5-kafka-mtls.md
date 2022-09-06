---
sidebar_position: 5
---

# Kafka + mTLS

:::danger To write
:::

## Install Otterize

:::note
If you already have Otterize installed on your cluster you can skip this step.
:::

1. To install Otterize run the following commands
   ```shell
   helm repo add otterize https://otterize.github.io/helm-charts
   helm repo update
   helm install --create-namespace -n otterize otterize otterize/otterize-kubernetes
   ```
2. Verify all pods are in the `Ready` and `Running` with the following command
   ```
   kubectl get pods -n otterize
   ```
   You should see
   ```bash
   NAME                                                             READY   STATUS    RESTARTS      AGE
   intents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s
   otterize-spire-agent-9s8w7                                       1/1     Running   0             54s
   otterize-spire-agent-np2wf                                       1/1     Running   1 (33s ago)   54s
   otterize-spire-server-0                                          1/1     Running   0             53s
   otterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s
   spire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s
   ```
   :::note
   It can take several minutes until all pods are in the `Ready` and `Running` states.
   :::

## How to

### Deploy

Our sample project consists of a client connecting to Kafka over mTLS.

1. Deploy a kafka chart configured to use `Otterize`-provided credentials.
    ```bash
    helm dependency build code-examples/getting-started/kafka-mtls/helm
    helm upgrade --install -n kafka kafka code-examples/getting-started/kafka-mtls/helm -f code-examples/getting-started/kafka-mtls/helm/values.yaml
    ```
   Verify `Kafka` is running with
    ```bash
   kubectl get pods -n kafka kafka-0
    ```
   You should get 
    ```bash
    NAME      READY   STATUS    RESTARTS        AGE
    kafka-0   1/1     Running   1 (2m28s ago)   2m59s
    ```
2. Deploy a client connecting to Kafka
    ```bash
    kubectl create namespace otterize-tutorial-kafka-mtls
    kubectl apply -f code-examples/getting-started/kafka-mtls
    ```
2. Check that the `client` `pods` was deployed
   ```bash
   kubectl get pods -n otterize-tutorial-kafka-mtls
   ```
   You should see
   ```
   NAME                     READY   STATUS    RESTARTS   AGE
   client-dcff84688-4b2xm   1/1     Running   0          32s
   ```
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


## Teardown

To remove the deployed resources run

```bash
kubectl delete namespace otterize-tutorial-kafka-mtls
helm uninstall -n kafka kafka
```