
# h1 container registry tag create

Create container/registry.tag

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/container_project_registry_tag_create)

## Synopsis

$ h1 container registry tag create <options>

## Example


### Simple

```h1 container registry tag create --project 5f64e2468c71177993874510 --registry 5f577a24494c5cfdec7830e5 --key x --value x```

## Global options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--registry {id-or-uri}```                       | Registry Id                                                        |
| ```--key {key}```                                  | Tag key                                                            |
| ```--value {value}```                              | Tag value                                                          |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}               |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

## Operation options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--registry {id-or-uri}```                       | Registry Id                                                        |
| ```--key {key}```                                  | Tag key                                                            |
| ```--value {value}```                              | Tag value                                                          |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}               |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

# Parent commands

* [h1 container registry tag](./../README.md)
* [h1 container registry](./../../README.md)
* [h1 container](./../../../README.md)
* [h1](./../../../../README.md)
