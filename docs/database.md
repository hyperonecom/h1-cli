# TOC

  * [h1 database create](#h1-database-create) - Create database
  * [h1 database list](#h1-database-list) - List database
  * [h1 database show](#h1-database-show) - Show database
  * [h1 database delete](#h1-database-delete) - Delete database
  * [h1 database history](#h1-database-history) - History of database
  * [h1 database rename](#h1-database-rename) - Rename database
  * [h1 database service](#h1-database-service) - Manage your services of database
    * [h1 database service list](#h1-database-service-list) - List service for database
    * [h1 database service show](#h1-database-service-show) - Show service for database
  * [h1 database start](#h1-database-start) - Start database
  * [h1 database stop](#h1-database-stop) - Stop database
  * [h1 database transfer](#h1-database-transfer) - Transfer database to other project
  * [h1 database shell](#h1-database-shell) - Connect to database using standard client
  * [h1 database credential](#h1-database-credential) - Manage your credentials to database
    * [h1 database credential password](#h1-database-credential-password) - Manage your password to database
      * [h1 database credential password show](#h1-database-credential-password-show) - Show password to database
      * [h1 database credential password list](#h1-database-credential-password-list) - List password to database
      * [h1 database credential password rename](#h1-database-credential-password-rename) - Rename password to database
      * [h1 database credential password delete](#h1-database-credential-password-delete) - Delete password to database
      * [h1 database credential password add](#h1-database-credential-password-add) - Add password to database
  * [h1 database tag](#h1-database-tag) - Manage your tag
    * [h1 database tag list](#h1-database-tag-list) - List tag
    * [h1 database tag add](#h1-database-tag-add) - Add a tag to database
    * [h1 database tag delete](#h1-database-tag-delete) - Delete a tag of database


# Specification

## h1 database

Manage your database

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

### Examples

#### Create MySQL database

```bash
h1 database create --name my-database --type mysql:5.7 --password my-password
```

## h1 database create

Create database

### Syntax

```h1 database create | --name NAME --type TYPE [--password PASSWORD [--password PASSWORD ...]] [--tag TAG [--tag TAG ...]]```
### Examples

#### Create MySQL database

```bash
h1 database create --name my-database --type mysql:5.7 --password my-password
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Database name |
| ```--type TYPE``` |  | Type |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD [--password PASSWORD ...]``` |  | Password to access. The parameter may occur repeatedly |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 database list

List database

### Syntax

```h1 database list | ```
### Example

```bash
h1 database list
```

## h1 database show

Show database

### Syntax

```h1 database show | --database DATABASE```
### Example

```bash
h1 database show --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database delete

Delete database

### Syntax

```h1 database delete | --database DATABASE```
### Example

```bash
h1 database delete --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database history

History of database

### Syntax

```h1 database history | --database DATABASE```
### Example

```bash
h1 database history --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database rename

Rename database

### Syntax

```h1 database rename | --database DATABASE --new-name NEW-NAME```
### Example

```bash
h1 database rename --database my-database --new-name my-renamed-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 database service

Manage your services of database

## h1 database service list

List service for database

### Syntax

```h1 database service list | --database DATABASE```
### Example

```bash
h1 database service list --database test-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database service show

Show service for database

### Syntax

```h1 database service show | --database DATABASE --service SERVICE```
### Example

```bash
h1 database service show --service my-service --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |
| ```--service SERVICE``` |  | Service for database ID or name |

## h1 database start

Start database

### Syntax

```h1 database start | --database DATABASE```
### Example

```
h1 database start --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database stop

Stop database

### Syntax

```h1 database stop | --database DATABASE```
### Example

```
h1 database stop --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database transfer

Transfer database to other project

### Syntax

```h1 database transfer | --database DATABASE --new-project NEW-PROJECT```
### Example

```bash
h1 database transfer --database test-database --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 database shell

Connect to database using standard client

### Syntax

```h1 database shell | --database DATABASE --password PASSWORD```
### Example

```bash
h1 database shell --database my-database --password access-password
```

Note: You need valid credentials to access *Database* any way.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |
| ```--password PASSWORD``` |  | Password to access database. Can be set also via environment variable HYPERONE_DATABASE_PASSWORD. |

## h1 database credential

Manage your credentials to database

## h1 database credential password

Manage your password to database

## h1 database credential password show

Show password to database

### Syntax

```h1 database credential password show | --database DATABASE --password PASSWORD```
### Example

```bash
h1 database credential password show --password my-password
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |
| ```--password PASSWORD``` |  | Password to database ID or name |

## h1 database credential password list

List password to database

### Syntax

```h1 database credential password list | --database DATABASE```
### Example

```bash
h1 database credential password list --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database credential password rename

Rename password to database

### Syntax

```h1 database credential password rename | --database DATABASE --password PASSWORD --new-name NEW-NAME```
### Example

```bash
h1 database credential password rename --password my-password --new-name my-renamed-password --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |
| ```--password PASSWORD``` |  | Password to database ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 database credential password delete

Delete password to database

### Syntax

```h1 database credential password delete | --password PASSWORD --database DATABASE```
### Example

```bash
h1 database credential password delete --password my-password --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password to database ID or name |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database credential password add

Add password to database

### Syntax

```h1 database credential password add | --database DATABASE --name NAME [--password PASSWORD]```
### Example

```bash
h1 database credential password add --name my-pass --password secret-password --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |
| ```--name NAME``` |  | Name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password. It will be generated and shown if it is not specified. |

## h1 database tag

Manage your tag

## h1 database tag list

List tag

### Syntax

```h1 database tag list | --database DATABASE```
### Example

```bash
h1 database tag list --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database tag add

Add a tag to database

### Syntax

```h1 database tag add | --database DATABASE [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 database tag add --database test-database --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 database tag delete

Delete a tag of database

### Syntax

```h1 database tag delete | --tag TAG --database DATABASE```
### Example

```bash
h1 database tag delete --database test-database --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--database DATABASE``` |  | Database ID or name |

