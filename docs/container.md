# TOC

 * [h1 container list](#h1-container-list) - List container
 * [h1 container show](#h1-container-show) - Show container
 * [h1 container delete](#h1-container-delete) - Delete container
 * [h1 container rename](#h1-container-rename) - Rename container
 * [h1 container create](#h1-container-create) - container create
 * [h1 container stop](#h1-container-stop) - Stop container
 * [h1 container start](#h1-container-start) - Start container
 * [h1 container logs](#h1-container-logs) - container logs


# Specification

## h1 container

Manage your container

## h1 container list

List container

### Syntax

```h1 container list | ```

## h1 container show

Show container

### Syntax

```h1 container show | --container CONTAINER```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container delete

Delete container

### Syntax

```h1 container delete | --container CONTAINER```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container rename

Rename container

### Syntax

```h1 container rename | --container CONTAINER --new-name NEW-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 container create

container create

### Syntax

```h1 container create | --name NAME --image IMAGE --type TYPE [--expose EXPOSE] [--env ENV [--env ENV ...]] [--command COMMAND]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--image IMAGE``` |  | Image |
| ```--type TYPE``` |  | Type |
| ```[--expose EXPOSE]``` |  | Port to expose to the world using http/https |
| ```[--env ENV [--env ENV ...]]``` |  | Add enviroment variable. The parameter may occur repeatedly |
| ```[--command COMMAND]``` |  | Override the default command |

## h1 container stop

Stop container

### Syntax

```h1 container stop | --container CONTAINER```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | container ID or name |

## h1 container start

Start container

### Syntax

```h1 container start | --container CONTAINER```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | container ID or name |

## h1 container logs

container logs

### Syntax

```h1 container logs | --container CONTAINER [--follow]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | container ID or name |
| ```[--follow]``` |  | Follow log output |

