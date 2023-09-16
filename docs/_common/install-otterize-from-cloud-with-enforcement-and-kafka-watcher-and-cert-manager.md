Head over to the [Clusters page](https://app.otterize.com/clusters) and create a cluster, selecting `cert-manager` when prompted.
Follow the connection guide that opens to connect your cluster and configure the `issuerName` to `ca-issuer`, and <b>add</b> the following flags to the Helm command:
   ```
   --set intentsOperator.operator.enableNetworkPolicyCreation=false \
   --set networkMapper.kafkawatcher.enable=true \
   --set networkMapper.kafkawatcher.kafkaServers={"kafka-0.kafka"}
   ```