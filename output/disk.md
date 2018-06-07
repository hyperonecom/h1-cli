# TOC

* [h1 disk list](#h1-disk-list)
* [h1 disk show](#h1-disk-show)
* [h1 disk delete](#h1-disk-delete)
* [h1 disk rename](#h1-disk-rename)
* [h1 disk create](#h1-disk-create)
* [h1 disk resume](#h1-disk-resume)
* [h1 disk resize](#h1-disk-resize)
* [h1 disk download](#h1-disk-download)


# Specification

## h1 disk

### Syntax

```h1 disk | ```

## h1 disk list

### Syntax

```h1 disk list | ```

## h1 disk show

### Syntax

```h1 disk show | id```

## h1 disk delete

### Syntax

```h1 disk delete | delete-id```

## h1 disk rename

### Syntax

```h1 disk rename | --new-name NEW-NAME id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--new-name NEW-NAME``` |  | New name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```new-name``` |  | New name |

## h1 disk create

### Syntax

```h1 disk create | --name NAME --type TYPE --size SIZE [--source-file SOURCE-FILE]```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Disk name |
| ```--type TYPE``` |  | Disk type Id |
| ```--size SIZE``` |  | Disk size in GB |
| ```--source-file SOURCE-FILE``` |  | import disk path |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```name``` |  | Disk name |
| ```type``` |  | Disk type Id |
| ```size``` |  | Disk size in GB |
| ```[source-file]``` |  | import disk path |

## h1 disk resume

### Syntax

```h1 disk resume | --source SOURCE id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--source SOURCE``` |  | import disk path |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```source``` |  | import disk path |

## h1 disk resize

### Syntax

```h1 disk resize | --size SIZE id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--size SIZE``` |  | New size |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```size``` |  | New size |

## h1 disk download

### Syntax

```h1 disk download | --destination DESTINATION id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--destination DESTINATION``` |  | destination disk path |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```destination``` |  | destination disk path |

