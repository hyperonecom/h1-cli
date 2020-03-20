# TOC

  * [h1 network list](#h1-network-list) - List Network
  * [h1 network show](#h1-network-show) - Show Network
  * [h1 network delete](#h1-network-delete) - Delete Network
  * [h1 network history](#h1-network-history) - History of Network
  * [h1 network rename](#h1-network-rename) - Rename Network
  * [h1 network service](#h1-network-service) - Manage your services of Network
    * [h1 network service list](#h1-network-service-list) - List Service for Network
    * [h1 network service show](#h1-network-service-show) - Show Service for Network
  * [h1 network access](#h1-network-access) - Manage your Network access rights
    * [h1 network access check](#h1-network-access-check) - Check access rights for Network
  * [h1 network firewall](#h1-network-firewall) - Manage Firewall of Network
    * [h1 network firewall add](#h1-network-firewall-add) - Add firewall to Network
    * [h1 network firewall remove](#h1-network-firewall-remove) - Remove firewall from Network
  * [h1 network create](#h1-network-create) - Create Network
  * [h1 network ip](#h1-network-ip) - Manage your IP address
    * [h1 network ip show](#h1-network-ip-show) - Show IP address
    * [h1 network ip delete](#h1-network-ip-delete) - Delete IP address
    * [h1 network ip create](#h1-network-ip-create) - Create IP address
    * [h1 network ip list](#h1-network-ip-list) - List IP address
    * [h1 network ip service](#h1-network-ip-service) - Manage your services of IP address
      * [h1 network ip service list](#h1-network-ip-service-list) - List Service for IP address
      * [h1 network ip service show](#h1-network-ip-service-show) - Show Service for IP address
    * [h1 network ip tag](#h1-network-ip-tag) - Manage your tag
      * [h1 network ip tag list](#h1-network-ip-tag-list) - List tag
      * [h1 network ip tag add](#h1-network-ip-tag-add) - Add a tag to IP address
      * [h1 network ip tag delete](#h1-network-ip-tag-delete) - Delete a tag of IP address
  * [h1 network tag](#h1-network-tag) - Manage your tag
    * [h1 network tag list](#h1-network-tag-list) - List tag
    * [h1 network tag add](#h1-network-tag-add) - Add a tag to Network
    * [h1 network tag delete](#h1-network-tag-delete) - Delete a tag of Network


# Specification

## h1 network

Manage your Network

## h1 network list

List Network

### Syntax

```h1 network list | ```
### Example

```bash
h1 network list
```

## h1 network show

Show Network

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

Delete Network

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

History of Network

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

## h1 network rename

Rename Network

### Syntax

```h1 network rename | --network NETWORK --new-name NEW-NAME```
### Example

```bash
h1 network rename --network my-network --new-name my-renamed-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 network service

Manage your services of Network

## h1 network service list

List Service for Network

### Syntax

```h1 network service list | --network NETWORK```
### Example

```bash
h1 network service list --network test-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network ID or name |

## h1 network service show

Show Service for Network

### Syntax

```h1 network service show | --network NETWORK --service SERVICE```
### Example

```bash
h1 network service show --service my-service --network my-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network ID or name |
| ```--service SERVICE``` |  | Service for Network ID or name |

## h1 network access

Manage your Network access rights

## h1 network access check

Check access rights for Network

### Syntax

```h1 network access check | --network NETWORK```
### Example

```bash
h1 network access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network ID or name |

## h1 network firewall

Manage Firewall of Network

## h1 network firewall add

Add firewall to Network

### Syntax

```h1 network firewall add | --firewall FIREWALL --network NETWORK```
### Example

```
h1 network firewall add --network my-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--network NETWORK``` |  | Network ID or name |

## h1 network firewall remove

Remove firewall from Network

### Syntax

```h1 network firewall remove | --network NETWORK```
### Example

```
h1 network firewall remove --network my-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network ID or name |

## h1 network create

Create Network

### Syntax

```h1 network create | --name NAME [--tag TAG [--tag TAG ...]] [--address ADDRESS] [--gateway GATEWAY]```
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
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--address ADDRESS``` |  | Network address space as CIDR, network address and prefix eg. 10.214.180.0/24 |
| ```--gateway GATEWAY``` |  | IP address of network gateway within the network address space eg. 10.214.180.10 |

## h1 network ip

Manage your IP address

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

```h1 network ip create | --network NETWORK [--tag TAG [--tag TAG ...]] [--address ADDRESS]```
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
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--address ADDRESS``` |  | IP address |

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

## h1 network ip service

Manage your services of IP address

## h1 network ip service list

List Service for IP address

### Syntax

```h1 network ip service list | --network NETWORK --ip IP```
### Example

```bash
h1 network ip service list --ip test-ip --network my-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |
| ```--ip IP``` |  | IP address ID or name |

## h1 network ip service show

Show Service for IP address

### Syntax

```h1 network ip service show | --network NETWORK --ip IP --service SERVICE```
### Example

```bash
h1 network ip service show --service my-service --ip my-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |
| ```--ip IP``` |  | IP address ID or name |
| ```--service SERVICE``` |  | Service for IP address ID or name |

## h1 network ip tag

Manage your tag

## h1 network ip tag list

List tag

### Syntax

```h1 network ip tag list | --network NETWORK --ip IP```
### Example

```bash
h1 network ip tag list --ip my-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |
| ```--ip IP``` |  | IP address ID or name |

## h1 network ip tag add

Add a tag to IP address

### Syntax

```h1 network ip tag add | --tag TAG [--tag TAG ...] --network NETWORK --ip IP```
### Example

```bash
h1 network ip tag add --ip test-ip --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--network NETWORK``` |  | Network name or ID |
| ```--ip IP``` |  | IP address ID or name |

## h1 network ip tag delete

Delete a tag of IP address

### Syntax

```h1 network ip tag delete | --tag TAG --network NETWORK --ip IP```
### Example

```bash
h1 network ip tag delete --ip test-ip --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--network NETWORK``` |  | Network name or ID |
| ```--ip IP``` |  | IP address ID or name |

## h1 network tag

Manage your tag

## h1 network tag list

List tag

### Syntax

```h1 network tag list | --network NETWORK```
### Example

```bash
h1 network tag list --network my-network
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network ID or name |

## h1 network tag add

Add a tag to Network

### Syntax

```h1 network tag add | --tag TAG [--tag TAG ...] --network NETWORK```
### Example

```bash
h1 network tag add --network test-network --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--network NETWORK``` |  | Network ID or name |

## h1 network tag delete

Delete a tag of Network

### Syntax

```h1 network tag delete | --tag TAG --network NETWORK```
### Example

```bash
h1 network tag delete --network test-network --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--network NETWORK``` |  | Network ID or name |

