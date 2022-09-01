---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial for Network Policies

Otterize helps you manage Network Policies within your cluster by abstracting the need to manage
pod identities, pod labels for clients, servers and namespaces, and configure network policies.
This tutorial will walk you through managing Network Policies using Otterize intents files.

## Install Otterize

:::note
If you already have Otterize installed on your cluster you can skip this step.
:::
1. To install Otterize unr run the following commands
   ```shell
   helm repo add otterize-gh https://otterize.github.io/helm-charts
   helm install -n otterize otterize otterize-gh/otterize-kubernetes
   ```
2. Verify all pods are in the `Ready` and `Running` with the following command
   ```
   kubectl get pods -n otterize
   ```
   You should see
   ```bash
   NAME                                                             READY   STATUS    RESTARTS      AGE
   intents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s
   otterize-spire-agent-9s8w7                                       1/1     Running   0             54s
   otterize-spire-agent-np2wf                                       1/1     Running   1 (33s ago)   54s
   otterize-spire-server-0                                          1/1     Running   0             53s
   otterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s
   spire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s
   ```
   :::note
   It can take several minutes until all pods are in the `Ready` and `Running` states.
   :::

:::caution
This tutorial requires Calico to be deployed on your cluster. To install please follow the [instructions](https://projectcalico.docs.tigera.io/getting-started/kubernetes/helm).
:::
## Concepts

### Otterize pod identity resolution

Otterize resolves pod identities automatically by using their `resource owner` (e.g. deployment) **name** and **
namespace**.

In this example the pod identity will be resolved to `client.tutorial`.
:::note
To read more about how Otterize resolves pod identities and how to manually control the process pleas read XXX.
:::

## How to

### Apply intents as Network Policies

Let's add traffic to the cluster and see how the Network Policies can be easily configured on it with Otterize.
You can do that by deploying our example which consists of two pods: client and server,
communicating over HTTP. At first the **client is blocked** from communicating with the server as no `Network Policy`
allows
it.

1. Deploy the client and server using `kubectl`.

   ```shell
   kubectl create namespace otterize-tutorial-npol
   kubectl apply -f code-examples/getting-started/network-policies
   ```
2. Check that the `client` and server `pods` were deployed
   ```bash
   kubectl get pods -n otterize-tutorial-npol
   ```
   You should see
   ```
   NAME                      READY   STATUS    RESTARTS   AGE
   client-5689997b5c-grlnt   1/1     Running   0          35s
   server-6698c58cbc-v9n9b   1/1     Running   0          34s
   ```
3. Check that the default deny ingress Network Policy was deployed
   ```bash
   kubectl get netpol -n otterize-tutorial-npol
   ```
   You should see
   ```
   NAME                   POD-SELECTOR   AGE
   default-deny-ingress   <none>         17s
   ```
4. We can now see that `client` _cannot_ connect to `server`:
   ```bash
   kubectl logs --tail 1 -n otterize-tutorial-npol deploy/client
   ```
   You should see the following line
   ```
   curl timed out
   ```
   or
   ```
   Terminated
   ```
   This is the expected outcome as we haven't configured a Network Policy using an intents file to allow it.
5. The following `intetns file` allows traffic between the client and server pods:
   ```yaml
   apiVersion: otterize.com/v1alpha1
   kind: Intents
   metadata:
     name: client
     namespace:  otterize-tutorial-npol
   spec:
     service:
       name: client
       calls:
         - server: server
           type: HTTP
   ```
   :::tip
   Intents are onf of the cornerstones to how Otterize works and helps developers. Lean more here.
   :::
6. Apply the intents file using using:
   <Tabs>
   <TabItem value="kubectl" label="Kubectl" default>

   ```shell
   kubectl apply -f code-examples/getting-started/network-policies/intents/intents.yaml
   ```
     </TabItem>
     <TabItem value="otterize" label="Otterize">

   ```shell
   otterize apply intents
   ```
     </TabItem>
   </Tabs>

7. Verify that a new network policy was created
   ```bash
   kubectl get netpol -n otterize-tutorial-npol
   ```
   You should see
   ```
   NAME                                           POD-SELECTOR                                         AGE
   access-to-server-from-otterize-tutorial-npol   otterize/server=server-otterize-tutorial-np-7e16db   6s
   default-deny-ingress                           <none>                                               28s
   ```
   
8. Check that `client` is now able to connect to `server`:
   ```bash
   kubectl logs --tail 1 -n otterize-tutorial-npol deploy/client
   ```

   You should see the following line

   ```
   "hello world"
   ```

Amazing! You have configured Network Policies to allow pod-to-pod communication using intents files.
:::tip
To learn more about how Otterize + Network Policies work see
details [here](/documentation/intents-operator/network-policies/in-depth)
:::

## What's next

<!-- [Intents Operator](/documentation/intents-operator): -->

- Configure [Network Policies](/documentation/intents-operator/network-policies) for your existing deployments.
- Explore the [Network Mapper](/documentation/getting-started/network-mapper) to help you bootstrap intents you can
  apply as Network Policies.

## Teardown
To remove the deployed resources run
```bash
kubectl delete namespace otterize-tutorial-npol
```