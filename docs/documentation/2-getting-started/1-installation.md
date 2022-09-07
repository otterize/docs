---
sidebar_position: 1
---

# Installation

Install Otterize on a Kubernetes cluster using helm.


## How to

### Install Otterize
1. To install Otterize run the following commands
   ```shell
   helm repo add otterize https://otterize.github.io/helm-charts
   helm repo update
   helm install --create-namespace -n otterize otterize otterize/otterize-kubernetes
   ```
2. Verify all pods are in the `Ready` and `Running` with the following command
   ```
   kubectl get pods -n otterize
   ```
   You should see
   ```bash
   NAME                                                             READY   STATUS    RESTARTS      AGE
   intents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s
   otterize-spire-agent-9s8w7                                       1/1     Running   0             54s
   otterize-spire-agent-np2wf                                       1/1     Running   1 (33s ago)   54s
   otterize-spire-server-0                                          1/1     Running   0             53s
   otterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s
   spire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s
   ```
   :::note
   It can take several minutes until all pods are in the `Ready` and `Running` states.
   :::

:::caution
This tutorial requires Calico to be deployed on your cluster. To install please follow the [instructions](https://projectcalico.docs.tigera.io/getting-started/kubernetes/helm).
:::

### Install Calico (optional)
Otterize can help users manage network policies easily using intents files. To 
This tutorial requires Calico to be deployed on your cluster. To install please follow the [instructions](https://projectcalico.docs.tigera.io/getting-started/kubernetes/helm).

## Getting Started

- [Kick the tires](./kicking-the-tires)

## Advanced configuration