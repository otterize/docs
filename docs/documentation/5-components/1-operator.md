---
sidebar_position: 1
---

# Overview
Otterize manages client intents and credentials provisioning with the help of multiple K8s operators.

## Components


### Credential Operator
The `Credential Operator` is responsible for credential generation. It uses a [`SPIRE`](https://github.com/spiffe/spire)
server as a key store and a provisioning mechanism.
Responsible for tracking annotated pods and generating credentials accordingly.

### SPIRE server
Otterize provides a built-in `SPIRE` server for easy integration, but users are welcome to use their own.
See [configuration] for details about how to configure Otterize to work with your existing SPIRE server.


## Credentials
### Lifecycle
- On `Pod Start` if it is annotated with `spire-integration.otterize.com/tls-secret-name` credentials are generated and stored in a K8s secret named as the value of the annotation

### Types
x509 credentials can be generated in two flavors:

- PEM files
  - Trust bundle
  - SVID
  - private key
- Trust and key stores


### What you'll need


