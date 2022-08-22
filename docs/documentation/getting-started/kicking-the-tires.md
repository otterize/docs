---
sidebar_position: 2
---


# Kicking the tires

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

```mdx-code-block
import CLI from '@site/src/components/Install/intents-observer/CLI'

<CLI  />
```

</TabItem>
  <TabItem value="helm" label="Helm">

```mdx-code-block
import Helm from '@site/src/components/Install/intents-observer/Helm'

<Helm  />
```

</TabItem>
</Tabs>

## Show traffic as intents

<Tabs>
  <TabItem value="plain" label="Plain" default>

```shell
otterize observer export
```
```shell
kafka calls:
  - zookeeper

client calls:
  - kafka
```

</TabItem>
  <TabItem value="intents" label="Intents" default>

```shell
otterize observer export -o intents
```
```yaml
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
  name: client
spec:
  service:
    name: client
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

## Change traffic -> Sniff&Diff
Let's add traffic to the cluster and see how the Intents Observer tracks it.
Connect to the client pod.
```shell
kubectl exec --tty -i client --namespace lab -- bash
```
Initiate a connection to the zookeeper pod.
```shell
nc zookeeper 2181
```
And now export the updated observed intents.
```shell
otterize observer export
```
```shell
kafka calls:
  - zookeeper

client calls:
  - kafka
  - zookeeper
```
## What's next
<!-- [Intents Operator](/documentation/intents-operator): -->
Now that we observed cluster intents we can use them with the Intents Operator.
- Configure [Network Policies](/documentation/getting-started/network-policies)
- Configure secure access for Kafka