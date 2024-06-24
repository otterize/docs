"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[765],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const s={sidebar_position:3,title:"Reference"},i=void 0,o={unversionedId:"features/mysql/reference",id:"features/mysql/reference",title:"Reference",description:"MySQLServerConfig example (YAML)",source:"@site/docs/features/mysql/reference.mdx",sourceDirName:"features/mysql",slug:"/features/mysql/reference",permalink:"/features/mysql/reference",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/mysql/reference.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Reference"},sidebar:"docSidebar",previous:{title:"Just-in-time MySQL access",permalink:"/features/mysql/tutorials/mysql"},next:{title:"PostgreSQL | Overview",permalink:"/features/postgresql/"}},l={},c=[{value:"MySQLServerConfig example (YAML)",id:"mysqlserverconfig-example-yaml",level:3},{value:"ClientIntents example (YAML)",id:"clientintents-example-yaml",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"mysqlserverconfig-example-yaml"},"MySQLServerConfig example (YAML)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: MySQLServerConfig\nmetadata:\n  name: mysql-tutorial-db # database instance name - should match the target in ClientIntents\n  namespace: otterize-tutorial-mysql\nspec:\n  address: <HOST:PORT> # Your MySQL servers address\n  credentials:\n    # Username Otterize will connect with & configure permissions as; optional, can be omitted if using a secretRef\n    username: <USER>\n    # Password for the above username; optional, can be omitted if using a secretRef\n    password: <PASSWORD>\n    # Secret containing the database credentials; optional, can be omitted if using the above username & password fields\n    secretRef:\n      # Name of the secret containing the database credentials; required\n      name: mysql-credentials\n      # Namespace where the secret is stored; optional, defaults to the namespace of the MySQLServerConfig\n      namespace: otterize-tutorial-mysql\n      # Key in the secret containing the username; optional, defaults to 'username'\n      usernameKey: username\n      # Key in the secret containing the password; optional, defaults to 'password'\n      passwordKey: password\n")),(0,a.yg)("h3",{id:"clientintents-example-yaml"},"ClientIntents example (YAML)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client-intents-for-server\n  namespace: otterize-tutorial-mysql\nspec:\n  service:\n    # Service requiring access to MySQL\n    name: server\n  calls:\n      # This name will need to match the MySQLServerConfig metadata.name field\n    - name: otterize-tutorial-mysql\n      type: database\n      databaseResources:\n        - databaseName: otterize_tutorial\n          # Optional table name, if omitted all tables will be granted access\n          table: example\n          # Operations being granted, options include SELECT, INSERT, UPDATE, DELETE, ALL\n          operations:\n            - SELECT\n            - INSERT\n")))}u.isMDXComponent=!0}}]);