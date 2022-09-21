```bash
helm repo add otterize https://helm.otterize.com
helm repo update
helm upgrade --install -n otterize network-mapper otterize/otterize-network-mapper --create-namespace
```