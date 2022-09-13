"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[717],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=c(a),m=r,d=k["".concat(l,".").concat(m)]||k[m]||u[m]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),i=a(6010),o=a(2389),s=a(7392),l=a(7094),c=a(2466);const p="tabList__CuJ",u="tabItem_LNqP";function k(e){var t,a;const{lazy:o,block:k,defaultValue:m,values:d,groupId:f,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,s.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,l.U)(),[E,T]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:z}=(0,c.o5)();if(null!=f){const e=N[f];null!=e&&e!==E&&h.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=S.indexOf(t),n=h[a].value;n!==E&&(z(t),T(n),null!=f&&w(f,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=S.indexOf(e.currentTarget)+1;a=null!=(n=S[t])?n:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;a=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":k},v)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>S.push(e),onKeyDown:O,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},8894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(5488),o=a(5162);const s={sidebar_position:1,title:"Intent-based access control for Kafka in Kubernetes"},l=void 0,c={unversionedId:"documentation/guides/ibac-for-k8s-kafka/README",id:"documentation/guides/ibac-for-k8s-kafka/README",title:"Intent-based access control for Kafka in Kubernetes",description:"Recap: controlling access to Kafka (incl. mTLS or tokens, users and ACLs, different ports)",source:"@site/docs/documentation/4-guides/3-ibac-for-k8s-kafka/README.mdx",sourceDirName:"documentation/4-guides/3-ibac-for-k8s-kafka",slug:"/documentation/guides/ibac-for-k8s-kafka/",permalink:"/documentation/guides/ibac-for-k8s-kafka/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/4-guides/3-ibac-for-k8s-kafka/README.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Intent-based access control for Kafka in Kubernetes"},sidebar:"docSidebar",previous:{title:"Deeper dive into network policies",permalink:"/documentation/guides/k8s-ibac-via-network-policies/deeper-dive"},next:{title:"Credentials",permalink:"/documentation/guides/ibac-for-k8s-kafka/credentials"}},p={},u=[{value:"Recap: controlling access to Kafka (incl. mTLS or tokens, users and ACLs, different ports)",id:"recap-controlling-access-to-kafka-incl-mtls-or-tokens-users-and-acls-different-ports",level:2},{value:"Configuring Kafka for secure access",id:"configuring-kafka-for-secure-access",level:2},{value:"Testing secure connection to Kafka",id:"testing-secure-connection-to-kafka",level:3},{value:"Setting security scope via\u2026",id:"setting-security-scope-via",level:2},{value:"Otterize identities and Kafka ACLs",id:"otterize-identities-and-kafka-acls",level:2},{value:"\u2026",id:"",level:2},{value:"Practical notes",id:"practical-notes",level:2},{value:"Avoiding drift",id:"avoiding-drift",level:2},{value:"Granularities of access <em>(incl. via network policies, via authN-only, &amp; topic-level)</em>",id:"granularities-of-access-incl-via-network-policies-via-authn-only--topic-level",level:2}],k={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"recap-controlling-access-to-kafka-incl-mtls-or-tokens-users-and-acls-different-ports"},"Recap: controlling access to Kafka (incl. mTLS or tokens, users and ACLs, different ports)"),(0,r.kt)("h2",{id:"configuring-kafka-for-secure-access"},"Configuring Kafka for secure access"),(0,r.kt)("p",null,"To configure kafka for secure access we have multiple areas we need to modify in its configuration to prepare for secure\naccess and another where we add annotations to let Otterize know it needs to generate credentials for secure access."),(0,r.kt)("p",null,"The following example shows how to configure bitnami's popular\nkafka ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/kafka"},"chart"),":"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Though SSL was replaced by TLS, Kafka still uses the term SSL internally.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allow Otterize to manage Kafka by adding it as a super user wtih:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'superUsers: "User:CN=kafka.kafka,O=SPIRE,C=US;User:CN=intents-operator.otterize,O=SPIRE,C=US"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure its ",(0,r.kt)("a",{parentName:"p",href:"https://www.confluent.io/blog/kafka-listeners-explained/"},"listeners")," to use SSL"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'listeners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nadvertisedListeners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nlistenerSecurityProtocolMap: "INTERNAL:SSL,CLIENT:SSL"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the authentication parameters to"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use mTLS"),(0,r.kt)("li",{parentName:"ul"},"Having the credentials stored in a Java KeyStore (JKS) format stored in a K8s secret called ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka-tls-secret"),"\nwith a password set to ",(0,r.kt)("inlineCode",{parentName:"li"},"password"),"."),(0,r.kt)("li",{parentName:"ul"},"Deny anonymous access")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"auth: \n  clientProtocol: mtls\n  interBrokerProtocol: mtls\n  tls:\n    type: jks\n    existingSecrets:\n      - kafka-tls-secret\n    password: password\nauthorizerClassName: kafka.security.authorizer.AclAuthorizer\nallowEveryoneIfNoAclFound: true  \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add pod annotations to let Otterize know it needs to generate the JKS credentials and store them at the specified K8s\nsecret according to bitnami's\nchart ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/kafka#enable-security-for-kafka-and-zookeeper"},"specifications")," :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'podAnnotations:\n  otterize/cert-type: jks\n  spire-integration.otterize.com/tls-secret-name: kafka-tls-secret\n  otterize/truststore-file-name: kafka.truststore.jks\n  otterize/keystore-file-name: kafka-keystore.jks\n  otterize/dns-names: "kafka-0.kafka-headless.kafka.svc.cluster.local,kafka.kafka.svc.cluster.local"\n  otterize/cert-ttl: "31536000" # 1 year\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the complete YAML of this example..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'superUsers: "User:CN=kafka.kafka,O=SPIRE,C=US;User:CN=intents-operator.otterize,O=SPIRE,C=US"\nlisteners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nadvertisedListeners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nlistenerSecurityProtocolMap: "INTERNAL:SSL,CLIENT:SSL"\nauth:\n  clientProtocol: mtls\n  interBrokerProtocol: mtls\n  tls:\n    type: jks\n    existingSecrets:\n      - kafka-tls-secret\n    password: password\nauthorizerClassName: kafka.security.authorizer.AclAuthorizer\nallowEveryoneIfNoAclFound: true\npodAnnotations:\n  otterize/cert-type: jks\n  spire-integration.otterize.com/tls-secret-name: kafka-tls-secret\n  otterize/truststore-file-name: kafka.truststore.jks\n  otterize/keystore-file-name: kafka-keystore.jks\n  otterize/dns-names: "kafka-0.kafka-headless.kafka.svc.cluster.local,kafka.kafka.svc.cluster.local"\n  otterize/cert-ttl: "31536000" # 1 year\n'))),(0,r.kt)("h3",{id:"testing-secure-connection-to-kafka"},"Testing secure connection to Kafka"),(0,r.kt)("p",null,"You can set up an interactive session that securely connects to Kafka by deploying a pod configured to get credentials\nand using the popular ",(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/quickstart#quickstart_send"},"kafka-console-producer")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/quickstart#quickstart_consume"},"kafka-console-consumer")," scripts:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the details of this example..."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"namespace.yaml",label:"namespace.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\nname: otterize-tutorial-kafka-mtls\n"))),(0,r.kt)(o.Z,{value:"interactive.yaml",label:"interactive.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: interactive\nnamespace: otterize-tutorial-kafka-mtls\nspec:\nselector:\n matchLabels:\n   app: interactive\ntemplate:\n metadata:\n   labels:\n     app: interactive\n   annotations:\n     spire-integration.otterize.com/tls-secret-name: interactive-credentials-secret\n     spire-integration.otterize.com/cert-type: jks\n     spire-integration.otterize.com/truststore-file-name: kafka.truststore.jks\n     spire-integration.otterize.com/keystore-file-name: kafka.keystore.jks\n     spire-integration.otterize.com/cert-ttl: "2592000"\n spec:\n   containers:\n     - name: interactive\n       image: bitnami/kafka\n       command: [ "/bin/sh", "-c", "--" ]\n       args: [ "sleep infinity" ]\n       volumeMounts:\n         - mountPath: /app\n           name: interactive-properties\n         - name: otterize-credentials\n           mountPath: /var/otterize/credentials\n           readOnly: true\n   volumes:\n     - name: interactive-properties\n       configMap:\n         name: interactive-properties\n     - name: otterize-credentials\n       secret:\n         secretName: interactive-credentials-secret\n'))),(0,r.kt)(o.Z,{value:"interactive-configmap.yaml",label:"interactive-configmap.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\nname: interactive-properties\nnamespace: otterize-tutorial-kafka-mtls\ndata:\nclient.properties: |\n security.protocol=SSL\n ssl.keystore.location=/var/otterize/credentials/kafka.keystore.jks\n ssl.keystore.password=password\n ssl.truststore.location=/var/otterize/credentials/kafka.truststore.jks\n ssl.truststore.password=password\n"))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy a pod configured for the interactive session connecting to Kafka"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/kafka-mtls/shell/all.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that the ",(0,r.kt)("inlineCode",{parentName:"p"},"pod")," was deployed"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-kafka-mtls -l app=interactive\n")),(0,r.kt)("p",{parentName:"li"},"You should see"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                           READY   STATUS    RESTARTS   AGE\ninteractive-5568ff58ff-84ksc   1/1     Running   0          8s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's open two interactive terminal windows - one for the producer and one for the consumer with so we can see\nthe messages sent and received in real time:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Producer terminal"',title:'"Producer','terminal"':!0},"kubectl exec -n otterize-tutorial-kafka-mtls -it deploy/interactive -- bash \\\n/opt/bitnami/kafka/bin/kafka-console-producer.sh \\\n--bootstrap-server kafka.kafka:9092 \\\n-topic mytopic \\\n--producer.config /app/client.properties\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Consumer terminal"',title:'"Consumer','terminal"':!0},"kubectl exec -n otterize-tutorial-kafka-mtls -it deploy/interactive -- bash \\\n/opt/bitnami/kafka/bin/kafka-console-consumer.sh \\\n--bootstrap-server kafka.kafka:9092 \\\n-topic mytopic \\\n--consumer.config /app/client.properties\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write any text you wish on the ",(0,r.kt)("strong",{parentName:"p"},"producer terminal"),", send it with an ",(0,r.kt)("strong",{parentName:"p"},"enter")," and you will see the messages appear\non the"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Producer terminal"',title:'"Producer','terminal"':!0},">Hello there consumer, this is the producer!\n>\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Consumer terminal"',title:'"Consumer','terminal"':!0},"Hello there consumer, this is the producer!\n")))),(0,r.kt)("h2",{id:"setting-security-scope-via"},"Setting security scope via\u2026"),(0,r.kt)("h2",{id:"otterize-identities-and-kafka-acls"},"Otterize identities and Kafka ACLs"),(0,r.kt)("h2",{id:""},"\u2026"),(0,r.kt)("h2",{id:"practical-notes"},"Practical notes"),(0,r.kt)("h2",{id:"avoiding-drift"},"Avoiding drift"),(0,r.kt)("h2",{id:"granularities-of-access-incl-via-network-policies-via-authn-only--topic-level"},"Granularities of access ",(0,r.kt)("em",{parentName:"h2"},"(incl. via network policies, via authN-only, & topic-level)")))}m.isMDXComponent=!0}}]);