# TOC

  * [h1 snapshot list](#h1-snapshot-list) - List snapshot
  * [h1 snapshot show](#h1-snapshot-show) - Show snapshot
  * [h1 snapshot delete](#h1-snapshot-delete) - Delete snapshot
  * [h1 snapshot rename](#h1-snapshot-rename) - Rename snapshot


# Specification

## h1 snapshot

Manage your snapshot

## h1 snapshot list

List snapshot

### Syntax

```h1 snapshot list | ```

## h1 snapshot show

Show snapshot

### Syntax

```h1 snapshot show | --snapshot SNAPSHOT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |

## h1 snapshot delete

Delete snapshot

### Syntax

```h1 snapshot delete | --snapshot SNAPSHOT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |

## h1 snapshot rename

Rename snapshot

### Syntax

```h1 snapshot rename | --snapshot SNAPSHOT --new-name NEW-NAME```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |
| ```--new-name NEW-NAME``` |  | New name |

