# TOC

* [h1 netgw list](#h1-netgw-list)
* [h1 netgw show](#h1-netgw-show)
* [h1 netgw delete](#h1-netgw-delete)
* [h1 netgw access](#h1-netgw-access)
* [h1 netgw detach](#h1-netgw-detach)
* [h1 netgw attach](#h1-netgw-attach)
* [h1 netgw create](#h1-netgw-create)


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

## h1 netgw delete

### Syntax

```h1 netgw delete | delete-id```

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
| ```tenant``` |  | Tenant name or ID |

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
| ```tenant``` |  | Tenant name or ID |

## h1 netgw access list

### Syntax

```h1 netgw access list | id```

## h1 netgw detach

### Syntax

```h1 netgw detach | id```

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
| ```network``` |  | Network name or id |

## h1 netgw create

### Syntax

```h1 netgw create | --name NAME --ip IP```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Network gateway name |
| ```--ip IP``` |  | Primary IP for the outgoing traffic |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```name``` |  | Network gateway name |
| ```ip``` |  | Primary IP for the outgoing traffic |

