---
sidebar_position: 2
title: Mapping pod-to-pod calls in Kubernetes
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How to collect call traffic
Otterize can help you collect pod-to-pod traffic within your cluster. You will need to install Otterize and the Otterize CLI by following
the [installation](/documentation/guides/installation) guide.

## Retrieving the network map (list, YAML intents, and JSON)

{@include: ../_common/network-mapper/intents-list-export.md}

## What calls are picked up

Otterize identifies pod-to-pod traffic by tracking active TCP connections and DNS responses.

:::danger
This segment isn't that differentiated from the "How it works behind the scenes"
:::

## Network mapping for bootstrapping access controls
:::danger
TODO
:::

## Sniff&Diff for discovery and evolving access controls *(incl. shadow mode)*
:::danger
TODO
:::

## How it works behind the scenes

Otterize maps cluster traffic by employing lightweight connection tracking mechanisms. Connections from
each mechanism are mapped and resolved to pod-level identities.

### Capturing DNS responses

:::note
Relevant for clusters using DNS for service discovery.
:::

DNS is a common network protocol used for service discovery. When a `pod` [checkout-service] queries for a `service`
[order-service] within K8s multiple queries are generated for multiple DNS suffixes such as: [order-service.prod] and
[order-service.prod.svc.cluster.local]. To learn more about how K8s works with DNS for service discovery
read [here](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/).

By tracking only DNS responses Otterize lowers computational requirements as it only processes packets with relevant
data -- DNS answers (e.g. [order-service] is located at address [X.X.X.X]).

:::tip
Checkout this blog by Evyatar Meged about how we implemented this feature.
:::

### Tracking active connections

Otterize also tracks pod-to-pod connections by listing active TCP sessions between K8s nodes. Sessions are resolved back
to pod-level identities.

## Current limitations

* UDP sessions between pods aren't resolved using the "Tracking active connections" method.
