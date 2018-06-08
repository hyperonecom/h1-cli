# TOC

 * [h1 netgw list](#h1-netgw-list) - Resource list
 * [h1 netgw show](#h1-netgw-show) - Resource show
 * [h1 netgw delete](#h1-netgw-delete) - Resource delete
 * [h1 netgw access](#h1-netgw-access) - Manage your NETGW Access Rights
  * [h1 netgw access grant](#h1-netgw-access-grant) - Grant access rights for NETGW
  * [h1 netgw access revoke](#h1-netgw-access-revoke) - Revoke access rights for NETGW
  * [h1 netgw access list](#h1-netgw-access-list) - List of access rights for NETGW
 * [h1 netgw detach](#h1-netgw-detach) - NetGW detach from network
 * [h1 netgw attach](#h1-netgw-attach) - Network gateway attach to a network
 * [h1 netgw create](#h1-netgw-create) - NetGW create


# Specification

## h1 netgw

Manage your NETGW

## h1 netgw list

Resource list

### Syntax

```h1 netgw list | ```

## h1 netgw show

Resource show

### Syntax

```h1 netgw show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 netgw delete

Resource delete

### Syntax

```h1 netgw delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 netgw access

Manage your NETGW Access Rights

## h1 netgw access grant

Grant access rights for NETGW

### Syntax

```h1 netgw access grant | --project PROJECT id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource ID |

## h1 netgw access revoke

Revoke access rights for NETGW

### Syntax

```h1 netgw access revoke | --project PROJECT id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource id |

## h1 netgw access list

List of access rights for NETGW

### Syntax

```h1 netgw access list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource name or ID |

## h1 netgw detach

NetGW detach from network

### Syntax

```h1 netgw detach | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Network gateway name or ID |

## h1 netgw attach

Network gateway attach to a network

### Syntax

```h1 netgw attach | --network NETWORK id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or id |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Network gateway name or ID |

## h1 netgw create

NetGW create

### Syntax

```h1 netgw create | --name NAME --ip IP```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Network gateway name |
| ```--ip IP``` |  | Primary IP for the outgoing traffic |

