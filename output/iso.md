# TOC

* [h1 iso list](#h1-iso-list)
* [h1 iso show](#h1-iso-show)
* [h1 iso delete](#h1-iso-delete)
* [h1 iso rename](#h1-iso-rename)
* [h1 iso access](#h1-iso-access)
* [h1 iso resume](#h1-iso-resume)
* [h1 iso create](#h1-iso-create)


# Specification

## h1 iso

### Syntax

```h1 iso | ```

## h1 iso list

### Syntax

```h1 iso list | ```

## h1 iso show

### Syntax

```h1 iso show | --iso ISO```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso delete

### Syntax

```h1 iso delete | --iso ISO```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso rename

### Syntax

```h1 iso rename | --iso ISO --new-name NEW-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 iso access

### Syntax

```h1 iso access | ```

## h1 iso access grant

### Syntax

```h1 iso access grant | --iso ISO --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 iso access revoke

### Syntax

```h1 iso access revoke | --iso ISO --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 iso access list

### Syntax

```h1 iso access list | --iso ISO```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |

## h1 iso resume

### Syntax

```h1 iso resume | --iso ISO --source-file SOURCE-FILE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO ID or name |
| ```--source-file SOURCE-FILE``` |  | Path to .vhdx file to import |

## h1 iso create

### Syntax

```h1 iso create | --name NAME [--source-file SOURCE-FILE] [--source-url SOURCE-URL]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | ISO name |
| ```--source-file SOURCE-FILE``` |  | Source file for ISO import. |
| ```--source-url SOURCE-URL``` |  | Source url for ISO import. Required if source-file is not specified. |

