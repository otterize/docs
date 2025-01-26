"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2703],{5680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>f});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(t),g=r,f=s["".concat(p,".").concat(g)]||s[g]||d[g]||l;return t?n.createElement(f,i(i({ref:a},m),{},{components:t})):n.createElement(f,i({ref:a},m))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6707:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(8168),r=(t(6540),t(5680));const l={sidebar_position:3,title:"Reference"},i=void 0,o={unversionedId:"features/kafka/reference",id:"features/kafka/reference",title:"Reference",description:"KafkaServerConfig example (YAML)",source:"@site/docs/features/kafka/reference.mdx",sourceDirName:"features/kafka",slug:"/features/kafka/reference",permalink:"/features/kafka/reference",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/kafka/reference.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Reference"},sidebar:"docSidebar",previous:{title:"Kafka access automation using cert-manager mTLS",permalink:"/features/kafka/tutorials/k8s-kafka-mtls-cert-manager"},next:{title:"Istio | Overview",permalink:"/features/istio/"}},p={},c=[{value:"KafkaServerConfig example (YAML)",id:"kafkaserverconfig-example-yaml",level:3},{value:"ClientIntents example (YAML)",id:"clientintents-example-yaml",level:3},{value:"Helm Chart options",id:"helm-chart-options",level:3}],m={toc:c},s="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(s,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"kafkaserverconfig-example-yaml"},"KafkaServerConfig example (YAML)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v2beta1\nkind: KafkaServerConfig\nmetadata:\n  name: kafkaserverconfig\n  namespace: kafka\nspec:\n  service:\n    # name of the Kafka service broker\n    name: kafka\n  addr: kafka.kafka:9092\n")),(0,r.yg)("h3",{id:"clientintents-example-yaml"},"ClientIntents example (YAML)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v2beta1\nkind: ClientIntents\nmetadata:\n  name: client\n  namespace: otterize-tutorial-kafka-mtls\nspec:\n  workload:\n    # The service requiring access to a topic\n    name: client\n    kind: Deployment\n  targets:\n      # name of the Kafka service broker\n    - kafka:\n        name: kafka.kafka\n        topics:\n          # Topic name\n          - name: mytopic\n            # ACL Operations including alter, delete, all, etc\n            operations: [ produce,describe,consume ]\n          # Multiple topics can be added\n          - name: transactions\n            operations: [ produce,describe,consume ]\n")),(0,r.yg)("h3",{id:"helm-chart-options"},"Helm Chart options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"kafkawatcher.enable")),(0,r.yg)("td",{parentName:"tr",align:null},"Enable Kafka watcher deployment (beta)."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"kafkawatcher.repository")),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka watcher image repository."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"otterize"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"kafkawatcher.image")),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka watcher image."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"network-mapper-kafka-watcher"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"kafkawatcher.tag")),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka watcher image tag."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(pinned to latest version as of this Helm chart version's publish)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"kafkawatcher.pullPolicy")),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka watcher pull policy."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"kafkawatcher.pullSecrets")),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka watcher pull secrets."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"kafkawatcher.resources")),(0,r.yg)("td",{parentName:"tr",align:null},"Resources override."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"kafkawatcher.kafkaServers")),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka servers to watch, specified as ",(0,r.yg)("inlineCode",{parentName:"td"},"pod.namespace")," items."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))))),(0,r.yg)("p",null,"View the ",(0,r.yg)("a",{parentName:"p",href:"/reference/otterize-chart"},"Helm chart reference")," for all other options"))}d.isMDXComponent=!0}}]);