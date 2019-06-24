# TOC

  * [h1 vault create](#h1-vault-create) - Create Vault
  * [h1 vault list](#h1-vault-list) - List Vault
  * [h1 vault show](#h1-vault-show) - Show Vault
  * [h1 vault delete](#h1-vault-delete) - Delete Vault
  * [h1 vault history](#h1-vault-history) - History of Vault
  * [h1 vault rename](#h1-vault-rename) - Rename Vault
  * [h1 vault service](#h1-vault-service) - Manage your services of Vault
    * [h1 vault service list](#h1-vault-service-list) - List service for Vault
    * [h1 vault service show](#h1-vault-service-show) - Show service for Vault
  * [h1 vault resize](#h1-vault-resize) - Resize Vault
  * [h1 vault ssh](#h1-vault-ssh) - Connect to Vault using SSH
  * [h1 vault sftp](#h1-vault-sftp) - Connect to Vault using SFTP
  * [h1 vault start](#h1-vault-start) - Start Vault
  * [h1 vault stop](#h1-vault-stop) - Stop Vault
  * [h1 vault console](#h1-vault-console) - Open Vault console in web-browser
  * [h1 vault credential](#h1-vault-credential) - Manage your credentials to Vault
    * [h1 vault credential cert](#h1-vault-credential-cert) - Manage your certificate to Vault
      * [h1 vault credential cert show](#h1-vault-credential-cert-show) - Show certificate to Vault
      * [h1 vault credential cert rename](#h1-vault-credential-cert-rename) - Rename certificate to Vault
      * [h1 vault credential cert list](#h1-vault-credential-cert-list) - List certificate to Vault
      * [h1 vault credential cert delete](#h1-vault-credential-cert-delete) - Delete certificate to Vault
      * [h1 vault credential cert add](#h1-vault-credential-cert-add) - Add certificate to Vault
    * [h1 vault credential password](#h1-vault-credential-password) - Manage your password to Vault
      * [h1 vault credential password show](#h1-vault-credential-password-show) - Show password to Vault
      * [h1 vault credential password list](#h1-vault-credential-password-list) - List password to Vault
      * [h1 vault credential password rename](#h1-vault-credential-password-rename) - Rename password to Vault
      * [h1 vault credential password delete](#h1-vault-credential-password-delete) - Delete password to Vault
      * [h1 vault credential password add](#h1-vault-credential-password-add) - Add password to Vault
  * [h1 vault tag](#h1-vault-tag) - Manage your tag
    * [h1 vault tag list](#h1-vault-tag-list) - List tag
    * [h1 vault tag add](#h1-vault-tag-add) - Add a tag to Vault
    * [h1 vault tag delete](#h1-vault-tag-delete) - Delete a tag of Vault


# Specification

## h1 vault

Manage your Vault

## h1 vault create

Create Vault

### Syntax

```h1 vault create | --name NAME --size SIZE [--snapshot SNAPSHOT] [--tag TAG [--tag TAG ...]] [--password PASSWORD [--password PASSWORD ...]] [--ssh SSH [--ssh SSH ...]] [--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]]```
### Examples

#### Create Vault with SSH credential

```bash
h1 vault create --name my-vault --size 10 --ssh my-key
```

Hint: Use ```h1 project credentials list``` or ```h1 user credentials list``` to list available SSH keys.

#### Create Vault from snaphost

```bash
h1 vault create --name my-vault --size 10 --snapshot my-snapshot
```

Hint: Use ```h1 snapshot list``` to list available snapshots.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Vault name |
| ```--size SIZE``` |  | Vault size in GB |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--snapshot SNAPSHOT``` |  | Snapshot ID or name |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--password PASSWORD [--password PASSWORD ...]``` |  | Password to access. Recommends to use SSH keys. The parameter may occur repeatedly |
| ```--ssh SSH [--ssh SSH ...]``` |  | SSH key ID or name that allows access. The parameter may occur repeatedly |
| ```--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]``` |  | Read SSH key from file. The parameter may occur repeatedly |

## h1 vault list

List Vault

### Syntax

```h1 vault list | ```
### Example

```bash
h1 vault list
```

## h1 vault show

Show Vault

### Syntax

```h1 vault show | --vault VAULT```
### Example

```bash
h1 vault show --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault delete

Delete Vault

### Syntax

```h1 vault delete | --vault VAULT```
### Example

```bash
h1 vault delete --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault history

History of Vault

### Syntax

```h1 vault history | --vault VAULT```
### Example

```bash
h1 vault history --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault rename

Rename Vault

### Syntax

```h1 vault rename | --vault VAULT --new-name NEW-NAME```
### Example

```bash
h1 vault rename --vault my-vault --new-name my-renamed-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 vault service

Manage your services of Vault

## h1 vault service list

List service for Vault

### Syntax

```h1 vault service list | --vault VAULT```
### Example

```bash
h1 vault service list --vault test-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault service show

Show service for Vault

### Syntax

```h1 vault service show | --vault VAULT --service SERVICE```
### Example

```bash
h1 vault service show --service my-service --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--service SERVICE``` |  | Service for Vault ID or name |

## h1 vault resize

Resize Vault

### Syntax

```h1 vault resize | --vault VAULT --size SIZE```
### Example

```bash
h1 vault resize --vault my-vault --size 10
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--size SIZE``` |  | New size |

## h1 vault ssh

Connect to Vault using SSH

### Syntax

```h1 vault ssh | --vault VAULT [--command COMMAND]```
### Example

```bash
h1 vault ssh --vault my-vault
```

Note: Need valid credentials to access resource any way.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--command COMMAND``` |  | Command to execute |

## h1 vault sftp

Connect to Vault using SFTP

### Syntax

```h1 vault sftp | --vault VAULT```
### Example

```
h1 vault sftp --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault start

Start Vault

### Syntax

```h1 vault start | --vault VAULT```
### Example

```
h1 vault start --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault stop

Stop Vault

### Syntax

```h1 vault stop | --vault VAULT```
### Example

```
h1 vault stop --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault console

Open Vault console in web-browser

### Syntax

```h1 vault console | --vault VAULT```
### Example

```bash
h1 vault console --vault test-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault credential

Manage your credentials to Vault

## h1 vault credential cert

Manage your certificate to Vault

## h1 vault credential cert show

Show certificate to Vault

### Syntax

```h1 vault credential cert show | --vault VAULT --cert CERT```
### Example

```bash
h1 vault credential cert show --cert my-cert
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--cert CERT``` |  | Certificate to Vault ID or name |

## h1 vault credential cert rename

Rename certificate to Vault

### Syntax

```h1 vault credential cert rename | --vault VAULT --cert CERT --new-name NEW-NAME```
### Example

```bash
h1 vault credential cert rename --cert my-cert --new-name my-renamed-cert --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--cert CERT``` |  | Certificate to Vault ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 vault credential cert list

List certificate to Vault

### Syntax

```h1 vault credential cert list | --vault VAULT```
### Example

```bash
h1 vault credential cert list --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault credential cert delete

Delete certificate to Vault

### Syntax

```h1 vault credential cert delete | --cert CERT --vault VAULT```
### Example

```bash
h1 vault credential cert delete --cert my-cert --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--cert CERT``` |  | Certificate to Vault ID or name |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault credential cert add

Add certificate to Vault

### Syntax

```h1 vault credential cert add | --vault VAULT --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE]```
### Example

```bash
h1 vault credential cert add --vault my-vault --name my-key --sshkey my-home-ssh
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--name NAME``` |  | Certificate name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sshkey SSHKEY``` |  | Public SSH key ID or name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 vault credential password

Manage your password to Vault

## h1 vault credential password show

Show password to Vault

### Syntax

```h1 vault credential password show | --vault VAULT --password PASSWORD```
### Example

```bash
h1 vault credential password show --password my-password
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--password PASSWORD``` |  | Password to Vault ID or name |

## h1 vault credential password list

List password to Vault

### Syntax

```h1 vault credential password list | --vault VAULT```
### Example

```bash
h1 vault credential password list --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault credential password rename

Rename password to Vault

### Syntax

```h1 vault credential password rename | --vault VAULT --password PASSWORD --new-name NEW-NAME```
### Example

```bash
h1 vault credential password rename --password my-password --new-name my-renamed-password --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--password PASSWORD``` |  | Password to Vault ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 vault credential password delete

Delete password to Vault

### Syntax

```h1 vault credential password delete | --password PASSWORD --vault VAULT```
### Example

```bash
h1 vault credential password delete --password my-password --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password to Vault ID or name |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault credential password add

Add password to Vault

### Syntax

```h1 vault credential password add | --vault VAULT --name NAME [--password PASSWORD]```
### Example

```bash
h1 vault credential password add --name my-pass --password secret-password --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--name NAME``` |  | Name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password. It will be generated and shown if it is not specified. |

## h1 vault tag

Manage your tag

## h1 vault tag list

List tag

### Syntax

```h1 vault tag list | --vault VAULT```
### Example

```bash
h1 vault tag list --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault tag add

Add a tag to Vault

### Syntax

```h1 vault tag add | --vault VAULT [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 vault tag add --vault test-vault --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 vault tag delete

Delete a tag of Vault

### Syntax

```h1 vault tag delete | --tag TAG --vault VAULT```
### Example

```bash
h1 vault tag delete --vault test-vault --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--vault VAULT``` |  | Vault ID or name |

