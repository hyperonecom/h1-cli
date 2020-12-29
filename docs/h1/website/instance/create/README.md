
# h1 website instance create

Create website/instance

## Synopsis

```bash
$ h1 website instance create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/website_project_instance_create)

## Example


### Simple

```h1 website instance create --project 5f64e2468c71177993874510 --name simple-website --service /billing/project/platform/service/5cb9e2c8467ad031486f9d88 --image h1cr.io/website/php-apache:latest```

## Global options

| Option name                                        | Description                                                                                                                                                 |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                                                  |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                                                                      |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                                             |
| ```--name {name}```                                | Instance name                                                                                                                                               |
| ```--service {id-or-uri}```                        | Instance service. Provide ID or URI of billing/service                                                                                                      |
| ```--image {uri}```                                | Instance image. Provide URI of website/image                                                                                                                |
| ```--source {source}```                            | Instance source. Specifies one of the following: <br>- snapshot. Provide URI of website/instance.snapshot<br>- backup. Provide ID or URI of recovery/backup |
| ```--env {name=name,value=value}```                | Env collection                                                                                                                                              |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                                              |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                                            |
| ```--help```                                       | Show help message and exit.                                                                                                                                 |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                                          |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                                                     |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}                                                               |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                                                    |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                                                    |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                                          |

## Operation options

| Option name                                        | Description                                                                                                                                                 |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                                                  |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                                                                      |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                                             |
| ```--name {name}```                                | Instance name                                                                                                                                               |
| ```--service {id-or-uri}```                        | Instance service. Provide ID or URI of billing/service                                                                                                      |
| ```--image {uri}```                                | Instance image. Provide URI of website/image                                                                                                                |
| ```--source {source}```                            | Instance source. Specifies one of the following: <br>- snapshot. Provide URI of website/instance.snapshot<br>- backup. Provide ID or URI of recovery/backup |
| ```--env {name=name,value=value}```                | Env collection                                                                                                                                              |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                                              |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                                            |
| ```--help```                                       | Show help message and exit.                                                                                                                                 |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                                          |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                                                     |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}                                                               |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                                                    |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                                                    |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                                          |

# Parent commands

* [h1 website instance](./../README.md)
* [h1 website](./../../README.md)
* [h1](./../../../README.md)
