Head over to the [Clusters page](https://app.otterize.com/clusters) and create a cluster.
Follow the connection guide that opens to connect your cluster, and make the following changes:

1. Under `mTLS and Kafka support` choose `Otterize Cloud`.
2. Enable enforcement. The configuration tab should look like this:
![Cluster connection guide](/img/configure-cluster/connect-cluster-cloud-with-enforcement.png)

3. Copy the Helm command and <b>add</b> the following flag:
   ```
   --set intentsOperator.operator.enableDatabaseReconciler=true
   ```