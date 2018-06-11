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

```h1 disk show | --disk DISK```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |

## h1 disk delete

### Syntax

```h1 disk delete | --disk DISK```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |

## h1 disk rename

### Syntax

```h1 disk rename | --disk DISK --new-name NEW-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 disk create

### Syntax

```h1 disk create | --name NAME --type TYPE --size SIZE [--source-file SOURCE-FILE]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Disk name |
| ```--type TYPE``` |  | Disk type ID or name |
| ```--size SIZE``` |  | Disk size in GB |
| ```--source-file SOURCE-FILE``` |  | Path to .vhdx file to import |

## h1 disk resume

### Syntax

```h1 disk resume | --disk DISK --source-file SOURCE-FILE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |
| ```--source-file SOURCE-FILE``` |  | Path to .vhdx file to import |

## h1 disk resize

### Syntax

```h1 disk resize | --disk DISK --size SIZE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |
| ```--size SIZE``` |  | New size |

## h1 disk download

### Syntax

```h1 disk download | --disk DISK --destination-file DESTINATION-FILE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk name or ID |
| ```--destination-file DESTINATION-FILE``` |  | Path to .vhdx file to save |

