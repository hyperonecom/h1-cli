
# h1 website instance link create

Create website/instance.link

## Synopsis

```bash
$ h1 website instance link create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/website_project_instance_link_create)

## Global options

| Option name                                        | Description                                                                                   |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                    |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                        |
| ```--instance {id-or-uri}```                       | Instance Id                                                                                   |
| ```--actor {id-or-uri}```                          | Link actor. Provide ID or URI of iam/sa. Requires permissions iam/sa/use                      |
| ```--purpose {logs}```                             | Link purpose                                                                                  |
| ```--resource {id-or-uri}```                       | Link resource. Provide ID or URI of insight/journal. Requires permissions insight/journal/use |
| ```--skeleton```                                   | Display intermediary representation of operation                                              |
| ```--help```                                       | Show help message and exit.                                                                   |
| ```--verbose```                                    | Make the operation more talkative.                                                            |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                       |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}                                          |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                      |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                      |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                            |
| ```--v, --version```                               | Show version and exit.                                                                        |

## Operation options

| Option name                                        | Description                                                                                   |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                    |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                        |
| ```--instance {id-or-uri}```                       | Instance Id                                                                                   |
| ```--actor {id-or-uri}```                          | Link actor. Provide ID or URI of iam/sa. Requires permissions iam/sa/use                      |
| ```--purpose {logs}```                             | Link purpose                                                                                  |
| ```--resource {id-or-uri}```                       | Link resource. Provide ID or URI of insight/journal. Requires permissions insight/journal/use |
| ```--skeleton```                                   | Display intermediary representation of operation                                              |
| ```--help```                                       | Show help message and exit.                                                                   |
| ```--verbose```                                    | Make the operation more talkative.                                                            |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                       |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}                                          |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                      |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                      |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                            |
| ```--v, --version```                               | Show version and exit.                                                                        |

# Parent commands

* [h1 website instance link](./../README.md)
* [h1 website instance](./../../README.md)
* [h1 website](./../../../README.md)
* [h1](./../../../../README.md)
