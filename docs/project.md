# TOC

 * [h1 project list](#h1-project-list) - Resource list
 * [h1 project show](#h1-project-show) - Resource show
 * [h1 project delete](#h1-project-delete) - Resource delete
 * [h1 project list](#h1-project-list) - Resource list
 * [h1 project access](#h1-project-access) - Manage your PROJECT Access Rights
  * [h1 project access grant](#h1-project-access-grant) - Grant access rights for PROJECT
  * [h1 project access revoke](#h1-project-access-revoke) - Revoke access rights for PROJECT
  * [h1 project access list](#h1-project-access-list) - Resource list
 * [h1 project token](#h1-project-token) - Manage your TOKEN
  * [h1 project token list](#h1-project-token-list) - Resource list
  * [h1 project token delete](#h1-project-token-delete) - Resource delete
  * [h1 project token add](#h1-project-token-add) - Add
  * [h1 project token access](#h1-project-token-access) - Manage your ACCESS
   * [h1 project token access list](#h1-project-token-access-list) - Resource list
   * [h1 project token access delete](#h1-project-token-access-delete) - Resource delete
   * [h1 project token access add](#h1-project-token-access-add) - Add
 * [h1 project select](#h1-project-select) - Select project context
 * [h1 project limit](#h1-project-limit) - Cloud limits set for Tenant
 * [h1 project credentials](#h1-project-credentials) - Manage your CREDENTIALS
  * [h1 project credentials list](#h1-project-credentials-list) - Resource list
  * [h1 project credentials delete](#h1-project-credentials-delete) - Resource delete
  * [h1 project credentials add](#h1-project-credentials-add) - Adding public SSH key


# Specification

## h1 project

Manage your PROJECT

## h1 project list

Resource list

### Syntax

```h1 project list | ```

## h1 project show

Resource show

### Syntax

```h1 project show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 project delete

Resource delete

### Syntax

```h1 project delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 project list

Resource list

### Syntax

```h1 project list | [--all]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```[--all]``` |  | display all projects |

## h1 project access

Manage your PROJECT Access Rights

## h1 project access grant

Grant access rights for PROJECT

### Syntax

```h1 project access grant | --identity IDENTITY [--role ROLE] id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--identity IDENTITY``` |  | Identity (eg: user@example.org) |
| ```[--role ROLE]``` |  | Role |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |

## h1 project access revoke

Revoke access rights for PROJECT

### Syntax

```h1 project access revoke | --identity IDENTITY id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--identity IDENTITY``` |  | Identity (eg: user@example.org) |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |

## h1 project access list

Resource list

### Syntax

```h1 project access list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |

## h1 project token

Manage your TOKEN

## h1 project token list

Resource list

### Syntax

```h1 project token list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |

## h1 project token delete

Resource delete

### Syntax

```h1 project token delete | id delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 project token add

Add

### Syntax

```h1 project token add | --name NAME id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |

## h1 project token access

Manage your ACCESS

## h1 project token access list

Resource list

### Syntax

```h1 project token access list | --token TOKEN id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | token id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |

## h1 project token access delete

Resource delete

### Syntax

```h1 project token access delete | --token TOKEN id delete-id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | token id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 project token access add

Add

### Syntax

```h1 project token access add | --method METHOD --path PATH --token TOKEN id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--method METHOD``` |  | http method. eg: GET, POST..., ALL (to allow all methods) |
| ```--path PATH``` |  | url path, eg: /disk |
| ```--token TOKEN``` |  | token id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |

## h1 project select

Select project context

### Syntax

```h1 project select | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |

## h1 project limit

Cloud limits set for Tenant

### Syntax

```h1 project limit | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |

## h1 project credentials

Manage your CREDENTIALS

## h1 project credentials list

Resource list

### Syntax

```h1 project credentials list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |

## h1 project credentials delete

Resource delete

### Syntax

```h1 project credentials delete | id delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 project credentials add

Adding public SSH key

### Syntax

```h1 project credentials add | --name NAME --sshkey-file SSHKEY-FILE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Project id |

