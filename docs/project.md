# TOC

  * [h1 project create](#h1-project-create) - Create Project
  * [h1 project show](#h1-project-show) - Show Project
  * [h1 project delete](#h1-project-delete) - Delete Project
  * [h1 project access](#h1-project-access) - Manage your Project access rights
    * [h1 project access check](#h1-project-access-check) - Check access rights for Project
  * [h1 project list](#h1-project-list) - List Project
  * [h1 project history](#h1-project-history) - History of Project
  * [h1 project rename](#h1-project-rename) - Rename Project
  * [h1 project service](#h1-project-service) - Manage your services of Project
    * [h1 project service list](#h1-project-service-list) - List Service for Project
    * [h1 project service show](#h1-project-service-show) - Show Service for Project
  * [h1 project payment](#h1-project-payment) - Manage your payment for Project
    * [h1 project payment show](#h1-project-payment-show) - Show payment
    * [h1 project payment list](#h1-project-payment-list) - List payment
  * [h1 project list](#h1-project-list) - List Project
  * [h1 project transfer](#h1-project-transfer) - Transfer Project to other organisation
  * [h1 project notification](#h1-project-notification) - Manage your notifications
    * [h1 project notification credits](#h1-project-notification-credits) - Manage your credits limit
      * [h1 project notification credits add](#h1-project-notification-credits-add) - Add credits limit
      * [h1 project notification credits list](#h1-project-notification-credits-list) - List credits limit
      * [h1 project notification credits delete](#h1-project-notification-credits-delete) - Delete credits limit
  * [h1 project select](#h1-project-select) - Select Project context
  * [h1 project limit](#h1-project-limit) - Cloud limits set for project
  * [h1 project logging](#h1-project-logging) - Manage your compliance logging
    * [h1 project logging enable](#h1-project-logging-enable) - Enable compliance log
    * [h1 project logging disable](#h1-project-logging-disable) - Disable compliance log
    * [h1 project logging show](#h1-project-logging-show) - Show compliance log
  * [h1 project credentials](#h1-project-credentials) - Manage your credentials
    * [h1 project credentials show](#h1-project-credentials-show) - Show credentials
    * [h1 project credentials list](#h1-project-credentials-list) - List credentials
    * [h1 project credentials delete](#h1-project-credentials-delete) - Delete credentials
    * [h1 project credentials rename](#h1-project-credentials-rename) - Rename credentials
    * [h1 project credentials add](#h1-project-credentials-add) - Add public SSH key for Project
  * [h1 project tag](#h1-project-tag) - Manage your tag
    * [h1 project tag list](#h1-project-tag-list) - List tag
    * [h1 project tag add](#h1-project-tag-add) - Add a tag to Project
    * [h1 project tag delete](#h1-project-tag-delete) - Delete a tag of Project


# Specification

## h1 project

Manage your Project

### Examples

#### Create new project

```bash
h1 project create --name project --organizatiton MyCompany
```

## h1 project create

Create Project

### Syntax

```h1 project create | --name NAME --organisation ORGANISATION [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 project create create --name project --organizatiton MyCompany
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | ISO name |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 project show

Show Project

### Syntax

```h1 project show | --project PROJECT```
### Example

```bash
h1 project show --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project delete

Delete Project

### Syntax

```h1 project delete | --project PROJECT```
### Example

```bash
h1 project delete --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project access

Manage your Project access rights

## h1 project access check

Check access rights for Project

### Syntax

```h1 project access check | --project PROJECT```
### Example

```bash
h1 project access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project list

List Project

### Syntax

```h1 project list | ```
### Example

```bash
h1 project list
```

## h1 project history

History of Project

### Syntax

```h1 project history | --project PROJECT```
### Example

```bash
h1 project history --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project rename

Rename Project

### Syntax

```h1 project rename | --project PROJECT --new-name NEW-NAME```
### Example

```bash
h1 project rename --project my-project --new-name my-renamed-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 project service

Manage your services of Project

## h1 project service list

List Service for Project

### Syntax

```h1 project service list | --project PROJECT```
### Example

```bash
h1 project service list --project test-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project service show

Show Service for Project

### Syntax

```h1 project service show | --project PROJECT --service SERVICE```
### Example

```bash
h1 project service show --service my-service --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--service SERVICE``` |  | Service for Project ID or name |

## h1 project payment

Manage your payment for Project

## h1 project payment show

Show payment

### Syntax

```h1 project payment show | --project PROJECT --payment PAYMENT```
### Example

```bash
h1 project payment show --payment my-payment --Project my-Project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--payment PAYMENT``` |  | Payment ID or name |

## h1 project payment list

List payment

### Syntax

```h1 project payment list | --project PROJECT```
### Example

```bash
h1 project payment list --Project my-Project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project list

List Project

### Syntax

```h1 project list | [--all]```
### Example

```bash
h1 project list
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--all``` |  | Include inactive projects |

## h1 project transfer

Transfer Project to other organisation

### Syntax

```h1 project transfer | --project PROJECT --organisation ORGANISATION```
### Example

```bash
h1 project transfer --project test-project --organisation target-organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--organisation ORGANISATION``` |  | New organisation |

## h1 project notification

Manage your notifications

## h1 project notification credits

Manage your credits limit

## h1 project notification credits add

Add credits limit

### Syntax

```h1 project notification credits add | --project PROJECT --limit LIMIT```
### Example

```
h1 project notification credits add --project my-project --limit value
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--limit LIMIT``` |  | New credits limit |

## h1 project notification credits list

List credits limit

### Syntax

```h1 project notification credits list | --project PROJECT```
### Example

```bash
h1 project notification credits list --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project notification credits delete

Delete credits limit

### Syntax

```h1 project notification credits delete | --project PROJECT --limit LIMIT```
### Example

```
h1 project notification credits delete --project my-project --limit value
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--limit LIMIT``` |  | Deleted credits limit |

## h1 project select

Select Project context

### Syntax

```h1 project select | --project PROJECT```
### Example

```bash
h1 project select --project 6oAoJqgyLZP4Le9UUNHrEOYP
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project limit

Cloud limits set for project

### Syntax

```h1 project limit | --project PROJECT```
### Example

```bash
h1 project limit --project 6oAoJqgyLZP4Le9UUNHrEOYP
```

Contact technical support to request increase the limits.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project logging

Manage your compliance logging

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

## h1 project logging enable

Enable compliance log

### Syntax

```h1 project logging enable | --project PROJECT --log LOG --password PASSWORD [--mode {basic,full}]```
### Example

```
h1 project logging enable --project MyProject --logArchive 5beabe03680cffd11f0e653d  --password StrongPassword
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--log LOG``` |  | ID of LogArchive |
| ```--password PASSWORD``` |  | Credentials of type "password" to access logArchive |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--mode {basic,full}``` |  | Logging mode (determines the scope of registered information) |

## h1 project logging disable

Disable compliance log

### Syntax

```h1 project logging disable | --project PROJECT```
### Example

```
h1 project logging disable --project MyProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project logging show

Show compliance log

### Syntax

```h1 project logging show | --project PROJECT```
### Example

```
h1 project logging show --project MyProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project credentials

Manage your credentials

## h1 project credentials show

Show credentials

### Syntax

```h1 project credentials show | --project PROJECT --credentials CREDENTIALS```
### Example

```bash
h1 project credentials show --credentials my-credentials
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 project credentials list

List credentials

### Syntax

```h1 project credentials list | --project PROJECT```
### Example

```bash
h1 project credentials list --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project credentials delete

Delete credentials

### Syntax

```h1 project credentials delete | --project PROJECT --credentials CREDENTIALS```
### Example

```bash
h1 project credentials delete --credentials my-credentials --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 project credentials rename

Rename credentials

### Syntax

```h1 project credentials rename | --project PROJECT --credentials CREDENTIALS --new-name NEW-NAME```
### Example

```bash
h1 project credentials rename --credentials my-credentials --new-name my-renamed-credentials --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 project credentials add

Add public SSH key for Project

### Syntax

```h1 project credentials add | --project PROJECT --name NAME --sshkey-file SSHKEY-FILE```
### Example

```bash
h1 project credentials add --name my-home-ssh --sshkey-file ~/.ssh/id_rsa.pub --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 project tag

Manage your tag

## h1 project tag list

List tag

### Syntax

```h1 project tag list | --project PROJECT```
### Example

```bash
h1 project tag list --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project tag add

Add a tag to Project

### Syntax

```h1 project tag add | --tag TAG [--tag TAG ...] --project PROJECT```
### Example

```bash
h1 project tag add --project test-project --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project tag delete

Delete a tag of Project

### Syntax

```h1 project tag delete | --tag TAG --project PROJECT```
### Example

```bash
h1 project tag delete --project test-project --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--project PROJECT``` |  | Project ID or name |

