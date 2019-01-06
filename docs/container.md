# TOC

  * [h1 container service](#h1-container-service) - Manage your services of container
    * [h1 container service list](#h1-container-service-list) - List service for container
    * [h1 container service show](#h1-container-service-show) - Show service for container
  * [h1 container list](#h1-container-list) - List container
  * [h1 container delete](#h1-container-delete) - Delete container
  * [h1 container history](#h1-container-history) - History of container
  * [h1 container rename](#h1-container-rename) - Rename container
  * [h1 container recreate](#h1-container-recreate) - Recreate container
  * [h1 container show](#h1-container-show) - Show container
  * [h1 container create](#h1-container-create) - Create container
  * [h1 container ps](#h1-container-ps) - Process list of container
  * [h1 container attach](#h1-container-attach) - Attach to terminal of container
  * [h1 container recreateHost](#h1-container-recreatehost) - RecreateHost container
  * [h1 container tag](#h1-container-tag) - Manage your tag
    * [h1 container tag list](#h1-container-tag-list) - List tag
    * [h1 container tag add](#h1-container-tag-add) - Add a tag to container
    * [h1 container tag delete](#h1-container-tag-delete) - Delete a tag of container


# Specification

## h1 container

Manage your container

## h1 container service

Manage your services of container

## h1 container service list

List service for container

### Syntax

```h1 container service list | --container CONTAINER```
### Example

```bash
h1 container service list --container test-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container service show

Show service for container

### Syntax

```h1 container service show | --container CONTAINER --service SERVICE```
### Example

```bash
h1 container service show --service my-service --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |
| ```--service SERVICE``` |  | Service for container ID or name |

## h1 container list

List container

### Syntax

```h1 container list | ```
### Example

```bash
h1 container list
```

## h1 container delete

Delete container

### Syntax

```h1 container delete | --container CONTAINER```
### Example

```bash
h1 container delete --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container history

History of container

### Syntax

```h1 container history | --container CONTAINER```
### Example

```bash
h1 container history --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container rename

Rename container

### Syntax

```h1 container rename | --container CONTAINER --new-name NEW-NAME```
### Example

```bash
h1 container rename --container my-container --new-name my-renamed-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 container recreate

Recreate container

### Syntax

```h1 container recreate | --container CONTAINER```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container show

Show container

### Syntax

```h1 container show | --container CONTAINER```
### Example

```bash
h1 container show --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container create

Create container

### Syntax

```h1 container create | --name NAME --image IMAGE [--expose EXPOSE] [--tag TAG [--tag TAG ...]]```
### Examples

#### Create 10 GB SSD disk

```bash
h1 container create --name db-disk --type ssd --size 10
```

#### Create disk from .vhdx file

```bash
h1 container create --name new-disk --size 1 --type ssd --source-file ./my-disk.vhdx
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Disk name |
| ```--image IMAGE``` |  | Container image |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--expose EXPOSE``` |  | Port exposed publicly |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 container ps

Process list of container

### Syntax

```h1 container ps | --container CONTAINER```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container attach

Attach to terminal of container

### Syntax

```h1 container attach | --container CONTAINER```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container recreateHost

RecreateHost container

### Syntax

```h1 container recreateHost | --container CONTAINER```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container tag

Manage your tag

## h1 container tag list

List tag

### Syntax

```h1 container tag list | --container CONTAINER```
### Example

```bash
h1 container tag list --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container tag add

Add a tag to container

### Syntax

```h1 container tag add | --container CONTAINER [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 container tag add --container test-container --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 container tag delete

Delete a tag of container

### Syntax

```h1 container tag delete | --tag TAG --container CONTAINER```
### Example

```bash
h1 container tag delete --container test-container --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--container CONTAINER``` |  | Container ID or name |

