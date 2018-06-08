# TOC

 * [h1 iso list](#h1-iso-list) - Resource list
 * [h1 iso show](#h1-iso-show) - Resource show
 * [h1 iso delete](#h1-iso-delete) - Resource delete
 * [h1 iso rename](#h1-iso-rename) - Resource rename
 * [h1 iso access](#h1-iso-access) - Manage your ISO Access Rights
  * [h1 iso access grant](#h1-iso-access-grant) - Grant access rights for ISO
  * [h1 iso access revoke](#h1-iso-access-revoke) - Revoke access rights for ISO
  * [h1 iso access list](#h1-iso-access-list) - List of access rights for ISO
 * [h1 iso resume-create](#h1-iso-resume-create) - Resume Create Upload
 * [h1 iso create](#h1-iso-create) - ISO import


# Specification

## h1 iso

Manage your ISO

## h1 iso list

Resource list

### Syntax

```h1 iso list | ```

## h1 iso show

Resource show

### Syntax

```h1 iso show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 iso delete

Resource delete

### Syntax

```h1 iso delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 iso rename

Resource rename

### Syntax

```h1 iso rename | --new-name NEW-NAME id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--new-name NEW-NAME``` |  | New name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 iso access

Manage your ISO Access Rights

## h1 iso access grant

Grant access rights for ISO

### Syntax

```h1 iso access grant | --project PROJECT id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource ID |

## h1 iso access revoke

Revoke access rights for ISO

### Syntax

```h1 iso access revoke | --project PROJECT id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource id |

## h1 iso access list

List of access rights for ISO

### Syntax

```h1 iso access list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource name or ID |

## h1 iso resume-create

Resume Create Upload

### Syntax

```h1 iso resume-create | --source-file SOURCE-FILE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--source-file SOURCE-FILE``` |  | import disk path |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource name or ID |

## h1 iso create

ISO import

### Syntax

```h1 iso create | --name NAME [--source-url SOURCE-URL] [--source-file SOURCE-FILE]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | ISO name |
| ```[--source-url SOURCE-URL]``` |  | Source url for ISO import. Required if source-url is not specified. |
| ```[--source-file SOURCE-FILE]``` |  | Source file for ISO import. |

