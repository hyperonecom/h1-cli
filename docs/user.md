# TOC

 * [h1 user create](#h1-user-create) - Create an account
 * [h1 user credentials](#h1-user-credentials) - Manage your CREDENTIALS
  * [h1 user credentials list](#h1-user-credentials-list) - Resource list
  * [h1 user credentials delete](#h1-user-credentials-delete) - Resource delete
  * [h1 user credentials add](#h1-user-credentials-add) - Adding public SSH key
 * [h1 user 2fa](#h1-user-2fa) - Manage 2fa
  * [h1 user 2fa enable](#h1-user-2fa-enable) - enable
  * [h1 user 2fa disable](#h1-user-2fa-disable) - disable
  * [h1 user 2fa list](#h1-user-2fa-list) - Resource list


# Specification

## h1 user

Manage your User

## h1 user create

Create an account

### Syntax

```h1 user create | ```

## h1 user credentials

Manage your CREDENTIALS

## h1 user credentials list

Resource list

### Syntax

```h1 user credentials list | ```

## h1 user credentials delete

Resource delete

### Syntax

```h1 user credentials delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 user credentials add

Adding public SSH key

### Syntax

```h1 user credentials add | --name NAME --sshkey-file SSHKEY-FILE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 user 2fa

Manage 2fa

## h1 user 2fa enable

enable

### Syntax

```h1 user 2fa enable | [--type TYPE]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```[--type TYPE]``` |  | type |

## h1 user 2fa disable

disable

### Syntax

```h1 user 2fa disable | [--type TYPE]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```[--type TYPE]``` |  | type |

## h1 user 2fa list

Resource list

### Syntax

```h1 user 2fa list | ```

