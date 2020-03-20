# TOC

  * [h1 netgw create](#h1-netgw-create) - Create Network gateway
  * [h1 netgw list](#h1-netgw-list) - List Network gateway
  * [h1 netgw show](#h1-netgw-show) - Show Network gateway
  * [h1 netgw delete](#h1-netgw-delete) - Delete Network gateway
  * [h1 netgw history](#h1-netgw-history) - History of Network gateway
  * [h1 netgw rename](#h1-netgw-rename) - Rename Network gateway
  * [h1 netgw service](#h1-netgw-service) - Manage your services of Network gateway
    * [h1 netgw service list](#h1-netgw-service-list) - List Service for Network gateway
    * [h1 netgw service show](#h1-netgw-service-show) - Show Service for Network gateway
  * [h1 netgw access](#h1-netgw-access) - Manage your Network gateway access rights
    * [h1 netgw access check](#h1-netgw-access-check) - Check access rights for Network gateway
  * [h1 netgw create](#h1-netgw-create) - Network gateway create
  * [h1 netgw detach](#h1-netgw-detach) - Network gateway detach from a network
  * [h1 netgw attach](#h1-netgw-attach) - Network gateway attach to a network
  * [h1 netgw tag](#h1-netgw-tag) - Manage your tag
    * [h1 netgw tag list](#h1-netgw-tag-list) - List tag
    * [h1 netgw tag add](#h1-netgw-tag-add) - Add a tag to Network gateway
    * [h1 netgw tag delete](#h1-netgw-tag-delete) - Delete a tag of Network gateway


# Specification

## h1 netgw

Manage your Network gateway

### Examples

#### Create new network gateway

```bash
h1 netgw create --name my-netgw --ip 62.181.8.21
```

Hint: Use ```h1 ip list``` to list available IP address or ```h1 ip create``` to create a new one.

## h1 netgw create

Create Network gateway

### Syntax

```h1 netgw create | --name NAME --ip IP [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 netgw create --name my-netgw --ip 62.181.8.21
```

Hint: Use ```h1 ip list``` to list available IP address or ```h1 ip create``` to create a new one.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Network gateway name or ID |
| ```--ip IP``` |  | Primary IP for the outgoing traffic |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 netgw list

List Network gateway

### Syntax

```h1 netgw list | ```
### Example

```bash
h1 netgw list
```

## h1 netgw show

Show Network gateway

### Syntax

```h1 netgw show | --netgw NETGW```
### Example

```bash
h1 netgw show --netgw my-netgw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

## h1 netgw delete

Delete Network gateway

### Syntax

```h1 netgw delete | --netgw NETGW```
### Example

```bash
h1 netgw delete --netgw my-netgw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

## h1 netgw history

History of Network gateway

### Syntax

```h1 netgw history | --netgw NETGW```
### Example

```bash
h1 netgw history --netgw my-netgw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

## h1 netgw rename

Rename Network gateway

### Syntax

```h1 netgw rename | --netgw NETGW --new-name NEW-NAME```
### Example

```bash
h1 netgw rename --netgw my-netgw --new-name my-renamed-netgw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 netgw service

Manage your services of Network gateway

## h1 netgw service list

List Service for Network gateway

### Syntax

```h1 netgw service list | --netgw NETGW```
### Example

```bash
h1 netgw service list --netgw test-netgw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

## h1 netgw service show

Show Service for Network gateway

### Syntax

```h1 netgw service show | --netgw NETGW --service SERVICE```
### Example

```bash
h1 netgw service show --service my-service --netgw my-netgw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |
| ```--service SERVICE``` |  | Service for Network gateway ID or name |

## h1 netgw access

Manage your Network gateway access rights

## h1 netgw access check

Check access rights for Network gateway

### Syntax

```h1 netgw access check | --netgw NETGW```
### Example

```bash
h1 netgw access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

## h1 netgw create

Network gateway create

### Syntax

```h1 netgw create | --name NAME --ip IP [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 netgw create --name my-netgw --ip 62.181.8.21
```

Hint: Use ```h1 ip list``` to list available IP address or ```h1 ip create``` to create a new one.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Network gateway name or ID |
| ```--ip IP``` |  | Primary IP for the outgoing traffic |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 netgw detach

Network gateway detach from a network

### Syntax

```h1 netgw detach | --netgw NETGW```
### Example

```bash
h1 netgw detach --netgw my-netgw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway name or ID |

## h1 netgw attach

Network gateway attach to a network

### Syntax

```h1 netgw attach | --netgw NETGW --network NETWORK```
### Example

```bash
h1 netgw attach --netgw my-netgw --network my-safe-net
```

Hint: Use ```h1 network list``` to list available network or ```h1 network create``` to create a new one.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway name or ID |
| ```--network NETWORK``` |  | Network name or ID |

## h1 netgw tag

Manage your tag

## h1 netgw tag list

List tag

### Syntax

```h1 netgw tag list | --netgw NETGW```
### Example

```bash
h1 netgw tag list --netgw my-netgw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

## h1 netgw tag add

Add a tag to Network gateway

### Syntax

```h1 netgw tag add | --tag TAG [--tag TAG ...] --netgw NETGW```
### Example

```bash
h1 netgw tag add --netgw test-netgw --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--netgw NETGW``` |  | Network gateway ID or name |

## h1 netgw tag delete

Delete a tag of Network gateway

### Syntax

```h1 netgw tag delete | --tag TAG --netgw NETGW```
### Example

```bash
h1 netgw tag delete --netgw test-netgw --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--netgw NETGW``` |  | Network gateway ID or name |

