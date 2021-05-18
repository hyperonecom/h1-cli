
# h1 networking firewall create

Create networking/firewall

## Synopsis

```bash
$ h1 networking firewall create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/networking_project_firewall_create)

## Example


### Simple

```bash
h1 networking firewall create \ 
	--project 5f64e2468c71177993874510 \ 
	--name simple-firewall
```

## Common options

| Option name                                                                                                   | Description                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                                                                                   | Project Id                                                                                                                              |
| ```--location {id-or-uri}```                                                                                  | Location Id. Default value is pl-waw-1                                                                                                  |
| ```--x-idempotency-key {x-idempotency-key}```                                                                 | Idempotency key                                                                                                                         |
| ```--name {name}```                                                                                           | Firewall name                                                                                                                           |
| ```--service {id-or-uri}```                                                                                   | Firewall service. Provide ID or URI of billing/service. Defaults is 5bacaf7202deee0c100eda3b. Default value is 5bacaf7202deee0c100eda3b |
| ```--ingress {name=name,action=action,priority=priority,filter=filter,external=external,internal=internal}``` | Rule collection                                                                                                                         |
| ```--egress {name=name,action=action,priority=priority,filter=filter,external=external,internal=internal}```  | Rule collection                                                                                                                         |
| ```--tag {key=key,value=value}```                                                                             | Tag collection                                                                                                                          |
| ```--skeleton```                                                                                              | Display intermediary representation of operation                                                                                        |
| ```--help```                                                                                                  | Show help message and exit.                                                                                                             |
| ```--verbose```                                                                                               | Make the operation more talkative.                                                                                                      |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}```                                                            | Specify output format of command. Default value is yaml                                                                                 |
| ```--query {query}```                                                                                         | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}                                           |
| ```--passport-file {path}```                                                                                  | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                                |
| ```--as {uri}```                                                                                              | Act as another actor eg. service account                                                                                                |
| ```--no-wait```                                                                                               | In case of queued event do not wait for completion                                                                                      |
| ```--v, --version```                                                                                          | Show version and exit.                                                                                                                  |

## Operation options

| Option name                                                                                                   | Description                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                                                                                   | Project Id                                                                                                                              |
| ```--location {id-or-uri}```                                                                                  | Location Id. Default value is pl-waw-1                                                                                                  |
| ```--x-idempotency-key {x-idempotency-key}```                                                                 | Idempotency key                                                                                                                         |
| ```--name {name}```                                                                                           | Firewall name                                                                                                                           |
| ```--service {id-or-uri}```                                                                                   | Firewall service. Provide ID or URI of billing/service. Defaults is 5bacaf7202deee0c100eda3b. Default value is 5bacaf7202deee0c100eda3b |
| ```--ingress {name=name,action=action,priority=priority,filter=filter,external=external,internal=internal}``` | Rule collection                                                                                                                         |
| ```--egress {name=name,action=action,priority=priority,filter=filter,external=external,internal=internal}```  | Rule collection                                                                                                                         |
| ```--tag {key=key,value=value}```                                                                             | Tag collection                                                                                                                          |
| ```--skeleton```                                                                                              | Display intermediary representation of operation                                                                                        |
| ```--help```                                                                                                  | Show help message and exit.                                                                                                             |
| ```--verbose```                                                                                               | Make the operation more talkative.                                                                                                      |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}```                                                            | Specify output format of command. Default value is yaml                                                                                 |
| ```--query {query}```                                                                                         | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}                                           |
| ```--passport-file {path}```                                                                                  | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                                |
| ```--as {uri}```                                                                                              | Act as another actor eg. service account                                                                                                |
| ```--no-wait```                                                                                               | In case of queued event do not wait for completion                                                                                      |
| ```--v, --version```                                                                                          | Show version and exit.                                                                                                                  |

# Parent commands

* [h1 networking firewall](./../README.md)
* [h1 networking](./../../README.md)
* [h1](./../../../README.md)