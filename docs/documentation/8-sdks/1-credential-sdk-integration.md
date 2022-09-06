---
sidebar_position: 1
---

# Credential SDK integration

## mTLS credentials

To mount mTLS credentials please follow the [tutorial](/documentation/getting-started/tutorials/mtls).

### HTTP Client

### Sample deployment

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="python" label="Python" default>

```python
resp = requests.get("https://server.otterize-tutorial-mtls/hello",
                    cert=('/var/otterize/credentials/svid.pem', '/var/otterize/credentials/key.pem'),
                    verify="/var/otterize/credentials/bundle.pem")
```

</TabItem>
<TabItem value="curl" label="cURL" default>

```shell
curl  --cert /var/otterize/credentials/svid.pem \
      --key /var/otterize/credentials/key.pem \
      --cacert /var/otterize/credentials/bundle.pem https://server.otterize-tutorial-mtls/hello
```

</TabItem>
<TabItem value="js" label="JS" default>

```js
const fs = require('fs');
const https = require('https');

const options = {
    hostname: 'server.otterize-tutorial-mtls/hello',
    port: 443,
    path: '/hello',
    method: 'GET',
    cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),
    key: fs.readFileSync('/var/otterize/credentials/svid.key'),
    ca: fs.readFileSync('/var/otterize/credentials/bundle.pem')
}

const req = https.request(
    options,
    res => {
        res.on('data', function (data) {
            console.log(data)
        });
    }
);

req.end();
```

</TabItem>
</Tabs>