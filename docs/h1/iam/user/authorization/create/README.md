
# h1 iam user authorization create

Create iam/user.authorization

## Synopsis

```bash
$ h1 iam user authorization create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_user_authorization_create)

## Operation options

| Option name                     | Description                                                     |
| ------------------------------- | --------------------------------------------------------------- |
| ```--user {id-or-uri}```        | User Id                                                         |
| ```--name {name}```             | Authorization name                                              |
| ```--application {id-or-uri}``` | Authorization application. Provide ID or URI of iam/application |
| ```--skeleton```                | Display intermediary representation of operation                |

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}          |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 iam user authorization](./../README.md)
* [h1 iam user](./../../README.md)
* [h1 iam](./../../../README.md)
* [h1](./../../../../README.md)