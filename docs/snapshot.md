# TOC

  * [h1 snapshot list](#h1-snapshot-list) - List snapshot
  * [h1 snapshot show](#h1-snapshot-show) - Show snapshot
  * [h1 snapshot delete](#h1-snapshot-delete) - Delete snapshot
  * [h1 snapshot history](#h1-snapshot-history) - History of snapshot
  * [h1 snapshot rename](#h1-snapshot-rename) - Rename snapshot
  * [h1 snapshot tag](#h1-snapshot-tag) - Manage your tag
    * [h1 snapshot tag list](#h1-snapshot-tag-list) - List tag
    * [h1 snapshot tag add](#h1-snapshot-tag-add) - Add a tag to snapshot
    * [h1 snapshot tag delete](#h1-snapshot-tag-delete) - Delete a tag of snapshot
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
## h1 snapshot show

Show snapshot

### Syntax

```h1 snapshot show | --snapshot SNAPSHOT```
### Example

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
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 snapshot tag

Manage your tag

## h1 snapshot tag list

List tag

### Syntax

```h1 snapshot tag list | --snapshot SNAPSHOT```
### Example

```bash
h1 snapshot tag list --snapshot my-snapshot
```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |

## h1 snapshot tag add

Add a tag to snapshot

### Syntax

```h1 snapshot tag add | --snapshot SNAPSHOT [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 snapshot tag add --snapshot test-snapshot --tag prod=true
```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 snapshot tag delete

Delete a tag of snapshot

### Syntax

```h1 snapshot tag delete | --tag TAG --snapshot SNAPSHOT```
### Example

```bash
h1 snapshot tag delete --snapshot test-snapshot --tag prod
```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |

## h1 snapshot create

Create a snapshot of Vault

### Syntax

```h1 snapshot create | --vault VAULT --name NAME [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 snapshot create --vault my-vault --name my-new-snapshot
```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--name NAME``` |  | Snapshot name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

