
# h1 vmhost instance event show

Get vmhost/instance.event

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/vmhost_project_instance_event_get)

## Synopsis

$ h1 vmhost instance event show <options>

## Global options

| Option name                                        | Description                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                    |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                        |
| ```--instance {id-or-uri}```                       | Instance Id                                                                   |
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
| ```--instance {id-or-uri}```                       | Instance Id                                                                   |
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

* [h1 vmhost instance event](./../README.md)
* [h1 vmhost instance](./../../README.md)
* [h1 vmhost](./../../../README.md)
* [h1](./../../../../README.md)
