# TOC

  * [h1 image show](#h1-image-show) - Show image
  * [h1 image delete](#h1-image-delete) - Delete image
  * [h1 image rename](#h1-image-rename) - Rename image
  * [h1 image history](#h1-image-history) - History of image
  * [h1 image create](#h1-image-create) - Create image
  * [h1 image list](#h1-image-list) - List image
  * [h1 image disk](#h1-image-disk) - List all disks of image
  * [h1 image access](#h1-image-access) - Manage your image access rights
    * [h1 image access grant](#h1-image-access-grant) - Grant access rights for image
    * [h1 image access revoke](#h1-image-access-revoke) - Revoke access rights for image
    * [h1 image access list](#h1-image-access-list) - List of access rights for image


# Specification

## h1 image

Manage your image

## h1 image show

Show image

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

## h1 image delete

Delete image

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

## h1 image rename

Rename image

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

## h1 image history

History of image

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

## h1 image create

Create image

### Syntax

```h1 image create | --name NAME --vm VM [--description DESCRIPTION]```

### Example

```bash
h1 image create --vm test-vm --name dev-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name of image |
| ```--vm VM``` |  | Virtual machine name or ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--description DESCRIPTION``` |  | Description of image |

## h1 image list

List image

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

## h1 image disk

List all disks of image

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

## h1 image access

Manage your image access rights

## h1 image access grant

Grant access rights for image

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

## h1 image access revoke

Revoke access rights for image

### Syntax

```h1 image access revoke | --image IMAGE --project PROJECT```

### Example

```bash
h1 image access revoke --image test-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Image ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 image access list

List of access rights for image

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

