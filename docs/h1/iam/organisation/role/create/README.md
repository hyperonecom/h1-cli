
# h1 iam organisation role create

Create iam/role

## Synopsis

```bash
$ h1 iam organisation role create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_organisation_role_create)

## Global options

| Option name                                        | Description                                                                                                                         |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ```--organisation {id-or-uri}```                   | Organisation Id                                                                                                                     |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                     |
| ```--name {name}```                                | Role name                                                                                                                           |
| ```--service {id-or-uri}```                        | Role service. Provide ID or URI of billing/service. Defaults is 5e679c282b39c4353cd86f34. Default value is 5e679c282b39c4353cd86f34 |
| ```--description {description}```                  | Role description                                                                                                                    |
| ```--permission {value=value}```                   | Permission collection                                                                                                               |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                      |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                    |
| ```--help```                                       | Show help message and exit.                                                                                                         |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                  |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                             |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}                                       |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                            |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                            |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                  |

## Operation options

| Option name                                        | Description                                                                                                                         |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ```--organisation {id-or-uri}```                   | Organisation Id                                                                                                                     |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                                                     |
| ```--name {name}```                                | Role name                                                                                                                           |
| ```--service {id-or-uri}```                        | Role service. Provide ID or URI of billing/service. Defaults is 5e679c282b39c4353cd86f34. Default value is 5e679c282b39c4353cd86f34 |
| ```--description {description}```                  | Role description                                                                                                                    |
| ```--permission {value=value}```                   | Permission collection                                                                                                               |
| ```--tag {key=key,value=value}```                  | Tag collection                                                                                                                      |
| ```--skeleton```                                   | Display intermediary representation of operation                                                                                    |
| ```--help```                                       | Show help message and exit.                                                                                                         |
| ```--verbose```                                    | Make the operation more talkative.                                                                                                  |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                                                             |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}                                       |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                                                            |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                                                            |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                                                                  |

# Parent commands

* [h1 iam organisation role](./../README.md)
* [h1 iam organisation](./../../README.md)
* [h1 iam](./../../../README.md)
* [h1](./../../../../README.md)
