# h1 vault

## Syntax

```h1 vault | ```

# h1 vault list

## Syntax

```h1 vault list | ```

# h1 vault show

## Syntax

```h1 vault show | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 vault delete

## Syntax

```h1 vault delete | delete-id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

# h1 vault rename

## Syntax

```h1 vault rename | --new-name NEW-NAME id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--new-name NEW-NAME``` |  | New name |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 vault create

## Syntax

```h1 vault create | --name NAME --size SIZE [--ssh SSH [--ssh SSH ...]] [--password PASSWORD]```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Vault Name |
| ```--size SIZE``` |  | Vault Size in GB |
| ```--ssh SSH``` |  | SSH key Id or name that allows access.. The parameter may occur repeatedly |
| ```--password PASSWORD``` |  | Password to access Vault. Recommend using SSH keys. |

# h1 vault access

## Syntax

```h1 vault access | ```

# h1 vault access grant

## Syntax

```h1 vault access grant | --tenant TENANT id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource ID |

# h1 vault access revoke

## Syntax

```h1 vault access revoke | --tenant TENANT id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tenant TENANT``` |  | Tenant name or ID |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource id |

# h1 vault access list

## Syntax

```h1 vault access list | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource name or ID |

# h1 vault resize

## Syntax

```h1 vault resize | --size SIZE id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--size SIZE``` |  | New size |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource name or ID |

# h1 vault credential

## Syntax

```h1 vault credential | ```

# h1 vault credential cert

## Syntax

```h1 vault credential cert | ```

# h1 vault credential cert list

## Syntax

```h1 vault credential cert list | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Vault id |

# h1 vault credential cert delete

## Syntax

```h1 vault credential cert delete | id delete-id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Vault id |
| ```delete-id``` |  | Resource name or ID |

# h1 vault credential cert add

## Syntax

```h1 vault credential cert add | --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE] id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey SSHKEY``` |  | Public SSH key Id |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Vault id |

# h1 vault credential password

## Syntax

```h1 vault credential password | ```

# h1 vault credential password list

## Syntax

```h1 vault credential password list | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Vault id |

# h1 vault credential password delete

## Syntax

```h1 vault credential password delete | id delete-id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Vault id |
| ```delete-id``` |  | Resource name or ID |

# h1 vault credential password add

## Syntax

```h1 vault credential password add | --name NAME --password PASSWORD id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--password PASSWORD``` |  | Password |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Vault id |

# h1 vault ssh

## Syntax

```h1 vault ssh | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 vault snapshot

## Syntax

```h1 vault snapshot | --name NAME id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

