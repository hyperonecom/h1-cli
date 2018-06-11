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

```h1 ip show | --ip IP```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip delete

### Syntax

```h1 ip delete | --ip IP```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip disassociate

### Syntax

```h1 ip disassociate | --ip IP```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--ip IP``` |  | Public IP or ID of IP |

## h1 ip associate

### Syntax

```h1 ip associate | --ip IP --private-ip PRIVATE-IP```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--ip IP``` |  | Public IP or ID of IP |
| ```--private-ip PRIVATE-IP``` |  | ID of private IP |

## h1 ip create

### Syntax

```h1 ip create | ```

## h1 ip ptr

### Syntax

```h1 ip ptr | --ip IP --value VALUE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address or ID |
| ```--value VALUE``` |  | PTR record |

