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
        run(f"kubectl apply -f -", input=self._yaml().encode())

    def delete(self):
        run(f"kubectl delete -f -", input=self._yaml().encode())

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
    def __init__(self, namespace: str, name: str = None, from_service: str = None, to_service: str = None):
        super().__init__(namespace, name or from_service)
        self.from_service = from_service
        self.to_service = to_service

    def _yaml(self) -> str:
        return f"""
apiVersion: otterize.com/v1alpha1
kind: Intents
metadata:
  name: {self.name}
  namespace:  {self.namespace}
spec:
  service:
    name: {self.from_service}
    calls:
      - server: {self.to_service}
        type: HTTP
"""


def check_connection(client: Deployment, server: HttpServer, should_work: bool):
    if should_work:
        assert "Hello world" == client.exec(f"timeout 1 curl -s {server.name}").strip()
    else:
        assert "command terminated" in client.exec(f"timeout 1 curl -s {server.name}").strip()
