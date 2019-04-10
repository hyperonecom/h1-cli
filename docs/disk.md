# TOC

  * [h1 disk service](#h1-disk-service) - Manage your services of disk
    * [h1 disk service list](#h1-disk-service-list) - List service for disk
    * [h1 disk service show](#h1-disk-service-show) - Show service for disk
  * [h1 disk list](#h1-disk-list) - List disk
  * [h1 disk delete](#h1-disk-delete) - Delete disk
  * [h1 disk history](#h1-disk-history) - History of disk
  * [h1 disk rename](#h1-disk-rename) - Rename disk
  * [h1 disk create](#h1-disk-create) - Create disk
  * [h1 disk show](#h1-disk-show) - Show disk
  * [h1 disk resize](#h1-disk-resize) - Resize disk
  * [h1 disk resume](#h1-disk-resume) - Resume create upload of disk
  * [h1 disk transfer](#h1-disk-transfer) - Transfer disk to other project
  * [h1 disk download](#h1-disk-download) - Download disk to a .vhdx file
  * [h1 disk tag](#h1-disk-tag) - Manage your tag
    * [h1 disk tag list](#h1-disk-tag-list) - List tag
    * [h1 disk tag add](#h1-disk-tag-add) - Add a tag to disk
    * [h1 disk tag delete](#h1-disk-tag-delete) - Delete a tag of disk


# Specification

## h1 disk

Manage your disk

## h1 disk service

Manage your services of disk

## h1 disk service list

List service for disk

### Syntax

```h1 disk service list | --disk DISK```
### Example

```bash
h1 disk service list --disk test-disk
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |

## h1 disk service show

Show service for disk

### Syntax

```h1 disk service show | --disk DISK --service SERVICE```
### Example

```bash
h1 disk service show --service my-service --disk my-disk
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |
| ```--service SERVICE``` |  | Service for disk ID or name |

## h1 disk list

List disk

### Syntax

```h1 disk list | ```
### Example

```bash
h1 disk list
```

## h1 disk delete

Delete disk

### Syntax

```h1 disk delete | --disk DISK```
### Example

```bash
h1 disk delete --disk my-disk
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |

## h1 disk history

History of disk

### Syntax

```h1 disk history | --disk DISK```
### Example

```bash
h1 disk history --disk my-disk
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |

## h1 disk rename

Rename disk

### Syntax

```h1 disk rename | --disk DISK --new-name NEW-NAME```
### Example

```bash
h1 disk rename --disk my-disk --new-name my-renamed-disk
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 disk create

Create disk

### Syntax

```h1 disk create | --name NAME [--type TYPE] [--size SIZE] [--source-file SOURCE-FILE] [--source-disk SOURCE-DISK] [--no-progress] [--tag TAG [--tag TAG ...]]```
### Examples

#### Create 10 GB SSD disk

```bash
h1 disk create --name db-disk --type ssd --size 10
```

#### Create disk from .vhdx file

```bash
h1 disk create --name new-disk --size 1 --type ssd --source-file ./my-disk.vhdx
```

#### Clone disk

```bash
h1 disk create --name new-disk --source-disk existing-disk
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Disk name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--type TYPE``` |  | Disk type ID or name. Required if no source disk is specified |
| ```--size SIZE``` |  | Disk size in GiB. Required if no source file and no disk is specified |
| ```--source-file SOURCE-FILE``` |  | Path to .vhdx file to import |
| ```--source-disk SOURCE-DISK``` |  | Source disk name or ID used during cloning |
| ```--no-progress``` |  | Disable progress bar |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 disk show

Show disk

### Syntax

```h1 disk show | --disk DISK```
### Example

```bash
h1 disk show --disk my-disk
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |

## h1 disk resize

Resize disk

### Syntax

```h1 disk resize | --disk DISK --size SIZE```
### Example

```bash
h1 disk resize --disk my-disk --size 10
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |
| ```--size SIZE``` |  | New size |

## h1 disk resume

Resume create upload of disk

### Syntax

```h1 disk resume | --disk DISK --source-file SOURCE-FILE```
### Example

```bash
h1 disk resume --disk my-disk --source-file ./my-disk.vhdx
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |
| ```--source-file SOURCE-FILE``` |  | Path to .vhdx file to import |

## h1 disk transfer

Transfer disk to other project

### Syntax

```h1 disk transfer | --disk DISK --new-project NEW-PROJECT```
### Example

```bash
h1 disk transfer --disk test-disk --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 disk download

Download disk to a .vhdx file

### Syntax

```h1 disk download | --disk DISK --destination-file DESTINATION-FILE [--no-progress]```
### Example

```bash
h1 disk download --disk db-disk --destination-file ./my-disk.vhdx
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk name or ID |
| ```--destination-file DESTINATION-FILE``` |  | Path to .vhdx file to save |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--no-progress``` |  | Disable progress bar |

## h1 disk tag

Manage your tag

## h1 disk tag list

List tag

### Syntax

```h1 disk tag list | --disk DISK```
### Example

```bash
h1 disk tag list --disk my-disk
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |

## h1 disk tag add

Add a tag to disk

### Syntax

```h1 disk tag add | --disk DISK [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 disk tag add --disk test-disk --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--disk DISK``` |  | Disk ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 disk tag delete

Delete a tag of disk

### Syntax

```h1 disk tag delete | --tag TAG --disk DISK```
### Example

```bash
h1 disk tag delete --disk test-disk --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--disk DISK``` |  | Disk ID or name |

