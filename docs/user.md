# TOC

  * [h1 user create](#h1-user-create) - Create an account
  * [h1 user 2fa](#h1-user-2fa) - Manage two factor authentication
    * [h1 user 2fa enable](#h1-user-2fa-enable) - Enable factor of authentication
    * [h1 user 2fa disable](#h1-user-2fa-disable) - Disable factor of authentication
    * [h1 user 2fa list](#h1-user-2fa-list) - List authentication factory
  * [h1 user credential](#h1-user-credential) - Manage your credentials to user
    * [h1 user credential list](#h1-user-credential-list) - List credential of user
    * [h1 user credential show](#h1-user-credential-show) - Show credential of user
    * [h1 user credential delete](#h1-user-credential-delete) - Delete credential of user
    * [h1 user credential cert](#h1-user-credential-cert) - Manage your certificate to user
      * [h1 user credential cert show](#h1-user-credential-cert-show) - Show certificate to user
      * [h1 user credential cert rename](#h1-user-credential-cert-rename) - Rename certificate to user
      * [h1 user credential cert list](#h1-user-credential-cert-list) - List certificate to user
      * [h1 user credential cert delete](#h1-user-credential-cert-delete) - Delete certificate to user
      * [h1 user credential cert add](#h1-user-credential-cert-add) - Add certificate to user
      * [h1 user credential cert list](#h1-user-credential-cert-list) - List credential of certificate to user


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

## h1 user 2fa

Manage two factor authentication

## h1 user 2fa enable

Enable factor of authentication

### Syntax

```h1 user 2fa enable | [--type {totp,otac}]```
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
| ```--type {totp,otac}``` |  | type |

## h1 user 2fa disable

Disable factor of authentication

### Syntax

```h1 user 2fa disable | [--type {totp,otac}]```
### Examples

#### Disable OTAC codes

```bash
h1 user 2fa disable --type otac
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--type {totp,otac}``` |  | type |

## h1 user 2fa list

List authentication factory

### Syntax

```h1 user 2fa list | ```
### Example

```bash
h1 user 2fa list
```

## h1 user credential

Manage your credentials to user

## h1 user credential list

List credential of user

### Syntax

```h1 user credential list | --user USER```
### Example

```bash
h1 user credential list --user my-user
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | User ID or name |

## h1 user credential show

Show credential of user

### Syntax

```h1 user credential show | --user USER --credential CREDENTIAL```
### Example

```bash
h1 user credential show --credential my-credential
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | User ID or name |
| ```--credential CREDENTIAL``` |  | Credential of user ID or name |

## h1 user credential delete

Delete credential of user

### Syntax

```h1 user credential delete | --user USER --credential CREDENTIAL```
### Example

```bash
h1 user credential delete --credential my-credential --user my-user
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | User ID or name |
| ```--credential CREDENTIAL``` |  | Credential of user ID or name |

## h1 user credential cert

Manage your certificate to user

## h1 user credential cert show

Show certificate to user

### Syntax

```h1 user credential cert show | --user USER --cert CERT```
### Example

```bash
h1 user credential cert show --cert my-cert
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | User ID or name |
| ```--cert CERT``` |  | Certificate to user ID or name |

## h1 user credential cert rename

Rename certificate to user

### Syntax

```h1 user credential cert rename | --user USER --cert CERT --new-name NEW-NAME```
### Example

```bash
h1 user credential cert rename --cert my-cert --new-name my-renamed-cert --user my-user
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | User ID or name |
| ```--cert CERT``` |  | Certificate to user ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 user credential cert list

List certificate to user

### Syntax

```h1 user credential cert list | --user USER```
### Example

```bash
h1 user credential cert list --user my-user
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | User ID or name |

## h1 user credential cert delete

Delete certificate to user

### Syntax

```h1 user credential cert delete | --user USER --cert CERT```
### Example

```bash
h1 user credential cert delete --cert my-cert --user my-user
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | User ID or name |
| ```--cert CERT``` |  | Certificate to user ID or name |

## h1 user credential cert add

Add certificate to user

### Syntax

```h1 user credential cert add | --user USER --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE]```
### Example

```bash
h1 user credential cert add --user my-user --name my-key --sshkey my-home-ssh
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | User ID or name |
| ```--name NAME``` |  | Certificate name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sshkey SSHKEY``` |  | Public SSH key ID or name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 user credential cert list

List credential of certificate to user

### Syntax

```h1 user credential cert list | --user USER```
### Example

```bash
h1 user credential cert list --user my-user
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | User ID or name |

