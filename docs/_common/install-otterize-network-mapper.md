```bash
helm repo add otterize https://helm.otterize.com
helm repo update
helm install network-mapper otterize/network-mapper -n otterize-system --create-namespace --wait
```
You can remove the `--wait` flag if you don't want Helm to wait for all pods to be ready, and instead manually watch for all pods to be `Ready` using `kubectl get pods -n otterize-system -w`.