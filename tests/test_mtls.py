import base64
import re
import time

from tests.utils import create_namespace, delete_namespace, get_log_line, run, helm_install


class TestMTLS:
    namespace = 'otterize-tutorial-mtls'

    def test_mtls_setup(self):
        delete_namespace(self.namespace)
        create_namespace(self.namespace)

    def test_mtls_1_deploy(self):
        # Deploy tutorial
        run('kubectl apply -f ../static/code-examples/mtls')

    def test_mtls_2_pod_startup(self):
        # Wait for pod startup
        for _ in range(3):
            res = run(f'kubectl get pods -n {self.namespace}')
            states = dict(re.findall('(\w+).*?\d+/\d+ *(\w+)', res))
            if states['client'] == 'Running' and states['server'] == 'Running':
                break
        else:
            assert False, str(states)

    def test_mtls_3_logs(self):
        # Check client logs
        expected = "mTLS hello world\nfrom: server.otterize-tutorial-mtls\nto client: client.otterize-tutorial-mtls\n"
        assert expected == get_log_line(self.namespace, "client", count=3)

        # Check server logs
        assert "client.otterize-tutorial-mtls:\tGET /hello\n" == get_log_line(self.namespace, "server")

    def test_mtls_4_certificate(self):
        # Check SVIDs match
        secret_svid = base64.b64decode(run(
            f"kubectl get secret -n {self.namespace}" + " client-credentials-secret -o jsonpath='{.data.svid\.pem}'")).decode()
        mounted_svid = run(
            f"kubectl exec -n {self.namespace} -it deploy/client -- cat /var/otterize/credentials/cert.pem")
        assert secret_svid == mounted_svid

        # Check certificate cname
        cname = re.findall("Subject: C = US, O = SPIRE, CN = (.*)?\\b",
                           run("openssl x509 -in - -text", input=secret_svid.encode()))[0]
        assert cname == f"client.{self.namespace}"

    def test_mtls_teardown(self):
        delete_namespace(self.namespace)
