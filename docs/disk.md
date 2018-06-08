# TOC

 * [h1 disk list](#h1-disk-list) - Resource list
 * [h1 disk show](#h1-disk-show) - Resource show
 * [h1 disk delete](#h1-disk-delete) - Resource delete
 * [h1 disk rename](#h1-disk-rename) - Resource rename
 * [h1 disk create](#h1-disk-create) - Disk create
 * [h1 disk resume-create](#h1-disk-resume-create) - Resume Create Upload
 * [h1 disk resize](#h1-disk-resize) - Resource resize
 * [h1 disk download](#h1-disk-download) - Download


# Specification

## h1 disk

Manage your DISK

## h1 disk list

Resource list

### Syntax

```h1 disk list | ```

## h1 disk show

Resource show

### Syntax

```h1 disk show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 disk delete

Resource delete

### Syntax

```h1 disk delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 disk rename

Resource rename

### Syntax

```h1 disk rename | --new-name NEW-NAME id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--new-name NEW-NAME``` |  | New name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 disk create

Disk create

### Syntax

```h1 disk create | --name NAME --type TYPE --size SIZE [--source-file SOURCE-FILE]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Disk name |
| ```--type TYPE``` |  | Disk type Id |
| ```--size SIZE``` |  | Disk size in GB |
| ```[--source-file SOURCE-FILE]``` |  | import disk path |

## h1 disk resume-create

Resume Create Upload

### Syntax

```h1 disk resume-create | --source-file SOURCE-FILE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--source-file SOURCE-FILE``` |  | import disk path |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource name or ID |

## h1 disk resize

Resource resize

### Syntax

```h1 disk resize | --size SIZE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--size SIZE``` |  | New size |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource name or ID |

## h1 disk download

Download

### Syntax

```h1 disk download | --destination-file DESTINATION-FILE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--destination-file DESTINATION-FILE``` |  | destination disk path |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

