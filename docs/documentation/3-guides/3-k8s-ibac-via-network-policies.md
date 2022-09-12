---
sidebar_position: 3
title: IBAC in Kubernetes via network policies
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Recap: K8s network policies and CNI network plugins

[Network policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/) are one of the tools we
can use for traffic shaping within K8s clusters. They allow us to shape traffic using selectors, policies, and L3
and L4 identifiers. To enforce network policies, a Kubernetes cluster requires a CNI supporting network policies to be
installed. Some popular options are Calico and Cilium.

### How a network policy looks like
Let's take a look at an example showing a network policy allowing traffic

- _from_ pods labeled `app:backend` in namespaces labeled `env:production`
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

## Applying intents on an existing cluster
To apply intents on an existing cluster you will need to install Otterize with the network policies
option enabled. You can follow the [complete installation](/documentation/guides/k8s-installation) or
install only the [network policy components](/documentation/guides/k8s-installation#network-policies-only).

The following sections refer to a demo deployment we will deploy at first and then start configuring intents for.

### Deploying the demo
Let's explore how a gradual rollout looks like. For our demo environment
we will use the Google microservices [demo](https://github.com/GoogleCloudPlatform/microservices-demo)
which simulates an e-commerce application running on K8s built from multiple services, tech stack and programming languages.

The application layout is as follows
![Demo e-commerce](https://github.com/GoogleCloudPlatform/microservices-demo/raw/main/docs/img/architecture-diagram.png)

2. To deploy the demo run
    ```bash
    kubectl create namespace otterize-ecom-demo
    kubectl apply -n otterize-ecom-demo -f https://raw.githubusercontent.com/GoogleCloudPlatform/microservices-demo/main/release/kubernetes-manifests.yaml
    ```
3. You can check that the cluster was deployed using
   ```bash
   kubectl get pods -n otterize-ecom-demo
   ```
   You should see
   ```bash
    NAME                                     READY   STATUS    RESTARTS   AGE
    adservice-694f4ff98-cz4nn                1/1     Running   0          23m
    cartservice-85f8bc44fd-45cbk             1/1     Running   0          23m
    checkoutservice-8fc47bbbd-9lhfv          1/1     Running   0          23m
    currencyservice-597bdf576b-8hftc         1/1     Running   0          23m
    emailservice-d5c6f74dd-qlwc4             1/1     Running   0          23m
    frontend-7ffbf49884-j9rhz                1/1     Running   0          23m
    loadgenerator-65779994db-tgdxk           1/1     Running   0          23m
    paymentservice-76b9c8b87d-ktfcd          1/1     Running   0          23m
    productcatalogservice-6969d4f5fd-xdw99   1/1     Running   0          23m
    recommendationservice-58798d5c8-2f4rz    1/1     Running   0          23m
    redis-cart-6f65887b5d-xwpz5              1/1     Running   0          23m
    shippingservice-ff5f4d7d-qcjw8           1/1     Running   0          23m
    ```
4. To get the load balancer address run
    ```bash
    kubectl get service -n otterize-ecom-demo frontend-external -o json | jq -r .status.loadBalancer.ingress[0].hostname
    ```
   And you should get a result similar to (if running on EKS)
   ```
   a11843075fd254f8099a986467098647-1889474685.us-east-1.elb.amazonaws.com
   ```
   Go ahead and browse the website to get a feel for its behavior.
   :::note
   The load balancer address might take some time to populate across dns servers.
   :::

### Setting security scope via default network policies

Two common approaches for working with network policies are

- Allow all traffic between pods, protect some pods by applying ingress network policies to them.
- Block all traffic between pods except allowed traffic by network policies.

You can apply both approaches (allow/block all) within your cluster (e.g. by applying network policies based on 
namespaces).

:::caution 
Applying an ingress network policy to a pod will automatically block all communications to it except those allowed by 
network policies.
:::

#### Default deny netwrk policy
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

### Auto generating network policies for ingress
:::caution
Otterize defaults to automatically generate network policies for LoadBalancer, NodePort, and Ingress traffic
when an intent will generate a network policy that can block existing traffic. To disable this feature XXX
:::


Let's look at an example from our demo. We have a `frontend` service being accessed from multiple source
- `loadgenerator` calls it from within the cluster to generate traffic
- `frontend-external` is a `LoadBalancer` directing traffic from outside the cluster to the `frontend`

Be applying the following intents file
```yaml
apiVersion: k8s.otterize.com/v1alpha1
kind: ClientIntents
metadata:
  name: loadgenerator
spec:
  service:
    name: loadgenerator
  calls:
    - name: frontend
      type: HTTP
```
Otterize will generate a network policy allowing access from the `loadgenerator` to the `frontend`.
If left unhandled, any other traffic not allowed by existing network policies to the `frontend` will get blocked. In our
case that means that the `frontend-external` `LoadBalancer` won't be able to communicate with with `frontend`.

To overcome this, Otterize will automatically generate a network policy to allow traffic from `frontend-external`
to `frontend` by relying on the existence of the ingress (in this case `LoadBalancer`) as an intent between the two.

FAQ:
- Why can't Otterize always generate network policies for ingress types?
  - If no network policies exist, automatically generating a network policy to allow `frontend-external` -> `frontend` will
  block existing traffic like `loadgenerator` -> `frontend`.

### Walkthrough - applying the first intent
From looking at the e-commerce application diagram we can see that the `productcatalog` service is being called from two
services: `checkout` and `recommendation`.

If we apply an intent only for the `recommendation` to call the `productcatalog` a matching network policy will be generated
to allow it. **But**, since we haven't applied an intent for the `checkout` service to call the `productcatalog` then the
`checkout` service will be blocked.

1. Let's see this state in action. First we'll apply the intent for `recommendation`->`productcatalog`


## Deep dive - how intents translate to network policies.
Let's follow an example scenario and track how Otterize configures network policies when we apply intents.
### Deploy example
Our example consists of two pods: an HTTP server and a client that calls it. We also deploy a default-deny ingress network policy,
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
- Create a network policy allowing traffic from the [client, namespace -labeled] pods to [server-labeled] pods
- Label the client pods
- Label the client pod namespaces
- Label the server pods
1. Let's look at the generated network policy
  ```bash
  kubectl describe networkpolicies -n otterize-tutorial-npol access-to-server-from-otterize-tutorial-npol
  ```
  You should see (without the comments)
  ```yaml
  Name:         access-to-server-from-otterize-tutorial-npol
  # [Target filter] namespace
  # highlight-next-line
  Namespace:    otterize-tutorial-npol
  Created on:   2022-09-08 19:12:24 +0300 IDT
  Labels:       intents.otterize.com/network-policy=true
  Annotations:  <none>
  Spec:
    # [Target filter] pods with this label
    # highlight-next-line
    PodSelector:     intents.otterize.com/server=server-otterize-tutorial-np-7e16db
    Allowing ingress traffic:
      To Port: <any> (traffic allowed to all ports)
      From:
        # [Source filter] namespaces with this label
        # highlight-next-line
        NamespaceSelector: intents.otterize.com/namespace-name=otterize-tutorial-npol
        # [Source filter] pods with this label
        # highlight-next-line
        PodSelector: intents.otterize.com/access-server-otterize-tutorial-np-7e16db=true
    Not affecting egress traffic
    # [Direction]
    # highlight-next-line
    Policy Types: Ingress
  ```
2. And we can also see that the client and server pods are now labeled
  ```bash
  kubectl get pods -n otterize-tutorial-npol --show-labels
  ```
  You should see
  ```bash
  NAME                      READY   STATUS    RESTARTS   AGE     LABELS
  client-5cb67b748-l25vg    1/1     Running   0          7m57s   app=client,intents.otterize.com/access-server-otterize-tutorial-np-7e16db=true,intents.otterize.com/client=true,intents.otterize.com/server=client-otterize-tutorial-np-699302,pod-template-hash=5cb67b748,spire-integration.otterize.com/service-name=client
  server-564b56f596-54str   1/1     Running   0          7m56s   app=server,intents.otterize.com/server=server-otterize-tutorial-np-7e16db,pod-template-hash=564b56f596,spire-integration.otterize.com/service-name=server
  ```
  
  The key labels are
    - For the server - <span style={{color:'gray'}}>intents.otterize.com/server</span>=<span style={{color:'magenta'}}>server</span>-<span style={{color:'red'}}>otterize-tutorial-np</span>-<span style={{color:'green'}}>7e16db</span>
      - <span style={{color:'gray'}}>intents.otterize.com/server</span> - Otterize label prefix 
      - <span style={{color:'magenta'}}>server</span> - Server pod name
      - <span style={{color:'red'}}>otterize-tutorial-np</span> - Server pod namespace (might be truncated)
      - <span style={{color:'green'}}>7e16db</span> - Hash for server pod name and and namespace 
    - For the client - <span style={{color:'gray'}}>intents.otterize.com/access</span>-<span style={{color:'magenta'}}>server</span>-<span style={{color:'red'}}>otterize-tutorial-np</span>-<span style={{color:'green'}}>7e16db</span>=true
      - <span style={{color:'gray'}}>intents.otterize.com/server</span> - Otterize label prefix
      - <span style={{color:'magenta'}}>server</span> - Server pod name
      - <span style={{color:'red'}}>otterize-tutorial-np</span> - Server pod namespace (might be truncated)
      - <span style={{color:'green'}}>7e16db</span> - Hash for server pod name and and namespace
3. Finally, let's look at the namespace label with
  ```bash
  kubectl get namespace otterize-tutorial-npol --show-labels
  ```
  You should see
  ```bash
  NAME                     STATUS   AGE   LABELS
otterize-tutorial-npol   Active   36s   intents.otterize.com/namespace-name=otterize-tutorial-npol,kubernetes.io/metadata.name=otterize-tutorial-npol
  ```
  With the new label add by otterize - `intents.otterize.com/namespace-name=otterize-tutorial-npol`
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