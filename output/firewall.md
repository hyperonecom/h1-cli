# TOC

* [h1 firewall list](#h1-firewall-list)
* [h1 firewall show](#h1-firewall-show)
* [h1 firewall delete](#h1-firewall-delete)
* [h1 firewall create](#h1-firewall-create)
* [h1 firewall attach](#h1-firewall-attach)
* [h1 firewall detach](#h1-firewall-detach)
* [h1 firewall ingress](#h1-firewall-ingress)
* [h1 firewall egress](#h1-firewall-egress)


# Specification

## h1 firewall

### Syntax

```h1 firewall | ```

## h1 firewall list

### Syntax

```h1 firewall list | ```

## h1 firewall show

### Syntax

```h1 firewall show | --firewall FIREWALL```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall delete

### Syntax

```h1 firewall delete | --firewall FIREWALL```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall create

### Syntax

```h1 firewall create | --name NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

## h1 firewall attach

### Syntax

```h1 firewall attach | --firewall FIREWALL --network NETWORK```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--network NETWORK``` |  | Network ID or name |

## h1 firewall detach

### Syntax

```h1 firewall detach | --firewall FIREWALL```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall ingress

### Syntax

```h1 firewall ingress | --firewall FIREWALL```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall ingress list

### Syntax

```h1 firewall ingress list | --firewall FIREWALL```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall ingress add

### Syntax

```h1 firewall ingress add | --firewall FIREWALL --name NAME --action ACTION --priority PRIORITY --filter FILTER [--filter FILTER ...] --external EXTERNAL [--external EXTERNAL ...] --internal INTERNAL [--internal INTERNAL ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--name NAME``` |  | Name |
| ```--action ACTION``` |  | Action |
| ```--priority PRIORITY``` |  | Number between 100 and 999 representing priority |
| ```--filter FILTER``` |  | The filter rule in the form of "protocol:format [, protocol:format...]". Protocol as "icmp" / "udp" / "tcp" / "any". Port as numeric value. Example: "tcp:83". The parameter may occur repeatedly |
| ```--external EXTERNAL``` |  | IP address or network on external side. The parameter may occur repeatedly |
| ```--internal INTERNAL``` |  | Resource tags or * for all. The parameter may occur repeatedly |

## h1 firewall ingress delete

### Syntax

```h1 firewall ingress delete | --firewall FIREWALL --rule RULE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--rule RULE``` |  | Rule identifier |

## h1 firewall egress

### Syntax

```h1 firewall egress | --firewall FIREWALL```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall egress list

### Syntax

```h1 firewall egress list | --firewall FIREWALL```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall egress add

### Syntax

```h1 firewall egress add | --firewall FIREWALL --name NAME --action ACTION --priority PRIORITY --filter FILTER [--filter FILTER ...] --external EXTERNAL [--external EXTERNAL ...] --internal INTERNAL [--internal INTERNAL ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--name NAME``` |  | Name |
| ```--action ACTION``` |  | Action |
| ```--priority PRIORITY``` |  | Number between 100 and 999 representing priority |
| ```--filter FILTER``` |  | The filter rule in the form of "protocol:format [, protocol:format...]". Protocol as "icmp" / "udp" / "tcp" / "any". Port as numeric value. Example: "tcp:83". The parameter may occur repeatedly |
| ```--external EXTERNAL``` |  | IP address or network on external side. The parameter may occur repeatedly |
| ```--internal INTERNAL``` |  | Resource tags or * for all. The parameter may occur repeatedly |

## h1 firewall egress delete

### Syntax

```h1 firewall egress delete | --firewall FIREWALL --rule RULE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--rule RULE``` |  | Rule identifier |

