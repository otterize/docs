---
sidebar_position: 1
title: Installing Otterize in Kubernetes
---

Install Otterize on a Kubernetes cluster using helm.


{@include: ../_common/install-otterize.md}

{@include: ../_common/verify-cni.md}

## Uninstall Otterize
```bash
helm uninstall -n otterize otterize
helm repo remove otterize
```

## Getting Started

- [Kick the tires](./kicking-the-tires)

## Advanced configuration