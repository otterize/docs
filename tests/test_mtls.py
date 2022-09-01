import base64
import re

from tests.utils import create_namespace, delete_namespace, get_log_line, run


class TestMTLS:
    namespace = 'otterize-tutorial-mtls'

    def test_mtls_setup(self):
        delete_namespace(self.namespace)
        create_namespace(self.namespace)

    def test_mtls_1_deploy(self):
        # Deploy tutorial
        run('kubectl apply -f ../code-examples/getting-started/mtls')

    def test_mtls_2_pod_startup(self):
        # Wait for pod startup
        for _ in range(3):
            res = run(f'kubectl get pods -n {self.namespace}').decode()
            states = dict(re.findall('(\w+).*?\d+/\d+ *(\w+)', res))
            if states['client'] == 'Running' and states['server'] == 'Running':
                break
        else:
            assert False, str(states)

    def test_mtls_3_logs(self):
        # Check client logs
        assert "Hello world mTLS\n" == get_log_line(self.namespace, "client")

        # Check server logs
        assert "GET /hello\n" == get_log_line(self.namespace, "server")

    def test_mtls_4_certificate(self):
        # Check SVIDs match
        secret_svid = base64.b64decode(run(
            f"kubectl get secret -n {self.namespace}" + " client-credentials-secret -o jsonpath='{.data.svid\.pem}'").decode()).decode()
        mounted_svid = run(
            f"kubectl exec -n {self.namespace} -it deploy/client -- cat /var/otterize/credentials/svid.pem").decode()
        assert secret_svid == mounted_svid

        # Check certificate cname
        cname = re.findall("Subject: C = US, O = SPIRE, CN = (.*)?\\b",
                           run("openssl x509 -in - -text", input=secret_svid.encode()).decode())[0]
        assert cname == f"client.{self.namespace}"

    def test_mtls_teardown(self):
        delete_namespace(self.namespace)
