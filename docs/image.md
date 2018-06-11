# TOC

 * [h1 image show](#h1-image-show) - Resource show
 * [h1 image delete](#h1-image-delete) - Resource delete
 * [h1 image rename](#h1-image-rename) - Resource rename
 * [h1 image create](#h1-image-create) - IMAGE create
 * [h1 image list](#h1-image-list) - Resource list
 * [h1 image disk](#h1-image-disk) - List all disks
 * [h1 image access](#h1-image-access) - Manage your IMAGE Access Rights
  * [h1 image access grant](#h1-image-access-grant) - Grant access rights for IMAGE
  * [h1 image access revoke](#h1-image-access-revoke) - Revoke access rights for IMAGE
  * [h1 image access list](#h1-image-access-list) - List of access rights for IMAGE


# Specification

## h1 image

Manage your IMAGE

## h1 image show

Resource show

### Syntax

```h1 image show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 image delete

Resource delete

### Syntax

```h1 image delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 image rename

Resource rename

### Syntax

```h1 image rename | --new-name NEW-NAME id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--new-name NEW-NAME``` |  | New name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 image create

IMAGE create

### Syntax

```h1 image create | --name NAME [--description DESCRIPTION] --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name of image |
| ```[--description DESCRIPTION]``` |  | Description of image |
| ```--vm VM``` |  | VM name or ID |

## h1 image list

Resource list

### Syntax

```h1 image list | [--recommended] [--all]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```[--recommended]``` |  | Display recommended images |
| ```[--all]``` |  | Display all images |

## h1 image disk

List all disks

### Syntax

```h1 image disk | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Image name or ID |

## h1 image access

Manage your IMAGE Access Rights

## h1 image access grant

Grant access rights for IMAGE

### Syntax

```h1 image access grant | --project PROJECT id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource ID |

## h1 image access revoke

Revoke access rights for IMAGE

### Syntax

```h1 image access revoke | --project PROJECT id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource id |

## h1 image access list

List of access rights for IMAGE

### Syntax

```h1 image access list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource name or ID |

