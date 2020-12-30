
# h1 dns zone recordset record delete

Delete dns/zone.record

## Synopsis

```bash
$ h1 dns zone recordset record delete <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/dns_project_zone_recordset_record_delete)

## Example


### Simple

```bash
h1 dns zone recordset record delete \ 
	--project 5f64e2468c71177993874510 \ 
	--zone 5f72beb1494c5cfdec9b907f \ 
	--recordset 5f60cbbe494c5cfdec81cc6b \ 
	--record 5cb9e2c8467ad031486f9d88
```

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                   |
| ```--zone {id-or-uri}```                           | Zone Id                                                                  |
| ```--recordset {id-or-uri}```                      | recordsetId                                                              |
| ```--record {id-or-uri}```                         | recordId                                                                 |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string                                                    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

## Operation options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                   |
| ```--zone {id-or-uri}```                           | Zone Id                                                                  |
| ```--recordset {id-or-uri}```                      | recordsetId                                                              |
| ```--record {id-or-uri}```                         | recordId                                                                 |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string                                                    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 dns zone recordset record](./../README.md)
* [h1 dns zone recordset](./../../README.md)
* [h1 dns zone](./../../../README.md)
* [h1 dns](./../../../../README.md)
* [h1](./../../../../../README.md)