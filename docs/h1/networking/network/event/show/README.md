
# h1 networking network event show

Get networking/network.event

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/networking_project_network_event_get)

## Synopsis

$ h1 networking network event show <options>

## Example


### Simple

```h1 networking network event show --project 5f64e2468c71177993874510 --network 5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b```

## Global options

| Option name                                        | Description                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                    |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                        |
| ```--network {id-or-uri}```                        | Network Id                                                                    |
| ```--event {id-or-uri}```                          | eventId                                                                       |
| ```--skeleton```                                   | -                                                                             |
| ```--help```                                       | Show help message and exit.                                                   |
| ```--verbose```                                    | Make the operation more talkative.                                            |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                       |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.            |
| ```--as {uri}```                                   | Act as another actor eg. service account                                      |
| ```--no-wait```                                    | In case of queued event do not wait for completion                            |

## Operation options

| Option name                                        | Description                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                    |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                        |
| ```--network {id-or-uri}```                        | Network Id                                                                    |
| ```--event {id-or-uri}```                          | eventId                                                                       |
| ```--skeleton```                                   | -                                                                             |
| ```--help```                                       | Show help message and exit.                                                   |
| ```--verbose```                                    | Make the operation more talkative.                                            |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                       |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.            |
| ```--as {uri}```                                   | Act as another actor eg. service account                                      |
| ```--no-wait```                                    | In case of queued event do not wait for completion                            |

# Parent commands

* [h1 networking network event](./../README.md)
* [h1 networking network](./../../README.md)
* [h1 networking](./../../../README.md)
* [h1](./../../../../README.md)
