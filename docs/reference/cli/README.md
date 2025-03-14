---
sidebar_position: 10
title: CLI
---

The Otterize command line interface (CLI) offers the following capabilities:
- [Interact with](#network-mapper) the [Otterize network mapper](/features/network-mapping-network-policies/tutorials/k8s-network-mapper) running in a Kubernetes cluster.
- [Transform](#otterize-intents-convert--f-path) [intents files](/overview/intent-based-access-control) from plain YAML format to Kubernetes custom resource YAML format.
- Interact with the Otterize Cloud, through its REST API.

This CLI is open-source software. To see its source or build it yourself,
see [https://github.com/otterize/otterize-cli](https://github.com/otterize/otterize-cli).

The CLI is available as an installable binary as documented in this [guide](/overview/installation#install-the-otterize-cli).

The following are the commands offered by the Otterize CLI.

## Command structure

Most CLI commands are of the form `otterize NOUN VERB` where the `NOUN` is the type of object (e.g. `intents`, `integrations`) and the `VERB` is the operation being performed.
Putting the `NOUN` first makes the auto-completion and documentation built into the CLI easier to consume: you first choose the type of object you are interested in,
then the built-in auto-completion or documentation shows you the options on that type of object.

- `otterize -h` or `otterize --help` lists the various object types.
- `otterize NOUN -h` or `otterize NOUN --help` offers help on the specified object type.
- `otterize NOUN VERB -h` or `otterize NOUN VERB --help` offers help on the specified operation.

`otterize completion` offers instruction for generating command completions in various shells.


## Usage Telemetry

The CLI reports anonymous usage information back to the Otterize team, to help the team understand how the software is used in the community and what aspects users find useful. No personal or organizational identifying information is transmitted in these metrics: they only reflect patterns of usage. You may opt out at any time through a single configuration flag.

To **disable** sending usage information:
- Using a flag: `--telemetry-enabled=false`.
- Via an environment variable: `OTTERIZE_TELEMETRY_ENABLED=false`.

If the `telemetry` flag is omitted or set to `true`, telemetry will be enabled: usage information will be reported.

For more information see the [Usage telemetry Documentation](/overview/otterize-oss/usage-telemetry)


## Global options

The following options apply to all CLI commands.

| Name                  | Default                        | Description                                                                |
|-----------------------|--------------------------------|----------------------------------------------------------------------------|
| `-h` or `--help`      |                                | Get help on any command.                                                   |
| `--api-address`       | `https://app.otterize.com/api` | The URL for the Otterize API endpoint.                                     |
| `--client-id`         |                                | Set the client id, for use in authenticating API calls.                    |
| `--client-secret`     |                                | Set the client secret, for use in authenticating API calls.                |
| `--config`            | `~/.otterize/config`           | Use the given path for the Otterize CLI config file.                       |
| `--debug`             |                                | Show debug logs.                                                           |
| `--interactive`       | true                           | Ask for missing flags interactively.                                       |
| `--org-id`            |                                | Use the given organization id when calling the Otterize API.               |
| `--format`            | text                           | Output the results of the command as text (`text`) or JSON (`json`).       |
| `-q` or `--quiet`     |                                | Suppress printing the results of the command.                              |
| `--token`             |                                | The token to use in authenticating API calls.                              |
| `--telemetry-enabled` | true                           | Whether to enable sending of anonymous usage telemetry to Otterize or not. |

## Network mapper

All `otterize network-mapper` commands share a set of optional flags which will not be repeated in the documentation
for each command.

#### Common options

| Name                    | Default                   | Description                                                     |
|-------------------------|---------------------------|-----------------------------------------------------------------|
| `--mapper-namespace`    | `otterize-system`         | Specifies the namespace where the mapper service was installed. |
| `--mapper-service-name` | `otterize-network-mapper` | Specifies the name of the mapper service as it was installed.   |
| `--mapper-service-name` | `otterize-service-port`   | Specifies the port on which the mapper service is listening.    |


### `otterize network-mapper reset`

Resets the network mapper by deleting all map information built up so far in memory.

### `otterize network-mapper list [-n <namespace1>,<namespace2>,...]`

Return the network map built by the network mapper since it started, or since it was reset,
as a list of clients and the servers they call.

#### Options

| Name                   | Default | Description                                                 |
|------------------------|---------|-------------------------------------------------------------|
| `-n` or `--namespaces` |         | Include only clients in these namespaces (comma-separated). |

#### Returns

Here's a partial output from `otterize network-mapper list -n otterize-ecom-demo`:

```shell
cartservice in namespace otterize-ecom-demo calls:
  - redis-cart
checkoutservice in namespace otterize-ecom-demo calls:
  - cartservice
  - currencyservice
  - emailservice
  - paymentservice
  - productcatalogservice
  - shippingservice
frontend in namespace otterize-ecom-demo calls:
  - adservice
  - cartservice
  - checkoutservice
  - currencyservice
  - productcatalogservice
  - recommendationservice
  - shippingservice
loadgenerator in namespace otterize-ecom-demo calls:
  - frontend
recommendationservice in namespace otterize-ecom-demo calls:
  - productcatalogservice
```

### `otterize network-mapper visualize [--format=png | --format=jpg] [-n <namespace1>,<namespace2>,...] -o <path>`
Return the network map built by the network mapper since it started, or since it was reset,
as an image. 

Uses GraphViz (specifically go-graphviz) to generate the image.

#### Options

| Name                    | Default | Description                                                                             |
|-------------------------|---------|-----------------------------------------------------------------------------------------|
| `--format`              | `png`   | Image output format: "png" or "jpg".                                                    |
| `-n` or `--namespaces`  |         | Include only clients in these namespaces (comma-separated).                             |
| `-o` or `--output-path` |         | Filename for the image.                                                                 |
| `--exclude-labels`      |         | A list of labels that would exclude services from list/export. example: "include=false" |
| `--exclude-services`    |         | A list of service to exclude from list/export. example: "service1,service2"             |

#### Returns

Here's the image generated by running `otterize network-mapper visualize -n otterize-ecom-demo -o otterize-ecom-demo.png`:
![graph](https://user-images.githubusercontent.com/29180932/221423644-df8fbba2-dca1-4c56-baeb-f0d0afc55eb1.png)

### `otterize network-mapper export [--format] [-n <namespace1>,<namespace2>,...] [-o <path>] [--output-type <output-type>]`

Return the network map built by the network mapper since it started, or since it was reset,
as YAML [client intents file(s)](/overview/intent-based-access-control) or as JSON file(s).

#### Options

| Name                   | Default       | Description                                                                                                                                                                 |
|------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--format`             | `yaml`        | Specifies the format for the export: either `yaml` or `json`.                                                                                                                      |
| `-n` or `--namespaces` |               | Export only clients in these namespaces (comma-separated).                                                                                                                  |
| `-o` or `--output`     | `STDOUT`      | Filename or directory for redirecting the output.                                                                                                                           |
| `--output-type`        | `single-file` | Whether the output should be written as a single file (`single-file`) or as multiple files in a directory (`dir`). Requires the `-o` or `--output` to point to a directory. |
| `--server`             |               | Export only intents for clients that call this server. The server name must be specified with both service name and namespace, in the format `<SERVERNAME>.<SERVER_NAMESPACE>`. Example: `cartservice.otterize-ecom-demo`.                                                       |
| `--exclude-labels`     |               | A list of labels that would exclude services from list/export. Example: `include=false` would exclude any service labeled with `include=false` from being included in list/export. |
| `--exclude-services`   |               | A list of services to exclude from list/export. Example: `service1,service2`.                                                                                                |

#### Returns

Here's a partial output from `otterize network-mapper export -n otterize-ecom-demo`:

```yaml
apiVersion: k8s.otterize.com/v2beta1
kind: ClientIntents
metadata:
  name: cartservice
  namespace: otterize-ecom-demo
spec:
  workload:
    name: cartservice
    kind: Deployment
  targets:
    - service: 
        name: redis-cart
---
apiVersion: k8s.otterize.com/v2beta1
kind: ClientIntents
metadata:
  name: checkoutservice
  namespace: otterize-ecom-demo
spec:
  workload:
    name: checkoutservice
    kind: Deployment
  targets:
    - service:
        name: cartservice
    - service: 
        name: currencyservice
```


## Login

### `otterize login [--switch-account] [--switch-org]`

Login to Otterize Cloud using a web browser.

If `--switch-account` is specified, re-authenticating is forced in the browser, so a new user can be chosen.

If `--switch-org` is specified, and the current user belongs to multiple org, the new org can be chosen interactively.

#### Options

| Name               | Default | Description                                                    |
|--------------------|---------|----------------------------------------------------------------|
| `--switch-account` |         | Login to a different user account than the one currently set.  |
| `--switch-org`     |         | Switch to a different organization than the one currently set. |

#### Returns

Outputs login process progress messages, including registering a user if needed, creating an org if needed,
and setting the user and org to use by default in other commands.

```shell
Please login to Otterize using your browser: https://...
Login completed successfully! logged in as: my-username@example.com

Querying user info from Otterize server
Logged in as Otterize user usr_1234567 (my-username@example.com)
Only 1 organization found - auto-selecting this organization for use.
Selected organization org_1234567
To change your organization selection, log-in again with --switch-org.

```

## Version

### `otterize version`

Prints the CLI build version, and queries the Otterize Cloud for the current Cloud REST API version (e.g. `v1`) and revision (hash of the current Cloud REST API definition).

#### Returns

Returns the version of this CLI and the current version and revision of the Otterize Cloud REST API, as well as the version and revision against which this CLI is built.

Note that the Otterize CLI is mostly a thin but useful utility for invoking the Otterize Cloud REST API.
API versions that differ by version number may break backwards compatibility, while those that only differ by revision are backwards compatible: revisions add functionality or documentation but preserve all previous functionality.

If only the Cloud API has changed since the CLI was built (revisions don't match), the CLI might be missing some Cloud capabilities.

If also the Cloud API version is later than the CLI version, some CLI commands might fail.

Beta versions of the Cloud API (e.g. `v1beta`) are volatile: they may change and break backwards compatibility until they are out of beta.

```shell
Version: v0.1.1
Current Cloud API:
    version: v1
    revision: 465ba4174008682f54f99e37d0b7791148aade14
This CLI was built against:
    version: v1
    revision: 91efb6f8acb98985fc2b993baa8d279049c8b302

Caution: this CLI was built with a different version/revision of the Otterize Cloud API.
Some Cloud CLI commands may fail.
Upgrade your CLI to the latest build to resolve this issue.
```

## Environments

### `otterize environments list [-l label1,label2] [-n name]`

List all environments, optionally filtered by labels or name.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `-l` or `--labels` |  | Return only the environments that contain all the given labels. A label may be of the form `key` or `key=value`. |
| `-n` or `--name` |  | Filter the list by environment name. Since environment names are unique, this will always return at most one cluster. |

#### Returns

Returns a table of information about the environments.

```shell
id             name                     labels            integrations_count applied_intents_count
────────────── ──────────────────────── ───────────────── ────────────────── ─────────────────────
env_yg64fe8ty2 staging                  region-EU                            15
env_glohhjfowc phase 1                                                       1
env_o6tdthl6qz phase 2                                                       2
env_zfndrpvqgp phase 3                                                       3
env_5mzzqxrr2f eks1_default_environment key1,key2=value2                     0
env_lqrcfkam5g phase 0                  phase1                               0

```

### `otterize environments get <environment-id>`

Returns information about a single environment, specified by its id.

#### Returns

Returns a table of information about the specified environment.

```shell
id             name    labels service count namespaces count declared intents count
────────────── ─────── ────── ───────────── ──────────────── ─────────────────────
env_o6tdthl6qz staging        12            1                2

```

### `otterize environments create -n <environment-name> [-l label1,label2]`

Creates a new environment with the given name, and optionally with the given labels.

Environment names must be unique in an organization.

The keys of the labels on a given environment must be unique.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `-n` or `--name` |  | The name to give the new environment. |
| `-l` or `--labels` |  | Label the new environment with the given labels. A label may be of the form `key` or `key=value`. |

#### Returns

Returns a table of information about the newly-created environment.

```shell
id             name labels                    service count namespaces count declared intents count
────────────── ──── ───────────────────────── ───────────── ──────────────── ──────────────────────
env_bzzustqrek qa   anonymized=true,us-east-1 0             0                0
```

### `otterize environments update <environment-id> [-l label1,label2] [-n name]`

Updates an environment, specified by its id, optionally changing its name and optionally changing its labels.

Environment names must be unique in an organization.

The keys of the labels on a given environment must be unique.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `-l` or `--labels` |  | Relabel the environment with the specified labels. A label may be of the form `key` or `key=value`. |
| `-n` or `--name` |  | Rename the environment with the specified name. |

#### Returns

Returns a confirmation of the update, and a table of information about the newly-updated environment.

```shell
Environment updated
id             name labels                     service count namespaces count declared intents count
────────────── ──── ────────────────────────── ───────────── ──────────────── ─────────────────────
env_bzzustqrek qa1  anonymized=false,us-east-2 0             0                0
```

### `otterize environments update add-label <environment-id> --key=<key> [--value=<value>]`

Updates an environment, specified by its id, by adding a label.

If a label with the specified key already exists on this environment, with or without a value, it is replaced.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `--key` |  | Specifies a key for the added label. |
| `--value` |  | Specifies a value for the added label. |

#### Returns

Returns a table of information about the newly-updated environment.

```shell
Environment updated
id             name labels                               service count namespaces count declared intents count
────────────── ──── ──────────────────────────────────── ───────────── ──────────────── ──────────────────────
env_uchr33prjg qa   size=small,anonymized=true,us-east-1 0             0                0
```

### `otterize environments update remove-label <environment-id> --key=<key>`

Updates an environment, specified by its id, by removing a label.

The label with the specified key is removed whether or not it has a value.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `--key` |  | Specifies the key for the label to be removed. |

#### Returns

Returns a table of information about the newly-updated environment.

```shell
Environment updated
id             name labels                    service count namespaces count declared intents count
────────────── ──── ───────────────────────── ───────────── ──────────────── ──────────────────────
env_uchr33prjg qa   anonymized=true,us-east-1 0             0                0
```

### `otterize environments delete <environment-id>>`

Deletes the specified environment.

If the environment is being used as the default environment for a Kubernetes integration, that integration must first be updated with a different environment, or deleted.

#### Returns

Returns confirmation of the deletion.

```shell
Deleted environment env_bzzustqrek
```

## Integrations

### `otterize integrations list [--cluster-id=<cluster-id>] [--env-id=<env-id>] [--name=<name>] [--type=GENERIC | --type=KUBERNETES]`

List all integrations, optionally filtered by cluster, environment, name, or type.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `--cluster-id` |  | Show only the integration associated with the specified cluster.  |
| `--env-id` |  | Show only the integrations with the specified environment as their default environment.  |
| `-n` or `--name` |  | Show only the integration with the specified name.  |
| `--type` |  | Show only integrations with the specified type: `GENERIC` or `KUBERNETES`.  |

#### Returns

Returns a table of information about the integrations.

```shell
id             type       name          cluster id         default environment id intents operator                                               credentials operator              network mapper
────────────── ────────── ───────────── ────────────────── ────────────────────── ────────────────────────────────────────────────────────────── ───────────────────────────────── ──────────────────────────────────────────────────────────────
int_7b7rc988i3 KUBERNETES eks1          cluster_dvlwk4q25r env_5mzzqxrr2f         DISCONNECTED (last seen: 2023-01-26 08:55:53.909965 +0000 UTC) NOT_INTEGRATED (last seen: never) DISCONNECTED (last seen: 2023-01-26 08:56:29.608348 +0000 UTC)
int_ltdad8mcfc GENERIC    my-automation
```

### `otterize integrations get <integration-id>`

Returns information about a single integration, specified by its id.

#### Returns

Returns a table of information about the specified integration.

```shell
id             type       name cluster id         default environment id intents operator                                               credentials operator              network mapper
────────────── ────────── ──── ────────────────── ────────────────────── ────────────────────────────────────────────────────────────── ───────────────────────────────── ──────────────────────────────────────────────────────────────
int_7b7rc988i3 KUBERNETES eks1 cluster_dvlwk4q25r env_5mzzqxrr2f         DISCONNECTED (last seen: 2023-01-26 08:55:53.909965 +0000 UTC) NOT_INTEGRATED (last seen: never) DISCONNECTED (last seen: 2023-01-26 08:56:29.608348 +0000 UTC)
```

### `otterize integrations create generic -n=<name>`

Creates a new generic-type integration with the specified name.

Generic-type integrations are used for any kind of automated access to the Otterize Cloud API.

Integration names must be unique, per integration type, within an organization.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `-n` or `--name` |  | Specify the name of the new integration.  |

#### Returns

Returns a table of information about the newly-created integration.

```shell
id             type    name   cluster id default environment id intents operator credentials operator network mapper client id      client secret
────────────── ─────── ────── ────────── ────────────────────── ──────────────── ──────────────────── ────────────── ────────────── ────────────────────────────────────────────────────────────────
int_nx2twtcqwt GENERIC my-bot                                                                                        cli_csn8mb55b3 7adba16e331bdf9fe9d2c1ec7d2d78a1c7e56df34sc2c5ff98e4dec4aa232c3c
```

### `otterize integrations create kubernetes --name=<integration-name> --env-id=<env-id>`

Creates a new Kubernetes-type integration for the specified cluster and with the specified default environment.

The cluster must have already been created in Otterize Cloud before the new integration is created and used with it.

The default environment must also have already been created. All namespaces in the cluster are associated with this environment by default; each namespace may then be associated with a different environment by updating it.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `-n` or `--name` |  | Specify the name of the new integration. |
| `--env-id` |  | The id of the environment to use as the default environment for this integration. |

#### Returns

Returns a table of information about the newly-created integration.

```shell
id             type       name                      cluster id         default environment id intents operator                  credentials operator              network mapper                    client id      client secret
────────────── ────────── ───────────────────────── ────────────────── ────────────────────── ───────────────────────────────── ───────────────────────────────── ───────────────────────────────── ────────────── ────────────────────────────────────────────────────────────────
int_hbspxl9te3 KUBERNETES Integration - dev-cluster cluster_c8uo5cc8fs env_h29ujjm8q8         NOT_INTEGRATED (last seen: never) NOT_INTEGRATED (last seen: never) NOT_INTEGRATED (last seen: never) cli_6l44xifr7l 8fc161f883d89d44bddc0279f41ff24c0697e482e2cd9c5edec4a525f0af06f7
```

### `otterize integrations update generic <integration-id> [-n <name>]`

Updates the specified generic-type integration with a new name.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `-n` or `--name` |  | The new name to use for the integration. |

#### Returns

Returns a table of information about the newly-updated integration.

```shell
id             type    name    cluster id default environment id intents operator credentials operator network mapper client id      client secret
────────────── ─────── ─────── ────────── ────────────────────── ──────────────── ──────────────────── ────────────── ────────────── ────────────────────────────────────────────────────────────────
int_nx2twtcqwt GENERIC my-bot2                                                                                        cli_csn8mb55b3 7adba16e331bdf9fe9d2c1ec7d2d78a1c7e56df34sc2c5ff98e4dec4aa232c3c
```

### `otterize integrations update kubernetes <integration-id> [--env-id <env-id>] [--name=<integration-name>]`

Updates the specified Kubernetes-type integration with a new environment to use as the default environment for new namespaces.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `-n` or `--name` |  | The new name to use for the integration. |
| `--env-id` |  | The id of the environment to use as the default for this integration. |

#### Returns

Returns a table of information about the newly-updated integration.

```shell
id             type       name                      cluster id         default environment id intents operator                  credentials operator              network mapper                    client id      client secret
────────────── ────────── ───────────────────────── ────────────────── ────────────────────── ───────────────────────────────── ───────────────────────────────── ───────────────────────────────── ────────────── ────────────────────────────────────────────────────────────────
int_hbspxl9te3 KUBERNETES Integration - dev-cluster cluster_c8uo5cc8fs env_iwh37hubdy         NOT_INTEGRATED (last seen: never) NOT_INTEGRATED (last seen: never) NOT_INTEGRATED (last seen: never) cli_6l44xifr7l 8fc161f883d89d44bddc0279f41ff24c0697e482e2cd9c5edec4a525f0af06f7
```

### `otterize integrations delete <integration-id>`

Deletes the specified integration.

#### Returns

Returns confirmation of the deletion.

```shell
Deleted integration int_nx2twtcqwt
```

## Invites

### `otterize invites list`

Lists invites for the current user.

#### Returns
Returns a table of information about the invites.

```shell
id               email               organization id inviter user id status  created at                              accepted at
──────────────── ─────────────────── ─────────────── ─────────────── ─────── ─────────────────────────────────────── ───────────
invite_u62tgd793 someone@example.com org_7iy3bg3e    user_ge52hdd8   PENDING 2023-01-31 20:49:17.199887853 +0000 UTC
─────────
```

### `otterize invites create --email=<email>`

Invites a user with the given email to the current organization.

Note that currently the invitation isn't emailed by Otterize Cloud;
it should be communicated to the invitee through whatever means make sense, e.g. email, text, or Slack.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `--email` |  | The email of the user to be invited. |

#### Returns

Returns a table of information about the created invitation.

```shell
id             email                    organization id inviter user id status  created at                              accepted at
────────────── ──────────────────────── ─────────────── ─────────────── ─────── ─────────────────────────────────────── ───────────
inv_lexz7vxo9l someone-else@example.com org_fq6j2thfcx                  PENDING 2023-01-31 20:49:17.199887853 +0000 UTC
```

### `otterize invites accept <invite-id>`

Accepts the specified invitation to join the corresponding organization.

#### Returns

Returns a confirmation that the organization was joined.

```shell
Joined organization org_462ia9x8ru
```

### `otterize invites delete <invite-id>`

Deletes the specified invitation.

#### Returns

Returns a confirmation that the invitation was deleted.

```shell
Deleted invite inv_lexz7vxo9l
```

## Namespaces

### `otterize namespaces list [--cluster-id <cluster-id>] [--env-id <env-id>]`

List all Kubernetes namespaces, optionally filtered by cluster and environment.

Namespaces become known to Otterize Cloud when they contain services that become known to Otterize Cloud.
See [`otterize services list`](#services) for more information.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `--cluster-id` |  | Show only namespaces in the specified cluster. |
| `--env-id` |  | Show only namespaces mapped to the specified environment. |

#### Returns

A table of information about the namespaces.
The environment column shows the id of the environment mapped to each namespace.

```shell
id            name            cluster cluster id         environment id service count
───────────── ─────────────── ─────── ────────────────── ────────────── ─────────────
ns_mje67b2epm otterize-system eks1    cluster_dvlwk4q25r env_5mzzqxrr2f 2
ns_d4lcnf6eyr ecom-shopping   eks1    cluster_dvlwk4q25r env_o6tdthl6qz 12
ns_rqk9cs7sec ecom-mktg       eks1    cluster_dvlwk4q25r env_zfndrpvqgp 98
ns_njj7feo4ld playground      eks1    cluster_dvlwk4q25r env_lqrcfkam5g 15
ns_vq4losjach test-kafka      eks1    cluster_dvlwk4q25r env_glohhjfowc 8
```

### `otterize namespaces get <namespace-id>`

Returns information about a single namespace, specified by its id.

#### Returns

Returns a table of information about the namespace.
The environment column shows the id of the environment mapped to each namespace.

```shell
id            name            cluster cluster id         environment id service count
───────────── ─────────────── ─────── ────────────────── ────────────── ─────────────
ns_d4lcnf6eyr ecom-shopping   eks1    cluster_dvlwk4q25r env_o6tdthl6qz 12
```

### `otterize namespaces update <namespace-id> [--env-id <env-id>]`

Update the environment to which this namespace is mapped.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `--env-id` |  | Map this namespace to the specified environment. |

#### Returns

Returns a confirmation that the namespace was updated, and a table of information about the newly-updated namespace.

```shell
Namespace updated
id            name         cluster cluster id         environment id service count
───────────── ──────────── ─────── ────────────────── ────────────── ─────────────
ns_d4lcnf6eyr ecom-phase-2 eks1    cluster_dvlwk4q25r env_uyhd7h3bju 12
```

## Organizations

### `otterize organizations list`

Lists all organizations to which the current user belongs.

#### Returns

Returns a table of information about the organizations.

```shell
id             name               image URL
────────────── ────────────────── ─────────────────────────────────────────────
org_fq6jge6icx The Organic Urchin https://example.com/images/organic-urchin.png
org_gyud6g3jp9 Org gyud6g3jp9
```

### `otterize organizations get <organization-id>`

Returns information about a single organization, specified by its id.

#### Returns

Returns a table of information about the organization.

```shell
id             name               image URL
────────────── ────────────────── ─────────────────────────────────────────────
org_fq6jge6icx The Organic Urchin https://example.com/images/organic-urchin.png
```

### `otterize organizations create`

Creates a new organization.

The current user is automatically made a member of this organization (without losing membership in any previous organizations).
The name of the new organization is set to "Org " followed by the suffix of the organization's id (the part after "org_").
To change this name, or to assign an image to the new organization, use `otterize organizations update <organization-id>`.

#### Returns

Returns a table of information about the newly-created organization.

```shell
id             name           image URL
────────────── ────────────── ─────────
org_6g3k0dhrpz Org 6g3k0dhrpz
```

### `otterize organizations update <organization-id> [-n <name>] [--image-url <image-URL>]`

Updates the specified organization with a new name and/or a new image.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `-n` or `--name` |  | The new name to use for the organization. |
| `--image-url` |  | The new image to use for the organization, specified through its URL. |
#### Returns

Returns a table of information about the newly-updated organization.

```shell
id             name              image URL
────────────── ───────────────── ────────────────────────────────────────────
org_fq6jge6icx The Feisty Urchin https://example.com/images/feisty-urchin.png
```

## Services

### `otterize services list [--env-id=<env-id>] [--env-id=<env-id>] [-n=<name>] [--namespace-id=<namespace-id>]`

Returns a list of all services known to Otterize Cloud, optionally filtered to those in the specified environment,
to those with the specified name, or to those in the specified namespace.

Services become known to Otterize Cloud when they are discovered and reported by the Otterize OSS components running in a Kubernetes cluster.
They are discovered in one of two ways:
- Via the network mapper, which collects pod-to-pod connections (attempted and successful) and builds a network map of "discovered intents".
- Via the intents operator, which reports client intents applied via `kubectl`.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `--env-id` |  | Filter by the environment of the services. |
| `-n` or `--name` |  | Filter by the name of the services. |
| `--namespace-id` |  | Filter by the namespace of the services. |

#### Returns

Returns a table of information about the services.

```shell
id             name                  namespace       namespace id  environment id kafka info certificate info
────────────── ───────────────────── ─────────────── ───────────── ────────────── ────────── ────────────────
svc_8eagna36iu checkoutservice       ecom-shopping   ns_d4lcnf6eyr env_o6tdthl6qz
svc_r8fm2oiyvs productcatalogservice ecom-shopping   ns_d4lcnf6eyr env_o6tdthl6qz
svc_ilzrj7bhg9 paymentservice        ecom-shopping   ns_d4lcnf6eyr env_o6tdthl6qz
```

### `otterize services get <service-id>`

Returns information about a single service, specified by its id.

#### Returns

Returns a table of information about the service.

```shell
id             name                  namespace       namespace id  environment id kafka info certificate info
────────────── ───────────────────── ─────────────── ───────────── ────────────── ────────── ────────────────
svc_r8fm2oiyvs productcatalogservice ecom-shopping   ns_d4lcnf6eyr env_o6tdthl6qz
```

## Users

### `otterize users list`

Returns a list of users in the current user's organization.

#### Returns

Returns a table of information about the users.

```shell
id             email                    name                     image URL auth provider user id
────────────── ──────────────────────── ──────────────────────── ───────── ──────────────────────────────
usr_rd4y6wcqx4 someone@example.com      Ernest Bergman                     auth0|63c9t6g2b8dhjjw53a4961e5
usr_r7iysdhkw9 someone-else@example.com someone-else@example.com           auth0|737cynqch3iuh4cnliluh3h9

```

### `otterize users get <user-id>`

Returns information about a single user, specified by their id.

#### Returns

Returns a table of information about the user.

```shell
id             email               name                     image URL auth provider user id
────────────── ─────────────────── ──────────────────────── ───────── ──────────────────────────────
usr_rd4y6wcqx4 someone@example.com Ernest Bergman                     auth0|63c9t6g2b8dhjjw53a4961e5
```
