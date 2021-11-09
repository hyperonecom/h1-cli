
# h1 iam organisation policy tag create

Create iam/policy.tag

## Synopsis

```bash
$ h1 iam organisation policy tag create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_organisation_policy_tag_create)

## Operation options

| Option name                      | Description                                      |
| -------------------------------- | ------------------------------------------------ |
| ```--policy {id-or-uri}```       | Policy Id                                        |
| ```--organisation {id-or-uri}``` | Organisation Id                                  |
| ```--key {key}```                | Tag key                                          |
| ```--value {value}```            | Tag value                                        |
| ```--skeleton```                 | Display intermediary representation of operation |

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}                     |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 iam organisation policy tag](./../README.md)
* [h1 iam organisation policy](./../../README.md)
* [h1 iam organisation](./../../../README.md)
* [h1 iam](./../../../../README.md)
* [h1](./../../../../../README.md)
