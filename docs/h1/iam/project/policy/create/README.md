
# h1 iam project policy create

Create iam/policy

## Synopsis

```bash
$ h1 iam project policy create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_project_policy_create)

## Example


### Simple

```h1 iam project policy create --project 5f64e2468c71177993874510 --name simple-policy --role /iam/project/5eeb5a66ac7d806a88a5bb6b/role/5eeb8b5e47c27dcf37d0ff25 --resource /iam/project/5f64e2468c71177993874510```

## Global options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--name {name}```                                | Policy name                                                                                    |
| ```--role {uri}```                                 | Policy role. Provide URI of iam/role. Requires permissions iam/role/use                        |
| ```--resource {uri}```                             | Policy resource. Provide URI of *                                                              |
| ```--actor {value=value}```                        | Actor collection                                                                               |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                 |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |

## Operation options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--name {name}```                                | Policy name                                                                                    |
| ```--role {uri}```                                 | Policy role. Provide URI of iam/role. Requires permissions iam/role/use                        |
| ```--resource {uri}```                             | Policy resource. Provide URI of *                                                              |
| ```--actor {value=value}```                        | Actor collection                                                                               |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                 |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |

# Parent commands

* [h1 iam project policy](./../README.md)
* [h1 iam project](./../../README.md)
* [h1 iam](./../../../README.md)
* [h1](./../../../../README.md)
