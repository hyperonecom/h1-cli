# TOC

* [h1 user create](#h1-user-create)
* [h1 user credentials](#h1-user-credentials)
* [h1 user 2fa](#h1-user-2fa)


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

```h1 user credentials delete | --credentials CREDENTIALS```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 user credentials add

### Syntax

```h1 user credentials add | --name NAME --sshkey-file SSHKEY-FILE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 user 2fa

### Syntax

```h1 user 2fa | ```

## h1 user 2fa enable

### Syntax

```h1 user 2fa enable | [--type TYPE]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--type TYPE``` |  | type |

## h1 user 2fa disable

### Syntax

```h1 user 2fa disable | [--type TYPE]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--type TYPE``` |  | type |

## h1 user 2fa list

### Syntax

```h1 user 2fa list | ```

