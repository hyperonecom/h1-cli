# TOC

  * [h1 netgw list](#h1-netgw-list) - List network gateway
  * [h1 netgw show](#h1-netgw-show) - Show network gateway
  * [h1 netgw delete](#h1-netgw-delete) - Delete network gateway
  * [h1 netgw history](#h1-netgw-history) - History of network gateway
  * [h1 netgw rename](#h1-netgw-rename) - Rename network gateway
  * [h1 netgw tag](#h1-netgw-tag) - Manage your tag
    * [h1 netgw tag list](#h1-netgw-tag-list) - List tag
    * [h1 netgw tag add](#h1-netgw-tag-add) - Add a tag to network gateway
    * [h1 netgw tag delete](#h1-netgw-tag-delete) - Delete a tag of network gateway
  * [h1 netgw create](#h1-netgw-create) - Network gateway create
  * [h1 netgw detach](#h1-netgw-detach) - Network gateway detach from a network
  * [h1 netgw attach](#h1-netgw-attach) - Network gateway attach to a network


# Specification

## h1 netgw

Manage your network gateway

## h1 netgw list

List network gateway

### Syntax

```h1 netgw list | ```

### Example

```bash
h1 netgw list
```

## h1 netgw show

Show network gateway

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

Delete network gateway

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

History of network gateway

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

Rename network gateway

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

Add a tag to network gateway

### Syntax

```h1 netgw tag add | --netgw NETGW [--tag TAG [--tag TAG ...]]```

### Example

```bash
h1 netgw tag add --netgw test-netgw --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--netgw NETGW``` |  | Network gateway ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 netgw tag delete

Delete a tag of network gateway

### Syntax

```h1 netgw tag delete | --tag TAG --netgw NETGW```

### Example

```bash
h1 netgw tag delete --vm test-vm --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
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

