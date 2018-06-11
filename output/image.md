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

```h1 image show | --image IMAGE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

## h1 image delete

### Syntax

```h1 image delete | --image IMAGE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

## h1 image rename

### Syntax

```h1 image rename | --image IMAGE --new-name NEW-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 image create

### Syntax

```h1 image create | --name NAME [--description DESCRIPTION] --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name of image |
| ```--description DESCRIPTION``` |  | Description of image |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 image list

### Syntax

```h1 image list | [--recommended] [--all]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--recommended``` |  | Display recommended images |
| ```--all``` |  | Display all images |

## h1 image disk

### Syntax

```h1 image disk | --image IMAGE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

## h1 image access

### Syntax

```h1 image access | ```

## h1 image access grant

### Syntax

```h1 image access grant | --image IMAGE --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 image access revoke

### Syntax

```h1 image access revoke | --image IMAGE --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 image access list

### Syntax

```h1 image access list | --image IMAGE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

