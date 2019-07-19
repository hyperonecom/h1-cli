# TOC

  * [h1 replica list](#h1-replica-list) - List Replica
  * [h1 replica show](#h1-replica-show) - Show Replica
  * [h1 replica delete](#h1-replica-delete) - Delete Replica
  * [h1 replica history](#h1-replica-history) - History of Replica
  * [h1 replica rename](#h1-replica-rename) - Rename Replica
  * [h1 replica service](#h1-replica-service) - Manage your services of Replica
    * [h1 replica service list](#h1-replica-service-list) - List Service for Replica
    * [h1 replica service show](#h1-replica-service-show) - Show Service for Replica
  * [h1 replica create](#h1-replica-create) - Setup VM replication
  * [h1 replica disk](#h1-replica-disk) - Manage your Disk of Replica
    * [h1 replica disk list](#h1-replica-disk-list) - List Disk of Replica
  * [h1 replica tag](#h1-replica-tag) - Manage your tag
    * [h1 replica tag list](#h1-replica-tag-list) - List tag
    * [h1 replica tag add](#h1-replica-tag-add) - Add a tag to Replica
    * [h1 replica tag delete](#h1-replica-tag-delete) - Delete a tag of Replica


# Specification

## h1 replica

Manage your Replica

## h1 replica list

List Replica

### Syntax

```h1 replica list | ```
### Example

```bash
h1 replica list
```

## h1 replica show

Show Replica

### Syntax

```h1 replica show | --replica REPLICA```
### Example

```bash
h1 replica show --replica my-replica
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--replica REPLICA``` |  | Replica ID or name |

## h1 replica delete

Delete Replica

### Syntax

```h1 replica delete | --replica REPLICA```
### Example

```bash
h1 replica delete --replica my-replica
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--replica REPLICA``` |  | Replica ID or name |

## h1 replica history

History of Replica

### Syntax

```h1 replica history | --replica REPLICA```
### Example

```bash
h1 replica history --replica my-replica
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--replica REPLICA``` |  | Replica ID or name |

## h1 replica rename

Rename Replica

### Syntax

```h1 replica rename | --replica REPLICA --new-name NEW-NAME```
### Example

```bash
h1 replica rename --replica my-replica --new-name my-renamed-replica
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--replica REPLICA``` |  | Replica ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 replica service

Manage your services of Replica

## h1 replica service list

List Service for Replica

### Syntax

```h1 replica service list | --replica REPLICA```
### Example

```bash
h1 replica service list --replica test-replica
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--replica REPLICA``` |  | Replica ID or name |

## h1 replica service show

Show Service for Replica

### Syntax

```h1 replica service show | --replica REPLICA --service SERVICE```
### Example

```bash
h1 replica service show --service my-service --replica my-replica
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--replica REPLICA``` |  | Replica ID or name |
| ```--service SERVICE``` |  | Service for Replica ID or name |

## h1 replica create

Setup VM replication

### Syntax

```h1 replica create | --local-vm LOCAL-VM [--autostart]```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--local-vm LOCAL-VM``` |  | Local virtual machine name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--autostart``` |  | Automatically start replication immediately after configuration |

## h1 replica disk

Manage your Disk of Replica

## h1 replica disk list

List Disk of Replica

### Syntax

```h1 replica disk list | --replica REPLICA```
### Example

```bash
h1 replica disk list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--replica REPLICA``` |  | Replica name or ID |

## h1 replica tag

Manage your tag

## h1 replica tag list

List tag

### Syntax

```h1 replica tag list | --replica REPLICA```
### Example

```bash
h1 replica tag list --replica my-replica
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--replica REPLICA``` |  | Replica ID or name |

## h1 replica tag add

Add a tag to Replica

### Syntax

```h1 replica tag add | --tag TAG [--tag TAG ...] --replica REPLICA```
### Example

```bash
h1 replica tag add --replica test-replica --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--replica REPLICA``` |  | Replica ID or name |

## h1 replica tag delete

Delete a tag of Replica

### Syntax

```h1 replica tag delete | --tag TAG --replica REPLICA```
### Example

```bash
h1 replica tag delete --replica test-replica --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--replica REPLICA``` |  | Replica ID or name |

