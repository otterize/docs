   ```shell
   helm repo add otterize https://helm.otterize.com
   helm repo update
   helm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace \
   --set intentsOperator.operator.enableNetworkPolicyCreation=false
   ```
This chart is a bundle of the Otterize intents operator, Otterize credentials operator, Otterize network mapper, and SPIRE.
Initial deployment may take a couple of minutes.
You can add the `--wait` flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be `Ready` using `kubectl get pods -n otterize-system -w`.