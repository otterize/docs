---
sidebar_position: 4
title: IBAC for Kafka
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Recap: controlling access to Kafka (incl. mTLS or tokens, users and ACLs, different ports)

## Configuring Kafka for secure access

To configure kafka for secure access we have multiple areas we need to modify in its configuration to prepare for secure
access and another where we add annotations to let Otterize know it needs to generate credentials for secure access.

The following example shows how to configure bitnami's popular
kafka [chart](https://github.com/bitnami/charts/tree/master/bitnami/kafka):

:::note
Though SSL was replaced by TLS, Kafka still uses the term SSL internally.
:::

1. Allow Otterize to manage Kafka by adding it as a super user wtih:
   ```yaml
   superUsers: "User:CN=kafka.kafka,O=SPIRE,C=US;User:CN=intents-operator.otterize,O=SPIRE,C=US"
   ```
3. Configure its [listeners](https://www.confluent.io/blog/kafka-listeners-explained/) to use SSL
   ```yaml
   listeners:
     - "CLIENT://:9092"
     - "INTERNAL://:9093"
   advertisedListeners:
     - "CLIENT://:9092"
     - "INTERNAL://:9093"
   listenerSecurityProtocolMap: "INTERNAL:SSL,CLIENT:SSL"
   ```

4. Set the authentication parameters to
    - Use mTLS
    - Having the credentials stored in a Java KeyStore (JKS) format stored in a K8s secret called `kafka-tls-secret`
      with a password set to `password`.
    - Deny anonymous access
   ```yaml
   auth: 
     clientProtocol: mtls
     interBrokerProtocol: mtls
     tls:
       type: jks
       existingSecrets:
         - kafka-tls-secret
       password: password
   authorizerClassName: kafka.security.authorizer.AclAuthorizer
   allowEveryoneIfNoAclFound: true  
   ```
5. Add pod annotations to let Otterize know it needs to generate the JKS credentials and store them at the specified K8s
   secret according to bitnami's
   chart [specifications](https://github.com/bitnami/charts/tree/master/bitnami/kafka#enable-security-for-kafka-and-zookeeper) :
   ```yaml
   podAnnotations:
     otterize/cert-type: jks
     otterize/tls-secret-name: kafka-tls-secret
     otterize/truststore-file-name: kafka.truststore.jks
     otterize/keystore-file-name: kafka-keystore.jks
     otterize/dns-names: "kafka-0.kafka-headless.kafka.svc.cluster.local,kafka.kafka.svc.cluster.local"
     otterize/cert-ttl: "31536000" # 1 year
   ```

<details>
<summary>Expand to see the complete YAML of this example...</summary>

```yaml
superUsers: "User:CN=kafka.kafka,O=SPIRE,C=US;User:CN=intents-operator.otterize,O=SPIRE,C=US"
listeners:
  - "CLIENT://:9092"
  - "INTERNAL://:9093"
advertisedListeners:
  - "CLIENT://:9092"
  - "INTERNAL://:9093"
listenerSecurityProtocolMap: "INTERNAL:SSL,CLIENT:SSL"
auth:
  clientProtocol: mtls
  interBrokerProtocol: mtls
  tls:
    type: jks
    existingSecrets:
      - kafka-tls-secret
    password: password
authorizerClassName: kafka.security.authorizer.AclAuthorizer
allowEveryoneIfNoAclFound: true
podAnnotations:
  otterize/cert-type: jks
  otterize/tls-secret-name: kafka-tls-secret
  otterize/truststore-file-name: kafka.truststore.jks
  otterize/keystore-file-name: kafka-keystore.jks
  otterize/dns-names: "kafka-0.kafka-headless.kafka.svc.cluster.local,kafka.kafka.svc.cluster.local"
  otterize/cert-ttl: "31536000" # 1 year
```

</details>

### Testing secure connection to Kafka

You can set up an interactive session that securely connects to Kafka by deploying a pod configured to get credentials
and using the popular [kafka-console-producer](https://kafka.apache.org/quickstart#quickstart_send) and
[kafka-console-consumer](https://kafka.apache.org/quickstart#quickstart_consume) scripts:

<details>
<summary>Expand to see the details of this example...</summary>
<Tabs>
<TabItem value="namespace.yaml" label="namespace.yaml" default>

   ```yaml
   {@include: ../../../static/code-examples/kafka-mtls/interactive/namespace.yaml}
   ```

</TabItem>
<TabItem value="interactive.yaml" label="interactive.yaml" default>

   ```yaml
   {@include: ../../../static/code-examples/kafka-mtls/interactive/interactive-deployment.yaml}
   ```
</TabItem>
<TabItem value="interactive-configmap.yaml" label="interactive-configmap.yaml" default>

   ```yaml
   {@include: ../../../static/code-examples/kafka-mtls/interactive/interactive-configmap.yaml}
   ```

</TabItem>
</Tabs>
</details>

1. Deploy a pod configured for the interactive session connecting to Kafka
    ```bash
    kubectl apply -f https://docs.otterize.com/code-examples/kafka-mtls/shell/all.yaml
    ```
2. Check that the `pod` was deployed
   ```bash
   kubectl get pods -n otterize-tutorial-kafka-mtls -l app=interactive
   ```
   You should see
   ```
   NAME                           READY   STATUS    RESTARTS   AGE
   interactive-5568ff58ff-84ksc   1/1     Running   0          8s
   ```

3. Let's open two interactive terminal windows - one for the producer and one for the consumer with so we can see
   the messages sent and received in real time:

   ```bash title="Producer terminal"
   kubectl exec -n otterize-tutorial-kafka-mtls -it deploy/interactive -- bash \
   /opt/bitnami/kafka/bin/kafka-console-producer.sh \
   --bootstrap-server kafka.kafka:9092 \
   -topic mytopic \
   --producer.config /app/client.properties
   ```

   ```bash title="Consumer terminal"
   kubectl exec -n otterize-tutorial-kafka-mtls -it deploy/interactive -- bash \
   /opt/bitnami/kafka/bin/kafka-console-consumer.sh \
   --bootstrap-server kafka.kafka:9092 \
   -topic mytopic \
   --consumer.config /app/client.properties
   ```
4. Write any text you wish on the **producer terminal**, send it with an **enter** and you will see the messages appear
   on the
   ```bash title="Producer terminal"
   >Hello there consumer, this is the producer!
   >
   ```
   ```bash title="Consumer terminal"
   Hello there consumer, this is the producer!
   ```

## Setting security scope via…

## …

## Practical notes

### Credentials

Kafka expects credentials to be stored in teh Java Keystore format.

### Inspecting Kafka credentials - Keystore

1. Retrieve the Keystore with
    ```bash
    kubectl get secret -n kafka kafka-tls-secret -o jsonpath='{.data.kafka-keystore\.jks}' | base64 -d > kafka-keystore.jks
    ```
2. Extract the certificate from the store
    ```bash
    keytool -storepass password -keystore kafka-keystore.jks -alias pkey -exportcert -rfc > server.pem
    ```
3. Inspect it with
    ```bash
    openssl x509 -in server.pem -text
    ```
   You should see
    ```
    Certificate:
        Data:
            Version: 3 (0x2)
            Serial Number:
                06:3c:6b:b9:39:33:74:44:2d:e6:66:72:4b:0c:a0:f4
            Signature Algorithm: sha256WithRSAEncryption
            Issuer: C = US, O = SPIRE
            Validity
                Not Before: Sep  9 21:50:24 2022 GMT
                Not After : Sep  9 21:53:34 2022 GMT
            Subject: C = US, O = SPIRE, CN = kafka.kafka
            ... truncated
    
                X509v3 Subject Alternative Name:
                    DNS:kafka.kafka, DNS:kafka-0.kafka-headless.kafka.svc.cluster.local, DNS:kafka.kafka.svc.cluster.local, URI:spiffe://example.org/otterize/namespace/kafka/service/kafka 
   ... truncated
   ```

### Inspecting Kafka credentials - Truststore

1. Retrieve the Truststore with
    ```bash
    kubectl get secret -n kafka kafka-tls-secret -o jsonpath='{.data.kafka\.truststore\.jks}' | base64 -d > kafka.truststore.jks
    ```
2. Extract the certificate from the store
    ```bash
    keytool -storepass password -keystore kafka.truststore.jks -alias ca-0 -exportcert -rfc > bundle.pem
    ```
3. Inspect it with
    ```bash
    openssl x509 -in bundle.pem -text
    ```
   You should see
    ```
   Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 0 (0x0)
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C = US, O = SPIRE
        Validity
            Not Before: Sep  6 09:59:21 2022 GMT
            Not After : Sep  5 09:59:31 2025 GMT
        Subject: C = US, O = SPIRE
   ... truncated
   ```

### Inspecting client credentials

1. Retrieve the client credentials with
    ```bash
    kubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.svid\.pem}' | base64 -d > svid.pem
    ```
2. Inspect with
    ```bash
    openssl x509 -in svid.pem -text
    ```
   You should see
    ```
    Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            e3:81:42:74:5e:c4:d8:d9:cd:97:16:72:23:2e:90:62
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C = US, O = SPIRE
        Validity
            Not Before: Sep  9 21:06:52 2022 GMT
            Not After : Sep 10 21:07:02 2022 GMT
        Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-kafka-mtls
        ... truncated
            X509v3 Subject Alternative Name:
                DNS:client.otterize-tutorial-kafka-mtls, URI:spiffe://example.org/otterize/namespace/otterize-tutorial-kafka-mtls/service/client 
   ... truncated
   ```

### Validating client credentials

1. Retrieve the client credentials with
   ```bash
   kubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.svid\.pem}' | base64 -d > svid.pem
   kubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.key\.pem}' | base64 -d > key.pem
   kubectl get secret -n otterize-tutorial-kafka-mtls client-credentials-secret -o jsonpath='{.data.bundle\.pem}' | base64 -d > bundle.pem
   ```
2. Validate that the key belongs to the certificate be comparing their public keys
   ```bash
   openssl pkey -pubout -in key.pem  | openssl md5
   ```
   ```bash
   openssl x509 -noout -pubkey -in svid.pem | openssl md5
   ```
   If their public keys match you should see the same results for both executions, in the following format
   ```bash
   (stdin)= e01e28be4e3e11a70cdebe327e1aabc9
   ```
3. Verify that the certificates belongs to the bundle with
   ```bash
   openssl verify -CAfile bundle.pem svid.pem
   ```
   You should see
   ```bash
   svid.pem: OK
   ```

## Avoiding drift

## Granularities of access *(incl. via network policies, via authN-only, & topic-level)*