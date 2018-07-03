# TOC

  * [h1 snapshot list](#h1-snapshot-list) - List snapshot
  * [h1 snapshot show](#h1-snapshot-show) - Show snapshot
  * [h1 snapshot delete](#h1-snapshot-delete) - Delete snapshot
  * [h1 snapshot history](#h1-snapshot-history) - History of snapshot
  * [h1 snapshot rename](#h1-snapshot-rename) - Rename snapshot
  * [h1 snapshot create](#h1-snapshot-create) - Create a snapshot of Vault


# Specification

## h1 snapshot

Manage your snapshot

## h1 snapshot list

List snapshot

### Syntax

```h1 snapshot list | ```

### Example

```bash
h1 snapshot list
```

### Examples

```bash
h1 snapshot list
```

## h1 snapshot show

Show snapshot

### Syntax

```h1 snapshot show | --snapshot SNAPSHOT```

### Example

```bash
h1 snapshot show --snapshot my-snapshot
```

### Examples

```bash
h1 snapshot show --snapshot my-snapshot
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |

## h1 snapshot delete

Delete snapshot

### Syntax

```h1 snapshot delete | --snapshot SNAPSHOT```

### Example

```bash
h1 snapshot delete --snapshot my-snapshot
```

### Examples

```bash
h1 snapshot delete --snapshot my-snapshot
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |

## h1 snapshot history

History of snapshot

### Syntax

```h1 snapshot history | --snapshot SNAPSHOT```

### Example

```bash
h1 snapshot history --snapshot my-snapshot
```

### Examples

```bash
h1 snapshot history --snapshot my-snapshot
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |

## h1 snapshot rename

Rename snapshot

### Syntax

```h1 snapshot rename | --snapshot SNAPSHOT --new-name NEW-NAME```

### Example

```bash
h1 snapshot rename --snapshot my-snapshot --new-name my-renamed-snapshot
```

### Examples

```bash
h1 snapshot rename --snapshot my-snapshot --new-name my-renamed-snapshot
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 snapshot create

Create a snapshot of Vault

### Syntax

```h1 snapshot create | --vault VAULT --name NAME```

### Examples

#### Perform a snapshot of a Vault

```bash
h1 snapshot create --vault my-vault --name
```

### Examples

#### Perform a snapshot of a Vault

```bash
h1 snapshot create --vault my-vault --name
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--name NAME``` |  | Snapshot name |

