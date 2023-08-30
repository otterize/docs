Use Helm to install the latest version of Otterize:
   ```shell
   helm repo add otterize https://helm.otterize.com
   helm repo update
   helm install -n otterize-system --create-namespace \
   --set global.deployment.spire=true --set global.deployment.credentialsOperator=true \
   otterize otterize/otterize-kubernetes
   ```

You can add the `--wait` flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be `Ready` using `kubectl get pods -n otterize-system -w`.