# TOC

* [h1 list](#h1-list)
* [h1 show](#h1-show)
* [h1 delete](#h1-delete)
* [h1 access](#h1-access)
* [h1 access grant](#h1-access grant)
* [h1 access revoke](#h1-access revoke)
* [h1 access list](#h1-access list)
* [h1 detach](#h1-detach)
* [h1 attach](#h1-attach)
* [h1 create](#h1-create)


# Specification

## h1 netgw

### Syntax

```h1 netgw | ```

## h1 netgw list

### Syntax

```h1 netgw list | ```

## h1 netgw show

### Syntax

```h1 netgw show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 netgw delete

### Syntax

```h1 netgw delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

## h1 netgw access

### Syntax

```h1 netgw access | ```

## h1 netgw access grant

### Syntax

```h1 netgw access grant | --tenant TENANT id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource ID |

## h1 netgw access revoke

### Syntax

```h1 netgw access revoke | --tenant TENANT id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource id |

## h1 netgw access list

### Syntax

```h1 netgw access list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource name or ID |

## h1 netgw detach

### Syntax

```h1 netgw detach | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Network gateway name or ID |

## h1 netgw attach

### Syntax

```h1 netgw attach | --network NETWORK id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Network gateway name or ID |

## h1 netgw create

### Syntax

```h1 netgw create | --name NAME --ip IP```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Network gateway name |
| ```--ip IP``` |  | Primary IP for the outgoing traffic |

