import re
import subprocess
from enum import Enum

from tests.utils import run, rand_name

ReadyState = Enum('ReadyState', 'Ready Error Pending')


class K8sBase(object):
    def __init__(self, namespace: str, name: str = None):
        self.namespace = namespace
        self.name = name

    def apply(self):
        run(f"kubectl apply -f -", input=self._yaml().encode(), stderr=subprocess.STDOUT)

    def delete(self):
        run(f"kubectl delete --ignore-not-found=true -f -", input=self._yaml().encode(), stderr=subprocess.STDOUT)

    def _yaml(self) -> str:
        raise NotImplementedError

    def state(self) -> ReadyState:
        raise NotImplementedError


class Deployment(K8sBase):
    def __init__(self, namespace: str, name: str = None, args: str = None, image: str = None,
                 command: str = None):
        super().__init__(namespace, name or "deploy-" + rand_name(5))
        self.args = args or "sleep infinity"
        self.image = image or "alpine/curl"
        self.command = command or 'command: [ "/bin/sh", "-c", "--" ]'

    def _yaml(self) -> str:
        return f"""
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {self.name}
  namespace: {self.namespace}
spec:
  selector:
    matchLabels:
      app: {self.name}
  template:
    metadata:
      labels:
        app: {self.name}
    spec:
      containers:
        - name: {self.name}
          image: {self.image}
          {self.command}
          args: [ "{self.args}" ]
"""

    def state(self) -> ReadyState:
        _, avail, wanted = re.findall(r"(.*?) *(\d+)/(\d+)",
                                      run(f"kubectl get deployment -n {self.namespace} {self.name}"))[0]
        if avail == wanted:
            return ReadyState.Ready
        return ReadyState.Pending

    def exec(self, command):
        try:
            out = run(f"kubectl exec -n {self.namespace} -it deploy/{self.name} -- {command}",
                      stderr=subprocess.STDOUT)
        except Exception as e:
            out = e.output.decode()
        if out.startswith('Unable to use a TTY'):
            out = out.split('\n', 1)[1]
        return out


class HttpServer(Deployment):
    def __init__(self, namespace: str, name: str = None):
        super().__init__(namespace, name,
                         command='#',
                         args='-listen=:80", "-text=Hello world',
                         image="hashicorp/http-echo")

    def _yaml(self) -> str:
        yaml = super()._yaml()
        yaml += f"""
---
apiVersion: v1
kind: Service
metadata:
  name: {self.name}
  namespace:  {self.namespace}
spec:
  selector:
    app: {self.name}
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
"""
        return yaml


class DefaultDenyNetworkPolicy(K8sBase):
    def __init__(self, namespace: str, name: str = None):
        super().__init__(namespace, name or "default-deny-ingress")

    def _yaml(self) -> str:
        return f"""
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: {self.name}
  namespace:  {self.namespace}
spec:
  podSelector: {{}}
  policyTypes:
    - Ingress
"""


class Intents(K8sBase):
    def __init__(self, client: K8sBase, to_services: list[K8sBase], custom_name: str = None):
        super().__init__(client.namespace, custom_name or client.name)
        self.client = client
        self.to_services = to_services

    def _yaml(self) -> str:
        called_services = ""
        for service in self.to_services:
            namespace = "" if self.client.namespace == service.namespace else service.namespace
            called_services += \
                f"""
      - name: {service.name}
        namespace: {namespace}
        type: HTTP"""
        return f"""
apiVersion: k8s.otterize.com/v1alpha1
kind: ClientIntents
metadata:
  name: {self.name}
  namespace:  {self.namespace}
spec:
  service:
    name: {self.client.name}
  calls:
    {called_services}
""".replace('\n\n', '\n')


def check_connection(client: Deployment, server: HttpServer, should_work: bool):
    namespace_suffix = f".{server.namespace}" if client.namespace != server.namespace else ""
    resp = client.exec(f"timeout 1 curl -s {server.name}{namespace_suffix}").strip()
    if should_work:
        assert "Hello world" == resp
    else:
        assert "command terminated" in resp
