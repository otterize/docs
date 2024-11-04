"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9060],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const i={sidebar_position:7,title:"Otterize OSS"},a=void 0,s={unversionedId:"overview/otterize-oss/README",id:"overview/otterize-oss/README",title:"Otterize OSS",description:"Otterize OSS implements intent-based access control (IBAC) in a single Kubernetes cluster.",source:"@site/docs/overview/otterize-oss/README.mdx",sourceDirName:"overview/otterize-oss",slug:"/overview/otterize-oss/",permalink:"/overview/otterize-oss/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/overview/otterize-oss/README.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Otterize OSS"},sidebar:"docSidebar",previous:{title:"Intent-Based Access Control (IBAC)",permalink:"/overview/intent-based-access-control"},next:{title:"Error telemetry",permalink:"/overview/otterize-oss/error-telemetry"}},l={},c=[{value:"Components",id:"components",level:2},{value:"Usage metrics",id:"usage-metrics",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Otterize OSS implements intent-based access control (IBAC) in a single Kubernetes cluster.\nIt is a fully standalone, free and open-source software implementation of IBAC built for cloud-native\nteams that use Kubernetes at the core of their infrastructure."),(0,o.yg)("h2",{id:"components"},"Components"),(0,o.yg)("p",null,"Otterize OSS consists of several components, which work together to provide IBAC capabilities."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("a",{parentName:"li",href:"/reference/intents-operator"},"Otterize intents operator")," that translates ClientIntents resources to\naccess controls using plugins, which currently include:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"A network policies manager to control pod-to-pod access."),(0,o.yg)("li",{parentName:"ul"},"An ACL configurator for in-Kubernetes Kafka clusters to control client access."))),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("a",{parentName:"li",href:"/reference/credentials-operator"},"Otterize credentials operator")," that integrates with SPIFFE/SPIRE or the Otterize Cloud-managed credentials service\nto handle pod identities and manage certificates."),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("a",{parentName:"li",href:"/reference/network-mapper"},"Otterize network mapper")," that sniffs pod-to-pod traffic and builds a network map,\nwhich is useful on its own and may also be exported as client intents files for bootstrapping IBAC.")),(0,o.yg)("p",null,"This list will grow over time, as more capabilities are added, in particular support for more access controls, credentials managers, and integrations with useful tooling."),(0,o.yg)("p",null,"The Otterize OSS code base and issues are managed ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/otterize"},"on GitHub"),"."),(0,o.yg)("p",null,"To get started with Otterize OSS, see the tutorials for ",(0,o.yg)("a",{parentName:"p",href:"/features/network-mapping-network-policies/tutorials/k8s-network-policies"},"network policies"),", ",(0,o.yg)("a",{parentName:"p",href:"/features/kafka/tutorials/k8s-kafka-mtls"},"Kafka"),", ",(0,o.yg)("a",{parentName:"p",href:"/features/network-mapping-network-policies/tutorials/k8s-network-mapper"},"network mapping"),", and ",(0,o.yg)("a",{parentName:"p",href:"/features/istio/tutorials/k8s-istio-authorization-policies"},"Istio service mesh"),"."),(0,o.yg)("h2",{id:"usage-metrics"},"Usage metrics"),(0,o.yg)("p",null,"Components in Otterize OSS collect usage information ","\u2014"," counts of events like ",(0,o.yg)("inlineCode",{parentName:"p"},"INTENTS_APPLIED"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"NETWORK_POLICY_CREATED"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"KAFKA_ACL_DELETED"),", etc. ","\u2014"," and can report those back to the Otterize team. This is entirely optional and does not affect the functionality of Otterize OSS, but it does help the team at Otterize understand what the community finds useful and hence how to improve it. (Of course, direct feedback through the ",(0,o.yg)("a",{parentName:"p",href:"https://joinslack.otterize.com/"},"Otterize Community Slack")," is very much appreciated too.) For more information, including what is sent and how to turn it off or on, see ",(0,o.yg)("a",{parentName:"p",href:"/overview/otterize-oss/usage-telemetry"},"the usage telemetry documentation"),"."))}m.isMDXComponent=!0}}]);