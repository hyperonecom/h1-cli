
# h1 insight journal stream

Stream messages from journal

## Synopsis

```bash
$ h1 insight journal stream <options>
```

## Global options

| Option name                                        | Description                                                                                      |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ```--journal {journal}```                          | -                                                                                                |
| ```--project {project}```                          | -                                                                                                |
| ```--log-file-output {log-file-output}```          | Path of the output json log file. "stdout" is a specially handled file.. Default value is stdout |
| ```--head {head}```                                | Maximum number of lines to show. All if skipped.                                                 |
| ```--help```                                       | Show help message and exit.                                                                      |
| ```--verbose```                                    | Make the operation more talkative.                                                               |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                          |
| ```--query {query}```                              | JMESPath query string                                                                            |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                         |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                         |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                               |
| ```--v, --version```                               | Show version and exit.                                                                           |

## Operation options

| Option name                                        | Description                                                                                      |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ```--journal {journal}```                          | -                                                                                                |
| ```--project {project}```                          | -                                                                                                |
| ```--log-file-output {log-file-output}```          | Path of the output json log file. "stdout" is a specially handled file.. Default value is stdout |
| ```--head {head}```                                | Maximum number of lines to show. All if skipped.                                                 |
| ```--help```                                       | Show help message and exit.                                                                      |
| ```--verbose```                                    | Make the operation more talkative.                                                               |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                          |
| ```--query {query}```                              | JMESPath query string                                                                            |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                         |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                         |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                               |
| ```--v, --version```                               | Show version and exit.                                                                           |

# Parent commands

* [h1 insight journal](./../README.md)
* [h1 insight](./../../README.md)
* [h1](./../../../README.md)
