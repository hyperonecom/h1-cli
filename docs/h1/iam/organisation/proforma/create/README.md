
# h1 iam organisation proforma create

Create iam/organisation.proforma

## Synopsis

```bash
$ h1 iam organisation proforma create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_organisation_proforma_create)

## Common options

| Option name                                        | Description                                                                              |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| ```--organisation {id-or-uri}```                   | Organisation Id                                                                          |
| ```--amount {amount}```                            | Proforma amount                                                                          |
| ```--project {id-or-uri}```                        | Proforma project. Provide ID or URI of iam/project. Requires permissions iam/project/get |
| ```--skeleton```                                   | Display intermediary representation of operation                                         |
| ```--help```                                       | Show help message and exit.                                                              |
| ```--verbose```                                    | Make the operation more talkative.                                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}                                     |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                 |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                       |
| ```--v, --version```                               | Show version and exit.                                                                   |

## Operation options

| Option name                                        | Description                                                                              |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| ```--organisation {id-or-uri}```                   | Organisation Id                                                                          |
| ```--amount {amount}```                            | Proforma amount                                                                          |
| ```--project {id-or-uri}```                        | Proforma project. Provide ID or URI of iam/project. Requires permissions iam/project/get |
| ```--skeleton```                                   | Display intermediary representation of operation                                         |
| ```--help```                                       | Show help message and exit.                                                              |
| ```--verbose```                                    | Make the operation more talkative.                                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}                                     |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                 |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                       |
| ```--v, --version```                               | Show version and exit.                                                                   |

# Parent commands

* [h1 iam organisation proforma](./../README.md)
* [h1 iam organisation](./../../README.md)
* [h1 iam](./../../../README.md)
* [h1](./../../../../README.md)