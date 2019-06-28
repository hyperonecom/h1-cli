# TOC

  * [h1 ip allocate](#h1-ip-allocate) - Allocate IP address
  * [h1 ip associate](#h1-ip-associate) - Associate IP address
  * [h1 ip create](#h1-ip-create) - Create IP address
  * [h1 ip delete](#h1-ip-delete) - Delete IP address
  * [h1 ip disassociate](#h1-ip-disassociate) - Disassociate IP address
  * [h1 ip history](#h1-ip-history) - History of IP address
  * [h1 ip list](#h1-ip-list) - List IP address
  * [h1 ip ptr](#h1-ip-ptr) - Update PTR record of IP address
  * [h1 ip release](#h1-ip-release) - Release IP address
  * [h1 ip service](#h1-ip-service) - Manage your services of IP address
    * [h1 ip service list](#h1-ip-service-list) - List service for IP address
    * [h1 ip service show](#h1-ip-service-show) - Show service for IP address
  * [h1 ip show](#h1-ip-show) - Show IP address
  * [h1 ip transfer](#h1-ip-transfer) - Transfer IP address to other project
  * [h1 ip tag](#h1-ip-tag) - Manage your Tag of IP address
    * [h1 ip tag add](#h1-ip-tag-add) - Add Tag of IP address
    * [h1 ip tag delete](#h1-ip-tag-delete) - Delete Tag of IP address
    * [h1 ip tag list](#h1-ip-tag-list) - List Tag of IP address


# Specification

## h1 ip

Manage your IP address

## h1 ip allocate

Allocate IP address

### Syntax

```h1 ip allocate | --ip IP```
### Example

```
h1 ip allocate --ip my-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip associate

Associate IP address

### Syntax

```h1 ip associate | --ip IP --private-ip PRIVATE-IP```
### Examples

#### Associate public IP address to private IP network interface

```bash
h1 ip associate --ip 62.181.8.21 --private-ip 10.177.2.10 --output json
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | Public IP or ID of IP |
| ```--private-ip PRIVATE-IP``` |  | ID of private IP |

## h1 ip create

Create IP address

### Syntax

```h1 ip create | [--ptr-record PTR-RECORD] [--tag TAG [--tag TAG ...]]```
### Examples

#### Create a new public IP

```bash
h1 ip create
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ptr-record PTR-RECORD``` |  | Value of PTR record |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 ip delete

Delete IP address

### Syntax

```h1 ip delete | --ip IP```
### Example

```bash
h1 ip delete --ip my-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip disassociate

Disassociate IP address

### Syntax

```h1 ip disassociate | --ip IP```
### Example

```
h1 ip disassociate --ip my-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip history

History of IP address

### Syntax

```h1 ip history | --ip IP```
### Example

```bash
h1 ip history --ip my-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip list

List IP address

### Syntax

```h1 ip list | ```
### Example

```bash
h1 ip list
```

## h1 ip ptr

Update PTR record of IP address

### Syntax

```h1 ip ptr | --ip IP --value VALUE```
### Example

```bash
h1 ip ptr --ip 62.181.8.21 --value 'example.com'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address or ID |
| ```--value VALUE``` |  | PTR record |

## h1 ip release

Release IP address

### Syntax

```h1 ip release | --ip IP```
### Example

```
h1 ip release --ip my-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip service

Manage your services of IP address

## h1 ip service list

List service for IP address

### Syntax

```h1 ip service list | --ip IP```
### Example

```bash
h1 ip service list --ip test-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip service show

Show service for IP address

### Syntax

```h1 ip service show | --ip IP --service SERVICE```
### Example

```bash
h1 ip service show --service my-service --ip my-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |
| ```--service SERVICE``` |  | Service for IP address ID or name |

## h1 ip show

Show IP address

### Syntax

```h1 ip show | --ip IP```
### Example

```bash
h1 ip show --ip my-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip transfer

Transfer IP address to other project

### Syntax

```h1 ip transfer | --ip IP --new-project NEW-PROJECT```
### Example

```bash
h1 ip transfer --ip test-ip --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 ip tag

Manage your Tag of IP address

## h1 ip tag add

Add Tag of IP address

### Syntax

```h1 ip tag add | --ip IP [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 ip tag add --ip test-ip --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 ip tag delete

Delete Tag of IP address

### Syntax

```h1 ip tag delete | --tag TAG --ip IP```
### Example

```bash
h1 ip tag delete --ip test-ip --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--ip IP``` |  | IP address ID or name |

## h1 ip tag list

List Tag of IP address

### Syntax

```h1 ip tag list | --ip IP```
### Example

```bash
h1 ip tag list --ip my-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ip IP``` |  | IP address ID or name |

