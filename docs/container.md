# TOC

  * [h1 container create](#h1-container-create) - Create container
  * [h1 container list](#h1-container-list) - List container
  * [h1 container delete](#h1-container-delete) - Delete container
  * [h1 container history](#h1-container-history) - History of container
  * [h1 container rename](#h1-container-rename) - Rename container
  * [h1 container start](#h1-container-start) - Start container
  * [h1 container service](#h1-container-service) - Manage your services of container
    * [h1 container service list](#h1-container-service-list) - List service for container
    * [h1 container service show](#h1-container-service-show) - Show service for container
  * [h1 container show](#h1-container-show) - Show container
  * [h1 container attach](#h1-container-attach) - Attach to terminal of container
  * [h1 container process](#h1-container-process) - Manage your process in container
    * [h1 container process list](#h1-container-process-list) - List process in container
  * [h1 container log](#h1-container-log) - Logs of container
  * [h1 container stop](#h1-container-stop) - Stop container
  * [h1 container restart](#h1-container-restart) - Restart container
  * [h1 container tag](#h1-container-tag) - Manage your tag
    * [h1 container tag list](#h1-container-tag-list) - List tag
    * [h1 container tag add](#h1-container-tag-add) - Add a tag to container
    * [h1 container tag delete](#h1-container-tag-delete) - Delete a tag of container


# Specification

## h1 container

Manage your container

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

## h1 container create

Create container

### Syntax

```h1 container create | --name NAME --image IMAGE --type TYPE [--registry-username REGISTRY-USERNAME] [--registry-password REGISTRY-PASSWORD] [--registry-dockercfg] [--expose EXPOSE [--expose EXPOSE ...]] [--env ENV [--env ENV ...]] [--volume VOLUME [--volume VOLUME ...]] [--command COMMAND] [--tag TAG [--tag TAG ...]]```
### Examples

#### Create nginx container

```bash
h1 container create --name nginx --type container --image nginx --expose 80:80
```

#### Create container from image stored in private docker registry

```bash
h1 container create --name nginx --type container --image registry.example.com/my-app --expose 80:80 --registry-dockercfg reach
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--image IMAGE``` |  | Image |
| ```--type TYPE``` |  | Type |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry-username REGISTRY-USERNAME``` |  | Username to access container registry |
| ```--registry-password REGISTRY-PASSWORD``` |  | Username to access container registry |
| ```--registry-dockercfg``` |  | Use credentials from .dockercfg |
| ```--expose EXPOSE [--expose EXPOSE ...]``` |  | Mapping port to expose to the world as external:internal. The parameter may occur repeatedly |
| ```--env ENV [--env ENV ...]``` |  | Add environment variable. The parameter may occur repeatedly |
| ```--volume VOLUME [--volume VOLUME ...]``` |  | Attach a volume as volumeId/volumePath:containerPath. The parameter may occur repeatedly |
| ```--command COMMAND``` |  | Override the default command |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

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

## h1 container start

Start container

### Syntax

```h1 container start | --container CONTAINER```
### Example

```
h1 container start --agent my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

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

## h1 container attach

Attach to terminal of container

### Syntax

```h1 container attach | --container CONTAINER```
### Example

```
h1 container attach --agent my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container process

Manage your process in container

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

## h1 container process list

List process in container

### Syntax

```h1 container process list | --container CONTAINER```
### Example

```bash
h1 container process list --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container log

Logs of container

### Syntax

```h1 container log | --container CONTAINER [--follow] [--log-file LOG-FILE]```
### Example

```
h1 container log --agent my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--follow``` |  | Output current messages in real time as they arrive |
| ```--log-file LOG-FILE``` |  | Path of output log file |

## h1 container stop

Stop container

### Syntax

```h1 container stop | --container CONTAINER```
### Example

```
h1 container stop --agent my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container restart

Restart container

### Syntax

```h1 container restart | --container CONTAINER```
### Example

```
h1 container restart --agent my-container
```

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

