
# h1 storage disk create

Create storage/disk

## Synopsis

```bash
$ h1 storage disk create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/storage_project_disk_create)

## Examples


### Simple

```h1 storage disk create --project 5f64e2468c71177993874510 --name simple-disk --service /billing/project/platform/service/562fb685a3e575771b599091 --size 5```
### Clone

```h1 storage disk create --project 5f64e2468c71177993874510 --name simple-disk --service /billing/project/platform/service/562fb685a3e575771b599091 --size 5 --source /storage/pl-waw-1/project/5f64e2468c71177993874510/disk/5f577a24494c5cfdec7830e5```

## Global options

| Option name                                        | Description                                                                                                                                                 |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                                                  |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                                                                      |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                                             |
| ```--name {name}```                                | Disk name                                                                                                                                                   |
| ```--service {id-or-uri}```                        | Disk service. Provide ID or URI of billing/service                                                                                                          |
| ```--size {size}```                                | Disk size                                                                                                                                                   |
| ```--source {source}```                            | Disk source. Specifies one of the following: <br>- disk. Provide ID or URI of storage/disk<br>- file. Provide URI of local file eg. 'file://./my-file.bin'. |
| ```--vm {id-or-uri}```                             | Disk vm. Provide ID or URI of compute/vm. Requires permissions compute/vm/use                                                                               |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                                              |
| ```--no-progress```                                | -                                                                                                                                                           |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                                            |
| ```--help```                                       | Show help message and exit.                                                                                                                                 |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                                          |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                                                     |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour, size:size\}                                                    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                                                    |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                                                    |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                                          |

## Operation options

| Option name                                        | Description                                                                                                                                                 |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                                                  |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                                                                      |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                                             |
| ```--name {name}```                                | Disk name                                                                                                                                                   |
| ```--service {id-or-uri}```                        | Disk service. Provide ID or URI of billing/service                                                                                                          |
| ```--size {size}```                                | Disk size                                                                                                                                                   |
| ```--source {source}```                            | Disk source. Specifies one of the following: <br>- disk. Provide ID or URI of storage/disk<br>- file. Provide URI of local file eg. 'file://./my-file.bin'. |
| ```--vm {id-or-uri}```                             | Disk vm. Provide ID or URI of compute/vm. Requires permissions compute/vm/use                                                                               |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                                              |
| ```--no-progress```                                | -                                                                                                                                                           |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                                            |
| ```--help```                                       | Show help message and exit.                                                                                                                                 |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                                          |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                                                     |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour, size:size\}                                                    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                                                    |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                                                    |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                                          |

# Parent commands

* [h1 storage disk](./../README.md)
* [h1 storage](./../../README.md)
* [h1](./../../../README.md)
