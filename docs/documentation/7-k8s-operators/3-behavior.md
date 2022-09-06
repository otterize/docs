---
id: behavior
title: Behavior
---

X509 credentials are generated on `pod startup` if it has the `otterize/credentials-secret-name`  annotation. The credentials are stored as a K8s secret names as the value for the annotation.

## Credential flavors:

- Trust bundle, SVID, private key (for most clients)
- Trust store, key store, password (for Kafka)

## Supported annotations

| Annotation                       | Type              | Default | required                     | Description                                                                                                             |
|----------------------------------|-------------------|---------|------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| otterize/credentials-secret-name | [string](#string) | empty   | yes                          | The K8s secret name to store credentials in                                                                             |
| otterize/dns-names               | [string](#string) | empty   |                              | Extra DNS names to add to x509 certificates in the [SAN](https://en.wikipedia.org/wiki/Subject_Alternative_Name) field. |
| otterize/cert-ttl                | [int](#int)       | 999999  |                              | Certificate expiry time relative to generation time in seconds.                                                         |
| otterize/cert-type               | one of [jks,pem]  | jks     |                              |                                                                                                                         |
| otterize/bundle-file-name        | [string](#string) |         |                              |                                                                                                                         |
| otterize/svid-file-name          | [string](#string) |         |                              |                                                                                                                         |
| otterize/key-file-name           | [string](#string) |         |                              |                                                                                                                         |
| otterize/truststore-file-name    | [string](#string) |         | if otterize/cert-type == jks |                                                                                                                         |
| otterize/keystore-file-name      | [string](#string) |         | if otterize/cert-type == jks |                                                                                                                         |
| otterize/jks-password            | [string](#string) |         | if otterize/cert-type == jks |                                                                                                                         |

:::danger not sure if values for the `jks` flow are actually required
:::
