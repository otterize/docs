---
sidebar_position: 5
title: Deploy mTLS between pods and Kafka
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
   helm upgrade --install --create-namespace -n otterize otterize otterize/otterize-kubernetes
   ```

## How to

### Deploy

Our sample project consists of a client connecting to Kafka over mTLS.

1. Deploy a kafka chart configured to use `Otterize`-provided credentials.
    ```bash
    helm repo add bitnami https://charts.bitnami.com/bitnami
    helm upgrade --install --create-namespace -n kafka kafka \
    --version 14.x.x bitnami/kafka \
    -f https://docs.otterize.com/code-examples/kafka-mtls/helm/values.yaml
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
    kubectl apply -f https://docs.otterize.com/code-examples/kafka-mtls/all.yaml
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
helm repo remove bitnami
```