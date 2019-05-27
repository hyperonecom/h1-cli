# Specification

# h1 env

Get environment variables to manage project as user

## Syntax

```h1 env | [--shell {powershell,cmd,sh,bash}] [--unset]```
## Examples

### Get and set environment variables in sh/bash shell

```bash
eval $(h1 env)
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--shell {powershell,cmd,sh,bash}``` |  | Shell type |
| ```--unset``` |  | Reverses operations of setting environment variables |

