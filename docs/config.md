# TOC

 * [h1 config show](#h1-config-show) - Show config
 * [h1 config get](#h1-config-get) - Get config value
 * [h1 config set](#h1-config-set) - Set config value
 * [h1 config unset](#h1-config-unset) - Unset config key


# Specification

## h1 config

Manage config of CLI

## h1 config show

Show config

### Syntax

```h1 config show | ```

## h1 config get

Get config value

### Syntax

```h1 config get | --key KEY```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--key KEY``` |  | Name of config key |

## h1 config set

Set config value

### Syntax

```h1 config set | --key KEY --value VALUE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--key KEY``` |  | Name of config key |
| ```--value VALUE``` |  | Config value |

## h1 config unset

Unset config key

### Syntax

```h1 config unset | --key KEY```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--key KEY``` |  | Name of config key |

