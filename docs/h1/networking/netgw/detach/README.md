
# h1 networking netgw detach

Detach networking/netgw

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/networking_project_netgw_detach)

## Synopsis

$ h1 networking netgw detach <options>

## Global options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--netgw {id-or-uri}```                          | Netgw Id                                                                                       |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--skeleton```                                   | -                                                                                              |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.                             |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |

## Operation options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--netgw {id-or-uri}```                          | Netgw Id                                                                                       |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--skeleton```                                   | -                                                                                              |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.                             |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |

# Parent commands

* [h1 networking netgw](./../README.md)
* [h1 networking](./../../README.md)
* [h1](./../../../README.md)
