"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[760],{5680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>y});var t=a(6540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),u=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?t.createElement(y,r(r({ref:n},c),{},{components:a})):t.createElement(y,r({ref:n},c))}));function y(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6401:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=a(8168),i=(a(6540),a(5680));const o={sidebar_position:2,title:"AWS resource mapping",image:"/img/quick-tutorials/aws-iam-visibility/social.png"},r=void 0,s={unversionedId:"features/aws-iam/tutorials/aws-visibility",id:"features/aws-iam/tutorials/aws-visibility",title:"AWS resource mapping",description:"Many production Kubernetes workloads depend on cloud resources, such as S3 buckets, RDS databases, and Lambda functions. In this tutorial, you will learn how Otterize can enhance your visibility into the AWS resources that are accessed by your workloads.",source:"@site/docs/features/aws-iam/tutorials/aws-visibility.mdx",sourceDirName:"features/aws-iam/tutorials",slug:"/features/aws-iam/tutorials/aws-visibility",permalink:"/features/aws-iam/tutorials/aws-visibility",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/features/aws-iam/tutorials/aws-visibility.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"AWS resource mapping",image:"/img/quick-tutorials/aws-iam-visibility/social.png"},sidebar:"docSidebar",previous:{title:"Automate AWS IAM for EKS",permalink:"/features/aws-iam/tutorials/aws-iam-eks"},next:{title:"Reference",permalink:"/features/aws-iam/reference"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"CLI tools",id:"cli-tools",level:3},{value:"Create an EKS cluster",id:"create-an-eks-cluster",level:3},{value:"Enable AWS Visibility with eBPF",id:"enable-aws-visibility-with-ebpf",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"Deploy two Lambda functions",id:"deploy-two-lambda-functions",level:3},{value:"Deploy server with access to Lambda functions",id:"deploy-server-with-access-to-lambda-functions",level:3},{value:"Visualize Relationships",id:"visualize-relationships",level:3},{value:"What&#39;s Next",id:"whats-next",level:3},{value:"Cleanup",id:"cleanup",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...o}=e;return(0,i.yg)(p,(0,t.A)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Many production Kubernetes workloads depend on cloud resources, such as S3 buckets, RDS databases, and Lambda functions. In this tutorial, you will learn how Otterize can enhance your visibility into the AWS resources that are accessed by your workloads."),(0,i.yg)("p",null,"In this tutorial, you will:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Set up an EKS cluster."),(0,i.yg)("li",{parentName:"ul"},"Deploy two Lambda functions."),(0,i.yg)("li",{parentName:"ul"},"Deploy a ",(0,i.yg)("em",{parentName:"li"},"server")," pod that retrieves a joke (as a string) from one Lambda function, reviews it, and posts the review to another Lambda function."),(0,i.yg)("li",{parentName:"ul"},"Automatically detect and monitor the Lambda function calls using Otterize.")),(0,i.yg)("p",null,"By the end of this tutorial, you will understand how to map Kubernetes workloads and their associated AWS resources using Otterize."),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("h3",{id:"cli-tools"},"CLI tools"),(0,i.yg)("p",null,"You will need the following CLI tools to work with this environment:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"AWS CLI")," - Ensure you have credentials within the target account that grant permissions to work with EKS clusters, IAM, CloudFormation, and Lambda functions."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://eksctl.io/installation/"},"eksctl")," - This tool simplifies the creation and management of an EKS cluster.")),(0,i.yg)("h3",{id:"create-an-eks-cluster"},"Create an EKS cluster"),(0,i.yg)("p",null,"Already have EKS cluster? Skip to the ",(0,i.yg)("a",{parentName:"p",href:"#enable-aws-visibility-with-otterize-installation"},"next step"),"."),(0,i.yg)("p",null,"Start by creating an EKS cluster for deploying your pods. Use the ",(0,i.yg)("strong",{parentName:"p"},"eksctl")," tool with the following YAML configuration:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"curl ${ABSOLUTE_URL}/code-examples/aws-visibility/eks-cluster.yaml | eksctl create cluster -f -\n")),(0,i.yg)("details",null,(0,i.yg)("summary",null,"Inspect eks-cluster.yaml contents"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\n\nmetadata:\n  name: otterize-tutorial-aws-visibility\n  region: us-west-2\n\niam:\n  withOIDC: true\n\nvpc:\n  clusterEndpoints:\n    publicAccess: true\n    privateAccess: true\n\naddons:\n  - name: vpc-cni\n    version: 1.14.0\n    attachPolicyARNs:\n      - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy\n    configurationValues: |-\n      enableNetworkPolicy: "true"\n  - name: coredns\n  - name: kube-proxy\n\nmanagedNodeGroups:\n  - name: x86-al2-on-demand\n    amiFamily: AmazonLinux2\n    instanceTypes: [ "t3.large" ]\n    minSize: 0\n    desiredCapacity: 2\n    maxSize: 6\n    privateNetworking: true\n    disableIMDSv1: true\n    volumeSize: 100\n    volumeType: gp3\n    volumeEncrypted: true\n    tags:\n      team: "eks"\n'))),(0,i.yg)("p",null,"Next, update your ",(0,i.yg)("strong",{parentName:"p"},"kubeconfig")," to connect with the new cluster."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"aws eks update-kubeconfig --name otterize-tutorial-aws-visibility --region 'us-west-2'\n")),(0,i.yg)("h3",{id:"enable-aws-visibility-with-ebpf"},"Enable AWS Visibility with eBPF"),(0,i.yg)("p",null,"You will first need to install Otterize in your cluster. If your cluster is not already connected, you can do so by following the Kubernetes setup instructions detailed on the ",(0,i.yg)("a",{parentName:"p",href:"https://app.otterize.com/integrations"},"Integrations")," page."),(0,i.yg)("admonition",{title:"Important",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"When installing Otterize, append the following flag to the Helm command to enable the eBPF agent, which is responsible for inspecting SSL and non-SSL traffic and generates the visibility into AWS traffic:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"helm upgrade ... --set networkMapper.nodeagent.enable=true\n")),(0,i.yg)("h2",{id:"tutorial"},"Tutorial"),(0,i.yg)("p",null,"Now that your environment is set up, you are ready to deploy the application components, including the AWS resources that Otterize will monitor."),(0,i.yg)("h3",{id:"deploy-two-lambda-functions"},"Deploy two Lambda functions"),(0,i.yg)("p",null,"First, you will deploy two Lambda functions: ",(0,i.yg)("inlineCode",{parentName:"p"},"DadJokeLambdaFunction")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"FeedbackLambdaFunction"),". These functions will interact with your ",(0,i.yg)("em",{parentName:"p"},"server")," pod to generate a dad joke training dataset. The ",(0,i.yg)("em",{parentName:"p"},"server")," pod receives a joke from the ",(0,i.yg)("inlineCode",{parentName:"p"},"DadJokeLambdaFunction"),", reviews the joke, and sends the feedback to the ",(0,i.yg)("inlineCode",{parentName:"p"},"FeedbackLambdaFunction"),"."),(0,i.yg)("p",null,"To deploy the Lambda functions and their required roles, use the following command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"curl ${ABSOLUTE_URL}/code-examples/aws-visibility/cloudformation.yaml -o template.yaml && \\\naws cloudformation deploy --template-file template.yaml --stack-name OtterizeTutorialJokeTrainingStack --capabilities CAPABILITY_IAM --region 'us-west-2'\n")),(0,i.yg)("details",null,(0,i.yg)("summary",null,"Inspect CloudFormation YAML"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"AWSTemplateFormatVersion: '2010-09-09'\nDescription: >-\n  Stack creates two Lambda functions for dad jokes and feedback, plus the user and related policies\n\nResources:\n  DadJokeLambdaExecutionRole:\n    Type: 'AWS::IAM::Role'\n    Properties:\n      AssumeRolePolicyDocument:\n        Version: '2012-10-17'\n        Statement:\n          - Effect: Allow\n            Principal:\n              Service: lambda.amazonaws.com\n            Action: 'sts:AssumeRole'\n      Policies:\n        - PolicyName: 'DadJokeLambdaExecutionPolicy'\n          PolicyDocument:\n            Version: '2012-10-17'\n            Statement:\n              - Effect: Allow\n                Action:\n                  - 'logs:CreateLogGroup'\n                  - 'logs:CreateLogStream'\n                  - 'logs:PutLogEvents'\n                Resource: 'arn:aws:logs:*:*:*'\n              - Effect: Allow\n                Action:\n                  - 'execute-api:Invoke'\n                Resource: '*'\n\n  DadJokeLambda:\n    Type: 'AWS::Lambda::Function'\n    Properties:\n      Handler: 'index.handler'\n      Role: !GetAtt DadJokeLambdaExecutionRole.Arn\n      Runtime: 'nodejs20.x'\n      Code:\n        ZipFile: |\n          const https = require('https');\n          exports.handler = async (event) => {\n            return new Promise((resolve, reject) => {\n              const options = {\n                hostname: 'icanhazdadjoke.com',\n                method: 'GET',\n                headers: { 'Accept': 'application/json' }\n              };\n              const req = https.request(options, (res) => {\n                let data = '';\n                res.on('data', (chunk) => {\n                  data += chunk;\n                });\n                res.on('end', () => {\n                  resolve({\n                    statusCode: 200,\n                    body: data,\n                    headers: { 'Content-Type': 'application/json' },\n                  });\n                });\n              });\n              req.on('error', (e) => {\n                reject({\n                  statusCode: 500,\n                  body: 'Error fetching dad joke',\n                });\n              });\n              req.end();\n            });\n          };\n      Timeout: 10\n\n  FeedbackLambda:\n    Type: 'AWS::Lambda::Function'\n    Properties:\n      Handler: 'index.handler'\n      Role: !GetAtt DadJokeLambdaExecutionRole.Arn\n      Runtime: 'nodejs20.x'\n      Code:\n        ZipFile: |\n          exports.handler = async (event) => {\n              const payload = JSON.parse(event.body);\n\n              const joke = payload.joke;\n              const isFunny = payload.funny;\n\n              console.log(\"Joke:\", joke);\n              console.log(\"Is it funny?\", isFunny);\n\n              return {\n                  statusCode: 200,\n                  body: JSON.stringify({ message: \"Feedback received, Adding To Training Set\" }),\n              };\n          };\n      Timeout: 10\n\n  LambdaInvokeUser:\n    Type: 'AWS::IAM::User'\n\n  LambdaInvokePolicy:\n      Type: 'AWS::IAM::Policy'\n      Properties:\n        PolicyName: 'LambdaInvokePolicy'\n        Users:\n          - !Ref LambdaInvokeUser\n        PolicyDocument:\n          Version: '2012-10-17'\n          Statement:\n            - Effect: Allow\n              Action: 'lambda:InvokeFunction'\n              Resource:\n                - !GetAtt DadJokeLambda.Arn\n                - !GetAtt FeedbackLambda.Arn\n\n\n\nOutputs:\n  DadJokeLambdaFunction:\n    Description: \"Dad Joke Lambda Function ARN\"\n    Value: !GetAtt DadJokeLambda.Arn\n\n  FeedbackLambdaFunction:\n    Description: \"Feedback Lambda Function ARN\"\n    Value: !GetAtt FeedbackLambda.Arn\n\n  LambdaInvokeUserAccessKeyId:\n    Description: \"IAM User Name for accessing Joke Lambda\"\n    Value: !Ref LambdaInvokeUser\n"))),(0,i.yg)("h3",{id:"deploy-server-with-access-to-lambda-functions"},"Deploy server with access to Lambda functions"),(0,i.yg)("p",null,"With the Lambda functions deployed, you're now ready to deploy your ",(0,i.yg)("em",{parentName:"p"},"server")," pod and configure it to interact with the two Lambda functions. Follow these steps to set up your environment:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create a namespace:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace otterize-tutorial-aws-visibility\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Retrieve Lambda ARNs:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"DAD_JOKE_LAMBDA_ARN=$(aws cloudformation describe-stacks --region 'us-west-2' --stack-name OtterizeTutorialJokeTrainingStack --query \"Stacks[0].Outputs[?OutputKey=='DadJokeLambdaFunction'].OutputValue\" --output text)\nFEEDBACK_LAMBDA_ARN=$(aws cloudformation describe-stacks --region 'us-west-2' --stack-name OtterizeTutorialJokeTrainingStack --query \"Stacks[0].Outputs[?OutputKey=='FeedbackLambdaFunction'].OutputValue\" --output text)\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create a ",(0,i.yg)("inlineCode",{parentName:"li"},"ConfigMap")," for Lambda ARNs:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl create configmap lambda-arns \\\n  --from-literal=dadJokeLambdaArn=$DAD_JOKE_LAMBDA_ARN \\\n  --from-literal=feedbackLambdaArn=$FEEDBACK_LAMBDA_ARN \\\n  -n otterize-tutorial-aws-visibility\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Generate AWS credentials and create a ",(0,i.yg)("inlineCode",{parentName:"li"},"Secret"),":")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'USER_NAME=$(aws cloudformation describe-stacks --region \'us-west-2\' --stack-name OtterizeTutorialJokeTrainingStack --query "Stacks[0].Outputs[?OutputKey==\'LambdaInvokeUserAccessKeyId\'].OutputValue" --output text)\n\naws iam create-access-key --user-name "$USER_NAME" | \\\njq -r \'"--from-literal=AWS_ACCESS_KEY_ID="+.AccessKey.AccessKeyId+" --from-literal=AWS_SECRET_ACCESS_KEY="+.AccessKey.SecretAccessKey\' | \\\nxargs kubectl create secret generic aws-credentials -n otterize-tutorial-aws-visibility\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Deploy the ",(0,i.yg)("em",{parentName:"li"},"server")," pod:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n otterize-tutorial-aws-visibility -f ${ABSOLUTE_URL}/code-examples/aws-visibility/all.yaml\n")),(0,i.yg)("details",null,(0,i.yg)("summary",null,"Inspect deployment YAML"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: joketrainer\n  namespace: otterize-tutorial-aws-visibility\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: joketrainer\n  template:\n    metadata:\n      labels:\n        app: joketrainer\n        network-mapper.otterize.com/aws-visibility: "true"\n    spec:\n      containers:\n        - name: joketrainer\n          image: otterize/aws-visibility-tutorial:latest\n          env:\n            - name: AWS_ACCESS_KEY_ID\n              valueFrom:\n                secretKeyRef:\n                  name: aws-credentials\n                  key: AWS_ACCESS_KEY_ID\n            - name: AWS_SECRET_ACCESS_KEY\n              valueFrom:\n                secretKeyRef:\n                  name: aws-credentials\n                  key: AWS_SECRET_ACCESS_KEY\n            - name: DAD_JOKE_LAMBDA_ARN\n              valueFrom:\n                configMapKeyRef:\n                  name: lambda-arns\n                  key: dadJokeLambdaArn\n            - name: FEEDBACK_LAMBDA_ARN\n              valueFrom:\n                configMapKeyRef:\n                  name: lambda-arns\n                  key: feedbackLambdaArn\n\n'))),(0,i.yg)("p",null,"In the Kubernetes ",(0,i.yg)("inlineCode",{parentName:"p"},"Deployment")," manifest, you will notice the following label in the pod template: ",(0,i.yg)("inlineCode",{parentName:"p"},"network-mapper.otterize.com/aws-visibility"),". This label instructs the network mapper to track AWS API calls for this pod, helping identify the resources and actions being utilized."),(0,i.yg)("p",null,"Once the pod is deployed, you can verify the logs to confirm it is successfully calling the Lambda functions:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f -n otterize-tutorial-aws-visibility deploy/joketrainer\n")),(0,i.yg)("p",null,"Example output:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Joke: People saying 'boo! to their friends has risen by 85% in the last year.... That's a frightening statistic.\nSending Feedback of Funny?: Yes\nJoke: Have you ever heard of a music group called Cellophane? They mostly wrap.\nSending Feedback of Funny?: Yes\nJoke: What did Yoda say when he saw himself in 4K? \"HDMI\"\nSending Feedback of Funny?: No\n\n")),(0,i.yg)("h3",{id:"visualize-relationships"},"Visualize Relationships"),(0,i.yg)("p",null,"With Otterize monitoring the AWS API calls, access Otterize Cloud to observe both Lambdas in action. The ",(0,i.yg)("a",{parentName:"p",href:"https://app.otterize.com/access-graph"},"Access graph")," will display two AWS resources associated with the ",(0,i.yg)("em",{parentName:"p"},"joketrainer")," pod: ",(0,i.yg)("em",{parentName:"p"},"DadJokeLambdaFunction")," and ",(0,i.yg)("em",{parentName:"p"},"FeedbackLambdaFunction"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Otterize Cloud AWS Visibility Example",src:a(6792).A,width:"1494",height:"978"})),(0,i.yg)("h3",{id:"whats-next"},"What's Next"),(0,i.yg)("p",null,"Now that you have learned how to enable visibility for AWS resources in your Kubernetes cluster, you are ready to explore how to manage access to these resources. Continue your learning journey with the next tutorial: ",(0,i.yg)("a",{parentName:"p",href:"/features/aws-iam/tutorials/aws-iam-eks"},"Automate AWS IAM for EKS"),"."),(0,i.yg)("h2",{id:"cleanup"},"Cleanup"),(0,i.yg)("p",null,"To remove the deployed example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace otterize-tutorial-aws-visibility\n")),(0,i.yg)("p",null,"To remove the Lambda functions:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"aws cloudformation delete-stack --stack-name OtterizeTutorialJokeTrainingStack --region 'us-west-2'\n")),(0,i.yg)("p",null,"To remove the EKS cluster:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"eksctl delete cluster --name otterize-tutorial-aws-visibility --region us-west-2\n")))}d.isMDXComponent=!0},6792:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/aws-iam-visibility-1aca009207662a89f7abce3057158174.png"}}]);