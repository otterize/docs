"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=l,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),l=n(7294),i=n(6010),o=n(2389),r=n(7392),s=n(7094),p=n(2466);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:u,values:k,groupId:g,className:h}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,r.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===u?u:null!=(t=null!=u?u:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[T,z]=(0,l.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=g){const e=w[g];null!=e&&e!==T&&b.some((t=>t.value===e))&&z(e)}const S=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==T&&(C(t),z(a),null!=g&&N(g,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var l;const t=x.indexOf(e.currentTarget)-1;n=null!=(l=x[t])?l:x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:A,onFocus:S,onClick:S},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function u(e){const t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(7462),l=(n(7294),n(3905)),i=n(5488),o=n(5162);const r={sidebar_position:2,title:"IBAC in Kubernetes via network policies"},s=void 0,p={unversionedId:"documentation/guides/k8s-ibac-via-network-policies",id:"documentation/guides/k8s-ibac-via-network-policies",title:"IBAC in Kubernetes via network policies",description:"Recap: K8s network policies and CNI network plugins",source:"@site/docs/documentation/4-guides/2-k8s-ibac-via-network-policies.mdx",sourceDirName:"documentation/4-guides",slug:"/documentation/guides/k8s-ibac-via-network-policies",permalink:"/documentation/guides/k8s-ibac-via-network-policies",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/4-guides/2-k8s-ibac-via-network-policies.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"IBAC in Kubernetes via network policies"},sidebar:"docSidebar",previous:{title:"Installing Otterize in Kubernetes",permalink:"/documentation/guides/k8s-installation"},next:{title:"Intent-based access control for Kafka in Kubernetes",permalink:"/documentation/guides/ibac-for-k8s-kafka/"}},c={},m=[{value:"Recap: K8s network policies and CNI network plugins",id:"recap-k8s-network-policies-and-cni-network-plugins",level:2},{value:"How a network policy looks like",id:"how-a-network-policy-looks-like",level:3},{value:"Applying intents on an existing cluster",id:"applying-intents-on-an-existing-cluster",level:2},{value:"Deploying the demo",id:"deploying-the-demo",level:3},{value:"Setting security scope via default network policies",id:"setting-security-scope-via-default-network-policies",level:3},{value:"Default deny netwrk policy",id:"default-deny-netwrk-policy",level:4},{value:"Auto generating network policies for ingress",id:"auto-generating-network-policies-for-ingress",level:3},{value:"Walkthrough - applying the first intent",id:"walkthrough---applying-the-first-intent",level:3},{value:"Deep dive - how intents translate to network policies.",id:"deep-dive---how-intents-translate-to-network-policies",level:2},{value:"Deploy example",id:"deploy-example",level:3},{value:"Track artifacts",id:"track-artifacts",level:3},{value:"\u2026",id:"",level:2},{value:"Practical notes",id:"practical-notes",level:2},{value:"Avoiding drift",id:"avoiding-drift",level:3},{value:"Avoiding blocking of essential services",id:"avoiding-blocking-of-essential-services",level:3}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"recap-k8s-network-policies-and-cni-network-plugins"},"Recap: K8s network policies and CNI network plugins"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"Network policies")," are one of the tools we\ncan use for traffic shaping within K8s clusters. They allow us to shape traffic using selectors, policies, and L3\nand L4 identifiers. To enforce network policies, a Kubernetes cluster requires a CNI supporting network policies to be\ninstalled. Some popular options are Calico and Cilium."),(0,l.kt)("h3",{id:"how-a-network-policy-looks-like"},"How a network policy looks like"),(0,l.kt)("p",null,"Let's take a look at an example showing a network policy allowing traffic"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"from")," pods labeled ",(0,l.kt)("inlineCode",{parentName:"li"},"app:backend")," in namespaces labeled ",(0,l.kt)("inlineCode",{parentName:"li"},"env:production")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"to")," pods labeled ",(0,l.kt)("inlineCode",{parentName:"li"},"app:db")," in the namespace  ",(0,l.kt)("inlineCode",{parentName:"li"},"production-db"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-production-backend\n  # highlight-next-line\n  namespace: production-db            # [Target filter] Policy applies to target pods in this namespace\nspec:\n  podSelector:\n    matchLabels:\n      # highlight-next-line\n      app: db                         # [Target filter] Policy applies to target pods with this label\n  policyTypes:\n    # highlight-next-line\n    - Ingress                         # [Direction] Policy implemented as a filter on incoming connections\n  ingress:\n    - from:\n        - namespaceSelector:\n            matchLabels:\n              # highlight-next-line\n              env: production         # [Source filter] Policy filters source pods from namespaces with this label\n        - podSelector:\n            matchLabels:\n              # highlight-next-line\n              app: backend            # [Source filter] Policy filters source pods from with this label\n")),(0,l.kt)("h2",{id:"applying-intents-on-an-existing-cluster"},"Applying intents on an existing cluster"),(0,l.kt)("p",null,"To apply intents on an existing cluster you will need to install Otterize with the network policies\noption enabled. You can follow the ",(0,l.kt)("a",{parentName:"p",href:"/documentation/guides/k8s-installation"},"complete installation")," or\ninstall only the ",(0,l.kt)("a",{parentName:"p",href:"/documentation/guides/k8s-installation#network-policies-only"},"network policy components"),"."),(0,l.kt)("p",null,"The following sections refer to a demo deployment we will deploy at first and then start configuring intents for."),(0,l.kt)("h3",{id:"deploying-the-demo"},"Deploying the demo"),(0,l.kt)("p",null,"Let's explore how a gradual rollout looks like. For our demo environment\nwe will use the Google microservices ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/microservices-demo"},"demo"),"\nwhich simulates an e-commerce application running on K8s built from multiple services, tech stack and programming languages."),(0,l.kt)("p",null,"The application layout is as follows\n",(0,l.kt)("img",{parentName:"p",src:"https://github.com/GoogleCloudPlatform/microservices-demo/raw/main/docs/img/architecture-diagram.png",alt:"Demo e-commerce"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"To deploy the demo run",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace otterize-ecom-demo\nkubectl apply -n otterize-ecom-demo -f https://raw.githubusercontent.com/GoogleCloudPlatform/microservices-demo/main/release/kubernetes-manifests.yaml\n"))),(0,l.kt)("li",{parentName:"ol"},"You can check that the cluster was deployed using",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-ecom-demo\n")),"You should see",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," NAME                                     READY   STATUS    RESTARTS   AGE\n adservice-694f4ff98-cz4nn                1/1     Running   0          23m\n cartservice-85f8bc44fd-45cbk             1/1     Running   0          23m\n checkoutservice-8fc47bbbd-9lhfv          1/1     Running   0          23m\n currencyservice-597bdf576b-8hftc         1/1     Running   0          23m\n emailservice-d5c6f74dd-qlwc4             1/1     Running   0          23m\n frontend-7ffbf49884-j9rhz                1/1     Running   0          23m\n loadgenerator-65779994db-tgdxk           1/1     Running   0          23m\n paymentservice-76b9c8b87d-ktfcd          1/1     Running   0          23m\n productcatalogservice-6969d4f5fd-xdw99   1/1     Running   0          23m\n recommendationservice-58798d5c8-2f4rz    1/1     Running   0          23m\n redis-cart-6f65887b5d-xwpz5              1/1     Running   0          23m\n shippingservice-ff5f4d7d-qcjw8           1/1     Running   0          23m\n"))),(0,l.kt)("li",{parentName:"ol"},"To get the load balancer address run",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get service -n otterize-ecom-demo frontend-external -o json | jq -r .status.loadBalancer.ingress[0].hostname\n")),"And you should get a result similar to (if running on EKS)",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"a11843075fd254f8099a986467098647-1889474685.us-east-1.elb.amazonaws.com\n")),"Go ahead and browse the website to get a feel for its behavior.",(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The load balancer address might take some time to populate across dns servers.")))),(0,l.kt)("h3",{id:"setting-security-scope-via-default-network-policies"},"Setting security scope via default network policies"),(0,l.kt)("p",null,"Two common approaches for working with network policies are"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Allow all traffic between pods, protect some pods by applying ingress network policies to them."),(0,l.kt)("li",{parentName:"ul"},"Block all traffic between pods except allowed traffic by network policies.")),(0,l.kt)("p",null,"You can apply both approaches (allow/block all) within your cluster (e.g. by applying network policies based on\nnamespaces)."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Applying an ingress network policy to a pod will automatically block all communications to it except those allowed by\nnetwork policies.")),(0,l.kt)("h4",{id:"default-deny-netwrk-policy"},"Default deny netwrk policy"),(0,l.kt)("p",null,"To block all traffic within a namespace (e.g. ",(0,l.kt)("em",{parentName:"p"},"production"),") you can apply a default deny network policy like the\nfollowing example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-ingress\n  namespace: production\nspec:\n  podSelector: { }\n  policyTypes:\n    - Ingress\n")),(0,l.kt)("h3",{id:"auto-generating-network-policies-for-ingress"},"Auto generating network policies for ingress"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Otterize defaults to automatically generate network policies for LoadBalancer, NodePort, and Ingress traffic\nwhen an intent will generate a network policy that can block existing traffic. To disable this feature XXX")),(0,l.kt)("p",null,"Let's look at an example from our demo. We have a ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," service being accessed from multiple source"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"loadgenerator")," calls it from within the cluster to generate traffic"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"frontend-external")," is a ",(0,l.kt)("inlineCode",{parentName:"li"},"LoadBalancer")," directing traffic from outside the cluster to the ",(0,l.kt)("inlineCode",{parentName:"li"},"frontend"))),(0,l.kt)("p",null,"Be applying the following intents file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\n  name: loadgenerator\nspec:\n  service:\n    name: loadgenerator\n  calls:\n    - name: frontend\n      type: HTTP\n")),(0,l.kt)("p",null,"Otterize will generate a network policy allowing access from the ",(0,l.kt)("inlineCode",{parentName:"p"},"loadgenerator")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend"),".\nIf left unhandled, any other traffic not allowed by existing network policies to the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," will get blocked. In our\ncase that means that the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend-external")," ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," won't be able to communicate with with ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend"),"."),(0,l.kt)("p",null,"To overcome this, Otterize will automatically generate a network policy to allow traffic from ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend-external"),"\nto ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," by relying on the existence of the ingress (in this case ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),") as an intent between the two."),(0,l.kt)("p",null,"FAQ:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Why can't Otterize always generate network policies for ingress types?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If no network policies exist, automatically generating a network policy to allow ",(0,l.kt)("inlineCode",{parentName:"li"},"frontend-external")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"frontend")," will\nblock existing traffic like ",(0,l.kt)("inlineCode",{parentName:"li"},"loadgenerator")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"frontend"),".")))),(0,l.kt)("h3",{id:"walkthrough---applying-the-first-intent"},"Walkthrough - applying the first intent"),(0,l.kt)("p",null,"From looking at the e-commerce application diagram we can see that the ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalog")," service is being called from two\nservices: ",(0,l.kt)("inlineCode",{parentName:"p"},"checkout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendation"),"."),(0,l.kt)("p",null,"If we apply an intent only for the ",(0,l.kt)("inlineCode",{parentName:"p"},"recommendation")," to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalog")," a matching network policy will be generated\nto allow it. ",(0,l.kt)("strong",{parentName:"p"},"But"),", since we haven't applied an intent for the ",(0,l.kt)("inlineCode",{parentName:"p"},"checkout")," service to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"productcatalog")," then the\n",(0,l.kt)("inlineCode",{parentName:"p"},"checkout")," service will be blocked."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Let's see this state in action. First we'll apply the intent for ",(0,l.kt)("inlineCode",{parentName:"li"},"recommendation"),"->",(0,l.kt)("inlineCode",{parentName:"li"},"productcatalog"))),(0,l.kt)("h2",{id:"deep-dive---how-intents-translate-to-network-policies"},"Deep dive - how intents translate to network policies."),(0,l.kt)("p",null,"Let's follow an example scenario and track how Otterize configures network policies when we apply intents."),(0,l.kt)("h3",{id:"deploy-example"},"Deploy example"),(0,l.kt)("p",null,"Our example consists of two pods: an HTTP server and a client that calls it. We also deploy a default-deny ingress network policy,\nblocking pods from accepting incoming calls unless another network policy explicitly allows them."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\nname: otterize-tutorial-npol\n"))),(0,l.kt)(o.Z,{value:"server.yaml",label:"server.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: server\nnamespace:  otterize-tutorial-npol\nspec:\nselector:\n matchLabels:\n   app: server\ntemplate:\n metadata:\n   labels:\n     app: server\n spec:\n   containers:\n     - name: server\n       image: hashicorp/http-echo\n       args: [ "-listen=:80", "-text=Hi, I am the server, you called, may I help you?"]\n---\napiVersion: v1\nkind: Service\nmetadata:\nname: server\nnamespace:  otterize-tutorial-npol\nspec:\nselector:\n app: server\nports:\n - protocol: TCP\n   port: 80\n   targetPort: 80\n'))),(0,l.kt)(o.Z,{value:"client.yaml",label:"client.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: client\nnamespace:  otterize-tutorial-npol\nspec:\nselector:\n matchLabels:\n   app: client\ntemplate:\n metadata:\n   labels:\n     app: client\n spec:\n   containers:\n     - name: client\n       image: alpine/curl\n       command: [ "/bin/sh", "-c", "--" ]\n       args: [ "while true; do echo \\"Calling server...\\"; if ! timeout 2 curl -si server 2>/dev/null; then echo \\"curl timed out\\"; fi; sleep 2; done" ]\n'))),(0,l.kt)(o.Z,{value:"default-deny.yaml",label:"default-deny.yaml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\nname: default-deny-ingress\nnamespace:  otterize-tutorial-npol\nspec:\npodSelector: {}\npolicyTypes:\n - Ingress\n")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Deploy the client, server, and the default deny network policy using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/network-policies/all.yaml\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check that the ",(0,l.kt)("inlineCode",{parentName:"p"},"client")," and server ",(0,l.kt)("inlineCode",{parentName:"p"},"pods")," were deployed"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-npol\n")),(0,l.kt)("p",{parentName:"li"},"You should see"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5689997b5c-grlnt   1/1     Running   0          35s\nserver-6698c58cbc-v9n9b   1/1     Running   0          34s\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The client intents to call the server are declared with this ",(0,l.kt)("inlineCode",{parentName:"p"},"intents.yaml")," file:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha1\nkind: ClientIntents\nmetadata:\nname: client\nnamespace:  otterize-tutorial-npol\nspec:\nservice:\n name: client\ncalls:\n - name: server\n   type: HTTP\n")),(0,l.kt)("p",{parentName:"li"},"   Let's apply it:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://docs.otterize.com/code-examples/network-policies/intents.yaml\n")))),(0,l.kt)("h3",{id:"track-artifacts"},"Track artifacts"),(0,l.kt)("p",null,"After applying the intents file Otterize generated multiple artifacts to configure access from the client to\nserver via network policies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a network policy allowing traffic from the ","[client, namespace -labeled]"," pods to ","[server-labeled]"," pods"),(0,l.kt)("li",{parentName:"ul"},"Label the client pods"),(0,l.kt)("li",{parentName:"ul"},"Label the client pod namespaces"),(0,l.kt)("li",{parentName:"ul"},"Label the server pods")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Let's look at the generated network policy"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe networkpolicies -n otterize-tutorial-npol access-to-server-from-otterize-tutorial-npol\n")),(0,l.kt)("p",{parentName:"li"},"You should see (without the comments)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Name:         access-to-server-from-otterize-tutorial-npol\n# [Target filter] namespace\n# highlight-next-line\nNamespace:    otterize-tutorial-npol\nCreated on:   2022-09-08 19:12:24 +0300 IDT\nLabels:       intents.otterize.com/network-policy=true\nAnnotations:  <none>\nSpec:\n  # [Target filter] pods with this label\n  # highlight-next-line\n  PodSelector:     intents.otterize.com/server=server-otterize-tutorial-np-7e16db\n  Allowing ingress traffic:\n    To Port: <any> (traffic allowed to all ports)\n    From:\n      # [Source filter] namespaces with this label\n      # highlight-next-line\n      NamespaceSelector: intents.otterize.com/namespace-name=otterize-tutorial-npol\n      # [Source filter] pods with this label\n      # highlight-next-line\n      PodSelector: intents.otterize.com/access-server-otterize-tutorial-np-7e16db=true\n  Not affecting egress traffic\n  # [Direction]\n  # highlight-next-line\n  Policy Types: Ingress\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"And we can also see that the client and server pods are now labeled"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-npol --show-labels\n")),(0,l.kt)("p",{parentName:"li"},"You should see"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                      READY   STATUS    RESTARTS   AGE     LABELS\nclient-5cb67b748-l25vg    1/1     Running   0          7m57s   app=client,intents.otterize.com/access-server-otterize-tutorial-np-7e16db=true,intents.otterize.com/client=true,intents.otterize.com/server=client-otterize-tutorial-np-699302,pod-template-hash=5cb67b748,spire-integration.otterize.com/service-name=client\nserver-564b56f596-54str   1/1     Running   0          7m56s   app=server,intents.otterize.com/server=server-otterize-tutorial-np-7e16db,pod-template-hash=564b56f596,spire-integration.otterize.com/service-name=server\n")),(0,l.kt)("p",{parentName:"li"},"The key labels are"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For the server - ",(0,l.kt)("span",{style:{color:"gray"}},"intents.otterize.com/server"),"=",(0,l.kt)("span",{style:{color:"magenta"}},"server"),"-",(0,l.kt)("span",{style:{color:"red"}},"otterize-tutorial-np"),"-",(0,l.kt)("span",{style:{color:"green"}},"7e16db"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"gray"}},"intents.otterize.com/server")," - Otterize label prefix"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"magenta"}},"server")," - Server pod name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"red"}},"otterize-tutorial-np")," - Server pod namespace (might be truncated)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"green"}},"7e16db")," - Hash for server pod name and and namespace"))),(0,l.kt)("li",{parentName:"ul"},"For the client - ",(0,l.kt)("span",{style:{color:"gray"}},"intents.otterize.com/access"),"-",(0,l.kt)("span",{style:{color:"magenta"}},"server"),"-",(0,l.kt)("span",{style:{color:"red"}},"otterize-tutorial-np"),"-",(0,l.kt)("span",{style:{color:"green"}},"7e16db"),"=true",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"gray"}},"intents.otterize.com/server")," - Otterize label prefix"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"magenta"}},"server")," - Server pod name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"red"}},"otterize-tutorial-np")," - Server pod namespace (might be truncated)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{color:"green"}},"7e16db")," - Hash for server pod name and and namespace"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Finally, let's look at the namespace label with"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get namespace otterize-tutorial-npol --show-labels\n")),(0,l.kt)("p",{parentName:"li"},"  You should see"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                     STATUS   AGE   LABELS\notterize-tutorial-npol   Active   36s   intents.otterize.com/namespace-name=otterize-tutorial-npol,kubernetes.io/metadata.name=otterize-tutorial-npol\n")),(0,l.kt)("p",{parentName:"li"},"  With the new label add by otterize - ",(0,l.kt)("inlineCode",{parentName:"p"},"intents.otterize.com/namespace-name=otterize-tutorial-npol")))),(0,l.kt)("h2",{id:""},"\u2026"),(0,l.kt)("h2",{id:"practical-notes"},"Practical notes"),(0,l.kt)("h3",{id:"avoiding-drift"},"Avoiding drift"),(0,l.kt)("h3",{id:"avoiding-blocking-of-essential-services"},"Avoiding blocking of essential services"),(0,l.kt)("p",null,"Otterize automatically generates network policies, when needed, to allow load balancers, ingresses and other XXX to\ncommunicate with their intended targets within the cluster.\nThink of the following scenario"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There's an internet facing load balancer calling the frontend service"),(0,l.kt)("li",{parentName:"ul"},"There's an internal load generator service also calling the frontend service"),(0,l.kt)("li",{parentName:"ul"},"The user created an intents file with an intent to call the frontend service from the load generator service"),(0,l.kt)("li",{parentName:"ul"},"Otterize will then generate a network policy for ","[load generator service->frontend service]"),(0,l.kt)("li",{parentName:"ul"},"That network policy will block traffic from the load balancer unless we take action"),(0,l.kt)("li",{parentName:"ul"},"That is why Otterize will also identify this case and generate another network policy to allow traffic from the load\nbalancer to the frontend.")))}u.isMDXComponent=!0}}]);