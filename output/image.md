# TOC

* [h1 image show](#h1-image-show)
* [h1 image delete](#h1-image-delete)
* [h1 image rename](#h1-image-rename)
* [h1 image create](#h1-image-create)
* [h1 image list](#h1-image-list)
* [h1 image disk](#h1-image-disk)
* [h1 image access](#h1-image-access)


# Specification

## h1 image

### Syntax

```h1 image | ```

## h1 image show

### Syntax

```h1 image show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 image delete

### Syntax

```h1 image delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

## h1 image rename

### Syntax

```h1 image rename | --new-name NEW-NAME id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--new-name NEW-NAME``` |  | New name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

## h1 image create

### Syntax

```h1 image create | --name NAME [--description DESCRIPTION] --vm VM```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name of image |
| ```--description DESCRIPTION``` |  | Description of image |
| ```--vm VM``` |  | VM name or ID |

## h1 image list

### Syntax

```h1 image list | [--recommended RECOMMENDED] [--all ALL]```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--recommended RECOMMENDED``` |  | Display recommended images |
| ```--all ALL``` |  | Display all images |

## h1 image disk

### Syntax

```h1 image disk | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Image name or ID |

## h1 image access

### Syntax

```h1 image access | ```

## h1 image access grant

### Syntax

```h1 image access grant | --tenant TENANT id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource ID |

## h1 image access revoke

### Syntax

```h1 image access revoke | --tenant TENANT id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource id |

## h1 image access list

### Syntax

```h1 image access list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource name or ID |

