from tests.k8s import Deployment, HttpServer, Intents, DefaultDenyNetworkPolicy, check_connection
from tests.utils import rand_name, create_namespace, delete_namespace


class TestNetworkPoliciesBase:
    namespace = 'test-' + rand_name(5)
    client = Deployment(namespace)
    server = HttpServer(namespace)
    intents = Intents(namespace, from_service=client.name, to_services=[server.name])
    ddnp = DefaultDenyNetworkPolicy(namespace)

    def test_npol_setup(self):
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
