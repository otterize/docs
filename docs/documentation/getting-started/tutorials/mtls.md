---
sidebar_position: 2
---

# Deploy mTLS

This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.
We will install Otterize, look at a sample deployment and learn how Otterize resolves pod identities.
Next, we will generate credentials and mount them to pods
and wrap it all up by deploying a sample project to practice all concepts in this tutorial.

```mdx-code-block
import TOCInline from '@theme/TOCInline'

<TOCInline toc={toc} />
```

## Install Otterize (enable mTLS)

Module

## Concepts

### Sample deployment

We will use the following deployment as a base for the demo

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: client
  namespace: tutorial
spec:
  ...
  template:
    ...
    spec:
      containers:
          - name: client
            image: python
```

### Otterize pod identity resolution

Otterize resolves pod identities automatically by using their `resource owner` (e.g. deployment) **name** and **
namespace**.

In this example the pod identity will be resolved to `client.tutorial`.
:::note
To read more about how Otterize resolves pod identities and how to manually control the process pleas read XXX.
:::

### Configure deployments

To generate credentials for a pod we simply need to update the deployment by annotating it to generate and mount the
credentials.

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

<details>
<summary>Complete YAML</summary>

```yaml title="code-examples/getting-started/deploy-mtls/client.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: client
  namespace: tutorial
spec:
  selector:
    matchLabels:
      app: client
  template:
    metadata:
      labels:
        app: client
      annotations:
        otterize/credentials-secret-name: client-credentials-secret
    spec:
      containers:
        - name: client
          image: python
          volumeMounts:
            - name: otterize-credentials
              mountPath: /var/otterize/credentials
              readOnly: true
      volumes:
        - name: otterize-credentials
          secret:
            secretName: client-credentials-secret
```

</details>

:::tip
You can automate this by templating the process using helm, XXX, YYY. See XXXX.
:::

:::info
Visit the [Behavior](/documentation/credential-operator/behavior) section to view all parameters available as pod
annotation for generating mTLS credentials.
:::

## Demo

### Deploy sample project

Our sample project consists of a client and server pods pair communicating with HTTP over mTLS.

```bash
kubectl create namespace otterize-tutorial-mtls && \
kubectl apply -n otterize-tutorial-mtls -f code-examples/getting-started/tutorials/deploy-mtls
```
```shell title="Output"
namespace/otterize-tutorial-mtls created
configmap/client-py created
deployment.apps/client created
service/server created
configmap/server-go created
deployment.apps/server created
```

### Test client and server

The sample provides an HTTP GO server and Python client to showcase how the mTLS certificates can be used.
You can run them as follows.

```bash title="go run server.go" footer="g"
kubectl exec -n otterize-tutorial-mtls -it deploy/server -- go run /app/server.go
```
```shell title="Output"
Waiting for mTLS connections
GET /hello mTLS
```

```bash title="python client.py"
kubectl exec -n otterize-tutorial-mtls -it deploy/client -- python /app/client.py
```
```shell title="Output"
Hello, world over mTLS!
```

### Teardown

To remove the deployed resources run

```bash
kubectl delete namespace otterize-tutorial-mtls
```
```shell title="Output"
namespace "otterize-tutorial-mtls" deleted
```

## What's next

- Read about how to integrate mTLS into common SDKs and frameworks
- Enforce secure Kafka access

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Optional

<details>

Following are examples for how you can test the generated credentials

### Inspect the certificate

We can use openssl to inspect the generated certificates. The certificates are stored as K8s secrets and are also
mounted inside pods.

We will first retrieve them

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

And now we can inspect them

```shell
openssl x509 -in svid.pem -text | head -n 15
```

```x509 title="Output"
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

</details>