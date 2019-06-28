# TOC

  * [h1 image access](#h1-image-access) - Manage your Image access rights
    * [h1 image access grant](#h1-image-access-grant) - Grant access rights for Image
    * [h1 image access list](#h1-image-access-list) - List of access rights for Image
    * [h1 image access revoke](#h1-image-access-revoke) - Revoke access rights for Image
  * [h1 image create](#h1-image-create) - Create Image
  * [h1 image delete](#h1-image-delete) - Delete Image
  * [h1 image disk](#h1-image-disk) - List all disks of Image
  * [h1 image history](#h1-image-history) - History of Image
  * [h1 image list](#h1-image-list) - List Image
  * [h1 image list](#h1-image-list) - List Image
  * [h1 image rename](#h1-image-rename) - Rename Image
  * [h1 image service](#h1-image-service) - Manage your services of Image
    * [h1 image service list](#h1-image-service-list) - List service for Image
    * [h1 image service show](#h1-image-service-show) - Show service for Image
  * [h1 image show](#h1-image-show) - Show Image
  * [h1 image transfer](#h1-image-transfer) - Transfer Image to other project
  * [h1 image tag](#h1-image-tag) - Manage your Tag of Image
    * [h1 image tag add](#h1-image-tag-add) - Add Tag of Image
    * [h1 image tag delete](#h1-image-tag-delete) - Delete Tag of Image
    * [h1 image tag list](#h1-image-tag-list) - List Tag of Image


# Specification

## h1 image

Manage your Image

## h1 image access

Manage your Image access rights

## h1 image access grant

Grant access rights for Image

### Syntax

```h1 image access grant | --image IMAGE --project PROJECT```
### Example

```bash
h1 image access grant --image test-image --project 5b28f7c9ddd5b3c5e9ec14c4
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 image access list

List of access rights for Image

### Syntax

```h1 image access list | --image IMAGE```
### Example

```bash
h1 image access list --image test-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

## h1 image access revoke

Revoke access rights for Image

### Syntax

```h1 image access revoke | --image IMAGE --project PROJECT```
### Example

```bash
h1 image access revoke --image test-image --project MyFavouriteProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 image create

Create Image

### Syntax

```h1 image create | --name NAME [--description DESCRIPTION] [--vm VM] [--replica REPLICA] [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 image create --vm test-vm --name dev-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name of image |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--description DESCRIPTION``` |  | Description of image |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--replica REPLICA``` |  | Replica name or ID |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 image delete

Delete Image

### Syntax

```h1 image delete | --image IMAGE```
### Example

```bash
h1 image delete --image my-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

## h1 image disk

List all disks of Image

### Syntax

```h1 image disk | --image IMAGE```
### Example

```bash
h1 image disk --image dev-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

## h1 image history

History of Image

### Syntax

```h1 image history | --image IMAGE```
### Example

```bash
h1 image history --image my-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

## h1 image list

List Image

### Syntax

```h1 image list | ```
### Example

```bash
h1 image list
```

## h1 image list

List Image

### Syntax

```h1 image list | [--recommended] [--all]```
### Examples

#### List all user images

```bash
h1 image list
```

#### List public images recommended by platform

```bash
h1 image list --recommended
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--recommended``` |  | Display recommended images |
| ```--all``` |  | Display all images |

## h1 image rename

Rename Image

### Syntax

```h1 image rename | --image IMAGE --new-name NEW-NAME```
### Example

```bash
h1 image rename --image my-image --new-name my-renamed-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 image service

Manage your services of Image

## h1 image service list

List service for Image

### Syntax

```h1 image service list | --image IMAGE```
### Example

```bash
h1 image service list --image test-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

## h1 image service show

Show service for Image

### Syntax

```h1 image service show | --image IMAGE --service SERVICE```
### Example

```bash
h1 image service show --service my-service --image my-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |
| ```--service SERVICE``` |  | Service for Image ID or name |

## h1 image show

Show Image

### Syntax

```h1 image show | --image IMAGE```
### Example

```bash
h1 image show --image my-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

## h1 image transfer

Transfer Image to other project

### Syntax

```h1 image transfer | --image IMAGE --new-project NEW-PROJECT```
### Example

```bash
h1 image transfer --image test-image --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 image tag

Manage your Tag of Image

## h1 image tag add

Add Tag of Image

### Syntax

```h1 image tag add | --image IMAGE [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 image tag add --image test-image --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 image tag delete

Delete Tag of Image

### Syntax

```h1 image tag delete | --tag TAG --image IMAGE```
### Example

```bash
h1 image tag delete --image test-image --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--image IMAGE``` |  | Image ID or name |

## h1 image tag list

List Tag of Image

### Syntax

```h1 image tag list | --image IMAGE```
### Example

```bash
h1 image tag list --image my-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |

