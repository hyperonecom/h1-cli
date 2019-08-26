# TOC

  * [h1 dns zone](#h1-dns-zone) - Manage your DNS Zone
    * [h1 dns zone create](#h1-dns-zone-create) - Create DNS Zone
    * [h1 dns zone history](#h1-dns-zone-history) - History of DNS Zone
    * [h1 dns zone list](#h1-dns-zone-list) - List DNS Zone
    * [h1 dns zone show](#h1-dns-zone-show) - Show DNS Zone
    * [h1 dns zone delete](#h1-dns-zone-delete) - Delete DNS Zone
    * [h1 dns zone import](#h1-dns-zone-import) - Import A, AAAA, CNAME, TXT, MX, NS, SRV records of DNS Zone from BIND-compatible format
    * [h1 dns zone export](#h1-dns-zone-export) - Export A, AAAA, CNAME, TXT, MX, NS, SRV, SOA records of DNS Zone in BIND-compatible format
    * [h1 dns zone tag](#h1-dns-zone-tag) - Manage your tag
      * [h1 dns zone tag list](#h1-dns-zone-tag-list) - List tag
      * [h1 dns zone tag add](#h1-dns-zone-tag-add) - Add a tag to DNS Zone
      * [h1 dns zone tag delete](#h1-dns-zone-tag-delete) - Delete a tag of DNS Zone
  * [h1 dns record-set](#h1-dns-record-set) - Manage your record-set
    * [h1 dns record-set a](#h1-dns-record-set-a) - Manage record set type A
      * [h1 dns record-set a create](#h1-dns-record-set-a-create) - Create record set
      * [h1 dns record-set a upsert](#h1-dns-record-set-a-upsert) - Upsert record set
      * [h1 dns record-set a list](#h1-dns-record-set-a-list) - List record A
      * [h1 dns record-set a delete](#h1-dns-record-set-a-delete) - Delete record set
      * [h1 dns record-set a add-record](#h1-dns-record-set-a-add-record) - Add record
      * [h1 dns record-set a delete-record](#h1-dns-record-set-a-delete-record) - Delete record
      * [h1 dns record-set a dynamic-dns](#h1-dns-record-set-a-dynamic-dns) - Replaces the record set with the client IP address
    * [h1 dns record-set aaaa](#h1-dns-record-set-aaaa) - Manage record set type AAAA
      * [h1 dns record-set aaaa create](#h1-dns-record-set-aaaa-create) - Create record set
      * [h1 dns record-set aaaa upsert](#h1-dns-record-set-aaaa-upsert) - Upsert record set
      * [h1 dns record-set aaaa list](#h1-dns-record-set-aaaa-list) - List record AAAA
      * [h1 dns record-set aaaa delete](#h1-dns-record-set-aaaa-delete) - Delete record set
      * [h1 dns record-set aaaa add-record](#h1-dns-record-set-aaaa-add-record) - Add record
      * [h1 dns record-set aaaa delete-record](#h1-dns-record-set-aaaa-delete-record) - Delete record
    * [h1 dns record-set cname](#h1-dns-record-set-cname) - Manage record set type CNAME
      * [h1 dns record-set cname create](#h1-dns-record-set-cname-create) - Create record set
      * [h1 dns record-set cname upsert](#h1-dns-record-set-cname-upsert) - Upsert record set
      * [h1 dns record-set cname list](#h1-dns-record-set-cname-list) - List record CNAME
      * [h1 dns record-set cname delete](#h1-dns-record-set-cname-delete) - Delete record set
      * [h1 dns record-set cname add-record](#h1-dns-record-set-cname-add-record) - Add record
      * [h1 dns record-set cname delete-record](#h1-dns-record-set-cname-delete-record) - Delete record
    * [h1 dns record-set txt](#h1-dns-record-set-txt) - Manage record set type TXT
      * [h1 dns record-set txt create](#h1-dns-record-set-txt-create) - Create record set
      * [h1 dns record-set txt upsert](#h1-dns-record-set-txt-upsert) - Upsert record set
      * [h1 dns record-set txt list](#h1-dns-record-set-txt-list) - List record TXT
      * [h1 dns record-set txt delete](#h1-dns-record-set-txt-delete) - Delete record set
      * [h1 dns record-set txt add-record](#h1-dns-record-set-txt-add-record) - Add record
      * [h1 dns record-set txt delete-record](#h1-dns-record-set-txt-delete-record) - Delete record
    * [h1 dns record-set mx](#h1-dns-record-set-mx) - Manage record set type MX
      * [h1 dns record-set mx create](#h1-dns-record-set-mx-create) - Create record set
      * [h1 dns record-set mx upsert](#h1-dns-record-set-mx-upsert) - Upsert record set
      * [h1 dns record-set mx list](#h1-dns-record-set-mx-list) - List record MX
      * [h1 dns record-set mx delete](#h1-dns-record-set-mx-delete) - Delete record set
      * [h1 dns record-set mx add-record](#h1-dns-record-set-mx-add-record) - Add record
      * [h1 dns record-set mx delete-record](#h1-dns-record-set-mx-delete-record) - Delete record
    * [h1 dns record-set ns](#h1-dns-record-set-ns) - Manage record set type NS
      * [h1 dns record-set ns create](#h1-dns-record-set-ns-create) - Create record set
      * [h1 dns record-set ns upsert](#h1-dns-record-set-ns-upsert) - Upsert record set
      * [h1 dns record-set ns list](#h1-dns-record-set-ns-list) - List record NS
      * [h1 dns record-set ns delete](#h1-dns-record-set-ns-delete) - Delete record set
      * [h1 dns record-set ns add-record](#h1-dns-record-set-ns-add-record) - Add record
      * [h1 dns record-set ns delete-record](#h1-dns-record-set-ns-delete-record) - Delete record
    * [h1 dns record-set srv](#h1-dns-record-set-srv) - Manage record set type SRV
      * [h1 dns record-set srv create](#h1-dns-record-set-srv-create) - Create record set
      * [h1 dns record-set srv upsert](#h1-dns-record-set-srv-upsert) - Upsert record set
      * [h1 dns record-set srv list](#h1-dns-record-set-srv-list) - List record SRV
      * [h1 dns record-set srv delete](#h1-dns-record-set-srv-delete) - Delete record set
      * [h1 dns record-set srv add-record](#h1-dns-record-set-srv-add-record) - Add record
      * [h1 dns record-set srv delete-record](#h1-dns-record-set-srv-delete-record) - Delete record
    * [h1 dns record-set soa](#h1-dns-record-set-soa) - Manage record set type SOA
      * [h1 dns record-set soa create](#h1-dns-record-set-soa-create) - Create record set
      * [h1 dns record-set soa upsert](#h1-dns-record-set-soa-upsert) - Upsert record set
      * [h1 dns record-set soa list](#h1-dns-record-set-soa-list) - List record SOA
      * [h1 dns record-set soa delete](#h1-dns-record-set-soa-delete) - Delete record set
      * [h1 dns record-set soa add-record](#h1-dns-record-set-soa-add-record) - Add record
      * [h1 dns record-set soa delete-record](#h1-dns-record-set-soa-delete-record) - Delete record
    * [h1 dns record-set list](#h1-dns-record-set-list) - List record set


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

Manage your DNS Zone

### Examples

#### Create new zone

```bash
h1 dns zone create --name my-domain.tld
```

## h1 dns zone create

Create DNS Zone

### Syntax

```h1 dns zone create | --name NAME --type TYPE [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 dns zone create --name my-domain.tld
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | DNS zone name |
| ```--type TYPE``` |  | Zone type name or ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 dns zone history

History of DNS Zone

### Syntax

```h1 dns zone history | --zone ZONE```
### Example

```bash
h1 dns zone history --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS Zone ID or name |

## h1 dns zone list

List DNS Zone

### Syntax

```h1 dns zone list | ```
### Example

```bash
h1 dns zone list
```

## h1 dns zone show

Show DNS Zone

### Syntax

```h1 dns zone show | --zone ZONE```
### Example

```bash
h1 dns zone show --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS Zone ID or name |

## h1 dns zone delete

Delete DNS Zone

### Syntax

```h1 dns zone delete | --zone ZONE```
### Example

```bash
h1 dns zone delete --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS Zone ID or name |

## h1 dns zone import

Import A, AAAA, CNAME, TXT, MX, NS, SRV records of DNS Zone from BIND-compatible format

### Syntax

```h1 dns zone import | --zone ZONE --zone-file ZONE-FILE [--delete]```
### Example

```bash
h1 dns zone import --zone 'my-domain.tld' --zone-file my-zone-export.txt
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |
| ```--zone-file ZONE-FILE``` |  | File of zone in BIND-compatbile format |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--delete``` |  | Delete remote record-sets that do not exist locally |

## h1 dns zone export

Export A, AAAA, CNAME, TXT, MX, NS, SRV, SOA records of DNS Zone in BIND-compatible format

### Syntax

```h1 dns zone export | --zone ZONE```
### Example

```bash
h1 dns zone export --zone 'my-domain.tld'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS zone name |

## h1 dns zone tag

Manage your tag

## h1 dns zone tag list

List tag

### Syntax

```h1 dns zone tag list | --zone ZONE```
### Example

```bash
h1 dns zone tag list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | DNS Zone ID or name |

## h1 dns zone tag add

Add a tag to DNS Zone

### Syntax

```h1 dns zone tag add | --tag TAG [--tag TAG ...] --zone ZONE```
### Example

```bash
h1 dns zone tag add --zone test-zone --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--zone ZONE``` |  | DNS Zone ID or name |

## h1 dns zone tag delete

Delete a tag of DNS Zone

### Syntax

```h1 dns zone tag delete | --tag TAG --zone ZONE```
### Example

```bash
h1 dns zone tag delete --zone test-zone --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--zone ZONE``` |  | DNS Zone ID or name |

## h1 dns record-set

Manage your record-set

## h1 dns record-set a

Manage record set type A

## h1 dns record-set a create

Create record set

### Syntax

```h1 dns record-set a create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set a create --name '.' --zone 'my-domain.tld' --value '8.8.3.3'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set a upsert

Upsert record set

### Syntax

```h1 dns record-set a upsert | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set a upsert --name '.' --zone 'my-domain.tld' --value '8.8.3.3'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set a list

List record A

### Syntax

```h1 dns record-set a list | --zone ZONE```
### Example

```bash
h1 dns record-set a list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set a delete

Delete record set

### Syntax

```h1 dns record-set a delete | --name NAME --zone ZONE```
### Example

```bash
h1 dns record-set a delete --zone 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set a add-record

Add record

### Syntax

```h1 dns record-set a add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set a add-record --zone 'my-domain.tld' --name subdomain --value '8.8.3.3'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set a delete-record

Delete record

### Syntax

```h1 dns record-set a delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set a delete-record --zone 'my-domain.tld' --name www --value '8.8.3.3'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set a dynamic-dns

Replaces the record set with the client IP address

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

### Syntax

```h1 dns record-set a dynamic-dns | --name NAME --zone ZONE```
### Example

```bash
h1 dns record-set a dynamic-dns --name my-home --zone example.com.
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set aaaa

Manage record set type AAAA

## h1 dns record-set aaaa create

Create record set

### Syntax

```h1 dns record-set aaaa create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set aaaa create --name '.' --zone 'my-domain.tld' --value 'fdda:5cc1:23:4::1f'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set aaaa upsert

Upsert record set

### Syntax

```h1 dns record-set aaaa upsert | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set aaaa upsert --name '.' --zone 'my-domain.tld' --value 'fdda:5cc1:23:4::1f'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set aaaa list

List record AAAA

### Syntax

```h1 dns record-set aaaa list | --zone ZONE```
### Example

```bash
h1 dns record-set aaaa list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set aaaa delete

Delete record set

### Syntax

```h1 dns record-set aaaa delete | --name NAME --zone ZONE```
### Example

```bash
h1 dns record-set aaaa delete --zone 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set aaaa add-record

Add record

### Syntax

```h1 dns record-set aaaa add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set aaaa add-record --zone 'my-domain.tld' --name subdomain --value 'fdda:5cc1:23:4::1f'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set aaaa delete-record

Delete record

### Syntax

```h1 dns record-set aaaa delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set aaaa delete-record --zone 'my-domain.tld' --name www --value 'fdda:5cc1:23:4::1f'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname

Manage record set type CNAME

## h1 dns record-set cname create

Create record set

### Syntax

```h1 dns record-set cname create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set cname create --name '.' --zone 'my-domain.tld' --value 'cname-example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set cname upsert

Upsert record set

### Syntax

```h1 dns record-set cname upsert | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set cname upsert --name '.' --zone 'my-domain.tld' --value 'cname-example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set cname list

List record CNAME

### Syntax

```h1 dns record-set cname list | --zone ZONE```
### Example

```bash
h1 dns record-set cname list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set cname delete

Delete record set

### Syntax

```h1 dns record-set cname delete | --name NAME --zone ZONE```
### Example

```bash
h1 dns record-set cname delete --zone 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set cname add-record

Add record

### Syntax

```h1 dns record-set cname add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set cname add-record --zone 'my-domain.tld' --name subdomain --value 'cname-example.com'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set cname delete-record

Delete record

### Syntax

```h1 dns record-set cname delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set cname delete-record --zone 'my-domain.tld' --name www --value 'cname-example.com'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt

Manage record set type TXT

## h1 dns record-set txt create

Create record set

### Syntax

```h1 dns record-set txt create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set txt create --name '.' --zone 'my-domain.tld' --value '"some-text-value"'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set txt upsert

Upsert record set

### Syntax

```h1 dns record-set txt upsert | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set txt upsert --name '.' --zone 'my-domain.tld' --value '"some-text-value"'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set txt list

List record TXT

### Syntax

```h1 dns record-set txt list | --zone ZONE```
### Example

```bash
h1 dns record-set txt list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set txt delete

Delete record set

### Syntax

```h1 dns record-set txt delete | --name NAME --zone ZONE```
### Example

```bash
h1 dns record-set txt delete --zone 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set txt add-record

Add record

### Syntax

```h1 dns record-set txt add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set txt add-record --zone 'my-domain.tld' --name subdomain --value '"some-text-value"'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set txt delete-record

Delete record

### Syntax

```h1 dns record-set txt delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set txt delete-record --zone 'my-domain.tld' --name www --value '"some-text-value"'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx

Manage record set type MX

## h1 dns record-set mx create

Create record set

### Syntax

```h1 dns record-set mx create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set mx create --name '.' --zone 'my-domain.tld' --value '10 mail.example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set mx upsert

Upsert record set

### Syntax

```h1 dns record-set mx upsert | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set mx upsert --name '.' --zone 'my-domain.tld' --value '10 mail.example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set mx list

List record MX

### Syntax

```h1 dns record-set mx list | --zone ZONE```
### Example

```bash
h1 dns record-set mx list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set mx delete

Delete record set

### Syntax

```h1 dns record-set mx delete | --name NAME --zone ZONE```
### Example

```bash
h1 dns record-set mx delete --zone 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set mx add-record

Add record

### Syntax

```h1 dns record-set mx add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set mx add-record --zone 'my-domain.tld' --name subdomain --value '10 mail.example.com'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set mx delete-record

Delete record

### Syntax

```h1 dns record-set mx delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set mx delete-record --zone 'my-domain.tld' --name www --value '10 mail.example.com'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns

Manage record set type NS

## h1 dns record-set ns create

Create record set

### Syntax

```h1 dns record-set ns create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set ns create --name '.' --zone 'my-domain.tld' --value 'ns1.example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set ns upsert

Upsert record set

### Syntax

```h1 dns record-set ns upsert | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set ns upsert --name '.' --zone 'my-domain.tld' --value 'ns1.example.com'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set ns list

List record NS

### Syntax

```h1 dns record-set ns list | --zone ZONE```
### Example

```bash
h1 dns record-set ns list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set ns delete

Delete record set

### Syntax

```h1 dns record-set ns delete | --name NAME --zone ZONE```
### Example

```bash
h1 dns record-set ns delete --zone 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set ns add-record

Add record

### Syntax

```h1 dns record-set ns add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set ns add-record --zone 'my-domain.tld' --name subdomain --value 'ns1.example.com'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set ns delete-record

Delete record

### Syntax

```h1 dns record-set ns delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set ns delete-record --zone 'my-domain.tld' --name www --value 'ns1.example.com'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv

Manage record set type SRV

## h1 dns record-set srv create

Create record set

### Syntax

```h1 dns record-set srv create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set srv create --name '.' --zone 'my-domain.tld' --value '10 5 11 s1.example.com.'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set srv upsert

Upsert record set

### Syntax

```h1 dns record-set srv upsert | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set srv upsert --name '.' --zone 'my-domain.tld' --value '10 5 11 s1.example.com.'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set srv list

List record SRV

### Syntax

```h1 dns record-set srv list | --zone ZONE```
### Example

```bash
h1 dns record-set srv list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set srv delete

Delete record set

### Syntax

```h1 dns record-set srv delete | --name NAME --zone ZONE```
### Example

```bash
h1 dns record-set srv delete --zone 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set srv add-record

Add record

### Syntax

```h1 dns record-set srv add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set srv add-record --zone 'my-domain.tld' --name subdomain --value '10 5 11 s1.example.com.'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set srv delete-record

Delete record

### Syntax

```h1 dns record-set srv delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set srv delete-record --zone 'my-domain.tld' --name www --value '10 5 11 s1.example.com.'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set soa

Manage record set type SOA

## h1 dns record-set soa create

Create record set

### Syntax

```h1 dns record-set soa create | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set soa create --name '.' --zone 'my-domain.tld' --value 'pns.hyperone.com. hostmaster.hyperone.com. 2018093002 15 180 1209600 1800'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set soa upsert

Upsert record set

### Syntax

```h1 dns record-set soa upsert | --name NAME --zone ZONE --value VALUE [--value VALUE ...] [--ttl TTL]```
### Example

```bash
h1 dns record-set soa upsert --name '.' --zone 'my-domain.tld' --value 'pns.hyperone.com. hostmaster.hyperone.com. 2018093002 15 180 1209600 1800'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--ttl TTL``` |  | Record set Time To Live (TTL) |

## h1 dns record-set soa list

List record SOA

### Syntax

```h1 dns record-set soa list | --zone ZONE```
### Example

```bash
h1 dns record-set soa list --zone my-zone
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set soa delete

Delete record set

### Syntax

```h1 dns record-set soa delete | --name NAME --zone ZONE```
### Example

```bash
h1 dns record-set soa delete --zone 'my-domain.tld' --name www
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |

## h1 dns record-set soa add-record

Add record

### Syntax

```h1 dns record-set soa add-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set soa add-record --zone 'my-domain.tld' --name subdomain --value 'pns.hyperone.com. hostmaster.hyperone.com. 2018093002 15 180 1209600 1800'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set soa delete-record

Delete record

### Syntax

```h1 dns record-set soa delete-record | --name NAME --zone ZONE --value VALUE [--value VALUE ...]```
### Example

```bash
h1 dns record-set soa delete-record --zone 'my-domain.tld' --name www --value 'pns.hyperone.com. hostmaster.hyperone.com. 2018093002 15 180 1209600 1800'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Record set name |
| ```--zone ZONE``` |  | Zone name or ID |
| ```--value VALUE [--value VALUE ...]``` |  | Value. The parameter may occur repeatedly |

## h1 dns record-set list

List record set

### Syntax

```h1 dns record-set list | --zone ZONE```
### Example

```bash
h1 dns record-set list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--zone ZONE``` |  | Zone name or ID |

