
# h1 container registry show

Get container/registry

## Synopsis

```bash
$ h1 container registry show <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/container_project_registry_get)

## Example


### Simple

```bash
h1 container registry show \ 
	--registry 5f577a24494c5cfdec7830e5 \ 
	--project 5f64e2468c71177993874510
```

## Common options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--registry {id-or-uri}```                       | Registry Id                                                                                    |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
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
| ```--registry {id-or-uri}```                       | Registry Id                                                                                    |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
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

* [h1 container registry](./../README.md)
* [h1 container](./../../README.md)
* [h1](./../../../README.md)
