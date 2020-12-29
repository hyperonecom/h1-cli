
# h1 provider agent create

Create provider/agent

## Synopsis

```bash
$ h1 provider agent create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/provider_project_agent_create)

## Example


### Simple

```h1 provider agent create --project 5f64e2468c71177993874510 --name simple-agent --service /billing/project/5f64e2468c71177993874510/service/5cb9e2c1467ad031486f9d87```

## Global options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--name {name}```                                | Agent name                                                                                     |
| ```--service {id-or-uri}```                        | Agent service. Provide ID or URI of billing/service                                            |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                 |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |

## Operation options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--name {name}```                                | Agent name                                                                                     |
| ```--service {id-or-uri}```                        | Agent service. Provide ID or URI of billing/service                                            |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                 |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |

# Parent commands

* [h1 provider agent](./../README.md)
* [h1 provider](./../../README.md)
* [h1](./../../../README.md)
