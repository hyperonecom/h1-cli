# TOC

  * [h1 iso list](#h1-iso-list) - List ISO
  * [h1 iso show](#h1-iso-show) - Show ISO
  * [h1 iso delete](#h1-iso-delete) - Delete ISO
  * [h1 iso history](#h1-iso-history) - History of ISO
  * [h1 iso rename](#h1-iso-rename) - Rename ISO
  * [h1 iso service](#h1-iso-service) - Manage your services of ISO
    * [h1 iso service list](#h1-iso-service-list) - List service for ISO
    * [h1 iso service show](#h1-iso-service-show) - Show service for ISO
  * [h1 iso transfer](#h1-iso-transfer) - Transfer ISO to other project
  * [h1 iso access](#h1-iso-access) - Manage your ISO access rights
    * [h1 iso access grant](#h1-iso-access-grant) - Grant access rights for ISO
    * [h1 iso access revoke](#h1-iso-access-revoke) - Revoke access rights for ISO
    * [h1 iso access list](#h1-iso-access-list) - List of access rights for ISO
  * [h1 iso resume](#h1-iso-resume) - Resume create upload of ISO
  * [h1 iso create](#h1-iso-create) - ISO import
  * [h1 iso tag](#h1-iso-tag) - Manage your tag
    * [h1 iso tag list](#h1-iso-tag-list) - List tag
    * [h1 iso tag add](#h1-iso-tag-add) - Add a tag to ISO
    * [h1 iso tag delete](#h1-iso-tag-delete) - Delete a tag of ISO


# Specification

## h1 iso

Manage your ISO

## h1 iso list

List ISO

### Syntax

```h1 iso list | ```
### Example

```bash
h1 iso list
```

## h1 iso show

Show ISO

### Syntax

```h1 iso show | --iso ISO```
### Example

```bash
h1 iso show --iso my-iso
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso delete

Delete ISO

### Syntax

```h1 iso delete | --iso ISO```
### Example

```bash
h1 iso delete --iso my-iso
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso history

History of ISO

### Syntax

```h1 iso history | --iso ISO```
### Example

```bash
h1 iso history --iso my-iso
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso rename

Rename ISO

### Syntax

```h1 iso rename | --iso ISO --new-name NEW-NAME```
### Example

```bash
h1 iso rename --iso my-iso --new-name my-renamed-iso
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 iso service

Manage your services of ISO

## h1 iso service list

List service for ISO

### Syntax

```h1 iso service list | --iso ISO```
### Example

```bash
h1 iso service list --iso test-iso
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso service show

Show service for ISO

### Syntax

```h1 iso service show | --iso ISO --service SERVICE```
### Example

```bash
h1 iso service show --service my-service --iso my-iso
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--service SERVICE``` |  | Service for ISO ID or name |

## h1 iso transfer

Transfer ISO to other project

### Syntax

```h1 iso transfer | --iso ISO --new-project NEW-PROJECT```
### Example

```bash
h1 iso transfer --iso test-iso --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 iso access

Manage your ISO access rights

## h1 iso access grant

Grant access rights for ISO

### Syntax

```h1 iso access grant | --iso ISO --project PROJECT```
### Example

```bash
h1 iso access grant --iso test-image --project 5b28f7c9ddd5b3c5e9ec14c4
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 iso access revoke

Revoke access rights for ISO

### Syntax

```h1 iso access revoke | --iso ISO --project PROJECT```
### Example

```bash
h1 iso access revoke --iso test-iso --project MyFavouriteProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 iso access list

List of access rights for ISO

### Syntax

```h1 iso access list | --iso ISO```
### Example

```bash
h1 iso access list --iso test-image
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso resume

Resume create upload of ISO

### Syntax

```h1 iso resume | --iso ISO --source-file SOURCE-FILE```
### Example

```bash
h1 iso resume --iso my-iso --source-file ./my-iso.vhdx
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--source-file SOURCE-FILE``` |  | Path to .vhdx file to import |

## h1 iso create

ISO import

### Syntax

```h1 iso create | --name NAME [--source-file SOURCE-FILE] [--source-url SOURCE-URL] [--tag TAG [--tag TAG ...]]```
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
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 iso tag

Manage your tag

## h1 iso tag list

List tag

### Syntax

```h1 iso tag list | --iso ISO```
### Example

```bash
h1 iso tag list --iso my-iso
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso tag add

Add a tag to ISO

### Syntax

```h1 iso tag add | --iso ISO [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 iso tag add --iso test-iso --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 iso tag delete

Delete a tag of ISO

### Syntax

```h1 iso tag delete | --tag TAG --iso ISO```
### Example

```bash
h1 iso tag delete --iso test-iso --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--iso ISO``` |  | ISO ID or name |

