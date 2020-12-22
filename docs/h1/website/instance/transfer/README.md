
# h1 website instance transfer

Transfer website/instance

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/website_project_instance_transfer)

## Synopsis

$ h1 website instance transfer <options>

## Global options

| Option name                                        | Description                                                                                      |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                                                       |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                           |
| ```--instance {id-or-uri}```                       | Instance Id                                                                                      |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                  |
| ```--project {id-or-uri}```                        | Instance project. Provide ID or URI of iam/project. Requires permissions website/instance/create |
| ```--skeleton```                                   | -                                                                                                |
| ```--help```                                       | Show help message and exit.                                                                      |
| ```--verbose```                                    | Make the operation more talkative.                                                               |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                          |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}    |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.                               |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                         |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                               |

## Operation options

| Option name                                        | Description                                                                                      |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                                                       |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                           |
| ```--instance {id-or-uri}```                       | Instance Id                                                                                      |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                  |
| ```--project {id-or-uri}```                        | Instance project. Provide ID or URI of iam/project. Requires permissions website/instance/create |
| ```--skeleton```                                   | -                                                                                                |
| ```--help```                                       | Show help message and exit.                                                                      |
| ```--verbose```                                    | Make the operation more talkative.                                                               |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                          |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}    |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.                               |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                         |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                               |

# Parent commands

* [h1 website instance](./../README.md)
* [h1 website](./../../README.md)
* [h1](./../../../README.md)
