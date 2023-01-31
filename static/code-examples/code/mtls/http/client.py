import requests

resp = requests.get("https://server.otterize-tutorial-mtls/hello",
                    cert=('/var/otterize/credentials/cert.pem', '/var/otterize/credentials/key.pem'),
                    verify="/var/otterize/credentials/ca.pem")