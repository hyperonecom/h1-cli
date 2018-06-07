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

## h1 ip delete

### Syntax

```h1 ip delete | delete-id```

## h1 ip disassociate

### Syntax

```h1 ip disassociate | id```

## h1 ip associate

### Syntax

```h1 ip associate | --private-ip PRIVATE-IP id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--private-ip PRIVATE-IP``` |  | ID of private IP |

## h1 ip create

### Syntax

```h1 ip create | ```

## h1 ip ptr

### Syntax

```h1 ip ptr | --value VALUE id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--value VALUE``` |  | PTR record |

