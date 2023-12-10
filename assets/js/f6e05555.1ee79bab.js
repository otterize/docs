"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Otterize Cloud"},i=void 0,s={unversionedId:"otterize-cloud/README",id:"otterize-cloud/README",title:"Otterize Cloud",description:"Otterize Cloud provides a cloud-based control plane for deploying and managing intents-based access control (IBAC).",source:"@site/docs/otterize-cloud/README.mdx",sourceDirName:"otterize-cloud",slug:"/otterize-cloud/",permalink:"/otterize-cloud/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/otterize-cloud/README.mdx",tags:[],version:"current",frontMatter:{title:"Otterize Cloud"},sidebar:"docSidebar",previous:{title:"Usage telemetry",permalink:"/otterize-oss/usage-telemetry"},next:{title:"Object model",permalink:"/otterize-cloud/object-model"}},l={},c=[{value:"What it does",id:"what-it-does",level:2},{value:"The access graph",id:"the-access-graph",level:2},{value:"Filters",id:"filters",level:3},{value:"Understanding the access graph",id:"understanding-the-access-graph",level:3},{value:"Namespaces and environments",id:"namespaces-and-environments",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Otterize Cloud provides a cloud-based control plane for deploying and managing ",(0,r.kt)("a",{parentName:"p",href:"/intent-based-access-control"},"intents-based access control (IBAC)"),"."),(0,r.kt)("p",null,"It currently supports IBAC within Kubernetes clusters, configuring access between pods and access to Kafka nodes using network policies and Kafka ACLs.\nSoon, Otterize Cloud will also support IBAC across clusters and non-Kubernetes services and resources (e.g. standalone and managed Kafka, RDS, etc.).\nThis page is focused on the current capabilities of Otterize Cloud."),(0,r.kt)("h2",{id:"what-it-does"},"What it does"),(0,r.kt)("p",null,"Otterize Cloud attaches to ",(0,r.kt)("a",{parentName:"p",href:"/otterize-oss"},"Otterize OSS")," operators (the intents operator, network mapper, and credentials operator) running in your Kubernetes clusters.\nWhile Otterize OSS does the heavy lifting ","\u2014"," mapping pod-to-pod traffic, responding to intents files applied with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," and\nconfiguring network policies, Kafka ACLs, and Istio authorization policies ","\u2014"," Otterize Cloud adds:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Visibility"),": visualize the network map of any connected cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Confidence"),": run Otterize OSS in ",(0,r.kt)("strong",{parentName:"li"},"shadow mode"),", i.e. without enforcement, and see what ",(0,r.kt)("em",{parentName:"li"},"would")," happen when you turn on enforcement."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Operationalization"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Map namespaces to environments to see everything in the language of development cycle."),(0,r.kt)("li",{parentName:"ul"},"Use the (optional) Otterize Cloud identity service instead of operating SPIRE yourself (the default for standalone Otterize OSS).")))),(0,r.kt)("h2",{id:"the-access-graph"},"The access graph"),(0,r.kt)("p",null,'Otterize Cloud collects information from Otterize OSS, including the declared intents of clients to call servers ("discovered intents"),\nthe implied intents of clients actually calling servers ("discovered intents"), certificate information, and various configurations.\nAll of this is presented in a unified, filtered view called the ',(0,r.kt)("strong",{parentName:"p"},"access graph"),": a knowledge graph of which services call each other,\nare they blocked or would they be blocked if enforcement were turned on, are they protected, and how are they configured."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Otterize Cloud - access graph 1",src:n(7645).Z,width:"3062",height:"2118"}),"\n",(0,r.kt)("img",{alt:"Otterize Cloud - access graph 2",src:n(5454).Z,width:"3062",height:"2118"})),(0,r.kt)("p",null,"The access graph ",(0,r.kt)("strong",{parentName:"p"},"continuously")," reflects the state of your cluster, as reported by the Otterize OSS operators. Any changes made in the cluster appear in real time in Otterize Cloud."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Otterize Cloud ",(0,r.kt)("strong",{parentName:"p"},"reads")," information from your cluster via Otterize OSS (when the latter is deployed with Otterize Cloud credentials)\nbut Otterize Cloud ",(0,r.kt)("strong",{parentName:"p"},"does not write")," anything to your cluster: any modifications to your cluster only occur because of changes you make locally within your cluster."),(0,r.kt)("p",{parentName:"admonition"},"For example, to change between shadow mode (no enforcement) and active enforcement mode, you change the Otterize intents operator configuration locally in your cluster, and redeploy it.")),(0,r.kt)("h3",{id:"filters"},"Filters"),(0,r.kt)("p",null,"The access graph may be viewed for one ",(0,r.kt)("strong",{parentName:"p"},"cluster")," at a time. Within a cluster, you may filter by ",(0,r.kt)("strong",{parentName:"p"},"environment")," and by ",(0,r.kt)("strong",{parentName:"p"},"namespace"),"."),(0,r.kt)("p",null,"The access graph shows all the services discovered in the selected cluster that meet the filter criteria. Services are discovered in one of two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Via the network mapper, which collects pod-to-pod connections (attempted and successful) and builds a network map of "discovered intents".'),(0,r.kt)("li",{parentName:"ul"},"Via the intents operator, which reports intents declared by (client) services to call (server) services, applied via ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl"),".")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: currently, services that have neither discovered nor declared intents attached to them at all will not appear in the access graph. This will be addressed soon.")),(0,r.kt)("p",null,'Since discovered intents history is kept indefinitely, the access graph will eventually contain services that are no longer relevant.\nTo filter out old discovered intents and the services that only appear because of them, use the "',(0,r.kt)("strong",{parentName:"p"},"Since:"),'" filter.'),(0,r.kt)("h3",{id:"understanding-the-access-graph"},"Understanding the access graph"),(0,r.kt)("p",null,"When viewing the access graph for a cluster, the cluster's state is displayed at the top, to help you better understand the access graph."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Otterize Cloud - access graph cluster state",src:n(8518).Z,width:"2608",height:"272"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"You can easily tell whether whether all operators are ",(0,r.kt)("b",null,"connected or not"),"."),"For example, if either the network mapper or the intents operator is not connected, the access graph will not be able to compare the discovered intents with the explicitly declared intents and show what calls are or would be blocked."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"You can tell whether the operators are in ",(0,r.kt)("b",null,"active")," or ",(0,r.kt)("b",null,"shadow")," mode."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If active, they are managing network policies and Kafka ACLs to enforce access controls (and authorize intended access).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In shadow mode, you can build confidence in your IBAC rollout by seeing what would happen before you turn on enforcement.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"You can tell Otterize Cloud what you'd like to see and what's your cluster's non-Otterize configuration."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you've set up a ",(0,r.kt)("b",null,"global default deny")," network policy that only allows pod-to-pod access if an explicit pod-to-pod network policy allows it, check this box.\nThe access graph will know that services are always protected unless those explicit policies are in place, and will show blocking information accordingly.\nNote that the access graph assumes that Otterize is managing any (ingress) network policies beyond this global default deny.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you've set up a ",(0,r.kt)("b",null,"global default deny")," Istio authorization policy that only allows pod-to-pod HTTP access if an explicit Istio pod-to-pod authorization policy allows it, check this box.\nThe access graph will know that services are always protected unless those explicit policies are in place, and will show blocking information accordingly.\nNote that the access graph assumes that Otterize is managing any Istio authorization policies beyond this global default deny.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you're only interested in some access controls, turn off the \"",(0,r.kt)("b",null,"Use in access graph"),'"" toggles for those you\'re not interested in.\nThe access graph will not take those into account when calculating service and intents states,\nand will not show alerts or recommendations related to them.')))),(0,r.kt)("p",null,"The access graph combines all the information about the Kubernetes cluster and the services and intents in it to show you insights about service to service access."),(0,r.kt)("p",null,"Here is the meaning of the various arrows connecting the services ","\u2014"," the edges of the graph that connect its nodes:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Otterize Cloud - access graph legend",src:n(7890).Z,width:"1046",height:"544"})),(0,r.kt)("p",null,"Solid colored arrows indicate that all discovered intents ","\u2014"," calls that were detected by the network mapper ","\u2014"," were declared as intents. There may even be declared intents beyond what was detected."),(0,r.kt)("p",null,"Dashed colored arrows indicate that at least some discovered intents were not declared."),(0,r.kt)("p",null,"Solid black arrows indicate declared intents from the intents operator only, when the network mapper isn't integrated and supplying information on actual, discovered intents."),(0,r.kt)("p",null,"Dashed black arrows indicate discovered intents from the network mapper only, when the intents operator isn't integrated and supplying information on declared intents."),(0,r.kt)("h2",{id:"namespaces-and-environments"},"Namespaces and environments"),(0,r.kt)("p",null,"In a Kubernetes cluster, all services are contained within ",(0,r.kt)("strong",{parentName:"p"},"namespaces"),". Namespaces are used to group services that are similar in some way, and to separate them from other groups of services."),(0,r.kt)("p",null,"When intents are reported to Otterize Cloud, they include information about which namespaces their services are in. If the client and server are in different namespaces, the intent is called a cross-namespace intent. In any case, Otterize Cloud contains representations of all the namespaces reported to it by their association with intents, as well as which services they contain."),(0,r.kt)("p",null,"Because different namespaces may be mapped to different environments, intents may also be cross-environment."),(0,r.kt)("p",null,"In Kubernetes, namespace names must be unique within a cluster."),(0,r.kt)("p",null,"Otterize Cloud adds the concept of ",(0,r.kt)("strong",{parentName:"p"},"environments"),". These have the same meaning usually used in software development: dev, staging, production, etc."),(0,r.kt)("p",null,"You can create and manage as many environments as you need in Otterize Cloud. Just make sure they are meaningful to you. To map them to your cluster, map each namespace to the appropriate environment. All services in a namespace in a cluster are in the same environment. In configuring the integration of the cluster with Otterize Cloud, you will define the ",(0,r.kt)("strong",{parentName:"p"},"default environment")," to which namespaces in that cluster are mapped. Namespaces will be assigned to that environment until you map them to a different environment. If in your situation a cluster is considered to all be within an environment, you won't have to do anything once you've defined the default environment for namespaces in that cluster."),(0,r.kt)("p",null,"Environment names must be unique within an organization."))}u.isMDXComponent=!0},8518:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access-graph-cluster-state-f444b72439bb98fe6f9fa971dd4247b9.png"},7890:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access-graph-legend-8658e743bff64c6ef5e62c57526d3e2a.png"},7645:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access-graph-screenshot-1-b5de27657e7d7e79b7f728267d03c446.png"},5454:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access-graph-screenshot-2-d7e72c51dc88f284b036f4071b383d23.png"}}]);