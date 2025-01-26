"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8088],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>w});var i=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,w=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?i.createElement(w,a(a({ref:t},d),{},{components:r})):i.createElement(w,a({ref:t},d))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6411:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(6540);function n(e){let{items:t,colSize:r}=e,n="lg:tw-grid-cols-2 tw-gap-4 xs:tw-grid-cols-1 ";return"lg"===r?n="lg:tw-grid-cols-4 tw-gap-2 xs:tw-grid-cols-2":"md"===r&&(n="lg:tw-grid-cols-3 tw-gap-2 xs:tw-grid-cols-1 md:tw-grid-cols-2"),i.createElement("div",{className:`tw-grid ${n}`},t.map((e=>i.createElement("div",{key:e.title,className:"tw-relative tw-flex tw-items-center tw-space-x-3 tw-rounded-lg tw-border tw-border-solid tw-border-primary-500 tw-bg-white tw-px-6 tw-py-5 tw-shadow-sm focus-within:tw-ring-2 focus-within:tw-ring-indigo-500 focus-within:tw-ring-offset-2 hover:tw-border-primary-600 hover:tw-shadow-md"},e.icon&&i.createElement("div",{className:"tw-flex-shrink-0"},i.createElement("img",{width:"40px",className:"tw-max-h-10 tw-max-w-10",src:e.icon,alt:""})),i.createElement("div",{className:"tw-min-w-0 tw-flex-1"},i.createElement("a",{href:e.url,className:"focus:tw-outline-none hover:tw-no-underline"},i.createElement("span",{className:"tw-absolute tw-inset-0","aria-hidden":"true"}),i.createElement("div",{className:"tw-text-md tw-font-medium tw-text-gray-900 tw-break-keep"},e.title),e.description&&i.createElement("div",{className:"tw-text-sm tw-text-gray-500"},e.description)))))))}},4409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>w,frontMatter:()=>a,metadata:()=>s,toc:()=>d,tutorials:()=>u});var i=r(8168),n=(r(6540),r(5680)),o=r(6411);const a={sidebar_position:1,title:"Linkerd | Overview",hide_title:!0},l=void 0,s={unversionedId:"features/linkerd/index",id:"features/linkerd/index",title:"Linkerd | Overview",description:"Otterize can enforce access between services using Linkerd Authorization Policies.",source:"@site/docs/features/linkerd/index.mdx",sourceDirName:"features/linkerd",slug:"/features/linkerd/",permalink:"/features/linkerd/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/linkerd/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Linkerd | Overview",hide_title:!0},sidebar:"docSidebar",previous:{title:"Reference",permalink:"/features/gitlab/reference"},next:{title:"Linkerd AuthorizationPolicy automation",permalink:"/features/linkerd/tutorials/linkerd-authorization-policies"}},c={},d=[{value:"Tutorials",id:"tutorials",level:3},{value:"How does Otterize work with Linkerd?",id:"how-does-otterize-work-with-linkerd",level:3}],u=[{title:"Linkerd AuthorizationPolicy automation",description:"Generate AuthorizationPolicy docs from existing connections",url:"/features/linkerd/tutorials/linkerd-authorization-policies"}],p={toc:d,tutorials:u},m="wrapper";function w(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,i.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"linkerd"},"Linkerd"),(0,n.yg)("p",null,"Otterize can enforce access between services using Linkerd Authorization Policies."),(0,n.yg)("h3",{id:"tutorials"},"Tutorials"),(0,n.yg)("p",null,"To learn how to use the Intents Operator to enforce access using Linkerd authorization policies. Try the quickstart tutorial below."),(0,n.yg)(o.A,{items:u,colSize:"sm",mdxType:"DocsLinkCard"}),(0,n.yg)("h3",{id:"how-does-otterize-work-with-linkerd"},"How does Otterize work with Linkerd?"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"First, the cluster must have ",(0,n.yg)("a",{parentName:"li",href:"/overview/installation"},"Otterize installed"),"."),(0,n.yg)("li",{parentName:"ol"},"To have Otterize generate Linkerd authorization policies, declare and apply (",(0,n.yg)("a",{parentName:"li",href:"/overview/intent-based-access-control"},"IBAC"),") ClientIntents for your services.\nOnce you do so, Otterize will generate a Linkerd authorization policy allowing access from the client service, identified by its service account, to the server, identified by a Linkerd Server resource.\nThe HTTP Resources section in the ClientIntents is optional: if you do not specify it, all pod-to-pod access is allowed.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"\napiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: client\n  namespace: otterize-tutorial-linkerd\nspec:\n  service:\n    name: client\n  calls:\n    - name: server-abc\n      type: http\n      HTTPResources:\n        - path: /client-path\n          methods: [ GET ]\n\n")))}w.isMDXComponent=!0}}]);