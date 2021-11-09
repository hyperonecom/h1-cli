
# h1 recovery backup create

long text

## Synopsis

```bash
$ h1 recovery backup create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/v1:recovery:backup:create)

## Operation options

| Option name                                           | Description                                      |
| ----------------------------------------------------- | ------------------------------------------------ |
| ```--project {id-or-uri}```                           | project Id                                       |
| ```--location {id-or-uri}```                          | location Id. Default value is pl-waw-1           |
| ```--source {source}```                               | -                                                |
| ```--tag {key=key, value=value}```                    | -                                                |
| ```--profile {website/instance, database/instance}``` | -                                                |
| ```--name {name}```                                   | -                                                |
| ```--skeleton```                                      | Display intermediary representation of operation |

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

* [h1 recovery backup](./../README.md)
* [h1 recovery](./../../README.md)
* [h1](./../../../README.md)
