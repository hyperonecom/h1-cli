# TOC

 * [h1 project list](#h1-project-list) - List project
 * [h1 project show](#h1-project-show) - Show project
 * [h1 project delete](#h1-project-delete) - Delete project
 * [h1 project list](#h1-project-list) - List project
 * [h1 project access](#h1-project-access) - Manage your project access rights
  * [h1 project access grant](#h1-project-access-grant) - Grant access rights for project
  * [h1 project access revoke](#h1-project-access-revoke) - Revoke access rights for project
  * [h1 project access list](#h1-project-access-list) - List project
 * [h1 project token](#h1-project-token) - Manage your project tokens
  * [h1 project token list](#h1-project-token-list) - List token
  * [h1 project token delete](#h1-project-token-delete) - Delete token
  * [h1 project token add](#h1-project-token-add) - Add token
  * [h1 project token access](#h1-project-token-access) - Manage your token access
   * [h1 project token access list](#h1-project-token-access-list) - List access rule
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

## h1 project list

List project

### Syntax

```h1 project list | ```

## h1 project show

Show project

### Syntax

```h1 project show | --project PROJECT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project delete

Delete project

### Syntax

```h1 project delete | --project PROJECT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project list

List project

### Syntax

```h1 project list | [--all]```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```[--all]``` |  | Display all projects |

## h1 project access

Manage your project access rights

## h1 project access grant

Grant access rights for project

### Syntax

```h1 project access grant | --identity IDENTITY [--role ROLE]```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--identity IDENTITY``` |  | Identity (eg: user@example.org) |
| ```[--role ROLE]``` |  | Role |

## h1 project access revoke

Revoke access rights for project

### Syntax

```h1 project access revoke | --identity IDENTITY```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--identity IDENTITY``` |  | Identity (eg: user@example.org) |

## h1 project access list

List project

### Syntax

```h1 project access list | --project PROJECT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project token

Manage your project tokens

## h1 project token list

List token

### Syntax

```h1 project token list | ```

## h1 project token delete

Delete token

### Syntax

```h1 project token delete | --token TOKEN```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID or name |

## h1 project token add

Add token

### Syntax

```h1 project token add | --name NAME```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

## h1 project token access

Manage your token access

## h1 project token access list

List access rule

### Syntax

```h1 project token access list | --token TOKEN```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID |

## h1 project token access delete

Delete access rule

### Syntax

```h1 project token access delete | --token TOKEN --access ACCESS```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID |
| ```--access ACCESS``` |  | Access rule ID or name |

## h1 project token access add

Add access rule

### Syntax

```h1 project token access add | --method METHOD --path PATH --token TOKEN```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--method METHOD``` |  | HTTP method. eg: GET, POST..., ALL (to allow all methods) |
| ```--path PATH``` |  | URL path, eg: /disk |
| ```--token TOKEN``` |  | Token ID |

## h1 project select

Select project context

### Syntax

```h1 project select | --project PROJECT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project limit

Cloud limits set for project

### Syntax

```h1 project limit | ```

## h1 project credentials

Manage your credentials

## h1 project credentials list

List credentials

### Syntax

```h1 project credentials list | ```

## h1 project credentials delete

Delete credentials

### Syntax

```h1 project credentials delete | --credentials CREDENTIALS```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 project credentials add

Add public SSH key for project

### Syntax

```h1 project credentials add | --name NAME --sshkey-file SSHKEY-FILE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

