from tests.k8s import Deployment, HttpServer, Intents, DefaultDenyNetworkPolicy, check_connection
from tests.utils import rand_name, create_namespace, delete_namespace


class TestNetworkPoliciesMultipleNamespace:
    namespace1 = 'test-' + rand_name(5)
    namespace2 = 'test-' + rand_name(5)
    client = Deployment(namespace1)
    client2 = Deployment(namespace2)
    server = HttpServer(namespace1)
    server2 = HttpServer(namespace2)
    intents = Intents(client, [server])
    ddnp1 = DefaultDenyNetworkPolicy(namespace1)
    ddnp2 = DefaultDenyNetworkPolicy(namespace2)

    def test_npol_setup(self):
        create_namespace(self.namespace1)
        create_namespace(self.namespace2)
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
        self.ddnp1.apply()
        self.ddnp2.apply()
        check_connection(self.client, self.server, True)
        check_connection(self.client, self.server2, False)
        check_connection(self.client2, self.server, False)
        check_connection(self.client2, self.server2, False)

    def test_npol_4_ddnp(self):
        self.intents.delete()
        check_connection(self.client, self.server, False)
        check_connection(self.client, self.server2, False)
        check_connection(self.client2, self.server, False)
        check_connection(self.client2, self.server2, False)

    def test_npol_teardown(self):
        delete_namespace(self.namespace1)
        delete_namespace(self.namespace2)
