
# h1 networking netadp create

Create networking/netadp

## Synopsis

```bash
$ h1 networking netadp create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/networking_project_netadp_create)

## Example


### Simple

```bash
h1 networking netadp create \ 
	--project 5f64e2468c71177993874510 \ 
	--vm /compute/pl-waw-1/project/5f64e2468c71177993874510/vm/5f72b7a9494c5cfdec9b8198 \ 
	--network /networking/pl-waw-1/project/000000000000000000000000/network/5784e97be2627505227b578c
```

## Common options

| Option name                                        | Description                                                                                             |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                              |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                  |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                         |
| ```--vm {id-or-uri}```                             | Netadp vm. Provide ID or URI of compute/vm. Requires permissions compute/vm/use                         |
| ```--network {id-or-uri}```                        | Netadp network. Provide ID or URI of networking/network. Requires permissions networking/network/use    |
| ```--firewall {id-or-uri}```                       | Netadp firewall. Provide ID or URI of networking/firewall. Requires permissions networking/firewall/use |
| ```--ip {ip}```                                    | Ip collection                                                                                           |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                          |
| ```--skeleton```                                   | Display intermediary representation of operation                                                        |
| ```--help```                                       | Show help message and exit.                                                                             |
| ```--verbose```                                    | Make the operation more talkative.                                                                      |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                 |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}           |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                      |
| ```--v, --version```                               | Show version and exit.                                                                                  |

## Operation options

| Option name                                        | Description                                                                                             |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                              |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                  |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                         |
| ```--vm {id-or-uri}```                             | Netadp vm. Provide ID or URI of compute/vm. Requires permissions compute/vm/use                         |
| ```--network {id-or-uri}```                        | Netadp network. Provide ID or URI of networking/network. Requires permissions networking/network/use    |
| ```--firewall {id-or-uri}```                       | Netadp firewall. Provide ID or URI of networking/firewall. Requires permissions networking/firewall/use |
| ```--ip {ip}```                                    | Ip collection                                                                                           |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                          |
| ```--skeleton```                                   | Display intermediary representation of operation                                                        |
| ```--help```                                       | Show help message and exit.                                                                             |
| ```--verbose```                                    | Make the operation more talkative.                                                                      |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                 |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}           |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                      |
| ```--v, --version```                               | Show version and exit.                                                                                  |

# Parent commands

* [h1 networking netadp](./../README.md)
* [h1 networking](./../../README.md)
* [h1](./../../../README.md)
