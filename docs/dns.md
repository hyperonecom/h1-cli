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

### Example

```bash
h1 dns zone list
```

### Examples

```bash
h1 dns zone list
```

## h1 dns zone show

Show DNS zone

### Syntax

```h1 dns zone show | --zone ZONE```

### Example

```bash
h1 dns zone show --zone my-zone
```

### Examples

```bash
h1 dns zone show --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone ID or name |

## h1 dns zone delete

Delete DNS zone

### Syntax

```h1 dns zone delete | --zone ZONE```

### Example

```bash
h1 dns zone delete --zone my-zone
```

### Examples

```bash
h1 dns zone delete --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone ID or name |

## h1 dns zone create

Create DNS zone

### Syntax

```h1 dns zone create | --name NAME```

### Example

```bash
h1 dns zone create --name my-domain.tld
```

### Examples

```bash
h1 dns zone create --name my-domain.tld
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | DNS zone name |

## h1 dns zone export

Export DNS zone

### Syntax

```h1 dns zone export | --zone-name ZONE-NAME```

### Example

```bash
h1 dns zone export --zone-name 'my-domain.tld'
```

### Examples

```bash
h1 dns zone export --zone-name 'my-domain.tld'
```

### Required arguments

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

### Example

```bash
h1 dns record-set a list --zone my-zone
```

### Examples

```bash
h1 dns record-set a list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set a create

Create record-set

### Syntax

```h1 dns record-set a create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```

### Example

```bash
h1 dns record-set a create --name '.' --zone-name 'my-domain.tld' --value '8.8.3.3'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Examples

```bash
h1 dns record-set a create --name '.' --zone-name 'my-domain.tld' --value '8.8.3.3'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |

## h1 dns record-set a delete

Delete record-set

### Syntax

```h1 dns record-set a delete | --name NAME --zone ZONE```

### Example

```bash
h1 dns record-set a delete --zone-name 'my-domain.tld' --name www
```

### Examples

```bash
h1 dns record-set a delete --zone-name 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set a add-record

Add record

### Syntax

```h1 dns record-set a add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set a add-record --zone-name 'my-domain.tld' --name subdomain --value '8.8.3.3'
```

### Examples

```bash
h1 dns record-set a add-record --zone-name 'my-domain.tld' --name subdomain --value '8.8.3.3'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set a delete-record

Delete record

### Syntax

```h1 dns record-set a delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set a delete-record --zone-name 'my-domain.tld' --name www --value '8.8.3.3'
```

### Examples

```bash
h1 dns record-set a delete-record --zone-name 'my-domain.tld' --name www --value '8.8.3.3'
```

### Required arguments

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

### Example

```bash
h1 dns record-set cname list --zone my-zone
```

### Examples

```bash
h1 dns record-set cname list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set cname create

Create record-set

### Syntax

```h1 dns record-set cname create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```

### Example

```bash
h1 dns record-set cname create --name '.' --zone-name 'my-domain.tld' --value 'cname-example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Examples

```bash
h1 dns record-set cname create --name '.' --zone-name 'my-domain.tld' --value 'cname-example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |

## h1 dns record-set cname delete

Delete record-set

### Syntax

```h1 dns record-set cname delete | --name NAME --zone ZONE```

### Example

```bash
h1 dns record-set cname delete --zone-name 'my-domain.tld' --name www
```

### Examples

```bash
h1 dns record-set cname delete --zone-name 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set cname add-record

Add record

### Syntax

```h1 dns record-set cname add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set cname add-record --zone-name 'my-domain.tld' --name subdomain --value 'cname-example.com'
```

### Examples

```bash
h1 dns record-set cname add-record --zone-name 'my-domain.tld' --name subdomain --value 'cname-example.com'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname delete-record

Delete record

### Syntax

```h1 dns record-set cname delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set cname delete-record --zone-name 'my-domain.tld' --name www --value 'cname-example.com'
```

### Examples

```bash
h1 dns record-set cname delete-record --zone-name 'my-domain.tld' --name www --value 'cname-example.com'
```

### Required arguments

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

### Example

```bash
h1 dns record-set txt list --zone my-zone
```

### Examples

```bash
h1 dns record-set txt list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set txt create

Create record-set

### Syntax

```h1 dns record-set txt create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```

### Example

```bash
h1 dns record-set txt create --name '.' --zone-name 'my-domain.tld' --value '"some-text-value"'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Examples

```bash
h1 dns record-set txt create --name '.' --zone-name 'my-domain.tld' --value '"some-text-value"'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |

## h1 dns record-set txt delete

Delete record-set

### Syntax

```h1 dns record-set txt delete | --name NAME --zone ZONE```

### Example

```bash
h1 dns record-set txt delete --zone-name 'my-domain.tld' --name www
```

### Examples

```bash
h1 dns record-set txt delete --zone-name 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set txt add-record

Add record

### Syntax

```h1 dns record-set txt add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set txt add-record --zone-name 'my-domain.tld' --name subdomain --value '"some-text-value"'
```

### Examples

```bash
h1 dns record-set txt add-record --zone-name 'my-domain.tld' --name subdomain --value '"some-text-value"'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt delete-record

