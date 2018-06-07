# TOC

* [h1 create](#h1-create)
* [h1 credentials](#h1-credentials)
* [h1 credentials list](#h1-credentials list)
* [h1 credentials delete](#h1-credentials delete)
* [h1 credentials add](#h1-credentials add)


# Specification

## h1 user

### Syntax

```h1 user | ```

## h1 user create

### Syntax

```h1 user create | ```

## h1 user credentials

### Syntax

```h1 user credentials | ```

## h1 user credentials list

### Syntax

```h1 user credentials list | ```

## h1 user credentials delete

### Syntax

```h1 user credentials delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

## h1 user credentials add

### Syntax

```h1 user credentials add | --name NAME --sshkey-file SSHKEY-FILE```

### Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

