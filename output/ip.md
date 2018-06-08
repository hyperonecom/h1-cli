# TOC

* [h1 ip list](#h1-ip-list)
* [h1 ip show](#h1-ip-show)
* [h1 ip delete](#h1-ip-delete)
* [h1 ip disassociate](#h1-ip-disassociate)
* [h1 ip associate](#h1-ip-associate)
* [h1 ip create](#h1-ip-create)
* [h1 ip ptr](#h1-ip-ptr)


# Specification

## h1 ip

### Syntax

```h1 ip | ```

## h1 ip list

### Syntax

```h1 ip list | ```

## h1 ip show

### Syntax

```h1 ip show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 ip delete

### Syntax

```h1 ip delete | --delete-id DELETE-ID```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 ip disassociate

### Syntax

```h1 ip disassociate | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | IP id |

## h1 ip associate

### Syntax

```h1 ip associate | --private-ip PRIVATE-IP id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--private-ip PRIVATE-IP``` |  | ID of private IP |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Public IP or ID or IP |

## h1 ip create

### Syntax

```h1 ip create | ```

## h1 ip ptr

### Syntax

```h1 ip ptr | --value VALUE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--value VALUE``` |  | PTR record |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | IP id |

