
# h1 dns zone recordset update

Update dns/zone.recordset

## Synopsis

```bash
$ h1 dns zone recordset update <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/dns_project_zone_recordset_patch)

## Operation options

| Option name                   | Description                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| ```--recordset {id-or-uri}``` | recordsetId                                                                              |
| ```--zone {id-or-uri}```      | Zone Id                                                                                  |
| ```--location {id-or-uri}```  | Location Id. Default value is pl-waw-1                                                   |
| ```--project {id-or-uri}```   | Project Id                                                                               |
| ```--ttl {ttl}```             | Recordset ttl. Requires permissions dns/zone.recordset.ttl/update. Default value is 3600 |
| ```--skeleton```              | Display intermediary representation of operation                                         |

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
