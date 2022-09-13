"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3,title:"SPIRE integration operator"},i=void 0,l={unversionedId:"documentation/components/spire-integration-operator/README",id:"documentation/components/spire-integration-operator/README",title:"SPIRE integration operator",description:"The Otterize SPIRE Integration Operator automatically resolves pods to dev-friendly service names, registers them with a SPIRE server, and optionally provisions credentials as a Kubernetes Secrets.",source:"@site/docs/documentation/9-components/3-spire-integration-operator/README.mdx",sourceDirName:"documentation/9-components/3-spire-integration-operator",slug:"/documentation/components/spire-integration-operator/",permalink:"/documentation/components/spire-integration-operator/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/9-components/3-spire-integration-operator/README.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"SPIRE integration operator"},sidebar:"docSidebar",previous:{title:"Helm chart",permalink:"/documentation/components/intents-operator/helm-chart"},next:{title:"Helm chart",permalink:"/documentation/components/spire-integration-operator/helm-chart"}},s={},p=[{value:"How does the SPIRE Integration Operator work?",id:"how-does-the-spire-integration-operator-work",level:2},{value:"SPIRE entry registration",id:"spire-entry-registration",level:3},{value:"Credential generation",id:"credential-generation",level:3},{value:"Service name resolution and automatic pod labeling",id:"service-name-resolution-and-automatic-pod-labeling",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Otterize SPIRE Integration Operator automatically resolves pods to dev-friendly service names, registers them with a SPIRE server, and optionally provisions credentials as a Kubernetes Secrets."),(0,o.kt)("h2",{id:"how-does-the-spire-integration-operator-work"},"How does the SPIRE Integration Operator work?"),(0,o.kt)("h3",{id:"spire-entry-registration"},"SPIRE entry registration"),(0,o.kt)("p",null,"Once the operator ",(0,o.kt)("a",{parentName:"p",href:"#service-name-resolution-and-automatic-pod-labeling"},"resolves the service name")," for a pod, it labels the pod and registers an entry with the SPIRE server."),(0,o.kt)("h3",{id:"credential-generation"},"Credential generation"),(0,o.kt)("p",null,"After the operator has registered the pod, which happens automatically upon startup, the pod can use the SPIRE Workload API to generate credentials for the SVID ",(0,o.kt)("inlineCode",{parentName:"p"},"<servicename>.<namespace>"),"."),(0,o.kt)("p",null,"Additionally, the operator consults the label ",(0,o.kt)("inlineCode",{parentName:"p"},"spire-integration.otterize.com/tls-secret-name"),". If that label exists, the operator creates a secret named after the value of the label with X.509 credentials within (a SPIRE SVID). This way, the pod can get autogenerated credentials without modifying its code."),(0,o.kt)("p",null,"For more information, see the docs."),(0,o.kt)("h3",{id:"service-name-resolution-and-automatic-pod-labeling"},"Service name resolution and automatic pod labeling"),(0,o.kt)("p",null,"Service name resolution is performed one of two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If an ",(0,o.kt)("inlineCode",{parentName:"li"},"intents.otterize.com/service-name")," annotation is present, that name is used."),(0,o.kt)("li",{parentName:"ol"},"If not, a recursive look up is performed for the Kubernetes resource owner for a Pod until the root is reached. For example, if you have a ",(0,o.kt)("inlineCode",{parentName:"li"},"Deployment")," named ",(0,o.kt)("inlineCode",{parentName:"li"},"client"),", which then creates and owns a ",(0,o.kt)("inlineCode",{parentName:"li"},"ReplicaSet"),", which then creates and owns a ",(0,o.kt)("inlineCode",{parentName:"li"},"Pod"),", then the service name for that pod is ",(0,o.kt)("inlineCode",{parentName:"li"},"client")," - same as the name of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Deployment"),".")),(0,o.kt)("p",null,"The value resulting from this process forms the value of the label ",(0,o.kt)("inlineCode",{parentName:"p"},"spire-integration.otterize.com/service-name"),"."))}d.isMDXComponent=!0}}]);