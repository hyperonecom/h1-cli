
# h1 compute vm create

Create compute/vm

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/compute_project_vm_create)

## Synopsis

$ h1 compute vm create <options>

## Example


### Simple

```h1 compute vm create --project 5f64e2468c71177993874510 --name simple-vm --service /billing/project/platform/service/58ac418566e7477bd7bc4e0c --credential type=plain,value=xxx```

## Global options

| Option name                                              | Description                                                                                    |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                              | Project Id                                                                                     |
| ```--location {id-or-uri}```                             | Location Id. Default value is pl-waw-1                                                         |
| ```--x-idempotency-key {x-idempotency-key}```            | Idempotency key                                                                                |
| ```--name {name}```                                      | Vm name                                                                                        |
| ```--service {id-or-uri}```                              | Vm service. Provide ID or URI of billing/service                                               |
| ```--image {id-or-uri}```                                | Vm image. Provide ID or URI of storage/image. Requires permissions storage/image/use           |
| ```--iso {id-or-uri}```                                  | Vm iso. Provide ID or URI of storage/iso. Requires permissions storage/iso/use                 |
| ```--username {username}```                              | Vm username                                                                                    |
| ```--user-metadata {user-metadata}```                    | Vm userMetadata                                                                                |
| ```--start```                                            | Vm start. Defaults is true. Default value is true                                              |
| ```--credential {type=type,value=value}```               | Credential collection                                                                          |
| ```--disk {name=name,service=service,size=size}```       | Disk collection                                                                                |
| ```--netadp {network=network,firewall=firewall,ip=ip}``` | Netadp collection                                                                              |
| ```--tag {key=key,value=value}```                        | Tag collection                                                                                 |
| ```--skeleton```                                         | -                                                                                              |
| ```--help```                                             | Show help message and exit.                                                                    |
| ```--verbose```                                          | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}```       | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                                    | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                             | Passport file. Default value is ~/.h1/passport.json, if available.                             |
| ```--as {uri}```                                         | Act as another actor eg. service account                                                       |
| ```--no-wait```                                          | In case of queued event do not wait for completion                                             |

## Operation options

| Option name                                              | Description                                                                                    |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                              | Project Id                                                                                     |
| ```--location {id-or-uri}```                             | Location Id. Default value is pl-waw-1                                                         |
| ```--x-idempotency-key {x-idempotency-key}```            | Idempotency key                                                                                |
| ```--name {name}```                                      | Vm name                                                                                        |
| ```--service {id-or-uri}```                              | Vm service. Provide ID or URI of billing/service                                               |
| ```--image {id-or-uri}```                                | Vm image. Provide ID or URI of storage/image. Requires permissions storage/image/use           |
| ```--iso {id-or-uri}```                                  | Vm iso. Provide ID or URI of storage/iso. Requires permissions storage/iso/use                 |
| ```--username {username}```                              | Vm username                                                                                    |
| ```--user-metadata {user-metadata}```                    | Vm userMetadata                                                                                |
| ```--start```                                            | Vm start. Defaults is true. Default value is true                                              |
| ```--credential {type=type,value=value}```               | Credential collection                                                                          |
| ```--disk {name=name,service=service,size=size}```       | Disk collection                                                                                |
| ```--netadp {network=network,firewall=firewall,ip=ip}``` | Netadp collection                                                                              |
| ```--tag {key=key,value=value}```                        | Tag collection                                                                                 |
| ```--skeleton```                                         | -                                                                                              |
| ```--help```                                             | Show help message and exit.                                                                    |
| ```--verbose```                                          | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}```       | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                                    | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                             | Passport file. Default value is ~/.h1/passport.json, if available.                             |
| ```--as {uri}```                                         | Act as another actor eg. service account                                                       |
| ```--no-wait```                                          | In case of queued event do not wait for completion                                             |

# Parent commands

* [h1 compute vm](./../README.md)
* [h1 compute](./../../README.md)
* [h1](./../../../README.md)
