Below are instructions for setting up a Kubernetes cluster with network policies.
If you don't have a cluster already, we recommend starting out with a Minikube cluster.

<Tabs groupId="cni">
<TabItem value="minikube" label="Minikube">

If you don't have the Minikube CLI, first [install it](https://minikube.sigs.k8s.io/docs/start/). 

Then start your Minikube cluster with Calico, in order to enforce network policies.

```bash
minikube start --cpus=4 --memory 4096 --disk-size 32g --cni=calico
```
The increased CPU, memory and disk resource allocations are required to be able to deploy the ecommerce app used in the visual tutorials successfully.

</TabItem>
<TabItem value="gke" label="Google GKE">
<a href="https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud">Visit the official documentation</a>, or follow the instructions below:
<Tabs>
<TabItem value="cli" label="gcloud CLI">

To use the gcloud CLI for this tutorial, first [install](https://cloud.google.com/sdk/docs/install) and then 
[initialize](https://cloud.google.com/sdk/docs/initializing) it.

***To enable network policy enforcement when creating a new cluster:***

Run the following command:
```bash
gcloud container clusters create CLUSTER_NAME --enable-network-policy --zone=ZONE
```
(Replace `CLUSTER_NAME` with the name of the new cluster and `ZONE` with your zone.)

***To enable network policy enforcement for an existing cluster, perform the following tasks:***

Run the following command to enable the add-on:
```bash
gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED
```
(Replace `CLUSTER_NAME` with the name of the cluster.)

Then enable network policy enforcement on your cluster, re-creating your cluster's node pools with network policy enforcement enabled:
```bash
gcloud container clusters update CLUSTER_NAME --enable-network-policy
```
(Replace `CLUSTER_NAME` with the name of the cluster.)

</TabItem>
<TabItem value="console" label="Console">

***To enable network policy enforcement when creating a new cluster:***

1. Go to the Google Kubernetes Engine page in the Google Cloud console.
   The remaining steps will appear automatically in the Google Cloud console.

2. On the Google Kubernetes Engine page, click Create.
3. Configure your cluster as desired.
4. From the navigation pane, under Cluster, click Networking.
5. Select the checkbox to Enable network policy.
6. Click Create.


***To enable network policy enforcement for an existing cluster:***

1. Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.

2. In the cluster list, click the name of the cluster you want to modify.
3. Under Networking, in the Network policy field, click Edit network policy.
4. Select the checkbox to Enable network policy for master and click Save Changes.
5. Wait for your changes to apply, and then click Edit network policy again.
6. Select the checkbox to Enable network policy for nodes.
7. Click Save Changes.

</TabItem>
</Tabs>
</TabItem>
<TabItem value="eks" label="AWS EKS">

Starting August 29, 2023, [you can configure the built-in VPC CNI add-on to enable network policy support](https://aws.amazon.com/blogs/containers/amazon-vpc-cni-now-supports-kubernetes-network-policies).
To spin up a new cluster, use the following `eksctl` `ClusterConfig`, and save it to a file called `cluster.yaml`.

Spin up the cluster using `eksctl create cluster -f cluster.yaml`. This will spin up a cluster called `network-policy-demo` in `us-west-2`.

The important bit is the configuration for the VPC CNI addon:

```yaml
    configurationValues: |-
       # highlight-next-line
      enableNetworkPolicy: "true"
```

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: network-policy-demo
  version: "1.27"
  region: us-west-2

iam:
  withOIDC: true

vpc:
  clusterEndpoints:
    publicAccess: true
    privateAccess: true

addons:
  - name: vpc-cni
    version: 1.14.0
    attachPolicyARNs: #optional
    - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy 
    configurationValues: |-
       # highlight-next-line
      enableNetworkPolicy: "true"
  - name: coredns
  - name: kube-proxy

managedNodeGroups:
  - name: x86-al2-on-demand
    amiFamily: AmazonLinux2
    instanceTypes: [ "m6i.xlarge", "m6a.xlarge" ]
    minSize: 0
    desiredCapacity: 2
    maxSize: 6
    privateNetworking: true
    disableIMDSv1: true
    volumeSize: 100
    volumeType: gp3
    volumeEncrypted: true
    tags:
      team: "eks"
```

For guides that deploy the larger set of workloads, Kafka and ZooKeeper are also deployed, and you will also need the EBS CSI driver to accommodate their storage needs. [Follow the AWS guide for the EBS CSI add-on to do so.](https://docs.aws.amazon.com/eks/latest/userguide/managing-ebs-csi.html)
If you're not using the VPC CNI, you can set up the Calico network policy controller using the following instructions:

<a href="https://docs.aws.amazon.com/eks/latest/userguide/calico.html">Visit the official documentation</a>, or follow the instructions below:

1. Spin up an [EKS cluster](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html) using the console, AWS CLI or `eksctl`.
2. Install Calico for network policy enforcement, without replacing the CNI:
```bash
kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-operator.yaml
kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-crs.yaml
```
</TabItem>
<TabItem value="aks" label="Azure AKS">

You can set up an AKS cluster using this [guide](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli).

For network policy support, no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You can choose whether you'd like to use this option or Calico when you create a cluster.


<a href="https://learn.microsoft.com/en-us/azure/aks/use-network-policies"> Read more at the official documentation site</a>.
</TabItem>
</Tabs>
