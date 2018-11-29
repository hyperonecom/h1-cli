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

```h1 service list | [--resource {disk,image,ip,iso,netadp,network,project,vault,vm}] [--type {flavour,ipv4,license,metric,standard,support}]```
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
| ```--resource {disk,image,ip,iso,netadp,network,project,vault,vm}``` |  | Kind of resource |
| ```--type {flavour,ipv4,license,metric,standard,support}``` |  | Kind of type of resource |

