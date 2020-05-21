# TOC

  * [h1 policy create](#h1-policy-create) - Create Policy
  * [h1 policy list](#h1-policy-list) - List Policy
  * [h1 policy show](#h1-policy-show) - Show Policy
  * [h1 policy delete](#h1-policy-delete) - Delete Policy
  * [h1 policy history](#h1-policy-history) - History of Policy
  * [h1 policy rename](#h1-policy-rename) - Rename Policy
  * [h1 policy service](#h1-policy-service) - Manage your services of Policy
    * [h1 policy service list](#h1-policy-service-list) - List Service for Policy
    * [h1 policy service show](#h1-policy-service-show) - Show Service for Policy
  * [h1 policy access](#h1-policy-access) - Manage your Policy access rights
    * [h1 policy access check](#h1-policy-access-check) - Check access rights for Policy
  * [h1 policy name](#h1-policy-name) - Update Policy name of Policy
  * [h1 policy actor](#h1-policy-actor) - Manage your actor of Policy
    * [h1 policy actor create](#h1-policy-actor-create) - Create actor of Policy
    * [h1 policy actor show](#h1-policy-actor-show) - Show actor of Policy
    * [h1 policy actor list](#h1-policy-actor-list) - List actor of Policy
    * [h1 policy actor delete](#h1-policy-actor-delete) - Delete actor of Policy
  * [h1 policy tag](#h1-policy-tag) - Manage your tag
    * [h1 policy tag list](#h1-policy-tag-list) - List tag
    * [h1 policy tag add](#h1-policy-tag-add) - Add a tag to Policy
    * [h1 policy tag delete](#h1-policy-tag-delete) - Delete a tag of Policy


# Specification

## h1 policy

Manage your Policy

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

### Examples

#### Create Service Account with SSH credential

```bash
h1 policy create --name my-website --type website
```

## h1 policy create

Create Policy

### Syntax

```h1 policy create | --name NAME --role ROLE --resource RESOURCE [--tag TAG [--tag TAG ...]] [--type TYPE]```
### Example

```bash
h1 policy create --name my-website --role /iam/project/5af0bbbcb7802508ad844caa/role/5e739f819a229046fa196d11 --resource /iam/project/5af0bbbcb7802508ad844caa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Policy name |
| ```--role ROLE``` |  | Role ID |
| ```--resource RESOURCE``` |  | Resource ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--type TYPE``` |  | Policy type name or ID |

## h1 policy list

List Policy

### Syntax

```h1 policy list | ```
### Example

```bash
h1 policy list
```

## h1 policy show

Show Policy

### Syntax

```h1 policy show | --policy POLICY```
### Example

```bash
h1 policy show --policy my-policy
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--policy POLICY``` |  | Policy ID or name |

## h1 policy delete

Delete Policy

### Syntax

```h1 policy delete | --policy POLICY```
### Example

```bash
h1 policy delete --policy my-policy
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--policy POLICY``` |  | Policy ID or name |

## h1 policy history

History of Policy

### Syntax

```h1 policy history | --policy POLICY```
### Example

```bash
h1 policy history --policy my-policy
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--policy POLICY``` |  | Policy ID or name |

## h1 policy rename

Rename Policy

### Syntax

```h1 policy rename | --policy POLICY --new-name NEW-NAME```
### Example

```bash
h1 policy rename --policy my-policy --new-name my-renamed-policy
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--policy POLICY``` |  | Policy ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 policy service

Manage your services of Policy

## h1 policy service list

List Service for Policy

### Syntax

```h1 policy service list | --policy POLICY```
### Example

```bash
h1 policy service list --policy test-policy
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--policy POLICY``` |  | Policy ID or name |

## h1 policy service show

Show Service for Policy

### Syntax

```h1 policy service show | --policy POLICY --service SERVICE```
### Example

```bash
h1 policy service show --service my-service --policy my-policy
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--policy POLICY``` |  | Policy ID or name |
| ```--service SERVICE``` |  | Service for Policy ID or name |

## h1 policy access

Manage your Policy access rights

## h1 policy access check

Check access rights for Policy

### Syntax

```h1 policy access check | --policy POLICY```
### Example

```bash
h1 policy access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--policy POLICY``` |  | Policy ID or name |

## h1 policy name

Update Policy name of Policy

### Syntax

```h1 policy name | --name NAME --policy POLICY```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Policy name |
| ```--policy POLICY``` |  | Policy ID or name |

## h1 policy actor

Manage your actor of Policy

### Examples

#### Create environment variable of Website

```bash
h1 policy actor create --website my-website --name DEBUG --value false
```

## h1 policy actor create

Create actor of Policy

### Syntax

```h1 policy actor create | --value VALUE --policy POLICY```
### Examples

#### Create environment variable of Website

```bash
h1 policy actor create --website my-website --name DEBUG --value false
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--value VALUE``` |  | Actor value |
| ```--policy POLICY``` |  | Policy ID or name |

## h1 policy actor show

Show actor of Policy

### Syntax

```h1 policy actor show | --policy POLICY --actor ACTOR```
### Example

```bash
h1 policy actor show --actor my-actor
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--policy POLICY``` |  | Policy ID or name |
| ```--actor ACTOR``` |  | Actor of Policy ID or name |

## h1 policy actor list

List actor of Policy

### Syntax

```h1 policy actor list | --policy POLICY```
### Example

```bash
h1 policy actor list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--policy POLICY``` |  | Policy ID or name |

## h1 policy actor delete

Delete actor of Policy

### Syntax

```h1 policy actor delete | --policy POLICY --actor ACTOR```
### Example

```bash
h1 policy actor delete --actor my-actor
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--policy POLICY``` |  | Policy ID or name |
| ```--actor ACTOR``` |  | Actor of Policy ID or name |

## h1 policy tag

Manage your tag

## h1 policy tag list

List tag

### Syntax

```h1 policy tag list | --policy POLICY```
### Example

```bash
h1 policy tag list --policy my-policy
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--policy POLICY``` |  | Policy ID or name |

## h1 policy tag add

Add a tag to Policy

### Syntax

```h1 policy tag add | --tag TAG [--tag TAG ...] --policy POLICY```
### Example

```bash
h1 policy tag add --policy test-policy --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--policy POLICY``` |  | Policy ID or name |

## h1 policy tag delete

Delete a tag of Policy

### Syntax

```h1 policy tag delete | --tag TAG --policy POLICY```
### Example

```bash
h1 policy tag delete --policy test-policy --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--policy POLICY``` |  | Policy ID or name |

