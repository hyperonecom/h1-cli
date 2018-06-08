# TOC

 * [h1 vault list](#h1-vault-list) - Resource list
 * [h1 vault show](#h1-vault-show) - Resource show
 * [h1 vault delete](#h1-vault-delete) - Resource delete
 * [h1 vault rename](#h1-vault-rename) - Resource rename
 * [h1 vault create](#h1-vault-create) - Vault create
 * [h1 vault access](#h1-vault-access) - Manage your VAULT Access Rights
  * [h1 vault access grant](#h1-vault-access-grant) - Grant access rights for VAULT
  * [h1 vault access revoke](#h1-vault-access-revoke) - Revoke access rights for VAULT
  * [h1 vault access list](#h1-vault-access-list) - List of access rights for VAULT
 * [h1 vault resize](#h1-vault-resize) - Resource resize
 * [h1 vault credential](#h1-vault-credential) - Manage your CREDENTIAL
  * [h1 vault credential cert](#h1-vault-credential-cert) - Manage your CERT
   * [h1 vault credential cert list](#h1-vault-credential-cert-list) - Resource list
   * [h1 vault credential cert delete](#h1-vault-credential-cert-delete) - Resource delete
   * [h1 vault credential cert add](#h1-vault-credential-cert-add) - Adding public SSH key
  * [h1 vault credential password](#h1-vault-credential-password) - Manage your PASSWORD
   * [h1 vault credential password list](#h1-vault-credential-password-list) - Resource list
   * [h1 vault credential password delete](#h1-vault-credential-password-delete) - Resource delete
   * [h1 vault credential password add](#h1-vault-credential-password-add) - Adding a password
 * [h1 vault ssh](#h1-vault-ssh) - Connect to Vault using SSH
 * [h1 vault snapshot](#h1-vault-snapshot) - snapshot


# Specification

## h1 vault

Manage your VAULT

## h1 vault list

Resource list

### Syntax

```h1 vault list | ```

## h1 vault show

Resource show

### Syntax

```h1 vault show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 vault delete

Resource delete

### Syntax

```h1 vault delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 vault rename

Resource rename

### Syntax

```h1 vault rename | --new-name NEW-NAME id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--new-name NEW-NAME``` |  | New name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 vault create

Vault create

### Syntax

```h1 vault create | --name NAME --size SIZE [--ssh SSH [--ssh SSH ...]] [--password PASSWORD]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Vault Name |
| ```--size SIZE``` |  | Vault Size in GB |
| ```[--ssh SSH [--ssh SSH ...]]``` |  | SSH key Id or name that allows access.. The parameter may occur repeatedly |
| ```[--password PASSWORD]``` |  | Password to access Vault. Recommend using SSH keys. |

## h1 vault access

Manage your VAULT Access Rights

## h1 vault access grant

Grant access rights for VAULT

### Syntax

```h1 vault access grant | --project PROJECT id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource ID |

## h1 vault access revoke

Revoke access rights for VAULT

### Syntax

```h1 vault access revoke | --project PROJECT id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--project PROJECT``` |  | Project name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource id |

## h1 vault access list

List of access rights for VAULT

### Syntax

```h1 vault access list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource name or ID |

## h1 vault resize

Resource resize

### Syntax

```h1 vault resize | --size SIZE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--size SIZE``` |  | New size |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource name or ID |

## h1 vault credential

Manage your CREDENTIAL

## h1 vault credential cert

Manage your CERT

## h1 vault credential cert list

Resource list

### Syntax

```h1 vault credential cert list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Vault id |

## h1 vault credential cert delete

Resource delete

### Syntax

```h1 vault credential cert delete | id delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Vault id |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 vault credential cert add

Adding public SSH key

### Syntax

```h1 vault credential cert add | --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE] id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```[--sshkey SSHKEY]``` |  | Public SSH key Id |
| ```[--sshkey-file SSHKEY-FILE]``` |  | Public SSH key filename |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Vault id |

## h1 vault credential password

Manage your PASSWORD

## h1 vault credential password list

Resource list

### Syntax

```h1 vault credential password list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Vault id |

## h1 vault credential password delete

Resource delete

### Syntax

```h1 vault credential password delete | id delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Vault id |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 vault credential password add

Adding a password

### Syntax

```h1 vault credential password add | --name NAME --password PASSWORD id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--password PASSWORD``` |  | Password |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Vault id |

## h1 vault ssh

Connect to Vault using SSH

### Syntax

```h1 vault ssh | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 vault snapshot

snapshot

### Syntax

```h1 vault snapshot | --name NAME id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

