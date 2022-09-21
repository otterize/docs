Use Helm to install the latest version of Otterize:
   ```shell
   helm repo add otterize https://helm.otterize.com
   helm repo update
   helm upgrade --install otterize otterize/otterize-kubernetes -n otterize --create-namespace \
   --set deployment.spire=false --set deployment.spireIntegrationOperator=false --set intentsOperator.operator.autoGenerateTLSUsingSpireIntegration=false
   ```
<details>
  <summary>Optional: check installation status</summary>
  <div>

It can take several minutes for the pods to be `Running` and all containers to be ready.
You can monitor progress with the following command:
   ```
   kubectl get pods -n otterize -w
   ```
Once you see the following (there may be even more pods), you can stop monitoring with `Ctrl-C`:
   ```bash
   NAME                                                             READY   STATUS    RESTARTS      AGE
   intents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s
   otterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s
   ```
</div>
</details>