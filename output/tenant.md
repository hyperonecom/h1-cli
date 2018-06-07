# TOC

* [h1 tenant list](#h1 tenant list)
* [h1 tenant show](#h1 tenant show)
* [h1 tenant delete](#h1 tenant delete)
* [h1 tenant list](#h1 tenant list)
* [h1 tenant access](#h1 tenant access)
* [h1 tenant access grant](#h1 tenant access grant)
* [h1 tenant access revoke](#h1 tenant access revoke)
* [h1 tenant access list](#h1 tenant access list)
* [h1 tenant token](#h1 tenant token)
* [h1 tenant token list](#h1 tenant token list)
* [h1 tenant token delete](#h1 tenant token delete)
* [h1 tenant token add](#h1 tenant token add)
* [h1 tenant token access](#h1 tenant token access)
* [h1 tenant token access list](#h1 tenant token access list)
* [h1 tenant token access delete](#h1 tenant token access delete)
* [h1 tenant token access add](#h1 tenant token access add)
* [h1 tenant select](#h1 tenant select)
* [h1 tenant limit](#h1 tenant limit)
* [h1 tenant credentials](#h1 tenant credentials)
* [h1 tenant credentials list](#h1 tenant credentials list)
* [h1 tenant credentials delete](#h1 tenant credentials delete)
* [h1 tenant credentials add](#h1 tenant credentials add)


# Specification

## h1 tenant tenant

### Syntax

```h1 tenant tenant | ```

## h1 tenant tenant list

### Syntax

```h1 tenant tenant list | ```

## h1 tenant tenant show

### Syntax

```h1 tenant tenant show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 tenant tenant delete

### Syntax

```h1 tenant tenant delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

## h1 tenant tenant list

### Syntax

```h1 tenant tenant list | [--all ALL]```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--all ALL``` |  | display all tenants |

## h1 tenant tenant access

### Syntax

```h1 tenant tenant access | ```

## h1 tenant tenant access grant

### Syntax

```h1 tenant tenant access grant | --identity IDENTITY [--role ROLE] id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--identity IDENTITY``` |  | Identity (eg: user@example.org) |
| ```--role ROLE``` |  | Role |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant tenant access revoke

### Syntax

```h1 tenant tenant access revoke | --identity IDENTITY id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--identity IDENTITY``` |  | Identity (eg: user@example.org) |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant tenant access list

### Syntax

```h1 tenant tenant access list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant tenant token

### Syntax

```h1 tenant tenant token | ```

## h1 tenant tenant token list

### Syntax

```h1 tenant tenant token list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant tenant token delete

### Syntax

```h1 tenant tenant token delete | id delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |
| ```delete-id``` |  | Resource name or ID |

## h1 tenant tenant token add

### Syntax

```h1 tenant tenant token add | --name NAME id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant tenant token access

### Syntax

```h1 tenant tenant token access | ```

## h1 tenant tenant token access list

### Syntax

```h1 tenant tenant token access list | --token TOKEN id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | token id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant tenant token access delete

### Syntax

```h1 tenant tenant token access delete | --token TOKEN id delete-id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | token id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |
| ```delete-id``` |  | Resource name or ID |

## h1 tenant tenant token access add

### Syntax

```h1 tenant tenant token access add | --method METHOD --path PATH --token TOKEN id```

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

## h1 tenant tenant select

### Syntax

```h1 tenant tenant select | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant tenant limit

### Syntax

```h1 tenant tenant limit | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant tenant credentials

### Syntax

```h1 tenant tenant credentials | ```

## h1 tenant tenant credentials list

### Syntax

```h1 tenant tenant credentials list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

## h1 tenant tenant credentials delete

### Syntax

```h1 tenant tenant credentials delete | id delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |
| ```delete-id``` |  | Resource name or ID |

## h1 tenant tenant credentials add

### Syntax

```h1 tenant tenant credentials add | --name NAME --sshkey-file SSHKEY-FILE id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Tenant id |

