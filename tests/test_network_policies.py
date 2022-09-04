from tests.utils import create_namespace, helm_install


class TestHelmEnsure:
    namespace = 'otterize'

    def test_helm_setup(self):
        create_namespace(self.namespace)
        helm_install(self.namespace, "otterize")
