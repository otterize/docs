---
sidebar_position: 3
title: Manage network policies
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Network policies

Otterize helps you manage network policies within your cluster by abstracting the need to manage
pod identities, pod labels for clients, servers and namespaces, and configure network policies.
This tutorial will walk you through managing network policies using Otterize intents files. We will

- Install Otterize
- Install Calico
- Deploy client and server pods communicating over HTTP and block their communication with a default deny network policy
- Use an intents file to easily manage network policies to allow the communication between the client and server pods

## Install Otterize

:::note
If you already have Otterize installed on your cluster you can skip this step.
:::

1. To install Otterize run the following commands
   ```shell
   helm repo add otterize https://otterize.github.io/helm-charts
   helm repo update
   helm upgrade --install --create-namespace -n otterize otterize otterize/otterize-kubernetes
   ```
2. It can take several minutes for the pods to **stabilize** into the `Ready` and `Running` states. You can monitor with
   the following command:
   ```
   kubectl get pods -n otterize
   ```
   After **stabilization** you should see:
   ```bash
   NAME                                                             READY   STATUS    RESTARTS      AGE
   intents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s
   otterize-spire-agent-9s8w7                                       1/1     Running   0             54s
   otterize-spire-agent-np2wf                                       1/1     Running   1 (33s ago)   54s
   otterize-spire-server-0                                          1/1     Running   0             53s
   otterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s
   spire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s
   ```

## Install Calico

:::note
If you already have Calico installed on your cluster you can skip this step.
:::
To enforce network policies within your cluster you require a CNI to implement them.
Calico is one of the CNIs you can use for this task. To install please follow
the [instructions](https://projectcalico.docs.tigera.io/getting-started/kubernetes/helm).

## Deploy tutorial

Let's deploy our example which consists of two pods: client and server,
communicating over HTTP. At first the **client is blocked** from communicating with the server as we set a default deny
ingress network policy.
<details>
<summary>Code examples</summary>
<Tabs>
<TabItem value="client-deployment.yaml" label="client-deployment.yaml" default>

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: client
     namespace: otterize-tutorial-npol
   spec:
     selector:
       matchLabels:
         app: client
     template:
       metadata:
         labels:
           app: client
       spec:
         containers:
           - name: client
             image: alpine/curl
             command: [ "/bin/sh", "-c", "--" ]
             args: [ "while true; do if ! timeout 2 curl -si server 2>/dev/null; then echo \"curl timed out\"; fi; sleep 2; done" ]
   ```

</TabItem>
<TabItem value="server-deployment.yaml" label="server-deployment.yaml" default>

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: server
     namespace: otterize-tutorial-npol
   spec:
     selector:
       matchLabels:
         app: server
     template:
       metadata:
         labels:
           app: server
       spec:
         containers:
           - name: server
             image: hashicorp/http-echo
             args: [ "-listen=:80", "-text=hello world" ]
   ```

</TabItem>
<TabItem value="default-deny-network-policy.yaml" label="default-deny-network-policy.yaml" default>

   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: NetworkPolicy
   metadata:
     name: default-deny-ingress
     namespace: otterize-tutorial-npol
   spec:
     podSelector: { }
     policyTypes:
       - Ingress
   ```

</TabItem>
</Tabs>
</details>

1. Deploy the client, server, and the default deny network policy using `kubectl`.

   ```shell
   kubectl apply -f https://docs.otterize.com/code-examples/network-policies/all.yaml
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
   kubectl get NetworkPolicies -n otterize-tutorial-npol
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
   This is the expected outcome as we haven't configured a network policy using an intents file to allow it.

## Apply intents as network policies

1. We will use the following `intetns file` allows traffic between the client and server pods:
   ```yaml
   apiVersion: k8s.otterize.com/v1
   kind: ClientIntents
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
2. We will monitor the change in real time with a **second terminal** to see how the effect takes place immediately. Run
   the following monitoring command in your **second terminal**.
   ```bash
   kubectl logs -f --tail 1 -n otterize-tutorial-npol deploy/client
   ```
   At first you will see the client timing out when trying to call the server
   ```
   curl timed out
   curl timed out
   curl timed out
   ```
3. Apply the intents file on your **main terminal** using:
   <Tabs>
   <TabItem value="kubectl" label="Kubectl" default>

   ```shell
   kubectl apply -f https://docs.otterize.com/code-examples/network-policies/intents/intents.yaml
   ```
     </TabItem>
     <TabItem value="otterize" label="Otterize">

   ```shell
   otterize apply intents
   ```
     </TabItem>
   </Tabs>
4. You should immidiatly see on the **second terminal** that `client` is now able to connect to `server` as the output
   will start to show:
   ```bash
   curl timed out                              
   curl timed out                              <- before applying the intents file
   # highlight-start
   HTTP/1.1 200 OK                             <- after applying the intents file
   X-App-Name: http-echo
   X-App-Version: 0.2.3
   Date: Wed, 07 Sep 2022 13:51:34 GMT
   Content-Length: 12
   Content-Type: text/plain; charset=utf-8
   
   hello world
   # highlight-end
   ```

5. Verify that a new network policy was created
   ```bash
   kubectl get NetworkPolicies -n otterize-tutorial-npol
   ```
   You should see
   ```
   NAME                                           POD-SELECTOR                                         AGE
   access-to-server-from-otterize-tutorial-npol   otterize/server=server-otterize-tutorial-np-7e16db   6s
   default-deny-ingress                           <none>                                               28s
   ```

:::tip
To learn more about how Otterize + network policies work see
details [here](/documentation/intents-operator/network-policies/in-depth)
:::

## What's next

<!-- [Intents Operator](/documentation/intents-operator): -->

- Configure [network policies](/documentation/intents-operator/network-policies) for your existing deployments.
- Explore the [Network Mapper](/documentation/getting-started/network-mapper) to help you bootstrap intents you can
  apply as network policies.

## Teardown

To remove the deployed resources run

```bash
kubectl delete namespace otterize-tutorial-npol
```