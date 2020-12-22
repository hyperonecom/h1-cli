
# h1 compute vm list

List compute/vm

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/compute_project_vm_list)

## Synopsis

$ h1 compute vm list <options>

## Example


### Simple

```h1 compute vm list --project 5f64e2468c71177993874510```

## Global options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--name {name}```                                | Filter by name                                                                                 |
| ```--tag.value {tag.value}```                      | Filter by tag.value                                                                            |
| ```--tag.key {tag.key}```                          | Filter by tag.key                                                                              |
| ```--skeleton```                                   | -                                                                                              |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.                             |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |

## Operation options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--name {name}```                                | Filter by name                                                                                 |
| ```--tag.value {tag.value}```                      | Filter by tag.value                                                                            |
| ```--tag.key {tag.key}```                          | Filter by tag.key                                                                              |
| ```--skeleton```                                   | -                                                                                              |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.                             |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |

# Parent commands

* [h1 compute vm](./../README.md)
* [h1 compute](./../../README.md)
* [h1](./../../../README.md)
