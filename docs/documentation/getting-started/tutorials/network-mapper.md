---
sidebar_position: 2
---

# Network Mapper

Get started with Otterize.

```mdx-code-block
import TOCInline from '@theme/TOCInline'

<TOCInline toc={toc} />
```

## Enable the Intents Observer

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="cli" label="Otterize CLI" default>

```bash
otterize observer enable
```

</TabItem>
  <TabItem value="helm" label="Helm">

```bash
helm repo add
helm install
```

</TabItem>
</Tabs>

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

## Demo

### Show mapped traffic

You can view mapped traffic by calling the CLI `export` command. It supports multiple output formats such as `intents`
and `JSON`.
The following example shows the CLI output for a cluster running three pods: checkout, kafka, zookeeper.

You should see similar structured results on your cluster.

<Tabs>
  <TabItem value="plain" label="Plain" default>

```shell
otterize observer export
```

```shell title="Output"
kafka calls:
  - zookeeper

checkout calls:
  - kafka
```

</TabItem>
  <TabItem value="intents" label="Intents" default>

```shell
otterize observer export -o intents
```

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

```shell
otterize observer export -o yaml
```

</TabItem>
</Tabs>

### Change traffic -> Sniff&Diff

One of the benefits for using the network mapper is the ability to track changes over time for communication within your
cluster.
Let's add traffic to the cluster and see how the Intents Observer tracks it. You can do that by deploying our example
which
consists of two pods: client and server, communicating over HTTP.

```shell
kubectl create namespace otterize-tutorial-mapper && \
kubectl apply -n otterize-tutorial-mapper -f code-examples/getting-started/tutorials/network-mapper
```

```shell title="Output"
namespace/otterize-tutorial-mapper created
deployment.apps/client created
deployment.apps/server created
service/server created
```

And now export the updated observed intents. There you will now see the client and server pods communication in addition
to the previously observed traffic.

```shell
otterize observer export
```

```shell title="Output"
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

```shell title="Output"
namespace "otterize-tutorial-mapper" deleted
```

## What's next

<!-- [Intents Operator](/documentation/intents-operator): -->
Now that we observed cluster intents we can use them with the Intents Operator.

- Configure [Network Policies](/documentation/getting-started/network-policies)
- Configure secure access for Kafka