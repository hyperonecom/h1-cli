
# h1 networking firewall ingress create

Create networking/firewall.ingress

## Synopsis

```bash
$ h1 networking firewall ingress create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/networking_project_firewall_ingress_create)

## Example


### Simple

```bash
h1 networking firewall ingress create \ 
	--firewall 5f577a24494c5cfdec7830e5 \ 
	--project 5f64e2468c71177993874510 \ 
	--name simple-ingress \ 
	--action allow \ 
	--priority 900 \ 
	--filter tcp:80 \ 
	--external 0.0.0.0/0 \ 
	--internal 0.0.0.0/0
```

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--firewall {id-or-uri}```                       | Firewall Id                                                              |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                   |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--name {name}```                                | Rule name                                                                |
| ```--action {allow, deny}```                       | Rule action                                                              |
| ```--priority {priority}```                        | Rule priority                                                            |
| ```--filter {filter}```                            | Filter collection                                                        |
| ```--external {external}```                        | External collection. Default value is 0.0.0.0/0                          |
| ```--internal {internal}```                        | Internal collection. Default value is *                                  |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}          |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

## Operation options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--firewall {id-or-uri}```                       | Firewall Id                                                              |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                   |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--name {name}```                                | Rule name                                                                |
| ```--action {allow, deny}```                       | Rule action                                                              |
| ```--priority {priority}```                        | Rule priority                                                            |
| ```--filter {filter}```                            | Filter collection                                                        |
| ```--external {external}```                        | External collection. Default value is 0.0.0.0/0                          |
| ```--internal {internal}```                        | Internal collection. Default value is *                                  |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}          |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 networking firewall ingress](./../README.md)
* [h1 networking firewall](./../../README.md)
* [h1 networking](./../../../README.md)
* [h1](./../../../../README.md)
