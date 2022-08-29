---
sidebar_position: 3
---


# Network Policies

Get started with Otterize.

```mdx-code-block
import TOCInline from '@theme/TOCInline'

<TOCInline toc={toc} />
```

## Install Otterize (enable Network Policies)

Module

## Concepts

### Otterize pod identity resolution

Otterize resolves pod identities automatically by using their `resource owner` (e.g. deployment) **name** and **
namespace**.

In this example the pod identity will be resolved to `client.tutorial`.
:::note
To read more about how Otterize resolves pod identities and how to manually control the process pleas read XXX.
:::



## Demo
### Deploy sample project

Let's add traffic to the cluster and see how the Network Policies can be easily configured on it with Otterize.
You can do that by deploying our example which consists of three pods: client-allowed, client-blocked and server,
communicating over HTTP.

```shell
kubectl create namespace otterize-tutorial-network-policies && \
kubectl apply -n otterize-tutorial-network-policies -f code-examples/getting-started/tutorials/network-policies
```
<details>
<summary>Output</summary>

```shell
namespace/otterize-tutorial-network-policies created
deployment.apps/client-allowed created
deployment.apps/client-blocked created
intents.otterize.com/client-allowed created
deployment.apps/server created
service/server created
```
</details>


### Apply intents

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

### Inspect generated Network Policies
Look at the generated network policies that have been applied
```shell
kubectl get networkpolicies -n lab
```
```shell
NAMESPACE   NAME                            POD-SELECTOR                                AGE
lab         access-to-zookeeper-from-kafka  otterize/server=zookeeper-lab-c7544928bffa  116m
lab         access-to-kafka-from-client     otterize/server=kafka-lab-05a2278fbe7a      4m17s
```
Look at the generated pod labels
```shell
kubectl get pod -n lab client-66b6c48dd5-s8xs9 --show-labels
```
```shell
NAME                      READY   STATUS    RESTARTS    AGE     LABELS
client-66b6c48dd5-s8xs9    1/1     Running   0           7d1h    app=client,otterize/server=client-lab-05a2278fbe7a
```
### Teardown

To remove the deployed resources run

```bash
kubectl delete namespace otterize-tutorial-mapper
```

## Test what’s protected now relative to scope:
:::caution
To expand
:::
1. Client-server scope:
    - If there were other clients to this server, see they’re now failing
2. Bootstrapped scope:
    - See if something that was not captured in the traffic is now failing
3. All scopes:
    - Omit a client intents file, apply intents again, and see the client is failing
    - Change a service to make an undeclared call and redeploy, see it fails
    - Create a test service making an undeclared call, deploy, see it fails



