import re

from tests.k8s import Deployment, HttpServer, DefaultDenyNetworkPolicy, Intents, check_connection
from tests.utils import create_namespace, delete_namespace, get_log_line, run, helm_install


class TestHelmEnsure:
    namespace = 'otterize'

    def test_helm_setup(self):
        create_namespace(self.namespace)
        helm_install(self.namespace, "otterize")


class TestNetworkPolicies:
    namespace = 'otterize-tutorial-npol'

    def test_npol_setup(self):
        delete_namespace(self.namespace)
        create_namespace(self.namespace)

    def test_npol_1_deploy(self):
        # Deploy tutorial
        run('kubectl apply -f ../code-examples/getting-started/network-policies')

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
            f"kubectl apply -f ../code-examples/getting-started/network-policies/intents/intents.yaml")
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


class TestNetworkPoliciesBase:
    namespace = 'test'
    client = Deployment(namespace, "client")
    server = HttpServer(namespace, "server")
    intents = Intents(namespace, from_service=client.name, to_service=server.name)
    ddnp = DefaultDenyNetworkPolicy(namespace)

    def test_npol_setup(self):
        delete_namespace(self.namespace)
        create_namespace(self.namespace)
        self.client.apply()
        self.server.apply()

    def test_npol_1_base(self):
        # Check baseline
        check_connection(self.client, self.server, True)

    def test_npol_2_default_deny(self):
        # Add a Default Deny Network Policy and check that curl times out
        self.ddnp.apply()
        check_connection(self.client, self.server, False)
        # run a sanity check to make sure curl works again when removing the network policy
        self.ddnp.delete()
        check_connection(self.client, self.server, True)

    def test_npol_3_apply_intents(self):
        # Add a Default Deny Network Policy and check that curl times out
        self.ddnp.apply()
        check_connection(self.client, self.server, False)

        # Apply intents and check that curl works
        self.intents.apply()
        check_connection(self.client, self.server, True)

    def test_npol_4_delete_intents(self):
        # Remove intents and check that curl times out
        self.intents.delete()
        check_connection(self.client, self.server, False)

    def test_npol_teardown(self):
        delete_namespace(self.namespace)


class TestNetworkPoliciesAdvanced:
    namespace = 'test'
    client = Deployment(namespace, "client")
    client2 = Deployment(namespace, "client2")
    server = HttpServer(namespace, "server")
    server2 = HttpServer(namespace, "server2")
    intents = Intents(namespace, from_service=client.name, to_service=server.name)
    ddnp = DefaultDenyNetworkPolicy(namespace)

    def test_npol_setup(self):
        delete_namespace(self.namespace)
        create_namespace(self.namespace)
        self.client.apply()
        self.client2.apply()
        self.server.apply()
        self.server2.apply()

    def test_npol_1_base(self):
        # Check baseline
        check_connection(self.client, self.server, True)
        check_connection(self.client, self.server2, True)
        check_connection(self.client2, self.server, True)
        check_connection(self.client2, self.server2, True)

    def test_npol_2_only_intents(self):
        # Apply intents for client->server, expect client2->server to fail
        self.intents.apply()
        check_connection(self.client, self.server, True)
        check_connection(self.client, self.server2, True)
        check_connection(self.client2, self.server, False)
        check_connection(self.client2, self.server2, True)

    def test_npol_3_ddnp_with_intents(self):
        self.ddnp.apply()
        self.intents.apply()
        check_connection(self.client, self.server, True)
        check_connection(self.client, self.server2, False)
        check_connection(self.client2, self.server, False)
        check_connection(self.client2, self.server2, False)

    def test_npol_teardown(self):
        delete_namespace(self.namespace)


# This suite works around a bug where workloads are identified by their prefix which causes Intents set for
# client->server to also be relevant for client2->server, client->server2 and client2->server2
class TestNetworkPoliciesAdvancedWorkaround:
    namespace = 'test'
    client = Deployment(namespace, "client")
    client2 = Deployment(namespace, "zclient2")
    server = HttpServer(namespace, "server")
    server2 = HttpServer(namespace, "zserver2")
    intents = Intents(namespace, from_service=client.name, to_service=server.name)
    ddnp = DefaultDenyNetworkPolicy(namespace)

    def test_npol_setup(self):
        delete_namespace(self.namespace)
        create_namespace(self.namespace)
        self.client.apply()
        self.client2.apply()
        self.server.apply()
        self.server2.apply()

    def test_npol_1_base(self):
        # Check baseline
        check_connection(self.client, self.server, True)
        check_connection(self.client, self.server2, True)
        check_connection(self.client2, self.server, True)
        check_connection(self.client2, self.server2, True)

    def test_npol_2_only_intents(self):
        # Apply intents for client->server, expect client2->server to fail
        self.intents.apply()
        check_connection(self.client, self.server, True)
        check_connection(self.client, self.server2, True)
        check_connection(self.client2, self.server, False)
        check_connection(self.client2, self.server2, True)

    def test_npol_3_ddnp_with_intents(self):
        self.ddnp.apply()
        self.intents.apply()
        check_connection(self.client, self.server, True)
        check_connection(self.client, self.server2, False)
        check_connection(self.client2, self.server, False)
        check_connection(self.client2, self.server2, False)

    def test_npol_teardown(self):
        delete_namespace(self.namespace)
