:::note
For this tutorial, we'll configure Otterize to not manage network policies, so we can focus on topic-level Kafka ACL authorization (vs just accessing Kafka at all).

Of course you can also choose to combine them &mdash; after all, Kafka is just another service running in the cluster. To do that, reinstall Otterize without the **`--set intentsOperator.operator.enableNetworkPolicyCreation=false`** flag.
:::

Use Helm to install the latest version of Otterize:
   ```shell
   helm repo add otterize https://helm.otterize.com
   helm repo update
   helm install -n otterize-system --create-namespace \
   --set intentsOperator.operator.mode=defaultShadow --set intentsOperator.operator.enableNetworkPolicyCreation=false \
   --set global.deployment.spire=true --set global.deployment.credentialsOperator=true \
   otterize otterize/otterize-kubernetes
   ```

You can add the `--wait` flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be `Ready` using `kubectl get pods -n otterize-system -w`.