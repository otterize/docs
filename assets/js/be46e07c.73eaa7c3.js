"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),c=a(7392),p=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=k({queryString:a,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var g=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==i&&(u(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},2799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={sidebar_position:4,title:"Kafka access automation using Otterize Cloud mTLS",image:"/img/quick-tutorials/k8s-kafka-mtls/social.png"},s=void 0,c={unversionedId:"features/kafka/tutorials/k8s-kafka-mtls",id:"features/kafka/tutorials/k8s-kafka-mtls",title:"Kafka access automation using Otterize Cloud mTLS",description:"This tutorial will walk you through declaring and applying intents to easily secure access to Kafka running inside a Kubernetes cluster, automating the management of Kafka ACLs, and the generation and deployment of certificates for mTLS between Kafka and its clients using Otterize Cloud as the certificate provider.",source:"@site/docs/features/kafka/tutorials/k8s-kafka-mtls.mdx",sourceDirName:"features/kafka/tutorials",slug:"/features/kafka/tutorials/k8s-kafka-mtls",permalink:"/features/kafka/tutorials/k8s-kafka-mtls",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/kafka/tutorials/k8s-kafka-mtls.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Kafka access automation using Otterize Cloud mTLS",image:"/img/quick-tutorials/k8s-kafka-mtls/social.png"},sidebar:"docSidebar",previous:{title:"Kafka topic-level access mapping",permalink:"/features/kafka/tutorials/k8s-kafka-mapping"},next:{title:"Kafka access automation using cert-manager mTLS",permalink:"/features/kafka/tutorials/k8s-kafka-mtls-cert-manager"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Deploy Otterize",id:"1-deploy-otterize",level:3},{value:"Note:",id:"note",level:5},{value:"2. Install Kafka",id:"2-install-kafka",level:3},{value:"3. Configure Otterize to manage Kafka access",id:"3-configure-otterize-to-manage-kafka-access",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"Deploy clients",id:"deploy-clients",level:3},{value:"Apply intents",id:"apply-intents",level:3},{value:"Turn on protection",id:"turn-on-protection",level:3},{value:"What did we accomplish?",id:"what-did-we-accomplish",level:3},{value:"One-time setups",id:"one-time-setups",level:3},{value:"Per-client setups",id:"per-client-setups",level:3},{value:"Teardown",id:"teardown",level:2}],d={toc:u},m="wrapper";function k(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial will walk you through declaring and applying intents to easily secure access to Kafka running inside a Kubernetes cluster, automating the management of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/kafka/authorization.html"},"Kafka ACLs"),", and the generation and deployment of certificates for mTLS between Kafka and its clients using Otterize Cloud as the certificate provider."),(0,r.kt)("p",null,"If you prefer to generate certificates using ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io"},(0,r.kt)("inlineCode",{parentName:"a"},"cert-manager")),", try ",(0,r.kt)("a",{parentName:"p",href:"/quickstart/access-control/k8s-kafka-mtls-cert-manager"},"the tutorial for cert-manager"),"."),(0,r.kt)("p",null,"In this tutorial, we will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy Otterize with network policy enforcement disabled to focus on Kafka ACL enforcement"),(0,r.kt)("li",{parentName:"ul"},"Deploy a Kafka broker with 2 topics, and two clients that call these topics."),(0,r.kt)("li",{parentName:"ul"},"Declare that one client pod intends to access one of the topic."),(0,r.kt)("li",{parentName:"ul"},"Enable protection for this Kafka broker."),(0,r.kt)("li",{parentName:"ul"},"See that an ACL was auto-generated to allow just that, while blocking calls to that topic from the other client.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Already have Otterize & a Kafka broker deployed on your cluster? Skip to the ",(0,r.kt)("a",{parentName:"p",href:"#tutorial"},"tutorial"),"."),(0,r.kt)("h3",{id:"1-deploy-otterize"},"1. Deploy Otterize"),(0,r.kt)("p",null,"To deploy Otterize, head over to ",(0,r.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"Otterize Cloud")," and associate a Kubernetes cluster on the ",(0,r.kt)("a",{parentName:"p",href:"https://app.otterize.com/integrations"},"Integrations page"),", and follow the instructions. If you already have a Kubernetes cluster connected, skip this step."),(0,r.kt)("h5",{id:"note"},"Note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under mTLS and Kafka support choose ",(0,r.kt)("strong",{parentName:"li"},"Otterize Cloud"),"."),(0,r.kt)("li",{parentName:"ul"},"Copy the Helm command and add the following flags:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'--set intentsOperator.operator.enableNetworkPolicyCreation=false \\\n--set networkMapper.kafkawatcher.enable=true \\\n--set networkMapper.kafkawatcher.kafkaServers={"kafka-0.kafka"}\n')),(0,r.kt)("p",null,"Note that enforcement is disabled, we will enable it later. The configuration tab should look like this:"),(0,r.kt)("h3",{id:"2-install-kafka"},"2. Install Kafka"),(0,r.kt)("p",null,"We will deploy a Kafka broker using Bitnami's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/kafka"},"Helm chart"),".\nIn the chart we will configure Kafka to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recognize the Otterize intents operator as a super user so it can configure ACLs;"),(0,r.kt)("li",{parentName:"ul"},"Use TLS/SSL for its listeners;"),(0,r.kt)("li",{parentName:"ul"},"Tell the Otterize credentials operator, via pod annotations, how credentials should be created;"),(0,r.kt)("li",{parentName:"ul"},"Authenticate clients using mTLS credentials provided as a Kubernetes secret; and"),(0,r.kt)("li",{parentName:"ul"},"Allow access to any topic by default unless denied by an ACL (achieved using ",(0,r.kt)("inlineCode",{parentName:"li"},"allowEveryoneIfNoAclFound: true"),").")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the Helm values.yaml used with the Bitnami chart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Configure Otterize as a super user to grant it access to configure ACLs\nsuperUsers: "User:CN=kafka.kafka,O=SPIRE,C=US;User:CN=intents-operator.otterize-system,O=SPIRE,C=US;User:CN=kafka.kafka;User:CN=intents-operator.otterize-system"\n# Use TLS for the Kafka listeners (Kafka calls them SSL)\nlisteners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nadvertisedListeners:\n  - "CLIENT://:9092"\n  - "INTERNAL://:9093"\nlistenerSecurityProtocolMap: "INTERNAL:SSL,CLIENT:SSL"\n# For a gradual rollout scenario we will want to keep the default permission for topics as allowed, unless an ACL was set\nallowEveryoneIfNoAclFound: true\n# Annotations for Otterize to generate credentials\npodAnnotations:\n  credentials-operator.otterize.com/cert-type: jks\n  credentials-operator.otterize.com/tls-secret-name: kafka-tls-secret\n  credentials-operator.otterize.com/dns-names: "kafka-0.kafka-headless.kafka.svc.cluster.local,kafka.kafka.svc.cluster.local"\n# Authenticate clients using mTLS\nauth:\n  clientProtocol: mtls\n  interBrokerProtocol: mtls\n  tls:\n    type: jks\n    existingSecrets:\n      - kafka-tls-secret\n    password: password\n    jksTruststore: truststore.jks\n    jksKeystoreSAN: keystore.jks\nauthorizerClassName: kafka.security.authorizer.AclAuthorizer\n# Allocate resources\nresources:\n  requests:\n    cpu: 50m\n    memory: 256Mi\nlog4j: |\n  # Unspecified loggers and loggers with additivity=true output to server.log and stdout\n  # Note that INFO only applies to unspecified loggers, the log level of the child logger is used otherwise\n\n  log4j.rootLogger=INFO, stdout, kafkaAppender\n\n  log4j.appender.stdout=org.apache.log4j.ConsoleAppender\n  log4j.appender.stdout.layout=org.apache.log4j.PatternLayout\n  log4j.appender.stdout.layout.ConversionPattern=[%d] %p %m (%c)%n\n\n  log4j.appender.kafkaAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.kafkaAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.kafkaAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n\n  log4j.appender.stateChangeAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.stateChangeAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.stateChangeAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n\n  log4j.appender.requestAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.requestAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.requestAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n\n  log4j.appender.cleanerAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.cleanerAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.cleanerAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n\n  log4j.appender.controllerAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.controllerAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.controllerAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n\n  log4j.appender.authorizerAppender=org.apache.log4j.ConsoleAppender\n  log4j.appender.authorizerAppender.layout=org.apache.log4j.PatternLayout\n  log4j.appender.authorizerAppender.layout.ConversionPattern=[%d] %p %m (%c)%n\n\n\n  # Change the line below to adjust ZK client logging\n  log4j.logger.org.apache.zookeeper=INFO\n\n  # Change the two lines below to adjust the general broker logging level (output to server.log and stdout)\n  log4j.logger.kafka=INFO, stdout\n  log4j.logger.org.apache.kafka=INFO\n\n  # Change to DEBUG or TRACE to enable request logging\n  log4j.logger.kafka.request.logger=WARN, requestAppender\n  log4j.additivity.kafka.request.logger=false\n\n  # Uncomment the lines below and change log4j.logger.kafka.network.RequestChannel$ to TRACE for additional output\n  # related to the handling of requests\n  #log4j.logger.kafka.network.Processor=TRACE, requestAppender\n  #log4j.logger.kafka.server.KafkaApis=TRACE, requestAppender\n  #log4j.additivity.kafka.server.KafkaApis=false\n  log4j.logger.kafka.network.RequestChannel$=WARN, requestAppender\n  log4j.additivity.kafka.network.RequestChannel$=false\n\n  # Change the line below to adjust KRaft mode controller logging\n  log4j.logger.org.apache.kafka.controller=INFO, controllerAppender\n  log4j.additivity.org.apache.kafka.controller=false\n\n  # Change the line below to adjust ZK mode controller logging\n  log4j.logger.kafka.controller=TRACE, controllerAppender\n  log4j.additivity.kafka.controller=false\n\n  log4j.logger.kafka.log.LogCleaner=INFO, cleanerAppender\n  log4j.additivity.kafka.log.LogCleaner=false\n\n  log4j.logger.state.change.logger=INFO, stateChangeAppender\n  log4j.additivity.state.change.logger=false\n\n  # Access denials are logged at INFO level, change to DEBUG to also log allowed accesses\n  log4j.logger.kafka.authorizer.logger=DEBUG, authorizerAppender\n  log4j.additivity.kafka.authorizer.logger=false\n'))),(0,r.kt)("p",null,"The following command will deploy a Kafka broker with this chart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nhelm install --create-namespace -n kafka \\\n  -f ${ABSOLUTE_URL}/code-examples/kafka-mtls/helm/values.yaml kafka bitnami/kafka --version 21.4.4\n")),(0,r.kt)("p",null,"You can watch for all pods to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n kafka -w"),"."),(0,r.kt)("h3",{id:"3-configure-otterize-to-manage-kafka-access"},"3. Configure Otterize to manage Kafka access"),(0,r.kt)("p",null,"In our simple example, we'll call the Kafka broker service simply \"kafka\".\nLet's tell Otterize how to connect to the Kafka broker by applying an Otterize ",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaServerConfig"),", naming it ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka"),". The name will be the name we later use to declare ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientIntents"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ${ABSOLUTE_URL}/code-examples/kafka-mtls/kafkaserverconfig.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: KafkaServerConfig\nmetadata:\n  name: kafkaserverconfig\n  namespace: kafka\nspec:\n  service:\n    name: kafka\n  addr: kafka.kafka:9092\n")),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("h3",{id:"deploy-clients"},"Deploy clients"),(0,r.kt)("p",null,"Our simple example consists of two client pods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'One named "',(0,r.kt)("strong",{parentName:"li"},"client"),'".'),(0,r.kt)("li",{parentName:"ul"},'And one named "',(0,r.kt)("strong",{parentName:"li"},"client-other"),'".')),(0,r.kt)("p",null,"These clients are connecting to Kafka using mTLS, the credentials which they will receive from Otterize. Otterize makes this easy, requiring just 4 simple changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Generate credentials"),": add the ",(0,r.kt)("inlineCode",{parentName:"li"},"credentials-operator.otterize.com/tls-secret-name")," annotation, which tells Otterize to generate mTLS credentials and store them in a Kubernetes Secret whose name is the value of this annotation."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Expose credentials in a volume"),": add a volume containing this secret to the pod."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Mount the volume"),": mount the volume in the pod.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see how to configure a Pod to mount the secret"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  template:\n    metadata:\n      annotations:\n        # highlight-next-line\n        # 1. Generate credentials as a secret called "client-credentials-secret":\n        credentials-operator.otterize.com/tls-secret-name: client-credentials-secret\n        ...\n    spec:\n      volumes:\n        # highlight-start\n        # 2. Create a volume containing this secret:\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret\n        # highlight-end\n        ...\n      containers:\n        - name: client\n          ...\n          volumeMounts:\n            # highlight-start\n            # 3. Mount volume into container\n            - name: otterize-credentials\n              mountPath: /var/otterize/credentials\n              readOnly: true\n            # highlight-end\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see the YAML for the pods used in this example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"client-deployment.yaml",label:"client-deployment.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: client\n  namespace: otterize-tutorial-kafka-mtls\nspec:\n  selector:\n    matchLabels:\n      app: client\n  template:\n    metadata:\n      labels:\n        app: client\n      annotations:\n        credentials-operator.otterize.com/tls-secret-name: client-credentials-secret\n    spec:\n      containers:\n        - name: client\n          image: otterize/tutorial-kafka-client:latest\n          imagePullPolicy: Always\n          volumeMounts:\n            - name: otterize-credentials\n              mountPath: /var/otterize/credentials\n              readOnly: true\n      volumes:\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret\n        - name: ephemeral\n          emptyDir: { }\n"))),(0,r.kt)(o.Z,{value:"client-other-deployment.yaml",label:"client-other-deployment.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: client-other\n  namespace: otterize-tutorial-kafka-mtls\nspec:\n  selector:\n    matchLabels:\n      app: client-other\n  template:\n    metadata:\n      labels:\n        app: client-other\n      annotations:\n        credentials-operator.otterize.com/tls-secret-name: client-other-credentials-secret\n    spec:\n      containers:\n        - name: client-other\n          image: otterize/tutorial-kafka-client-second:latest\n          imagePullPolicy: Always\n          volumeMounts:\n            - name: otterize-credentials\n              mountPath: /var/otterize/credentials\n              readOnly: true\n      volumes:\n        - name: otterize-credentials\n          secret:\n            secretName: client-other-credentials-secret\n        - name: ephemeral\n          emptyDir: { }\n"))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy the two clients into a namespace called ",(0,r.kt)("inlineCode",{parentName:"li"},"otterize-tutorial-kafka-mtls")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ${ABSOLUTE_URL}/code-examples/kafka-mtls/all.yaml\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Optional: check deployment status"),(0,r.kt)("p",null,"Check that the client pods were deployed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-kafka-mtls\n")),(0,r.kt)("p",null,"You should see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                    READY   STATUS    RESTARTS   AGE\nclient-65695dfc4c-jf4hd                 1/1     Running   0          92s\nclient-other-7c4b8cbd8d-dpkt6           1/1     Running   0          92s\n"))),(0,r.kt)("p",null,"Let's monitor, in separate terminal windows, both clients' attempts to call Kafka,\nso we can see the effects of our changes in real time."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Open a new terminal window ","[client]")," and tail the client log:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f --tail 1 -n otterize-tutorial-kafka-mtls deploy/client\n")),(0,r.kt)("p",null,"This client should be able to access both topics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[client] Loading mTLS certificates\n[client] Connecting to Kafka\n[client] Creating a producer and a consumer for - mytopic\n[client] Sending Messages\n[debug]  [client] Sent message 1 [mytopic]\n[client] Creating a producer and a consumer for - transactions\n[client] Sending messages\n[debug]  [client] Sent message 1 [transactions]\n[client] Sent message to topic: transactions - [client] Sent message 1 [transactions]\n[client] Sent message to topic: mytopic - [client] Sent message 1 [mytopic]\n[client] Read message from topic: mytopic - [client-other] Sent message 27 [mytopic]\n[client] Read message from topic: mytopic - [client-other] Sent message 18 [mytopic]\n[client] Read message from topic: mytopic - [client] Sent message 2 [mytopic]\n[client] Read message from topic: mytopic - [client-other] Sent message 36 [mytopic]\n[client] Read message from topic: mytopic - [client-other] Sent message 6 [mytopic]\n[client] Read message from topic: mytopic - [client-other] Sent message 33 [mytopic]\n[client] Read message from topic: mytopic - [client-other] Sent message 19 [mytopic]\n")),(0,r.kt)("p",null,"As you can see, both ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"client-other")," are currently able to access both ",(0,r.kt)("inlineCode",{parentName:"p"},"mytopic")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"transactions")," topics. (We see ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," sending messages and reading messages sent by ",(0,r.kt)("inlineCode",{parentName:"p"},"client-other")," so we know both are able to access both topics.)"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Open another terminal window ","[client-other]")," and tail the client-other log:")),(0,r.kt)("p",null,"This other client should also be able to access both topics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f --tail 1 -n otterize-tutorial-kafka-mtls deploy/client-other\n[client-other] Loading mTLS certificates\n[client-other] Connecting to Kafka\n[client-other] Creating a producer and a consumer for - mytopic\n[client-other] Sending messages\n[client-other] Creating a producer and a consumer for - transactions\n[client-other] Sending messages\n[debug]  [client-other] Sent message 1 [mytopic]\n[debug]  [client-other] Sent message 1 [transactions]\n[client-other] Sent message to topic: transactions - [client-other] Sent message 1 [transactions]\n[client-other] Sent message to topic: mytopic - [client-other] Sent message 1 [mytopic]\n[client-other] Read message from topic: transactions - [client] Sent message 5 [transactions]\n")),(0,r.kt)("p",null,"You can now browse to your account at ",(0,r.kt)("a",{parentName:"p",href:"https://app.otterize.com"},"https://app.otterize.com")," and see the access graph for your cluster:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Access graph",src:a(7120).Z,width:"2302",height:"1111"})),(0,r.kt)("p",null,"The access graph shows, through its green and orange lines linking the services, that no clients are currently blocked because we haven't enabled any sort of enforcement yet. The orange lines indicate that, since we have not declared any intents for these clients, they ",(0,r.kt)("em",{parentName:"p"},"would")," be blocked if we were to turn enforcement on."),(0,r.kt)("h3",{id:"apply-intents"},"Apply intents"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can click on the services or the lines connecting them to see which ClientIntents you need to apply to make the connection go green!")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The client declares its intent to call the ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.kafka")," server with this ",(0,r.kt)("inlineCode",{parentName:"li"},"intents.yaml")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client\n  namespace: otterize-tutorial-kafka-mtls\nspec:\n  service:\n    name: client\n  calls:\n    - name: kafka.kafka\n      type: kafka\n      kafkaTopics:\n        - name: mytopic\n          operations: [ produce,describe,consume ]\n        - name: transactions\n          operations: [ produce,describe,consume ]\n---\napiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: kafka\n  namespace: kafka\nspec:\n  service:\n    name: kafka\n  calls:\n    - name: kafka\n    - name: kafka-zookeeper\n\n\n")),(0,r.kt)("p",null,"We can apply intents for the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," by applying the ",(0,r.kt)("inlineCode",{parentName:"p"},"client-intents.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ${ABSOLUTE_URL}/code-examples/kafka-mtls/client-intents.yaml\n")),(0,r.kt)("p",null,"If you go back to your access graph, you'll now see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," has a solid green line connecting it to the Kafka broker. This is because the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," has both declared its intent to access the Kafka broker, and it has been authenticated using mTLS."),(0,r.kt)("p",null,"If you click on that solid line, you will see that the declared intents match the discovered intents, so access is assured."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"client intents applied",src:a(6582).Z,width:"707",height:"340"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"At this point, since the Kafka server is not actually protected, the ",(0,r.kt)("inlineCode",{parentName:"li"},"client-other")," can still access the topics. The line is orange, indicating that it has no declared intents.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Declared Intent",src:a(7632).Z,width:"2286",height:"1112"})),(0,r.kt)("p",null,"We can see what happened:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Kafka topic-specific intents from ",(0,r.kt)("strong",{parentName:"li"},"[client]")," are declared (solid green line)."),(0,r.kt)("li",{parentName:"ol"},"Calls from ",(0,r.kt)("strong",{parentName:"li"},"[client-other]")," are not declared (orange line)."),(0,r.kt)("li",{parentName:"ol"},"Looking at the Kafka service, we can see that ",(0,r.kt)("strong",{parentName:"li"},"[client]")," has specific access configured (via Kafka ACLs) to perform ",(0,r.kt)("inlineCode",{parentName:"li"},"all")," operations on the ",(0,r.kt)("inlineCode",{parentName:"li"},"mytopic")," topic.")),(0,r.kt)("p",null,"Also, the access graph shows information about the mTLS certificates (credentials) distributed to the various services, as long as ",(0,r.kt)("a",{parentName:"p",href:"/security#cryptographic-credentials"},"Cloud-managed credentials")," are being used."),(0,r.kt)("h3",{id:"turn-on-protection"},"Turn on protection"),(0,r.kt)("p",null,"At this point, we haven't actually protected our Kafka broker. From everything we've done so far, we can see, however, that if we were to turn on protection, the ",(0,r.kt)("inlineCode",{parentName:"p"},"client-other")," would lose access to the broker."),(0,r.kt)("p",null,"Let's see that in action. Our clients that have not declared intents will be blocked from accessing the broker."),(0,r.kt)("p",null,"We need to turn protection on in for this Kafka broker by declaring it as a protected service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha2\nkind: ProtectedService\nmetadata:\n  name: kafka-protectedservice\n  namespace: kafka\nspec:\n  name: kafka\n")),(0,r.kt)("p",null,"Apply this ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtectedService")," resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ${ABSOLUTE_URL}/code-examples/kafka-mtls-cert-manager/protectedservice.yaml\n")),(0,r.kt)("p",null,"If you once again tail the logs for ",(0,r.kt)("inlineCode",{parentName:"p"},"client-other")," you'll see that it is no longer authorized to access this topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[client-other] Loading mTLS certificates\n[client-other] Connecting to Kafka\n[client-other] Creating a producer and a consumer for - transactions\n[client] Sending messages\n[client-other] Creating a producer and a consumer for - transactions\n[client] Sending messages\ntime="[...]" level=error msg="Failed reading/writing to Kafka"\nerror="kafka server: The client is not authorized to access this topic\n')),(0,r.kt)("p",null,"And if you look back at your access graph, you'll see that the Kafka broker is now protected, and that the ",(0,r.kt)("inlineCode",{parentName:"p"},"client-other")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"client-authenticated")," are blocked."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Clients blocked",src:a(1541).Z,width:"1916",height:"926"})),(0,r.kt)("h3",{id:"what-did-we-accomplish"},"What did we accomplish?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Controlling Kafka access no longer means touching ACLs, issuing and managing and distributing certs, establishing trust,\netc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As we saw with pod-to-pod access, clients simply declare with their intents files the Kafka access they need,\nand define a place on their filesystem where they'll get the appropriate credentials (certs).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The next ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply")," ensures that all the appropriate certs are issued and distributed,\nand that Kafka ACLs are configured to reflect precisely the intended topic-level access."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see what happened behind the scenes"),(0,r.kt)("h3",{id:"one-time-setups"},"One-time setups"),(0,r.kt)("p",null,"We configured the Helm chart for Kafka to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow the Otterize intents operator to be a Kafka super user (authenticated with a certificate)."),(0,r.kt)("li",{parentName:"ul"},"Use the SSL protocol for the Kafka listeners."),(0,r.kt)("li",{parentName:"ul"},"Let Otterize know it should generate mTLS credentials in the Java Key Store and Java Trust Store formats, and store them as a Kubernetes secret."),(0,r.kt)("li",{parentName:"ul"},"Use mTLS to authenticate clients, using this Kubernetes secret.")),(0,r.kt)("p",null,"We configured Kafka itself to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the TLS certificates of the Otterize credentials operator."),(0,r.kt)("li",{parentName:"ul"},"Set the default ACL for all topics to allow anonymous access.")),(0,r.kt)("h3",{id:"per-client-setups"},"Per-client setups"),(0,r.kt)("p",null,"We configured each of our clients to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Let Otterize know it should generate mTLS credentials for that client."),(0,r.kt)("li",{parentName:"ul"},"Mount the Kubernetes secret in a local volume.")),(0,r.kt)("p",null,"This already enables mTLS authentication between both clients and Kafka."),(0,r.kt)("p",null,"Then we applied intents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We only declared that the ",(0,r.kt)("em",{parentName:"li"},"client")," pod (not the ",(0,r.kt)("em",{parentName:"li"},"client-other")," pod) needed to access the ",(0,r.kt)("inlineCode",{parentName:"li"},"mytopic")," topic.")),(0,r.kt)("p",null,"This allowed the ",(0,r.kt)("em",{parentName:"p"},"client")," pod its access and protected ",(0,r.kt)("inlineCode",{parentName:"p"},"mytopic")," from any unintended access, such as from ",(0,r.kt)("em",{parentName:"p"},"client-other"),".")),(0,r.kt)("h2",{id:"teardown"},"Teardown"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Take care to remove the intents before removing the KafkaServerConfig or the Kafka broker, as the operator will not know how to remove\nthe intents if you first make it forget about the Kafka broker or it can't access the broker.\nIf it's unable to remove the ACLs for the intents, the operator will prevent the intents from being deleted until\nit is able to do so.")),(0,r.kt)("p",null,"To remove the deployed examples run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# run this first:\nkubectl delete -f ${ABSOLUTE_URL}/code-examples/kafka-mtls/client-intents.yaml\n# then the rest:\nkubectl delete -f ${ABSOLUTE_URL}/code-examples/kafka-mtls/all.yaml\nkubectl delete -f ${ABSOLUTE_URL}/code-examples/kafka-mtls/kafkaserverconfig.yaml\nhelm uninstall kafka -n kafka\n")))}k.isMDXComponent=!0},7120:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/base-60e98d7f9e45b13e50a22cdbbaeabb29.png"},6582:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/client-intents-d7835ae003d908391a2b5e2db04afd47.png"},1541:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/clients-blocked-56a5c5fbac0d840d1c9489d0dbd11579.png"},7632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/declared-intent-313450adb04eb54d4f8c828d24b3d437.png"}}]);