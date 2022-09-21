```bash
helm repo add otterize https://helm.otterize.com
helm repo update
helm upgrade --install -n otterize-system --create-namespace network-mapper otterize/otterize-network-mapper
```