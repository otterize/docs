"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6633],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(8168),r=(n(6540),n(5680));const l={sidebar_position:3,title:"Reference"},i=void 0,o={unversionedId:"features/aws-iam/reference",id:"features/aws-iam/reference",title:"Reference",description:"ClientIntents example (YAML)",source:"@site/docs/features/aws-iam/reference.mdx",sourceDirName:"features/aws-iam",slug:"/features/aws-iam/reference",permalink:"/features/aws-iam/reference",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/aws-iam/reference.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Reference"},sidebar:"docSidebar",previous:{title:"AWS resource mapping",permalink:"/features/aws-iam/tutorials/aws-visibility"},next:{title:"Azure IAM | Overview",permalink:"/features/azure-iam/"}},s={},c=[{value:"ClientIntents example (YAML)",id:"clientintents-example-yaml",level:3},{value:"Annotations",id:"annotations",level:3},{value:"Helm Chart options",id:"helm-chart-options",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"clientintents-example-yaml"},"ClientIntents example (YAML)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: server\nspec:\n  service:\n    # The name of the pod that will be granted access\n    name: server\n  calls:\n      # The AWS ARN or ARN wildcard that references the resource(s) for the authorization\n    - name: arn:aws:s3:::example-bucket-*/*\n      type: aws\n      # one or more AWS Actions or Action wildcards that will be provided to the specified resources\n      awsActions:\n        - "s3:PutObject"\n        - "s3:GetObject"\n    # Multiple call definitions can be defined for a single service.\n    - name: arn:aws:s3:::read-only-bucket-*/*\n      type: aws\n      awsActions:\n        - "s3:GetObject"\n')),(0,r.yg)("p",null,"Otterize supports templating AWS resource names by AWS region & account ID.\nThe templates ",(0,r.yg)("inlineCode",{parentName:"p"},"$(AWS_REGION)")," & ",(0,r.yg)("inlineCode",{parentName:"p"},"$(AWS_ACCOUNT_ID)")," in AWS resource ARNs will be automatically replaced with the EKS cluster's region & account ID:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  name: server\nspec:\n  service:\n    name: server\n  calls:\n    # $(AWS_REGION) & $(AWS_ACCOUNT_ID) will be replaced with the EKS cluster\'s region & account ID\n    - name: arn:aws:sqs:$(AWS_REGION):$(AWS_ACCOUNT_ID):queue1\n      type: aws\n      awsActions:\n        - "sqs:*"\n')),(0,r.yg)("h3",{id:"annotations"},"Annotations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/create-aws-role")),(0,r.yg)("td",{parentName:"tr",align:null},"When set to ",(0,r.yg)("strong",{parentName:"td"},"true"),", the credential operator will create an unique AWS Role for the associated pod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))))),(0,r.yg)("h3",{id:"helm-chart-options"},"Helm Chart options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.aws.enabled")),(0,r.yg)("td",{parentName:"tr",align:null},"Enable or disable AWS integration"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"global.aws.eksClusterNameOverride")),(0,r.yg)("td",{parentName:"tr",align:null},"EKS cluster name (overrides auto-detection)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"aws.roleARN")),(0,r.yg)("td",{parentName:"tr",align:null},"ARN of the AWS role the operator will use to access AWS. By defeault, Otterize will create a unique role for each service an annotate the service with the role's ARN."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(none)"))))),(0,r.yg)("p",null,"View the ",(0,r.yg)("a",{parentName:"p",href:"/reference/configuration/otterize-chart"},"Helm chart reference")," for all other options"))}m.isMDXComponent=!0}}]);