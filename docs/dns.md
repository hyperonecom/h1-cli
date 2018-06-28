# TOC

  * [h1 dns zone](#h1-dns-zone) - Manage your DNS zone
    * [h1 dns zone list](#h1-dns-zone-list) - List DNS zone
    * [h1 dns zone show](#h1-dns-zone-show) - Show DNS zone
    * [h1 dns zone delete](#h1-dns-zone-delete) - Delete DNS zone
    * [h1 dns zone create](#h1-dns-zone-create) - Create DNS zone
    * [h1 dns zone export](#h1-dns-zone-export) - Export DNS zone
  * [h1 dns record-set](#h1-dns-record-set) - Manage your record-set
    * [h1 dns record-set a](#h1-dns-record-set-a) - Manage record set type A
      * [h1 dns record-set a list](#h1-dns-record-set-a-list) - List Record A
      * [h1 dns record-set a create](#h1-dns-record-set-a-create) - Create record-set
      * [h1 dns record-set a delete](#h1-dns-record-set-a-delete) - Delete record-set
      * [h1 dns record-set a add-record](#h1-dns-record-set-a-add-record) - Add record
      * [h1 dns record-set a delete-record](#h1-dns-record-set-a-delete-record) - Delete record
    * [h1 dns record-set cname](#h1-dns-record-set-cname) - Manage record set type CNAME
      * [h1 dns record-set cname list](#h1-dns-record-set-cname-list) - List Record CNAME
      * [h1 dns record-set cname create](#h1-dns-record-set-cname-create) - Create record-set
      * [h1 dns record-set cname delete](#h1-dns-record-set-cname-delete) - Delete record-set
      * [h1 dns record-set cname add-record](#h1-dns-record-set-cname-add-record) - Add record
      * [h1 dns record-set cname delete-record](#h1-dns-record-set-cname-delete-record) - Delete record
    * [h1 dns record-set txt](#h1-dns-record-set-txt) - Manage record set type TXT
      * [h1 dns record-set txt list](#h1-dns-record-set-txt-list) - List Record TXT
      * [h1 dns record-set txt create](#h1-dns-record-set-txt-create) - Create record-set
      * [h1 dns record-set txt delete](#h1-dns-record-set-txt-delete) - Delete record-set
      * [h1 dns record-set txt add-record](#h1-dns-record-set-txt-add-record) - Add record
      * [h1 dns record-set txt delete-record](#h1-dns-record-set-txt-delete-record) - Delete record
    * [h1 dns record-set mx](#h1-dns-record-set-mx) - Manage record set type MX
      * [h1 dns record-set mx list](#h1-dns-record-set-mx-list) - List Record MX
      * [h1 dns record-set mx create](#h1-dns-record-set-mx-create) - Create record-set
      * [h1 dns record-set mx delete](#h1-dns-record-set-mx-delete) - Delete record-set
      * [h1 dns record-set mx add-record](#h1-dns-record-set-mx-add-record) - Add record
      * [h1 dns record-set mx delete-record](#h1-dns-record-set-mx-delete-record) - Delete record
    * [h1 dns record-set ns](#h1-dns-record-set-ns) - Manage record set type NS
      * [h1 dns record-set ns list](#h1-dns-record-set-ns-list) - List Record NS
      * [h1 dns record-set ns create](#h1-dns-record-set-ns-create) - Create record-set
      * [h1 dns record-set ns delete](#h1-dns-record-set-ns-delete) - Delete record-set
      * [h1 dns record-set ns add-record](#h1-dns-record-set-ns-add-record) - Add record
      * [h1 dns record-set ns delete-record](#h1-dns-record-set-ns-delete-record) - Delete record
    * [h1 dns record-set srv](#h1-dns-record-set-srv) - Manage record set type SRV
      * [h1 dns record-set srv list](#h1-dns-record-set-srv-list) - List Record SRV
      * [h1 dns record-set srv create](#h1-dns-record-set-srv-create) - Create record-set
      * [h1 dns record-set srv delete](#h1-dns-record-set-srv-delete) - Delete record-set
      * [h1 dns record-set srv add-record](#h1-dns-record-set-srv-add-record) - Add record
      * [h1 dns record-set srv delete-record](#h1-dns-record-set-srv-delete-record) - Delete record
    * [h1 dns record-set list](#h1-dns-record-set-list) - List Record set


# Specification

## h1 dns

Manage your DNS - zones and records

### Examples

#### Create a new zone

```bash
h1 dns zone create --name my-domain.tld
```

#### Create A record at top of domain

```bash
h1 dns record-set a create --name '.' --zone-name 'my-domain.tld' --value 127.0.0.1
```

#### Create MX record for Google Suite

```bash
h1 dns record-set mx create --name '.' --zone-name 'my-domain.tld' \
    --value "10 alt1.aspmx.l.google.com." \
    --value "20 aspmx2.googlemail.com." \
    --value "10 alt2.aspmx.l.google.com." \
    --value "1 aspmx.l.google.com."
```

## h1 dns zone

Manage your DNS zone

## h1 dns zone list

List DNS zone

### Syntax

```h1 dns zone list | ```

## h1 dns zone show

Show DNS zone

### Syntax

```h1 dns zone show | --zone ZONE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone ID or name |

## h1 dns zone delete

Delete DNS zone

### Syntax

```h1 dns zone delete | --zone ZONE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone ID or name |

## h1 dns zone create

Create DNS zone

### Syntax

```h1 dns zone create | --name NAME```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | DNS zone name |

## h1 dns zone export

Export DNS zone

### Syntax

```h1 dns zone export | --zone-name ZONE-NAME```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone-name ZONE-NAME``` |  | DNS zone name |

## h1 dns record-set

Manage your record-set

## h1 dns record-set a

Manage record set type A

## h1 dns record-set a list

List Record A

### Syntax

```h1 dns record-set a list | --zone ZONE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set a create

Create record-set

### Syntax

```h1 dns record-set a create | --name NAME [--ttl TTL] --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Create record-set at top of domain

```bash
h1 dns record-set a create --name '.' --zone-name 'my-domain.tld' --value 127.0.0.1
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set a delete

Delete record-set

### Syntax

```h1 dns record-set a delete | --name NAME --zone ZONE```

### Examples

#### Delete all records for record-set

```bash
h1 dns record-set a delete --zone-name 'my-domain.tld' --name www
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set a add-record

Add record

### Syntax

```h1 dns record-set a add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Add DNS record

```bash
$ h1 dns record-set a add-record --zone-name 'my-domain.tld' --name subdomain --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set a delete-record

Delete record

### Syntax

```h1 dns record-set a delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Delete DNS record

```bash
h1 dns record-set a delete-record --zone-name 'my-domain.tld' --name www --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname

Manage record set type CNAME

## h1 dns record-set cname list

List Record CNAME

### Syntax

```h1 dns record-set cname list | --zone ZONE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set cname create

Create record-set

### Syntax

```h1 dns record-set cname create | --name NAME [--ttl TTL] --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Create record-set at top of domain

```bash
h1 dns record-set a create --name '.' --zone-name 'my-domain.tld' --value 127.0.0.1
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname delete

Delete record-set

### Syntax

```h1 dns record-set cname delete | --name NAME --zone ZONE```

### Examples

#### Delete all records for record-set

```bash
h1 dns record-set a delete --zone-name 'my-domain.tld' --name www
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set cname add-record

Add record

### Syntax

```h1 dns record-set cname add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Add DNS record

```bash
$ h1 dns record-set a add-record --zone-name 'my-domain.tld' --name subdomain --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname delete-record

Delete record

### Syntax

```h1 dns record-set cname delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Delete DNS record

```bash
h1 dns record-set a delete-record --zone-name 'my-domain.tld' --name www --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt

Manage record set type TXT

## h1 dns record-set txt list

List Record TXT

### Syntax

```h1 dns record-set txt list | --zone ZONE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set txt create

Create record-set

### Syntax

```h1 dns record-set txt create | --name NAME [--ttl TTL] --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Create record-set at top of domain

```bash
h1 dns record-set a create --name '.' --zone-name 'my-domain.tld' --value 127.0.0.1
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt delete

Delete record-set

### Syntax

```h1 dns record-set txt delete | --name NAME --zone ZONE```

### Examples

#### Delete all records for record-set

```bash
h1 dns record-set a delete --zone-name 'my-domain.tld' --name www
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set txt add-record

Add record

### Syntax

```h1 dns record-set txt add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Add DNS record

```bash
$ h1 dns record-set a add-record --zone-name 'my-domain.tld' --name subdomain --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt delete-record

Delete record

### Syntax

```h1 dns record-set txt delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Delete DNS record

```bash
h1 dns record-set a delete-record --zone-name 'my-domain.tld' --name www --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx

Manage record set type MX

## h1 dns record-set mx list

List Record MX

### Syntax

```h1 dns record-set mx list | --zone ZONE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set mx create

Create record-set

### Syntax

```h1 dns record-set mx create | --name NAME [--ttl TTL] --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Create record-set at top of domain

```bash
h1 dns record-set a create --name '.' --zone-name 'my-domain.tld' --value 127.0.0.1
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx delete

Delete record-set

### Syntax

```h1 dns record-set mx delete | --name NAME --zone ZONE```

### Examples

#### Delete all records for record-set

```bash
h1 dns record-set a delete --zone-name 'my-domain.tld' --name www
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set mx add-record

Add record

### Syntax

```h1 dns record-set mx add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Add DNS record

```bash
$ h1 dns record-set a add-record --zone-name 'my-domain.tld' --name subdomain --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx delete-record

Delete record

### Syntax

```h1 dns record-set mx delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Delete DNS record

```bash
h1 dns record-set a delete-record --zone-name 'my-domain.tld' --name www --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns

Manage record set type NS

## h1 dns record-set ns list

List Record NS

### Syntax

```h1 dns record-set ns list | --zone ZONE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set ns create

Create record-set

### Syntax

```h1 dns record-set ns create | --name NAME [--ttl TTL] --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Create record-set at top of domain

```bash
h1 dns record-set a create --name '.' --zone-name 'my-domain.tld' --value 127.0.0.1
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns delete

Delete record-set

### Syntax

```h1 dns record-set ns delete | --name NAME --zone ZONE```

### Examples

#### Delete all records for record-set

```bash
h1 dns record-set a delete --zone-name 'my-domain.tld' --name www
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set ns add-record

Add record

### Syntax

```h1 dns record-set ns add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Add DNS record

```bash
$ h1 dns record-set a add-record --zone-name 'my-domain.tld' --name subdomain --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns delete-record

Delete record

### Syntax

```h1 dns record-set ns delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Delete DNS record

```bash
h1 dns record-set a delete-record --zone-name 'my-domain.tld' --name www --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv

Manage record set type SRV

## h1 dns record-set srv list

List Record SRV

### Syntax

```h1 dns record-set srv list | --zone ZONE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set srv create

Create record-set

### Syntax

```h1 dns record-set srv create | --name NAME [--ttl TTL] --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Create record-set at top of domain

```bash
h1 dns record-set a create --name '.' --zone-name 'my-domain.tld' --value 127.0.0.1
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```[--ttl TTL]``` |  | Record Set Time To Live (TTL) |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv delete

Delete record-set

### Syntax

```h1 dns record-set srv delete | --name NAME --zone ZONE```

### Examples

#### Delete all records for record-set

```bash
h1 dns record-set a delete --zone-name 'my-domain.tld' --name www
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set srv add-record

Add record

### Syntax

```h1 dns record-set srv add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Add DNS record

```bash
$ h1 dns record-set a add-record --zone-name 'my-domain.tld' --name subdomain --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv delete-record

Delete record

### Syntax

```h1 dns record-set srv delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Examples

#### Delete DNS record

```bash
h1 dns record-set a delete-record --zone-name 'my-domain.tld' --name www --value 127.0.0.2
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set list

List Record set

### Syntax

```h1 dns record-set list | --zone ZONE```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

