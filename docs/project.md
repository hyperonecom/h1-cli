# TOC

  * [h1 project show](#h1-project-show) - Show project
  * [h1 project delete](#h1-project-delete) - Delete project
  * [h1 project history](#h1-project-history) - History of project
  * [h1 project list](#h1-project-list) - List project
  * [h1 project access](#h1-project-access) - Manage your project access rights
    * [h1 project access grant](#h1-project-access-grant) - Grant access rights for project
    * [h1 project access revoke](#h1-project-access-revoke) - Revoke access rights for project
    * [h1 project access list](#h1-project-access-list) - List project
  * [h1 project token](#h1-project-token) - Manage your project tokens
    * [h1 project token show](#h1-project-token-show) - Show token
    * [h1 project token list](#h1-project-token-list) - List token
    * [h1 project token delete](#h1-project-token-delete) - Delete token
    * [h1 project token add](#h1-project-token-add) - Add token
    * [h1 project token access](#h1-project-token-access) - Manage your token access
      * [h1 project token access list](#h1-project-token-access-list) - List access rule
      * [h1 project token access show](#h1-project-token-access-show) - Show access rule
      * [h1 project token access delete](#h1-project-token-access-delete) - Delete access rule
      * [h1 project token access add](#h1-project-token-access-add) - Add access rule
  * [h1 project select](#h1-project-select) - Select project context
  * [h1 project limit](#h1-project-limit) - Cloud limits set for project
  * [h1 project credentials](#h1-project-credentials) - Manage your credentials
    * [h1 project credentials list](#h1-project-credentials-list) - List credentials
    * [h1 project credentials delete](#h1-project-credentials-delete) - Delete credentials
    * [h1 project credentials add](#h1-project-credentials-add) - Add public SSH key for project


# Specification

## h1 project

Manage your project

## h1 project show

Show project

### Syntax

```h1 project show | --project PROJECT```

### Example

```bash
h1 project show --project my-project
```

### Examples

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

### Examples

```bash
h1 project delete --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project history

History of project

### Syntax

```h1 project history | --project PROJECT```

### Example

```bash
h1 project history --project my-project
```

### Examples

```bash
h1 project history --project my-project
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
h1 project list --project 5af0bbbcb7802508ad844caa
```

### Examples

```bash
h1 project list --project 5af0bbbcb7802508ad844caa
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--all``` |  | Display all projects |

## h1 project access

Manage your project access rights

## h1 project access grant

Grant access rights for project

### Syntax

```h1 project access grant | --project PROJECT --email EMAIL [--role ROLE]```

### Example

```bash
h1 project access grant --project 6oAoJqgyLZP4Le9UUNHrEOYP --email user@example.com
```

### Examples

```bash
h1 project access grant --project 6oAoJqgyLZP4Le9UUNHrEOYP --email user@example.com
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--email EMAIL``` |  | User email (eg: user@example.org) |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role ROLE``` |  | Role |

## h1 project access revoke

Revoke access rights for project

### Syntax

```h1 project access revoke | --project PROJECT --email EMAIL```

### Example

```bash
h1 project access revoke --project 6oAoJqgyLZP4Le9UUNHrEOYP --email user@example.com
```

### Examples

```bash
h1 project access revoke --project 6oAoJqgyLZP4Le9UUNHrEOYP --email user@example.com
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--email EMAIL``` |  | User email (eg: user@example.org) |

## h1 project access list

List project

### Syntax

```h1 project access list | --project PROJECT```

### Example

```bash
h1 project access list
```

### Examples

```bash
h1 project access list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

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
H1_TOKEN="d41d8cd98f00b204e9800998ecf8427e" h1 vault snapshot --vault x --name $(date +"%s")
```

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
H1_TOKEN="d41d8cd98f00b204e9800998ecf8427e" h1 vault snapshot --vault x --name $(date +"%s")
```

## h1 project token show

Show token

### Syntax

```h1 project token show | --project PROJECT --token TOKEN```

### Example

```bash
h1 project token show --token my-token
```

### Examples

```bash
h1 project token show --token my-token
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--token TOKEN``` |  | Token ID or name |

## h1 project token list

List token

### Syntax

```h1 project token list | --project PROJECT```

### Example

```bash
h1 project token list
```

### Examples

```bash
h1 project token list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project token delete

Delete token

### Syntax

```h1 project token delete | --project PROJECT --token TOKEN```

### Example

```bash
h1 project token delete --token my-token --project my-project
```

### Examples

```bash
h1 project token delete --token my-token --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--token TOKEN``` |  | Token ID or name |

## h1 project token add

Add token

### Syntax

```h1 project token add | --project PROJECT --name NAME```

### Example

```bash
h1 project token add --project 6oAoJqgyLZP4Le9UUNHrEOYP --name secret-token-1
```

### Examples

```bash
h1 project token add --project 6oAoJqgyLZP4Le9UUNHrEOYP --name secret-token-1
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--name NAME``` |  | Name |

## h1 project token access

Manage your token access

## h1 project token access list

List access rule

### Syntax

```h1 project token access list | --token TOKEN --project PROJECT```

### Example

```bash
h1 project token access list --project my-project --token my-token --access my-access-id
```

### Examples

```bash
h1 project token access list --project my-project --token my-token --access my-access-id
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project token access show

Show access rule

### Syntax

```h1 project token access show | --token TOKEN --project PROJECT --access ACCESS```

### Example

```bash
h1 project token access show --access my-access
```

### Examples

```bash
h1 project token access show --access my-access
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID |
| ```--project PROJECT``` |  | Project ID or name |
| ```--access ACCESS``` |  | Access rule ID or name |

## h1 project token access delete

Delete access rule

### Syntax

```h1 project token access delete | --token TOKEN --project PROJECT --access ACCESS```

### Example

```bash
h1 project token access delete --access my-access --project my-project --token my-token --access my-access-id
```

### Examples

```bash
h1 project token access delete --access my-access --project my-project --token my-token --access my-access-id
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID |
| ```--project PROJECT``` |  | Project ID or name |
| ```--access ACCESS``` |  | Access rule ID or name |

## h1 project token access add

Add access rule

### Syntax

```h1 project token access add | --method METHOD --path PATH --token TOKEN --project PROJECT```

### Examples

#### Grant access to token for snapshots of selected Vault

```bash
h1 project token access add --project 6oAoJqgyLZP4Le9UUNHrEOYP --method POST --path 'vault/x/actions/snapshot' --token d41d8cd98f00b204e9800998ecf8427e
```

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
| ```--project PROJECT``` |  | Project ID or name |

## h1 project select

Select project context

### Syntax

```h1 project select | --project PROJECT```

### Example

```bash
h1 project select --project 6oAoJqgyLZP4Le9UUNHrEOYP
```

### Examples

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

### Examples

```bash
h1 project limit --project 6oAoJqgyLZP4Le9UUNHrEOYP
```

Contact technical support to request increase the limits.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project credentials

Manage your credentials

## h1 project credentials list

List credentials

### Syntax

```h1 project credentials list | --project PROJECT```

### Example

```bash
h1 project credentials list
```

### Examples

```bash
h1 project credentials list
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
h1 project credentials delete --credentials my-credentials
```

### Examples

```bash
h1 project credentials delete --credentials my-credentials
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 project credentials add

Add public SSH key for project

### Syntax

```h1 project credentials add | --project PROJECT --name NAME --sshkey-file SSHKEY-FILE```

### Example

```bash
h1 project credentials add --name my-home-ssh --sshkey-file ~/.ssh/id_rsa.pub --project my-project
```

### Examples

```bash
h1 project credentials add --name my-home-ssh --sshkey-file ~/.ssh/id_rsa.pub --project my-project
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

