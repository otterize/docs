"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:d,values:h,groupId:k,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===d?d:null!=(t=null!=d?d:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:T}=(0,s.U)(),[w,S]=(0,r.useState)(N),z=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=k){const e=y[k];null!=e&&e!==w&&v.some((t=>t.value===e))&&S(e)}const E=e=>{const t=e.currentTarget,n=z.indexOf(t),a=v[n].value;a!==w&&(O(t),S(a),null!=k&&T(k,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=z.indexOf(e.currentTarget)+1;n=null!=(a=z[t])?a:z[0];break}case"ArrowLeft":{var r;const t=z.indexOf(e.currentTarget)-1;n=null!=(r=z[t])?r:z[z.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>z.push(e),onKeyDown:x,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},9795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={sidebar_position:4,title:"Deploy mTLS between pods"},s="mTLS",c={unversionedId:"documentation/quick-tutorials/mtls",id:"documentation/quick-tutorials/mtls",title:"Deploy mTLS between pods",description:"This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.",source:"@site/docs/documentation/2-quick-tutorials/4-mtls.md",sourceDirName:"documentation/2-quick-tutorials",slug:"/documentation/quick-tutorials/mtls",permalink:"/documentation/quick-tutorials/mtls",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/2-quick-tutorials/4-mtls.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Deploy mTLS between pods"},sidebar:"docSidebar",previous:{title:"Automate network policies",permalink:"/documentation/quick-tutorials/network-policies"},next:{title:"Deploy mTLS between pods and Kafka",permalink:"/documentation/quick-tutorials/kafka-mtls"}},p={},u=[{value:"Install Otterize",id:"install-otterize",level:2},{value:"Pod annotation  (explainer)",id:"pod-annotation--explainer",level:2},{value:"Deploy tutorial",id:"deploy-tutorial",level:2},{value:"Inspect credentials",id:"inspect-credentials",level:2},{value:"What happened behind the scenes",id:"what-happened-behind-the-scenes",level:2},{value:"What&#39;s next",id:"whats-next",level:2},{value:"Teardown",id:"teardown",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mtls"},"mTLS"),(0,r.kt)("p",null,"This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.\nWe will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Otterize"),(0,r.kt)("li",{parentName:"ul"},"Learn how to annotate pods for automatic credentials generation"),(0,r.kt)("li",{parentName:"ul"},"Deploy client and server pods communicating over HTTPS and provision credentials to them"),(0,r.kt)("li",{parentName:"ul"},"Inspect the credentials")),(0,r.kt)("h2",{id:"install-otterize"},"Install Otterize"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can skip this section if Otterize is already installed in your cluster.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use Helm to install the latest version of Otterize:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add otterize https://otterize.github.io/helm-charts\nhelm repo update\nhelm upgrade --install otterize otterize/otterize-kubernetes -n otterize --create-namespace\n"))),(0,r.kt)("li",{parentName:"ol"},"It can take several minutes for the pods to be ",(0,r.kt)("inlineCode",{parentName:"li"},"Running")," and all containers to be ready.\nYou can monitor progress with the following command:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get pods -n otterize -w\n")),"Once you see the following (there may be even more pods), you can stop monitoring with ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl-C"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                             READY   STATUS    RESTARTS      AGE\nintents-operator-controller-manager-6b97596d54-5qxcw             2/2     Running   0             53s\notterize-spire-agent-9s8w7                                       1/1     Running   0             54s\notterize-spire-agent-np2wf                                       1/1     Running   1             54s\notterize-spire-server-0                                          1/1     Running   0             53s\notterize-watcher-77db87cfcd-xhsrk                                1/1     Running   0             53s\nspire-integration-operator-controller-manager-65b8bf57b5-mpltl   2/2     Running   0             53s\n")))),(0,r.kt)("h2",{id:"pod-annotation--explainer"},"Pod annotation  (explainer)"),(0,r.kt)("p",null,"To generate credentials for a pod we simply need to update the deployment by annotating it.\nThe required steps are to"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Annotate the pod - Otterize automatically identifies the ",(0,r.kt)("inlineCode",{parentName:"li"},"otterize/credentials-secret-name")," annotation, generates\nmTLS credentials, and stores them as K8s secret named as the annotation value."),(0,r.kt)("li",{parentName:"ol"},"Mount the credentials stored as a K8s secret as a volume"),(0,r.kt)("li",{parentName:"ol"},"Mount the volume into the container")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  template:\n    metadata:\n      ...\n      annotations:\n        # highlight-next-line\n        otterize/credentials-secret-name: client-credentials-secret       # 1 Generate credentials\n    spec:\n      volumes:\n        # highlight-start\n        - name: otterize-credentials\n          secret:\n            secretName: client-credentials-secret                      # 2 Mount credentials as a volume\n            # highlight-end\n      containers:\n        - name: client\n        ...\n        volumeMounts:\n          # highlight-start\n          - name: otterize-credentials\n            mountPath: /var/otterize/credentials                      # 3 Mount volume into container \n            readOnly: true\n            # highlight-end\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"/documentation/credential-operator/behavior"},"Behavior")," section to view all parameters available as pod\nannotation for generating mTLS credentials.")),(0,r.kt)("h2",{id:"deploy-tutorial"},"Deploy tutorial"),(0,r.kt)("p",null,"Our example consists of two pods: client and server communicating over HTTPS using credentials\nprovisioned by Otterize."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Code"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"client.js",label:"client.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst https = require('https');\n\nconst options = {\n hostname: 'server.otterize-tutorial-mtls',\n port: 443,\n path: '/hello',\n method: 'GET',\n cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),\n key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n ca: fs.readFileSync('/var/otterize/credentials/bundle.pem')\n}\n\nconst req = https.request(\n options,\n res => {\n     res.on('data', function (data) {\n         console.log(data.toString())\n     });\n }\n);\n\nreq.end();\n"))),(0,r.kt)(i.Z,{value:"server.js",label:"server.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const https = require(`https`);\nconst fs = require(`fs`);\n\nconst options = {\n key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),\n ca: fs.readFileSync('/var/otterize/credentials/bundle.pem'),\n requestCert: true\n};\n\nhttps.createServer(options, (req, res) => {\n console.log(req.method + \" \" + req.url);\n if (req.url === '/hello') {\n     res.writeHead(200);\n     res.end(`Hello world mTLS`);\n } else {\n     res.end();\n }\n}).listen(443);\n"))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.otterize.com/code-examples/mtls/all.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," and server ",(0,r.kt)("inlineCode",{parentName:"p"},"pods")," were deployed"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n otterize-tutorial-mtls\n")),(0,r.kt)("p",{parentName:"li"},"You should see"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                      READY   STATUS    RESTARTS   AGE\nclient-5689997b5c-grlnt   1/1     Running   0          35s\nserver-6698c58cbc-v9n9b   1/1     Running   0          34s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that the client can successfully call the server using HTTP over mTLS. The server will reply to the client\nwith it's ",(0,r.kt)("inlineCode",{parentName:"p"},"own")," certificate's ",(0,r.kt)("inlineCode",{parentName:"p"},"common name")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"client"),"'s certificate ",(0,r.kt)("inlineCode",{parentName:"p"},"common name"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs --tail 3 -n otterize-tutorial-mtls deploy/client\n")),(0,r.kt)("p",{parentName:"li"},"You should see the following line"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mTLS hello world\nfrom: server.otterize-tutorial-mtls          # server's common name in the certificate\nto client: client.otterize-tutorial-mtls     # client's common name in the certificate\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can also follow the server's output log with"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs --tail 1 -n otterize-tutorial-mtls deploy/server\n")),(0,r.kt)("p",{parentName:"li"},"You should see the following line"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"client.otterize-tutorial-mtls:  GET /hello\n")))),(0,r.kt)("h2",{id:"inspect-credentials"},"Inspect credentials"),(0,r.kt)("p",null,"We can use openssl to inspect the generated certificates. The certificates are stored as ",(0,r.kt)("inlineCode",{parentName:"p"},"K8s secrets")," and are also\n",(0,r.kt)("inlineCode",{parentName:"p"},"mounted")," into containers."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We will first retrieve them from one of the two options"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"secret-direct",label:"K8s secret",default:!0,mdxType:"TabItem"},"To retrieve the credentials from the K8s secrets store use:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secret -n otterize-tutorial-mtls client-credentials-secret -o jsonpath='{.data.svid\\.pem}' | base64 -d > svid.pem\n"))),(0,r.kt)(i.Z,{value:"secret-pod",label:"K8s pod mount",default:!0,mdxType:"TabItem"},"To retrieve the credentials from the container mount use:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -n otterize-tutorial-mtls -it deploy/client -- cat /var/otterize/credentials/svid.pem > svid.pem\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"And then inspect them with"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openssl x509 -in svid.pem -text | head -n 15\n")),(0,r.kt)("p",{parentName:"li"},"You should see a similar output to"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-x509"},"Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number:\n            0b:eb:eb:4d:0e:02:7e:28:93:30:1c:55:26:22:8b:c7\n        Signature Algorithm: sha256WithRSAEncryption\n        Issuer: C = US, O = SPIRE\n        Validity\n            Not Before: Aug 24 12:19:57 2022 GMT\n            Not After : Sep 23 12:20:07 2022 GMT\n# highlight-next-line\n        Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-mtls       # the client's name\n        Subject Public Key Info:\n            Public Key Algorithm: id-ecPublicKey\n                Public-Key: (256 bit)\n                pub:\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can see that Otterize generated an x509 certificate using the pod's name ","[",(0,r.kt)("em",{parentName:"p"},"client"),"]"," and namespace ","[",(0,r.kt)("em",{parentName:"p"},"\notterize-tutorial-mtls"),"]",".\nThe certificate belongs to a chain of trust starting at the SPIRE server."))),(0,r.kt)("h2",{id:"what-happened-behind-the-scenes"},"What happened behind the scenes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We annotated the pods to let Otterize know it should generate mTLS credentials."),(0,r.kt)("li",{parentName:"ol"},"The Otterize SPIRE integration operator",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Created an entries for the annotated pods with the SPIRE server."),(0,r.kt)("li",{parentName:"ol"},"Generated matching mTLS credentials using the SPIRE server."),(0,r.kt)("li",{parentName:"ol"},"Stored the mTLS credentials into a K8s secrets."))),(0,r.kt)("li",{parentName:"ol"},"The secrets were mounted (separately) into each pod's container."),(0,r.kt)("li",{parentName:"ol"},"The pods communicated with each other using HTTP of mutual TLS.")),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read about how to ",(0,r.kt)("a",{parentName:"li",href:"/documentation/sdk-integration/credential-sdk-integration"},"integrate")," mTLS into common SDKs and\nframeworks"),(0,r.kt)("li",{parentName:"ul"},"Enforce ",(0,r.kt)("a",{parentName:"li",href:"/documentation/getting-started/kafka-mtls"},"secure Kafka access")," with mTLS")),(0,r.kt)("h2",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"To remove the deployed resources run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-mtls\n")))}d.isMDXComponent=!0}}]);