# TOC

  * [h1 network list](#h1-network-list) - List network
  * [h1 network show](#h1-network-show) - Show network
  * [h1 network delete](#h1-network-delete) - Delete network
  * [h1 network history](#h1-network-history) - History of network
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

### Example

```bash
h1 network list
```

## h1 network show

Show network

### Syntax

```h1 network show | --network NETWORK```

### Example

```bash
h1 network show --network my-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network ID or name |

## h1 network delete

Delete network

### Syntax

```h1 network delete | --network NETWORK```

### Example

```bash
h1 network delete --network my-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network ID or name |

## h1 network history

History of network

### Syntax

```h1 network history | --network NETWORK```

### Example

```bash
h1 network history --network my-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network ID or name |

## h1 network create

Create network

### Syntax

```h1 network create | --name NAME [--address ADDRESS] [--gateway GATEWAY]```

### Examples

#### Create a network

```bash
h1 network create --name my-safe-net
```

#### Create a network by specifying the address space and gateway address

```bash
h1 network create --name my-ip-network --address 10.214.180.0/24 --gateway 10.214.180.10
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--address ADDRESS``` |  | Network address space as CIDR, network address and prefix eg. 10.214.180.0/24 |
| ```--gateway GATEWAY``` |  | IP address of network gateway within the network address space eg. 10.214.180.10 |

## h1 network ip

Manage your IP address

## h1 network ip list

List IP address

### Syntax

```h1 network ip list | --network NETWORK```

### Example

```bash
h1 network ip list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |

## h1 network ip show

Show IP address

### Syntax

```h1 network ip show | --network NETWORK --ip IP```

### Example

```bash
h1 network ip show --ip my-ip --network my-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |
| ```--ip IP``` |  | IP address ID or name |

## h1 network ip delete

Delete IP address

### Syntax

```h1 network ip delete | --network NETWORK --ip IP```

### Example

```bash
h1 network ip delete --ip my-ip --network my-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |
| ```--ip IP``` |  | IP address ID or name |

## h1 network ip create

Create IP address

### Syntax

```h1 network ip create | --network NETWORK [--address ADDRESS]```

### Examples

#### Create a new IP address in network

```bash
h1 network ip create --network my-safe-net
```

#### Create a custom IP address in network

```bash
h1 network ip create --name my-ip-network --address 10.214.180.10
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--address ADDRESS``` |  | IP address |

