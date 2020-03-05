# TOC

  * [h1 container create](#h1-container-create) - Create Container
  * [h1 container recreate](#h1-container-recreate) - Recreate Container
  * [h1 container list](#h1-container-list) - List Container
  * [h1 container show](#h1-container-show) - Show Container
  * [h1 container delete](#h1-container-delete) - Delete Container
  * [h1 container history](#h1-container-history) - History of Container
  * [h1 container rename](#h1-container-rename) - Rename Container
  * [h1 container service](#h1-container-service) - Manage your services of Container
    * [h1 container service list](#h1-container-service-list) - List Service for Container
    * [h1 container service show](#h1-container-service-show) - Show Service for Container
  * [h1 container log](#h1-container-log) - Live logs of Container
  * [h1 container start](#h1-container-start) - Start Container
  * [h1 container stop](#h1-container-stop) - Stop Container
  * [h1 container attach](#h1-container-attach) - Attach to terminal of Container
  * [h1 container process](#h1-container-process) - Manage your process in container
    * [h1 container process list](#h1-container-process-list) - List process in container
  * [h1 container restart](#h1-container-restart) - Restart Container
  * [h1 container tag](#h1-container-tag) - Manage your tag
    * [h1 container tag list](#h1-container-tag-list) - List tag
    * [h1 container tag add](#h1-container-tag-add) - Add a tag to Container
    * [h1 container tag delete](#h1-container-tag-delete) - Delete a tag of Container


# Specification

## h1 container

Manage your Container

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

## h1 container create

Create Container

### Syntax

```h1 container create | --name NAME --image IMAGE --type TYPE [--tag TAG [--tag TAG ...]] [--expose EXPOSE [--expose EXPOSE ...]] [--env ENV [--env ENV ...]] [--volume VOLUME [--volume VOLUME ...]] [--command COMMAND] [--registry-username REGISTRY-USERNAME] [--registry-password REGISTRY-PASSWORD]```
### Examples

#### Create nginx container

```bash
h1 container create --name nginx --type b1.nano --image nginx --expose 80:80
```

#### Create container from image stored in private docker registry

```bash
h1 container create --name nginx --type b1.nano --image registry.example.com/my-app --expose 80:80 --registry-dockercfg reach
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Container name |
| ```--image IMAGE``` |  | Container image eg. h1cr.io/website/php-apache |
| ```--type TYPE``` |  | Container type name or ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--expose EXPOSE [--expose EXPOSE ...]``` |  | Mapping port to expose to the world as external:internal. The parameter may occur repeatedly |
| ```--env ENV [--env ENV ...]``` |  | Add environment variable. The parameter may occur repeatedly |
| ```--volume VOLUME [--volume VOLUME ...]``` |  | Attach a Volume as volumeId/volumePath:containerPath. The parameter may occur repeatedly |
| ```--command COMMAND``` |  | Override the default command |
| ```--registry-username REGISTRY-USERNAME``` |  | Username to access container registry |
| ```--registry-password REGISTRY-PASSWORD``` |  | Username to access container registry |

## h1 container recreate

Recreate Container

### Syntax

```h1 container recreate | --container CONTAINER [--image IMAGE] [--registry-username REGISTRY-USERNAME] [--registry-password REGISTRY-PASSWORD]```
### Examples

#### Update container image

```bash
h1 container recreate --container my-container --image mysql:8
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Container image eg. h1cr.io/website/php-apache |
| ```--registry-username REGISTRY-USERNAME``` |  | Username to access container registry |
| ```--registry-password REGISTRY-PASSWORD``` |  | Username to access container registry |

## h1 container list

List Container

### Syntax

```h1 container list | ```
### Example

```bash
h1 container list
```

## h1 container show

Show Container

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

## h1 container delete

Delete Container

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

History of Container

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

Rename Container

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

## h1 container service

Manage your services of Container

## h1 container service list

List Service for Container

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

Show Service for Container

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
| ```--service SERVICE``` |  | Service for Container ID or name |

## h1 container log

Live logs of Container

### Syntax

```h1 container log | --container CONTAINER [--log-file LOG-FILE] [--head HEAD]```
### Example

```
h1 container log --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log-file LOG-FILE``` |  | Path of output log file |
| ```--head HEAD``` |  | Number of incoming messages to show |

## h1 container start

Start Container

### Syntax

```h1 container start | --container CONTAINER```
### Example

```
h1 container start --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container stop

Stop Container

### Syntax

```h1 container stop | --container CONTAINER```
### Example

```
h1 container stop --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container attach

Attach to terminal of Container

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

## h1 container restart

Restart Container

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

Add a tag to Container

### Syntax

```h1 container tag add | --tag TAG [--tag TAG ...] --container CONTAINER```
### Example

```bash
h1 container tag add --container test-container --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container tag delete

Delete a tag of Container

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

