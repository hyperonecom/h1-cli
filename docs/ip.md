# TOC

  * [h1 ip list](#h1-ip-list) - List IP address
  * [h1 ip show](#h1-ip-show) - Show IP address
  * [h1 ip delete](#h1-ip-delete) - Delete IP address
  * [h1 ip create](#h1-ip-create) - Create IP address
  * [h1 ip associate](#h1-ip-associate) - Associate IP address
  * [h1 ip disassociate](#h1-ip-disassociate) - Disassociate IP address
  * [h1 ip ptr](#h1-ip-ptr) - Update PTR record of IP address


# Specification

## h1 ip

Manage your IP address

## h1 ip list

List IP address

### Syntax

```h1 ip list | ```

## h1 ip show

Show IP address

### Syntax

```h1 ip show | --ip IP```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip delete

Delete IP address

### Syntax

```h1 ip delete | --ip IP```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip create

Create IP address

### Syntax

```h1 ip create | ```

### Examples

#### Create a new public IP

```bash
h1 ip create
```

## h1 ip associate

Associate IP address

### Syntax

```h1 ip associate | --ip IP --private-ip PRIVATE-IP```

### Examples

#### Associate public IP address to private IP network interface

```bash
h1 ip associate --ip 62.181.8.21 --private-ip 10.177.2.10 --output json
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | Public IP or ID of IP |
| ```--private-ip PRIVATE-IP``` |  | ID of private IP |

## h1 ip disassociate

Disassociate IP address

### Syntax

```h1 ip disassociate | --ip IP```

### Examples

#### Disassociate IP address

```bash
h1 ip disassociate --ip 62.181.8.21
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | Public IP or ID of IP |

## h1 ip ptr

Update PTR record of IP address

### Syntax

```h1 ip ptr | --ip IP --value VALUE```

### Examples

#### Set PTR record for IP address

```bash
h1 ip ptr --ip 62.181.8.21 --value 'example.com'
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address or ID |
| ```--value VALUE``` |  | PTR record |

