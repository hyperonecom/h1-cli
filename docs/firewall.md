# TOC

 * [h1 firewall list](#h1-firewall-list) - Resource list
 * [h1 firewall show](#h1-firewall-show) - Resource show
 * [h1 firewall delete](#h1-firewall-delete) - Resource delete
 * [h1 firewall create](#h1-firewall-create) - Create
 * [h1 firewall attach](#h1-firewall-attach) - Attach to a network
 * [h1 firewall detach](#h1-firewall-detach) - Detach from network
 * [h1 firewall ingress](#h1-firewall-ingress) - undefined
  * [h1 firewall ingress list](#h1-firewall-ingress-list) - List
  * [h1 firewall ingress add](#h1-firewall-ingress-add) - Add
  * [h1 firewall ingress delete](#h1-firewall-ingress-delete) - Delete
 * [h1 firewall egress](#h1-firewall-egress) - undefined
  * [h1 firewall egress list](#h1-firewall-egress-list) - List
  * [h1 firewall egress add](#h1-firewall-egress-add) - Add
  * [h1 firewall egress delete](#h1-firewall-egress-delete) - Delete


# Specification

## h1 firewall

Manage your FIREWALL

## h1 firewall list

Resource list

### Syntax

```h1 firewall list | ```

## h1 firewall show

Resource show

### Syntax

```h1 firewall show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 firewall delete

Resource delete

### Syntax

```h1 firewall delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 firewall create

Create

### Syntax

```h1 firewall create | --name NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

## h1 firewall attach

Attach to a network

### Syntax

```h1 firewall attach | --network NETWORK id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 firewall detach

Detach from network

### Syntax

```h1 firewall detach | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 firewall ingress

undefined

## h1 firewall ingress list

List

### Syntax

```h1 firewall ingress list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 firewall ingress add

Add

### Syntax

```h1 firewall ingress add | --name NAME --action ACTION --priority PRIORITY --filter FILTER [--filter FILTER ...] --external EXTERNAL [--external EXTERNAL ...] --internal INTERNAL [--internal INTERNAL ...] id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--action ACTION``` |  | Action |
| ```--priority PRIORITY``` |  | Number between 100 and 999 representing priority |
| ```--filter FILTER [--filter FILTER ...]``` |  | The filter rule in the form of "protocol:format [, protocol:format...]". Protocol as "icmp" / "udp" / "tcp" / "any". Port as numeric value. Example: "tcp:83". The parameter may occur repeatedly |
| ```--external EXTERNAL [--external EXTERNAL ...]``` |  | Ip address or network on internal side.. The parameter may occur repeatedly |
| ```--internal INTERNAL [--internal INTERNAL ...]``` |  | Resource tags or * for all. The parameter may occur repeatedly |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 firewall ingress delete

Delete

### Syntax

```h1 firewall ingress delete | --rule RULE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--rule RULE``` |  | Rule identifier |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 firewall egress

undefined

## h1 firewall egress list

List

### Syntax

```h1 firewall egress list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 firewall egress add

Add

### Syntax

```h1 firewall egress add | --name NAME --action ACTION --priority PRIORITY --filter FILTER [--filter FILTER ...] --external EXTERNAL [--external EXTERNAL ...] --internal INTERNAL [--internal INTERNAL ...] id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--action ACTION``` |  | Action |
| ```--priority PRIORITY``` |  | Number between 100 and 999 representing priority |
| ```--filter FILTER [--filter FILTER ...]``` |  | The filter rule in the form of "protocol:format [, protocol:format...]". Protocol as "icmp" / "udp" / "tcp" / "any". Port as numeric value. Example: "tcp:83". The parameter may occur repeatedly |
| ```--external EXTERNAL [--external EXTERNAL ...]``` |  | Ip address or network on internal side.. The parameter may occur repeatedly |
| ```--internal INTERNAL [--internal INTERNAL ...]``` |  | Resource tags or * for all. The parameter may occur repeatedly |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 firewall egress delete

Delete

### Syntax

```h1 firewall egress delete | --rule RULE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--rule RULE``` |  | Rule identifier |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

