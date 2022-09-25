You can view mapped traffic by calling the CLI `export` command. It supports multiple output formats such as `intents`
and `JSON`.
The following example shows the CLI output filtered for a namespace (otterize-ecom-demo) running three pods: client, client2, server.

<Tabs>
  <TabItem value="plain" label="Plain" default>

1. Run the list command:

   ```shell
   otterize mapper list -n otterize-ecom-demo
   ```
2. You should get a result based on your existing traffic looking like this:
   ```shell
   cartservice in namespace otterize-ecom-demo calls:
     - redis-cart
   checkoutservice in namespace otterize-ecom-demo calls:
     - cartservice
     - currencyservice
     - emailservice
     - paymentservice
     - productcatalogservice
     - shippingservice
   frontend in namespace otterize-ecom-demo calls:
     - adservice
     - cartservice
     - checkoutservice
     - currencyservice
     - productcatalogservice
     - recommendationservice
     - shippingservice
   loadgenerator in namespace otterize-ecom-demo calls:
     - frontend
   recommendationservice in namespace otterize-ecom-demo calls:
     - productcatalogservice   
   ```

</TabItem>
  <TabItem value="intents" label="Intents" default>

1. Run the export command:

   ```shell
   otterize mapper export -n otterize-ecom-demo
   ```
2. You should get a result based on your existing traffic looking like this:
   ```yaml
   apiVersion: k8s.otterize.com/v1alpha1
   kind: ClientIntents
   metadata:
     name: cartservice
     namespace: otterize-ecom-demo
   spec:
     service:
       name: cartservice
     calls:
       - name: redis-cart
         type: HTTP
   ---
   apiVersion: k8s.otterize.com/v1alpha1
   kind: ClientIntents
   metadata:
     name: checkoutservice
     namespace: otterize-ecom-demo
   spec:
     service:
       name: checkoutservice
     calls:
       - name: cartservice
         type: HTTP
       - name: currencyservice
         type: HTTP
       - name: emailservice
         type: HTTP
       - name: paymentservice
         type: HTTP
       - name: productcatalogservice
         type: HTTP
       - name: shippingservice
         type: HTTP
   ---
   apiVersion: k8s.otterize.com/v1alpha1
   kind: ClientIntents
   metadata:
     name: frontend
     namespace: otterize-ecom-demo
   spec:
     service:
       name: frontend
     calls:
       - name: adservice
         type: HTTP
       - name: cartservice
         type: HTTP
       - name: checkoutservice
         type: HTTP
       - name: currencyservice
         type: HTTP
       - name: productcatalogservice
         type: HTTP
       - name: recommendationservice
         type: HTTP
       - name: shippingservice
         type: HTTP
   ---
   apiVersion: k8s.otterize.com/v1alpha1
   kind: ClientIntents
   metadata:
     name: loadgenerator
     namespace: otterize-ecom-demo
   spec:
     service:
       name: loadgenerator
     calls:
       - name: frontend
         type: HTTP
   ---
   apiVersion: k8s.otterize.com/v1alpha1
   kind: ClientIntents
   metadata:
     name: recommendationservice
     namespace: otterize-ecom-demo
   spec:
     service:
       name: recommendationservice
     calls:
       - name: productcatalogservice
         type: HTTP
   ```

</TabItem>
  <TabItem value="json" label="JSON">

1. Run the export command:
   ```shell
   otterize mapper export -n otterize-ecom-demo --format json
   ```
2. You should get a result based on your existing traffic looking like this:
   ```json
   [
     {
       "kind": "ClientIntents",
       "apiVersion": "k8s.otterize.com/v1alpha1",
       "metadata": {
         "name": "cartservice",
         "namespace": "otterize-ecom-demo",
         "creationTimestamp": null
       },
       "spec": {
         "service": {
           "name": "cartservice"
         },
         "calls": [
           {
             "type": "HTTP",
             "name": "redis-cart"
           }
         ]
       }
     },
     {
       "kind": "ClientIntents",
       "apiVersion": "k8s.otterize.com/v1alpha1",
       "metadata": {
         "name": "checkoutservice",
         "namespace": "otterize-ecom-demo",
         "creationTimestamp": null
       },
       "spec": {
         "service": {
           "name": "checkoutservice"
         },
         "calls": [
           {
             "type": "HTTP",
             "name": "cartservice"
           },
           {
             "type": "HTTP",
             "name": "currencyservice"
           },
           {
             "type": "HTTP",
             "name": "emailservice"
           },
           {
             "type": "HTTP",
             "name": "paymentservice"
           },
           {
             "type": "HTTP",
             "name": "productcatalogservice"
           },
           {
             "type": "HTTP",
             "name": "shippingservice"
           }
         ]
       }
     },
     {
       "kind": "ClientIntents",
       "apiVersion": "k8s.otterize.com/v1alpha1",
       "metadata": {
         "name": "frontend",
         "namespace": "otterize-ecom-demo",
         "creationTimestamp": null
       },
       "spec": {
         "service": {
           "name": "frontend"
         },
         "calls": [
           {
             "type": "HTTP",
             "name": "adservice"
           },
           {
             "type": "HTTP",
             "name": "cartservice"
           },
           {
             "type": "HTTP",
             "name": "checkoutservice"
           },
           {
             "type": "HTTP",
             "name": "currencyservice"
           },
           {
             "type": "HTTP",
             "name": "productcatalogservice"
           },
           {
             "type": "HTTP",
             "name": "recommendationservice"
           },
           {
             "type": "HTTP",
             "name": "shippingservice"
           }
         ]
       }
     },
     {
       "kind": "ClientIntents",
       "apiVersion": "k8s.otterize.com/v1alpha1",
       "metadata": {
         "name": "loadgenerator",
         "namespace": "otterize-ecom-demo",
         "creationTimestamp": null
       },
       "spec": {
         "service": {
           "name": "loadgenerator"
         },
         "calls": [
           {
             "type": "HTTP",
             "name": "frontend"
           }
         ]
       }
     },
     {
       "kind": "ClientIntents",
       "apiVersion": "k8s.otterize.com/v1alpha1",
       "metadata": {
         "name": "recommendationservice",
         "namespace": "otterize-ecom-demo",
         "creationTimestamp": null
       },
       "spec": {
         "service": {
           "name": "recommendationservice"
         },
         "calls": [
           {
             "type": "HTTP",
             "name": "productcatalogservice"
           }
         ]
       }
     }
   ]
   ```

</TabItem>
</Tabs>