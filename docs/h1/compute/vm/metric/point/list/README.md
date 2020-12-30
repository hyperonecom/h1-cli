
# h1 compute vm metric point list

List compute/vm.point

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/compute_project_vm_metric_point_list)

## Synopsis

$ h1 compute vm metric point list <options>

## Global options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--vm {id-or-uri}```                             | Vm Id                                                              |
| ```--metric {id-or-uri}```                         | metricId                                                           |
| ```--interval {interval}```                        | interval                                                           |
| ```--timespan {timespan}```                        | timespan                                                           |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{value:@\}             |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

## Operation options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--vm {id-or-uri}```                             | Vm Id                                                              |
| ```--metric {id-or-uri}```                         | metricId                                                           |
| ```--interval {interval}```                        | interval                                                           |
| ```--timespan {timespan}```                        | timespan                                                           |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{value:@\}             |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

# Parent commands

* [h1 compute vm metric point](./../README.md)
* [h1 compute vm metric](./../../README.md)
* [h1 compute vm](./../../../README.md)
* [h1 compute](./../../../../README.md)
* [h1](./../../../../../README.md)