# TOC

* [h1 netgw list](#h1 netgw list)
* [h1 netgw show](#h1 netgw show)
* [h1 netgw delete](#h1 netgw delete)
* [h1 netgw access](#h1 netgw access)
* [h1 netgw access grant](#h1 netgw access grant)
* [h1 netgw access revoke](#h1 netgw access revoke)
* [h1 netgw access list](#h1 netgw access list)
* [h1 netgw detach](#h1 netgw detach)
* [h1 netgw attach](#h1 netgw attach)
* [h1 netgw create](#h1 netgw create)


# Specification

## h1 netgw netgw

### Syntax

```h1 netgw netgw | ```

## h1 netgw netgw list

### Syntax

```h1 netgw netgw list | ```

## h1 netgw netgw show

### Syntax

```h1 netgw netgw show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 netgw netgw delete

### Syntax

```h1 netgw netgw delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

## h1 netgw netgw access

### Syntax

```h1 netgw netgw access | ```

## h1 netgw netgw access grant

### Syntax

```h1 netgw netgw access grant | --tenant TENANT id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource ID |

## h1 netgw netgw access revoke

### Syntax

```h1 netgw netgw access revoke | --tenant TENANT id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource id |

## h1 netgw netgw access list

### Syntax

```h1 netgw netgw access list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource name or ID |

## h1 netgw netgw detach

### Syntax

```h1 netgw netgw detach | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Network gateway name or ID |

## h1 netgw netgw attach

### Syntax

```h1 netgw netgw attach | --network NETWORK id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Network gateway name or ID |

## h1 netgw netgw create

### Syntax

```h1 netgw netgw create | --name NAME --ip IP```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Network gateway name |
| ```--ip IP``` |  | Primary IP for the outgoing traffic |

