If no Kubernetes clusters are connected to your account, click the "connect your cluster" button to:
1. Create a Cloud cluster object, specifying its name and the name of an environment to which all namespaces in that cluster will belong, by default.
2. Connect it with your actual Kubernetes cluster, by clicking on the "Connection guide &rarr;" link and running the Helm commands shown there.
    1. Follow the instructions to install Otterize <b>with enforcement on</b> (use the toggle to make `Enforcement mode: active`)

<details>
<summary>More details, if you're curious</summary>

Connecting your cluster simply entails installing Otterize OSS via Helm, using credentials from your account so Otterize OSS can report information needed to visualize the cluster.

The credentials will already be inlined into the Helm command shown in the Cloud UI, so you just need to copy that line and run it from your shell.
If you don't give it the Cloud credentials, Otterize OSS will run fully standalone in your cluster &mdash; you just won't have the visualization in Otterize Cloud.

The Helm command shown in the Cloud UI also includes flags to turn off enforcement: Otterize OSS will be running in "shadow mode," meaning that it will show you what **would** happen if it were to create/update your access controls (Kubernetes network policies, Kafka ACLs, Istio authorization policies, etc.). While that's useful for gradually rolling out IBAC, for this tutorial we go straight to active enforcement.
</details>
