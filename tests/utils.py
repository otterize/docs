import subprocess


def run(command, *args, **kwargs):
    return subprocess.check_output(command.split(), *args, **kwargs)


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


def get_log_line(namespace, deployment, times=3):
    for _ in range(times):
        log_line = run(
            f"kubectl logs --tail 1 -n {namespace} deploy/{deployment}").decode()
        if log_line:
            break
    return log_line
