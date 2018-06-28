# TOC

  * [h1 disk list](#h1-disk-list) - List disk
  * [h1 disk show](#h1-disk-show) - Show disk
  * [h1 disk delete](#h1-disk-delete) - Delete disk
  * [h1 disk rename](#h1-disk-rename) - Rename disk
  * [h1 disk create](#h1-disk-create) - Create disk
  * [h1 disk resume](#h1-disk-resume) - Resume create upload of disk
  * [h1 disk resize](#h1-disk-resize) - Resize disk
  * [h1 disk download](#h1-disk-download) - Download disk to a file


# Specification

## h1 disk

Manage your disk

## h1 disk list

List disk

### Syntax

```h1 disk list | ```

## h1 disk show

Show disk

### Syntax

```h1 disk show | --disk DISK```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |

## h1 disk delete

Delete disk

### Syntax

```h1 disk delete | --disk DISK```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |

## h1 disk rename

Rename disk

### Syntax

```h1 disk rename | --disk DISK --new-name NEW-NAME```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 disk create

Create disk

### Syntax

```h1 disk create | --name NAME --type TYPE --size SIZE [--source-file SOURCE-FILE] [--no-progress]```

### Examples

#### Create 10 GB SSD disk

```bash
h1 disk create --name db-disk --type ssd --size 10
```

#### Create disk from .vkdx file

TODO

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Disk name |
| ```--type TYPE``` |  | Disk type ID or name |
| ```--size SIZE``` |  | Disk size in GB |
| ```[--source-file SOURCE-FILE]``` |  | Path to .vhdx file to import |
| ```[--no-progress]``` |  | Disable progress bar |

## h1 disk resume

Resume create upload of disk

### Syntax

```h1 disk resume | --disk DISK --source-file SOURCE-FILE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |
| ```--source-file SOURCE-FILE``` |  | Path to .vhdx file to import |

## h1 disk resize

Resize disk

### Syntax

```h1 disk resize | --disk DISK --size SIZE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |
| ```--size SIZE``` |  | New size |

## h1 disk download

Download disk to a file

### Syntax

```h1 disk download | --disk DISK --destination-file DESTINATION-FILE [--no-progress]```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk name or ID |
| ```--destination-file DESTINATION-FILE``` |  | Path to .vhdx file to save |
| ```[--no-progress]``` |  | Disable progress bar |

