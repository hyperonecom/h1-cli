# TOC

  * [h1 config autocomplete](#h1-config-autocomplete) - Manage autocomplete for CLI
    * [h1 config autocomplete setup](#h1-config-autocomplete-setup) - Update shell configuration to support autocomplete
    * [h1 config autocomplete remove](#h1-config-autocomplete-remove) - Update shell configuration to remove autocomplete
  * [h1 config show](#h1-config-show) - Show config
  * [h1 config set](#h1-config-set) - Set config value
  * [h1 config get](#h1-config-get) - Get config value
  * [h1 config unset](#h1-config-unset) - Unset config key


# Specification

## h1 config

Manage config of CLI

## h1 config autocomplete

Manage autocomplete for CLI

## h1 config autocomplete setup

Update shell configuration to support autocomplete

### Syntax

```h1 config autocomplete setup | [--debug]```
### Examples

#### Get default virtual machine type for a new one

```
h1 config autocomplete setup
```

#### Introduces changes

If you use Bash, it will create a file at ```~/.h1/completion.sh``` and append a loader code to ```~/.bash_profile``` file.
If you use Zsh, it appends a loader code to ```~/.zshrc``` file.
If you use Fish, it appends a loader code to ```~/.config/fish/config.fish``` file.

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--debug``` |  | Create alias for debugging |

## h1 config autocomplete remove

Update shell configuration to remove autocomplete

### Syntax

```h1 config autocomplete remove | ```
### Examples

#### Update shell configuration to disable autocomplete

```
h1 config autocomplete remove
```

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

