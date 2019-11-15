# TOC

  * [h1 vmhost create](#h1-vmhost-create) - Create Dedicated host
  * [h1 vmhost list](#h1-vmhost-list) - List Dedicated host
  * [h1 vmhost show](#h1-vmhost-show) - Show Dedicated host
  * [h1 vmhost delete](#h1-vmhost-delete) - Delete Dedicated host
  * [h1 vmhost history](#h1-vmhost-history) - History of Dedicated host
  * [h1 vmhost rename](#h1-vmhost-rename) - Rename Dedicated host
  * [h1 vmhost service](#h1-vmhost-service) - Manage your services of Dedicated host
    * [h1 vmhost service list](#h1-vmhost-service-list) - List Service for Dedicated host
    * [h1 vmhost service show](#h1-vmhost-service-show) - Show Service for Dedicated host
  * [h1 vmhost inspect](#h1-vmhost-inspect) - Inspect of Dedicated host
  * [h1 vmhost tag](#h1-vmhost-tag) - Manage your tag
    * [h1 vmhost tag list](#h1-vmhost-tag-list) - List tag
    * [h1 vmhost tag add](#h1-vmhost-tag-add) - Add a tag to Dedicated host
    * [h1 vmhost tag delete](#h1-vmhost-tag-delete) - Delete a tag of Dedicated host


# Specification

## h1 vmhost

Manage your Dedicated host

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

### Examples

#### Create Agent with SSH credential

```bash
h1 vmhost create --name my-agent --type container --ssh-file ./id_rsa.pub
```

## h1 vmhost create

Create Dedicated host

### Syntax

```h1 vmhost create | --name NAME [--tag TAG [--tag TAG ...]]```
### Examples

#### Create Agent with SSH credential

```bash
h1 vmhost create --name my-agent --type container --ssh-file ./id_rsa.pub
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Agent name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 vmhost list

List Dedicated host

### Syntax

```h1 vmhost list | ```
### Example

```bash
h1 vmhost list
```

## h1 vmhost show

Show Dedicated host

### Syntax

```h1 vmhost show | --vmhost VMHOST```
### Example

```bash
h1 vmhost show --vmhost my-vmhost
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vmhost VMHOST``` |  | Dedicated host ID or name |

## h1 vmhost delete

Delete Dedicated host

### Syntax

```h1 vmhost delete | --vmhost VMHOST```
### Example

```bash
h1 vmhost delete --vmhost my-vmhost
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vmhost VMHOST``` |  | Dedicated host ID or name |

## h1 vmhost history

History of Dedicated host

### Syntax

```h1 vmhost history | --vmhost VMHOST```
### Example

```bash
h1 vmhost history --vmhost my-vmhost
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vmhost VMHOST``` |  | Dedicated host ID or name |

## h1 vmhost rename

Rename Dedicated host

### Syntax

```h1 vmhost rename | --vmhost VMHOST --new-name NEW-NAME```
### Example

```bash
h1 vmhost rename --vmhost my-vmhost --new-name my-renamed-vmhost
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vmhost VMHOST``` |  | Dedicated host ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 vmhost service

Manage your services of Dedicated host

## h1 vmhost service list

List Service for Dedicated host

### Syntax

```h1 vmhost service list | --vmhost VMHOST```
### Example

```bash
h1 vmhost service list --vmhost test-vmhost
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vmhost VMHOST``` |  | Dedicated host ID or name |

## h1 vmhost service show

Show Service for Dedicated host

### Syntax

```h1 vmhost service show | --vmhost VMHOST --service SERVICE```
### Example

```bash
h1 vmhost service show --service my-service --vmhost my-vmhost
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vmhost VMHOST``` |  | Dedicated host ID or name |
| ```--service SERVICE``` |  | Service for Dedicated host ID or name |

## h1 vmhost inspect

Inspect of Dedicated host

### Syntax

```h1 vmhost inspect | --vmhost VMHOST```
### Example

```bash
h1 vmhost inspect --vmhost my-vmhost --source-file ./my-vmhost.vhdx
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vmhost VMHOST``` |  | Dedicated host ID or name |

## h1 vmhost tag

Manage your tag

## h1 vmhost tag list

List tag

### Syntax

```h1 vmhost tag list | --vmhost VMHOST```
### Example

```bash
h1 vmhost tag list --vmhost my-vmhost
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vmhost VMHOST``` |  | Dedicated host ID or name |

## h1 vmhost tag add

Add a tag to Dedicated host

### Syntax

```h1 vmhost tag add | --tag TAG [--tag TAG ...] --vmhost VMHOST```
### Example

```bash
h1 vmhost tag add --vmhost test-vmhost --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--vmhost VMHOST``` |  | Dedicated host ID or name |

## h1 vmhost tag delete

Delete a tag of Dedicated host

### Syntax

```h1 vmhost tag delete | --tag TAG --vmhost VMHOST```
### Example

```bash
h1 vmhost tag delete --vmhost test-vmhost --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--vmhost VMHOST``` |  | Dedicated host ID or name |

