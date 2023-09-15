Head over to the [Clusters page](https://app.otterize.com/clusters) and create a cluster.
Follow the connection guide that opens to connect your cluster, and <b>add</b> the following flags to the Helm command: 
   ```
   --set global.certificateProvider=cert-manager --set global.certManager.issuerName=ca-issuer \
   --set intentsOperator.operator.enableNetworkPolicyCreation=false \
   --set networkMapper.kafkawatcher.enable=true \
   --set networkMapper.kafkawatcher.kafkaServers={"kafka-0.kafka"}
   ```