"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[218],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),p=a(7094),s=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,a;const{lazy:o,block:u,defaultValue:d,values:h,groupId:k,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===d?d:null!=(t=null!=d?d:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:y}=(0,p.U)(),[z,x]=(0,r.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:_}=(0,s.o5)();if(null!=k){const e=N[k];null!=e&&e!==z&&b.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==z&&(_(t),x(n),null!=k&&y(k,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;a=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:z===t?0:-1,"aria-selected":z===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":z===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(g.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function d(e){const t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},6846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={sidebar_position:2,title:"Map your cluster"},p=void 0,s={unversionedId:"quick-tutorials/k8s-network-mapper",id:"quick-tutorials/k8s-network-mapper",title:"Map your cluster",description:"The network mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you",source:"@site/docs/2-quick-tutorials/2-k8s-network-mapper.mdx",sourceDirName:"2-quick-tutorials",slug:"/quick-tutorials/k8s-network-mapper",permalink:"/quick-tutorials/k8s-network-mapper",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/2-quick-tutorials/2-k8s-network-mapper.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Map your cluster"},sidebar:"docSidebar",previous:{title:"Automate network policies",permalink:"/quick-tutorials/k8s-network-policies"},next:{title:"Automate secure Kafka access",permalink:"/quick-tutorials/kafka-mtls"}},c={},m=[{value:"Install the network mapper",id:"install-the-network-mapper",level:2},{value:"Install the Otterize CLI",id:"install-the-otterize-cli",level:2},{value:"Map the cluster",id:"map-the-cluster",level:2},{value:"Deploy demo to simulate traffic",id:"deploy-demo-to-simulate-traffic",level:3},{value:"Show mapped traffic",id:"show-mapped-traffic",level:3},{value:"Change traffic, then &quot;Sniff&amp;Diff&quot;",id:"change-traffic-then-sniffdiff",level:3},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:3}],u={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The network mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you\nthrough installing Otterize, mapping traffic and tracking changes."),(0,r.kt)("h2",{id:"install-the-network-mapper"},"Install the network mapper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add otterize https://helm.otterize.com\nhelm repo update\nhelm install network-mapper otterize/network-mapper -n otterize-system --create-namespace --wait\n")),(0,r.kt)("p",null,"You can remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"--wait")," flag if you don't want Helm to wait for all pods to be ready, and instead manually watch for all pods to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n otterize-system -w"),"."),(0,r.kt)("h2",{id:"install-the-otterize-cli"},"Install the Otterize CLI"),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"mac",label:"Mac",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Apple Silicon",label:"Apple Silicon",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.3/otterize-cli_0.1.3_Darwin_arm64.tar.gz\ntar xf otterize-cli_0.1.3_Darwin_arm64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,r.kt)(o.Z,{value:"Intel 64-bit",label:"Intel 64-bit",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.3/otterize-cli_0.1.3_Darwin_x86_64.tar.gz\ntar xf otterize-cli_0.1.3_Darwin_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))))),(0,r.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"64-bit",label:"64-bit",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.3/otterize-cli_0.1.3_Windows_x86_64.zip\nunzip otterize-cli_0.1.3_Windows_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,r.kt)(o.Z,{value:"32-bit",label:"32-bit",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.3/otterize-cli_0.1.3_Windows_i386.zip\nunzip otterize-cli_0.1.3_Windows_i386.zip\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))))),(0,r.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"amd64",label:"amd64",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.3/otterize-cli_0.1.3_Linux_x86_64.tar.gz\ntar xf otterize-cli_0.1.3_Linux_x86_64.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n"))),(0,r.kt)(o.Z,{value:"i386",label:"i386",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/otterize/otterize-cli/releases/download/v0.1.3/otterize-cli_0.1.3_Linux_i386.tar.gz\ntar xf otterize-cli_0.1.3_Linux_i386.tar.gz\nsudo cp otterize /usr/local/bin  # optionally move to PATH\n")))))),(0,r.kt)("p",null,"More variants are available at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/otterize/otterize-cli/releases"},"GitHub Releases page"),"."),(0,r.kt)("h2",{id:"map-the-cluster"},"Map the cluster"),(0,r.kt)("p",null,"The network mapper starts to sniff traffic and build an in-memory network map as soon as it's installed."),(0,r.kt)("h3",{id:"deploy-demo-to-simulate-traffic"},"Deploy demo to simulate traffic"),(0,r.kt)("p",null,"Let's add traffic to the cluster and see how the network mapper tracks it.\nDeploy the following simple example ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"p"},"client"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"client2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"server"),", communicating over HTTP:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-tutorial-mapper -f https://docs.otterize.com/code-examples/network-mapper/all.yaml\n")),(0,r.kt)("h3",{id:"show-mapped-traffic"},"Show mapped traffic"),(0,r.kt)("p",null,"You can view mapped traffic by calling the CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," commands.\nThe latter supports multiple output formats, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"intents")," (client intents files) and ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),".\nThe following shows the CLI output filtered for the namespace (",(0,r.kt)("inlineCode",{parentName:"p"},"otterize-tutorial-mapper"),")\nof the example above."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"list",label:"List",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'List the pod-to-pod network map built up ("sniffed") so far:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper list -n otterize-tutorial-mapper\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For the simple example above, you should see:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"client in namespace otterize-tutorial-mapper calls:\n  - server\nclient2 in namespace otterize-tutorial-mapper calls:\n  - server\n"))))),(0,r.kt)(o.Z,{value:"intents",label:"Export as intents",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export as YAML client intents (the default format) the pod-to-pod network map built up so far:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper export -n otterize-tutorial-mapper\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For the simple example above, you should see (concatenated into one YAML file):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: client\n  namespace: otterize-tutorial-mapper\nspec:\n  service:\n    name: client\n  calls:\n    - name: server\n---\napiVersion: k8s.k8s.otterize.com/v1\nkind: ClientIntents\nmetadata:\n  name: server\n  namespace: otterize-tutorial-mapper\nspec:\n  service:\n    name: client2\n  calls:\n    - name: server\n"))))),(0,r.kt)(o.Z,{value:"json",label:"Export as JSON",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export as JSON the pod-to-pod network map built up so far:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper export -n otterize-tutorial-mapper --format json\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For the simple example above, you should see:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "client",\n      "namespace": "otterize-tutorial-mapper"\n    },\n    "spec": {\n      "service": {\n        "name": "client"\n      },\n      "calls": [\n        {\n          "name": "server"\n        }\n      ]\n    }\n  },\n  {\n    "kind": "ClientIntents",\n    "apiVersion": "k8s.otterize.com/v1alpha1",\n    "metadata": {\n      "name": "client",\n      "namespace": "otterize-tutorial-mapper"\n    },\n    "spec": {\n      "service": {\n        "name": "client"\n      },\n      "calls": [\n        {\n          "name": "server"\n        }\n      ]\n    }\n  }\n]\n')))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/cli"},"CLI documentation")," for more details about the CLI.")),(0,r.kt)("h3",{id:"change-traffic-then-sniffdiff"},'Change traffic, then "Sniff&Diff"'),(0,r.kt)("p",null,'One of the benefits for using the network mapper is the ability to track changes over time for communication within your\ncluster. We call that "Sniff&Diff": continue to sniff traffic, then diff the network mapper output to see what changed.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's save the current state of traffic from the cluster into a file we will compare against later:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper list -n otterize-tutorial-mapper > intents-original.txt\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"And now we can add more traffic to the cluster and see how the network mapper tracks it.\nLet's deploy an extension to the example, consisting of two pods ","\u2014","\n",(0,r.kt)("inlineCode",{parentName:"p"},"other-client")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"other-server"),", communicating over HTTP:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n otterize-tutorial-mapper -f https://docs.otterize.com/code-examples/network-mapper/all-other.yaml\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Check that the client and server pods were deployed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-mapper\n")),(0,r.kt)("p",null,"You should see"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-756f7677f8-rdm8l         1/1     Running   0          15m\nclient2-5c4479947b-cdkl2        1/1     Running   0          9m18s\nother-client-8666d97d9c-29xpg   1/1     Running   0          4m8s\nother-server-676dbc5f5-bqxs4    1/1     Running   0          4m3s\nserver-6698c58cbc-tht9n         1/1     Running   0          15m\n"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Let's list the network map again:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"otterize mapper list -n otterize-tutorial-mapper\n")),"You should see all the calls including the new ones:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"client in namespace otterize-tutorial-mapper calls:\n  - server\nclient2 in namespace otterize-tutorial-mapper calls:\n  - server\n# highlight-start\nother-client in namespace otterize-tutorial-mapper calls:\n  - other-server\n# highlight-end\n"))),(0,r.kt)("li",{parentName:"ol"},"We can also compare both outputs to see the difference. Start by saving the updated list to a file:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"otterize mapper list -n otterize-tutorial-mapper > intents-updated.txt\n"))),(0,r.kt)("li",{parentName:"ol"},"Now compare the original file with the updated file using:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"diff -y intents-original.txt intents-updated.txt;echo\n")),"Note the new calls identified on the lower right:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"client in namespace otterize-tutorial-mapper calls:             client in namespace otterize-tutorial-mapper calls:\n  - server                                                        - server\nclient2 in namespace otterize-tutorial-mapper calls:            client2 in namespace otterize-tutorial-mapper calls:\n  - server                                                        - server\n# highlight-start\n                                                               > other-client in namespace otterize-tutorial-mapper calls:\n                                                               >   - other-server\n# highlight-end\n")))),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"The network mapper is a great way to bootstrap IBAC. It generates client intents files that reflect\nthe current topology of your services; those can then be used by each client team to grant them easy\nand ",(0,r.kt)("em",{parentName:"p"},"secure")," access to the services they need, and as their needs evolve, they need only evolve\nthe intents files. We'll see more of that below."),(0,r.kt)("p",null,"Where to go next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you haven't already, see the ",(0,r.kt)("a",{parentName:"li",href:"/quick-tutorials/k8s-network-policies"},"automate network policies tutorial"),"."),(0,r.kt)("li",{parentName:"ul"},"Or go to the next tutorial to ",(0,r.kt)("a",{parentName:"li",href:"/quick-tutorials/kafka-mtls"},"automate secure access for Kafka"),"."),(0,r.kt)("li",{parentName:"ul"},"You might also dive deeper into the guide for ",(0,r.kt)("a",{parentName:"li",href:"../guides/k8s-ibac-via-network-policies"},"IBAC with network policies"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It even contains a bootstrapping exercise at the end!"))),(0,r.kt)("li",{parentName:"ul"},"For a deeper dive into the network mapper, see the guide for ",(0,r.kt)("a",{parentName:"li",href:"../guides/k8s-mapping-pod-to-pod-calls"},"mapping pod-to-pod calls"),".")),(0,r.kt)("h3",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"To remove the deployed resources run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-mapper\nhelm network-mapper uninstall -n otterize-system\n")))}d.isMDXComponent=!0}}]);