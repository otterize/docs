from tests.utils import helm_uninstall, helm_install, delete_namespace, create_namespace


class TestHelm:
    namespace = 'otterize'

    def test_helm_setup(self):
        helm_uninstall(self.namespace, "otterize")
        delete_namespace(self.namespace)
        create_namespace(self.namespace)

    def test_helm_install(self):
        helm_install(self.namespace, "otterize")

    def test_helm_teardown(self):
        helm_uninstall(self.namespace, "otterize")
        delete_namespace(self.namespace)
