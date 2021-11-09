
# h1 iam project role event list

List iam/role.event

## Synopsis

```bash
$ h1 iam project role event list <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_project_role_event_list)

## Example


### Simple

```bash
h1 iam project role event list \ 
	--role 5f72c96b02fbdad8a048fa40 \ 
	--project 5f64e2468c71177993874510
```

## Operation options

| Option name                 | Description                                      |
| --------------------------- | ------------------------------------------------ |
| ```--$skip {$skip}```       | $skip                                            |
| ```--$limit {$limit}```     | $limit                                           |
| ```--role {id-or-uri}```    | Role Id                                          |
| ```--project {id-or-uri}``` | Project Id                                       |
| ```--skeleton```            | Display intermediary representation of operation |

## Common options

| Option name                                        | Description                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| ```--help```                                       | Show help message and exit.                                                   |
| ```--verbose```                                    | Make the operation more talkative.                                            |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                       |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.      |
| ```--as {uri}```                                   | Act as another actor eg. service account                                      |
| ```--no-wait```                                    | In case of queued event do not wait for completion                            |
| ```--v, --version```                               | Show version and exit.                                                        |

# Parent commands

* [h1 iam project role event](./../README.md)
* [h1 iam project role](./../../README.md)
* [h1 iam project](./../../../README.md)
* [h1 iam](./../../../../README.md)
* [h1](./../../../../../README.md)
