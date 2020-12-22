
# h1 compute vm connect open

Open compute/vm.connect

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/compute_project_vm_connect_open)

## Synopsis

$ h1 compute vm connect open <options>

## Example


### Simple

```h1 compute vm connect open --project 5f64e2468c71177993874510 --vm 5f577a24494c5cfdec7830e5 --connect 5f918e1aa828daa954b4579c```

## Global options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--vm {id-or-uri}```                             | Vm Id                                                              |
| ```--connect {id-or-uri}```                        | connectId                                                          |
| ```--protocol {http,ws}```                         | Connect protocol. Defaults is http. Default value is http          |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string                                              |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

## Operation options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--vm {id-or-uri}```                             | Vm Id                                                              |
| ```--connect {id-or-uri}```                        | connectId                                                          |
| ```--protocol {http,ws}```                         | Connect protocol. Defaults is http. Default value is http          |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string                                              |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

# Parent commands

* [h1 compute vm connect](./../README.md)
* [h1 compute vm](./../../README.md)
* [h1 compute](./../../../README.md)
* [h1](./../../../../README.md)
