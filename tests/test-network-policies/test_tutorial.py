import re

from tests.utils import delete_namespace, create_namespace, run, get_log_line


class TestNetworkPolicies:
    namespace = 'otterize-tutorial-npol'

    def test_npol_setup(self):
        delete_namespace(self.namespace)
        create_namespace(self.namespace)

    def test_npol_1_deploy(self):
        # Deploy tutorial
        run('kubectl apply -f ../../static/code-examples/network-policies')

    def test_npol_2_pod_startup(self):
        # Wait for pod startup
        for _ in range(3):
            res = run(f'kubectl get pods -n {self.namespace}')
            states = dict(re.findall('(\w+).*?\d+/\d+ *(\w+)', res))
            if states['client'] == 'Running' and states['server'] == 'Running':
                break
        else:
            assert False, str(states)

    def test_npol_3_logs_without_intents(self):
        # Check client logs
        assert get_log_line(self.namespace, "client") in ['curl timed out\n', 'Terminated\n']

        # Check server logs
        assert get_log_line(self.namespace, "server").endswith('Server is listening on :80\n')

    def test_npol_4_apply_intents(self):
        run(
            f"kubectl apply -f ../../static/code-examples/automate-network-policies/intents/intents.yaml")
        # Check that a Network Policy was generated
        assert f'name: access-to-server-from-{self.namespace}' in run(
            f"kubectl get netpol -n otterize-tutorial-npol --output yaml")

    def test_npol_5_logs_with_intents(self):
        # Check client logs
        assert "hello world\n" == get_log_line(self.namespace, "client")

        # Check server logs
        assert '"GET / HTTP/1.1" 200' in get_log_line(self.namespace, "server")

    def test_npol_teardown(self):
        delete_namespace(self.namespace)
