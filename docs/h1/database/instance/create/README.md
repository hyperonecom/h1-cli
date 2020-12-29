
# h1 database instance create

Create database/instance

## Synopsis

```bash
$ h1 database instance create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/database_project_instance_create)

## Example


### Simple

```h1 database instance create --project 5f64e2468c71177993874510 --name simple-instance --service /billing/project/platform/service/5cd2e2fc3bd40c1a6359bb26```

## Global options

| Option name                                        | Description                                                                                     |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                      |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                          |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                 |
| ```--name {name}```                                | Instance name                                                                                   |
| ```--service {id-or-uri}```                        | Instance service. Provide ID or URI of billing/service                                          |
| ```--source {id-or-uri}```                         | Instance source. Provide ID or URI of recovery/backup. Requires permissions recovery/backup/use |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                  |
| ```--skeleton```                                   | Display intermediary representation of operation                                                |
| ```--help```                                       | Show help message and exit.                                                                     |
| ```--verbose```                                    | Make the operation more talkative.                                                              |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                         |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}   |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                        |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                        |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                              |

## Operation options

| Option name                                        | Description                                                                                     |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                      |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                          |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                 |
| ```--name {name}```                                | Instance name                                                                                   |
| ```--service {id-or-uri}```                        | Instance service. Provide ID or URI of billing/service                                          |
| ```--source {id-or-uri}```                         | Instance source. Provide ID or URI of recovery/backup. Requires permissions recovery/backup/use |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                  |
| ```--skeleton```                                   | Display intermediary representation of operation                                                |
| ```--help```                                       | Show help message and exit.                                                                     |
| ```--verbose```                                    | Make the operation more talkative.                                                              |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                         |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}   |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                        |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                        |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                              |

# Parent commands

* [h1 database instance](./../README.md)
* [h1 database](./../../README.md)
* [h1](./../../../README.md)
