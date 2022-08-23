---
id: behavior
title: Behavior
---

X509 credentials are generated on `pod startup` if it has the `otterize/credentials-secret-name`  annotation. The credentials are stored as a K8s secret names as the value for the annotation.

## Credential flavors:

- Trust bundle, SVID, private key (for most clients)
- Trust store, key store, password (for Kafka)

| Annotation                       | Type              | Default | required                     | Description                                                                     |
|----------------------------------|-------------------|---------|------------------------------|---------------------------------------------------------------------------------|
| otterize/credentials-secret-name | [string](#string) | empty   | yes                          | The K8s secret name to store credentials in                                     |
| otterize/dns-names               | [string](#string) | empty   |                              | The object related by this tuple. It's an object in the namespace of the tuple. |
| otterize/cert-ttl                | [int](#int)       | 999999  |                              |                                                                                 |
| otterize/cert-type               | one of [jks,pem]  |         | yes                          |                                                                                 |
| otterize/bundle-file-name        | [string](#string) |         | if otterize/cert-type == jks |                                                                                 |
| otterize/svid-file-name          | [string](#string) |         | if otterize/cert-type == jks |                                                                                 |
| otterize/key-file-name           | [string](#string) |         | if otterize/cert-type == jks |                                                                                 |
| otterize/truststore-file-name    | [string](#string) |         | if otterize/cert-type == pem |                                                                                 |
| otterize/keystore-file-name      | [string](#string) |         | if otterize/cert-type == pem |                                                                                 |
| otterize/jks-password            | [string](#string) |         | if otterize/cert-type == pem |                                                                                 |



## Options
- `otterize/credentials-secret-name`: required - K8s secret name to store credentials in
- `otterize/dns-names`: default empty
- `otterize/cert-ttl`: default by global config
- `otterize/cert-type: [jks|pem]`: required
    - jks
        - `otterize/bundle-file-name`: required
        - `otterize/svid-file-name`: required
        - `otterize/key-file-name`: required
    - pem
        - `otterize/truststore-file-name`: required
        - `otterize/keystore-file-name`: required
        - `otterize/jks-password`: required