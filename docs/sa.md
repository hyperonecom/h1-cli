# TOC

  * [h1 sa create](#h1-sa-create) - Create Service account
  * [h1 sa list](#h1-sa-list) - List Service account
  * [h1 sa show](#h1-sa-show) - Show Service account
  * [h1 sa delete](#h1-sa-delete) - Delete Service account
  * [h1 sa history](#h1-sa-history) - History of Service account
  * [h1 sa rename](#h1-sa-rename) - Rename Service account
  * [h1 sa service](#h1-sa-service) - Manage your services of Service account
    * [h1 sa service list](#h1-sa-service-list) - List Service for Service account
    * [h1 sa service show](#h1-sa-service-show) - Show Service for Service account
  * [h1 sa access](#h1-sa-access) - Manage your Service account access rights
    * [h1 sa access check](#h1-sa-access-check) - Check access rights for Service account
  * [h1 sa transfer](#h1-sa-transfer) - Transfer Service account to other project
  * [h1 sa credential](#h1-sa-credential) - Manage your credentials of Service account
    * [h1 sa credential access](#h1-sa-credential-access) - Manage your credential of Service account access rights
      * [h1 sa credential access check](#h1-sa-credential-access-check) - Check access rights for credential of Service account
    * [h1 sa credential list](#h1-sa-credential-list) - List credential of Service account
    * [h1 sa credential show](#h1-sa-credential-show) - Show credential of Service account
    * [h1 sa credential delete](#h1-sa-credential-delete) - Delete credential of Service account
    * [h1 sa credential cert](#h1-sa-credential-cert) - Manage your certificate credential of Service account
      * [h1 sa credential cert list](#h1-sa-credential-cert-list) - List certificate credential of Service account
      * [h1 sa credential cert show](#h1-sa-credential-cert-show) - Show certificate credential of Service account
      * [h1 sa credential cert rename](#h1-sa-credential-cert-rename) - Rename certificate credential of Service account
      * [h1 sa credential cert delete](#h1-sa-credential-cert-delete) - Delete certificate credential of Service account
      * [h1 sa credential cert add](#h1-sa-credential-cert-add) - Add certificate credential of Service account
      * [h1 sa credential cert list](#h1-sa-credential-cert-list) - List certificate credential of Service account
    * [h1 sa credential generate](#h1-sa-credential-generate) - Generate passport of Service account
  * [h1 sa tag](#h1-sa-tag) - Manage your tag
    * [h1 sa tag list](#h1-sa-tag-list) - List tag
    * [h1 sa tag add](#h1-sa-tag-add) - Add a tag to Service account
    * [h1 sa tag delete](#h1-sa-tag-delete) - Delete a tag of Service account


# Specification

## h1 sa

Manage your Service account

### Examples

#### Create Service Account with SSH credential

```bash
h1 sa create --name my-sa
```

## h1 sa create

Create Service account

### Syntax

```h1 sa create | --name NAME [--tag TAG [--tag TAG ...]] [--type TYPE]```
### Example

```bash
h1 sa create create --name my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Service account name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--type TYPE``` |  | Service account type name or ID |

## h1 sa list

List Service account

### Syntax

```h1 sa list | ```
### Example

```bash
h1 sa list
```

## h1 sa show

Show Service account

### Syntax

```h1 sa show | --sa SA```
### Example

```bash
h1 sa show --sa my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |

## h1 sa delete

Delete Service account

### Syntax

```h1 sa delete | --sa SA```
### Example

```bash
h1 sa delete --sa my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |

## h1 sa history

History of Service account

### Syntax

```h1 sa history | --sa SA```
### Example

```bash
h1 sa history --sa my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |

## h1 sa rename

Rename Service account

### Syntax

```h1 sa rename | --sa SA --new-name NEW-NAME```
### Example

```bash
h1 sa rename --sa my-sa --new-name my-renamed-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 sa service

Manage your services of Service account

## h1 sa service list

List Service for Service account

### Syntax

```h1 sa service list | --sa SA```
### Example

```bash
h1 sa service list --sa test-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |

## h1 sa service show

Show Service for Service account

### Syntax

```h1 sa service show | --sa SA --service SERVICE```
### Example

```bash
h1 sa service show --service my-service --sa my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |
| ```--service SERVICE``` |  | Service for Service account ID or name |

## h1 sa access

Manage your Service account access rights

## h1 sa access check

Check access rights for Service account

### Syntax

```h1 sa access check | --sa SA```
### Example

```bash
h1 sa access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |

## h1 sa transfer

Transfer Service account to other project

### Syntax

```h1 sa transfer | --sa SA --new-project NEW-PROJECT```
### Example

```bash
h1 sa transfer --sa test-sa --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 sa credential

Manage your credentials of Service account

## h1 sa credential access

Manage your credential of Service account access rights

## h1 sa credential access check

Check access rights for credential of Service account

### Syntax

```h1 sa credential access check | --sa SA --credential CREDENTIAL```
### Example

```bash
h1 sa credential access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |
| ```--credential CREDENTIAL``` |  | Credential of Service account ID or name |

## h1 sa credential list

List credential of Service account

### Syntax

```h1 sa credential list | --sa SA```
### Example

```bash
h1 sa credential list --sa my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |

## h1 sa credential show

Show credential of Service account

### Syntax

```h1 sa credential show | --sa SA --credential CREDENTIAL```
### Example

```bash
h1 sa credential show --credential my-credential
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |
| ```--credential CREDENTIAL``` |  | Credential of Service account ID or name |

## h1 sa credential delete

Delete credential of Service account

### Syntax

```h1 sa credential delete | --sa SA --credential CREDENTIAL```
### Example

```bash
h1 sa credential delete --credential my-credential --sa my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |
| ```--credential CREDENTIAL``` |  | Credential of Service account ID or name |

## h1 sa credential cert

Manage your certificate credential of Service account

## h1 sa credential cert list

List certificate credential of Service account

### Syntax

```h1 sa credential cert list | --sa SA```
### Example

```bash
h1 sa credential cert list --sa my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |

## h1 sa credential cert show

Show certificate credential of Service account

### Syntax

```h1 sa credential cert show | --sa SA --cert CERT```
### Example

```bash
h1 sa credential cert show --cert my-cert
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |
| ```--cert CERT``` |  | Certificate credential of Service account ID or name |

## h1 sa credential cert rename

Rename certificate credential of Service account

### Syntax

```h1 sa credential cert rename | --sa SA --cert CERT --new-name NEW-NAME```
### Example

```bash
h1 sa credential cert rename --cert my-cert --new-name my-renamed-cert --sa my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |
| ```--cert CERT``` |  | Certificate credential of Service account ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 sa credential cert delete

Delete certificate credential of Service account

### Syntax

```h1 sa credential cert delete | --sa SA --cert CERT```
### Example

```bash
h1 sa credential cert delete --cert my-cert --sa my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |
| ```--cert CERT``` |  | Certificate credential of Service account ID or name |

## h1 sa credential cert add

Add certificate credential of Service account

### Syntax

```h1 sa credential cert add | --sa SA --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE]```
### Example

```bash
h1 sa credential cert add --sa my-sa --name my-key --sshkey my-home-ssh
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |
| ```--name NAME``` |  | Certificate name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sshkey SSHKEY``` |  | Public SSH key ID or name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 sa credential cert list

List certificate credential of Service account

### Syntax

```h1 sa credential cert list | --sa SA```
### Example

```bash
h1 sa credential cert list --sa my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |

## h1 sa credential generate

Generate passport of Service account

### Syntax

```h1 sa credential generate | --sa SA --name NAME --passport-output-file PASSPORT-OUTPUT-FILE```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account name or ID |
| ```--name NAME``` |  | Credential name |
| ```--passport-output-file PASSPORT-OUTPUT-FILE``` |  | Output path to save Service account passport as file |

## h1 sa tag

Manage your tag

## h1 sa tag list

List tag

### Syntax

```h1 sa tag list | --sa SA```
### Example

```bash
h1 sa tag list --sa my-sa
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sa SA``` |  | Service account ID or name |

## h1 sa tag add

Add a tag to Service account

### Syntax

```h1 sa tag add | --tag TAG [--tag TAG ...] --sa SA```
### Example

```bash
h1 sa tag add --sa test-sa --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--sa SA``` |  | Service account ID or name |

## h1 sa tag delete

Delete a tag of Service account

### Syntax

```h1 sa tag delete | --tag TAG --sa SA```
### Example

```bash
h1 sa tag delete --sa test-sa --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--sa SA``` |  | Service account ID or name |

