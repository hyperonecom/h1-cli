
# h1 storage vault create

Create storage/vault

## Synopsis

```bash
$ h1 storage vault create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/storage_project_vault_create)

## Example


### Simple

```h1 storage vault create --project 5f64e2468c71177993874510 --name simple-vault --size 10```

## Global options

| Option name                                        | Description                                                                                                                          |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                           |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                                               |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                      |
| ```--name {name}```                                | Vault name                                                                                                                           |
| ```--service {id-or-uri}```                        | Vault service. Provide ID or URI of billing/service. Defaults is 5a0332c4eb8f4ed95c206a12. Default value is 5a0332c4eb8f4ed95c206a12 |
| ```--size {size}```                                | Vault size                                                                                                                           |
| ```--source {uri}```                               | Vault source. Provide URI of storage/vault.snapshot. Requires permissions storage/vault.snapshot/use                                 |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                       |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                     |
| ```--help```                                       | Show help message and exit.                                                                                                          |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                   |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                              |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour, size:size\}                             |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                             |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                             |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                   |
| ```--v, --version```                               | Show version and exit.                                                                                                               |

## Operation options

| Option name                                        | Description                                                                                                                          |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                                                                                           |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                                                               |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                      |
| ```--name {name}```                                | Vault name                                                                                                                           |
| ```--service {id-or-uri}```                        | Vault service. Provide ID or URI of billing/service. Defaults is 5a0332c4eb8f4ed95c206a12. Default value is 5a0332c4eb8f4ed95c206a12 |
| ```--size {size}```                                | Vault size                                                                                                                           |
| ```--source {uri}```                               | Vault source. Provide URI of storage/vault.snapshot. Requires permissions storage/vault.snapshot/use                                 |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                       |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                     |
| ```--help```                                       | Show help message and exit.                                                                                                          |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                   |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                              |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour, size:size\}                             |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                             |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                             |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                   |
| ```--v, --version```                               | Show version and exit.                                                                                                               |

# Parent commands

* [h1 storage vault](./../README.md)
* [h1 storage](./../../README.md)
* [h1](./../../../README.md)
