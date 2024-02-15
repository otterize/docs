Head over to the [Integrations page](https://app.otterize.com/integrations) and create a Kubernetes integration.
Follow the connection guide that opens to connect your cluster, and make the following changes:

1. Under `mTLS and Kafka support` choose `Otterize Cloud`.
2. Note that enforcement is disabled, we will enable it later. The configuration tab should look like this:
   ![Cluster connection guide](/img/configure-cluster/connect-cluster-kafka-mtls-with-otterize-cloud.png)

3. Copy the Helm command and <b>add</b> the following flags:
   ```
   --set intentsOperator.operator.enableNetworkPolicyCreation=false \
   --set networkMapper.kafkawatcher.enable=true \
   --set networkMapper.kafkawatcher.kafkaServers={"kafka-0.kafka"}
   ```
