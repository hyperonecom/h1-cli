# TOC

  * [h1 vault list](#h1-vault-list) - List Vault
  * [h1 vault show](#h1-vault-show) - Show Vault
  * [h1 vault delete](#h1-vault-delete) - Delete Vault
  * [h1 vault rename](#h1-vault-rename) - Rename Vault
  * [h1 vault create](#h1-vault-create) - Create Vault
  * [h1 vault access](#h1-vault-access) - Manage your Vault access rights
    * [h1 vault access grant](#h1-vault-access-grant) - Grant access rights for Vault
    * [h1 vault access revoke](#h1-vault-access-revoke) - Revoke access rights for Vault
    * [h1 vault access list](#h1-vault-access-list) - List of access rights for Vault
  * [h1 vault resize](#h1-vault-resize) - Resize Vault
  * [h1 vault credential](#h1-vault-credential) - Manage your credentials to Vault
    * [h1 vault credential cert](#h1-vault-credential-cert) - Manage your certificate to Vault
      * [h1 vault credential cert list](#h1-vault-credential-cert-list) - List certificate to Vault
      * [h1 vault credential cert delete](#h1-vault-credential-cert-delete) - Delete certificate to Vault
      * [h1 vault credential cert add](#h1-vault-credential-cert-add) - Add credential to Vault
    * [h1 vault credential password](#h1-vault-credential-password) - Manage your password to Vault
      * [h1 vault credential password list](#h1-vault-credential-password-list) - List password to Vault
      * [h1 vault credential password delete](#h1-vault-credential-password-delete) - Delete password to Vault
      * [h1 vault credential password add](#h1-vault-credential-password-add) - Add password to Vault
  * [h1 vault ssh](#h1-vault-ssh) - Connect to Vault using SSH
  * [h1 vault snapshot](#h1-vault-snapshot) - Perform a snapshot of Vault


# Specification

## h1 vault

Manage your Vault

## h1 vault list

List Vault

### Syntax

```h1 vault list | ```

## h1 vault show

Show Vault

### Syntax

```h1 vault show | --vault VAULT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault delete

Delete Vault

### Syntax

```h1 vault delete | --vault VAULT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault rename

Rename Vault

### Syntax

```h1 vault rename | --vault VAULT --new-name NEW-NAME```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 vault create

Create Vault

### Syntax

```h1 vault create | --name NAME --size SIZE [--ssh SSH [--ssh SSH ...]] [--password PASSWORD]```

### Examples

#### Create a Vault

```bash
h1 vault create --name my-vault --size 10 --ssh my-key
```

Hint: Use ```h1 project credentials list``` or ```h1 user credentials list``` to list available SSH keys.

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Vault name |
| ```--size SIZE``` |  | Vault size in GB |
| ```[--ssh SSH [--ssh SSH ...]]``` |  | SSH key ID or name that allows access. The parameter may occur repeatedly |
| ```[--password PASSWORD]``` |  | Password to access Vault. Recommend using SSH keys |

## h1 vault access

Manage your Vault access rights

## h1 vault access grant

Grant access rights for Vault

### Syntax

```h1 vault access grant | --vault VAULT --project PROJECT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 vault access revoke

Revoke access rights for Vault

### Syntax

```h1 vault access revoke | --vault VAULT --project PROJECT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 vault access list

List of access rights for Vault

### Syntax

```h1 vault access list | --vault VAULT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault resize

Resize Vault

### Syntax

```h1 vault resize | --vault VAULT --size SIZE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--size SIZE``` |  | New size |

## h1 vault credential

Manage your credentials to Vault

## h1 vault credential cert

Manage your certificate to Vault

## h1 vault credential cert list

List certificate to Vault

### Syntax

```h1 vault credential cert list | ```

## h1 vault credential cert delete

Delete certificate to Vault

### Syntax

```h1 vault credential cert delete | --cert CERT```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--cert CERT``` |  | Certificate to Vault ID or name |

## h1 vault credential cert add

Add credential to Vault

### Syntax

```h1 vault credential cert add | --vault VAULT --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE]```

### Examples

#### Add SSH key to Vault

```bash
h1 vault credential cert add --vault x --name my-key --sshkey Dell-Home
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--name NAME``` |  | Certificate name |
| ```[--sshkey SSHKEY]``` |  | Public SSH key ID or name |
| ```[--sshkey-file SSHKEY-FILE]``` |  | Public SSH key filename |

## h1 vault credential password

Manage your password to Vault

## h1 vault credential password list

List password to Vault

### Syntax

```h1 vault credential password list | ```

## h1 vault credential password delete

Delete password to Vault

### Syntax

```h1 vault credential password delete | --password PASSWORD```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password to Vault ID or name |

## h1 vault credential password add

Add password to Vault

### Syntax

```h1 vault credential password add | --vault VAULT --name NAME --password PASSWORD```

### Examples

#### Add password to Vault

```bash
h1 vault credential password add --name my-pass --password secret-password --vault my-vault
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--name NAME``` |  | Name |
| ```--password PASSWORD``` |  | Password |

## h1 vault ssh

Connect to Vault using SSH

### Syntax

```h1 vault ssh | --vault VAULT```

### Examples

#### Connect to Vault using SSH

```bash
sh1 vault ssh --vault x
```

Note: You need valid credentials to access Vault any way.

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault snapshot

Perform a snapshot of Vault

### Syntax

```h1 vault snapshot | --vault VAULT --name NAME```

### Examples

#### Perform a snapshot of a Vault

```bash
h1 vault snapshot --vault my-vault --name 
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--name NAME``` |  | Snapshot name |

