
# h1 dns zone recordset create

Create dns/zone.recordset

## Synopsis

```bash
$ h1 dns zone recordset create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/dns_project_zone_recordset_create)

## Example


### Simple

```bash
h1 dns zone recordset create \ 
	--zone 5f72beb1494c5cfdec9b907f \ 
	--project 5f64e2468c71177993874510 \ 
	--name zone-recordset \ 
	--type A \ 
	--record content=1.1.1.1
```

## Operation options

| Option name                                                    | Description                                      |
| -------------------------------------------------------------- | ------------------------------------------------ |
| ```--zone {id-or-uri}```                                       | Zone Id                                          |
| ```--location {id-or-uri}```                                   | Location Id. Default value is pl-waw-1           |
| ```--project {id-or-uri}```                                    | Project Id                                       |
| ```--name {name}```                                            | Recordset name. Default value is @               |
| ```--type {A, AAAA, CAA, CNAME, MX, NS, PTR, SOA, SRV, TXT}``` | Recordset type                                   |
| ```--ttl {ttl}```                                              | Recordset ttl. Default value is 3600             |
| ```--record {content=content}```                               | Record collection                                |
| ```--skeleton```                                               | Display intermediary representation of operation |

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}          |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 dns zone recordset](./../README.md)
* [h1 dns zone](./../../README.md)
* [h1 dns](./../../../README.md)
* [h1](./../../../../README.md)
