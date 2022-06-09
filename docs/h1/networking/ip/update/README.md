
# h1 networking ip update

Update networking/ip

## Synopsis

```bash
$ h1 networking ip update <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/networking_project_ip_update)

## Example


### Simple

```bash
h1 networking ip update \ 
	--ip 5f577a24494c5cfdec7830e5 \ 
	--project 5f64e2468c71177993874510 \ 
	--ptr-record ip-updated
```

## Operation options

| Option name                     | Description                                                       |
| ------------------------------- | ----------------------------------------------------------------- |
| ```--ip {id-or-uri}```          | Ip Id                                                             |
| ```--location {id-or-uri}```    | Location Id. Default value is pl-waw-1                            |
| ```--project {id-or-uri}```     | Project Id                                                        |
| ```--ptr-record {ptr-record}``` | Ip ptrRecord. Requires permissions networking/ip.ptrRecord/update |
| ```--skeleton```                | Display intermediary representation of operation                  |

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

* [h1 networking ip](./../README.md)
* [h1 networking](./../../README.md)
* [h1](./../../../README.md)