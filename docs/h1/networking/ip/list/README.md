
# h1 networking ip list

List networking/ip

## Synopsis

```bash
$ h1 networking ip list <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/networking_project_ip_list)

## Example


### Simple

```bash
h1 networking ip list \ 
	--project 5f64e2468c71177993874510
```

## Operation options

| Option name                                   | Description                                      |
| --------------------------------------------- | ------------------------------------------------ |
| ```--tag.key {tag.key}```                     | Filter by tag.key                                |
| ```--tag.value {tag.value}```                 | Filter by tag.value                              |
| ```--associated.netadp {associated.netadp}``` | Filter by associated.netadp                      |
| ```--network {network}```                     | Filter by network                                |
| ```--location {id-or-uri}```                  | Location Id. Default value is pl-waw-1           |
| ```--project {id-or-uri}```                   | Project Id                                       |
| ```--skeleton```                              | Display intermediary representation of operation |

## Common options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |
| ```--v, --version```                               | Show version and exit.                                                                         |

# Parent commands

* [h1 networking ip](./../README.md)
* [h1 networking](./../../README.md)
* [h1](./../../../README.md)