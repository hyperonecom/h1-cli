
# h1 database instance tag delete

delete instance.tag

## Synopsis

```bash
$ h1 database instance tag delete <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/v1:database:instance.tag:delete)

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--tag {id-or-uri}```                            | tag Id                                                                   |
| ```--instance {id-or-uri}```                       | instance Id                                                              |
| ```--project {id-or-uri}```                        | project Id                                                               |
| ```--location {id-or-uri}```                       | location Id. Default value is pl-waw-1                                   |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{value:@\}                   |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

## Operation options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--tag {id-or-uri}```                            | tag Id                                                                   |
| ```--instance {id-or-uri}```                       | instance Id                                                              |
| ```--project {id-or-uri}```                        | project Id                                                               |
| ```--location {id-or-uri}```                       | location Id. Default value is pl-waw-1                                   |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{value:@\}                   |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 database instance tag](./../README.md)
* [h1 database instance](./../../README.md)
* [h1 database](./../../../README.md)
* [h1](./../../../../README.md)
