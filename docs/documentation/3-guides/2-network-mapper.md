---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Network Mapper

The Network Mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you
through installing Otterize, mapping traffic and tracking changes.

## Install Network Mapper

```bash
git clone git@github.com:otterize/network-mapper.git
helm install -n otterize mapper helm/ -f helm/values.yaml
cd src/cli/cmd/
go build -o /usr/local/bin/otterize
```

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

1. Run the list command:

   ```shell
   otterize intents list
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
   otterize intents export
   ```
2. You should get a result based on your existing traffic looking like this:
   ```shell title="Output"
   apiVersion: k8s.k8s.otterize.com/v1
   kind: ClientIntents
   metadata:
     name: kafka
   spec:
     service:
       name: kafka
     calls:
       - name: zookeeper
   ---
   apiVersion: k8s.k8s.otterize.com/v1
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
   otterize intents export --format json
   ```
2. You should get a result based on your existing traffic looking like this:

```json
[
   {
      "kind": "ClientIntents",
      "apiVersion": "k8s.k8s.otterize.com/v1",
      "metadata": {
         "name": "checkout"
      },
      "spec": {
         "service": {
            "name": "checkout",
            "calls": [
               {
                  "name": "kafka"
               }
            ]
         }
      }
   },
   {
      "kind": "ClientIntents",
      "apiVersion": "k8s.k8s.otterize.com/v1",
      "metadata": {
         "name": "kafka"
      },
      "spec": {
         "service": {
            "name": "kafka",
            "calls": [
               {
                  "name": "zookeeper"
               }
            ]
         }
      }
   }
]
```

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
   kubectl create namespace otterize-tutorial-mapper
   kubectl apply -n otterize-tutorial-mapper -f code-examples/getting-started/network-mapper
   ```
2. Check that the `client` and server `pods` were deployed
   ```bash
   kubectl get pods -n otterize-tutorial-mapper
   ```
   You should see
   ```
   NAME                      READY   STATUS    RESTARTS   AGE
   client-756f7677f8-d6qdq   1/1     Running   0          45s
   server-6698c58cbc-ssxvx   1/1     Running   0          45s
   ```
3. Export the updated observed intents.
   ```shell
   otterize intents list
   ```
   You will now see the client and server pods communication in addition
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

## What's next

<!-- [Intents Operator](/documentation/intents-operator): -->
Now that we observed cluster intents we can use them with the Intents Operator.

- Configure [Network Policies](/documentation/getting-started/network-policies)
- Configure secure access for Kafka

### Teardown

To remove the deployed resources run

```bash
kubectl delete namespace otterize-tutorial-mapper
```