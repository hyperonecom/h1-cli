# TOC

* [h1 list](#h1-list)
* [h1 show](#h1-show)
* [h1 delete](#h1-delete)
* [h1 rename](#h1-rename)
* [h1 create](#h1-create)
* [h1 resume](#h1-resume)
* [h1 resize](#h1-resize)
* [h1 download](#h1-download)


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

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 disk delete

### Syntax

```h1 disk delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

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
| ```id``` |  | Resource identifier |

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
| ```id``` |  | Resource name or ID |

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
| ```id``` |  | Resource name or ID |

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
| ```id``` |  | Resource identifier |

