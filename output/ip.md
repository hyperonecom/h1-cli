# TOC

* [h1 ip list](#h1 ip list)
* [h1 ip show](#h1 ip show)
* [h1 ip delete](#h1 ip delete)
* [h1 ip disassociate](#h1 ip disassociate)
* [h1 ip associate](#h1 ip associate)
* [h1 ip create](#h1 ip create)
* [h1 ip ptr](#h1 ip ptr)


# Specification

## h1 ip ip

### Syntax

```h1 ip ip | ```

## h1 ip ip list

### Syntax

```h1 ip ip list | ```

## h1 ip ip show

### Syntax

```h1 ip ip show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 ip ip delete

### Syntax

```h1 ip ip delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

## h1 ip ip disassociate

### Syntax

```h1 ip ip disassociate | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | IP id |

## h1 ip ip associate

### Syntax

```h1 ip ip associate | --private-ip PRIVATE-IP id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--private-ip PRIVATE-IP``` |  | ID of private IP |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Public IP or ID or IP |

## h1 ip ip create

### Syntax

```h1 ip ip create | ```

## h1 ip ip ptr

### Syntax

```h1 ip ip ptr | --value VALUE id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--value VALUE``` |  | PTR record |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | IP id |

