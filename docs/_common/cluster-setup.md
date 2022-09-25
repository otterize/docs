Below are instructions for setting up a cluster with Network Policies.
If you don't have a cluster already, we recommend starting out with a Minikube cluster.

<Tabs groupId="cni">
<TabItem value="minikube" label="minikube">
    Start your minikube cluster. <a href="https://minikube.sigs.k8s.io/docs/start/">Don't have the minikube CLI? Read the installation instructions</a>

```bash
$ minikube start --network-plugin=cni
```

Install Calico:
```bash
kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.24.1/manifests/calico.yaml
```
</TabItem>
<TabItem value="gke" label="Google GKE">
<a href="https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud">Visit the official documentation</a>, or follow the instructions below:
<Tabs>
<TabItem value="cli" label="gcloud CLI">


***To enable network policy enforcement when creating a new cluster, run the following command:***


`gcloud container clusters create CLUSTER_NAME --enable-network-policy`
Replace CLUSTER_NAME with the name of the new cluster.

***To enable network policy enforcement for an existing cluster, perform the following tasks:***

Run the following command to enable the add-on:


`gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED`
Replace CLUSTER_NAME with the name of the cluster.

Run the following command to enable network policy enforcement on your cluster, which in turn re-creates your cluster's node pools with network policy enforcement enabled:

`gcloud container clusters update CLUSTER_NAME --enable-network-policy`
</TabItem>
<TabItem value="console" label="Console">

***To enable network policy enforcement when creating a new cluster:***

1. Go to the Google Kubernetes Engine page in the Google Cloud console.
   The remaining steps will appear automatically in the Google Cloud console.

2. On the Google Kubernetes Engine page, click Create.
3. Configure your cluster as desired.
4. From the navigation pane, under Cluster, click Networking.
5. Select the Enable network policy checkbox.
6. Click Create.


***To enable network policy enforcement for an existing cluster:***

1. Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.

2. In the cluster list, click the name of the cluster you want to modify.
3. Under Networking, in the Network policy field, click Edit network policy.
4. Select the Enable network policy for master checkbox and click Save Changes.
5. Wait for your changes to apply, and then click Edit network policy again.
6. Select the Enable network policy for nodes checkbox.
7. Click Save Changes.

</TabItem>
</Tabs>
</TabItem>
<TabItem value="eks" label="AWS EKS">
<a href="https://docs.aws.amazon.com/eks/latest/userguide/calico.html">Visit the official documentation</a>, or follow the instructions below:

1. Spin up an [EKS cluster](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html) using the console, AWS CLI or `eksctl`.
2. Install Calico for NetworkPolicy enforcement, without replacing the CNI:
```bash
kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-operator.yaml
kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico-crs.yaml
```
</TabItem>
<TabItem value="aks" label="Azure AKS">

Setup an EKS cluster using this [guide](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli)

For CNI no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You choose whether you'd like to use this option or Calico when you create a cluster.


<a href="https://learn.microsoft.com/en-us/azure/aks/use-network-policies"> Read more at the official documentation site</a>.
</TabItem>
</Tabs>