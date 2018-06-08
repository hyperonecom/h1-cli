# TOC

* [h1 netgw list](#h1-netgw-list)
* [h1 netgw show](#h1-netgw-show)
* [h1 netgw delete](#h1-netgw-delete)
* [h1 netgw create](#h1-netgw-create)
* [h1 netgw detach](#h1-netgw-detach)
* [h1 netgw attach](#h1-netgw-attach)
* [h1 netgw access](#h1-netgw-access)


# Specification

## h1 netgw

### Syntax

```h1 netgw | ```

## h1 netgw list

### Syntax

```h1 netgw list | ```

## h1 netgw show

### Syntax

```h1 netgw show | --netgw NETGW```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

## h1 netgw delete

### Syntax

```h1 netgw delete | --netgw NETGW```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

## h1 netgw create

### Syntax

```h1 netgw create | --name NAME --ip IP```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Network gateway name or ID |
| ```--ip IP``` |  | Primary IP for the outgoing traffic |

## h1 netgw detach

### Syntax

```h1 netgw detach | --netgw NETGW```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway name or ID |

## h1 netgw attach

### Syntax

```h1 netgw attach | --netgw NETGW --network NETWORK```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway name or ID |
| ```--network NETWORK``` |  | Network name or ID |

## h1 netgw access

### Syntax

```h1 netgw access | ```

## h1 netgw access grant

### Syntax

```h1 netgw access grant | --netgw NETGW --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 netgw access revoke

### Syntax

```h1 netgw access revoke | --netgw NETGW --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 netgw access list

### Syntax

```h1 netgw access list | --netgw NETGW```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

