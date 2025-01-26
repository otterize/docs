"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9581],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9365:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(6540),n=r(53);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,o),hidden:r},t)}},1470:(e,t,r)=>{r.d(t,{A:()=>A});var a=r(8168),n=r(6540),i=r(53),o=r(3104),l=r(6347),s=r(7485),c=r(1682),u=r(9466);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function w(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=m(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=f({queryString:r,groupId:a}),[d,w]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),g=(()=>{const e=s??d;return p({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),w(e)}),[c,w,i]),tabValues:i}}var g=r(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),m=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==l&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},o,{className:(0,i.A)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":l===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=w(e);return n.createElement("div",{className:(0,i.A)("tabs-container",h.tabList)},n.createElement(y,(0,a.A)({},e,t)),n.createElement(b,(0,a.A)({},e,t)))}function A(e){const t=(0,g.A)();return n.createElement(v,(0,a.A)({key:String(t)},e))}},6411:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(6540);function n(e){let{items:t,colSize:r}=e,n="lg:tw-grid-cols-2 tw-gap-4 xs:tw-grid-cols-1 ";return"lg"===r?n="lg:tw-grid-cols-4 tw-gap-2 xs:tw-grid-cols-2":"md"===r&&(n="lg:tw-grid-cols-3 tw-gap-2 xs:tw-grid-cols-1 md:tw-grid-cols-2"),a.createElement("div",{className:`tw-grid ${n}`},t.map((e=>a.createElement("div",{key:e.title,className:"tw-relative tw-flex tw-items-center tw-space-x-3 tw-rounded-lg tw-border tw-border-solid tw-border-primary-500 tw-bg-white tw-px-6 tw-py-5 tw-shadow-sm focus-within:tw-ring-2 focus-within:tw-ring-indigo-500 focus-within:tw-ring-offset-2 hover:tw-border-primary-600 hover:tw-shadow-md"},e.icon&&a.createElement("div",{className:"tw-flex-shrink-0"},a.createElement("img",{width:"40px",className:"tw-max-h-10 tw-max-w-10",src:e.icon,alt:""})),a.createElement("div",{className:"tw-min-w-0 tw-flex-1"},a.createElement("a",{href:e.url,className:"focus:tw-outline-none hover:tw-no-underline"},a.createElement("span",{className:"tw-absolute tw-inset-0","aria-hidden":"true"}),a.createElement("div",{className:"tw-text-md tw-font-medium tw-text-gray-900 tw-break-keep"},e.title),e.description&&a.createElement("div",{className:"tw-text-sm tw-text-gray-500"},e.description)))))))}},9129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u,tutorials:()=>d});var a=r(8168),n=(r(6540),r(5680)),i=r(6411);r(1470),r(9365);const o={sidebar_position:1,title:"AWS IAM | Overview",hide_table_of_contents:!0,hide_title:!0},l=void 0,s={unversionedId:"features/aws-iam/index",id:"features/aws-iam/index",title:"AWS IAM | Overview",description:"Otterize can create just-in-time AWS IAM roles and policies for your workloads running on EKS Kubernetes clusters, greatly simplifying the lifecycle of managing IAM roles and policies.",source:"@site/docs/features/aws-iam/index.mdx",sourceDirName:"features/aws-iam",slug:"/features/aws-iam/",permalink:"/features/aws-iam/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/aws-iam/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"AWS IAM | Overview",hide_table_of_contents:!0,hide_title:!0},sidebar:"docSidebar",previous:{title:"Network Policies Deep Dive",permalink:"/features/network-mapping-network-policies/reference/Network-Policies-Deep-Dive"},next:{title:"Automate AWS IAM for EKS",permalink:"/features/aws-iam/tutorials/aws-iam-eks"}},c={},u=[{value:"Tutorials",id:"tutorials",level:3},{value:"How does Otterize work with AWS IAM?",id:"how-does-otterize-work-with-aws-iam",level:3},{value:"Automatically generating ClientIntents for AWS IAM",id:"automatically-generating-clientintents-for-aws-iam",level:3}],d=[{title:"\ud83e\uddea Self-paced labs: Discover Otterize capabilities for AWS IAM",description:"Preconfigured labs to learn how Otterize simplifies AWS IAM management",url:"https://otterize.instruqt.com/pages/docs-aws-iam"},{title:"Automate AWS IAM for EKS",description:"Create just-in-time AWS IAM roles and policies that are kept in sync with your workloads",url:"/features/aws-iam/tutorials/aws-iam-eks"},{title:"AWS resource mapping",description:"Visualize your EKS cluster dependencies on AWS resources",url:"/features/aws-iam/tutorials/aws-visibility"}],m={toc:u,tutorials:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"aws-iam"},"AWS IAM"),(0,n.yg)("p",null,"Otterize can create just-in-time AWS IAM roles and policies for your workloads running on EKS Kubernetes clusters, greatly simplifying the lifecycle of managing IAM roles and policies."),(0,n.yg)("h3",{id:"tutorials"},"Tutorials"),(0,n.yg)("p",null,"To learn how to use the Intents Operator and Credentials Operator to manage just-in-time AWS IAM access, check out the tutorial."),(0,n.yg)(i.A,{items:d,colSize:"sm",mdxType:"DocsLinkCard"}),(0,n.yg)("h3",{id:"how-does-otterize-work-with-aws-iam"},"How does Otterize work with AWS IAM?"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"First, the EKS cluster must have ",(0,n.yg)("a",{parentName:"li",href:"/overview/installation"},"Otterize installed"),"."),(0,n.yg)("li",{parentName:"ol"},"To have a role created for a pod, label the pod with ",(0,n.yg)("inlineCode",{parentName:"li"},'credentials-operator.otterize.com/create-aws-role: "true"')),(0,n.yg)("li",{parentName:"ol"},"The credentials operator will create a role and an ",(0,n.yg)("inlineCode",{parentName:"li"},"AssumeRolePolicy")," (trust relationship) bound to the pod's ServiceAccount. The ServiceAccount will be annotated automatically."),(0,n.yg)("li",{parentName:"ol"},"At this point, the pod is able to assume the role, but role does not have the ability to perform any actions. We will need to create a ClientIntents YAML for the access the workload requires and apply it to our cluster. Below is an example of a ClientIntents file for accessing an S3 bucket. View the ",(0,n.yg)("a",{parentName:"li",href:"/features/aws-iam/reference"},"reference")," to learn more about the AWS IAM ClientIntents syntax."),(0,n.yg)("li",{parentName:"ol"},"Once the intent is applied, the intents operator will create a new policy, which will be attached to the workload\u2019s role with the appropriate access."),(0,n.yg)("li",{parentName:"ol"},"Done!")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.otterize.com/v2beta1\nkind: ClientIntents\nmetadata:\n  name: server\nspec:\n  workload:\n    name: server\n    kind: Deployment\n  targets:\n    - aws:\n        arn: arn:aws:s3:::example-bucket-*/*\n        actions:\n          - "s3:PutObject"\n          - "s3:GetObject"\n')),(0,n.yg)("h3",{id:"automatically-generating-clientintents-for-aws-iam"},"Automatically generating ClientIntents for AWS IAM"),(0,n.yg)("p",null,"Figuring out which access you need for AWS can be a painful, trial and error process, and something you ",(0,n.yg)("em",{parentName:"p"},"must")," do if you're tightening production access."),(0,n.yg)("p",null,"Otterize is getting ready to release support for using existing traffic to generate least-privilege IAM policies. Keen to try this out as part of early access? Sign up to the ",(0,n.yg)("a",{parentName:"p",href:"https://otterize.com/EarlyAccessBetaProgram"},"Early Access Beta Program")," and we'll be in touch!"))}f.isMDXComponent=!0}}]);