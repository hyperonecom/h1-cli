# TOC

  * [h1 role create](#h1-role-create) - Create Role
  * [h1 role list](#h1-role-list) - List Role
  * [h1 role show](#h1-role-show) - Show Role
  * [h1 role delete](#h1-role-delete) - Delete Role
  * [h1 role history](#h1-role-history) - History of Role
  * [h1 role rename](#h1-role-rename) - Rename Role
  * [h1 role service](#h1-role-service) - Manage your services of Role
    * [h1 role service list](#h1-role-service-list) - List Service for Role
    * [h1 role service show](#h1-role-service-show) - Show Service for Role
  * [h1 role service](#h1-role-service) - Manage your services of Role
    * [h1 role service list](#h1-role-service-list) - List Service for Role
    * [h1 role service show](#h1-role-service-show) - Show Service for Role
  * [h1 role name](#h1-role-name) - Update Role name of Role
  * [h1 role description](#h1-role-description) - Update Description name of Role
  * [h1 role permission](#h1-role-permission) - Manage your permission of Role
    * [h1 role permission create](#h1-role-permission-create) - Create permission of Role
    * [h1 role permission show](#h1-role-permission-show) - Show permission of Role
    * [h1 role permission list](#h1-role-permission-list) - List permission of Role
    * [h1 role permission delete](#h1-role-permission-delete) - Delete permission of Role
  * [h1 role tag](#h1-role-tag) - Manage your tag
    * [h1 role tag list](#h1-role-tag-list) - List tag
    * [h1 role tag add](#h1-role-tag-add) - Add a tag to Role
    * [h1 role tag delete](#h1-role-tag-delete) - Delete a tag of Role


# Specification

## h1 role

Manage your Role

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

### Examples

#### Create Service Account with SSH credential

```bash
h1 role create --name my-website --type website
```

## h1 role create

Create Role

### Syntax

```h1 role create | --name NAME [--tag TAG [--tag TAG ...]] [--description DESCRIPTION] [--type TYPE]```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Role name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--description DESCRIPTION``` |  | Description name |
| ```--type TYPE``` |  | Role type name or ID |

## h1 role list

List Role

### Syntax

```h1 role list | ```
### Example

```bash
h1 role list
```

## h1 role show

Show Role

### Syntax

```h1 role show | --role ROLE```
### Example

```bash
h1 role show --role my-role
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |

## h1 role delete

Delete Role

### Syntax

```h1 role delete | --role ROLE```
### Example

```bash
h1 role delete --role my-role
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |

## h1 role history

History of Role

### Syntax

```h1 role history | --role ROLE```
### Example

```bash
h1 role history --role my-role
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |

## h1 role rename

Rename Role

### Syntax

```h1 role rename | --role ROLE --new-name NEW-NAME```
### Example

```bash
h1 role rename --role my-role --new-name my-renamed-role
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 role service

Manage your services of Role

## h1 role service list

List Service for Role

### Syntax

```h1 role service list | --role ROLE```
### Example

```bash
h1 role service list --role test-role
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |

## h1 role service show

Show Service for Role

### Syntax

```h1 role service show | --role ROLE --service SERVICE```
### Example

```bash
h1 role service show --service my-service --role my-role
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |
| ```--service SERVICE``` |  | Service for Role ID or name |

## h1 role service

Manage your services of Role

## h1 role service list

List Service for Role

### Syntax

```h1 role service list | --role ROLE```
### Example

```bash
h1 role service list --role test-role
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |

## h1 role service show

Show Service for Role

### Syntax

```h1 role service show | --role ROLE --service SERVICE```
### Example

```bash
h1 role service show --service my-service --role my-role
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |
| ```--service SERVICE``` |  | Service for Role ID or name |

## h1 role name

Update Role name of Role

### Syntax

```h1 role name | --name NAME --role ROLE```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Role name |
| ```--role ROLE``` |  | Role ID or name |

## h1 role description

Update Description name of Role

### Syntax

```h1 role description | --description DESCRIPTION --role ROLE```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--description DESCRIPTION``` |  | Description name |
| ```--role ROLE``` |  | Role ID or name |

## h1 role permission

Manage your permission of Role

### Examples

#### Create environment variable of Website

```bash
h1 role permission create --website my-website --name DEBUG --value false
```

## h1 role permission create

Create permission of Role

### Syntax

```h1 role permission create | --value VALUE --role ROLE```
### Examples

#### Create environment variable of Website

```bash
h1 role permission create --website my-website --name DEBUG --value false
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--value VALUE``` |  | Permission value |
| ```--role ROLE``` |  | Role ID or name |

## h1 role permission show

Show permission of Role

### Syntax

```h1 role permission show | --role ROLE --permission PERMISSION```
### Example

```bash
h1 role permission show --permission my-permission
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |
| ```--permission PERMISSION``` |  | Permission of Role ID or name |

## h1 role permission list

List permission of Role

### Syntax

```h1 role permission list | --role ROLE```
### Example

```bash
h1 role permission list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |

## h1 role permission delete

Delete permission of Role

### Syntax

```h1 role permission delete | --role ROLE --permission PERMISSION```
### Example

```bash
h1 role permission delete --permission my-permission
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |
| ```--permission PERMISSION``` |  | Permission of Role ID or name |

## h1 role tag

Manage your tag

## h1 role tag list

List tag

### Syntax

```h1 role tag list | --role ROLE```
### Example

```bash
h1 role tag list --role my-role
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role ID or name |

## h1 role tag add

Add a tag to Role

### Syntax

```h1 role tag add | --tag TAG [--tag TAG ...] --role ROLE```
### Example

```bash
h1 role tag add --role test-role --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--role ROLE``` |  | Role ID or name |

## h1 role tag delete

Delete a tag of Role

### Syntax

```h1 role tag delete | --tag TAG --role ROLE```
### Example

```bash
h1 role tag delete --role test-role --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--role ROLE``` |  | Role ID or name |

