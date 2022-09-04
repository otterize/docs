from tests.k8s import Deployment, HttpServer, Intents, DefaultDenyNetworkPolicy, check_connection
from tests.utils import create_namespace, delete_namespace, rand_name


class TestNetworkPoliciesMultipleIntentsPerClient:
    namespace = 'test-' + rand_name(5)
    client = Deployment(namespace, 'client')
    client2 = Deployment(namespace, 'zclient2')
    server = HttpServer(namespace, 'server')
    server2 = HttpServer(namespace, 'server2')
    intents = Intents(client, [server, server2])
    ddnp = DefaultDenyNetworkPolicy(namespace)

    def test_npol_setup(self):
        create_namespace(self.namespace)
        self.client.apply()
        self.client2.apply()
        self.server.apply()
        self.server2.apply()

    def test_npol_1_base(self):
        # Check baseline
        self.intents.delete()
        self.ddnp.delete()
        check_connection(self.client, self.server, True)
        check_connection(self.client, self.server2, True)
        check_connection(self.client2, self.server, True)
        check_connection(self.client2, self.server2, True)
        self.ddnp.apply()
        check_connection(self.client, self.server, False)
        check_connection(self.client, self.server2, False)
        check_connection(self.client2, self.server, False)
        check_connection(self.client2, self.server2, False)
        self.intents.apply()
        check_connection(self.client, self.server, True)
        check_connection(self.client, self.server2, True)
        check_connection(self.client2, self.server, False)
        check_connection(self.client2, self.server2, False)

    def test_npol_teardown(self):
        delete_namespace(self.namespace)
