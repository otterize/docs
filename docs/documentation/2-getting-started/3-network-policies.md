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

Module

## Concepts

### Otterize pod identity resolution

Otterize resolves pod identities automatically by using their `resource owner` (e.g. deployment) **name** and **
namespace**.

In this example the pod identity will be resolved to `client.tutorial`.
:::note
To read more about how Otterize resolves pod identities and how to manually control the process pleas read XXX.
:::

## How to

### Apply intents

Let's add traffic to the cluster and see how the Network Policies can be easily configured on it with Otterize.
You can do that by deploying our example which consists of two pods: client and server,
communicating over HTTP. At first the client is blocked from communicating with the server as no `Network Policy` allows
it.

1. Deploy the client and server using `kubectl`.

   ```shell
   kubectl create namespace otterize-demo-npol && \
   kubectl apply -n otterize-demo-npol -f code-examples/getting-started/tutorials/network-policies
   ```

2. Check that `client` _cannot_ connect to `server`:
   ```bash
   kubectl logs --tail 1 -n otterize-demo-npol deploy/client
   ```

   You should see the following line

   ```
   curl timed out
   ```

3. Allow traffic between the pods using the intents file:

   <Tabs>
     <TabItem value="otterize" label="Otterize" default>

   ```shell
   otterize apply intents
   ```

   </TabItem>
     <TabItem value="kubectl" label="Kubectl">

   ```shell
   kubectl apply -f intents.yaml
   ```

   </TabItem>
   </Tabs>

4. Check that `client` is now able to connect to `server`:
   ```bash
   kubectl logs --tail 1 -n otterize-demo-npol deploy/client
   ```

   You should see the following line

   ```
   "hello world"
   ```

:::tip
To learn more about how Otterize + Network Policies work see
details [here](/documentation/intents-operator/network-policies/in-depth)
:::

### Teardown

To remove the deployed resources run

```bash
kubectl delete namespace otterize-tutorial-mapper
```

## What's next

<!-- [Intents Operator](/documentation/intents-operator): -->

- Configure [Network Policies](/documentation/intents-operator/network-policies) for your cluster
- Explore the [Network Mapper](/documentation/getting-started/network-mapper) to help you bootstrap intents you can apply as Network Policies.