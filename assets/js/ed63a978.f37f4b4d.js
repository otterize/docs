"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5290],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||s;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const s={sidebar_position:2,title:"Intent-Based Access Control (IBAC)"},o=void 0,i={unversionedId:"overview/intent-based-access-control",id:"overview/intent-based-access-control",title:"Intent-Based Access Control (IBAC)",description:"Why intent based access?",source:"@site/docs/overview/intent-based-access-control.mdx",sourceDirName:"overview",slug:"/overview/intent-based-access-control",permalink:"/overview/intent-based-access-control",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/overview/intent-based-access-control.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Intent-Based Access Control (IBAC)"},sidebar:"docSidebar",previous:{title:"Installation",permalink:"/overview/installation/"},next:{title:"Otterize OSS",permalink:"/overview/otterize-oss/"}},c={},l=[{value:"Why intent based access?",id:"why-intent-based-access",level:2},{value:"Enter client intents",id:"enter-client-intents",level:2},{value:"How do intents work?",id:"how-do-intents-work",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"why-intent-based-access"},"Why intent based access?"),(0,a.yg)("p",null,"We developers are working hard to make the world\u2019s services functional, reliable, performant, and of course secure, all while maximizing velocity. In practice, achieving successful zero-trust security requires enabling stringent access policies on the service we are developing and within the other technologies and services we utilize."),(0,a.yg)("p",null,"Services may need network access, database access, cloud resource access, and more to achieve the desired functionality. In a zero-trust environment, access must be granted by the data teams, cloud teams, and other teams managing dependent services. This results in a large degree of friction and a lack of a cohesive picture of the access rights needed for each service to function properly."),(0,a.yg)("p",null,"We believe that each service should define the access it needs to function. The IBAC system should be easily understood, easily reviewed, and capable of being statically analyzed."),(0,a.yg)("h2",{id:"enter-client-intents"},"Enter client intents"),(0,a.yg)("p",null,"A client intents file is simply a list of calls to servers a client intends to make. Coupled with a mechanism for resolving service names, the list of client intents can be translated to different authorization mechanisms, such as network policies, cloud IAM, databases, etc."),(0,a.yg)("p",null,"In other words, developers declare what their service intends to access, and that can then be converted to a network policy and the associated set of pod labels."),(0,a.yg)("p",null,"Here\u2019s an example of a client intents file (as a Kubernetes custom resource YAML) for a service named ",(0,a.yg)("strong",{parentName:"p"},"client")," that has network access to another service named ",(0,a.yg)("strong",{parentName:"p"},"auth-server")," and has access to ",(0,a.yg)("strong",{parentName:"p"},"production-db\u2019s")," ",(0,a.yg)("strong",{parentName:"p"},"metrics")," database:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ClientIntents\nmetadata:\n  name: client-intents\n\nspec:\n  service:\n    name: client\n  calls:\n    - name: auth-server\n    - name: production-db\n      type: database\n      databaseResources:\n        - databaseName: metrics\n")),(0,a.yg)("h2",{id:"how-do-intents-work"},"How do intents work?"),(0,a.yg)("p",null,"When intents are created for a client, the intents operator automatically creates, updates, and deletes the corresponding policies and automatically labels client and server pods to reflect precisely the client-to-server calls declared in client intents files. For instance, for a NetworkPolicy, a single policy is created per server, and pod labels are dynamically updated for clients when their intents are updated"),(0,a.yg)("p",null,"Service names are resolved by recursively getting the owner of a pod until the original owner is found, usually a Deployment, StatefulSet, or other such resource. The name of that resource is used unless the pod has a service-name annotation, in which case the value of that annotation is used instead."))}p.isMDXComponent=!0}}]);