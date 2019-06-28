# TOC

  * [h1 organisation access](#h1-organisation-access) - Manage your Organisation access rights
    * [h1 organisation access grant](#h1-organisation-access-grant) - Grant access rights for Organisation
    * [h1 organisation access list](#h1-organisation-access-list) - List access rights for Organisation
    * [h1 organisation access revoke](#h1-organisation-access-revoke) - Revoke access rights for Organisation
  * [h1 organisation history](#h1-organisation-history) - History of Organisation
  * [h1 organisation history](#h1-organisation-history) - History of Organisation
  * [h1 organisation list](#h1-organisation-list) - List Organisation
  * [h1 organisation list](#h1-organisation-list) - List Organisation
  * [h1 organisation payment](#h1-organisation-payment) - Manage your payment for Organisation
    * [h1 organisation payment list](#h1-organisation-payment-list) - List payment
    * [h1 organisation payment show](#h1-organisation-payment-show) - Show payment
  * [h1 organisation rename](#h1-organisation-rename) - Rename Organisation
  * [h1 organisation rename](#h1-organisation-rename) - Rename Organisation
  * [h1 organisation show](#h1-organisation-show) - Show Organisation
  * [h1 organisation show](#h1-organisation-show) - Show Organisation
  * [h1 organisation transfer](#h1-organisation-transfer) - Manage your transfer for Organisation
    * [h1 organisation transfer accept](#h1-organisation-transfer-accept) - Accept transfer
    * [h1 organisation transfer list](#h1-organisation-transfer-list) - List transfer
    * [h1 organisation transfer show](#h1-organisation-transfer-show) - Show transfer
  * [h1 organisation tag](#h1-organisation-tag) - Manage your Tag of Organisation
    * [h1 organisation tag add](#h1-organisation-tag-add) - Add Tag of Organisation
    * [h1 organisation tag delete](#h1-organisation-tag-delete) - Delete Tag of Organisation
    * [h1 organisation tag list](#h1-organisation-tag-list) - List Tag of Organisation
  * [h1 organisation tag](#h1-organisation-tag) - Manage your Tag of Organisation
    * [h1 organisation tag add](#h1-organisation-tag-add) - Add Tag of Organisation
    * [h1 organisation tag delete](#h1-organisation-tag-delete) - Delete Tag of Organisation
    * [h1 organisation tag list](#h1-organisation-tag-list) - List Tag of Organisation


# Specification

## h1 organisation

Manage your Organisation

## h1 organisation access

Manage your Organisation access rights

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

## h1 organisation access grant

Grant access rights for Organisation

### Syntax

```h1 organisation access grant | --organisation ORGANISATION --email EMAIL [--role {owner,billing,user}]```
### Example

```bash
h1 organisation access grant --organisation my-organisation --email user@example.com
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |
| ```--email EMAIL``` |  | User email (eg: user@example.org) |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--role {owner,billing,user}``` |  | Role |

## h1 organisation access list

List access rights for Organisation

### Syntax

```h1 organisation access list | --organisation ORGANISATION```
### Example

```bash
h1 organisation access list --organisation my-organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

## h1 organisation access revoke

Revoke access rights for Organisation

### Syntax

```h1 organisation access revoke | --organisation ORGANISATION --email EMAIL```
### Example

```bash
h1 organisation access revoke --organisation my-organisation --email user@example.com
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |
| ```--email EMAIL``` |  | User email (eg: user@example.org) |

## h1 organisation history

History of Organisation

### Syntax

```h1 organisation history | --organisation ORGANISATION```
### Example

```bash
h1 organisation history --organisation my-organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

## h1 organisation history

History of Organisation

### Syntax

```h1 organisation history | --organisation ORGANISATION```
### Example

```bash
h1 organisation history --organisation my-organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

## h1 organisation list

List Organisation

### Syntax

```h1 organisation list | ```
### Example

```bash
h1 organisation list
```

## h1 organisation list

List Organisation

### Syntax

```h1 organisation list | ```
### Example

```bash
h1 organisation list
```

## h1 organisation payment

Manage your payment for Organisation

## h1 organisation payment list

List payment

### Syntax

```h1 organisation payment list | --organisation ORGANISATION```
### Example

```bash
h1 organisation payment list --Organisation my-Organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

## h1 organisation payment show

Show payment

### Syntax

```h1 organisation payment show | --organisation ORGANISATION --payment PAYMENT```
### Example

```bash
h1 organisation payment show --payment my-payment --Organisation my-Organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |
| ```--payment PAYMENT``` |  | Payment ID or name |

## h1 organisation rename

Rename Organisation

### Syntax

```h1 organisation rename | --organisation ORGANISATION --new-name NEW-NAME```
### Example

```bash
h1 organisation rename --organisation my-organisation --new-name my-renamed-organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 organisation rename

Rename Organisation

### Syntax

```h1 organisation rename | --organisation ORGANISATION --new-name NEW-NAME```
### Example

```bash
h1 organisation rename --organisation my-organisation --new-name my-renamed-organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 organisation show

Show Organisation

### Syntax

```h1 organisation show | --organisation ORGANISATION```
### Example

```bash
h1 organisation show --organisation my-organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

## h1 organisation show

Show Organisation

### Syntax

```h1 organisation show | --organisation ORGANISATION```
### Example

```bash
h1 organisation show --organisation my-organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

## h1 organisation transfer

Manage your transfer for Organisation

## h1 organisation transfer accept

Accept transfer

### Syntax

```h1 organisation transfer accept | --organisation ORGANISATION --project PROJECT --payment PAYMENT```
### Example

```bash
h1 organisation transfer accept --organisation MyOrganisation --project AcceptedProject --payment 583867ca5452f7020e63b4c6
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |
| ```--project PROJECT``` |  | Project ID or name |
| ```--payment PAYMENT``` |  | Payment ID |

## h1 organisation transfer list

List transfer

### Syntax

```h1 organisation transfer list | --organisation ORGANISATION```
### Example

```bash
h1 organisation transfer list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

## h1 organisation transfer show

Show transfer

### Syntax

```h1 organisation transfer show | --organisation ORGANISATION --transfer TRANSFER```
### Example

```bash
h1 organisation transfer show --transfer my-transfer
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |
| ```--transfer TRANSFER``` |  | Transfer ID or name |

## h1 organisation tag

Manage your Tag of Organisation

## h1 organisation tag add

Add Tag of Organisation

### Syntax

```h1 organisation tag add | --organisation ORGANISATION [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 organisation tag add --organisation test-organisation --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 organisation tag delete

Delete Tag of Organisation

### Syntax

```h1 organisation tag delete | --tag TAG --organisation ORGANISATION```
### Example

```bash
h1 organisation tag delete --organisation test-organisation --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

## h1 organisation tag list

List Tag of Organisation

### Syntax

```h1 organisation tag list | --organisation ORGANISATION```
### Example

```bash
h1 organisation tag list --organisation my-organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

## h1 organisation tag

Manage your Tag of Organisation

## h1 organisation tag add

Add Tag of Organisation

### Syntax

```h1 organisation tag add | --organisation ORGANISATION [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 organisation tag add --organisation test-organisation --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 organisation tag delete

Delete Tag of Organisation

### Syntax

```h1 organisation tag delete | --tag TAG --organisation ORGANISATION```
### Example

```bash
h1 organisation tag delete --organisation test-organisation --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

## h1 organisation tag list

List Tag of Organisation

### Syntax

```h1 organisation tag list | --organisation ORGANISATION```
### Example

```bash
h1 organisation tag list --organisation my-organisation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--organisation ORGANISATION``` |  | Organisation ID or name |

