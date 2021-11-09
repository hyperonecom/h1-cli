
# h1 dns zone recordset record create

Create dns/zone.record

## Synopsis

```bash
$ h1 dns zone recordset record create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/dns_project_zone_recordset_record_create)

## Example


### Simple

```bash
h1 dns zone recordset record create \ 
	--recordset 5f60cbbe494c5cfdec81cc6b \ 
	--zone 5f72beb1494c5cfdec9b907f \ 
	--project 5f64e2468c71177993874510 \ 
	--content 1.1.1.1
```

## Operation options

| Option name                   | Description                                      |
| ----------------------------- | ------------------------------------------------ |
| ```--recordset {id-or-uri}``` | recordsetId                                      |
| ```--zone {id-or-uri}```      | Zone Id                                          |
| ```--location {id-or-uri}```  | Location Id. Default value is pl-waw-1           |
| ```--project {id-or-uri}```   | Project Id                                       |
| ```--content {content}```     | Record content                                   |
| ```--skeleton```              | Display intermediary representation of operation |

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, content:content\}    |
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
