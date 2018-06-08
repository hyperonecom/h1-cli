# TOC

* [h1 tenant list](#h1-tenant-list)
* [h1 tenant show](#h1-tenant-show)
* [h1 tenant delete](#h1-tenant-delete)
* [h1 tenant list](#h1-tenant-list)
* [h1 tenant access](#h1-tenant-access)
* [h1 tenant token](#h1-tenant-token)
* [h1 tenant select](#h1-tenant-select)
* [h1 tenant limit](#h1-tenant-limit)
* [h1 tenant credentials](#h1-tenant-credentials)


# Specification

## h1 tenant

### Syntax

```h1 tenant | ```

## h1 tenant list

### Syntax

```h1 tenant list | ```

## h1 tenant show

### Syntax

```h1 tenant show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 tenant delete

### Syntax

```h1 tenant delete | --delete-id DELETE-ID```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 tenant list

### Syntax

```h1 tenant list | [--all ALL]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--all ALL``` |  | display all tenants |

## h1 tenant access

### Syntax

```h1 tenant access | ```

## h1 tenant access grant

### Syntax

```h1 tenant access grant | --identity IDENTITY [--role ROLE] id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--identity IDENTITY``` |  | Identity (eg: user@example.org) |
| ```--role ROLE``` |  | Role |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant access revoke

### Syntax

```h1 tenant access revoke | --identity IDENTITY id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--identity IDENTITY``` |  | Identity (eg: user@example.org) |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant access list

### Syntax

```h1 tenant access list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant token

### Syntax

```h1 tenant token | ```

## h1 tenant token list

### Syntax

```h1 tenant token list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant token delete

### Syntax

```h1 tenant token delete | --delete-id DELETE-ID id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant token add

### Syntax

```h1 tenant token add | --name NAME id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant token access

### Syntax

```h1 tenant token access | ```

## h1 tenant token access list

### Syntax

```h1 tenant token access list | --token TOKEN id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | token id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant token access delete

### Syntax

```h1 tenant token access delete | --token TOKEN --delete-id DELETE-ID id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | token id |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant token access add

### Syntax

```h1 tenant token access add | --method METHOD --path PATH --token TOKEN id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--method METHOD``` |  | http method. eg: GET, POST..., ALL (to allow all methods) |
| ```--path PATH``` |  | url path, eg: /disk |
| ```--token TOKEN``` |  | token id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant select

### Syntax

```h1 tenant select | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant limit

### Syntax

```h1 tenant limit | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant credentials

### Syntax

```h1 tenant credentials | ```

## h1 tenant credentials list

### Syntax

```h1 tenant credentials list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant credentials delete

### Syntax

```h1 tenant credentials delete | --delete-id DELETE-ID id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant credentials add

### Syntax

```h1 tenant credentials add | --name NAME --sshkey-file SSHKEY-FILE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

