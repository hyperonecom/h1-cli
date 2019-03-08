# TOC

  * [h1 volume list](#h1-volume-list) - List volume
  * [h1 volume show](#h1-volume-show) - Show volume
  * [h1 volume delete](#h1-volume-delete) - Delete volume
  * [h1 volume history](#h1-volume-history) - History of volume
  * [h1 volume rename](#h1-volume-rename) - Rename volume
  * [h1 volume service](#h1-volume-service) - Manage your services of volume
    * [h1 volume service list](#h1-volume-service-list) - List service for volume
    * [h1 volume service show](#h1-volume-service-show) - Show service for volume
  * [h1 volume resize](#h1-volume-resize) - Resize volume
  * [h1 volume create](#h1-volume-create) - Create volume
  * [h1 volume tag](#h1-volume-tag) - Manage your tag
    * [h1 volume tag list](#h1-volume-tag-list) - List tag
    * [h1 volume tag add](#h1-volume-tag-add) - Add a tag to volume
    * [h1 volume tag delete](#h1-volume-tag-delete) - Delete a tag of volume


# Specification

## h1 volume

Manage your volume

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

## h1 volume list

List volume

### Syntax

```h1 volume list | ```
### Example

```bash
h1 volume list
```

## h1 volume show

Show volume

### Syntax

```h1 volume show | --volume VOLUME```
### Example

```bash
h1 volume show --volume my-volume
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--volume VOLUME``` |  | Volume ID or name |

## h1 volume delete

Delete volume

### Syntax

```h1 volume delete | --volume VOLUME```
### Example

```bash
h1 volume delete --volume my-volume
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--volume VOLUME``` |  | Volume ID or name |

## h1 volume history

History of volume

### Syntax

```h1 volume history | --volume VOLUME```
### Example

```bash
h1 volume history --volume my-volume
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--volume VOLUME``` |  | Volume ID or name |

## h1 volume rename

Rename volume

### Syntax

```h1 volume rename | --volume VOLUME --new-name NEW-NAME```
### Example

```bash
h1 volume rename --volume my-volume --new-name my-renamed-volume
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--volume VOLUME``` |  | Volume ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 volume service

Manage your services of volume

## h1 volume service list

List service for volume

### Syntax

```h1 volume service list | --volume VOLUME```
### Example

```bash
h1 volume service list --volume test-volume
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--volume VOLUME``` |  | Volume ID or name |

## h1 volume service show

Show service for volume

### Syntax

```h1 volume service show | --volume VOLUME --service SERVICE```
### Example

```bash
h1 volume service show --service my-service --volume my-volume
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--volume VOLUME``` |  | Volume ID or name |
| ```--service SERVICE``` |  | Service for volume ID or name |

## h1 volume resize

Resize volume

### Syntax

```h1 volume resize | --volume VOLUME --size SIZE```
### Example

```bash
h1 volume resize --volume my-volume --size 10
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--volume VOLUME``` |  | Volume ID or name |
| ```--size SIZE``` |  | New size |

## h1 volume create

Create volume

### Syntax

```h1 volume create | --name NAME --type TYPE --size SIZE [--tag TAG [--tag TAG ...]]```
### Examples

#### Create 10 GB SSD disk

```bash
h1 volume create --name db-disk --type ssd --size 10
```

#### Create disk from .vhdx file

```bash
h1 volume create --name new-disk --size 1 --type ssd --source-file ./my-disk.vhdx
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Disk name |
| ```--type TYPE``` |  | Disk type ID or name |
| ```--size SIZE``` |  | Disk size in GiB |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 volume tag

Manage your tag

## h1 volume tag list

List tag

### Syntax

```h1 volume tag list | --volume VOLUME```
### Example

```bash
h1 volume tag list --volume my-volume
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--volume VOLUME``` |  | Volume ID or name |

## h1 volume tag add

Add a tag to volume

### Syntax

```h1 volume tag add | --volume VOLUME [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 volume tag add --volume test-volume --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--volume VOLUME``` |  | Volume ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 volume tag delete

Delete a tag of volume

### Syntax

```h1 volume tag delete | --tag TAG --volume VOLUME```
### Example

```bash
h1 volume tag delete --volume test-volume --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--volume VOLUME``` |  | Volume ID or name |

