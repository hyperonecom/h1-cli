# TOC

  * [h1 project create](#h1-project-create) - Create project
  * [h1 project show](#h1-project-show) - Show project
  * [h1 project delete](#h1-project-delete) - Delete project
  * [h1 project access](#h1-project-access) - Manage your project access rights
    * [h1 project access grant](#h1-project-access-grant) - Grant access rights for project
    * [h1 project access revoke](#h1-project-access-revoke) - Revoke access rights for project
    * [h1 project access list](#h1-project-access-list) - List access rights for project
  * [h1 project history](#h1-project-history) - History of project
  * [h1 project rename](#h1-project-rename) - Rename project
  * [h1 project service](#h1-project-service) - Manage your services of project
    * [h1 project service list](#h1-project-service-list) - List service for project
    * [h1 project service show](#h1-project-service-show) - Show service for project
  * [h1 project payment](#h1-project-payment) - Manage your payment for project
    * [h1 project payment show](#h1-project-payment-show) - Show payment
    * [h1 project payment list](#h1-project-payment-list) - List payment
  * [h1 project list](#h1-project-list) - List project
  * [h1 project transfer](#h1-project-transfer) - Transfer project to other organisation
  * [h1 project token](#h1-project-token) - Manage your project tokens
    * [h1 project token show](#h1-project-token-show) - Show token
    * [h1 project token list](#h1-project-token-list) - List token
    * [h1 project token delete](#h1-project-token-delete) - Delete token
    * [h1 project token rename](#h1-project-token-rename) - Rename token
    * [h1 project token add](#h1-project-token-add) - Add token
    * [h1 project token access](#h1-project-token-access) - Manage your token access
      * [h1 project token access list](#h1-project-token-access-list) - List access rule
      * [h1 project token access show](#h1-project-token-access-show) - Show access rule
      * [h1 project token access delete](#h1-project-token-access-delete) - Delete access rule
      * [h1 project token access add](#h1-project-token-access-add) - Add access rule
    * [h1 project token env](#h1-project-token-env) - Get environment variables to manage project by service account
  * [h1 project notification](#h1-project-notification) - Manage your notifications
    * [h1 project notification credits](#h1-project-notification-credits) - Manage your credits limit
      * [h1 project notification credits add](#h1-project-notification-credits-add) - Add credits limit
      * [h1 project notification credits list](#h1-project-notification-credits-list) - List credits limit
      * [h1 project notification credits delete](#h1-project-notification-credits-delete) - Delete credits limit
  * [h1 project select](#h1-project-select) - Select project context
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
    * [h1 project credentials add](#h1-project-credentials-add) - Add public SSH key for project
  * [h1 project tag](#h1-project-tag) - Manage your tag
    * [h1 project tag list](#h1-project-tag-list) - List tag
    * [h1 project tag add](#h1-project-tag-add) - Add a tag to project
    * [h1 project tag delete](#h1-project-tag-delete) - Delete a tag of project


# Specification

## h1 project

Manage your project

### Examples

#### Create new project

```bash
h1 project create --name project --organizatiton MyCompany
```

## h1 project create

Create project

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

Show project

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

Delete project

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

Manage your project access rights

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project access grant

Grant access rights for project

### Syntax

```h1 project access grant | --email EMAIL [--project PROJECT] [--role {owner,billing,user}]```
### Example

```bash
h1 project access grant --project my-project --email user@example.com
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--email EMAIL``` |  | User email (eg: user@example.org) |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |
| ```--role {owner,billing,user}``` |  | Role |

## h1 project access revoke

Revoke access rights for project

### Syntax

```h1 project access revoke | --email EMAIL [--project PROJECT]```
### Example

```bash
h1 project access revoke --project my-project --email user@example.com
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--email EMAIL``` |  | User email (eg: user@example.org) |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project access list

List access rights for project

### Syntax

```h1 project access list | [--project PROJECT]```
### Example

```bash
h1 project access list --project my-project
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project history

History of project

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

Rename project

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

Manage your services of project

## h1 project service list

List service for project

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

Show service for project

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
| ```--service SERVICE``` |  | Service for project ID or name |

## h1 project payment

Manage your payment for project

## h1 project payment show

Show payment

### Syntax

```h1 project payment show | --project PROJECT --payment PAYMENT```
### Example

```bash
h1 project payment show --payment my-payment --project my-project
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
h1 project payment list --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project list

List project

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

Transfer project to other organisation

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

## h1 project token

Manage your project tokens

### Examples

#### Create a token

```bash
h1 project token add --project 6oAoJqgyLZP4Le9UUNHrEOYP --name secret-token-1
```

#### Grant access to token for snapshots of selected Vault

```bash
h1 project token access add --project 6oAoJqgyLZP4Le9UUNHrEOYP --method POST --path 'vault/x/actions/snapshot' --token d41d8cd98f00b204e9800998ecf8427e
```

#### Verify access of token

```
h1 project token access list --project 6oAoJqgyLZP4Le9UUNHrEOYP \
    --token d41d8cd98f00b204e9800998ecf8427e
```

#### Remove some access of token 

```bash
h1 project token access delete --project 6oAoJqgyLZP4Le9UUNHrEOYP --token d41d8cd98f00b204e9800998ecf8427e --access c4ca4238a0b923820dcc509a6f75849b
```

#### Perform a snapshot of Vault using API token

```bash
HYPERONE_ACCESS_TOKEN_SECRET="d41d8cd98f00b204e9800998ecf8427e" h1 vault snapshot --vault x --name $(date +"%s")
```

## h1 project token show

Show token

### Syntax

```h1 project token show | --token TOKEN [--project PROJECT]```
### Example

```bash
h1 project token show --token my-token
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project token list

List token

### Syntax

```h1 project token list | [--project PROJECT]```
### Example

```bash
h1 project token list
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project token delete

Delete token

### Syntax

```h1 project token delete | --token TOKEN [--project PROJECT]```
### Example

```bash
h1 project token delete --token my-token --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project token rename

Rename token

### Syntax

```h1 project token rename | --token TOKEN --new-name NEW-NAME [--project PROJECT]```
### Example

```bash
h1 project token rename --token my-token --new-name my-renamed-token
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID or name |
| ```--new-name NEW-NAME``` |  | New name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project token add

Add token

### Syntax

```h1 project token add | --name NAME [--project PROJECT]```
### Example

```bash
h1 project token add --project 6oAoJqgyLZP4Le9UUNHrEOYP --name secret-token-1
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project token access

Manage your token access

## h1 project token access list

List access rule

### Syntax

```h1 project token access list | --token TOKEN [--project PROJECT]```
### Example

```bash
h1 project token access list --project my-project --token my-token --access my-access-id
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project token access show

Show access rule

### Syntax

```h1 project token access show | --token TOKEN --access ACCESS [--project PROJECT]```
### Example

```bash
h1 project token access show --access my-access
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID |
| ```--access ACCESS``` |  | Access rule ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project token access delete

Delete access rule

### Syntax

```h1 project token access delete | --access ACCESS --token TOKEN [--project PROJECT]```
### Example

```bash
h1 project token access delete --access my-access --project my-project --token my-token --access my-access-id
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--access ACCESS``` |  | Access rule ID or name |
| ```--token TOKEN``` |  | Token ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project token access add

Add access rule

### Syntax

```h1 project token access add | --method METHOD --path PATH --token TOKEN [--project PROJECT]```
### Examples

#### Grant access to token for snapshots of selected Vault

```bash
h1 project token access add --project 6oAoJqgyLZP4Le9UUNHrEOYP --method POST --path 'vault/x/actions/snapshot' --token d41d8cd98f00b204e9800998ecf8427e
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--method METHOD``` |  | HTTP method. eg: GET, POST..., ALL (to allow all methods) |
| ```--path PATH``` |  | URL path, eg: /disk |
| ```--token TOKEN``` |  | Token ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project token env

Get environment variables to manage project by service account

### Syntax

```h1 project token env | --token TOKEN [--project PROJECT] [--shell {powershell,cmd,sh,bash}] [--unset]```
### Examples

#### Get and set environment variables in sh/bash shell

```bash
eval $(h1 project token env --token 189d9053248c4f6fbacebe90558ff538)
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |
| ```--shell {powershell,cmd,sh,bash}``` |  | Shell type |
| ```--unset``` |  | Reverses operations of setting environment variables |

## h1 project notification

Manage your notifications

## h1 project notification credits

Manage your credits limit

## h1 project notification credits add

Add credits limit

### Syntax

```h1 project notification credits add | --limit LIMIT [--project PROJECT]```
### Example

```
h1 project notification credits add --project my-project --limit value
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--limit LIMIT``` |  | New credits limit |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project notification credits list

List credits limit

### Syntax

```h1 project notification credits list | [--project PROJECT]```
### Example

```bash
h1 project notification credits list --project my-project
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project notification credits delete

Delete credits limit

### Syntax

```h1 project notification credits delete | --limit LIMIT [--project PROJECT]```
### Example

```
h1 project notification credits delete --project my-project --limit value
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--limit LIMIT``` |  | Deleted credits limit |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project select

Select project context

### Syntax

```h1 project select | [--project PROJECT]```
### Example

```bash
h1 project select --project 6oAoJqgyLZP4Le9UUNHrEOYP
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project limit

Cloud limits set for project

### Syntax

```h1 project limit | [--project PROJECT]```
### Example

```bash
h1 project limit --project 6oAoJqgyLZP4Le9UUNHrEOYP
```

Contact technical support to request increase the limits.

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project logging

Manage your compliance logging

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

## h1 project logging enable

Enable compliance log

### Syntax

```h1 project logging enable | --log LOG --password PASSWORD [--project PROJECT] [--mode {basic,full}]```
### Example

```
h1 project logging enable --project MyProject --logArchive 5beabe03680cffd11f0e653d  --password StrongPassword
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | ID of LogArchive |
| ```--password PASSWORD``` |  | Credentials of type "password" to access logArchive |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |
| ```--mode {basic,full}``` |  | Logging mode (determines the scope of registered information) |

## h1 project logging disable

Disable compliance log

### Syntax

```h1 project logging disable | [--project PROJECT]```
### Example

```
h1 project logging disable --project MyProject
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project logging show

Show compliance log

### Syntax

```h1 project logging show | [--project PROJECT]```
### Example

```
h1 project logging show --project MyProject
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project credentials

Manage your credentials

## h1 project credentials show

Show credentials

### Syntax

```h1 project credentials show | --credentials CREDENTIALS [--project PROJECT]```
### Example

```bash
h1 project credentials show --credentials my-credentials
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project credentials list

List credentials

### Syntax

```h1 project credentials list | [--project PROJECT]```
### Example

```bash
h1 project credentials list --project my-project
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project credentials delete

Delete credentials

### Syntax

```h1 project credentials delete | --credentials CREDENTIALS [--project PROJECT]```
### Example

```bash
h1 project credentials delete --credentials my-credentials --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project credentials rename

Rename credentials

### Syntax

```h1 project credentials rename | --credentials CREDENTIALS --new-name NEW-NAME [--project PROJECT]```
### Example

```bash
h1 project credentials rename --credentials my-credentials --new-name my-renamed-credentials --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |
| ```--new-name NEW-NAME``` |  | New name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

## h1 project credentials add

Add public SSH key for project

### Syntax

```h1 project credentials add | --name NAME --sshkey-file SSHKEY-FILE [--project PROJECT]```
### Example

```bash
h1 project credentials add --name my-home-ssh --sshkey-file ~/.ssh/id_rsa.pub --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name. Active project by default |

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

Add a tag to project

### Syntax

```h1 project tag add | --project PROJECT [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 project tag add --project test-project --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 project tag delete

Delete a tag of project

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

