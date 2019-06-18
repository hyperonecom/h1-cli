# TOC

  * [h1 agent create](#h1-agent-create) - Create Agent
  * [h1 agent list](#h1-agent-list) - List Agent
  * [h1 agent show](#h1-agent-show) - Show Agent
  * [h1 agent delete](#h1-agent-delete) - Delete Agent
  * [h1 agent history](#h1-agent-history) - History of Agent
  * [h1 agent rename](#h1-agent-rename) - Rename Agent
  * [h1 agent service](#h1-agent-service) - Manage your services of Agent
    * [h1 agent service list](#h1-agent-service-list) - List service for Agent
    * [h1 agent service show](#h1-agent-service-show) - Show service for Agent
  * [h1 agent transfer](#h1-agent-transfer) - Transfer Agent to other project
  * [h1 agent inspect](#h1-agent-inspect) - Inspect of Agent
  * [h1 agent resource](#h1-agent-resource) - Manage your Resource of Agent
    * [h1 agent resource list](#h1-agent-resource-list) - List Resource of Agent
    * [h1 agent resource inspect](#h1-agent-resource-inspect) - Inspect of Resource of Agent
    * [h1 agent resource recreate](#h1-agent-resource-recreate) - Recreate Resource of Agent
  * [h1 agent enabled-service](#h1-agent-enabled-service) - Manage your enabled service
    * [h1 agent enabled-service add](#h1-agent-enabled-service-add) - Add enabled service
    * [h1 agent enabled-service list](#h1-agent-enabled-service-list) - List enabled service
    * [h1 agent enabled-service delete](#h1-agent-enabled-service-delete) - Delete enabled service
  * [h1 agent suspend](#h1-agent-suspend) - Suspend Agent
  * [h1 agent start](#h1-agent-start) - Start Agent
  * [h1 agent credential](#h1-agent-credential) - Manage your credentials to Agent
    * [h1 agent credential cert](#h1-agent-credential-cert) - Manage your certificate to Agent
      * [h1 agent credential cert show](#h1-agent-credential-cert-show) - Show certificate to Agent
      * [h1 agent credential cert rename](#h1-agent-credential-cert-rename) - Rename certificate to Agent
      * [h1 agent credential cert list](#h1-agent-credential-cert-list) - List certificate to Agent
      * [h1 agent credential cert delete](#h1-agent-credential-cert-delete) - Delete certificate to Agent
      * [h1 agent credential cert add](#h1-agent-credential-cert-add) - Add certificate to Agent
  * [h1 agent tag](#h1-agent-tag) - Manage your tag
    * [h1 agent tag list](#h1-agent-tag-list) - List tag
    * [h1 agent tag add](#h1-agent-tag-add) - Add a tag to Agent
    * [h1 agent tag delete](#h1-agent-tag-delete) - Delete a tag of Agent


# Specification

## h1 agent

Manage your Agent

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

### Examples

#### Create Agent with SSH credential

```bash
h1 agent create --name my-agent --type container --ssh-file ./id_rsa.pub
```

## h1 agent create

Create Agent

### Syntax

```h1 agent create | --name NAME --type TYPE [--ssh SSH [--ssh SSH ...]] [--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]] [--tag TAG [--tag TAG ...]]```
### Examples

#### Create Agent with SSH credential

```bash
h1 agent create --name my-agent --type container --ssh-file ./id_rsa.pub
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Agent name |
| ```--type TYPE``` |  | Agent type name or ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ssh SSH [--ssh SSH ...]``` |  | SSH key ID or name that allows access. The parameter may occur repeatedly |
| ```--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]``` |  | Read SSH key from file. The parameter may occur repeatedly |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 agent list

List Agent

### Syntax

```h1 agent list | ```
### Example

```bash
h1 agent list
```

## h1 agent show

Show Agent

### Syntax

```h1 agent show | --agent AGENT```
### Example

```bash
h1 agent show --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent delete

Delete Agent

### Syntax

```h1 agent delete | --agent AGENT```
### Example

```bash
h1 agent delete --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent history

History of Agent

### Syntax

```h1 agent history | --agent AGENT```
### Example

```bash
h1 agent history --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent rename

Rename Agent

### Syntax

```h1 agent rename | --agent AGENT --new-name NEW-NAME```
### Example

```bash
h1 agent rename --agent my-agent --new-name my-renamed-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 agent service

Manage your services of Agent

## h1 agent service list

List service for Agent

### Syntax

```h1 agent service list | --agent AGENT```
### Example

```bash
h1 agent service list --agent test-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent service show

Show service for Agent

### Syntax

```h1 agent service show | --agent AGENT --service SERVICE```
### Example

```bash
h1 agent service show --service my-service --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |
| ```--service SERVICE``` |  | Service for Agent ID or name |

## h1 agent transfer

Transfer Agent to other project

### Syntax

```h1 agent transfer | --agent AGENT --new-project NEW-PROJECT```
### Example

```bash
h1 agent transfer --agent test-agent --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 agent inspect

Inspect of Agent

### Syntax

```h1 agent inspect | --agent AGENT```
### Example

```bash
h1 agent inspect --agent my-agent --source-file ./my-agent.vhdx
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent resource

Manage your Resource of Agent

## h1 agent resource list

List Resource of Agent

### Syntax

```h1 agent resource list | --agent AGENT```
### Example

```bash
h1 agent resource list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent resource inspect

Inspect of Resource of Agent

### Syntax

```h1 agent resource inspect | --agent AGENT --resource RESOURCE```
### Example

```bash
h1 agent resource inspect --resource my-resource --source-file ./my-resource.vhdx
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |
| ```--resource RESOURCE``` |  | Resource of Agent ID or name |

## h1 agent resource recreate

Recreate Resource of Agent

### Syntax

```h1 agent resource recreate | --agent AGENT --resource RESOURCE```
### Example

```
h1 agent resource recreate --agent container-agent --resource container-id
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |
| ```--resource RESOURCE``` |  | Resource of Agent ID or name |

## h1 agent enabled-service

Manage your enabled service

## h1 agent enabled-service add

Add enabled service

### Syntax

```h1 agent enabled-service add | --agent AGENT --service SERVICE```
### Example

```
h1 agent enabled-service add --agent my-agent --service value
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |
| ```--service SERVICE``` |  | New enabled service |

## h1 agent enabled-service list

List enabled service

### Syntax

```h1 agent enabled-service list | --agent AGENT```
### Example

```bash
h1 agent enabled-service list --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent enabled-service delete

Delete enabled service

### Syntax

```h1 agent enabled-service delete | --agent AGENT --service SERVICE```
### Example

```
h1 agent enabled-service delete --agent my-agent --service value
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |
| ```--service SERVICE``` |  | Deleted enabled service |

## h1 agent suspend

Suspend Agent

### Syntax

```h1 agent suspend | --agent AGENT```
### Example

```
h1 agent suspend --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent start

Start Agent

### Syntax

```h1 agent start | --agent AGENT```
### Example

```
h1 agent start --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent credential

Manage your credentials to Agent

## h1 agent credential cert

Manage your certificate to Agent

## h1 agent credential cert show

Show certificate to Agent

### Syntax

```h1 agent credential cert show | --agent AGENT --cert CERT```
### Example

```bash
h1 agent credential cert show --cert my-cert
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |
| ```--cert CERT``` |  | Certificate to Agent ID or name |

## h1 agent credential cert rename

Rename certificate to Agent

### Syntax

```h1 agent credential cert rename | --agent AGENT --cert CERT --new-name NEW-NAME```
### Example

```bash
h1 agent credential cert rename --cert my-cert --new-name my-renamed-cert --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |
| ```--cert CERT``` |  | Certificate to Agent ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 agent credential cert list

List certificate to Agent

### Syntax

```h1 agent credential cert list | --agent AGENT```
### Example

```bash
h1 agent credential cert list --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent credential cert delete

Delete certificate to Agent

### Syntax

```h1 agent credential cert delete | --cert CERT --agent AGENT```
### Example

```bash
h1 agent credential cert delete --cert my-cert --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--cert CERT``` |  | Certificate to Agent ID or name |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent credential cert add

Add certificate to Agent

### Syntax

```h1 agent credential cert add | --agent AGENT --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE]```
### Example

```bash
h1 agent credential cert add --agent my-agent --name my-key --sshkey my-home-ssh
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |
| ```--name NAME``` |  | Certificate name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sshkey SSHKEY``` |  | Public SSH key ID or name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 agent tag

Manage your tag

## h1 agent tag list

List tag

### Syntax

```h1 agent tag list | --agent AGENT```
### Example

```bash
h1 agent tag list --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

## h1 agent tag add

Add a tag to Agent

### Syntax

```h1 agent tag add | --agent AGENT [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 agent tag add --agent test-agent --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 agent tag delete

Delete a tag of Agent

### Syntax

```h1 agent tag delete | --tag TAG --agent AGENT```
### Example

```bash
h1 agent tag delete --agent test-agent --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--agent AGENT``` |  | Agent ID or name |

