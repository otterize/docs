## Verify network policies are enforceable

To enforce network policies, a Kubernetes cluster requires a CNI supporting network policies to be
installed.

:::note
You can skip this section if you already have a CNI (such as Calico) installed in your cluster.
:::

If you don't have a CNI installed, a popular choice is Calico by Tigera.
To install it, please follow the [instructions](https://projectcalico.docs.tigera.io/getting-started/kubernetes/helm)
and return to this tutorial.