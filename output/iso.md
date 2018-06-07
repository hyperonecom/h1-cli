# TOC

* [h1 iso list](#h1 iso list)
* [h1 iso show](#h1 iso show)
* [h1 iso delete](#h1 iso delete)
* [h1 iso rename](#h1 iso rename)
* [h1 iso access](#h1 iso access)
* [h1 iso access grant](#h1 iso access grant)
* [h1 iso access revoke](#h1 iso access revoke)
* [h1 iso access list](#h1 iso access list)
* [h1 iso resume](#h1 iso resume)
* [h1 iso create](#h1 iso create)


# Specification

## h1 iso iso

### Syntax

```h1 iso iso | ```

## h1 iso iso list

### Syntax

```h1 iso iso list | ```

## h1 iso iso show

### Syntax

```h1 iso iso show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 iso iso delete

### Syntax

```h1 iso iso delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

## h1 iso iso rename

### Syntax

```h1 iso iso rename | --new-name NEW-NAME id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--new-name NEW-NAME``` |  | New name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 iso iso access

### Syntax

```h1 iso iso access | ```

## h1 iso iso access grant

### Syntax

```h1 iso iso access grant | --tenant TENANT id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource ID |

## h1 iso iso access revoke

### Syntax

```h1 iso iso access revoke | --tenant TENANT id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource id |

## h1 iso iso access list

### Syntax

```h1 iso iso access list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource name or ID |

## h1 iso iso resume

### Syntax

```h1 iso iso resume | --source SOURCE id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--source SOURCE``` |  | import disk path |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource name or ID |

## h1 iso iso create

### Syntax

```h1 iso iso create | --name NAME [--source-url SOURCE-URL] [--source-file SOURCE-FILE]```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | ISO name |
| ```--source-url SOURCE-URL``` |  | Source url for ISO import. Required if source-url is not specified. |
| ```--source-file SOURCE-FILE``` |  | Source file for ISO import. |

