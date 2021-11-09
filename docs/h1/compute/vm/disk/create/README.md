
# h1 compute vm disk create

Create compute/vm.disk

## Synopsis

```bash
$ h1 compute vm disk create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/compute_project_vm_disk_create)

## Operation options

| Option name                  | Description                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| ```--vm {id-or-uri}```       | Vm Id                                                                                  |
| ```--location {id-or-uri}``` | Location Id. Default value is pl-waw-1                                                 |
| ```--project {id-or-uri}```  | Project Id                                                                             |
| ```--disk {id-or-uri}```     | Disk disk. Provide ID or URI of storage/disk. Requires permissions storage/disk/attach |
| ```--skeleton```             | Display intermediary representation of operation                                       |

## Common options

| Option name                                        | Description                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| ```--help```                                       | Show help message and exit.                                                                               |
| ```--verbose```                                    | Make the operation more talkative.                                                                        |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                   |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour, size:size\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                  |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                  |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                        |
| ```--v, --version```                               | Show version and exit.                                                                                    |

# Parent commands

* [h1 compute vm disk](./../README.md)
* [h1 compute vm](./../../README.md)
* [h1 compute](./../../../README.md)
* [h1](./../../../../README.md)
