"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6964],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,y=m["".concat(l,".").concat(u)]||m[u]||p[u]||s;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6411:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(6540);function r(e){let{items:t,colSize:n}=e,r="lg:tw-grid-cols-2 tw-gap-4 xs:tw-grid-cols-1 ";return"lg"===n?r="lg:tw-grid-cols-4 tw-gap-2 xs:tw-grid-cols-2":"md"===n&&(r="lg:tw-grid-cols-3 tw-gap-2 xs:tw-grid-cols-1 md:tw-grid-cols-2"),a.createElement("div",{className:`tw-grid ${r}`},t.map((e=>a.createElement("div",{key:e.title,className:"tw-relative tw-flex tw-items-center tw-space-x-3 tw-rounded-lg tw-border tw-border-solid tw-border-primary-500 tw-bg-white tw-px-6 tw-py-5 tw-shadow-sm focus-within:tw-ring-2 focus-within:tw-ring-indigo-500 focus-within:tw-ring-offset-2 hover:tw-border-primary-600 hover:tw-shadow-md"},e.icon&&a.createElement("div",{className:"tw-flex-shrink-0"},a.createElement("img",{width:"40px",className:"tw-max-h-10 tw-max-w-10",src:e.icon,alt:""})),a.createElement("div",{className:"tw-min-w-0 tw-flex-1"},a.createElement("a",{href:e.url,className:"focus:tw-outline-none hover:tw-no-underline"},a.createElement("span",{className:"tw-absolute tw-inset-0","aria-hidden":"true"}),a.createElement("div",{className:"tw-text-md tw-font-medium tw-text-gray-900 tw-break-keep"},e.title),e.description&&a.createElement("div",{className:"tw-text-sm tw-text-gray-500"},e.description)))))))}},9180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,mysql_tutorials:()=>m,toc:()=>d});var a=n(8168),r=(n(6540),n(5680)),s=n(6411);const i={sidebar_position:1,title:"MySQL | Overview",hide_title:!0},o=void 0,l={unversionedId:"features/mysql/index",id:"features/mysql/index",title:"MySQL | Overview",description:"Otterize is able to create just-in-time username-and-password pairs for your service, providing them as a Kubernetes Secret that can be mounted to file or mapped to environment variables, as well as GRANTing access to databases and tables, based on ClientIntents (Intent-Based Access Control) declarations.",source:"@site/docs/features/mysql/index.mdx",sourceDirName:"features/mysql",slug:"/features/mysql/",permalink:"/features/mysql/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/mysql/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"MySQL | Overview",hide_title:!0},sidebar:"docSidebar",previous:{title:"Reference",permalink:"/features/istio/reference"},next:{title:"Just-in-time MySQL access",permalink:"/features/mysql/tutorials/mysql"}},c={},d=[{value:"Tutorials",id:"tutorials",level:3},{value:"How does Otterize work with MySQL?",id:"how-does-otterize-work-with-mysql",level:3}],m=[{title:"Just-in-time MySQL Access",description:"Learn how to manage just-in-time users and SQL GRANTs",url:"/features/mysql/tutorials/mysql"}],p={toc:d,mysql_tutorials:m},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mysql"},"MySQL"),(0,r.yg)("p",null,"Otterize is able to create just-in-time username-and-password pairs for your service, providing them as a Kubernetes Secret that can be mounted to file or mapped to environment variables, as well as ",(0,r.yg)("inlineCode",{parentName:"p"},"GRANT"),"ing access to databases and tables, based on ",(0,r.yg)("inlineCode",{parentName:"p"},"ClientIntents")," (",(0,r.yg)("a",{parentName:"p",href:"/overview/intent-based-access-control"},"Intent-Based Access Control"),") declarations."),(0,r.yg)("h3",{id:"tutorials"},"Tutorials"),(0,r.yg)("p",null,"To learn how to use the Intents Operator and Credentials Operator to enforce access using MySQL GRANTs, try one of these quickstart tutorials:"),(0,r.yg)(s.A,{items:m,colSize:"sm",mdxType:"DocsLinkCard"}),(0,r.yg)("h3",{id:"how-does-otterize-work-with-mysql"},"How does Otterize work with MySQL?"),(0,r.yg)("p",null,"The Otterize credentials operator will create a unique MySQL username-password combination for each service's use, exposed via a Kubernetes Secret. The service will use these credentials to connect to the database. ",(0,r.yg)("inlineCode",{parentName:"p"},"ClientIntents")," will define the access required by that service. As the intents are applied, The Otterize intents operator will keep the database's list of users and GRANTs up to date so that the service is able to access it."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"To get started, your cluster must have Otterize deployed."),(0,r.yg)("li",{parentName:"ol"},"You'll need to create a ",(0,r.yg)("inlineCode",{parentName:"li"},"MySQLServerConfig")," in your cluster, providing a connection URL and admin-level credentials for Otterize to manage permissions in your database. Below is an example ",(0,r.yg)("inlineCode",{parentName:"li"},"MySQLServerConfig")," resource.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: MySQLServerConfig\nmetadata:\n  name: mysql-tutorial-db # database instance name - should match the target in ClientIntents\n  namespace: otterize-tutorial-mysql\nspec:\n  address: <HOST:PORT> # Your MySQL servers address\n  credentials:\n    # Username Otterize will connect with & configure permissions as; optional, can be omitted if using a secretRef\n    username: <USER>\n    # Password for the above username; optional, can be omitted if using a secretRef\n    password: <PASSWORD>\n    # Secret containing the database credentials; optional, can be omitted if using the above username & password fields\n    secretRef:\n      # Name of the secret containing the database credentials; required\n      name: mysql-credentials\n      # Namespace where the secret is stored; optional, defaults to the namespace of the MySQLServerConfig\n      namespace: otterize-tutorial-mysql\n      # Key in the secret containing the username; optional, defaults to 'username'\n      usernameKey: username\n      # Key in the secret containing the password; optional, defaults to 'password'\n      passwordKey: password\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Each service can request a username-password Secret to be created, by annotating the Pod with ",(0,r.yg)("inlineCode",{parentName:"li"},"credentials-operator.otterize.com/user-password-secret-name"),". Below is an example of that annotation and passing the generated credentials into a container with environmental variables.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: server\n  template:\n    metadata:\n      annotations:\n        # highlight-next-line\n        credentials-operator.otterize.com/user-password-secret-name: server-creds\n      labels:\n        app: server\n    spec:\n      serviceAccountName: server\n      containers:\n        - name: server\n          imagePullPolicy: Always\n          image: 'supercool/my-example-container'\n          ports:\n            - containerPort: 80\n          env:\n            - name: DB_SERVER_USER\n              valueFrom:\n                secretKeyRef:\n                  name: server-creds\n                  key: username\n            - name: DB_SERVER_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: server-creds\n                  key: password\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Apply ",(0,r.yg)("inlineCode",{parentName:"li"},"ClientIntents")," and the specified access will be ",(0,r.yg)("inlineCode",{parentName:"li"},"GRANT"),"ed to the service in the ",(0,r.yg)("inlineCode",{parentName:"li"},"ClientIntents"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client-intents-for-server\n  namespace: otterize-tutorial-mysql\nspec:\n  service:\n    name: server\n  calls:\n    - name: mysql-tutorial-db # Same name as MySQLServerConfig metadata.name\n      type: database\n      databaseResources:\n        - databaseName: otterize-tutorial\n          table: example\n          operations:\n            - SELECT\n            - INSERT\n")),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Done!")))}y.isMDXComponent=!0}}]);