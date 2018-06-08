# TOC

 * [h1 dns zone](#h1-dns-zone) - Manage your ZONE
  * [h1 dns zone list](#h1-dns-zone-list) - Resource list
  * [h1 dns zone show](#h1-dns-zone-show) - Resource show
  * [h1 dns zone delete](#h1-dns-zone-delete) - Resource delete
  * [h1 dns zone create](#h1-dns-zone-create) - Create dns zone
  * [h1 dns zone export](#h1-dns-zone-export) - Export dns zone
 * [h1 dns record-set](#h1-dns-record-set) - Manage your RECORD-SET
  * [h1 dns record-set a](#h1-dns-record-set-a) - Record Set Type A
   * [h1 dns record-set a list](#h1-dns-record-set-a-list) - Resource list
   * [h1 dns record-set a create](#h1-dns-record-set-a-create) - Create record-set
   * [h1 dns record-set a delete](#h1-dns-record-set-a-delete) - Delete record-set
   * [h1 dns record-set a add-record](#h1-dns-record-set-a-add-record) - Add record
   * [h1 dns record-set a delete-record](#h1-dns-record-set-a-delete-record) - Delete record
  * [h1 dns record-set cname](#h1-dns-record-set-cname) - Record Set Type CNAME
   * [h1 dns record-set cname list](#h1-dns-record-set-cname-list) - Resource list
   * [h1 dns record-set cname create](#h1-dns-record-set-cname-create) - Create record-set
   * [h1 dns record-set cname delete](#h1-dns-record-set-cname-delete) - Delete record-set
   * [h1 dns record-set cname add-record](#h1-dns-record-set-cname-add-record) - Add record
   * [h1 dns record-set cname delete-record](#h1-dns-record-set-cname-delete-record) - Delete record
  * [h1 dns record-set txt](#h1-dns-record-set-txt) - Record Set Type TXT
   * [h1 dns record-set txt list](#h1-dns-record-set-txt-list) - Resource list
   * [h1 dns record-set txt create](#h1-dns-record-set-txt-create) - Create record-set
   * [h1 dns record-set txt delete](#h1-dns-record-set-txt-delete) - Delete record-set
   * [h1 dns record-set txt add-record](#h1-dns-record-set-txt-add-record) - Add record
   * [h1 dns record-set txt delete-record](#h1-dns-record-set-txt-delete-record) - Delete record
  * [h1 dns record-set mx](#h1-dns-record-set-mx) - Record Set Type MX
   * [h1 dns record-set mx list](#h1-dns-record-set-mx-list) - Resource list
   * [h1 dns record-set mx create](#h1-dns-record-set-mx-create) - Create record-set
   * [h1 dns record-set mx delete](#h1-dns-record-set-mx-delete) - Delete record-set
   * [h1 dns record-set mx add-record](#h1-dns-record-set-mx-add-record) - Add record
   * [h1 dns record-set mx delete-record](#h1-dns-record-set-mx-delete-record) - Delete record
  * [h1 dns record-set ns](#h1-dns-record-set-ns) - Record Set Type NS
   * [h1 dns record-set ns list](#h1-dns-record-set-ns-list) - Resource list
   * [h1 dns record-set ns create](#h1-dns-record-set-ns-create) - Create record-set
   * [h1 dns record-set ns delete](#h1-dns-record-set-ns-delete) - Delete record-set
   * [h1 dns record-set ns add-record](#h1-dns-record-set-ns-add-record) - Add record
   * [h1 dns record-set ns delete-record](#h1-dns-record-set-ns-delete-record) - Delete record
  * [h1 dns record-set srv](#h1-dns-record-set-srv) - Record Set Type SRV
   * [h1 dns record-set srv list](#h1-dns-record-set-srv-list) - Resource list
   * [h1 dns record-set srv create](#h1-dns-record-set-srv-create) - Create record-set
   * [h1 dns record-set srv delete](#h1-dns-record-set-srv-delete) - Delete record-set
   * [h1 dns record-set srv add-record](#h1-dns-record-set-srv-add-record) - Add record
   * [h1 dns record-set srv delete-record](#h1-dns-record-set-srv-delete-record) - Delete record
  * [h1 dns record-set list](#h1-dns-record-set-list) - Resource list


# Specification

## h1 dns

Manage your DNS

## h1 dns zone

Manage your ZONE

## h1 dns zone list

Resource list

### Syntax

```h1 dns zone list | ```

## h1 dns zone show

Resource show

### Syntax

```h1 dns zone show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 dns zone delete

Resource delete

### Syntax

```h1 dns zone delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 dns zone create

Create dns zone

### Syntax

```h1 dns zone create | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | Dns zone name |

## h1 dns zone export

Export dns zone

### Syntax

```h1 dns zone export | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | Dns zone name |

## h1 dns record-set

Manage your RECORD-SET

## h1 dns record-set a

Record Set Type A

## h1 dns record-set a list

Resource list

### Syntax

```h1 dns record-set a list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set a create

Create record-set

### Syntax

```h1 dns record-set a create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set a delete

Delete record-set

### Syntax

```h1 dns record-set a delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set a add-record

Add record

### Syntax

```h1 dns record-set a add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set a delete-record

Delete record

### Syntax

```h1 dns record-set a delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname

Record Set Type CNAME

## h1 dns record-set cname list

Resource list

### Syntax

```h1 dns record-set cname list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set cname create

Create record-set

### Syntax

```h1 dns record-set cname create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname delete

Delete record-set

### Syntax

```h1 dns record-set cname delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set cname add-record

Add record

### Syntax

```h1 dns record-set cname add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname delete-record

Delete record

### Syntax

```h1 dns record-set cname delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt

Record Set Type TXT

## h1 dns record-set txt list

Resource list

### Syntax

```h1 dns record-set txt list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set txt create

Create record-set

### Syntax

```h1 dns record-set txt create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt delete

Delete record-set

### Syntax

```h1 dns record-set txt delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set txt add-record

Add record

### Syntax

```h1 dns record-set txt add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt delete-record

Delete record

### Syntax

```h1 dns record-set txt delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx

Record Set Type MX

## h1 dns record-set mx list

Resource list

### Syntax

```h1 dns record-set mx list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set mx create

Create record-set

### Syntax

```h1 dns record-set mx create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx delete

Delete record-set

### Syntax

```h1 dns record-set mx delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set mx add-record

Add record

### Syntax

```h1 dns record-set mx add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx delete-record

Delete record

### Syntax

```h1 dns record-set mx delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns

Record Set Type NS

## h1 dns record-set ns list

Resource list

### Syntax

```h1 dns record-set ns list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set ns create

Create record-set

### Syntax

```h1 dns record-set ns create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns delete

Delete record-set

### Syntax

```h1 dns record-set ns delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set ns add-record

Add record

### Syntax

```h1 dns record-set ns add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns delete-record

Delete record

### Syntax

```h1 dns record-set ns delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv

Record Set Type SRV

## h1 dns record-set srv list

Resource list

### Syntax

```h1 dns record-set srv list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set srv create

Create record-set

### Syntax

```h1 dns record-set srv create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv delete

Delete record-set

### Syntax

```h1 dns record-set srv delete | --name NAME --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

## h1 dns record-set srv add-record

Add record

### Syntax

```h1 dns record-set srv add-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv delete-record

Delete record

### Syntax

```h1 dns record-set srv delete-record | --name NAME --zone-name ZONE-NAME --value VALUE [--value VALUE ...]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set list

Resource list

### Syntax

```h1 dns record-set list | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS Zone Name |

