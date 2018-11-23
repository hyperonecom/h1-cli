# TOC

  * [h1 service show](#h1-service-show) - Show service
  * [h1 service list](#h1-service-list) - List service


# Specification

## h1 service

Explore available services

## h1 service show

Show service

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

## h1 service list

List service

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

