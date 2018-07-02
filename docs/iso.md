# TOC

  * [h1 iso list](#h1-iso-list) - List ISO
  * [h1 iso show](#h1-iso-show) - Show ISO
  * [h1 iso delete](#h1-iso-delete) - Delete ISO
  * [h1 iso history](#h1-iso-history) - History of ISO
  * [h1 iso rename](#h1-iso-rename) - Rename ISO
  * [h1 iso access](#h1-iso-access) - Manage your ISO access rights
    * [h1 iso access grant](#h1-iso-access-grant) - Grant access rights for ISO
    * [h1 iso access revoke](#h1-iso-access-revoke) - Revoke access rights for ISO
    * [h1 iso access list](#h1-iso-access-list) - List of access rights for ISO
  * [h1 iso resume](#h1-iso-resume) - Resume create upload of ISO
  * [h1 iso create](#h1-iso-create) - ISO import


# Specification

## h1 iso

Manage your ISO

## h1 iso list

List ISO

### Syntax

```h1 iso list | ```

## h1 iso show

Show ISO

### Syntax

```h1 iso show | --iso ISO```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso delete

Delete ISO

### Syntax

```h1 iso delete | --iso ISO```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso history

History of ISO

### Syntax

```h1 iso history | --iso ISO```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso rename

Rename ISO

### Syntax

```h1 iso rename | --iso ISO --new-name NEW-NAME```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 iso access

Manage your ISO access rights

## h1 iso access grant

Grant access rights for ISO

### Syntax

```h1 iso access grant | --iso ISO --project PROJECT```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 iso access revoke

Revoke access rights for ISO

### Syntax

```h1 iso access revoke | --iso ISO --project PROJECT```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 iso access list

List of access rights for ISO

### Syntax

```h1 iso access list | --iso ISO```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso resume

Resume create upload of ISO

### Syntax

```h1 iso resume | --iso ISO --source-file SOURCE-FILE```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--source-file SOURCE-FILE``` |  | Path to .vhdx file to import |

## h1 iso create

ISO import

### Syntax

```h1 iso create | --name NAME [--source-file SOURCE-FILE] [--source-url SOURCE-URL]```

### Examples

#### Create an ISO using a local file

```bash
h1 iso create --name myiso --source-file my.iso
```

#### Create an ISO using url
```bash
h1 iso create --name myiso --source-url http://example.com/some.iso
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | ISO name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--source-file SOURCE-FILE``` |  | Source file for ISO import. |
| ```--source-url SOURCE-URL``` |  | Source url for ISO import. Required if source-file is not specified. |

