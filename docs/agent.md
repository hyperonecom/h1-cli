# TOC

  * [h1 agent create](#h1-agent-create) - Create Agent
  * [h1 agent list](#h1-agent-list) - List Agent
  * [h1 agent delete](#h1-agent-delete) - Delete Agent
  * [h1 agent history](#h1-agent-history) - History of Agent
  * [h1 agent rename](#h1-agent-rename) - Rename Agent
  * [h1 agent show](#h1-agent-show) - Show Agent
  * [h1 agent service](#h1-agent-service) - Manage your services of Agent
    * [h1 agent service list](#h1-agent-service-list) - List service for Agent
    * [h1 agent service show](#h1-agent-service-show) - Show service for Agent
  * [h1 agent start](#h1-agent-start) - Start Agent
  * [h1 agent suspend](#h1-agent-suspend) - Suspend Agent
  * [h1 agent credential](#h1-agent-credential) - Manage your credentials to Agent
    * [h1 agent credential cert](#h1-agent-credential-cert) - Manage your certificate to Vault
      * [h1 agent credential cert show](#h1-agent-credential-cert-show) - Show certificate to Vault
      * [h1 agent credential cert rename](#h1-agent-credential-cert-rename) - Rename certificate to Vault
      * [h1 agent credential cert list](#h1-agent-credential-cert-list) - List certificate to Vault
      * [h1 agent credential cert delete](#h1-agent-credential-cert-delete) - Delete certificate to Vault
      * [h1 agent credential cert add](#h1-agent-credential-cert-add) - Add certificate to Agent
  * [h1 agent tag](#h1-agent-tag) - Manage your tag
    * [h1 agent tag list](#h1-agent-tag-list) - List tag
    * [h1 agent tag add](#h1-agent-tag-add) - Add a tag to Agent
    * [h1 agent tag delete](#h1-agent-tag-delete) - Delete a tag of Agent


# Specification

## h1 agent

Manage your Agent

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

## h1 agent start

Start Agent

### Syntax

```h1 agent start | --vault VAULT```
### Example

```
h1 agent start --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Agent ID or name |

## h1 agent suspend

Suspend Agent

### Syntax

```h1 agent suspend | --vault VAULT```
### Example

```
h1 agent suspend --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Agent ID or name |

## h1 agent credential

Manage your credentials to Agent

## h1 agent credential cert

Manage your certificate to Vault

## h1 agent credential cert show

Show certificate to Vault

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
| ```--cert CERT``` |  | Certificate to Vault ID or name |

## h1 agent credential cert rename

Rename certificate to Vault

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
| ```--cert CERT``` |  | Certificate to Vault ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 agent credential cert list

List certificate to Vault

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

Delete certificate to Vault

### Syntax

```h1 agent credential cert delete | --agent AGENT --cert CERT```
### Example

```bash
h1 agent credential cert delete --cert my-cert --agent my-agent
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--agent AGENT``` |  | Agent ID or name |
| ```--cert CERT``` |  | Certificate to Vault ID or name |

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

