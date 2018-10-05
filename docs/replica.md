# TOC

  * [h1 replica list](#h1-replica-list) - List replica
  * [h1 replica show](#h1-replica-show) - Show replica
  * [h1 replica delete](#h1-replica-delete) - Delete replica
  * [h1 replica history](#h1-replica-history) - History of replica
  * [h1 replica rename](#h1-replica-rename) - Rename replica
  * [h1 replica tag](#h1-replica-tag) - Manage your tag
    * [h1 replica tag list](#h1-replica-tag-list) - List tag
    * [h1 replica tag add](#h1-replica-tag-add) - Add a tag to replica
    * [h1 replica tag delete](#h1-replica-tag-delete) - Delete a tag of replica
  * [h1 replica create](#h1-replica-create) - Setup VM replication


# Specification

## h1 replica

Manage your replica

## h1 replica list

List replica

### Syntax

```h1 replica list | ```
### Example

```bash
h1 replica list
```

## h1 replica show

Show replica

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

Delete replica

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

History of replica

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

Rename replica

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

Add a tag to replica

### Syntax

```h1 replica tag add | --replica REPLICA [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 replica tag add --replica test-replica --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--replica REPLICA``` |  | Replica ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 replica tag delete

Delete a tag of replica

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

## h1 replica create

Setup VM replication

### Syntax

```h1 replica create | --local-vm LOCAL-VM [--autostart]```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--local-vm LOCAL-VM``` |  | Local virtual machine ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--autostart``` |  | Automatically start replication immediately after configuration |

