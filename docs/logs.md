# TOC

  * [h1 logs delete](#h1-logs-delete) - Delete logs archive
  * [h1 logs rename](#h1-logs-rename) - Rename logs archive
  * [h1 logs list](#h1-logs-list) - List logs archive
  * [h1 logs history](#h1-logs-history) - History of logs archive
  * [h1 logs show](#h1-logs-show) - Show logs archive
  * [h1 logs create](#h1-logs-create) - Create logs archive
  * [h1 logs stream](#h1-logs-stream) - Stream logs archive
  * [h1 logs credential](#h1-logs-credential) - Manage your credentials to logs archive
    * [h1 logs credential password](#h1-logs-credential-password) - Manage your password to logs archive
      * [h1 logs credential password show](#h1-logs-credential-password-show) - Show password to logs archive
      * [h1 logs credential password list](#h1-logs-credential-password-list) - List password to logs archive
      * [h1 logs credential password rename](#h1-logs-credential-password-rename) - Rename password to logs archive
      * [h1 logs credential password delete](#h1-logs-credential-password-delete) - Delete password to logs archive
      * [h1 logs credential password add](#h1-logs-credential-password-add) - Add password to logs archive
  * [h1 logs read](#h1-logs-read) - Read logs archive


# Specification

## h1 logs

Manage your logs archive

## h1 logs delete

Delete logs archive

### Syntax

```h1 logs delete | --logs LOGS```
### Example

```bash
h1 logs delete --logs my-logs
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--logs LOGS``` |  | Logs archive ID or name |

## h1 logs rename

Rename logs archive

### Syntax

```h1 logs rename | --logs LOGS --new-name NEW-NAME```
### Example

```bash
h1 logs rename --logs my-logs --new-name my-renamed-logs
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--logs LOGS``` |  | Logs archive ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 logs list

List logs archive

### Syntax

```h1 logs list | ```
### Example

```bash
h1 logs list
```

## h1 logs history

History of logs archive

### Syntax

```h1 logs history | --logs LOGS```
### Example

```bash
h1 logs history --logs my-logs
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--logs LOGS``` |  | Logs archive ID or name |

## h1 logs show

Show logs archive

### Syntax

```h1 logs show | --logs LOGS```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--logs LOGS``` |  | Logs archive ID or name |

## h1 logs create

Create logs archive

### Syntax

```h1 logs create | --name NAME --retention RETENTION```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name of logs archive |
| ```--retention RETENTION``` |  | Data retention period (in days) |

## h1 logs stream

Stream logs archive

### Syntax

```h1 logs stream | --logs LOGS```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--logs LOGS``` |  | Logs archive ID or name |

## h1 logs credential

Manage your credentials to logs archive

## h1 logs credential password

Manage your password to logs archive

## h1 logs credential password show

Show password to logs archive

### Syntax

```h1 logs credential password show | --logs LOGS --password PASSWORD```
### Example

```bash
h1 logs credential password show --password my-password
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--logs LOGS``` |  | Logs archive ID or name |
| ```--password PASSWORD``` |  | Password to logs archive ID or name |

## h1 logs credential password list

List password to logs archive

### Syntax

```h1 logs credential password list | --logs LOGS```
### Example

```bash
h1 logs credential password list --logs my-logs
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--logs LOGS``` |  | Logs archive ID or name |

## h1 logs credential password rename

Rename password to logs archive

### Syntax

```h1 logs credential password rename | --logs LOGS --password PASSWORD --new-name NEW-NAME```
### Example

```bash
h1 logs credential password rename --password my-password --new-name my-renamed-password --logs my-logs
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--logs LOGS``` |  | Logs archive ID or name |
| ```--password PASSWORD``` |  | Password to logs archive ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 logs credential password delete

Delete password to logs archive

### Syntax

```h1 logs credential password delete | --logs LOGS --password PASSWORD```
### Example

```bash
h1 logs credential password delete --password my-password --logs my-logs
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--logs LOGS``` |  | Logs archive ID or name |
| ```--password PASSWORD``` |  | Password to logs archive ID or name |

## h1 logs credential password add

Add password to logs archive

### Syntax

```h1 logs credential password add | --logs LOGS --name NAME --password PASSWORD```
### Example

```bash
h1 logs credential password add --name my-pass --password secret-password --logs my-logs
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--logs LOGS``` |  | Logs archive ID or name |
| ```--name NAME``` |  | Name |
| ```--password PASSWORD``` |  | Password |

## h1 logs read

Read logs archive

### Syntax

```h1 logs read | --logs LOGS [--since SINCE] [--until UNTIL]```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--logs LOGS``` |  | Logs archive ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--since SINCE``` |  | Start of period for which you want to receive logs |
| ```--until UNTIL``` |  | End of period for which you want to receive logs |

