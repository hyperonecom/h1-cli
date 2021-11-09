
# h1 networking netgw detach

Detach networking/netgw

## Synopsis

```bash
$ h1 networking netgw detach <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/networking_project_netgw_detach)

## Operation options

| Option name                                   | Description                                      |
| --------------------------------------------- | ------------------------------------------------ |
| ```--x-dry-run {x-dry-run}```                 | Dry run                                          |
| ```--x-idempotency-key {x-idempotency-key}``` | Idempotency key                                  |
| ```--netgw {id-or-uri}```                     | Netgw Id                                         |
| ```--location {id-or-uri}```                  | Location Id. Default value is pl-waw-1           |
| ```--project {id-or-uri}```                   | Project Id                                       |
| ```--skeleton```                              | Display intermediary representation of operation |

## Common options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
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
