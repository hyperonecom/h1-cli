# TOC

* [h1 list](#h1-list)
* [h1 show](#h1-show)
* [h1 delete](#h1-delete)
* [h1 list](#h1-list)
* [h1 access](#h1-access)
* [h1 access grant](#h1-access grant)
* [h1 access revoke](#h1-access revoke)
* [h1 access list](#h1-access list)
* [h1 token](#h1-token)
* [h1 token list](#h1-token list)
* [h1 token delete](#h1-token delete)
* [h1 token add](#h1-token add)
* [h1 token access](#h1-token access)
* [h1 token access list](#h1-token access list)
* [h1 token access delete](#h1-token access delete)
* [h1 token access add](#h1-token access add)
* [h1 select](#h1-select)
* [h1 limit](#h1-limit)
* [h1 credentials](#h1-credentials)
* [h1 credentials list](#h1-credentials list)
* [h1 credentials delete](#h1-credentials delete)
* [h1 credentials add](#h1-credentials add)


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

```h1 tenant delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

## h1 tenant list

### Syntax

```h1 tenant list | [--all ALL]```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--all ALL``` |  | display all tenants |

## h1 tenant access

### Syntax

```h1 tenant access | ```

## h1 tenant access grant

### Syntax

```h1 tenant access grant | --identity IDENTITY [--role ROLE] id```

### Optional options

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

### Optional options

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

```h1 tenant token delete | id delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |
| ```delete-id``` |  | Resource name or ID |

## h1 tenant token add

### Syntax

```h1 tenant token add | --name NAME id```

### Optional options

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

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | token id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant token access delete

### Syntax

```h1 tenant token access delete | --token TOKEN id delete-id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | token id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |
| ```delete-id``` |  | Resource name or ID |

## h1 tenant token access add

### Syntax

```h1 tenant token access add | --method METHOD --path PATH --token TOKEN id```

### Optional options

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

```h1 tenant credentials delete | id delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |
| ```delete-id``` |  | Resource name or ID |

## h1 tenant credentials add

### Syntax

```h1 tenant credentials add | --name NAME --sshkey-file SSHKEY-FILE id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

