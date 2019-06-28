# TOC

  * [h1 reservation assign](#h1-reservation-assign) - Assign Reservation to resource
  * [h1 reservation delete](#h1-reservation-delete) - Delete Reservation
  * [h1 reservation extend](#h1-reservation-extend) - Extend Reservation
  * [h1 reservation extend](#h1-reservation-extend) - Extend Reservation
  * [h1 reservation history](#h1-reservation-history) - History of Reservation
  * [h1 reservation list](#h1-reservation-list) - List Reservation
  * [h1 reservation rename](#h1-reservation-rename) - Rename Reservation
  * [h1 reservation service](#h1-reservation-service) - Manage your services of Reservation
    * [h1 reservation service list](#h1-reservation-service-list) - List service for Reservation
    * [h1 reservation service show](#h1-reservation-service-show) - Show service for Reservation
  * [h1 reservation show](#h1-reservation-show) - Show Reservation
  * [h1 reservation unassign](#h1-reservation-unassign) - Unassign Reservation
  * [h1 reservation tag](#h1-reservation-tag) - Manage your Tag of Reservation
    * [h1 reservation tag add](#h1-reservation-tag-add) - Add Tag of Reservation
    * [h1 reservation tag delete](#h1-reservation-tag-delete) - Delete Tag of Reservation
    * [h1 reservation tag list](#h1-reservation-tag-list) - List Tag of Reservation


# Specification

## h1 reservation

Manage your Reservation

### Examples

#### Create a new reservation

```bash
h1 reservation create --name my-reservation-name --type 'm2.tiny, 1 year'
```

## h1 reservation assign

Assign Reservation to resource

### Syntax

```h1 reservation assign | --resource RESOURCE --reservation RESERVATION```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--resource RESOURCE``` |  | Resource ID to assign reservation |
| ```--reservation RESERVATION``` |  | Reservation name or ID |

## h1 reservation delete

Delete Reservation

### Syntax

```h1 reservation delete | --reservation RESERVATION```
### Example

```bash
h1 reservation delete --reservation my-reservation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | Reservation ID or name |

## h1 reservation extend

Extend Reservation

### Syntax

```h1 reservation extend | --reservation RESERVATION```
### Example

```
h1 reservation extend --reservation my-reservation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | Reservation ID or name |

## h1 reservation extend

Extend Reservation

### Syntax

```h1 reservation extend | --reservation RESERVATION```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | Reservation name or ID |

## h1 reservation history

History of Reservation

### Syntax

```h1 reservation history | --reservation RESERVATION```
### Example

```bash
h1 reservation history --reservation my-reservation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | Reservation ID or name |

## h1 reservation list

List Reservation

### Syntax

```h1 reservation list | ```
### Example

```bash
h1 reservation list
```

## h1 reservation rename

Rename Reservation

### Syntax

```h1 reservation rename | --reservation RESERVATION --new-name NEW-NAME```
### Example

```bash
h1 reservation rename --reservation my-reservation --new-name my-renamed-reservation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | Reservation ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 reservation service

Manage your services of Reservation

## h1 reservation service list

List service for Reservation

### Syntax

```h1 reservation service list | --reservation RESERVATION```
### Example

```bash
h1 reservation service list --reservation test-reservation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | Reservation ID or name |

## h1 reservation service show

Show service for Reservation

### Syntax

```h1 reservation service show | --reservation RESERVATION --service SERVICE```
### Example

```bash
h1 reservation service show --service my-service --reservation my-reservation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | Reservation ID or name |
| ```--service SERVICE``` |  | Service for Reservation ID or name |

## h1 reservation show

Show Reservation

### Syntax

```h1 reservation show | --reservation RESERVATION```
### Example

```bash
h1 reservation show --reservation my-reservation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | Reservation ID or name |

## h1 reservation unassign

Unassign Reservation

### Syntax

```h1 reservation unassign | --reservation RESERVATION```
### Example

```
h1 reservation unassign --reservation my-reservation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | Reservation ID or name |

## h1 reservation tag

Manage your Tag of Reservation

## h1 reservation tag add

Add Tag of Reservation

### Syntax

```h1 reservation tag add | --reservation RESERVATION [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 reservation tag add --reservation test-reservation --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | Reservation ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 reservation tag delete

Delete Tag of Reservation

### Syntax

```h1 reservation tag delete | --tag TAG --reservation RESERVATION```
### Example

```bash
h1 reservation tag delete --reservation test-reservation --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--reservation RESERVATION``` |  | Reservation ID or name |

## h1 reservation tag list

List Tag of Reservation

### Syntax

```h1 reservation tag list | --reservation RESERVATION```
### Example

```bash
h1 reservation tag list --reservation my-reservation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | Reservation ID or name |

