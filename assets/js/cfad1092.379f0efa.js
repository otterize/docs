"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[442],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>u});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),m=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=m(r),u=a,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return r?n.createElement(k,l(l({ref:e},s),{},{components:r})):n.createElement(k,l({ref:e},s))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5498:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,title:"Helm chart"},l=void 0,i={unversionedId:"components/intents-operator/helm-chart",id:"components/intents-operator/helm-chart",title:"Helm chart",description:"You can use the intents operator's Helm chart to deploy the intents operator on its own, and configure it to work with the Otterize SPIRE integration operator to acquire mTLS credentials.",source:"@site/docs/components/intents-operator/helm-chart.mdx",sourceDirName:"components/intents-operator",slug:"/components/intents-operator/helm-chart",permalink:"/components/intents-operator/helm-chart",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/components/intents-operator/helm-chart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Helm chart"},sidebar:"docSidebar",previous:{title:"Intents operator",permalink:"/components/intents-operator/"},next:{title:"Configuring Kafka brokers",permalink:"/components/intents-operator/configuration"}},p={},m=[{value:"Operator parameters",id:"operator-parameters",level:2},{value:"Watcher parameters",id:"watcher-parameters",level:2},{value:"Common parameters",id:"common-parameters",level:2}],s={toc:m};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/intents-operator"},"intents operator's Helm chart")," to deploy the intents operator on its own, and configure it to work with the Otterize SPIRE integration operator to acquire mTLS credentials.\nBut it is recommended to deploy the operator as part of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/otterize/helm-charts/tree/main/otterize-kubernetes"},"Otterize OSS Helm chart"),", which comes with a SPIRE server and the SPIRE integration operator, rather than managing it independently."),(0,a.kt)("p",null,"If you would like to deploy it on its own, add the Otterize Helm chart repository and configure the operator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  helm repo add otterize https://helm.otterize.com\n  helm repo update\n  helm install otterize-intents-operator otterize/intents-operator -n otterize-system --create-namespace\n")),(0,a.kt)("h2",{id:"operator-parameters"},"Operator parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"operator.image.repository")),(0,a.kt)("td",{parentName:"tr",align:null},"Intents operator image repository."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"otterize"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"operator.image.image")),(0,a.kt)("td",{parentName:"tr",align:null},"Intents operator image."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"intents-operator"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"operator.image.tag")),(0,a.kt)("td",{parentName:"tr",align:null},"Intents operator image tag."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"latest"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"operator.pullPolicy")),(0,a.kt)("td",{parentName:"tr",align:null},"Intents operator image pull policy."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"operator.autoGenerateTLSUsingSpireIntegration")),(0,a.kt)("td",{parentName:"tr",align:null},"If true, adds the necessary pod annotations in order to generate mTLS credentials using the Otterize SPIRE integration operator."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"operator.resources")),(0,a.kt)("td",{parentName:"tr",align:null},"Resources override."),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"watcher-parameters"},"Watcher parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"watcher.image.repository")),(0,a.kt)("td",{parentName:"tr",align:null},"Watcher image repository."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"otterize"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"watcher.image.image")),(0,a.kt)("td",{parentName:"tr",align:null},"Watcher image."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"intents-operator-pod-watcher"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"watcher.image.tag")),(0,a.kt)("td",{parentName:"tr",align:null},"Watcher image tag."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"latest"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"watcher.pullPolicy")),(0,a.kt)("td",{parentName:"tr",align:null},"Watcher image pull policy."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(none)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"watcher.resources")),(0,a.kt)("td",{parentName:"tr",align:null},"Watcher resources."),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"common-parameters"},"Common parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"allowGetAllResources")),(0,a.kt)("td",{parentName:"tr",align:null},"Gives get, list and watch permission to watch on all resources. This is used to resolve service names when pods have owners that are custom resources. When disabled, a limited set of permissions is used that only allows access to Pods and to built-in Kubernetes resources that deploy Pods: Deployments, StatefulSets, DaemonSets, ReplicaSets and Services. Resolving may not be able to complete if the owning resource is not one of those."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))))))}d.isMDXComponent=!0}}]);