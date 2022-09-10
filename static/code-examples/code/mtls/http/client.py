import requests

resp = requests.get("https://server.otterize-tutorial-mtls/hello",
                    cert=('/var/otterize/credentials/svid.pem', '/var/otterize/credentials/key.pem'),
                    verify="/var/otterize/credentials/bundle.pem")