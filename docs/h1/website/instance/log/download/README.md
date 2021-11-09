
# h1 website instance log download

get instance.log.url

## Synopsis

```bash
$ h1 website instance log download <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/v1:website:instance.log.url:get)

## Operation options

| Option name                       | Description                                      |
| --------------------------------- | ------------------------------------------------ |
| ```--log {id-or-uri}```           | log Id                                           |
| ```--instance {id-or-uri}```      | instance Id                                      |
| ```--project {id-or-uri}```       | project Id                                       |
| ```--location {id-or-uri}```      | location Id. Default value is pl-waw-1           |
| ```--incremental {incremental}``` | -                                                |
| ```--skeleton```                  | Display intermediary representation of operation |

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{value:@\}                   |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 website instance log](./../README.md)
* [h1 website instance](./../../README.md)
* [h1 website](./../../../README.md)
* [h1](./../../../../README.md)
