
# h1 iam project quota limit update

Update iam/project.limit

## Synopsis

```bash
$ h1 iam project quota limit update <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_project_quota_limit_patch)

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--quota {id-or-uri}```                          | quotaId                                                                  |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--user {user}```                                | Limit user. Requires permissions iam/project.quota.user/update           |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{value:@\}                   |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

## Operation options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--quota {id-or-uri}```                          | quotaId                                                                  |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--user {user}```                                | Limit user. Requires permissions iam/project.quota.user/update           |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{value:@\}                   |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 iam project quota limit](./../README.md)
* [h1 iam project quota](./../../README.md)
* [h1 iam project](./../../../README.md)
* [h1 iam](./../../../../README.md)
* [h1](./../../../../../README.md)
