---
id: resolving-service-names-in-k8s
title: Resolving service names in Kubernetes
sidebar_position: 9
---

### Service names and pod labels

Client intents files use service names to refer to client and server services. How do Otterize operators decide what is
the name of the service that runs within the pod? The algorithm is as follows:

1. If the pod has an `otterize/service-name` label, its value is used as the service name. This allows developers and
   automations to explicitly name services, if needed.
2. If there is no `otterize/service-name` label, a recursive look up is performed for the Kubernetes resource owner of
   the pod, until the root resource is reached, and its name is used as the service name. For example, if you have
   a `Deployment` named `checkoutservice`, which then creates and owns a `ReplicaSet`, which then creates and owns
   a `Pod`, then the service name for that pod is `checkoutservice` - same as the name of the `Deployment`. This is
   intended to capture the likely-more-meaningful "human name" of the service.

Pods are then labeled with values derived from service names. For example,
the service name is combined with the namespace of the pod and hashed to form the value of the label `otterize/server`.
This label is then used as a selector for network policies. Another
label, `otterize/access-server-<servicename>-<servicehash>`, is applied to client pods which have declared their intent
to access the server. This label is used as the selector to determine which client pods are allowed to access the server
pod.
