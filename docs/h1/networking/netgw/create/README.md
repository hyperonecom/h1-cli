
# h1 networking netgw create

Create networking/netgw

## Synopsis

```bash
$ h1 networking netgw create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/networking_project_netgw_create)

## Example


### Simple

```h1 networking netgw create --project 5f64e2468c71177993874510 --name simple-netgw --public-ip /networking/pl-waw-1/project/5af0bbbcb7802508ad844caa/ip/5784e97be2627505227b57ab```

## Global options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--name {name}```                                | Netgw name                                                                                     |
| ```--public-ip {id-or-uri}```                      | Public ip. Provide ID or URI of networking/ip. Requires permissions networking/ip/use          |
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
| ```--name {name}```                                | Netgw name                                                                                     |
| ```--public-ip {id-or-uri}```                      | Public ip. Provide ID or URI of networking/ip. Requires permissions networking/ip/use          |
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

* [h1 networking netgw](./../README.md)
* [h1 networking](./../../README.md)
* [h1](./../../../README.md)
