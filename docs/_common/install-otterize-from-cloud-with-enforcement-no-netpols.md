If no Kubernetes clusters are connected to your account, click the "connect your cluster" button to:
1. Create a Cloud cluster object, specifying its name and the name of an environment to which all namespaces in that cluster will belong, by default.
2. Connect it with your actual Kubernetes cluster, by clicking on the "Connection guide &rarr;" link and running the Helm commands shown there.
    1. Follow the instructions to install Otterize <b>with enforcement on</b> (not in shadow mode) for this tutorial. In other words, <b>omit</b> the following flag in the Helm command: `--set intentsOperator.operator.enableEnforcement=false` 
    2. And <b>add</b> the following flag to the Helm command:  `--set intentsOperator.operator.enableNetworkPolicyCreation=false`

<details>
<summary>More details, if you're curious</summary>

Connecting your cluster simply entails installing Otterize OSS via Helm, using credentials from your account so Otterize OSS can report information needed to visualize the cluster.

The credentials will already be inlined into the Helm command shown in the Cloud UI, so you just need to copy that line and run it from your shell.
If you don't give it the Cloud credentials, Otterize OSS will run fully standalone in your cluster &mdash; you just won't have the visualization in Otterize Cloud.

The Helm command shown in the Cloud UI also includes flags to turn off enforcement: Otterize OSS will be running in "shadow mode," meaning that it will show you what **would** happen if it created network policies to restrict pod-to-pod traffic, and created Kafka ACLs to control access to Kafka topics. While that's useful for gradually rolling out IBAC, for this tutorial we go straight to active enforcement.

While we want enforcement turned on, in this tutorial we don't want it for network policies &mdash; only for Kafka, so we can focus on Kafka topic-level access. You can configure network policy shadow or active enforcement, and Kafka ACLs shadow or active enforcement, independently of each other.s
</details>
