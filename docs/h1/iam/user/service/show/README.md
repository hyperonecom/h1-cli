
# h1 iam user service show

Get iam/user.service

## Synopsis

```bash
$ h1 iam user service show <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_user_service_get)

## Operation options

| Option name                 | Description                                      |
| --------------------------- | ------------------------------------------------ |
| ```--service {id-or-uri}``` | serviceId                                        |
| ```--user {id-or-uri}```    | User Id                                          |
| ```--skeleton```            | Display intermediary representation of operation |

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

* [h1 iam user service](./../README.md)
* [h1 iam user](./../../README.md)
* [h1 iam](./../../../README.md)
* [h1](./../../../../README.md)
