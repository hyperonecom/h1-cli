# TOC

  * [h1 reservation list](#h1-reservation-list) - List reservation
  * [h1 reservation show](#h1-reservation-show) - Show reservation
  * [h1 reservation service](#h1-reservation-service) - Manage your services of reservation
    * [h1 reservation service list](#h1-reservation-service-list) - List service for reservation
    * [h1 reservation service show](#h1-reservation-service-show) - Show service for reservation
  * [h1 reservation tag](#h1-reservation-tag) - Manage your tag
    * [h1 reservation tag list](#h1-reservation-tag-list) - List tag
    * [h1 reservation tag add](#h1-reservation-tag-add) - Add a tag to reservation
    * [h1 reservation tag delete](#h1-reservation-tag-delete) - Delete a tag of reservation
  * [h1 reservation history](#h1-reservation-history) - History of reservation
  * [h1 reservation create](#h1-reservation-create) - Create reservation
  * [h1 reservation assign](#h1-reservation-assign) - Assign reservation to resource
  * [h1 reservation extend](#h1-reservation-extend) - Extend reservation


# Specification

## h1 reservation

Manage your reservation

## h1 reservation list

List reservation

### Syntax

```h1 reservation list | ```
### Example

```bash
h1 reservation list
```

## h1 reservation show

Show reservation

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

## h1 reservation service

Manage your services of reservation

## h1 reservation service list

List service for reservation

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

Show service for reservation

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
| ```--service SERVICE``` |  | Service for reservation ID or name |

## h1 reservation tag

Manage your tag

## h1 reservation tag list

List tag

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

## h1 reservation tag add

Add a tag to reservation

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

Delete a tag of reservation

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

## h1 reservation history

History of reservation

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

## h1 reservation create

Create reservation

### Syntax

```h1 reservation create | --name NAME --type TYPE [--tag TAG [--tag TAG ...]]```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--type TYPE``` |  | Type |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 reservation assign

Assign reservation to resource

### Syntax

```h1 reservation assign | --resource RESOURCE --reservation RESERVATION```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--resource RESOURCE``` |  | Resource ID to assign reservation |
| ```--reservation RESERVATION``` |  | reservation name or ID |

## h1 reservation extend

Extend reservation

### Syntax

```h1 reservation extend | --reservation RESERVATION```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--reservation RESERVATION``` |  | reservation name or ID |

