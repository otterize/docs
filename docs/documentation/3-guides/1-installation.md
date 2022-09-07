---
sidebar_position: 1
---

# Installation

Install Otterize on a Kubernetes cluster using helm.


## Install Otterize

:::note
If you already have Otterize installed on your cluster you can skip this step.
:::

1. To install Otterize run the following commands
   ```shell
   helm repo add otterize https://otterize.github.io/helm-charts
   helm repo update
   helm upgrade --install --create-namespace -n otterize otterize otterize/otterize-kubernetes
   ```
2. It can take several minutes for the pods to **stabilize** into the `Ready` and `Running` states. You can monitor with
   the following command:
   ```
   kubectl get pods -n otterize
   ```
   After **stabilization** you should see:
   ```bash
   NAME                                                             READY   STATUS    RESTARTS      AGE
   intents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s
   otterize-spire-agent-9s8w7                                       1/1     Running   0             54s
   otterize-spire-agent-np2wf                                       1/1     Running   1 (33s ago)   54s
   otterize-spire-server-0                                          1/1     Running   0             53s
   otterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s
   spire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s
   ```

## Install Calico

:::note
If you already have Calico installed on your cluster you can skip this step.
:::
To enforce network policies within your cluster you require a CNI to implement them.
Calico is one of the CNIs you can use for this task. To install please follow
the [instructions](https://projectcalico.docs.tigera.io/getting-started/kubernetes/helm).

## Uninstall Otterize
```bash
helm uninstall -n otterize otterize
helm repo remove otterize
```

## Getting Started

- [Kick the tires](./kicking-the-tires)

## Advanced configuration