---
sidebar_position: 3
title: IBAC via network policies
---

## Recap: K8s network policies and CNI network plugins

[Network policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/) are one of the tools we
can use for traffic shaping within K8s clusters. They allow us to shape traffic using selectors, policies, and L3
and L4 identifiers. To enforce network policies, a Kubernetes cluster requires a CNI supporting network policies to be
installed. Some popular options are Calico and Cilium.

The following example shows a network policy allowing traffic

- _from_ pods labeled `app:backend` belonging to namespaces labeled `env:production`
- _to_ pods labeled `app:db` in the namespace  `production-db`

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-production-backend
  # highlight-next-line
  namespace: production-db            # [Target filter] Policy applies to target pods in this namespace
spec:
  podSelector:
    matchLabels:
      # highlight-next-line
      app: db                         # [Target filter] Policy applies to target pods with this label
  policyTypes:
    # highlight-next-line
    - Ingress                         # [Direction] Policy implemented as a filter on incoming connections
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              # highlight-next-line
              env: production         # [Source filter] Policy filters source pods from namespaces with this label
        - podSelector:
            matchLabels:
              # highlight-next-line
              app: backend            # [Source filter] Policy filters source pods from with this label
```

### Implications of setting an ingress network policy


### Setting security scope via default network policies

Default deny network policy example
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
  namespace:  production
spec:
  podSelector: {}
  policyTypes:
    - Ingress
```
## …

## Practical notes

### Avoiding drift

### Avoiding blocking of essential services