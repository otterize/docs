---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# mTLS

This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.
We will install Otterize, look at a sample deployment and learn how Otterize resolves pod identities.
Next, we will generate credentials and mount them to pods
and wrap it all up by deploying a sample project to practice all concepts in this tutorial.

## Install Otterize

:::note
If you already have Otterize installed on your cluster you can skip this step.
:::

1. To install Otterize run the following commands
   ```shell
   helm repo add otterize-gh https://otterize.github.io/helm-charts
   helm install -n otterize otterize otterize-gh/otterize-kubernetes
   ```
2. Verify all pods are in the `Ready` and `Running` with the following command
   ```
   kubectl get pods -n otterize
   ```
   You should see
   ```bash
   NAME                                                             READY   STATUS    RESTARTS      AGE
   intents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s
   otterize-spire-agent-9s8w7                                       1/1     Running   0             54s
   otterize-spire-agent-np2wf                                       1/1     Running   1 (33s ago)   54s
   otterize-spire-server-0                                          1/1     Running   0             53s
   otterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s
   spire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s
   ```
   :::note
   It can take several minutes until all pods are in the `Ready` and `Running` states.
   :::

## Concepts

### Sample deployment

We will use a JS client and server configured to use mTLS as follows.

1. `Client` snippet
    ```js
    const fs = require('fs');
    const https = require('https');
    
    const options = {
        hostname: 'server.otterize-tutorial-mtls',
        port: 443,
        path: '/hello',
        method: 'GET',
        cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),
        key: fs.readFileSync('/var/otterize/credentials/key.pem'),
        ca: fs.readFileSync('/var/otterize/credentials/bundle.pem')
    }
    
    const req = https.request(
        options,
        res => {
            res.on('data', function (data) {
                console.log(data.toString())
            });
        }
    );
    
    req.end();
    ```
2. `Server` snippet
   ```js
    const https = require(`https`);
    const fs = require(`fs`);
    
    const options = {
        key: fs.readFileSync('/var/otterize/credentials/key.pem'),
        cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),
        ca: fs.readFileSync('/var/otterize/credentials/bundle.pem'),
        requestCert: true
    };
    
    https.createServer(options, (req, res) => {
        console.log(req.method + " " + req.url);
        if (req.url === '/hello') {
            res.writeHead(200);
            res.end(`Hello world mTLS`);
        } else {
            res.end();
        }
    }).listen(443);
   ```

### Configure deployments

To generate credentials for a pod we simply need to update the deployment by annotating it.
Otterize will identify the annotation and follow by generating and mounting the credentials.

```yaml
spec:
  template:
    metadata:
      ...
      annotations:
        # highlight-next-line
        otterize/credentials-secret-name: client-credentials-secret
    spec:
      containers:
        - name: client
          ...
          volumeMounts:
            # highlight-start
            - name: otterize-credentials
              mountPath: /var/otterize/credentials
              readOnly: true
            # highlight-end
      volumes:
        # highlight-start
        - name: otterize-credentials
          secret:
            secretName: client-credentials-secret
        # highlight-end
```

:::tip
You can automate this by templating the process using helm, XXX, YYY. See XXXX.
:::

:::info
Visit the [Behavior](/documentation/credential-operator/behavior) section to view all parameters available as pod
annotation for generating mTLS credentials.
:::

### Otterize pod identity resolution

Otterize resolves pod identities automatically by using their `resource owner` (e.g. deployment) **name** and **
namespace**.

In this example the pod identity will be resolved to `client.otterize-tutorial-mtls`.
:::note
To read more about how Otterize resolves pod identities and how to manually control the process pleas read XXX.
:::

## How to

### Deploy

Our sample project consists of a client and server pods pair communicating with HTTP over mTLS.

1. Deploy the client and server using `kubectl`.
   ```bash
   kubectl create namespace otterize-tutorial-mtls
   kubectl apply -f code-examples/getting-started/mtls
   ```
2. Check that the `client` and server `pods` were deployed
   ```bash
   kubectl get pods -n otterize-tutorial-mtls
   ```
   You should see
   ```
   NAME                      READY   STATUS    RESTARTS   AGE
   client-5689997b5c-grlnt   1/1     Running   0          35s
   server-6698c58cbc-v9n9b   1/1     Running   0          34s
   ```
3. Confirm that the client can successfully call the server using HTTP over mTLS with:

   ```bash
   kubectl logs --tail 1 -n otterize-tutorial-mtls deploy/client
   ```

   You should see the following line

   ```shell
   Hello world mTLS
   ```

### Inspect credentials

We can use openssl to inspect the generated certificates. The certificates are stored as `K8s secrets` and are also
`mounted inside pods`.

1. We will first retrieve them

   <Tabs>
     <TabItem value="secret-direct" label="K8s secret" default>

   ```shell
   kubectl get secret -n otterize-tutorial-mtls client-credentials-secret -o jsonpath='{.data.svid\.pem}' | base64 -d > svid.pem
   ```
   </TabItem>
     <TabItem value="secret-pod" label="K8s pod mount" default>

   ```shell
   kubectl exec -n otterize-tutorial-mtls -it deploy/client -- cat /var/otterize/credentials/svid.pem > svid.pem
   ```

   </TabItem>
   </Tabs>

2. And now we can inspect them

   ```shell
   openssl x509 -in svid.pem -text | head -n 15
   ```

   ```x509
   Certificate:
       Data:
           Version: 3 (0x2)
           Serial Number:
               0b:eb:eb:4d:0e:02:7e:28:93:30:1c:55:26:22:8b:c7
           Signature Algorithm: sha256WithRSAEncryption
           Issuer: C = US, O = SPIRE
           Validity
               Not Before: Aug 24 12:19:57 2022 GMT
               Not After : Sep 23 12:20:07 2022 GMT
           Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-mtls
           Subject Public Key Info:
               Public Key Algorithm: id-ecPublicKey
                   Public-Key: (256 bit)
                   pub:
   ```

## What's next

- Read about how to [integrate](/documentation/sdk-integration/credential-sdk-integration) mTLS into common SDKs and
  frameworks
- Enforce [secure Kafka access](/documentation/getting-started/kafka-mtls) with mTLS

### Teardown

To remove the deployed resources run

```bash
kubectl delete namespace otterize-tutorial-mtls
```