# TOC

  * [h1 user create](#h1-user-create) - Create an account
  * [h1 user invitation](#h1-user-invitation) - Manage your invitation of User
    * [h1 user invitation list](#h1-user-invitation-list) - List invitation of User
    * [h1 user invitation decline](#h1-user-invitation-decline) - Decline invitation of User
    * [h1 user invitation accept](#h1-user-invitation-accept) - Accept invitation of User
  * [h1 user 2fa](#h1-user-2fa) - Manage two factor authentication
    * [h1 user 2fa enable](#h1-user-2fa-enable) - Enable factor of authentication
    * [h1 user 2fa disable](#h1-user-2fa-disable) - Disable factor of authentication
    * [h1 user 2fa list](#h1-user-2fa-list) - List authentication factory
  * [h1 user credential](#h1-user-credential) - Manage your credentials of User
    * [h1 user credential access](#h1-user-credential-access) - Manage your credential of User access rights
      * [h1 user credential access check](#h1-user-credential-access-check) - Check access rights for credential of User
    * [h1 user credential list](#h1-user-credential-list) - List credential of User
    * [h1 user credential show](#h1-user-credential-show) - Show credential of User
    * [h1 user credential delete](#h1-user-credential-delete) - Delete credential of User
    * [h1 user credential cert](#h1-user-credential-cert) - Manage your certificate credential of User
      * [h1 user credential cert list](#h1-user-credential-cert-list) - List certificate credential of User
      * [h1 user credential cert show](#h1-user-credential-cert-show) - Show certificate credential of User
      * [h1 user credential cert rename](#h1-user-credential-cert-rename) - Rename certificate credential of User
      * [h1 user credential cert delete](#h1-user-credential-cert-delete) - Delete certificate credential of User
      * [h1 user credential cert add](#h1-user-credential-cert-add) - Add certificate credential of User
      * [h1 user credential cert list](#h1-user-credential-cert-list) - List certificate credential of User


# Specification

## h1 user

Manage your User

## h1 user create

Create an account

### Syntax

```h1 user create | ```
### Example

```bash
h1 user create
```

## h1 user invitation

Manage your invitation of User

## h1 user invitation list

List invitation of User

### Syntax

```h1 user invitation list | ```
### Example

```bash
h1 user invitation list
```

## h1 user invitation decline

Decline invitation of User

### Syntax

```h1 user invitation decline | --invitation INVITATION```
### Examples

#### Decline invitation

```bash
h1 user invitation decline --invitation 5d88097cd6249ff5478540b2
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--invitation INVITATION``` |  | Invitation ID |

## h1 user invitation accept

Accept invitation of User

### Syntax

```h1 user invitation accept | --invitation INVITATION```
### Examples

#### Accept invitation

```bash
h1 user invitation accept --invitation 5d88097cd6249ff5478540b2
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--invitation INVITATION``` |  | Invitation ID |

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

Manage your credentials of User

## h1 user credential access

Manage your credential of User access rights

## h1 user credential access check

Check access rights for credential of User

### Syntax

```h1 user credential access check | --user USER --credential CREDENTIAL```
### Example

```bash
h1 user credential access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | User ID or name |
| ```--credential CREDENTIAL``` |  | Credential of User ID or name |

## h1 user credential list

List credential of User

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

Show credential of User

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
| ```--credential CREDENTIAL``` |  | Credential of User ID or name |

## h1 user credential delete

Delete credential of User

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
| ```--credential CREDENTIAL``` |  | Credential of User ID or name |

## h1 user credential cert

Manage your certificate credential of User

## h1 user credential cert list

List certificate credential of User

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

## h1 user credential cert show

Show certificate credential of User

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
| ```--cert CERT``` |  | Certificate credential of User ID or name |

## h1 user credential cert rename

Rename certificate credential of User

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
| ```--cert CERT``` |  | Certificate credential of User ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 user credential cert delete

Delete certificate credential of User

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
| ```--cert CERT``` |  | Certificate credential of User ID or name |

## h1 user credential cert add

Add certificate credential of User

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

List certificate credential of User

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

