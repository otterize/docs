"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7e3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),k=o,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||l;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),o=a(6010);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l.tabItem,r),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),o=a(7294),l=a(6010),r=a(2466),i=a(6550),s=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function d(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=m({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??p;return k({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var g=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},k=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:d},r,{className:(0,l.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=h(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},o.createElement(w,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return o.createElement(b,(0,n.Z)({key:String(t)},e))}},9403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(7462),o=(a(7294),a(3905)),l=a(4866),r=a(5162);a(3875);const i={sidebar_position:4,title:"Kafka topic-level access mapping"},s=void 0,c={unversionedId:"quick-tutorials/k8s-kafka-mapping",id:"quick-tutorials/k8s-kafka-mapping",title:"Kafka topic-level access mapping",description:"With its Kafka watcher enabled, the network mapper allows you to map topic-level access to Kafka servers within your Kubernetes cluster.",source:"@site/docs/quick-tutorials/k8s-kafka-mapping.mdx",sourceDirName:"quick-tutorials",slug:"/quick-tutorials/k8s-kafka-mapping",permalink:"/quick-tutorials/k8s-kafka-mapping",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/quick-tutorials/k8s-kafka-mapping.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Kafka topic-level access mapping"},sidebar:"docSidebar",previous:{title:"Kafka access automation",permalink:"/quick-tutorials/k8s-kafka-mtls"},next:{title:"Istio AuthorizationPolicy automation",permalink:"/quick-tutorials/k8s-istio-authorization-policies"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create an Otterize Cloud account",id:"create-an-otterize-cloud-account",level:4},{value:"Install Otterize OSS, connected to Otterize Cloud",id:"install-otterize-oss-connected-to-otterize-cloud",level:4},{value:"Install Kafka",id:"install-kafka",level:2},{value:"Deploy demo to simulate traffic",id:"deploy-demo-to-simulate-traffic",level:2},{value:"What did we accomplish?",id:"what-did-we-accomplish",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],d={toc:p},k="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(k,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With its Kafka watcher enabled, the network mapper allows you to map topic-level access to Kafka servers within your Kubernetes cluster.\nThis provides a clear picture of which Kafka topics are being accessed and with which operations.\nIn this tutorial, we will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy a Kafka broker, and three clients that call it."),(0,o.kt)("li",{parentName:"ul"},"Discover which topics are being accessed by those clients, and with which operations, using the Otterize network mapper's Kafka watcher.")),(0,o.kt)("p",null,"We will ",(0,o.kt)("strong",{parentName:"p"},"not")," be doing any access control in this demo, just purely mapping client-to-Kafka access at the topic and operation level."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Prepare a Kubernetes cluster"),(0,o.kt)("p",null,"Before you start, you'll need a Kubernetes cluster. Having a cluster with a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI")," that supports ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"NetworkPolicies")," isn't required for this tutorial, but is recommended so that your cluster works with other tutorials."),(0,o.kt)("p",null,"Below are instructions for setting up a Kubernetes cluster with network policies.\nIf you don't have a cluster already, we recommend starting out with a Minikube cluster."),(0,o.kt)(l.Z,{groupId:"cni",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"minikube",label:"Minikube",mdxType:"TabItem"},(0,o.kt)("p",null,"If you don't have the Minikube CLI, first ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"install it"),". "),(0,o.kt)("p",null,"Then start your Minikube cluster with Calico, in order to enforce network policies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --cpus=4 --memory 8192 --disk-size 32g --cni=calico\n")),(0,o.kt)("p",null,"The increased CPU, memory and disk resource allocations are required to be able to deploy the ecommerce app used in the visual tutorials successfully.")),(0,o.kt)(r.Z,{value:"gke",label:"Google GKE",mdxType:"TabItem"},(0,o.kt)("a",{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#gcloud"},"Visit the official documentation"),", or follow the instructions below:",(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,o.kt)("p",null,"To use the gcloud CLI for this tutorial, first ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"install")," and then\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/initializing"},"initialize")," it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create CLUSTER_NAME --enable-network-policy --zone=ZONE\n")),(0,o.kt)("p",null,"(Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the new cluster and ",(0,o.kt)("inlineCode",{parentName:"p"},"ZONE")," with your zone.)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster, perform the following tasks:"))),(0,o.kt)("p",null,"Run the following command to enable the add-on:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --update-addons=NetworkPolicy=ENABLED\n")),(0,o.kt)("p",null,"(Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)"),(0,o.kt)("p",null,"Then enable network policy enforcement on your cluster, re-creating your cluster's node pools with network policy enforcement enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters update CLUSTER_NAME --enable-network-policy\n")),(0,o.kt)("p",null,"(Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of the cluster.)")),(0,o.kt)(r.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement when creating a new cluster:"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console.\nThe remaining steps will appear automatically in the Google Cloud console.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Google Kubernetes Engine page, click Create.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure your cluster as desired.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the navigation pane, under Cluster, click Networking.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click Create."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"To enable network policy enforcement for an existing cluster:"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Google Kubernetes Engine page in the Google Cloud console. The remaining steps will appear automatically in the Google Cloud console.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the cluster list, click the name of the cluster you want to modify.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under Networking, in the Network policy field, click Edit network policy.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for master and click Save Changes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait for your changes to apply, and then click Edit network policy again.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the checkbox to Enable network policy for nodes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click Save Changes.")))))),(0,o.kt)(r.Z,{value:"eks",label:"AWS EKS",mdxType:"TabItem"},(0,o.kt)("p",null,"Starting August 29, 2023, ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/containers/amazon-vpc-cni-now-supports-kubernetes-network-policies"},"you can configure the built-in VPC CNI add-on to enable network policy support"),".\nTo spin up a new cluster, use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"eksctl")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterConfig"),", and save it to a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yaml"),"."),(0,o.kt)("p",null,"Spin up the cluster using ",(0,o.kt)("inlineCode",{parentName:"p"},"eksctl create cluster -f cluster.yaml"),". This will spin up a cluster called ",(0,o.kt)("inlineCode",{parentName:"p"},"network-policy-demo")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west-2"),"."),(0,o.kt)("p",null,"The important bit is the configuration for the VPC CNI addon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'    configurationValues: |-\n       # highlight-next-line\n      enableNetworkPolicy: "true"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\n\nmetadata:\n  name: network-policy-demo\n  version: "1.27"\n  region: us-west-2\n\niam:\n  withOIDC: true\n\nvpc:\n  clusterEndpoints:\n    publicAccess: true\n    privateAccess: true\n\naddons:\n  - name: vpc-cni\n    version: 1.14.0\n    attachPolicyARNs: #optional\n    - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy \n    configurationValues: |-\n       # highlight-next-line\n      enableNetworkPolicy: "true"\n  - name: coredns\n  - name: kube-proxy\n\nmanagedNodeGroups:\n  - name: x86-al2-on-demand\n    amiFamily: AmazonLinux2\n    instanceTypes: [ "m6i.xlarge", "m6a.xlarge" ]\n    minSize: 0\n    desiredCapacity: 2\n    maxSize: 6\n    privateNetworking: true\n    disableIMDSv1: true\n    volumeSize: 100\n    volumeType: gp3\n    volumeEncrypted: true\n    tags:\n      team: "eks"\n')),(0,o.kt)("p",null,"For guides that deploy the larger set of services, Kafka and ZooKeeper are also deployed, and you will also need the EBS CSI driver to accommodate their storage needs. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/managing-ebs-csi.html"},"Follow the AWS guide for the EBS CSI add-on to do so.")),(0,o.kt)("p",null,"If you're not using the VPC CNI, you can set up the Calico network policy controller using the following instructions:"),(0,o.kt)("a",{href:"https://docs.aws.amazon.com/eks/latest/userguide/calico.html"},"Visit the official documentation"),", or follow the instructions below:",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Spin up an ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"EKS cluster")," using the console, AWS CLI or ",(0,o.kt)("inlineCode",{parentName:"li"},"eksctl"),"."),(0,o.kt)("li",{parentName:"ol"},"Install Calico for network policy enforcement, without replacing the CNI:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-operator.yaml\nkubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/v1.12.6/config/master/calico-crs.yaml\n"))),(0,o.kt)(r.Z,{value:"aks",label:"Azure AKS",mdxType:"TabItem"},(0,o.kt)("p",null,"You can set up an AKS cluster using this ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli"},"guide"),"."),(0,o.kt)("p",null,"For network policy support, no setup is required: Azure AKS comes with a built-in network policy implementation called Azure Network Policy Manager. You can choose whether you'd like to use this option or Calico when you create a cluster."),(0,o.kt)("a",{href:"https://learn.microsoft.com/en-us/azure/aks/use-network-policies"}," Read more at the official documentation site"),"."))),(0,o.kt)("p",null,'You can now install Otterize in your cluster, and optionally connect to Otterize Cloud. Connecting to Cloud lets you\nsee what\'s happening visually in your browser, through the "access graph".'),(0,o.kt)("p",null,"So either forego browser visualization and:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install Otterize in your cluster with the Kafka watcher component enabled, ",(0,o.kt)("b",null,"without")," Otterize Cloud"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install otterize otterize/network-mapper -n otterize-system --create-namespace \\\n--set kafkawatcher.enable=true \\\n--set kafkawatcher.kafkaServers={"kafka-0.kafka"}\n'))),(0,o.kt)("p",null,"Or choose to include browser visualization and:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install Otterize in your cluster, ",(0,o.kt)("b",null,"with")," Otterize Cloud"),(0,o.kt)("h4",{id:"create-an-otterize-cloud-account"},"Create an Otterize Cloud account"),(0,o.kt)("p",null,"If you don't already have an account, browse to ",(0,o.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"https://app.otterize.com")," to set one up."),(0,o.kt)("p",null,"If someone in your team has already created an org in Otterize Cloud, and invited you (using your email address), you may see an invitation to accept."),(0,o.kt)("p",null,"Otherwise, you'll create a new org, which you can later rename, and invite your teammates to join you there."),(0,o.kt)("h4",{id:"install-otterize-oss-connected-to-otterize-cloud"},"Install Otterize OSS, connected to Otterize Cloud"),(0,o.kt)("p",null,'If no Kubernetes clusters are connected to your account, click the "connect your cluster" button to:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Cloud cluster object, specifying its name and the name of an environment to which all namespaces in that cluster will belong, by default."),(0,o.kt)("li",{parentName:"ol"},'Connect it with your actual Kubernetes cluster, by clicking on the "Connection guide ',"\u2192",'" link and running the Helm commands shown there.',(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Follow the instructions to install Otterize ",(0,o.kt)("b",null,"with enforcement on")," (not in shadow mode) for this tutorial. In other words, ",(0,o.kt)("b",null,"omit")," the following flag in the Helm command: ",(0,o.kt)("inlineCode",{parentName:"li"},"--set intentsOperator.operator.mode=defaultShadow")," "),(0,o.kt)("li",{parentName:"ol"},"And ",(0,o.kt)("b",null,"add")," the following flags to the Helm command: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'--set intentsOperator.operator.enableNetworkPolicyCreation=false \\\n--set networkMapper.kafkawatcher.enable=true \\\n--set networkMapper.kafkawatcher.kafkaServers={"kafka-0.kafka"}\n')))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"More details, if you're curious"),(0,o.kt)("p",null,"Connecting your cluster simply entails installing Otterize OSS via Helm, using credentials from your account so Otterize OSS can report information needed to visualize the cluster."),(0,o.kt)("p",null,"The credentials will already be inlined into the Helm command shown in the Cloud UI, so you just need to copy that line and run it from your shell.\nIf you don't give it the Cloud credentials, Otterize OSS will run fully standalone in your cluster ","\u2014"," you just won't have the visualization in Otterize Cloud."),(0,o.kt)("p",null,'The Helm command shown in the Cloud UI also includes flags to turn off enforcement: Otterize OSS will be running in "shadow mode," meaning that it will show you what ',(0,o.kt)("strong",{parentName:"p"},"would")," happen if it created network policies to restrict pod-to-pod traffic, and created Kafka ACLs to control access to Kafka topics. While that's useful for gradually rolling out IBAC, for this tutorial we go straight to active enforcement."),(0,o.kt)("p",null,"While we want enforcement turned on, in this tutorial we don't want it for network policies ","\u2014"," only for Kafka, so we can focus on Kafka topic-level access. You can configure network policy shadow or active enforcement, and Kafka ACLs shadow or active enforcement, independently of each other.s"))),(0,o.kt)("p",null,"Finally, you'll need to install the Otterize CLI (if you haven't already) to interact with the network mapper:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install the Otterize CLI"),(0,o.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"mac",label:"Mac",default:!0,mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Brew",label:"Brew",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install otterize/otterize/otterize-cli\n"))),(0,o.kt)(r.Z,{value:"Apple Silicon",label:"Apple Silicon",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LJO https://get.otterize.com/otterize-cli/v0.1.29/otterize_macOS_arm64_notarized.zip\ntar xf otterize_macOS_arm64_notarized.zip\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,o.kt)(r.Z,{value:"Intel 64-bit",label:"Intel 64-bit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LJO https://get.otterize.com/otterize-cli/v0.1.29/otterize_macOS_x86_64_notarized.zip\ntar xf otterize_macOS_x86_64_notarized.zip\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))))),(0,o.kt)(r.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Scoop",label:"Scoop",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PowerShell"},"scoop bucket add otterize-cli https://github.com/otterize/scoop-otterize-cli\nscoop update\nscoop install otterize-cli\n"))),(0,o.kt)(r.Z,{value:"64-bit",label:"64-bit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PowerShell"},"Invoke-WebRequest -Uri https://get.otterize.com/otterize-cli/v0.1.29/otterize_Windows_x86_64.zip -OutFile otterize_Windows_x86_64.zip\nExpand-Archive otterize_Windows_x86_64.zip -DestinationPath .\n# optionally move to PATH\n"))))),(0,o.kt)(r.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"64-bit",label:"64-bit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://get.otterize.com/otterize-cli/v0.1.29/otterize_Linux_x86_64.tar.gz\ntar xf otterize_Linux_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n")))))),(0,o.kt)("p",null,"More variants are available at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/otterize/otterize-cli/releases"},"GitHub Releases page"),".")),(0,o.kt)("h2",{id:"install-kafka"},"Install Kafka"),(0,o.kt)("p",null,"We will deploy a Kafka broker using Bitnami's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/kafka"},"Helm chart"),".\nIn the chart we will configure Kafka to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Recognize the Otterize intents operator as a super user so it can configure ACLs."),(0,o.kt)("li",{parentName:"ul"},"Turn on Kafka debug logging to allow the Kafka watcher to feed topic-level client access information to the network mapper.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see the Helm values.yaml used with the Bitnami chart"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'listeners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nadvertisedListeners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\n# For a gradual rollout scenario we will want to keep the default permission for topics as allowed, unless an ACL was set\nallowEveryoneIfNoAclFound: true\n# Allocate resources\nresources:\n  requests:\n    cpu: 50m\n    memory: 256Mi\nlog4j: |\n  # Unspecified loggers and loggers with additivity=true output to server.log and stdout\n  # Note that INFO only applies to unspecified loggers, the log level of the child logger is used otherwise\n  \n  log4j.rootLogger=INFO, stdout, kafkaAppender\n\n  log4j.appender.stdout=org.apache.log4j.ConsoleAppender\n  log4j.appender.stdout.layout=org.apache.log4j.PatternLayout\n  log4j.appender.stdout.layout.ConversionPattern=[%d] %p %m (%c)%n\n  \n  log4j.appender.kafkaAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.kafkaAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.kafkaAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n  \n  log4j.appender.stateChangeAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.stateChangeAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.stateChangeAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n  \n  log4j.appender.requestAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.requestAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.requestAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n  \n  log4j.appender.cleanerAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.cleanerAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.cleanerAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n  \n  log4j.appender.controllerAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.controllerAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.controllerAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n  \n  log4j.appender.authorizerAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.authorizerAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.authorizerAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n\n\n  # Change the line below to adjust ZK client logging\n  log4j.logger.org.apache.zookeeper=INFO\n\n  # Change the two lines below to adjust the general broker logging level (output to server.log and stdout)\n  log4j.logger.kafka=INFO, stdout\n  log4j.logger.org.apache.kafka=INFO\n\n  # Change to DEBUG or TRACE to enable request logging\n  log4j.logger.kafka.request.logger=WARN, requestAppender\n  log4j.additivity.kafka.request.logger=false\n\n  # Uncomment the lines below and change log4j.logger.kafka.network.RequestChannel$ to TRACE for additional output\n  # related to the handling of requests\n  #log4j.logger.kafka.network.Processor=TRACE, requestAppender\n  #log4j.logger.kafka.server.KafkaApis=TRACE, requestAppender\n  #log4j.additivity.kafka.server.KafkaApis=false\n  log4j.logger.kafka.network.RequestChannel$=WARN, requestAppender\n  log4j.additivity.kafka.network.RequestChannel$=false\n\n  # Change the line below to adjust KRaft mode controller logging\n  log4j.logger.org.apache.kafka.controller=INFO, controllerAppender\n  log4j.additivity.org.apache.kafka.controller=false\n\n  # Change the line below to adjust ZK mode controller logging\n  log4j.logger.kafka.controller=TRACE, controllerAppender\n  log4j.additivity.kafka.controller=false\n\n  log4j.logger.kafka.log.LogCleaner=INFO, cleanerAppender\n  log4j.additivity.kafka.log.LogCleaner=false\n\n  log4j.logger.state.change.logger=INFO, stateChangeAppender\n  log4j.additivity.state.change.logger=false\n\n  # Access denials are logged at INFO level, change to DEBUG to also log allowed accesses\n  log4j.logger.kafka.authorizer.logger=DEBUG, authorizerAppender\n  log4j.additivity.kafka.authorizer.logger=false\nauthorizerClassName: kafka.security.authorizer.AclAuthorizer\n\n'))),(0,o.kt)("p",null,"The following command will deploy a Kafka broker with this chart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nhelm install --create-namespace -n kafka \\\n  -f https://docs.otterize.com/code-examples/kafka-mapping/helm/values.yaml kafka bitnami/kafka --version 21.4.4\n")),(0,o.kt)("h2",{id:"deploy-demo-to-simulate-traffic"},"Deploy demo to simulate traffic"),(0,o.kt)("p",null,"Let's add a few services that will access our Kafka server, and see how the network mapper builds the access map:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'One service named "',(0,o.kt)("strong",{parentName:"li"},"client"),'".'),(0,o.kt)("li",{parentName:"ul"},'One service named "',(0,o.kt)("strong",{parentName:"li"},"client-2"),'".')),(0,o.kt)("p",null,"To deploy these services, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-tutorial-kafka-mapping -f https://docs.otterize.com/code-examples/kafka-mapping/all.yaml\n")),(0,o.kt)("p",null,"Each of these services is built to periodically call the Kafka broker we deployed. Because that broker has the Otterize OSS Kafka watcher enabled and feeding data to the network mapper, we can query the network mapper directly to see the map it has built up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"otterize network-mapper list -n otterize-tutorial-kafka-mapping\n")),(0,o.kt)("p",null,"We expect to see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client")," consuming from ",(0,o.kt)("inlineCode",{parentName:"li"},"mytopic"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client-2")," producing to ",(0,o.kt)("inlineCode",{parentName:"li"},"mytopic"),".")),(0,o.kt)("p",null,"And indeed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"client in namespace otterize-tutorial-kafka-mapping calls:\n  - kafka in namespace kafka\n    - Kafka topic: transactions, operations: [describe]\n    - Kafka topic: mytopic, operations: [describe consume]\nclient-2 in namespace otterize-tutorial-kafka-mapping calls:\n  - kafka in namespace kafka\n    - Kafka topic: transactions, operations: [describe]\n    - Kafka topic: mytopic, operations: [produce describe]\n")),(0,o.kt)("p",null,"If you've attached Otterize OSS to Otterize Cloud, go back to see the ",(0,o.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"access graph in your browser"),".\n",(0,o.kt)("strong",{parentName:"p"},"To only see Kafka information"),", make sure to de-select the 'Use in access graph' settings for network policies and Istio policies, and leave Kafka ACLs selected, like so:\n",(0,o.kt)("img",{alt:"Access graph settings",src:a(6188).Z,width:"788",height:"135"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Access graph",src:a(2135).Z,width:"1374",height:"687"}),"\nOnly the arrows between the clients and the Kafka are green, because we've selected Kafka ACLs for access graph. The other arrows were detected through network mapping, but since there's no Kafka mapping for those arrows, they are grayed out."),(0,o.kt)("p",null,"Clicking on a specific arrow between a client and the broker reveals which topic and operations are being accessed."),(0,o.kt)("h2",{id:"what-did-we-accomplish"},"What did we accomplish?"),(0,o.kt)("p",null,"Enabling the Kafka watcher component of the network mapper shows which clients connect to running Kafka servers, the topics they access, and the operations they undertake on those topics."),(0,o.kt)("p",null,"You can consume this information in various ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visually via the access graph, where shadow mode shows you what would in enforcement mode before actually turning on enforcement, and auto-generating client intents to bootstrap rolling out IBAC."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/cli"},"Via the CLI"),": from the network mapper directly or the cloud."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://app.otterize.com/api/rest/v1beta"},"Via the API"),".")),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Try our ",(0,o.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-kafka-mtls"},"secure access for Kafka")," tutorial"),(0,o.kt)("li",{parentName:"ul"},"Follow ",(0,o.kt)("a",{parentName:"li",href:"/quick-visual-tutorials/visual-ibac-kafka-k8s"},"a more visual tutorial")," for securing Kafka with IBAC in a demo ecommerce application."),(0,o.kt)("li",{parentName:"ul"},"Learn how to easily secure pod-to-pod access with IBAC using Kubernetes network policies, in ",(0,o.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-network-policies"},"a hands-on tutorial")," or ",(0,o.kt)("a",{parentName:"li",href:"/quick-visual-tutorials/visual-ibac-network-policies"},"a more visual tutorial"),".")),(0,o.kt)("h2",{id:"teardown"},"Teardown"),(0,o.kt)("p",null,"To remove the deployed examples run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall otterize -n otterize-system\nhelm uninstall kafka -n kafka\nhelm delete ns otterize-tutorial-kafka-mapping\n")))}m.isMDXComponent=!0},3875:()=>{},2135:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/discovered-84c1a90372557aff43ceb82ec61f9766.png"},6188:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/settings-2bfc6ec0150b3edf11559bfd113eaf61.png"}}]);