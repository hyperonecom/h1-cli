
# h1 provider agent enabled-service create

Create provider/agent.enabledService

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/provider_project_agent_enabledService_create)

## Synopsis

$ h1 provider agent enabled-service create <options>

## Example


### Simple

```h1 provider agent enabled-service create --project 5f64e2468c71177993874510 --agent 5f577a24494c5cfdec7830e5 --service /billing/project/platform/service/5cb9e2c8467ad031486f9d88```

## Global options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--agent {id-or-uri}```                          | Agent Id                                                           |
| ```--service {id-or-uri}```                        | EnabledService service. Provide ID or URI of billing/service       |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}    |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

## Operation options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--agent {id-or-uri}```                          | Agent Id                                                           |
| ```--service {id-or-uri}```                        | EnabledService service. Provide ID or URI of billing/service       |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}    |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

# Parent commands

* [h1 provider agent enabled-service](./../README.md)
* [h1 provider agent](./../../README.md)
* [h1 provider](./../../../README.md)
* [h1](./../../../../README.md)
