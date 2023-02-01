from flask import Flask
import ssl

app = Flask(__name__)


@app.route("/hello")
def hello():
    return "Hello World!"


if __name__ == "__main__":
    context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
    context.verify_mode = ssl.CERT_REQUIRED
    context.load_verify_locations('/var/otterize/credentials/ca.pem')
    context.load_cert_chain('/var/otterize/credentials/cert.pem', '/var/otterize/credentials/key.pem')
    app.run(port=443, ssl_context=context)
