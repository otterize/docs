You can view mapped traffic by calling the CLI `export` command. It supports multiple output formats such as `intents`
and `JSON`.
The following example shows the CLI output filtered for a namespace (otterize-tutorial-mapper) running three pods: client, client2, server.

<Tabs>
  <TabItem value="plain" label="Plain" default>

1. Run the list command:

   ```shell
   otterize mapper list -n otterize-tutorial-mapper
   ```
2. You should get a result based on your existing traffic looking like this:
   ```shell
   client in namespace otterize-tutorial-mapper calls:
     - server
   client2 in namespace otterize-tutorial-mapper calls:
     - server
   ```

</TabItem>
  <TabItem value="intents" label="Intents" default>

1. Run the export command:

   ```shell
   otterize mapper export -n otterize-tutorial-mapper
   ```
2. You should get a result based on your existing traffic looking like this:
   ```shell
   apiVersion: k8s.k8s.otterize.com/v1
   kind: ClientIntents
   metadata:
     name: client
     namespace: otterize-tutorial-mapper
   spec:
     service:
       name: client
     calls:
       - name: server
   ---
   apiVersion: k8s.k8s.otterize.com/v1
   kind: ClientIntents
   metadata:
     name: server
     namespace: otterize-tutorial-mapper
   spec:
     service:
       name: client2
     calls:
       - name: server
   ```

</TabItem>
  <TabItem value="json" label="JSON">

1. Run the export command:
   ```shell
   otterize mapper export -n otterize-tutorial-mapper --format json
   ```
2. You should get a result based on your existing traffic looking like this:

   ```json
   [
     {
       "kind": "ClientIntents",
       "apiVersion": "k8s.otterize.com/v1alpha1",
       "metadata": {
         "name": "client",
         "namespace": "otterize-tutorial-mapper"
       },
       "spec": {
         "service": {
           "name": "client"
         },
         "calls": [
           {
             "name": "server"
           }
         ]
       }
     },
     {
       "kind": "ClientIntents",
       "apiVersion": "k8s.otterize.com/v1alpha1",
       "metadata": {
         "name": "client",
         "namespace": "otterize-tutorial-mapper"
       },
       "spec": {
         "service": {
           "name": "client"
         },
         "calls": [
           {
             "name": "server"
           }
         ]
       }
     }
   ]
   ```

</TabItem>
</Tabs>