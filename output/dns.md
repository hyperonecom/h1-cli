# TOC

* [h1 dns zone](#h1-dns-zone)
* [h1 dns record-set](#h1-dns-record-set)


# Specification

## h1 dns

### Syntax

```h1 dns | ```

## h1 dns zone

### Syntax

```h1 dns zone | ```

## h1 dns zone list

### Syntax

```h1 dns zone list | ```

## h1 dns zone show

### Syntax

```h1 dns zone show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 dns zone delete

### Syntax

```h1 dns zone delete | --delete-id DELETE-ID```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 dns zone create

### Syntax

```h1 dns zone create | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | Dns zone name |

## h1 dns zone export

### Syntax

```h1 dns zone export | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | Dns zone name |

## h1 dns record-set

### Syntax

```h1 dns record-set | ```

## h1 dns record-set a

### Syntax

```h1 dns record-set a | ```

## h1 dns record-set a list

### Syntax

```h1 dns record-set a list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set a create

### Syntax

```h1 dns record-set a create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set a delete

### Syntax

```h1 dns record-set a delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set a add-record

### Syntax

```h1 dns record-set a add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set a delete-record

### Syntax

```h1 dns record-set a delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname

### Syntax

```h1 dns record-set cname | ```

## h1 dns record-set cname list

### Syntax

```h1 dns record-set cname list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set cname create

### Syntax

```h1 dns record-set cname create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname delete

### Syntax

```h1 dns record-set cname delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set cname add-record

### Syntax

```h1 dns record-set cname add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname delete-record

### Syntax

```h1 dns record-set cname delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt

### Syntax

```h1 dns record-set txt | ```

## h1 dns record-set txt list

### Syntax

```h1 dns record-set txt list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set txt create

### Syntax

```h1 dns record-set txt create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt delete

### Syntax

```h1 dns record-set txt delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set txt add-record

### Syntax

```h1 dns record-set txt add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt delete-record

### Syntax

```h1 dns record-set txt delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx

### Syntax

```h1 dns record-set mx | ```

## h1 dns record-set mx list

### Syntax

```h1 dns record-set mx list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set mx create

### Syntax

```h1 dns record-set mx create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx delete

### Syntax

```h1 dns record-set mx delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set mx add-record

### Syntax

```h1 dns record-set mx add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx delete-record

### Syntax

```h1 dns record-set mx delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns

### Syntax

```h1 dns record-set ns | ```

## h1 dns record-set ns list

### Syntax

```h1 dns record-set ns list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set ns create

### Syntax

```h1 dns record-set ns create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns delete

### Syntax

```h1 dns record-set ns delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set ns add-record

### Syntax

```h1 dns record-set ns add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns delete-record

### Syntax

```h1 dns record-set ns delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv

### Syntax

```h1 dns record-set srv | ```

## h1 dns record-set srv list

### Syntax

```h1 dns record-set srv list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set srv create

### Syntax

```h1 dns record-set srv create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv delete

### Syntax

```h1 dns record-set srv delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set srv add-record

### Syntax

```h1 dns record-set srv add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv delete-record

### Syntax

```h1 dns record-set srv delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set list

### Syntax

```h1 dns record-set list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

