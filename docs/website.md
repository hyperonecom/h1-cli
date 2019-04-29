# TOC

  * [h1 website create](#h1-website-create) - Create website
  * [h1 website service](#h1-website-service) - Manage your services of website
    * [h1 website service list](#h1-website-service-list) - List service for website
    * [h1 website service show](#h1-website-service-show) - Show service for website
  * [h1 website delete](#h1-website-delete) - Delete website
  * [h1 website history](#h1-website-history) - History of website
  * [h1 website rename](#h1-website-rename) - Rename website
  * [h1 website stop](#h1-website-stop) - Stop website
  * [h1 website show](#h1-website-show) - Show website
  * [h1 website list](#h1-website-list) - List website
  * [h1 website sftp](#h1-website-sftp) - Connect to website using SFTP
  * [h1 website start](#h1-website-start) - Start website
  * [h1 website credential](#h1-website-credential) - Manage your credentials to website
    * [h1 website credential cert](#h1-website-credential-cert) - Manage your certificate to Vault
      * [h1 website credential cert show](#h1-website-credential-cert-show) - Show certificate to Vault
      * [h1 website credential cert rename](#h1-website-credential-cert-rename) - Rename certificate to Vault
      * [h1 website credential cert list](#h1-website-credential-cert-list) - List certificate to Vault
      * [h1 website credential cert delete](#h1-website-credential-cert-delete) - Delete certificate to Vault
      * [h1 website credential cert add](#h1-website-credential-cert-add) - Add certificate to website
    * [h1 website credential password](#h1-website-credential-password) - Manage your password to website
      * [h1 website credential password show](#h1-website-credential-password-show) - Show password to website
      * [h1 website credential password list](#h1-website-credential-password-list) - List password to website
      * [h1 website credential password rename](#h1-website-credential-password-rename) - Rename password to website
      * [h1 website credential password delete](#h1-website-credential-password-delete) - Delete password to website
      * [h1 website credential password add](#h1-website-credential-password-add) - Add password to website
  * [h1 website tag](#h1-website-tag) - Manage your tag
    * [h1 website tag list](#h1-website-tag-list) - List tag
    * [h1 website tag add](#h1-website-tag-add) - Add a tag to website
    * [h1 website tag delete](#h1-website-tag-delete) - Delete a tag of website


# Specification

## h1 website

Manage your website

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

## h1 website create

Create website

### Syntax

```h1 website create | --name NAME --type TYPE --domain DOMAIN [--domain DOMAIN ...] --image IMAGE [--tag TAG [--tag TAG ...]] [--password PASSWORD [--password PASSWORD ...]] [--ssh SSH [--ssh SSH ...]] [--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]]```
### Examples

#### Create Website with SSH credential

```bash
h1 website create --name my-website --type website --ssh my-key
```

Hint: Use ```h1 project credentials list``` or ```h1 user credentials list``` to list available SSH keys.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Website name |
| ```--type TYPE``` |  | Type |
| ```--domain DOMAIN [--domain DOMAIN ...]``` |  | Domain name. The parameter may occur repeatedly |
| ```--image IMAGE``` |  | Website Image |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--password PASSWORD [--password PASSWORD ...]``` |  | Password to access. Recommends to use SSH keys. The parameter may occur repeatedly |
| ```--ssh SSH [--ssh SSH ...]``` |  | SSH key ID or name that allows access. The parameter may occur repeatedly |
| ```--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]``` |  | Read SSH key from file. The parameter may occur repeatedly |

## h1 website service

Manage your services of website

## h1 website service list

List service for website

### Syntax

```h1 website service list | --website WEBSITE```
### Example

```bash
h1 website service list --website test-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website service show

Show service for website

### Syntax

```h1 website service show | --website WEBSITE --service SERVICE```
### Example

```bash
h1 website service show --service my-service --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--service SERVICE``` |  | Service for website ID or name |

## h1 website delete

Delete website

### Syntax

```h1 website delete | --website WEBSITE```
### Example

```bash
h1 website delete --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website history

History of website

### Syntax

```h1 website history | --website WEBSITE```
### Example

```bash
h1 website history --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website rename

Rename website

### Syntax

```h1 website rename | --website WEBSITE --new-name NEW-NAME```
### Example

```bash
h1 website rename --website my-website --new-name my-renamed-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 website stop

Stop website

### Syntax

```h1 website stop | --website WEBSITE```
### Example

```
h1 website stop --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website show

Show website

### Syntax

```h1 website show | --website WEBSITE```
### Example

```bash
h1 website show --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website list

List website

### Syntax

```h1 website list | ```
### Example

```bash
h1 website list
```

## h1 website sftp

Connect to website using SFTP

### Syntax

```h1 website sftp | --website WEBSITE```
### Example

```
h1 website sftp --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website start

Start website

### Syntax

```h1 website start | --website WEBSITE```
### Example

```
h1 website start --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website credential

Manage your credentials to website

## h1 website credential cert

Manage your certificate to Vault

## h1 website credential cert show

Show certificate to Vault

### Syntax

```h1 website credential cert show | --website WEBSITE --cert CERT```
### Example

```bash
h1 website credential cert show --cert my-cert
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--cert CERT``` |  | Certificate to Vault ID or name |

## h1 website credential cert rename

Rename certificate to Vault

### Syntax

```h1 website credential cert rename | --website WEBSITE --cert CERT --new-name NEW-NAME```
### Example

```bash
h1 website credential cert rename --cert my-cert --new-name my-renamed-cert --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--cert CERT``` |  | Certificate to Vault ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 website credential cert list

List certificate to Vault

### Syntax

```h1 website credential cert list | --website WEBSITE```
### Example

```bash
h1 website credential cert list --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website credential cert delete

Delete certificate to Vault

### Syntax

```h1 website credential cert delete | --website WEBSITE --cert CERT```
### Example

```bash
h1 website credential cert delete --cert my-cert --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--cert CERT``` |  | Certificate to Vault ID or name |

## h1 website credential cert add

Add certificate to website

### Syntax

```h1 website credential cert add | --website WEBSITE --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE]```
### Example

```bash
h1 website credential cert add --website my-website --name my-key --sshkey my-home-ssh
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--name NAME``` |  | Certificate name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sshkey SSHKEY``` |  | Public SSH key ID or name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 website credential password

Manage your password to website

## h1 website credential password show

Show password to website

### Syntax

```h1 website credential password show | --website WEBSITE --password PASSWORD```
### Example

```bash
h1 website credential password show --password my-password
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--password PASSWORD``` |  | Password to website ID or name |

## h1 website credential password list

List password to website

### Syntax

```h1 website credential password list | --website WEBSITE```
### Example

```bash
h1 website credential password list --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website credential password rename

Rename password to website

### Syntax

```h1 website credential password rename | --website WEBSITE --password PASSWORD --new-name NEW-NAME```
### Example

```bash
h1 website credential password rename --password my-password --new-name my-renamed-password --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--password PASSWORD``` |  | Password to website ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 website credential password delete

Delete password to website

### Syntax

```h1 website credential password delete | --website WEBSITE --password PASSWORD```
### Example

```bash
h1 website credential password delete --password my-password --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--password PASSWORD``` |  | Password to website ID or name |

## h1 website credential password add

Add password to website

### Syntax

```h1 website credential password add | --website WEBSITE --name NAME --password PASSWORD```
### Example

```bash
h1 website credential password add --name my-pass --password secret-password --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--name NAME``` |  | Name |
| ```--password PASSWORD``` |  | Password |

## h1 website tag

Manage your tag

## h1 website tag list

List tag

### Syntax

```h1 website tag list | --website WEBSITE```
### Example

```bash
h1 website tag list --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website tag add

Add a tag to website

### Syntax

```h1 website tag add | --website WEBSITE [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 website tag add --website test-website --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 website tag delete

Delete a tag of website

### Syntax

```h1 website tag delete | --tag TAG --website WEBSITE```
### Example

```bash
h1 website tag delete --website test-website --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--website WEBSITE``` |  | Website ID or name |
