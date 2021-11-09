
# h1 website instance credential show

get instance.credential

## Synopsis

```bash
$ h1 website instance credential show <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/v1:website:instance.credential:get)

## Operation options

| Option name                    | Description                                      |
| ------------------------------ | ------------------------------------------------ |
| ```--credential {id-or-uri}``` | credential Id                                    |
| ```--instance {id-or-uri}```   | instance Id                                      |
| ```--project {id-or-uri}```    | project Id                                       |
| ```--location {id-or-uri}```   | location Id. Default value is pl-waw-1           |
| ```--skeleton```               | Display intermediary representation of operation |

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

* [h1 website instance credential](./../README.md)
* [h1 website instance](./../../README.md)
* [h1 website](./../../../README.md)
* [h1](./../../../../README.md)
