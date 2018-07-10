# TOC

  * [h1 vault list](#h1-vault-list) - List Vault
  * [h1 vault show](#h1-vault-show) - Show Vault
  * [h1 vault delete](#h1-vault-delete) - Delete Vault
  * [h1 vault history](#h1-vault-history) - History of Vault
  * [h1 vault rename](#h1-vault-rename) - Rename Vault
  * [h1 vault resize](#h1-vault-resize) - Resize Vault
  * [h1 vault create](#h1-vault-create) - Create Vault
  * [h1 vault credential](#h1-vault-credential) - Manage your credentials to Vault
    * [h1 vault credential cert](#h1-vault-credential-cert) - Manage your certificate to Vault
      * [h1 vault credential cert show](#h1-vault-credential-cert-show) - Show certificate to Vault
      * [h1 vault credential cert rename](#h1-vault-credential-cert-rename) - Rename certificate to Vault
      * [h1 vault credential cert list](#h1-vault-credential-cert-list) - List certificate to Vault
      * [h1 vault credential cert delete](#h1-vault-credential-cert-delete) - Delete certificate to Vault
      * [h1 vault credential cert add](#h1-vault-credential-cert-add) - Add credential to Vault
    * [h1 vault credential password](#h1-vault-credential-password) - Manage your password to Vault
      * [h1 vault credential password show](#h1-vault-credential-password-show) - Show password to Vault
      * [h1 vault credential password list](#h1-vault-credential-password-list) - List password to Vault
      * [h1 vault credential password rename](#h1-vault-credential-password-rename) - Rename password to Vault
      * [h1 vault credential password delete](#h1-vault-credential-password-delete) - Delete password to Vault
      * [h1 vault credential password add](#h1-vault-credential-password-add) - Add password to Vault
  * [h1 vault ssh](#h1-vault-ssh) - Connect to Vault using SSH


# Specification

## h1 vault

Manage your Vault

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

## h1 vault create

Create Vault

### Syntax

```h1 vault create | --name NAME --size SIZE [--ssh SSH [--ssh SSH ...]] [--password PASSWORD]```

### Example

```bash
h1 vault create --name my-vault --size 10 --ssh my-key
```

Hint: Use ```h1 project credentials list``` or ```h1 user credentials list``` to list available SSH keys.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Vault name |
| ```--size SIZE``` |  | Vault size in GB |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ssh SSH [--ssh SSH ...]``` |  | SSH key ID or name that allows access. The parameter may occur repeatedly |
| ```--password PASSWORD``` |  | Password to access Vault. Recommend using SSH keys |

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
h1 vault credential cert rename --cert my-cert --new-name my-renamed-cert
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

```h1 vault credential cert delete | --vault VAULT --cert CERT```

### Example

```bash
h1 vault credential cert delete --cert my-cert --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--cert CERT``` |  | Certificate to Vault ID or name |

## h1 vault credential cert add

Add credential to Vault

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
h1 vault credential password rename --password my-password --new-name my-renamed-password
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

```h1 vault credential password delete | --vault VAULT --password PASSWORD```

### Example

```bash
h1 vault credential password delete --password my-password --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--password PASSWORD``` |  | Password to Vault ID or name |

## h1 vault credential password add

Add password to Vault

### Syntax

```h1 vault credential password add | --vault VAULT --name NAME --password PASSWORD```

### Example

```bash
h1 vault credential password add --name my-pass --password secret-password --vault my-vault
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--name NAME``` |  | Name |
| ```--password PASSWORD``` |  | Password |

## h1 vault ssh

Connect to Vault using SSH

### Syntax

```h1 vault ssh | --vault VAULT```

### Example

```bash
sh1 vault ssh --vault my-vault
```

Note: You need valid credentials to access Vault any way.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

