# TOC

  * [h1 config show](#h1-config-show) - Show config
  * [h1 config set](#h1-config-set) - Set config value
  * [h1 config get](#h1-config-get) - Get config value
  * [h1 config unset](#h1-config-unset) - Unset config key


# Specification

## h1 config

Manage config of CLI

## h1 config show

Show config

### Syntax

```h1 config show | ```
### Examples

#### Get default SSH key for new virtual machine (if set)

```bash
h1 config show --key vm.create.ssh
```

## h1 config set

Set config value

### Syntax

```h1 config set | --key KEY --value VALUE```
### Examples

#### Set default SSH key for new virtual machine

```bash
h1 config set --key vm.create.ssh --value 'my-home'
```

#### Set default virtual machine type for a new one

```bash
h1 config set --key vm.create.type --value 'a1.nano'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--key KEY``` |  | Name of config key |
| ```--value VALUE``` |  | Config value |

## h1 config get

Get config value

### Syntax

```h1 config get | --key KEY```
### Examples

#### Get default virtual machine type for a new one

```bash
h1 config get --key vm.create.type
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--key KEY``` |  | Name of config key |

## h1 config unset

Unset config key

### Syntax

```h1 config unset | --key KEY```
### Examples

#### Unset default SSH key for new virtual machine (if set)

```bash
h1 config unset --key vm.create.ssh
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--key KEY``` |  | Name of config key |

