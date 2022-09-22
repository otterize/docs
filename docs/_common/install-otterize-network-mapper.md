```bash
helm repo add otterize https://helm.otterize.com
helm repo update
helm upgrade --install network-mapper otterize/otterize-network-mapper -n otterize-system --create-namespace
```