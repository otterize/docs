You can view mapped traffic by calling the CLI `export` command. It supports multiple output formats such as `intents`
and `JSON`.
The following example shows the CLI output for a cluster running three pods: checkout, kafka, zookeeper.

You should see similar structured results on your cluster.

<Tabs>
  <TabItem value="plain" label="Plain" default>

1. Run the list command:

   ```shell
   otterize mapper list
   ```
2. You should get a result based on your existing traffic looking like this:
   ```shell
   checkoutservice in namespace ecom-demo calls:
     - orderservice
   
   orderservice in namespace ecom-demo calls:
     - kafka
   ```

</TabItem>
  <TabItem value="intents" label="Intents" default>

1. Run the export command:

   ```shell
   otterize mapper export
   ```
2. You should get a result based on your existing traffic looking like this:
   ```shell
   apiVersion: k8s.k8s.otterize.com/v1
   kind: ClientIntents
   metadata:
     name: checkoutservice
     namespace: ecom-demo
   spec:
     service:
       name: checkoutservice
     calls:
       - name: orderservice
   ---
   apiVersion: k8s.k8s.otterize.com/v1
   kind: ClientIntents
   metadata:
     name: orderservice
     namespace: ecom-demo
   spec:
     service:
       name: orderservice
     calls:
       - name: kafka
   ```

</TabItem>
  <TabItem value="json" label="JSON">

1. Run the export command:
   ```shell
   otterize mapper export --format json
   ```
2. You should get a result based on your existing traffic looking like this:

   ```json
   [
     {
       "kind": "ClientIntents",
       "apiVersion": "k8s.otterize.com/v1alpha1",
       "metadata": {
         "name": "checkoutservice",
         "namespace": "ecom-demo"
       },
       "spec": {
         "service": {
           "name": "checkoutservice"
         },
         "calls": [
           {
             "name": "orderservice"
           }
         ]
       }
     },
     {
       "kind": "ClientIntents",
       "apiVersion": "k8s.otterize.com/v1alpha1",
       "metadata": {
         "name": "orderservice",
         "namespace": "ecom-demo"
       },
       "spec": {
         "service": {
           "name": "orderservice"
         },
         "calls": [
           {
             "name": "kafka"
           }
         ]
       }
     }
   ]
   ```

</TabItem>
</Tabs>