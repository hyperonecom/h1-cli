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

## h1 image delete

### Syntax

```h1 image delete | delete-id```

## h1 image rename

### Syntax

```h1 image rename | --new-name NEW-NAME id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--new-name NEW-NAME``` |  | New name |

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

## h1 image access revoke

### Syntax

```h1 image access revoke | --tenant TENANT id```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

## h1 image access list

### Syntax

```h1 image access list | id```

