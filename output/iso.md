# TOC

* [h1 iso list](#h1-iso-list)
* [h1 iso show](#h1-iso-show)
* [h1 iso delete](#h1-iso-delete)
* [h1 iso rename](#h1-iso-rename)
* [h1 iso access](#h1-iso-access)
* [h1 iso resume](#h1-iso-resume)
* [h1 iso create](#h1-iso-create)


# Specification

## h1 iso

### Syntax

```h1 iso | ```

## h1 iso list

### Syntax

```h1 iso list | ```

## h1 iso show

### Syntax

```h1 iso show | id```

## h1 iso delete

### Syntax

```h1 iso delete | delete-id```

## h1 iso rename

### Syntax

```h1 iso rename | --new-name NEW-NAME id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--new-name NEW-NAME``` |  | New name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```new-name``` |  | New name |

## h1 iso access

### Syntax

```h1 iso access | ```

## h1 iso access grant

### Syntax

```h1 iso access grant | --tenant TENANT id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```tenant``` |  | Tenant name or ID |

## h1 iso access revoke

### Syntax

```h1 iso access revoke | --tenant TENANT id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```tenant``` |  | Tenant name or ID |

## h1 iso access list

### Syntax

```h1 iso access list | id```

## h1 iso resume

### Syntax

```h1 iso resume | --source SOURCE id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--source SOURCE``` |  | import disk path |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```source``` |  | import disk path |

## h1 iso create

### Syntax

```h1 iso create | --name NAME [--source-url SOURCE-URL] [--source-file SOURCE-FILE]```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | ISO name |
| ```--source-url SOURCE-URL``` |  | Source url for ISO import. Required if source-url is not specified. |
| ```--source-file SOURCE-FILE``` |  | Source file for ISO import. |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```name``` |  | ISO name |
| ```[source-url]``` |  | Source url for ISO import. Required if source-url is not specified. |
| ```[source-file]``` |  | Source file for ISO import. |

