## Install Otterize

:::note
You can skip this section if Otterize is already installed in your cluster.
:::

1. Use Helm to install the latest version of Otterize:
   ```shell
   helm repo add otterize https://otterize.github.io/helm-charts
   helm repo update
   helm upgrade --install otterize otterize/otterize-kubernetes -n otterize --create-namespace
   ```
2. It can take several minutes for the pods to be `Running` and all containers to be ready.
   You can monitor progress with the following command:
   ```
   kubectl get pods -n otterize -w
   ```
   Once you see the following (there may be even more pods), you can stop monitoring with `Ctrl-C`:
   ```bash
   NAME                                                             READY   STATUS    RESTARTS      AGE
   intents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s
   otterize-spire-agent-9s8w7                                       1/1     Running   0             54s
   otterize-spire-agent-np2wf                                       1/1     Running   1             54s
   otterize-spire-server-0                                          1/1     Running   0             53s
   otterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s
   spire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s
   ```