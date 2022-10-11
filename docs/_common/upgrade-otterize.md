Use Helm to upgrade to the latest version of Otterize:
   ```shell
   helm repo update
   helm upgrade --install otterize otterize/otterize-kubernetes -n otterize-system
   ```
This chart is a bundle of the Otterize intents operator, SPIRE integration operator, and SPIRE.
You can add the `--wait` flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be `Ready` using `kubectl get pods -n otterize-system -w`.