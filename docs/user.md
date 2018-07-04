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

### Example

```bash
h1 user create
```

### Examples

```bash
h1 user create
```

## h1 user credentials

Manage your credentials

## h1 user credentials list

List credentials

### Syntax

```h1 user credentials list | ```

### Example

```bash
h1 user credentials list
```

### Examples

```bash
h1 user credentials list
```

## h1 user credentials delete

Delete credentials

### Syntax

```h1 user credentials delete | --credentials CREDENTIALS```

### Example

```bash
h1 user credentials delete --credentials my-credentials
```

### Examples

```bash
h1 user credentials delete --credentials my-credentials
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 user credentials add

Add public SSH key for user

### Syntax

```h1 user credentials add | --name NAME --sshkey-file SSHKEY-FILE```

### Example

```bash
h1 user credentials add --name my-home-ssh --sshkey-file ~/.ssh/id_rsa.pub
```

### Examples

```bash
h1 user credentials add --name my-home-ssh --sshkey-file ~/.ssh/id_rsa.pub
```

### Required arguments

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

### Examples

#### Enable Time-Based One-Time Password (TOTP) factor

```bash
h1 user 2fa enable
```

After scanning image in [Google Authenticator] or [Authy] applications, you will receive a
token that will allow you to login to the site.

[Google Authenticator]: https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2
[Authy]: https://authy.com/download/

#### Enable One-time authorization Codes (OTAC) factor

```bash
h1 user 2fa enable --type otac
```

### Examples

#### Enable Time-Based One-Time Password (TOTP) factor

```bash
h1 user 2fa enable
```

After scanning image in [Google Authenticator] or [Authy] applications, you will receive a
token that will allow you to login to the site.

[Google Authenticator]: https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2
[Authy]: https://authy.com/download/

#### Enable One-time authorization Codes (OTAC) factor

```bash
h1 user 2fa enable --type otac
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--type TYPE``` |  | type |

## h1 user 2fa disable

Disable factor of authentication

### Syntax

```h1 user 2fa disable | [--type TYPE]```

### Examples

#### Disable OTAC codes

```bash
h1 user 2fa disable --type otac
```

### Examples

#### Disable OTAC codes

```bash
h1 user 2fa disable --type otac
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--type TYPE``` |  | type |

## h1 user 2fa list

List authentication factory

### Syntax

```h1 user 2fa list | ```

### Example

```bash
h1 user 2fa list
```

### Examples

```bash
h1 user 2fa list
```

