---
sidebar_position: 3
title: IBAC via network policies
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Recap: K8s network policies and CNI network plugins

[Network policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/) are one of the tools we
can use for traffic shaping within K8s clusters. They allow us to shape traffic using selectors, policies, and L3
and L4 identifiers. To enforce network policies, a Kubernetes cluster requires a CNI supporting network policies to be
installed. Some popular options are Calico and Cilium.

Let's take a look at an example showing a network policy allowing traffic

- _from_ pods labeled `app:backend` belonging to namespaces labeled `env:production`
- _to_ pods labeled `app:db` in the namespace  `production-db`

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-production-backend
  # highlight-next-line
  namespace: production-db            # [Target filter] Policy applies to target pods in this namespace
spec:
  podSelector:
    matchLabels:
      # highlight-next-line
      app: db                         # [Target filter] Policy applies to target pods with this label
  policyTypes:
    # highlight-next-line
    - Ingress                         # [Direction] Policy implemented as a filter on incoming connections
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              # highlight-next-line
              env: production         # [Source filter] Policy filters source pods from namespaces with this label
        - podSelector:
            matchLabels:
              # highlight-next-line
              app: backend            # [Source filter] Policy filters source pods from with this label
```

### Setting security scope via default network policies

Two common approaches for working with network policies are

- Allow all traffic between pods, protect some pods by applying ingress network policies to them.
- Block all traffic between pods except allowed traffic by network policies.

Note

- Applying an ingress network policy to a pod will automatically block all communications to it except those allowed by
  network policies.
- You can apply both approaches (allow/block all) within your cluster (e.g. by applying network policies based on
  namespaces).

To block all traffic within a namespace (e.g. _production_) you can apply a default deny network policy like the
following example

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
  namespace: production
spec:
  podSelector: { }
  policyTypes:
    - Ingress
```

## Deep dive - how intents translate to network policies.
Let's follow an example scenario and track how Otterize configures network policies when we apply intents.
### Deploy example
Our simple example consists of two pods: an HTTP server and a client that calls it. We also deploy a default-deny ingress network policy,
blocking pods from accepting incoming calls unless another network policy explicitly allows them.

<Tabs>

<TabItem value="namespace.yaml" label="namespace.yaml" default>

   ```yaml
   {@include: ../../../static/code-examples/network-policies/namespace.yaml}
   ```

</TabItem>

<TabItem value="server.yaml" label="server.yaml" default>

   ```yaml
  {@include: ../../../static/code-examples/network-policies/server-deployment.yaml}
   ---
  {@include: ../../../static/code-examples/network-policies/server-service.yaml}
  ```

</TabItem>
<TabItem value="client.yaml" label="client.yaml" default>

   ```yaml
   {@include: ../../../static/code-examples/network-policies/client-deployment.yaml}
   ```

</TabItem>

<TabItem value="default-deny.yaml" label="default-deny.yaml" default>

   ```yaml
   {@include: ../../../static/code-examples/network-policies/default-deny-network-policy.yaml}
   ```

</TabItem>
</Tabs>

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

3. The client intents to call the server are declared with this `intents.yaml` file:

   ```yaml
   {@include: ../../../static/code-examples/network-policies/intents.yaml}
   ```
   Let's apply it:
   ```shell
   kubectl apply -f https://docs.otterize.com/code-examples/network-policies/intents.yaml
   ```
### Track artifacts
After applying the intents file Otterize generated multiple artifacts to configure access from the client to
server via network policies:
- A network policy allowing traffic from the [client, namespace -labeled] pods to [server-labeled] pods
- Create label and apply it to the client pod
- Create label and apply it to the server pod
- Create label and apply it to the client pod's namespace
1. Let's look at the network policy
  ```bash
  kubectl describe networkpolicies -n otterize-tutorial-npol access-to-server-from-otterize-tutorial-npol
  ```
  You should see
  ```yaml
  Name:         access-to-server-from-otterize-tutorial-npol
  Namespace:    otterize-tutorial-npol                                          # [Target filter] namespace
  Created on:   2022-09-08 19:12:24 +0300 IDT
  Labels:       otterize/network-policy=true
  Annotations:  <none>
  Spec:
    PodSelector:     otterize/server=server-otterize-tutorial-np-7e16db         # [Target filter] pods with this label
    Allowing ingress traffic:
      To Port: <any> (traffic allowed to all ports)
      From:
        NamespaceSelector: otterize/namespace-name=otterize-tutorial-npol       # [Source filter] namespaces with this label
        PodSelector: otterize/access-server-otterize-tutorial-np-7e16db=true    # [Source filter] pods with this label
    Not affecting egress traffic
    Policy Types: Ingress                                                       # [Direction]
  ```
2. And we can see that the client and server pods are labeled
  ```bash
  kubectl get pods -n otterize-tutorial-npol --show-labels
  ```
  You should see
  ```bash
  NAME                      READY   STATUS    RESTARTS   AGE   LABELS
  client-5cb67b748-zxkxj    1/1     Running   0          28h   app=client,otterize/access-server-otterize-tutorial-np-7e16db=true,otterize/client=true,otterize/server=client-otterize-tutorial-np-699302,otterize/spire-integration-operator.service-name=client,pod-template-hash=5cb67b748
  server-564b56f596-cl4gl   1/1     Running   0          28h   app=server,otterize/server=server-otterize-tutorial-np-7e16db,otterize/spire-integration-operator.service-name=server,pod-template-hash=564b56f596
  ```

The key labels are
- For the server - otterize/server=server-otterize-tutorial-np-7e16db
- For the client - otterize/access-server-otterize-tutorial-np-7e16db=true

The naming convention is that target pods are labeled with
- otterize/server=             # prefix for target pods
- server-otterize-tutorial-np- # target {pod inferred name}-{pod namespace} truncated
- 7e16db                       # a hash over both attributes (name, namespace)

And source pods are labeled with
- otterize/access-             # prefix for source pods
- server-otterize-tutorial-np- # target {pod inferred name}-{pod namespace} truncated
- 7e16db                       # a hash over both attributes (name, namespace)
- =true                        # marker for **allowed** access

## …

## Practical notes

### Avoiding drift

### Avoiding blocking of essential services

Otterize automatically generates network policies, when needed, to allow load balancers, ingresses and other XXX to
communicate with their intended targets within the cluster.
Think of the following scenario

- There's an internet facing load balancer calling the frontend service
- There's an internal load generator service also calling the frontend service
- The user created an intents file with an intent to call the frontend service from the load generator service
- Otterize will then generate a network policy for [load generator service->frontend service]
- That network policy will block traffic from the load balancer unless we take action
- That is why Otterize will also identify this case and generate another network policy to allow traffic from the load
  balancer to the frontend.