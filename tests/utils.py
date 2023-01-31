import random
import re
import string
import subprocess
import time


def run(command, *args, **kwargs):
    return subprocess.check_output(command.split(), *args, **kwargs).decode()


def create_namespace(namespace: str):
    try:
        run(f'kubectl create namespace {namespace}', stderr=subprocess.STDOUT)
    except subprocess.CalledProcessError as e:
        if f'namespaces "{namespace}" already exists' in e.output.decode():
            return
        raise


def delete_namespace(namespace: str):
    try:
        run(f'kubectl delete namespace {namespace}', stderr=subprocess.STDOUT)
    except subprocess.CalledProcessError as e:
        if f'namespaces "{namespace}" not found' in e.output.decode():
            return
        raise


def helm_uninstall(namespace: str, name: str):
    try:
        run(f'helm uninstall -n {namespace} {name}', stderr=subprocess.STDOUT)
    except subprocess.CalledProcessError as e:
        if f'Error: uninstall: Release not loaded: {name}: release: not found' not in e.output.decode():
            raise

    try:
        run(f'helm repo remove otterize', stderr=subprocess.STDOUT)
    except subprocess.CalledProcessError as e:
        if f'Error: no repo named "otterize" found' not in e.output.decode():
            raise


def wait_for_availability(type, regex, names, namespace):
    for _ in range(15):
        res = run(f'kubectl get {type} -n {namespace}')
        availability = {name: (int(avail), int(wanted)) for name, avail, wanted in re.findall(regex, res) if
                        name in names}
        print(availability)
        assert names.issubset(availability)
        if all([avail == wanted for avail, wanted in availability.values()]):
            break
        time.sleep(5)
    else:
        assert False, f"{type} availability error\n{availability}"


def helm_install(namespace: str, name: str):
    run(f'helm repo add otterize https://helm.otterize.com', stderr=subprocess.STDOUT)
    run(f'helm repo update', stderr=subprocess.STDOUT)
    run(f'helm upgrade --install -n {namespace} {name} otterize/otterize-kubernetes', stderr=subprocess.STDOUT)

    deployments = {'intents-operator-controller-manager',
                   'otterize-watcher',
                   'credentials-operator-controller-manager'}
    wait_for_availability('deploy', '(.*?) *(\d+)/(\d+)', deployments, namespace)
    daemonsets = {'otterize-spire-agent'}
    wait_for_availability('daemonset', '(.*?) *(\d+) *\d+ *(\d+)', daemonsets, namespace)


def get_log_line(namespace, deployment, times=3, count=1) -> str:
    for _ in range(times):
        log_line = run(
            f"kubectl logs --tail {count} -n {namespace} deploy/{deployment}")
        if log_line:
            break
    return log_line


def rand_name(length: int) -> str:
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=length))
