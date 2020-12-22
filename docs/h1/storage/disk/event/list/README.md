
# h1 storage disk event list

List storage/disk.event

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/storage_project_disk_event_list)

## Synopsis

$ h1 storage disk event list <options>

## Example


### Simple

```h1 storage disk event list --project 5f64e2468c71177993874510 --disk 5f577a24494c5cfdec7830e5```

## Global options

| Option name                                        | Description                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                    |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                        |
| ```--disk {id-or-uri}```                           | Disk Id                                                                       |
| ```--$limit {$limit}```                            | $limit                                                                        |
| ```--$skip {$skip}```                              | $skip                                                                         |
| ```--skeleton```                                   | -                                                                             |
| ```--help```                                       | Show help message and exit.                                                   |
| ```--verbose```                                    | Make the operation more talkative.                                            |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                       |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.            |
| ```--as {uri}```                                   | Act as another actor eg. service account                                      |
| ```--no-wait```                                    | In case of queued event do not wait for completion                            |

## Operation options

| Option name                                        | Description                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                    |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                        |
| ```--disk {id-or-uri}```                           | Disk Id                                                                       |
| ```--$limit {$limit}```                            | $limit                                                                        |
| ```--$skip {$skip}```                              | $skip                                                                         |
| ```--skeleton```                                   | -                                                                             |
| ```--help```                                       | Show help message and exit.                                                   |
| ```--verbose```                                    | Make the operation more talkative.                                            |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                       |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.            |
| ```--as {uri}```                                   | Act as another actor eg. service account                                      |
| ```--no-wait```                                    | In case of queued event do not wait for completion                            |

# Parent commands

* [h1 storage disk event](./../README.md)
* [h1 storage disk](./../../README.md)
* [h1 storage](./../../../README.md)
* [h1](./../../../../README.md)
