---
title: Debugging
---

## Debugging flow:

- Pod status
  - **ContainerCreating**
    - Event
      - **MountVolume.SetUp** failed for volume "otterize-credentials" : secret "XXX" not found
      
          Credentials were not generated and stored in the K8s `secret`. Please verify
          - Otterize is installed with the **Credential Operator** `enabled`
          - Pod is annotated with `otterize/credentials-secret-name`. Follow instruction in [Behavior](/documentation/credential-operator/behavior).
- kubectl
  - Error from server (NotFound): secrets "client-credentials-secret" not found

    Credentials were not generated and stored in the K8s `secret`. Please verify
    - Otterize is installed with the **Credential Operator** `enabled`
    - Pod is annotated with `otterize/credentials-secret-name`. Follow instruction in [Behavior](/documentation/credential-operator/behavior).