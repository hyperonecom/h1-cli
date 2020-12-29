
# h1 container registry create

Create container/registry

## Synopsis

```bash
$ h1 container registry create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/container_project_registry_create)

## Example


### Simple

```h1 container registry create --project 5f64e2468c71177993874510 --name simple-registry --service /billing/project/platform/service/5d08b8c36f76391808dffc3d```

## Common options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--name {name}```                                | Registry name                                                                                  |
| ```--service {id-or-uri}```                        | Registry service. Provide ID or URI of billing/service                                         |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                 |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |
| ```--v, --version```                               | Show version and exit.                                                                         |

## Operation options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--name {name}```                                | Registry name                                                                                  |
| ```--service {id-or-uri}```                        | Registry service. Provide ID or URI of billing/service                                         |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                 |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |
| ```--v, --version```                               | Show version and exit.                                                                         |

# Parent commands

* [h1 container registry](./../README.md)
* [h1 container](./../../README.md)
* [h1](./../../../README.md)
