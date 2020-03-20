# TOC

  * [h1 service show](#h1-service-show) - Show Service
  * [h1 service access](#h1-service-access) - Manage your Service access rights
    * [h1 service access check](#h1-service-access-check) - Check access rights for Service
  * [h1 service list](#h1-service-list) - List Service


# Specification

## h1 service

Explore available services

## h1 service show

Show Service

### Syntax

```h1 service show | --service SERVICE```
### Example

```bash
h1 service show --service my-service
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--service SERVICE``` |  | Service ID or name |

## h1 service access

Manage your Service access rights

## h1 service access check

Check access rights for Service

### Syntax

```h1 service access check | --service SERVICE```
### Example

```bash
h1 service access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--service SERVICE``` |  | Service ID or name |

## h1 service list

List Service

### Syntax

```h1 service list | [--resource RESOURCE] [--type TYPE]```
### Examples

#### List services

```bash
h1 service list
```

#### List types of virtual machines

```bash
h1 service list --resource vm --type flavour 
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--resource RESOURCE``` |  | Kind of resource |
| ```--type TYPE``` |  | Kind of type of resource |

