"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1386],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(8168),a=(r(6540),r(5680));const o={sidebar_position:3,title:"Reference"},i=void 0,l={unversionedId:"features/azure-iam/reference",id:"features/azure-iam/reference",title:"Reference",description:"ClientIntents example (YAML)",source:"@site/docs/features/azure-iam/reference.mdx",sourceDirName:"features/azure-iam",slug:"/features/azure-iam/reference",permalink:"/features/azure-iam/reference",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/azure-iam/reference.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Reference"},sidebar:"docSidebar",previous:{title:"Automate Azure IAM for AKS",permalink:"/features/azure-iam/tutorials/azure-iam-aks"},next:{title:"GCP IAM | Overview",permalink:"/features/gcp-iam/"}},s={},u=[{value:"ClientIntents example (YAML)",id:"clientintents-example-yaml",level:3},{value:"Annotations",id:"annotations",level:3},{value:"Helm Chart options",id:"helm-chart-options",level:3},{value:"Azure locks support",id:"azure-locks-support",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"clientintents-example-yaml"},"ClientIntents example (YAML)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.otterize.com/v1alpha3\nkind: ClientIntents\nmetadata:\n  # The name of the pod that will be granted access\n  name: client\nspec:\n  service:\n    name: client\n  calls:\n    # The Azure resource ID that references the resource(s) for the authorization. Subscription & resource group are automatically appended.\n    - name: "/providers/Microsoft.Storage/storageAccounts/otterizeazureiamtutorial/blobServices/default/containers/otterizeazureiamtutorialcontainer1"\n      type: azure\n      # one or more Azure roles that will be provided to the specified resources\n      azureRoles:\n        - "Storage Blob Data Contributor"\n    - name: "/providers/Microsoft.Storage/storageAccounts/otterizeazureiamtutorial/blobServices/default/containers/otterizeazureiamtutorialcontainer2"\n      # one or more Azure actions that can be performed on the specified resources (cannot be used with azureRoles)\n      azureActions:\n        - "Microsoft.Storage/storageAccounts/blobServices/containers/read"\n      # one or more Azure data actions that can be performed on the specified resources (cannot be used with azureRoles)\n      azureDataActions:\n        - "Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read"\n    - name: "/providers/Microsoft.KeyVault/vaults/otterizetutorialazureiamkeyvault"\n      type: azure\n      # Optional - Grant Azure Key Vault data plane access by using Key Vault access policy\n      azureKeyVaultPolicy:\n        certificatePermissions:\n          - "all"\n        keyPermissions:\n          - "all"\n        secretPermissions:\n          - "all"\n        storagePermissions:\n          - "get"\n          - "list"\n')),(0,a.yg)("h3",{id:"annotations"},"Annotations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Key"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"credentials-operator.otterize.com/create-azure-workload-identity")),(0,a.yg)("td",{parentName:"tr",align:null},"When set to ",(0,a.yg)("strong",{parentName:"td"},"true"),", the credential operator will create an Azure workload identity the associated pod"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"false"))))),(0,a.yg)("h3",{id:"helm-chart-options"},"Helm Chart options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Key"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"global.azure.enabled")),(0,a.yg)("td",{parentName:"tr",align:null},"Enable or disable Azure integration"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"false"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"azure.userAssignedIdentityID")),(0,a.yg)("td",{parentName:"tr",align:null},"ID of the user assigned identity used by the operator to access Azure."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"azure.subscriptionID")),(0,a.yg)("td",{parentName:"tr",align:null},"ID of the Azure subscription in which the AKS cluster is deployed."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"azure.resoureceGroup")),(0,a.yg)("td",{parentName:"tr",align:null},"Name of the Azure resource group in which the AKS cluster is deployed."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"(none)"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"azure.aksClusterName")),(0,a.yg)("td",{parentName:"tr",align:null},"Name of the AKS cluster in which the operator is deployed."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"(none)"))))),(0,a.yg)("p",null,"View the ",(0,a.yg)("a",{parentName:"p",href:"/reference/otterize-chart"},"Helm chart reference")," for all other options"),(0,a.yg)("h3",{id:"azure-locks-support"},"Azure locks support"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources?tabs=json"},"Azure locks")," are not supported in the current version of Otterize. The Otterize operators will attempt to create, update and delete Azure managed identities, and Azure locks will prevent it. Please ensure you don't have Azure locks.\nContact us through the ",(0,a.yg)("a",{parentName:"p",href:"https://joinslack.otterize.com/"},"Otterize Community Slack")," for more details.")))}d.isMDXComponent=!0}}]);