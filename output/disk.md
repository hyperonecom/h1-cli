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

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 disk delete

### Syntax

```h1 disk delete | --delete-id DELETE-ID```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 disk rename

### Syntax

```h1 disk rename | --new-name NEW-NAME id```

### Required options

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

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Disk name |
| ```--type TYPE``` |  | Disk type Id |
| ```--size SIZE``` |  | Disk size in GB |
| ```--source-file SOURCE-FILE``` |  | import disk path |

## h1 disk resume

### Syntax

```h1 disk resume | --source SOURCE id```

### Required options

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

### Required options

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

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--destination DESTINATION``` |  | destination disk path |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

