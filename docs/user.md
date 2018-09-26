# TOC

  * [h1 user create](#h1-user-create) - Create an account
  * [h1 user access](#h1-user-access) - Manage your user access rights
    * [h1 user access rule](#h1-user-access-rule) - Manage your user network access control rule
      * [h1 user access rule show](#h1-user-access-rule-show) - Show network access rule
      * [h1 user access rule list](#h1-user-access-rule-list) - List network access rule
      * [h1 user access rule rename](#h1-user-access-rule-rename) - Rename network access rule
      * [h1 user access rule delete](#h1-user-access-rule-delete) - Delete network access rule
      * [h1 user access rule add](#h1-user-access-rule-add) - Add access rule for network access rule
  * [h1 user credentials](#h1-user-credentials) - Manage your credentials
    * [h1 user credentials show](#h1-user-credentials-show) - Show credentials
    * [h1 user credentials list](#h1-user-credentials-list) - List credentials
    * [h1 user credentials delete](#h1-user-credentials-delete) - Delete credentials
    * [h1 user credentials rename](#h1-user-credentials-rename) - Rename credentials
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
## h1 user access

Manage your user access rights

## h1 user access rule

Manage your user network access control rule

## h1 user access rule show

Show network access rule

### Syntax

```h1 user access rule show | --rule RULE```
### Example

```bash
h1 user access rule show --rule my-rule
```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--rule RULE``` |  | Network access rule ID or name |

## h1 user access rule list

List network access rule

### Syntax

```h1 user access rule list | ```
### Example

```bash
h1 user access rule list
```
## h1 user access rule rename

Rename network access rule

### Syntax

```h1 user access rule rename | --rule RULE --new-name NEW-NAME```
### Example

```bash
h1 user access rule rename --rule my-rule --new-name my-renamed-rule
```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--rule RULE``` |  | Network access rule ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 user access rule delete

Delete network access rule

### Syntax

```h1 user access rule delete | --rule RULE```
### Example

```bash
h1 user access rule delete --rule my-rule
```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--rule RULE``` |  | Network access rule ID or name |

## h1 user access rule add

Add access rule for network access rule

### Syntax

```h1 user access rule add | --name NAME --type TYPE --value VALUE```
### Examples

#### Add rule by geolocation
```bash
h1 user access rule add --type geo --value PL
```

#### Add rule by subnet

```bash
h1 user access rule add --type subnet --value 82.0.0.2/24
```

#### Add rule by IP address

```bash
h1 user access rule add --type subnet --value 82.123.123.2/32
```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--type TYPE``` |  | Type of rule |
| ```--value VALUE``` |  | Value of the rule that is appropriate for the type selected |

## h1 user credentials

Manage your credentials

## h1 user credentials show

Show credentials

### Syntax

```h1 user credentials show | --credentials CREDENTIALS```
### Example

```bash
h1 user credentials show --credentials my-credentials
```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 user credentials list

List credentials

### Syntax

```h1 user credentials list | ```
### Example

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
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 user credentials rename

Rename credentials

### Syntax

```h1 user credentials rename | --credentials CREDENTIALS --new-name NEW-NAME```
### Example

```bash
h1 user credentials rename --credentials my-credentials --new-name my-renamed-credentials
```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 user credentials add

Add public SSH key for user

### Syntax

```h1 user credentials add | --name NAME --sshkey-file SSHKEY-FILE```
### Example

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
