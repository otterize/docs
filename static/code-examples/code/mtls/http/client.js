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