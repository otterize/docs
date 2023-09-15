Head over to the [Clusters page](https://app.otterize.com/clusters) and create a cluster.
Follow the connection guide that opens to connect your cluster, and <b>add</b> the following flags to the Helm command: 
   ```
   --set intentsOperator.operator.enableNetworkPolicyCreation=false \
   --set networkMapper.kafkawatcher.enable=true \
   --set networkMapper.kafkawatcher.kafkaServers={"kafka-0.kafka"}
   ```