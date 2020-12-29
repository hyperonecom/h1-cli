
# h1 iam project sa create

Create iam/sa

## Synopsis

```bash
$ h1 iam project sa create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_project_sa_create)

## Example


### Simple

```h1 iam project sa create --project 5f64e2468c71177993874510 --name simple-sa```

## Common options

| Option name                                        | Description                                                                                                                       |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                        |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                   |
| ```--name {name}```                                | Sa name                                                                                                                           |
| ```--service {id-or-uri}```                        | Sa service. Provide ID or URI of billing/service. Defaults is 5e5fc76ff1fb3efe1842336a. Default value is 5e5fc76ff1fb3efe1842336a |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                    |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                  |
| ```--help```                                       | Show help message and exit.                                                                                                       |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                           |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}                                     |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                          |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                          |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                |
| ```--v, --version```                               | Show version and exit.                                                                                                            |

## Operation options

| Option name                                        | Description                                                                                                                       |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                        |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                   |
| ```--name {name}```                                | Sa name                                                                                                                           |
| ```--service {id-or-uri}```                        | Sa service. Provide ID or URI of billing/service. Defaults is 5e5fc76ff1fb3efe1842336a. Default value is 5e5fc76ff1fb3efe1842336a |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                    |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                  |
| ```--help```                                       | Show help message and exit.                                                                                                       |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                           |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}                                     |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                          |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                          |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                |
| ```--v, --version```                               | Show version and exit.                                                                                                            |

# Parent commands

* [h1 iam project sa](./../README.md)
* [h1 iam project](./../../README.md)
* [h1 iam](./../../../README.md)
* [h1](./../../../../README.md)
