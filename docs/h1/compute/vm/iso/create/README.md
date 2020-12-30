
# h1 compute vm iso create

Create compute/vm.iso

## Synopsis

```bash
$ h1 compute vm iso create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/compute_project_vm_iso_create)

## Example


### ISO attach

```bash
h1 compute vm iso create \ 
	--project 5f64e2468c71177993874510 \ 
	--vm 5f577a24494c5cfdec7830e5 \ 
	--iso /storage/pl-waw-1/project/5f64e2468c71177993874510/iso/5f74bdf1494c5cfdec9e66dd
```

## Common options

| Option name                                        | Description                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                                |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                    |
| ```--vm {id-or-uri}```                             | Vm Id                                                                                                     |
| ```--iso {id-or-uri}```                            | Iso iso. Provide ID or URI of storage/iso. Requires permissions storage/iso/attach                        |
| ```--skeleton```                                   | Display intermediary representation of operation                                                          |
| ```--help```                                       | Show help message and exit.                                                                               |
| ```--verbose```                                    | Make the operation more talkative.                                                                        |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                   |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour, size:size\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                  |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                  |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                        |
| ```--v, --version```                               | Show version and exit.                                                                                    |

## Operation options

| Option name                                        | Description                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                                |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                    |
| ```--vm {id-or-uri}```                             | Vm Id                                                                                                     |
| ```--iso {id-or-uri}```                            | Iso iso. Provide ID or URI of storage/iso. Requires permissions storage/iso/attach                        |
| ```--skeleton```                                   | Display intermediary representation of operation                                                          |
| ```--help```                                       | Show help message and exit.                                                                               |
| ```--verbose```                                    | Make the operation more talkative.                                                                        |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                   |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour, size:size\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                  |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                  |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                        |
| ```--v, --version```                               | Show version and exit.                                                                                    |

# Parent commands

* [h1 compute vm iso](./../README.md)
* [h1 compute vm](./../../README.md)
* [h1 compute](./../../../README.md)
* [h1](./../../../../README.md)
