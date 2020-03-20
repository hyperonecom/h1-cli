# TOC

  * [h1 database create](#h1-database-create) - Create Database
  * [h1 database list](#h1-database-list) - List Database
  * [h1 database show](#h1-database-show) - Show Database
  * [h1 database delete](#h1-database-delete) - Delete Database
  * [h1 database history](#h1-database-history) - History of Database
  * [h1 database rename](#h1-database-rename) - Rename Database
  * [h1 database service](#h1-database-service) - Manage your services of Database
    * [h1 database service list](#h1-database-service-list) - List Service for Database
    * [h1 database service show](#h1-database-service-show) - Show Service for Database
  * [h1 database access](#h1-database-access) - Manage your Database access rights
    * [h1 database access check](#h1-database-access-check) - Check access rights for Database
  * [h1 database start](#h1-database-start) - Start Database
  * [h1 database stop](#h1-database-stop) - Stop Database
  * [h1 database transfer](#h1-database-transfer) - Transfer Database to other project
  * [h1 database shell](#h1-database-shell) - Connect to Database using standard client
  * [h1 database credential](#h1-database-credential) - Manage your credentials of Database
    * [h1 database credential access](#h1-database-credential-access) - Manage your credential of Database access rights
      * [h1 database credential access check](#h1-database-credential-access-check) - Check access rights for credential of Database
    * [h1 database credential list](#h1-database-credential-list) - List credential of Database
    * [h1 database credential show](#h1-database-credential-show) - Show credential of Database
    * [h1 database credential delete](#h1-database-credential-delete) - Delete credential of Database
    * [h1 database credential password](#h1-database-credential-password) - Manage your password Database
      * [h1 database credential password list](#h1-database-credential-password-list) - List password credential of Database
      * [h1 database credential password show](#h1-database-credential-password-show) - Show password credential of Database
      * [h1 database credential password rename](#h1-database-credential-password-rename) - Rename password credential of Database
      * [h1 database credential password delete](#h1-database-credential-password-delete) - Delete password credential of Database
      * [h1 database credential password add](#h1-database-credential-password-add) - Add password credential of Database
      * [h1 database credential password list](#h1-database-credential-password-list) - List password credential of Database
  * [h1 database tag](#h1-database-tag) - Manage your tag
    * [h1 database tag list](#h1-database-tag-list) - List tag
    * [h1 database tag add](#h1-database-tag-add) - Add a tag to Database
    * [h1 database tag delete](#h1-database-tag-delete) - Delete a tag of Database


# Specification

## h1 database

Manage your Database

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

### Examples

#### Create MySQL database

```bash
h1 database create --name my-database --type mysql:5.7 --password my-password
```

## h1 database create

Create Database

### Syntax

```h1 database create | --name NAME --type TYPE [--tag TAG [--tag TAG ...]]```
### Examples

#### Create MySQL database

```bash
h1 database create --name my-database --type mysql:5.7 --password my-password
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Database name |
| ```--type TYPE``` |  | Database type name or ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 database list

List Database

### Syntax

```h1 database list | ```
### Example

```bash
h1 database list
```

## h1 database show

Show Database

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

Delete Database

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

History of Database

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

Rename Database

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

Manage your services of Database

## h1 database service list

List Service for Database

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

Show Service for Database

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
| ```--service SERVICE``` |  | Service for Database ID or name |

## h1 database access

Manage your Database access rights

## h1 database access check

Check access rights for Database

### Syntax

```h1 database access check | --database DATABASE```
### Example

```bash
h1 database access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database start

Start Database

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

Stop Database

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

Transfer Database to other project

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

Connect to Database using standard client

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

Manage your credentials of Database

## h1 database credential access

Manage your credential of Database access rights

## h1 database credential access check

Check access rights for credential of Database

### Syntax

```h1 database credential access check | --database DATABASE --credential CREDENTIAL```
### Example

```bash
h1 database credential access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |
| ```--credential CREDENTIAL``` |  | Credential of Database ID or name |

## h1 database credential list

List credential of Database

### Syntax

```h1 database credential list | --database DATABASE```
### Example

```bash
h1 database credential list --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database credential show

Show credential of Database

### Syntax

```h1 database credential show | --database DATABASE --credential CREDENTIAL```
### Example

```bash
h1 database credential show --credential my-credential
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |
| ```--credential CREDENTIAL``` |  | Credential of Database ID or name |

## h1 database credential delete

Delete credential of Database

### Syntax

```h1 database credential delete | --database DATABASE --credential CREDENTIAL```
### Example

```bash
h1 database credential delete --credential my-credential --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |
| ```--credential CREDENTIAL``` |  | Credential of Database ID or name |

## h1 database credential password

Manage your password Database

## h1 database credential password list

List password credential of Database

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

## h1 database credential password show

Show password credential of Database

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
| ```--password PASSWORD``` |  | Password credential of Database ID or name |

## h1 database credential password rename

Rename password credential of Database

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
| ```--password PASSWORD``` |  | Password credential of Database ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 database credential password delete

Delete password credential of Database

### Syntax

```h1 database credential password delete | --database DATABASE --password PASSWORD```
### Example

```bash
h1 database credential password delete --password my-password --database my-database
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--database DATABASE``` |  | Database ID or name |
| ```--password PASSWORD``` |  | Password credential of Database ID or name |

## h1 database credential password add

Add password credential of Database

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

## h1 database credential password list

List password credential of Database

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

Add a tag to Database

### Syntax

```h1 database tag add | --tag TAG [--tag TAG ...] --database DATABASE```
### Example

```bash
h1 database tag add --database test-database --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--database DATABASE``` |  | Database ID or name |

## h1 database tag delete

Delete a tag of Database

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

