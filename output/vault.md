# TOC

* [h1 vault list](#h1-vault-list)
* [h1 vault show](#h1-vault-show)
* [h1 vault delete](#h1-vault-delete)
* [h1 vault rename](#h1-vault-rename)
* [h1 vault create](#h1-vault-create)
* [h1 vault access](#h1-vault-access)
* [h1 vault resize](#h1-vault-resize)
* [h1 vault credential](#h1-vault-credential)
* [h1 vault ssh](#h1-vault-ssh)
* [h1 vault snapshot](#h1-vault-snapshot)


# Specification

## h1 vault

### Syntax

```h1 vault | ```

## h1 vault list

### Syntax

```h1 vault list | ```

## h1 vault show

### Syntax

```h1 vault show | --vault VAULT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault delete

### Syntax

```h1 vault delete | --vault VAULT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault rename

### Syntax

```h1 vault rename | --vault VAULT --new-name NEW-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 vault create

### Syntax

```h1 vault create | --name NAME --size SIZE [--ssh SSH [--ssh SSH ...]] [--password PASSWORD]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Vault name |
| ```--size SIZE``` |  | Vault size in GB |
| ```--ssh SSH``` |  | SSH key Id or name that allows access. The parameter may occur repeatedly |
| ```--password PASSWORD``` |  | Password to access Vault. Recommend using SSH keys |

## h1 vault access

### Syntax

```h1 vault access | ```

## h1 vault access grant

### Syntax

```h1 vault access grant | --vault VAULT --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 vault access revoke

### Syntax

```h1 vault access revoke | --vault VAULT --project PROJECT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--project PROJECT``` |  | Project name or ID |

## h1 vault access list

### Syntax

```h1 vault access list | --vault VAULT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault resize

### Syntax

```h1 vault resize | --vault VAULT --size SIZE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--size SIZE``` |  | New size |

## h1 vault credential

### Syntax

```h1 vault credential | ```

## h1 vault credential cert

### Syntax

```h1 vault credential cert | ```

## h1 vault credential cert list

### Syntax

```h1 vault credential cert list | ```

## h1 vault credential cert delete

### Syntax

```h1 vault credential cert delete | --cert CERT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--cert CERT``` |  | Certificate to Vault ID or name |

## h1 vault credential cert add

### Syntax

```h1 vault credential cert add | --vault VAULT --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--name NAME``` |  | Certificate name |
| ```--sshkey SSHKEY``` |  | Public SSH key ID or name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 vault credential password

### Syntax

```h1 vault credential password | ```

## h1 vault credential password list

### Syntax

```h1 vault credential password list | ```

## h1 vault credential password delete

### Syntax

```h1 vault credential password delete | --password PASSWORD```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password to Vault ID or name |

## h1 vault credential password add

### Syntax

```h1 vault credential password add | --name NAME --password PASSWORD```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--password PASSWORD``` |  | Password |

## h1 vault ssh

### Syntax

```h1 vault ssh | --vault VAULT```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |

## h1 vault snapshot

### Syntax

```h1 vault snapshot | --vault VAULT --name NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vault VAULT``` |  | Vault ID or name |
| ```--name NAME``` |  | Snapshot name |

