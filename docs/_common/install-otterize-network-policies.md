Use Helm to install the latest version of Otterize:
   ```shell
   helm repo add otterize https://helm.otterize.com
   helm repo update
   helm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace --set deployment.spire=false \
   --set deployment.credentialsOperator=false --set intentsOperator.operator.autoGenerateTLSUsingCredentialsOperator=false
   ```
You can add the `--wait` flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be `Ready` using `kubectl get pods -n otterize-system -w`.