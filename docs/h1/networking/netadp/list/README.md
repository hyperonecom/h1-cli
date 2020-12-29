
# h1 networking netadp list

List networking/netadp

## Synopsis

```bash
$ h1 networking netadp list <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/networking_project_netadp_list)

## Example


### Simple

```h1 networking netadp list --project 5f64e2468c71177993874510```

## Common options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--assigned.resource {assigned.resource}```      | Filter by assigned.resource                                                                    |
| ```--assigned.id {assigned.id}```                  | Filter by assigned.id                                                                          |
| ```--network {network}```                          | Filter by network                                                                              |
| ```--tag.value {tag.value}```                      | Filter by tag.value                                                                            |
| ```--tag.key {tag.key}```                          | Filter by tag.key                                                                              |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |
| ```--v, --version```                               | Show version and exit.                                                                         |

## Operation options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--assigned.resource {assigned.resource}```      | Filter by assigned.resource                                                                    |
| ```--assigned.id {assigned.id}```                  | Filter by assigned.id                                                                          |
| ```--network {network}```                          | Filter by network                                                                              |
| ```--tag.value {tag.value}```                      | Filter by tag.value                                                                            |
| ```--tag.key {tag.key}```                          | Filter by tag.key                                                                              |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |
| ```--v, --version```                               | Show version and exit.                                                                         |

# Parent commands

* [h1 networking netadp](./../README.md)
* [h1 networking](./../../README.md)
* [h1](./../../../README.md)
