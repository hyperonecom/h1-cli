# TOC

 * [h1 ip list](#h1-ip-list) - Resource list
 * [h1 ip show](#h1-ip-show) - Resource show
 * [h1 ip delete](#h1-ip-delete) - Resource delete
 * [h1 ip disassociate](#h1-ip-disassociate) - IP disassociate
 * [h1 ip associate](#h1-ip-associate) - IP associate
 * [h1 ip create](#h1-ip-create) - IP create
 * [h1 ip ptr](#h1-ip-ptr) - IP disassociate


# Specification

## h1 ip

Manage your IP

## h1 ip list

Resource list

### Syntax

```h1 ip list | ```

## h1 ip show

Resource show

### Syntax

```h1 ip show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 ip delete

Resource delete

### Syntax

```h1 ip delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 ip disassociate

IP disassociate

### Syntax

```h1 ip disassociate | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | IP id |

## h1 ip associate

IP associate

### Syntax

```h1 ip associate | --private-ip PRIVATE-IP id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--private-ip PRIVATE-IP``` |  | ID of private IP |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Public IP or ID or IP |

## h1 ip create

IP create

### Syntax

```h1 ip create | ```

## h1 ip ptr

IP disassociate

### Syntax

```h1 ip ptr | --value VALUE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--value VALUE``` |  | PTR record |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | IP id |

