Head over to the [Clusters page](https://app.otterize.com/clusters) and create a cluster.
Follow the connection guide that opens to connect your cluster, and make the following changes:
![Cluster connection guide](/img/configure-cluster/connect-cluster-kafka-mtls-with-otterize-cloud-cert-manager.png)

1. Under `mTLS and Kafka support` choose `cert-manager`.
2. Note that enforcement is disabled, we will enable it later.
3. Copy the helm command and <b>add</b> the following flags to the Helm command:
   ```
   --set intentsOperator.operator.enableNetworkPolicyCreation=false \
   --set networkMapper.kafkawatcher.enable=true \
   --set networkMapper.kafkawatcher.kafkaServers={"kafka-0.kafka"}
   ```