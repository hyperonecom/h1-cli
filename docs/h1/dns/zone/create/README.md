
# h1 dns zone create

Create dns/zone

## Synopsis

```bash
$ h1 dns zone create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/dns_project_zone_create)

## Example


### Simple

```bash
h1 dns zone create \ 
	--project 5f64e2468c71177993874510 \ 
	--name simple-zone \ 
	--service /billing/project/platform/service/5d31a9310642a263e1c0b23d \ 
	--dns-name example-zone.com
```

## Common options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--name {name}```                                | Zone name                                                                                      |
| ```--service {id-or-uri}```                        | Zone service. Provide ID or URI of billing/service                                             |
| ```--dns-name {dns-name}```                        | Zone dnsName                                                                                   |
| ```--source-dns-probing```                         | Source dnsProbing                                                                              |
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
| ```--name {name}```                                | Zone name                                                                                      |
| ```--service {id-or-uri}```                        | Zone service. Provide ID or URI of billing/service                                             |
| ```--dns-name {dns-name}```                        | Zone dnsName                                                                                   |
| ```--source-dns-probing```                         | Source dnsProbing                                                                              |
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

* [h1 dns zone](./../README.md)
* [h1 dns](./../../README.md)
* [h1](./../../../README.md)
