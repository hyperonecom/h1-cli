
# h1 recovery backup create

Create recovery/backup

## Synopsis

```bash
$ h1 recovery backup create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/recovery_project_backup_create)

## Common options

| Option name                                        | Description                                                                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                                                |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                                                                    |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                                           |
| ```--name {name}```                                | Backup name                                                                                                                                               |
| ```--source {source}```                            | Backup source. Specifies one of the following: <br>- website. Provide ID or URI of website/instance<br>- database. Provide ID or URI of database/instance |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                                            |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                                          |
| ```--help```                                       | Show help message and exit.                                                                                                                               |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                                        |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                                                   |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour, size:size\}                                                  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                                                  |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                                                  |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                                        |
| ```--v, --version```                               | Show version and exit.                                                                                                                                    |

## Operation options

| Option name                                        | Description                                                                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                                                |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                                                                    |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                                           |
| ```--name {name}```                                | Backup name                                                                                                                                               |
| ```--source {source}```                            | Backup source. Specifies one of the following: <br>- website. Provide ID or URI of website/instance<br>- database. Provide ID or URI of database/instance |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                                            |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                                          |
| ```--help```                                       | Show help message and exit.                                                                                                                               |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                                        |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                                                   |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour, size:size\}                                                  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                                                  |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                                                  |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                                        |
| ```--v, --version```                               | Show version and exit.                                                                                                                                    |

# Parent commands

* [h1 recovery backup](./../README.md)
* [h1 recovery](./../../README.md)
* [h1](./../../../README.md)