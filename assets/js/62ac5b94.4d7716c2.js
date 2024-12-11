"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8397],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>g});var a=r(6540);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=s,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6411:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(6540);function s(e){let{items:t,colSize:r}=e,s="lg:tw-grid-cols-2 tw-gap-4 xs:tw-grid-cols-1 ";return"lg"===r?s="lg:tw-grid-cols-4 tw-gap-2 xs:tw-grid-cols-2":"md"===r&&(s="lg:tw-grid-cols-3 tw-gap-2 xs:tw-grid-cols-1 md:tw-grid-cols-2"),a.createElement("div",{className:`tw-grid ${s}`},t.map((e=>a.createElement("div",{key:e.title,className:"tw-relative tw-flex tw-items-center tw-space-x-3 tw-rounded-lg tw-border tw-border-solid tw-border-primary-500 tw-bg-white tw-px-6 tw-py-5 tw-shadow-sm focus-within:tw-ring-2 focus-within:tw-ring-indigo-500 focus-within:tw-ring-offset-2 hover:tw-border-primary-600 hover:tw-shadow-md"},e.icon&&a.createElement("div",{className:"tw-flex-shrink-0"},a.createElement("img",{width:"40px",className:"tw-max-h-10 tw-max-w-10",src:e.icon,alt:""})),a.createElement("div",{className:"tw-min-w-0 tw-flex-1"},a.createElement("a",{href:e.url,className:"focus:tw-outline-none hover:tw-no-underline"},a.createElement("span",{className:"tw-absolute tw-inset-0","aria-hidden":"true"}),a.createElement("div",{className:"tw-text-md tw-font-medium tw-text-gray-900 tw-break-keep"},e.title),e.description&&a.createElement("div",{className:"tw-text-sm tw-text-gray-500"},e.description)))))))}},528:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,postgres_tutorials:()=>p,toc:()=>d});var a=r(8168),s=(r(6540),r(5680)),n=r(6411);const o={sidebar_position:1,title:"PostgreSQL | Overview",hide_title:!0},i=void 0,l={unversionedId:"features/postgresql/index",id:"features/postgresql/index",title:"PostgreSQL | Overview",description:"Otterize enables secure and efficient access to your PostgreSQL database, regardless of where it's located, from within your Kubernetes environment. By utilizing Intent-Based Access Control (IBAC), Otterize creates just-in-time username-and-password pairs for your services, delivering them as Kubernetes Secrets that can be mounted to files or mapped to environment variables, as well as GRANTing access to databases and tables based on these declarations. Additionally, Otterize can automatically generate IBAC declarations (ClientIntents) by analyzing your database access patterns, determining which services are accessing which databases, tables, and the specific operations they're performing.",source:"@site/docs/features/postgresql/index.mdx",sourceDirName:"features/postgresql",slug:"/features/postgresql/",permalink:"/features/postgresql/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/postgresql/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PostgreSQL | Overview",hide_title:!0},sidebar:"docSidebar",previous:{title:"Reference",permalink:"/features/mysql/reference"},next:{title:"Just-in-time PostgreSQL access",permalink:"/features/postgresql/tutorials/postgres"}},c={},d=[{value:"How Otterize Manages Database Access",id:"how-otterize-manages-database-access",level:2},{value:"Required Database Permissions for otterize",id:"required-database-permissions-for-otterize",level:2},{value:"Tutorials",id:"tutorials",level:3},{value:"How does Otterize work with PostgreSQL?",id:"how-does-otterize-work-with-postgresql",level:3}],p=[{title:"\ud83e\uddea Self-paced labs: just-in-time credentials for PostgreSQL",description:"Preconfigured labs to learn how to use Otterize with guided examples",url:"https://otterize.instruqt.com/pages/docs-postgresql"},{title:"Just-in-time PostgreSQL Access",description:"Learn how to manage just-in-time users and SQL GRANTs",url:"/features/postgresql/tutorials/postgres"},{title:"Map PostgreSQL access",description:"Learn how to use PostgreSQL audit logs to map access to your database",url:"/features/postgresql/tutorials/postgres-mapping"}],u={toc:d,postgres_tutorials:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,s.yg)(m,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"postgresql"},"PostgreSQL"),(0,s.yg)("p",null,"Otterize enables secure and efficient access to your PostgreSQL database, regardless of where it's located, from within your Kubernetes environment. By utilizing ",(0,s.yg)("a",{parentName:"p",href:"/overview/intent-based-access-control"},"Intent-Based Access Control")," (IBAC), Otterize creates just-in-time username-and-password pairs for your services, delivering them as Kubernetes Secrets that can be mounted to files or mapped to environment variables, as well as ",(0,s.yg)("inlineCode",{parentName:"p"},"GRANT"),"ing access to databases and tables based on these declarations. Additionally, Otterize can automatically generate IBAC declarations (",(0,s.yg)("inlineCode",{parentName:"p"},"ClientIntents"),") by analyzing your database access patterns, determining which services are accessing which databases, tables, and the specific operations they're performing."),(0,s.yg)("h2",{id:"how-otterize-manages-database-access"},"How Otterize Manages Database Access"),(0,s.yg)("p",null,"Otterize manages database access through two specialized components:"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Credentials Operator"),": This component creates and manages Kubernetes Secrets containing username-and-password pairs for your services. It ensures these credentials are synchronized with your PostgreSQL database, even performing password rotations if configured. The Credentials Operator establishes a connection to your database using the credentials provided in the ",(0,s.yg)("inlineCode",{parentName:"p"},"PostgreSQLServerConfig"),", even if password rotation is not enabled, to set up the initial user credentials."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Intents Operator"),": This component is responsible for applying ",(0,s.yg)("inlineCode",{parentName:"p"},"GRANTs")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"REVOKEs")," to database objects based on your ClientIntents declarations. It ensures that your services have the precise level of access required and nothing more. The Intents Operator also connects to your PostgreSQL database using the same credentials as the Credentials Operator."),(0,s.yg)("h2",{id:"required-database-permissions-for-otterize"},"Required Database Permissions for otterize"),(0,s.yg)("p",null,"Both the Credentials and Intents Operators require specific permissions within your PostgreSQL database to function correctly. It is recommended to provide a user with administrative privileges or a dedicated user with the following privileges on the relevant schemas:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA <your_schema>;\nGRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA <your_schema>;\n")),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"The root or privileged account in your database is used exclusively by the Otterize operator during the initial setup phase. It is used to create dedicated users for your workloads and to manage their permissions. Your workloads themselves do not use or have access to the root account's credentials.")),(0,s.yg)("h3",{id:"tutorials"},"Tutorials"),(0,s.yg)("p",null,"To learn how to use the Intents Operator and Credentials Operator to enforce access using PostgreSQL GRANTs, or map access to your PostgreSQL database, try one of these quickstart tutorials."),(0,s.yg)(n.A,{items:p,colSize:"sm",mdxType:"DocsLinkCard"}),(0,s.yg)("h3",{id:"how-does-otterize-work-with-postgresql"},"How does Otterize work with PostgreSQL?"),(0,s.yg)("p",null,"The Otterize credentials operator will create a unique PostgreSQL username-password combination for each service's use, exposed via a Kubernetes Secret. The service will use these credentials to connect to the database. ",(0,s.yg)("inlineCode",{parentName:"p"},"ClientIntents")," will define the access required by that service. As the intents are applied, The Otterize intents operator will keep the database's list of users and GRANTs up to date so that the service is able to access it."),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"To get started, your cluster must have Otterize deployed."),(0,s.yg)("li",{parentName:"ol"},"You'll need to create a ",(0,s.yg)("inlineCode",{parentName:"li"},"PostgreSQLServerConfig")," in your cluster, providing a connection URL and admin-level credentials for Otterize to manage permissions in your database. Below is an example ",(0,s.yg)("inlineCode",{parentName:"li"},"PostgreSQLServerConfig")," resource.")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: PostgreSQLServerConfig\nmetadata:\n  name: postgres-tutorial-db # database instance name - should match the target in ClientIntents\n  namespace: otterize-tutorial-postgres\nspec:\n  address: <PGHOST:PGPORT> # Your Postgres address\n  credentials:\n    # Username Otterize will connect with & configure permissions as; optional, can be omitted if using a secretRef\n    username: <PGUSER>\n    # Password for the above username; optional, can be omitted if using a secretRef\n    password: <PGPASSWORD>\n    # Secret containing the database credentials; optional, can be omitted if using the above username & password fields\n    secretRef:\n      # Name of the secret containing the database credentials; required\n      name: postgres-credentials\n      # Namespace where the secret is stored; optional, defaults to the namespace of the PostgreSQLServerConfig\n      namespace: otterize-tutorial-postgres\n      # Key in the secret containing the username; optional, defaults to 'username'\n      usernameKey: username\n      # Key in the secret containing the password; optional, defaults to 'password'\n      passwordKey: password\n")),(0,s.yg)("ol",{start:3},(0,s.yg)("li",{parentName:"ol"},"Each service can request a username-password Secret to be created, by annotating the Pod with ",(0,s.yg)("inlineCode",{parentName:"li"},"credentials-operator.otterize.com/user-password-secret-name"),". Below is an example of that annotation and passing the generated credentials into a container with environmental variables.")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: server\n  template:\n    metadata:\n      annotations:\n        # highlight-next-line\n        credentials-operator.otterize.com/user-password-secret-name: server-creds\n      labels:\n        app: server\n    spec:\n      serviceAccountName: server\n      containers:\n        - name: server\n          imagePullPolicy: Always\n          image: 'supercool/my-example-container'\n          ports:\n            - containerPort: 80\n          env:\n            - name: DB_SERVER_USER\n              valueFrom:\n                secretKeyRef:\n                  name: server-creds\n                  key: username\n            - name: DB_SERVER_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: server-creds\n                  key: password\n")),(0,s.yg)("ol",{start:4},(0,s.yg)("li",{parentName:"ol"},"Apply ",(0,s.yg)("inlineCode",{parentName:"li"},"ClientIntents")," and the specified access will be ",(0,s.yg)("inlineCode",{parentName:"li"},"GRANT"),"ed to the service in the ",(0,s.yg)("inlineCode",{parentName:"li"},"ClientIntents"),".")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client-intents-for-server\n  namespace: otterize-tutorial-postgres\nspec:\n  service:\n    name: server\n  calls:\n    - name: postgres-tutorial-db # Same name as our PostgreSQLServerConfig metadata.name\n      type: database\n      databaseResources:\n        - databaseName: otterize-tutorial\n          table: public.example\n          operations:\n            - SELECT\n            - INSERT\n")),(0,s.yg)("ol",{start:5},(0,s.yg)("li",{parentName:"ol"},"Done!")))}g.isMDXComponent=!0}}]);