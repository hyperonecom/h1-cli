# TOC

 * [h1 network list](#h1-network-list) - Resource list
 * [h1 network show](#h1-network-show) - Resource show
 * [h1 network delete](#h1-network-delete) - Resource delete
 * [h1 network create](#h1-network-create) - Network create
 * [h1 network ip](#h1-network-ip) - Manage your IP
  * [h1 network ip list](#h1-network-ip-list) - Resource list
  * [h1 network ip show](#h1-network-ip-show) - Resource show
  * [h1 network ip delete](#h1-network-ip-delete) - Resource delete
  * [h1 network ip create](#h1-network-ip-create) - IP create


# Specification

## h1 network

Manage your NETWORK

## h1 network list

Resource list

### Syntax

```h1 network list | ```

## h1 network show

Resource show

### Syntax

```h1 network show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 network delete

Resource delete

### Syntax

```h1 network delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 network create

Network create

### Syntax

```h1 network create | --name NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

## h1 network ip

Manage your IP

## h1 network ip list

Resource list

### Syntax

```h1 network ip list | --network NETWORK```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |

## h1 network ip show

Resource show

### Syntax

```h1 network ip show | --network NETWORK id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 network ip delete

Resource delete

### Syntax

```h1 network ip delete | --network NETWORK delete-id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 network ip create

IP create

### Syntax

```h1 network ip create | --network NETWORK```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |

