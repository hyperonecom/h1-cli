
# h1 storage image create

Create storage/image

## Synopsis

```bash
$ h1 storage image create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/storage_project_image_create)

## Example


### Simple

```h1 storage image create --project 5f64e2468c71177993874510 --name simple-image --service /billing/project/platform/service/564639bc052c084e2f2e3266 --vm /compute/pl-waw-1/project/5f64e2468c71177993874510/vm/5f72b7a9494c5cfdec9b8198```

## Global options

| Option name                                        | Description                                                                                                                          |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                           |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                                               |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                      |
| ```--name {name}```                                | Image name                                                                                                                           |
| ```--service {id-or-uri}```                        | Image service. Provide ID or URI of billing/service. Defaults is 564639bc052c084e2f2e3266. Default value is 564639bc052c084e2f2e3266 |
| ```--vm {id-or-uri}```                             | Image vm. Provide ID or URI of compute/vm. Requires permissions compute/vm/use                                                       |
| ```--replica {id-or-uri}```                        | Image replica. Provide ID or URI of compute/replica. Requires permissions compute/replica/use                                        |
| ```--description {description}```                  | Image description                                                                                                                    |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                       |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                     |
| ```--help```                                       | Show help message and exit.                                                                                                          |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                   |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                              |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}                                        |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                             |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                             |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                   |

## Operation options

| Option name                                        | Description                                                                                                                          |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                           |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                                               |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                      |
| ```--name {name}```                                | Image name                                                                                                                           |
| ```--service {id-or-uri}```                        | Image service. Provide ID or URI of billing/service. Defaults is 564639bc052c084e2f2e3266. Default value is 564639bc052c084e2f2e3266 |
| ```--vm {id-or-uri}```                             | Image vm. Provide ID or URI of compute/vm. Requires permissions compute/vm/use                                                       |
| ```--replica {id-or-uri}```                        | Image replica. Provide ID or URI of compute/replica. Requires permissions compute/replica/use                                        |
| ```--description {description}```                  | Image description                                                                                                                    |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                       |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                     |
| ```--help```                                       | Show help message and exit.                                                                                                          |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                   |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                              |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}                                        |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                             |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                             |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                   |

# Parent commands

* [h1 storage image](./../README.md)
* [h1 storage](./../../README.md)
* [h1](./../../../README.md)