Delete record

### Syntax

```h1 dns record-set txt delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set txt delete-record --zone-name 'my-domain.tld' --name www --value '"some-text-value"'
```

### Examples

```bash
h1 dns record-set txt delete-record --zone-name 'my-domain.tld' --name www --value '"some-text-value"'
```

### Required arguments

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

### Example

```bash
h1 dns record-set mx list --zone my-zone
```

### Examples

```bash
h1 dns record-set mx list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set mx create

Create record-set

### Syntax

```h1 dns record-set mx create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```

### Example

```bash
h1 dns record-set mx create --name '.' --zone-name 'my-domain.tld' --value '10 mail.example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Examples

```bash
h1 dns record-set mx create --name '.' --zone-name 'my-domain.tld' --value '10 mail.example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |

## h1 dns record-set mx delete

Delete record-set

### Syntax

```h1 dns record-set mx delete | --name NAME --zone ZONE```

### Example

```bash
h1 dns record-set mx delete --zone-name 'my-domain.tld' --name www
```

### Examples

```bash
h1 dns record-set mx delete --zone-name 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set mx add-record

Add record

### Syntax

```h1 dns record-set mx add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set mx add-record --zone-name 'my-domain.tld' --name subdomain --value '10 mail.example.com'
```

### Examples

```bash
h1 dns record-set mx add-record --zone-name 'my-domain.tld' --name subdomain --value '10 mail.example.com'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx delete-record

Delete record

### Syntax

```h1 dns record-set mx delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set mx delete-record --zone-name 'my-domain.tld' --name www --value '10 mail.example.com'
```

### Examples

```bash
h1 dns record-set mx delete-record --zone-name 'my-domain.tld' --name www --value '10 mail.example.com'
```

### Required arguments

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

### Example

```bash
h1 dns record-set ns list --zone my-zone
```

### Examples

```bash
h1 dns record-set ns list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set ns create

Create record-set

### Syntax

```h1 dns record-set ns create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```

### Example

```bash
h1 dns record-set ns create --name '.' --zone-name 'my-domain.tld' --value 'ns1.example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Examples

```bash
h1 dns record-set ns create --name '.' --zone-name 'my-domain.tld' --value 'ns1.example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |

## h1 dns record-set ns delete

Delete record-set

### Syntax

```h1 dns record-set ns delete | --name NAME --zone ZONE```

### Example

```bash
h1 dns record-set ns delete --zone-name 'my-domain.tld' --name www
```

### Examples

```bash
h1 dns record-set ns delete --zone-name 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set ns add-record

Add record

### Syntax

```h1 dns record-set ns add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set ns add-record --zone-name 'my-domain.tld' --name subdomain --value 'ns1.example.com'
```

### Examples

```bash
h1 dns record-set ns add-record --zone-name 'my-domain.tld' --name subdomain --value 'ns1.example.com'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns delete-record

Delete record

### Syntax

```h1 dns record-set ns delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set ns delete-record --zone-name 'my-domain.tld' --name www --value 'ns1.example.com'
```

### Examples

```bash
h1 dns record-set ns delete-record --zone-name 'my-domain.tld' --name www --value 'ns1.example.com'
```

### Required arguments

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

### Example

```bash
h1 dns record-set srv list --zone my-zone
```

### Examples

```bash
h1 dns record-set srv list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set srv create

Create record-set

### Syntax

```h1 dns record-set srv create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```

### Example

```bash
h1 dns record-set srv create --name '.' --zone-name 'my-domain.tld' --value '10 5 11 s1.example.com.'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Examples

```bash
h1 dns record-set srv create --name '.' --zone-name 'my-domain.tld' --value '10 5 11 s1.example.com.'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record Set Time To Live (TTL) |

## h1 dns record-set srv delete

Delete record-set

### Syntax

```h1 dns record-set srv delete | --name NAME --zone ZONE```

### Example

```bash
h1 dns record-set srv delete --zone-name 'my-domain.tld' --name www
```

### Examples

```bash
h1 dns record-set srv delete --zone-name 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns record-set srv add-record

Add record

### Syntax

```h1 dns record-set srv add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set srv add-record --zone-name 'my-domain.tld' --name subdomain --value '10 5 11 s1.example.com.'
```

### Examples

```bash
h1 dns record-set srv add-record --zone-name 'my-domain.tld' --name subdomain --value '10 5 11 s1.example.com.'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv delete-record

Delete record

### Syntax

```h1 dns record-set srv delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```

### Example

```bash
h1 dns record-set srv delete-record --zone-name 'my-domain.tld' --name www --value '10 5 11 s1.example.com.'
```

### Examples

```bash
h1 dns record-set srv delete-record --zone-name 'my-domain.tld' --name www --value '10 5 11 s1.example.com.'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record Set name |
| ```--zone ZONE``` |  | DNS zone name |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set list

List Record set

### Syntax

```h1 dns record-set list | --zone ZONE```

### Example

```bash
h1 dns record-set list
```

### Examples

```bash
h1 dns record-set list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

