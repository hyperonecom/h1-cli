# TOC

 * [h1 netgw list](#h1-netgw-list) - List network gateway
 * [h1 netgw show](#h1-netgw-show) - Show network gateway
 * [h1 netgw delete](#h1-netgw-delete) - Delete network gateway
 * [h1 netgw create](#h1-netgw-create) - Network gateway create
 * [h1 netgw detach](#h1-netgw-detach) - Network gateway detach from a network
 * [h1 netgw attach](#h1-netgw-attach) - Network gateway attach to a network
 * [h1 netgw access](#h1-netgw-access) - Manage your network gateway access rights
  * [h1 netgw access grant](#h1-netgw-access-grant) - Grant access rights for network gateway
  * [h1 netgw access revoke](#h1-netgw-access-revoke) - Revoke access rights for network gateway
  * [h1 netgw access list](#h1-netgw-access-list) - List of access rights for network gateway


# Specification

## h1 netgw

Manage your network gateway

## h1 netgw list

List network gateway

### Syntax

```h1 netgw list | ```

## h1 netgw show

Show network gateway

### Syntax

```h1 netgw show | --netgw NETGW```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

## h1 netgw delete

Delete network gateway

### Syntax

```h1 netgw delete | --netgw NETGW```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

## h1 netgw create

Network gateway create

### Syntax

```h1 netgw create | --name NAME --ip IP```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Network gateway name or ID |
| ```--ip IP``` |  | Primary IP for the outgoing traffic |

## h1 netgw detach

Network gateway detach from a network

### Syntax

```h1 netgw detach | --netgw NETGW```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway name or ID |

## h1 netgw attach

Network gateway attach to a network

### Syntax

```h1 netgw attach | --netgw NETGW --network NETWORK```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway name or ID |
| ```--network NETWORK``` |  | Network name or ID |

## h1 netgw access

Manage your network gateway access rights

## h1 netgw access grant

Grant access rights for network gateway

### Syntax

```h1 netgw access grant | --netgw NETGW --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 netgw access revoke

Revoke access rights for network gateway

### Syntax

```h1 netgw access revoke | --netgw NETGW --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 netgw access list

List of access rights for network gateway

### Syntax

```h1 netgw access list | --netgw NETGW```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

