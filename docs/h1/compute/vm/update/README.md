
# h1 compute vm update

Update compute/vm

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/compute_project_vm_update)

## Synopsis

$ h1 compute vm update <options>

## Example


### Rename

```h1 compute vm update --project 5f64e2468c71177993874510 --vm 5f577a24494c5cfdec7830e5 --name vm-renamed```

## Global options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--vm {id-or-uri}```                             | Vm Id                                                                                          |
| ```--user-metadata {user-metadata}```              | Vm userMetadata. Requires permissions compute/vm.userMetadata/update                           |
| ```--name {name}```                                | Vm name. Requires permissions compute/vm.name/update                                           |
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
| ```--vm {id-or-uri}```                             | Vm Id                                                                                          |
| ```--user-metadata {user-metadata}```              | Vm userMetadata. Requires permissions compute/vm.userMetadata/update                           |
| ```--name {name}```                                | Vm name. Requires permissions compute/vm.name/update                                           |
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
