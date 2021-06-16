
# h1 insight journal log list

Get insight/journal.log

## Synopsis

```bash
$ h1 insight journal log list <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/insight_project_journal_log_get)

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--tag {tag}```                                  | tag                                                                      |
| ```--tail {tail}```                                | tail                                                                     |
| ```--follow {follow}```                            | follow                                                                   |
| ```--until {until}```                              | until                                                                    |
| ```--since {since}```                              | since                                                                    |
| ```--journal {id-or-uri}```                        | Journal Id                                                               |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                   |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string                                                    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

## Operation options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--tag {tag}```                                  | tag                                                                      |
| ```--tail {tail}```                                | tail                                                                     |
| ```--follow {follow}```                            | follow                                                                   |
| ```--until {until}```                              | until                                                                    |
| ```--since {since}```                              | since                                                                    |
| ```--journal {id-or-uri}```                        | Journal Id                                                               |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                   |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string                                                    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 insight journal log](./../README.md)
* [h1 insight journal](./../../README.md)
* [h1 insight](./../../../README.md)
* [h1](./../../../../README.md)
