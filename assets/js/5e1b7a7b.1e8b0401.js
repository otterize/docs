"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[202],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,a(a({ref:e},c),{},{components:n})):r.createElement(g,a({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4869:(t,e,n)=>{n.r(e),n.d(e,{LinkButton:()=>c,assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2,title:"Getting started with Otterize"},a=void 0,u={unversionedId:"documentation/0-2-getting-started",id:"documentation/0-2-getting-started",title:"Getting started with Otterize",description:"Otterize OSS implements intent-based access control in a single Kubernetes cluster.",source:"@site/docs/documentation/0-2-getting-started.md",sourceDirName:"documentation",slug:"/documentation/0-2-getting-started",permalink:"/documentation/0-2-getting-started",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/documentation/0-2-getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Getting started with Otterize"},sidebar:"docSidebar",previous:{title:"Introduction to Otterize",permalink:"/"},next:{title:"Quick tutorials",permalink:"/documentation/quick-tutorials/"}},s={},l=[],c=t=>(0,o.kt)("a",(0,r.Z)({},t,{style:{backgroundColor:"green",color:"white",borderRadius:5,paddingLeft:5,paddingRight:5,paddingBottom:2,textDecoration:"none",...t.style}})),d={toc:l,LinkButton:c};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Otterize OSS implements intent-based access control in a single Kubernetes cluster."),(0,o.kt)("admonition",{title:"Coming soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Otterize Cloud adds visibility and operationalization, and supports multiple Kubernetes clusters\nas well as non-Kubernetes infrastructures. Read more in our ",(0,o.kt)("a",{parentName:"p",href:"https://otterize.com/product"},"product page"),".")),(0,o.kt)("p",null,"It's easy to get started with Otterize OSS,\nwhether you have 5 minutes to go through a quick pre-built tutorial,\nor 10 minutes to try it on your own services."),(0,o.kt)("h1",{id:"got-5-minutes"},"Got 5 minutes?"),(0,o.kt)("p",null,"All you need is a Kubernetes cluster where you have admin rights, along with the standard Kubernetes toolset:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kubectl")),(0,o.kt)("li",{parentName:"ul"},"Helm")),(0,o.kt)("p",null,"And with that -- ",(0,o.kt)(c,{href:"/documentation/quick-tutorials",mdxType:"LinkButton"},"onwards to our quick tutorials"),"!"),(0,o.kt)("h1",{id:"got-10-minutes"},"Got 10 minutes?"),(0,o.kt)("p",null,'Try it out with your own services, or use our larger reference "lab" example.\nAgain, you just need the standard tools:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kubectl")),(0,o.kt)("li",{parentName:"ul"},"Helm")),(0,o.kt)("p",null,"Then proceed to ",(0,o.kt)(c,{href:"/documentation/guides",mdxType:"LinkButton"},"the usecase that's interesting to you"),"."),(0,o.kt)("h1",{id:"then-what"},"Then what?"),(0,o.kt)("p",null,"Once you've played around with Otterize, see how easy it is to\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/3-guides/6-implementing-ibac"},(0,o.kt)("strong",{parentName:"a"},"bootstrap and gradually roll it out")),"\nto your environments and your teams. We do ",(0,o.kt)("strong",{parentName:"p"},"not")," recommend turning intent-based access control into a big, time-consuming project!"))}p.isMDXComponent=!0}}]);