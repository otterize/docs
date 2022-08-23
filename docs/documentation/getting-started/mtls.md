---
sidebar_position: 4
---


# Deploy mTLS

Get started with Otterize.

```mdx-code-block
import TOCInline from '@theme/TOCInline'

<TOCInline toc={toc} />
```

## Install Otterize (enable mTLS)
Module

## Pick a scope
1. Choose existing deployments
2. Deploy and use demo client/server provided here (link to github)

## Annotate deployments
To generate credentials for a pod we need to
1. Annotate the pod to trigger credential generation.
```yaml
annotations:
  otterize/credentials-secret-name: client-credentials-secret
```
2. Mount credentials to pod.
```yaml
spec:
  containers:
    - name: client
      ...
      volumeMounts:
        - name: otterize-tls
          mountPath: /etc/otterize
          readOnly: true
  volumes:
    - name: otterize-tls
      secret:
        secretName: client-credentials-secret
```
<details>
<summary>Complete YAML</summary>

```yaml title="code-examples/getting-started/deploy-mtls/client.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: client
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
          image: alpine/openssl
          command: [ "/bin/sh", "-c", "--" ]
          args: [ "trap : TERM INT; sleep infinity & wait" ]
          volumeMounts:
            - name: otterize-credentials
              mountPath: /etc/otterize
              readOnly: true
      volumes:
        - name: otterize-credentials
          secret:
            secretName: client-credentials-secret
```
</details>

:::tip
Visit the [Behavior](/documentation/credential-operator/behavior) section to view all parameters available as pod annotation for generating mTLS credentials.
:::


## Apply deployment 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="local" label="Local" default>

```shell
kubectl apply -f client.yaml
```
</TabItem>
  <TabItem value="github" label="GitHub">

```shell
kubectl apply -f https://github.com/otterize/docs/blob/main/code-examples/getting-started/deploy-mtls/client.yaml
```
</TabItem>
</Tabs>

## What's next
- Read about how to integrate mTLS into common SDKs and frameworks
- Enforce secure Kafka access

## Testing - optional
Following are examples for how you can test the generated credentials

### Inspect the certificate
<Tabs>
  <TabItem value="secret-direct" label="K8s secret" default>

```shell
kubectl get secret client-credentials-secret -o jsonpath='{.data.svid\.pem}' | base64 -d > svid.pem
openssl x509 -in /etc/otterize/svid.pem -text | head -n 15
```
```x509 title="Result"
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            66:3d:ea:77:70:85:84:64:da:cd:50:6d:43:32:ab:2e
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C = US, O = SPIFFE
        Validity
            Not Before: Aug 17 08:36:18 2022 GMT
            Not After : Aug 17 09:36:28 2022 GMT
        Subject: C = US, O = SPIRE, CN = tomer-client.tomer-test
        Subject Public Key Info:
            Public Key Algorithm: id-ecPublicKey
                Public-Key: (256 bit)
                pub:
```

</TabItem>
  <TabItem value="secret-pod" label="K8s pod mount" default>

```shell
kubectl exec -it deploy/client -- sh
```
```shell
openssl x509 -in svid.pem -text | head -n 15
```
```x509 title="Result"
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            66:3d:ea:77:70:85:84:64:da:cd:50:6d:43:32:ab:2e
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C = US, O = SPIFFE
        Validity
            Not Before: Aug 17 08:36:18 2022 GMT
            Not After : Aug 17 09:36:28 2022 GMT
        Subject: C = US, O = SPIRE, CN = tomer-client.tomer-test
        Subject Public Key Info:
            Public Key Algorithm: id-ecPublicKey
                Public-Key: (256 bit)
                pub:
```

</TabItem>
</Tabs>

### Test mTLS
### Test unsecured access
