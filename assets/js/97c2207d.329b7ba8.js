"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1295],{5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>u});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(a),s=r,u=m["".concat(d,".").concat(s)]||m[s]||y[s]||l;return a?n.createElement(u,i(i({ref:t},g),{},{components:a})):n.createElement(u,i({ref:t},g))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(8168),r=(a(6540),a(5680));const l={sidebar_position:1,title:"Otterize OSS Helm chart"},i=void 0,o={unversionedId:"reference/configuration/otterize-chart/README",id:"reference/configuration/otterize-chart/README",title:"Otterize OSS Helm chart",description:"The Otterize OSS Helm chart is a chart that installs all Otterize components and supporting components together, and configures them to work with each other.",source:"@site/docs/reference/configuration/otterize-chart/README.mdx",sourceDirName:"reference/configuration/otterize-chart",slug:"/reference/configuration/otterize-chart/",permalink:"/reference/configuration/otterize-chart/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/reference/configuration/otterize-chart/README.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Otterize OSS Helm chart"},sidebar:"docSidebar",previous:{title:"Reference",permalink:"/features/gitlab/reference"},next:{title:"Intents operator",permalink:"/reference/configuration/intents-operator/"}},d={},p=[{value:"Deployment parameters",id:"deployment-parameters",level:2},{value:"Global parameters",id:"global-parameters",level:2},{value:"Cloud parameters",id:"cloud-parameters",level:2},{value:"AWS Integration parameters",id:"aws-integration-parameters",level:2},{value:"Intents operator parameters",id:"intents-operator-parameters",level:2},{value:"SPIRE parameters",id:"spire-parameters",level:2},{value:"Network mapper parameters",id:"network-mapper-parameters",level:2},{value:"Credentials operator parameters",id:"credentials-operator-parameters",level:2},{value:"Resource configuration",id:"resource-configuration",level:2}],g={toc:p},m="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/otterize-kubernetes"},"Otterize OSS Helm chart")," is a chart that installs all Otterize components and supporting components together, and configures them to work with each other.\nFor example, it configures the credentials operator to work with the deployed SPIRE server, and the intents operator to get mTLS credentials from the credentials operator."),(0,r.yg)("h1",{id:"parameters"},"Parameters"),(0,r.yg)("h2",{id:"deployment-parameters"},"Deployment parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.deployment.spire")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether or not to deploy SPIRE.  Required for mTLS, if not using Otterize Cloud."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.deployment.credentialsOperator")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether or not to deploy credentials-operator. Required to provision mTLS credentials, database username/password, and AWS IAM roles."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.deployment.intentsOperator")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether or not to deploy intents-operator."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.deployment.networkMapper")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether or not to deploy network-mapper."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))))),(0,r.yg)("h2",{id:"global-parameters"},"Global parameters"),(0,r.yg)("p",null,"These parameters are used by multiple charts, and must be kept the same for the correct functioning of the separate components."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.spiffe.CASubject")),(0,r.yg)("td",{parentName:"tr",align:null},"The Subject that CA certificates should use (see below)."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.spiffe.CASubject.country")),(0,r.yg)("td",{parentName:"tr",align:null},"SPIRE's CA certificates ",(0,r.yg)("inlineCode",{parentName:"td"},"Country")," value."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"US"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.spiffe.CASubject.organization")),(0,r.yg)("td",{parentName:"tr",align:null},"SPIRE's CA certificates ",(0,r.yg)("inlineCode",{parentName:"td"},"Organization")," Value."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"SPIRE"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.spiffe.trustDomain")),(0,r.yg)("td",{parentName:"tr",align:null},"The trust domain that SPIRE will use."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"example.org"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.certificateProvider")),(0,r.yg)("td",{parentName:"tr",align:null},"What provider should be used to generate certificates/credentials - ",(0,r.yg)("inlineCode",{parentName:"td"},'"spire"'),", ",(0,r.yg)("inlineCode",{parentName:"td"},'"otterize-cloud"')," or ",(0,r.yg)("inlineCode",{parentName:"td"},'"cert-manager"')),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'"spire"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.spire.serverServiceName")),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the Kubernetes service that will be created for SPIRE-server."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.allowGetAllResources")),(0,r.yg)("td",{parentName:"tr",align:null},"If defined overrides ",(0,r.yg)("inlineCode",{parentName:"td"},"allowGetAllResources")," in subcharts. Gives get, list and watch permission to watch on all resources. This is used to resolve service names when pods have owners that are custom resources. When disabled, a limited set of permissions is used that only allows access to built-in Kubernetes resources that deploy Pods and Pods themselves - Deployments, StatefulSets, DaemonSets, ReplicaSets and Services. Resolving may not be able to complete if the owning resource is not one of those."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.telemetry.enabled")),(0,r.yg)("td",{parentName:"tr",align:null},"If set to ",(0,r.yg)("inlineCode",{parentName:"td"},"false"),", anonymous telemetries collection will be disabled"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.commonAnnotations")),(0,r.yg)("td",{parentName:"tr",align:null},"Annotations to add to all deployed objects"),(0,r.yg)("td",{parentName:"tr",align:null},"{}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.commonLabels")),(0,r.yg)("td",{parentName:"tr",align:null},"Labels to add to all deployed objects"),(0,r.yg)("td",{parentName:"tr",align:null},"{}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.podAnnotations")),(0,r.yg)("td",{parentName:"tr",align:null},"Annotations to add to all deployed pods"),(0,r.yg)("td",{parentName:"tr",align:null},"{}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.podLabels")),(0,r.yg)("td",{parentName:"tr",align:null},"Labels to add to all deployed pods"),(0,r.yg)("td",{parentName:"tr",align:null},"{}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.serviceNameOverrideAnnotationName")),(0,r.yg)("td",{parentName:"tr",align:null},"Which annotation to use (in the ",(0,r.yg)("a",{parentName:"td",href:"/reference/service-identities#kubernetes-service-identity-resolution"},"service name resolution algorithm"),") for setting a pod's service name, if not the default. Use this if you already have annotations on your pods that provide the correct service name."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intents.otterize.com/service-name"))))),(0,r.yg)("h2",{id:"cloud-parameters"},"Cloud parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.clientId")),(0,r.yg)("td",{parentName:"tr",align:null},"Client ID for connecting to Otterize Cloud."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.clientSecret")),(0,r.yg)("td",{parentName:"tr",align:null},"Client secret for connecting to Otterize Cloud."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.clientSecretKeyRef.secretName")),(0,r.yg)("td",{parentName:"tr",align:null},"If specified, the name of a pre-created Kubernetes Secret to be used instead of creating a secret with the value of clientSecret."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.otterizeCloud.credentials.clientSecretKeyRef.secretKey")),(0,r.yg)("td",{parentName:"tr",align:null},"If specified, the key for the clientSecret in a pre-created Kubernetes Secret to be used instead of creating a secret with the value of clientSecret."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.otterizeCloud.apiAddress")),(0,r.yg)("td",{parentName:"tr",align:null},"Overrides Otterize Cloud default API address."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.otterizeCloud.apiExtraCAPEMSecret")),(0,r.yg)("td",{parentName:"tr",align:null},"The name of a secret containing a single ",(0,r.yg)("inlineCode",{parentName:"td"},"CA.pem")," file for an extra root CA used to connect to Otterize Cloud. The secret should be placed in the same namespace as the Otterize deployment."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))))),(0,r.yg)("h2",{id:"aws-integration-parameters"},"AWS Integration parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.aws.enabled")),(0,r.yg)("td",{parentName:"tr",align:null},"Enable or disable AWS integration"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.aws.eksClusterNameOverride")),(0,r.yg)("td",{parentName:"tr",align:null},"EKS cluster name (overrides auto-detection)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))))),(0,r.yg)("h2",{id:"intents-operator-parameters"},"Intents operator parameters"),(0,r.yg)("p",null,"All configurable parameters of intents-operator can be configured under the alias ",(0,r.yg)("inlineCode",{parentName:"p"},"intentsOperator"),".\nFurther information about intents-operator parameters can be found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/intents-operator"},"in the intents operator's Helm chart"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.repository")),(0,r.yg)("td",{parentName:"tr",align:null},"Intents Operator image repository."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"otterize"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.image")),(0,r.yg)("td",{parentName:"tr",align:null},"Intents Operator image."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intents-operator"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.tag")),(0,r.yg)("td",{parentName:"tr",align:null},"Intents Operator image tag."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(pinned to latest version as of this Helm chart version's publish)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.pullPolicy")),(0,r.yg)("td",{parentName:"tr",align:null},"Intents Operator image pull policy."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.autoGenerateTLSUsingCredentialsOperator")),(0,r.yg)("td",{parentName:"tr",align:null},"If set to true, adds the necessary pod annotations in order to integrate with credentials-operator, and gets the TLS certificate."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.mode")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"defaultActive")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"defaultShadow"),". ",(0,r.yg)("br",null),"When ",(0,r.yg)("inlineCode",{parentName:"td"},"defaultActive")," is set, enforcement is enabled by default. ",(0,r.yg)("br",null),"When ",(0,r.yg)("inlineCode",{parentName:"td"},"defaultShadow")," is set, enforcement is disabled by default, but can be enabled per-service using a ",(0,r.yg)("inlineCode",{parentName:"td"},"ProtectedService")," resource."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"defaultActive"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.enableEnforcement")),(0,r.yg)("td",{parentName:"tr",align:null},"(",(0,r.yg)("strong",{parentName:"td"},"Deprecated"),"; use ",(0,r.yg)("inlineCode",{parentName:"td"},"mode")," instead) If set to false, enforcement is disabled globally (both for network policies and Kafka ACL). If true, you may use the other flags for more granular enforcement settings."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.enableNetworkPolicyCreation")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the operator should create network policies according to ",(0,r.yg)("inlineCode",{parentName:"td"},"ClientIntents"),"."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.enableKafkaACLCreation")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the operator should create Kafka ACL rules according to ",(0,r.yg)("inlineCode",{parentName:"td"},"ClientIntents")," of type Kafka."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.enableIstioPolicyCreation")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the operator should create Istio authorization policies according to ",(0,r.yg)("inlineCode",{parentName:"td"},"ClientIntents"),"."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.allowExternalTraffic")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ifBlockedByOtterize"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"off")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"always")," (this option is ",(0,r.yg)("strong",{parentName:"td"},"experimental"),"). Specify how the operator handles external traffic for Ingress/Service resources: ",(0,r.yg)("inlineCode",{parentName:"td"},"ifBlockedByOtterize")," automatically create network policies to enable internet traffic for services that would be blocked by Otterize network policies when protecting a server. Choosing ",(0,r.yg)("inlineCode",{parentName:"td"},"off")," may necessitate manual network policy creation to allow external traffic, while ",(0,r.yg)("inlineCode",{parentName:"td"},"always")," automatically creates policies for all such resource that are visible to the operator."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ifBlockedByOtterize"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.autoCreateNetworkPoliciesForExternalTraffic")),(0,r.yg)("td",{parentName:"tr",align:null},"(deprecated, use ",(0,r.yg)("inlineCode",{parentName:"td"},"allowExternalTraffic")," instead) Automatically allow external traffic, if a new ClientIntents resource would result in blocking external (internet) traffic and there is an Ingress/Service resource indicating external traffic is expected."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.autoCreateNetworkPoliciesForExternalTrafficDisableIntentsRequirement")),(0,r.yg)("td",{parentName:"tr",align:null},"(deprecated, use ",(0,r.yg)("inlineCode",{parentName:"td"},"allowExternalTraffic")," instead) ",(0,r.yg)("strong",{parentName:"td"},"experimental")," - If ",(0,r.yg)("inlineCode",{parentName:"td"},"autoCreateNetworkPoliciesForExternalTraffic")," is enabled, do not require ClientIntents resources - simply create network policies based off of the existence of an Ingress/Service resource."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.resources")),(0,r.yg)("td",{parentName:"tr",align:null},"Resources override."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.enableDatabaseCredentialsCreation")),(0,r.yg)("td",{parentName:"tr",align:null},"Enables support for database intents"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.enforcedNamespaces")),(0,r.yg)("td",{parentName:"tr",align:null},'When using "shadow enforcement" mode, namespaces in this list will be treated as if the enforcement were active.'),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(nil) "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.extraEnvVars")),(0,r.yg)("td",{parentName:"tr",align:null},"Extra environment variables to pass to the intents operator pod. To set an environment variable: ",(0,r.yg)("inlineCode",{parentName:"td"},'"intentsOperator.extraEnvVars[0].name=MY_ENV_VAR"'),", to set its value: ",(0,r.yg)("inlineCode",{parentName:"td"},'"intentsOperator.extraEnvVars[0].value=someValue"')),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"spire-parameters"},"SPIRE parameters"),(0,r.yg)("p",null,"All configurable parameters of SPIRE can be configured under the alias ",(0,r.yg)("inlineCode",{parentName:"p"},"spire"),".\nFurther information about ",(0,r.yg)("inlineCode",{parentName:"p"},"SPIRE")," parameters can be found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/spire"},"in SPIRE's Helm chart"),"."),(0,r.yg)("h2",{id:"network-mapper-parameters"},"Network mapper parameters"),(0,r.yg)("p",null,"All configurable parameters of the network mapper can be configured under the alias ",(0,r.yg)("inlineCode",{parentName:"p"},"networkMapper"),".\nFurther information about network mapper parameters can be found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/network-mapper"},"in the network mapper's chart"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"networkMapper.mapper.extraEnvVars")),(0,r.yg)("td",{parentName:"tr",align:null},"Extra environment variables to pass to the network mapper pod. To set an environment variable: ",(0,r.yg)("inlineCode",{parentName:"td"},'"networkMapper.mapper.extraEnvVars[0].name=MY_ENV_VAR"'),", to set its value: ",(0,r.yg)("inlineCode",{parentName:"td"},'"networkMapper.mapper.extraEnvVars[0].value=someValue"')),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"credentials-operator-parameters"},"Credentials operator parameters"),(0,r.yg)("p",null,"All configurable parameters of the credentials operator can be configured under the alias ",(0,r.yg)("inlineCode",{parentName:"p"},"credentialsOperator"),".\nFurther information about network mapper parameters can be found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/credentials-operator"},"in the credentials operator's chart"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"credentialsOperator.databaseSecretRotationInterval")),(0,r.yg)("td",{parentName:"tr",align:null},'Interval in which secrets created by the credentials operator will be rotated. Valid time units are "ns", "ms", "s", "m", "h"'),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"8h"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"credentialsOperator.operator.extraEnvVars")),(0,r.yg)("td",{parentName:"tr",align:null},"Extra environment variables to pass to the credentials operator pod. To set an environment variable: ",(0,r.yg)("inlineCode",{parentName:"td"},'"credentialsOperator.operator.extraEnvVars[0].name=MY_ENV_VAR"'),", to set its value: ",(0,r.yg)("inlineCode",{parentName:"td"},'"credentialsOperator.operator.extraEnvVars[0].value=someValue"')),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"resource-configuration"},"Resource configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Component"),(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Intents operator"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.operator.resources")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Intents operator - watcher"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"intentsOperator.watcher.resources")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SPIRE Server"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"spire.server.resources")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SPIRE Agent"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"spire.agent.resources")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"credentials operator"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"credentialsOperator.resources")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))))))}y.isMDXComponent=!0}}]);