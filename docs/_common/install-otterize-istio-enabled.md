   You'll need [Helm](https://helm.sh/docs/intro/install/) installed on your machine to install Otterize as follows:

   ```shell
   helm repo add otterize https://helm.otterize.com
   helm repo update
   helm install otterize otterize/otterize-kubernetes -n otterize-system --create-namespace \
   --set networkMapper.istiowatcher.enable=true \
   --set intentsOperator.operator.enableNetworkPolicyCreation=false \
   --set intentsOperator.operator.experimentalEnableIstioPolicyCreation=true
   ```

:::note This example disable network policy enforcement. 

This chart is a bundle of the Otterize intents operator, Otterize credentials operator, Otterize network mapper, and SPIRE.
Initial deployment may take a couple of minutes.
You can add the `--wait` flag for Helm to wait for deployment to complete and all pods to be Ready, or manually watch for all pods to be `Ready` using `kubectl get pods -n otterize-system -w`.

After all the pods are ready you should see the following (or similar) in your terminal when you run `kubectl get pods -n otterize-system`:

``` bash
NAME                                                       READY  STATUS  RESTARTS AGE
credentials-operator-controller-manager-6c56fcfcfb-vg6m9   2/2    Running   0     9s
intents-operator-controller-manager-65bb6d4b88-bp9pf       2/2    Running   0     9s
otterize-network-mapper-779fffd959-twjqd                   1/1    Running   0     9s
otterize-network-sniffer-65mjt                             1/1    Running   0     9s
otterize-spire-agent-lcbq2                                 1/1    Running   0     9s
otterize-spire-server-0                                    2/2    Running   0     9s
otterize-watcher-b9bf87bcd-276nt                           1/1    Running   0     9s
```
