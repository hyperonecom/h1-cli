
# h1 iam project policy actor delete

Delete iam/policy.actor

## Synopsis

```bash
$ h1 iam project policy actor delete <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_project_policy_actor_delete)

## Example


### Simple

```bash
h1 iam project policy actor delete \ 
	--actor 5f72ce6102fbdad8a048fb38 \ 
	--policy 5f72c96b02fbdad8a048fa40 \ 
	--project 5f64e2468c71177993874510
```

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--actor {id-or-uri}```                          | actorId                                                                  |
| ```--policy {id-or-uri}```                         | Policy Id                                                                |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}                     |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

## Operation options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--actor {id-or-uri}```                          | actorId                                                                  |
| ```--policy {id-or-uri}```                         | Policy Id                                                                |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}                     |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 iam project policy actor](./../README.md)
* [h1 iam project policy](./../../README.md)
* [h1 iam project](./../../../README.md)
* [h1 iam](./../../../../README.md)
* [h1](./../../../../../README.md)
