
# h1 networking netadp event list

List networking/netadp.event

## Synopsis

```bash
$ h1 networking netadp event list <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/networking_project_netadp_event_list)

## Example


### Simple

```bash
h1 networking netadp event list \ 
	--project 5f64e2468c71177993874510 \ 
	--netadp 5f577a24494c5cfdec7830e5
```

## Common options

| Option name                                        | Description                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                    |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                        |
| ```--netadp {id-or-uri}```                         | Netadp Id                                                                     |
| ```--$limit {$limit}```                            | $limit                                                                        |
| ```--$skip {$skip}```                              | $skip                                                                         |
| ```--skeleton```                                   | Display intermediary representation of operation                              |
| ```--help```                                       | Show help message and exit.                                                   |
| ```--verbose```                                    | Make the operation more talkative.                                            |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                       |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.      |
| ```--as {uri}```                                   | Act as another actor eg. service account                                      |
| ```--no-wait```                                    | In case of queued event do not wait for completion                            |
| ```--v, --version```                               | Show version and exit.                                                        |

## Operation options

| Option name                                        | Description                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                    |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                        |
| ```--netadp {id-or-uri}```                         | Netadp Id                                                                     |
| ```--$limit {$limit}```                            | $limit                                                                        |
| ```--$skip {$skip}```                              | $skip                                                                         |
| ```--skeleton```                                   | Display intermediary representation of operation                              |
| ```--help```                                       | Show help message and exit.                                                   |
| ```--verbose```                                    | Make the operation more talkative.                                            |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                       |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.      |
| ```--as {uri}```                                   | Act as another actor eg. service account                                      |
| ```--no-wait```                                    | In case of queued event do not wait for completion                            |
| ```--v, --version```                               | Show version and exit.                                                        |

# Parent commands

* [h1 networking netadp event](./../README.md)
* [h1 networking netadp](./../../README.md)
* [h1 networking](./../../../README.md)
* [h1](./../../../../README.md)