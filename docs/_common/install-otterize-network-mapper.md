```bash
helm repo add otterize https://helm.otterize.com
helm repo update
helm install network-mapper otterize/network-mapper -n otterize-system --create-namespace
```
You can add the `--wait` flag for Helm to wait for deployment to complete and all pods to be `Ready`, or manually watch for all pods to be `Ready` using `kubectl get pods -n otterize-system -w`.