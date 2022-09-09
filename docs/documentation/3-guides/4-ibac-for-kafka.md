---
sidebar_position: 4
title: IBAC for Kafka
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Recap: controlling access to Kafka (incl. mTLS or tokens, users and ACLs, different ports)

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
            Subject Public Key Info:
                Public Key Algorithm: id-ecPublicKey
                    Public-Key: (256 bit)
                    pub:
                        04:3c:07:ed:ab:17:bd:ab:bb:c1:7c:17:b3:01:59:
                        c7:b8:98:f3:61:d8:22:ff:d0:c5:ee:ec:43:54:fe:
                        de:7b:ab:cf:a9:7b:1f:20:6b:94:7c:fe:e4:65:22:
                        ee:75:0f:25:60:46:29:2b:38:16:51:b2:1f:c6:c8:
                        d4:02:b9:bd:2f
                    ASN1 OID: prime256v1
                    NIST CURVE: P-256
            X509v3 extensions:
                X509v3 Key Usage: critical
                    Digital Signature, Key Encipherment, Key Agreement
                X509v3 Extended Key Usage:
                    TLS Web Server Authentication, TLS Web Client Authentication
                X509v3 Basic Constraints: critical
                    CA:FALSE
                X509v3 Subject Key Identifier:
                    94:D4:B4:4C:AF:67:12:EA:16:CD:F5:B5:8D:A3:52:F6:F4:61:91:42
                X509v3 Authority Key Identifier:
                    keyid:F7:3A:41:13:54:66:73:65:C5:29:42:5E:B8:C2:AA:79:8E:29:16:12
    
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
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                RSA Public-Key: (2048 bit)
                Modulus:
                    ... # truncated
                    24:0d
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Key Usage: critical
                Digital Signature, Certificate Sign, CRL Sign
            X509v3 Basic Constraints: critical
                CA:TRUE
            X509v3 Subject Key Identifier:
                F7:3A:41:13:54:66:73:65:C5:29:42:5E:B8:C2:AA:79:8E:29:16:12
            X509v3 Subject Alternative Name:
                URI:spiffe://example.org
   ... # truncated
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
        Subject Public Key Info:
            Public Key Algorithm: id-ecPublicKey
                Public-Key: (256 bit)
                pub:
                    04:51:24:70:04:41:c5:46:79:8d:59:7c:21:28:13:
                    18:47:30:e9:cb:41:ed:d4:8b:65:1d:2e:21:9e:2e:
                    97:c9:17:41:b5:a7:e2:df:c7:40:70:60:09:7a:00:
                    33:08:2f:4d:ee:cc:71:79:eb:94:0d:de:f7:46:54:
                    69:38:42:33:24
                ASN1 OID: prime256v1
                NIST CURVE: P-256
        X509v3 extensions:
            X509v3 Key Usage: critical
                Digital Signature, Key Encipherment, Key Agreement
            X509v3 Extended Key Usage:
                TLS Web Server Authentication, TLS Web Client Authentication
            X509v3 Basic Constraints: critical
                CA:FALSE
            X509v3 Subject Key Identifier:
                D8:72:F4:58:84:D8:FE:7D:90:EB:1C:7A:70:D0:87:D8:EB:BB:6E:35
            X509v3 Authority Key Identifier:
                keyid:F7:3A:41:13:54:66:73:65:C5:29:42:5E:B8:C2:AA:79:8E:29:16:12

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