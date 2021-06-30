
# h1 iam project application credential create

Create iam/application.credential

## Synopsis

```bash
$ h1 iam project application credential create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_project_application_credential_create)

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--application {id-or-uri}```                    | Application Id                                                           |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--name {name}```                                | Credential name                                                          |
| ```--type {sha512, plain}```                       | Credential type                                                          |
| ```--value {value}```                              | Credential value                                                         |
| ```--token {token}```                              | Credential token                                                         |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}          |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

## Operation options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--application {id-or-uri}```                    | Application Id                                                           |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--name {name}```                                | Credential name                                                          |
| ```--type {sha512, plain}```                       | Credential type                                                          |
| ```--value {value}```                              | Credential value                                                         |
| ```--token {token}```                              | Credential token                                                         |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}          |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 iam project application credential](./../README.md)
* [h1 iam project application](./../../README.md)
* [h1 iam project](./../../../README.md)
* [h1 iam](./../../../../README.md)
* [h1](./../../../../../README.md)