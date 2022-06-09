
# h1 storage disk transfer

Transfer storage/disk

## Synopsis

```bash
$ h1 storage disk transfer <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/storage_project_disk_transfer)

## Operation options

| Option name                                   | Description                                                                              |
| --------------------------------------------- | ---------------------------------------------------------------------------------------- |
| ```--x-dry-run {x-dry-run}```                 | Dry run                                                                                  |
| ```--x-idempotency-key {x-idempotency-key}``` | Idempotency key                                                                          |
| ```--disk {id-or-uri}```                      | Disk Id                                                                                  |
| ```--location {id-or-uri}```                  | Location Id. Default value is pl-waw-1                                                   |
| ```--project {id-or-uri}```                   | Project Id                                                                               |
| ```--project {id-or-uri}```                   | Disk project. Provide ID or URI of iam/project. Requires permissions storage/disk/create |
| ```--skeleton```                              | Display intermediary representation of operation                                         |

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

* [h1 storage disk](./../README.md)
* [h1 storage](./../../README.md)
* [h1](./../../../README.md)