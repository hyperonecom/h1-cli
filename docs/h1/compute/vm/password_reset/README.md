
# h1 compute vm password_reset

Password reset compute/vm

## Synopsis

```bash
$ h1 compute vm password_reset <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/compute_project_vm_password_reset)

## Common options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--vm {id-or-uri}```                             | Vm Id                                                                                          |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--user-name {user-name}```                      | Vm userName                                                                                    |
| ```--modulus {modulus}```                          | Vm modulus                                                                                     |
| ```--exponent {exponent}```                        | Vm exponent                                                                                    |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |
| ```--v, --version```                               | Show version and exit.                                                                         |

## Operation options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--vm {id-or-uri}```                             | Vm Id                                                                                          |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--user-name {user-name}```                      | Vm userName                                                                                    |
| ```--modulus {modulus}```                          | Vm modulus                                                                                     |
| ```--exponent {exponent}```                        | Vm exponent                                                                                    |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |
| ```--v, --version```                               | Show version and exit.                                                                         |

# Parent commands

* [h1 compute vm](./../README.md)
* [h1 compute](./../../README.md)
* [h1](./../../../README.md)
