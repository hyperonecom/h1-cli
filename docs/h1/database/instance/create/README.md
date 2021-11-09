
# h1 database instance create

long text

## Synopsis

```bash
$ h1 database instance create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/v1:database:instance:create)

## Operation options

| Option name                                                        | Description                                      |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ```--project {id-or-uri}```                                        | project Id                                       |
| ```--location {id-or-uri}```                                       | location Id. Default value is pl-waw-1           |
| ```--source {uri}```                                               | backup. Provide URI of recovery/backup           |
| ```--tag {key=key, value=value}```                                 | -                                                |
| ```--profile {mysql:5.7, postgres:11, postgres:12, postgres:13}``` | -                                                |
| ```--name {name}```                                                | -                                                |
| ```--skeleton```                                                   | Display intermediary representation of operation |

## Common options

| Option name                                        | Description                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| ```--help```                                       | Show help message and exit.                                                   |
| ```--verbose```                                    | Make the operation more talkative.                                            |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                       |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.      |
| ```--as {uri}```                                   | Act as another actor eg. service account                                      |
| ```--no-wait```                                    | In case of queued event do not wait for completion                            |
| ```--v, --version```                               | Show version and exit.                                                        |

# Parent commands

* [h1 database instance](./../README.md)
* [h1 database](./../../README.md)
* [h1](./../../../README.md)
