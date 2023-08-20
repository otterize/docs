"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:8,title:"Shadow vs active enforcement"},i=void 0,s={unversionedId:"shadow-vs-active-enforcement/README",id:"shadow-vs-active-enforcement/README",title:"Shadow vs active enforcement",description:"When installing Otterize, the intents operator can be configured to enforce access controls and protect services, or not.",source:"@site/docs/shadow-vs-active-enforcement/README.mdx",sourceDirName:"shadow-vs-active-enforcement",slug:"/shadow-vs-active-enforcement/",permalink:"/shadow-vs-active-enforcement/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/shadow-vs-active-enforcement/README.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Shadow vs active enforcement"},sidebar:"docSidebar",previous:{title:"IBAC: Intent-based access control",permalink:"/intent-based-access-control/"},next:{title:"Otterize OSS",permalink:"/otterize-oss/"}},l={},c=[{value:"Active enforcement",id:"active-enforcement",level:2},{value:"Shadow enforcement, or &quot;shadow mode&quot;",id:"shadow-enforcement-or-shadow-mode",level:2},{value:"Protected services",id:"protected-services",level:2}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When installing Otterize, the intents operator can be ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration/intents-operator/helm-chart"},"configured")," to enforce access controls and protect services, or not."),(0,r.kt)("p",null,"By default, the intents operator enforces access controls by creating, updating and deleting network policies, Kafka ACLs, and so on."),(0,r.kt)("p",null,'But it can also be put in "',(0,r.kt)("strong",{parentName:"p"},"shadow mode"),'" where it does not actually enforce access controls by default, i.e. by default services will not have network policies, Kafka ACLs, etc. In shadow mode, both discovered intents (actual calls, or call attempts) and declared intents (YAML-defined ',(0,r.kt)("inlineCode",{parentName:"p"},"ClientIntents")," resources) are still retained, and are reported to Otterize Cloud if it's integrated, to provide ",(0,r.kt)("strong",{parentName:"p"},"insights on what would happen if enforcement were turned on and services were protected"),": what calls would or would not be blocked, for example."),(0,r.kt)("p",null,"Whether enforcement is active or shadow, on what services, and what kind of enforcement, may be controlled as follows."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mode"),": a Helm chart variable with the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultActive"),": for every service, all the access control types (that are not disabled) ",(0,r.kt)("strong",{parentName:"li"},"are enforced"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultShadow"),": for every service, all access control types ",(0,r.kt)("strong",{parentName:"li"},"are not enforced")," by default.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To ",(0,r.kt)("strong",{parentName:"li"},"enforce")," access controls on a service, and ",(0,r.kt)("strong",{parentName:"li"},"explicitly protect")," it by blocking undeclared access, create a ",(0,r.kt)("inlineCode",{parentName:"li"},"ProtectedService")," (YAML) resource.")))),(0,r.kt)("p",null,"To disable a specific access control type cluster-wide, set one or more of the following Helm chart booleans:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enableNetworkPolicyCreation"),": completely disables network policy management if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enableKafkaACLCreation"),": completely disables network policy management if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enableIstioPolicyCreation"),": completely disables network policy management if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("p",null,"All these and more are documented in the ",(0,r.kt)("a",{parentName:"p",href:"/reference/configuration/otterize-chart"},"Otterize OSS Helm chart"),"."),(0,r.kt)("h2",{id:"active-enforcement"},"Active enforcement"),(0,r.kt)("p",null,"When enforcement is active ","\u2014"," when it is not disabled ","\u2014"," the intents operator processes client intents and turns each into access authorizations from the client to its called servers: if network policies are active (and supported by the CNI in the Kubernetes cluster), the operator labels pods and creates/updates network policies to allow access from that client to all its called servers, as well as removing previously-granted access based on out of date intents; and similarly for Kafka ACLs to Kafka servers."),(0,r.kt)("p",null,"In general, of course, this will immediately block access from services that have not declared their intents to call the now-protected servers. That is, after all, why you use intent-based access control (IBAC)."),(0,r.kt)("p",null,"Whether this is a good thing or a problem depends on your situation. There are multiple ways of rolling out IBAC across the many services that may be running in some environment or Kubernetes cluster."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'For example, you can insist that all services are protected by default from unauthorized access, with a global default-deny network policy. All clients must then declare and apply intents in order to reach their intended servers. It\'s a bit of a "big bang" approach, though.'),(0,r.kt)("li",{parentName:"ul"},"You can also generate all the client intents files by putting load on the services in the cluster (so they make all the calls they should), and use the Otterize network mapper to build a network map and export it as client intents (see ",(0,r.kt)("a",{parentName:"li",href:"/quick-visual-tutorials/visual-ibac-network-policies#protect-everything-easily"},"this quick visual tutorial"),"). You can then hand them over to the client developer teams to own and update as their code evolves, or manage them yourself ","\u2014"," much more easily than managing network policies directly."),(0,r.kt)("li",{parentName:"ul"},"Or you can gradually roll out IBAC, service by service. This will often be the most appropriate when you're just starting with IBAC and want to build experience and get value with little risk of breaking anything. It's probably ",(0,r.kt)("strong",{parentName:"li"},"the easiest way to start"),", too. See the next section, on shadow mode.")),(0,r.kt)("p",null,"To help you manage the rollout of IBAC, consider starting with shadow enforcement."),(0,r.kt)("h2",{id:"shadow-enforcement-or-shadow-mode"},'Shadow enforcement, or "shadow mode"'),(0,r.kt)("p",null,"When enforcement is not active, the intents operator still processes client intents files, but it does not then turn them into access authorizations: no network policies are created or deleted or changed in any way, neither are Kafka ACLs nor any other access controls."),(0,r.kt)("p",null,"How does this help?"),(0,r.kt)("p",null,"First, of course, no calls would be blocked and hence nothing would break."),(0,r.kt)("p",null,"The intents operator still reflects what access controls ",(0,r.kt)("em",{parentName:"p"},"would be in place")," should enforcement be enabled. For example, you can query Kubernetes to see the ClientIntents resources that are in place, so you know which clients have declared (and applied) their intents to call which servers."),(0,r.kt)("p",null,"And the Otterize network mapper, if installed in the Kubernetes cluster, still reflects which clients have ",(0,r.kt)("em",{parentName:"p"},"in fact")," been calling which servers, whether successfully or not. Those are ",(0,r.kt)("em",{parentName:"p"},"discovered")," intents: presumably, the clients intended to call those servers, whether they have declared those intents or not."),(0,r.kt)("p",null,'So by operating in this "shadow mode", and comparing the discovered intents with the declared intents, you can predict what ',(0,r.kt)("em",{parentName:"p"},"would")," happen if enforcement were to be active: which clients calls that are in fact happening now would be blocked or allowed, which servers are ready to have enforcement for them activated because none of their clients would get blocked, and so on."),(0,r.kt)("p",null,"To unlock these insights, the Otterize OSS components (the intents operator, the network mapper, and the credentials operator) can be configured to connect to Otterize Cloud in order to report their configurations, the discovered intents, and the declared intents in the cluster. Within Otterize Cloud, the results are processed and displayed as ",(0,r.kt)("strong",{parentName:"p"},"the access graph"),", with all these insights: what would be blocked, what would be allowed, and what you need to do to make sure intended calls will be allowed once services are protected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Otterize Cloud - access graph - all shadow",src:n(7910).Z,width:"2670",height:"1348"})),(0,r.kt)("h2",{id:"protected-services"},"Protected services"),(0,r.kt)("p",null,"To override the default non-enforcing shadow mode for a service, enforcing access controls for it, and in fact protecting it with a default-deny against unauthorized access, you simply create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtectedService")," resource."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Currently, this is only supported for network policies. Support for Kafka ACLs and Istio policies is coming shortly.")),(0,r.kt)("p",null,"First, you would want to make sure all the intents of all this service's clients are declared, so Otterize enables their access while protecting the service. One easy way to do that, if you have a cluster where those clients are making their expected calls, is to build a network map with the Otterize network mapper, and export just this service's clients' intents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize network-mapper export --server <SERVICE_NAME>.<SERVICE_NAMESPACE> > client-intents-1.yaml\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"See a sample of the exported YAML"),(0,r.kt)("p",null,"The result, when there happens to be a single client, ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend"),", calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkoutservice")," as well as other services, would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: frontend\n  namespace: otterize-ecom-demo\nspec:\n  service:\n    name: frontend\n  calls:\n    - name: adservice\n    - name: cartservice\n    - name: checkoutservice\n    - name: currencyservice\n    - name: productcatalogservice\n    - name: recommendationservice\n    - name: shippingservice\n")),(0,r.kt)("p",null,"If there were multiple clients, their ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientIntents")," resource descriptions would be in a single YAML, unless you specified to put each in a separate YAML.")),(0,r.kt)("p",null,"When you ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply")," these client intents declarations, there is still no enforcement and no blocking, but the access graph tells you you're ready to protect without breaking authorized calls:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Otterize Cloud - access graph - ready to protect",src:n(8750).Z,width:"2524",height:"1206"})),(0,r.kt)("p",null,"Now, knowing authorized clients won't be blocked, you can override shadow mode for just this service and protect it with a ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtectedService")," resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ProtectedService\nmetadata:\n  name: <SERVICE_NAME> # This can actually be any name you want to give to this resource\n  namespace: <SERVICE_NAMESPACE>\nspec:\n  name: <SERVICE_NAME> # the name of the service you want to protect\n")),(0,r.kt)("p",null,"This will place a default-deny network policy on the server, and at the same time create network policies to allow access that was declared using in those ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientIntents")," YAMLs. The access graph shows the result:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Otterize Cloud - access graph - checkout service protected",src:n(3061).Z,width:"2550",height:"1234"})),(0,r.kt)("p",null,"You can read more about the access graph in the ",(0,r.kt)("a",{parentName:"p",href:"/otterize-cloud"},"Otterize Cloud")," documentation."),(0,r.kt)("p",null,"And for a quick guide that shows how to use shadow enforcement to roll out IBAC gradually and controllably, see ",(0,r.kt)("a",{parentName:"p",href:"/guides/protect-1-service-network-policies"},"Protecting one service with network policies"),"."))}p.isMDXComponent=!0},7910:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access-graph-all-shadow-and-checkoutservice-c43bee54b390dab11e40ac1e775e8303.png"},8750:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access-graph-all-shadow-ready-to-protect-checkoutservice-e9da8e9d1e5d362041eabc0d7d7c107f.png"},3061:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/access-graph-protected-checkoutservice-3f98dee71bf2631c8c4e4bafeb31ff4f.png"}}]);