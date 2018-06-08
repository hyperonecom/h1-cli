# TOC

* [h1 project list](#h1-project-list)
* [h1 project show](#h1-project-show)
* [h1 project delete](#h1-project-delete)
* [h1 project list](#h1-project-list)
* [h1 project access](#h1-project-access)
* [h1 project token](#h1-project-token)
* [h1 project select](#h1-project-select)
* [h1 project limit](#h1-project-limit)
* [h1 project credentials](#h1-project-credentials)


# Specification

## h1 project

### Syntax

```h1 project | ```

## h1 project list

### Syntax

```h1 project list | ```

## h1 project show

### Syntax

```h1 project show | --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project delete

### Syntax

```h1 project delete | --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project list

### Syntax

```h1 project list | [--all]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--all``` |  | Display all projects |

## h1 project access

### Syntax

```h1 project access | ```

## h1 project access grant

### Syntax

```h1 project access grant | --identity IDENTITY [--role ROLE]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--identity IDENTITY``` |  | Identity (eg: user@example.org) |
| ```--role ROLE``` |  | Role |

## h1 project access revoke

### Syntax

```h1 project access revoke | --identity IDENTITY```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--identity IDENTITY``` |  | Identity (eg: user@example.org) |

## h1 project access list

### Syntax

```h1 project access list | --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project token

### Syntax

```h1 project token | ```

## h1 project token list

### Syntax

```h1 project token list | ```

## h1 project token delete

### Syntax

```h1 project token delete | --token TOKEN```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID or name |

## h1 project token add

### Syntax

```h1 project token add | --name NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

## h1 project token access

### Syntax

```h1 project token access | ```

## h1 project token access list

### Syntax

```h1 project token access list | --token TOKEN```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID |

## h1 project token access delete

### Syntax

```h1 project token access delete | --token TOKEN --access ACCESS```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Token ID |
| ```--access ACCESS``` |  | Access rule ID or name |

## h1 project token access add

### Syntax

```h1 project token access add | --method METHOD --path PATH --token TOKEN```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--method METHOD``` |  | HTTP method. eg: GET, POST..., ALL (to allow all methods) |
| ```--path PATH``` |  | URL path, eg: /disk |
| ```--token TOKEN``` |  | Token ID |

## h1 project select

### Syntax

```h1 project select | --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project ID or name |

## h1 project limit

### Syntax

```h1 project limit | ```

## h1 project credentials

### Syntax

```h1 project credentials | ```

## h1 project credentials list

### Syntax

```h1 project credentials list | ```

## h1 project credentials delete

### Syntax

```h1 project credentials delete | --credentials CREDENTIALS```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 project credentials add

### Syntax

```h1 project credentials add | --name NAME --sshkey-file SSHKEY-FILE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

