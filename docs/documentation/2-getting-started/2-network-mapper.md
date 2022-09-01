---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial for Network Mapper

The Network Mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you
through installing Otterize, mapping traffic and tracking changes.

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

:::danger
Decide if we show mapped traffic by namespace or not. If not, then the explanation about pod identities will confuse
users as the output ignores namespace.
:::

## How to


### Show mapped traffic

You can view mapped traffic by calling the CLI `export` command. It supports multiple output formats such as `intents`
and `JSON`.
The following example shows the CLI output for a cluster running three pods: checkout, kafka, zookeeper.

You should see similar structured results on your cluster.

<Tabs>
  <TabItem value="plain" label="Plain" default>

1. Run the export command:

```shell
otterize observer export
```
2. You should get a result based on your existing traffic looking like this:
```shell
kafka calls:
  - zookeeper

checkout calls:
  - kafka
```

</TabItem>
  <TabItem value="intents" label="Intents" default>

1. Run the export command:

```shell
otterize observer export -o intents
```
2. You should get a result based on your existing traffic looking like this:

```shell title="Output"
apiVersion: k8s.otterize.com/v1
kind: ClientIntents
metadata:
  name: kafka
spec:
  service:
    name: kafka
    calls:
      - name: zookeeper
---
apiVersion: k8s.otterize.com/v1
kind: ClientIntents
metadata:
  name: checkout
spec:
  service:
    name: checkout
    calls:
      - name: kafka
```

</TabItem>
  <TabItem value="json" label="JSON">

1. Run the export command:

```shell
otterize observer export -o json
```
2. You should get a result based on your existing traffic looking like this:

</TabItem>
</Tabs>

:::info
See the [Network Mapper documentation](/documentation/network-mapper/intro) for more details about the CLI.
:::

### Change traffic -> Sniff&Diff

One of the benefits for using the network mapper is the ability to track changes over time for communication within your
cluster.
Let's add traffic to the cluster and see how the Network Mapper tracks it. You can do that by deploying our example
which consists of two pods: client and server, communicating over HTTP.

1. Deploy example:
```shell
kubectl create namespace otterize-tutorial-mapper && \
kubectl apply -n otterize-tutorial-mapper -f code-examples/getting-started/network-mapper
```
2. Export the updated observed intents.
```shell
otterize observer export
```
3. you will now see the client and server pods communication in addition
   to the previously observed traffic.
```shell
# highlight-start
client calls:
  - server
# highlight-end

kafka calls:
  - zookeeper

checkout calls:
  - kafka
```

### Teardown

To remove the deployed resources run

```bash
kubectl delete namespace otterize-tutorial-mapper
```

## What's next

<!-- [Intents Operator](/documentation/intents-operator): -->
Now that we observed cluster intents we can use them with the Intents Operator.

- Configure [Network Policies](/documentation/getting-started/network-policies)
- Configure secure access for Kafka