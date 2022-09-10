---
id: service-identities-and-credentials
title: Service identities and credentials
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Credential SDK integration

## mTLS credentials

To mount mTLS credentials please follow the [tutorial](/documentation/quick-tutorials/mtls).

## HTTP
### Client

<Tabs>
<TabItem value="js" label="JS" default>

```js
{@include: ../../../static/code-examples/code/mtls/http/client.js}
```
</TabItem>
<TabItem value="go" label="GO">

```go
{@include: ../../../static/code-examples/code/mtls/http/client.go}
```
</TabItem>
<TabItem value="python" label="Python">

```python
{@include: ../../../static/code-examples/code/mtls/http/client.py}
```
</TabItem>
<TabItem value="curl" label="cURL">

```shell
{@include: ../../../static/code-examples/code/mtls/http/client.sh}
```
</TabItem>
</Tabs>

### Server

<Tabs>
<TabItem value="js" label="JS" default>

```js
{@include: ../../../static/code-examples/code/mtls/http/server.js}
```
</TabItem>
<TabItem value="go" label="GO">

```go
{@include: ../../../static/code-examples/code/mtls/http/server.go}
```
</TabItem>
<TabItem value="python" label="Python">

:::note
This config only supports server TLS and not mTLS.
:::

```python
{@include: ../../../static/code-examples/code/mtls/http/server.py}
```
</TabItem>
</Tabs>

## Kafka
<Tabs>
<TabItem value="js" label="JS" default>

```python
{@include: ../../../static/code-examples/code/mtls/kafka/client.py}
```
</TabItem>
</Tabs>