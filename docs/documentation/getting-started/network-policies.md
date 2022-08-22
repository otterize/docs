---
sidebar_position: 3
---


# Getting started with Network Policies

Get started with Otterize.

```mdx-code-block
import TOCInline from '@theme/TOCInline'

<TOCInline toc={toc} />
```

## Install Otterize
```shell
helm repo add
helm install
```

## Pick a scope
1. Pick one or more client services and a server service 
 
    :::caution
    You’ll end up with **every** undeclared client being **blocked** from accessing this server service
    :::
    
    Create the client intents file(s) (vanilla or CRD)

2. Bootstrapped intents from existing traffic
    - Sniff & iterate & generate intents (see [Kicking the tires](/documentation/getting-started/kicking-the-tires))
    - Configure global network policies as needed, e.g. to allow ingress

## Apply intents

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="otterize" label="Otterize" default>

```shell
otterize apply intents
```

</TabItem>
  <TabItem value="kubectl" label="Kubectl">

```shell
kubectl apply -f intents.yaml
```

</TabItem>
</Tabs>

## Inspect generated Network Policies
Look at the generated network policies that have been applied
```shell
kubectl get networkpolicies -n lab
```
```shell
NAMESPACE   NAME                            POD-SELECTOR                                AGE
lab         access-to-zookeeper-from-kafka  otterize/server=zookeeper-lab-c7544928bffa  116m
lab         access-to-kafka-from-client     otterize/server=kafka-lab-05a2278fbe7a      4m17s
```
Look at the generated pod labels
```shell
kubectl get pod -n lab client-66b6c48dd5-s8xs9 --show-labels
```
```shell
NAME                      READY   STATUS    RESTARTS    AGE     LABELS
client-66b6c48dd5-s8xs9    1/1     Running   0           7d1h    app=client,otterize/server=client-lab-05a2278fbe7a
```

## Test what’s protected now relative to scope:
:::caution
To expand
:::
1. Client-server scope:
    - If there were other clients to this server, see they’re now failing
2. Bootstrapped scope:
    - See if something that was not captured in the traffic is now failing
3. All scopes:
    - Omit a client intents file, apply intents again, and see the client is failing
    - Change a service to make an undeclared call and redeploy, see it fails
    - Create a test service making an undeclared call, deploy, see it fails



