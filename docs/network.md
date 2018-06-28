# TOC

  * [h1 network list](#h1-network-list) - List network
  * [h1 network show](#h1-network-show) - Show network
  * [h1 network delete](#h1-network-delete) - Delete network
  * [h1 network create](#h1-network-create) - Create network
  * [h1 network ip](#h1-network-ip) - Manage your IP address
    * [h1 network ip list](#h1-network-ip-list) - List IP address
    * [h1 network ip show](#h1-network-ip-show) - Show IP address
    * [h1 network ip delete](#h1-network-ip-delete) - Delete IP address
    * [h1 network ip create](#h1-network-ip-create) - Create IP address


# Specification

## h1 network

Manage your network

## h1 network list

List network

### Syntax

```h1 network list | ```

## h1 network show

Show network

### Syntax

```h1 network show | --network NETWORK```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network ID or name |

## h1 network delete

Delete network

### Syntax

```h1 network delete | --network NETWORK```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network ID or name |

## h1 network create

Create network

### Syntax

```h1 network create | --name NAME```

### Examples

#### Create a network

```bash
h1 network create --name my-safe-net
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

## h1 network ip

Manage your IP address

## h1 network ip list

List IP address

### Syntax

```h1 network ip list | --network NETWORK```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |

## h1 network ip show

Show IP address

### Syntax

```h1 network ip show | --network NETWORK --ip IP```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |
| ```--ip IP``` |  | IP address ID or name |

## h1 network ip delete

Delete IP address

### Syntax

```h1 network ip delete | --network NETWORK --ip IP```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |
| ```--ip IP``` |  | IP address ID or name |

## h1 network ip create

Create IP address

### Syntax

```h1 network ip create | --network NETWORK```

### Examples

#### Create a new IP address in network

```bash
h1 network ip create --network my-safe-net
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |

