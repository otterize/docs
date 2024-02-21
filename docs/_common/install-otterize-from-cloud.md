If no Kubernetes clusters are connected to your account, click the "Create integration" button and then click the "Add integration" button to:

1. Create a Kubernetes integration, specifying its name and the name of an environment to which all namespaces in that cluster will belong, by default.
2. Connect it with your actual Kubernetes cluster, by running the Helm commands shown on the screen after creating the integration.
   Choose `Enfocement mode: disabled` to apply shadow mode on every server until you're ready to protect it.

<details>
<summary>More details, if you're curious</summary>

Connecting your cluster simply entails installing Otterize OSS via Helm, using credentials from your account so Otterize OSS can report information needed to visualize the cluster.

The credentials will already be inlined into the Helm command shown in the Cloud UI, so you just need to copy that line and run it from your shell.
If you don't give it the Cloud credentials, Otterize OSS will run fully standalone in your cluster &mdash; you just won't have the visualization in Otterize Cloud.

The Helm command shown in the Cloud UI also includes flags to turn off enforcement: Otterize OSS will be running in "shadow mode," meaning that it will not create network policies to restrict pod-to-pod traffic, or create Kafka ACLs to control access to Kafka topics. Instead, it will report to Otterize Cloud what **would** happen if enforcement were to be enabled, guiding you to implement IBAC without blocking intended access.

</details>
