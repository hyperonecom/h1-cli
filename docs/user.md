# TOC

 * [h1 user create](#h1-user-create) - Create an account
 * [h1 user credentials](#h1-user-credentials) - Manage your credentials
  * [h1 user credentials list](#h1-user-credentials-list) - List credentials
  * [h1 user credentials delete](#h1-user-credentials-delete) - Delete credentials
  * [h1 user credentials add](#h1-user-credentials-add) - Add public SSH key for user
 * [h1 user 2fa](#h1-user-2fa) - Manage two factor authentication
  * [h1 user 2fa enable](#h1-user-2fa-enable) - Enable factor of authentication
  * [h1 user 2fa disable](#h1-user-2fa-disable) - Disable factor of authentication
  * [h1 user 2fa list](#h1-user-2fa-list) - List authentication factory


# Specification

## h1 user

Manage your user

## h1 user create

Create an account

### Syntax

```h1 user create | ```

## h1 user credentials

Manage your credentials

## h1 user credentials list

List credentials

### Syntax

```h1 user credentials list | ```

## h1 user credentials delete

Delete credentials

### Syntax

```h1 user credentials delete | --credentials CREDENTIALS```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 user credentials add

Add public SSH key for user

### Syntax

```h1 user credentials add | --name NAME --sshkey-file SSHKEY-FILE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 user 2fa

Manage two factor authentication

## h1 user 2fa enable

Enable factor of authentication

### Syntax

```h1 user 2fa enable | [--type TYPE]```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```[--type TYPE]``` |  | type |

## h1 user 2fa disable

Disable factor of authentication

### Syntax

```h1 user 2fa disable | [--type TYPE]```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```[--type TYPE]``` |  | type |

## h1 user 2fa list

List authentication factory

### Syntax

```h1 user 2fa list | ```

