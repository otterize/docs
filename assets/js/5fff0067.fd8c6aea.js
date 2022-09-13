"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),o=n(2389),s=n(7392),i=n(7094),c=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:p,defaultValue:m,values:h,groupId:f,className:v}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:T}=(0,i.U)(),[w,N]=(0,l.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=f){const e=x[f];null!=e&&e!==w&&b.some((t=>t.value===e))&&N(e)}const Z=e=>{const t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==w&&(j(t),N(a),null!=f&&T(f,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var l;const t=O.indexOf(e.currentTarget)-1;n=null!=(l=O[t])?l:O[O.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:C,onFocus:Z,onClick:Z},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},3597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),o=n(5162);const s={sidebar_position:7,title:"Services"},i="Services",c={unversionedId:"documentation/services",id:"documentation/services",title:"Services",description:"What an Otterize service is.",source:"@site/docs/documentation/7-services.mdx",sourceDirName:"documentation",slug:"/documentation/services",permalink:"/documentation/services",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/7-services.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Services"},sidebar:"docSidebar",previous:{title:"IBAC - Intent-based access control",permalink:"/documentation/intents-based-access-control"},next:{title:"FAQ",permalink:"/documentation/faq"}},d={},u=[{value:"Pod identity resolution",id:"pod-identity-resolution",level:2},{value:"Rearrange the following:",id:"rearrange-the-following",level:2},{value:"mTLS credentials",id:"mtls-credentials",level:2},{value:"HTTP",id:"http",level:2},{value:"Client",id:"client",level:3},{value:"Server",id:"server",level:3},{value:"Kafka",id:"kafka",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"services"},"Services"),(0,l.kt)("p",null,"What an Otterize service is."),(0,l.kt)("h2",{id:"pod-identity-resolution"},"Pod identity resolution"),(0,l.kt)("p",null,"Client intents files use service names to refer to client and server services. How do Otterize operators decide what is\nthe name of the service that runs within the pod? The algorithm is as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"If the pod has an ",(0,l.kt)("inlineCode",{parentName:"li"},"otterize/service-name")," label, its value is used as the service name. This allows developers and\nautomations to explicitly name services, if needed."),(0,l.kt)("li",{parentName:"ol"},"If there is no ",(0,l.kt)("inlineCode",{parentName:"li"},"otterize/service-name")," label, a recursive look up is performed for the Kubernetes resource owner of\nthe pod, until the root resource is reached, and its name is used as the service name. For example, if you have\na ",(0,l.kt)("inlineCode",{parentName:"li"},"Deployment")," named ",(0,l.kt)("inlineCode",{parentName:"li"},"checkoutservice"),", which then creates and owns a ",(0,l.kt)("inlineCode",{parentName:"li"},"ReplicaSet"),", which then creates and owns\na ",(0,l.kt)("inlineCode",{parentName:"li"},"Pod"),", then the service name for that pod is ",(0,l.kt)("inlineCode",{parentName:"li"},"checkoutservice")," - same as the name of the ",(0,l.kt)("inlineCode",{parentName:"li"},"Deployment"),'. This is\nintended to capture the likely-more-meaningful "human name" of the service.')),(0,l.kt)("p",null,"Pods are then labeled with values derived from service names. For example,\nthe service name is combined with the namespace of the pod and hashed to form the value of the label ",(0,l.kt)("inlineCode",{parentName:"p"},"otterize/server"),".\nThis label is then used as a selector for network policies. Another\nlabel, ",(0,l.kt)("inlineCode",{parentName:"p"},"otterize/access-server-<servicename>-<servicehash>"),", is applied to client pods which have declared their intent\nto access the server. This label is used as the selector to determine which client pods are allowed to access the server\npod."),(0,l.kt)("h2",{id:"rearrange-the-following"},"Rearrange the following:"),(0,l.kt)("h1",{id:"credential-sdk-integration"},"Credential SDK integration"),(0,l.kt)("h2",{id:"mtls-credentials"},"mTLS credentials"),(0,l.kt)("p",null,"To mount mTLS credentials please follow the ",(0,l.kt)("a",{parentName:"p",href:"/documentation/quick-tutorials/mtls"},"tutorial"),"."),(0,l.kt)("h2",{id:"http"},"HTTP"),(0,l.kt)("h3",{id:"client"},"Client"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",label:"JS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\n> include file not found: ../../../static/code-examples/code/mtls/http/client.js --\x3e /home/runner/work/docs/static/code-examples/code/mtls/http/client.js\n\n"))),(0,l.kt)(o.Z,{value:"go",label:"GO",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"\n> include file not found: ../../../static/code-examples/code/mtls/http/client.go --\x3e /home/runner/work/docs/static/code-examples/code/mtls/http/client.go\n\n"))),(0,l.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n> include file not found: ../../../static/code-examples/code/mtls/http/client.py --\x3e /home/runner/work/docs/static/code-examples/code/mtls/http/client.py\n\n"))),(0,l.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n> include file not found: ../../../static/code-examples/code/mtls/http/client.sh --\x3e /home/runner/work/docs/static/code-examples/code/mtls/http/client.sh\n\n")))),(0,l.kt)("h3",{id:"server"},"Server"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",label:"JS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\n> include file not found: ../../../static/code-examples/code/mtls/http/server.js --\x3e /home/runner/work/docs/static/code-examples/code/mtls/http/server.js\n\n"))),(0,l.kt)(o.Z,{value:"go",label:"GO",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"\n> include file not found: ../../../static/code-examples/code/mtls/http/server.go --\x3e /home/runner/work/docs/static/code-examples/code/mtls/http/server.go\n\n"))),(0,l.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This config only supports server TLS and not mTLS.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n> include file not found: ../../../static/code-examples/code/mtls/http/server.py --\x3e /home/runner/work/docs/static/code-examples/code/mtls/http/server.py\n\n")))),(0,l.kt)("h2",{id:"kafka"},"Kafka"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",label:"JS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n> include file not found: ../../../static/code-examples/code/mtls/kafka/client.js --\x3e /home/runner/work/docs/static/code-examples/code/mtls/kafka/client.js\n\n"))),(0,l.kt)(o.Z,{value:"go",label:"GO",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n> include file not found: ../../../static/code-examples/code/mtls/kafka/client.go --\x3e /home/runner/work/docs/static/code-examples/code/mtls/kafka/client.go\n\n"))),(0,l.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n> include file not found: ../../../static/code-examples/code/mtls/kafka/client.py --\x3e /home/runner/work/docs/static/code-examples/code/mtls/kafka/client.py\n\n"))),(0,l.kt)(o.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},"You can use Kafka's builtin kafka-console-consumer.sh script to connect to Kafka. The script requires the credentials to be generated in the JKS format.",(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n> include file not found: ../../../static/code-examples/code/mtls/kafka/client.sh --\x3e /home/runner/work/docs/static/code-examples/code/mtls/kafka/client.sh\n\n"))),(0,l.kt)(o.Z,{value:"client.properties",label:"client.properties",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"\n> include file not found: ../../../static/code-examples/code/mtls/kafka/client.properties --\x3e /home/runner/work/docs/static/code-examples/code/mtls/kafka/client.properties\n\n")))))))}m.isMDXComponent=!0}}]);