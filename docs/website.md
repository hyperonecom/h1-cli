# TOC

  * [h1 website create](#h1-website-create) - Create Website
  * [h1 website delete](#h1-website-delete) - Delete Website
  * [h1 website domain](#h1-website-domain) - Manage Domain name of Website
    * [h1 website domain add](#h1-website-domain-add) - Add Domain name to Website
    * [h1 website domain delete](#h1-website-domain-delete) - Delete Domain name from Website
    * [h1 website domain list](#h1-website-domain-list) - List Domain name of Website
  * [h1 website history](#h1-website-history) - History of Website
  * [h1 website list](#h1-website-list) - List Website
  * [h1 website log](#h1-website-log) - Live logs of Website
  * [h1 website rename](#h1-website-rename) - Rename Website
  * [h1 website service](#h1-website-service) - Manage your services of Website
    * [h1 website service list](#h1-website-service-list) - List service for Website
    * [h1 website service show](#h1-website-service-show) - Show service for Website
  * [h1 website sftp](#h1-website-sftp) - Connect to Website using SFTP
  * [h1 website show](#h1-website-show) - Show Website
  * [h1 website ssh](#h1-website-ssh) - Connect to Website using SSH
  * [h1 website start](#h1-website-start) - Start Website
  * [h1 website stop](#h1-website-stop) - Stop Website
  * [h1 website transfer](#h1-website-transfer) - Transfer Website to other project
  * [h1 website credential](#h1-website-credential) - Manage your credentials to Website
    * [h1 website credential cert](#h1-website-credential-cert) - Manage your certificate to Website
      * [h1 website credential cert add](#h1-website-credential-cert-add) - Add certificate to Website
      * [h1 website credential cert delete](#h1-website-credential-cert-delete) - Delete certificate to Website
      * [h1 website credential cert list](#h1-website-credential-cert-list) - List certificate to Website
      * [h1 website credential cert rename](#h1-website-credential-cert-rename) - Rename certificate to Website
      * [h1 website credential cert show](#h1-website-credential-cert-show) - Show certificate to Website
    * [h1 website credential password](#h1-website-credential-password) - Manage your password to Website
      * [h1 website credential password add](#h1-website-credential-password-add) - Add password to Website
      * [h1 website credential password delete](#h1-website-credential-password-delete) - Delete password to Website
      * [h1 website credential password list](#h1-website-credential-password-list) - List password to Website
      * [h1 website credential password rename](#h1-website-credential-password-rename) - Rename password to Website
      * [h1 website credential password show](#h1-website-credential-password-show) - Show password to Website
  * [h1 website tag](#h1-website-tag) - Manage your Tag of Website
    * [h1 website tag add](#h1-website-tag-add) - Add Tag of Website
    * [h1 website tag delete](#h1-website-tag-delete) - Delete Tag of Website
    * [h1 website tag list](#h1-website-tag-list) - List Tag of Website


# Specification

## h1 website

Manage your Website

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

### Examples

#### Create Website with SSH credential

```bash
h1 website create --name my-website --type website --image 'quay.io/hyperone/php-apache:7.2' --ssh my-key
```

Hint: Use ```h1 project credentials list``` or ```h1 user credentials list``` to list available SSH keys.

## h1 website create

Create Website

### Syntax

```h1 website create | --name NAME --type TYPE --image IMAGE [--password PASSWORD [--password PASSWORD ...]] [--ssh SSH [--ssh SSH ...]] [--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]] [--tag TAG [--tag TAG ...]]```
### Examples

#### Create Website with SSH credential

```bash
h1 website create --name my-website --type website --image 'quay.io/hyperone/php-apache:7.2' --ssh my-key
```

Hint: Use ```h1 project credentials list``` or ```h1 user credentials list``` to list available SSH keys.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Website name |
| ```--type TYPE``` |  | Website type |
| ```--image IMAGE``` |  | Website Image |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD [--password PASSWORD ...]``` |  | Password to access. Recommends to use SSH keys. The parameter may occur repeatedly |
| ```--ssh SSH [--ssh SSH ...]``` |  | SSH key ID or name that allows access. The parameter may occur repeatedly |
| ```--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]``` |  | Read SSH key from file. The parameter may occur repeatedly |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 website delete

Delete Website

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

## h1 website domain

Manage Domain name of Website

## h1 website domain add

Add Domain name to Website

### Syntax

```h1 website domain add | --domain DOMAIN [--domain DOMAIN ...] --website WEBSITE```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--domain DOMAIN [--domain DOMAIN ...]``` |  | Domain name. The parameter may occur repeatedly |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website domain delete

Delete Domain name from Website

### Syntax

```h1 website domain delete | --domain DOMAIN [--domain DOMAIN ...] --website WEBSITE```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--domain DOMAIN [--domain DOMAIN ...]``` |  | Domain name. The parameter may occur repeatedly |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website domain list

List Domain name of Website

### Syntax

```h1 website domain list | --website WEBSITE```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website history

History of Website

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

## h1 website list

List Website

### Syntax

```h1 website list | ```
### Example

```bash
h1 website list
```

## h1 website log

Live logs of Website

### Syntax

```h1 website log | --website WEBSITE [--log-file LOG-FILE]```
### Example

```
h1 website log --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log-file LOG-FILE``` |  | Path of output log file |

## h1 website rename

Rename Website

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

## h1 website service

Manage your services of Website

## h1 website service list

List service for Website

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

Show service for Website

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
| ```--service SERVICE``` |  | Service for Website ID or name |

## h1 website sftp

Connect to Website using SFTP

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

## h1 website show

Show Website

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

## h1 website ssh

Connect to Website using SSH

### Syntax

```h1 website ssh | --website WEBSITE [--command COMMAND]```
### Example

```bash
h1 website ssh --website my-website
```

Note: Need valid credentials to access resource any way.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--command COMMAND``` |  | Command to execute |

## h1 website start

Start Website

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

## h1 website stop

Stop Website

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

## h1 website transfer

Transfer Website to other project

### Syntax

```h1 website transfer | --website WEBSITE --new-project NEW-PROJECT```
### Example

```bash
h1 website transfer --website test-website --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 website credential

Manage your credentials to Website

## h1 website credential cert

Manage your certificate to Website

## h1 website credential cert add

Add certificate to Website

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

## h1 website credential cert delete

Delete certificate to Website

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
| ```--cert CERT``` |  | Certificate to Website ID or name |

## h1 website credential cert list

List certificate to Website

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

## h1 website credential cert rename

Rename certificate to Website

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
| ```--cert CERT``` |  | Certificate to Website ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 website credential cert show

Show certificate to Website

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
| ```--cert CERT``` |  | Certificate to Website ID or name |

## h1 website credential password

Manage your password to Website

## h1 website credential password add

Add password to Website

### Syntax

```h1 website credential password add | --website WEBSITE --name NAME [--password PASSWORD]```
### Example

```bash
h1 website credential password add --name my-pass --password secret-password --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--name NAME``` |  | Name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password. It will be generated and shown if it is not specified. |

## h1 website credential password delete

Delete password to Website

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
| ```--password PASSWORD``` |  | Password to Website ID or name |

## h1 website credential password list

List password to Website

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

Rename password to Website

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
| ```--password PASSWORD``` |  | Password to Website ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 website credential password show

Show password to Website

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
| ```--password PASSWORD``` |  | Password to Website ID or name |

## h1 website tag

Manage your Tag of Website

## h1 website tag add

Add Tag of Website

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

Delete Tag of Website

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

## h1 website tag list

List Tag of Website

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

