# h1 firewall

## Syntax

```h1 firewall | ```

# h1 firewall list

## Syntax

```h1 firewall list | ```

# h1 firewall show

## Syntax

```h1 firewall show | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 firewall delete

## Syntax

```h1 firewall delete | delete-id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

# h1 firewall create

## Syntax

```h1 firewall create | --name NAME```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

# h1 firewall attach

## Syntax

```h1 firewall attach | --network NETWORK id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network name or ID |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 firewall detach

## Syntax

```h1 firewall detach | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 firewall ingress

## Syntax

```h1 firewall ingress | ```

# h1 firewall ingress list

## Syntax

```h1 firewall ingress list | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 firewall ingress add

## Syntax

```h1 firewall ingress add | --name NAME --action ACTION --priority PRIORITY --filter FILTER [--filter FILTER ...] --external EXTERNAL [--external EXTERNAL ...] --internal INTERNAL [--internal INTERNAL ...] id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--action ACTION``` |  | Action |
| ```--priority PRIORITY``` |  | Number between 100 and 999 representing priority |
| ```--filter FILTER``` |  | The filter rule in the form of "protocol:format [, protocol:format...]". Protocol as "icmp" / "udp" / "tcp" / "any". Port as numeric value. Example: "tcp:83". The parameter may occur repeatedly |
| ```--external EXTERNAL``` |  | Ip address or network on internal side.. The parameter may occur repeatedly |
| ```--internal INTERNAL``` |  | Resource tags or * for all. The parameter may occur repeatedly |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 firewall ingress delete

## Syntax

```h1 firewall ingress delete | --rule RULE id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--rule RULE``` |  | Rule identifier |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 firewall egress

## Syntax

```h1 firewall egress | ```

# h1 firewall egress list

## Syntax

```h1 firewall egress list | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 firewall egress add

## Syntax

```h1 firewall egress add | --name NAME --action ACTION --priority PRIORITY --filter FILTER [--filter FILTER ...] --external EXTERNAL [--external EXTERNAL ...] --internal INTERNAL [--internal INTERNAL ...] id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--action ACTION``` |  | Action |
| ```--priority PRIORITY``` |  | Number between 100 and 999 representing priority |
| ```--filter FILTER``` |  | The filter rule in the form of "protocol:format [, protocol:format...]". Protocol as "icmp" / "udp" / "tcp" / "any". Port as numeric value. Example: "tcp:83". The parameter may occur repeatedly |
| ```--external EXTERNAL``` |  | Ip address or network on internal side.. The parameter may occur repeatedly |
| ```--internal INTERNAL``` |  | Resource tags or * for all. The parameter may occur repeatedly |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 firewall egress delete

## Syntax

```h1 firewall egress delete | --rule RULE id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--rule RULE``` |  | Rule identifier |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

