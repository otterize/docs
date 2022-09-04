from tests.k8s import Deployment, HttpServer, Intents, DefaultDenyNetworkPolicy, check_connection
from tests.utils import rand_name, create_namespace, delete_namespace


class TestNetworkPoliciesAdvancedWorkaround:
    # This suite works around a bug where workloads are identified by their prefix which causes Intents set for
    # client->server to also be relevant for client2->server, client->server2 and client2->server2
    namespace = 'test-' + rand_name(5)
    client = Deployment(namespace, "client")
    client2 = Deployment(namespace, "zclient2")
    server = HttpServer(namespace, "server")
    server2 = HttpServer(namespace, "zserver2")
    intents = Intents(namespace, from_service=client.name, to_services=[server.name])
    ddnp = DefaultDenyNetworkPolicy(namespace)

    def test_npol_setup(self):
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
