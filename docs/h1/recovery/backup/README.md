
# h1 recovery backup

Management of backup resource

## Synopsis

$ h1 recovery backup <options>

## Global options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string                                              |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

## Operation options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string                                              |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

# Available commands

* [h1 recovery backup create](./create/README.md)
* [h1 recovery backup list](./list/README.md)
* [h1 recovery backup show](./show/README.md)
* [h1 recovery backup update](./update/README.md)
* [h1 recovery backup delete](./delete/README.md)
* [h1 recovery backup export](./export/README.md)
* [h1 recovery backup metric](./metric/README.md)
* [h1 recovery backup service](./service/README.md)
* [h1 recovery backup tag](./tag/README.md)
* [h1 recovery backup event](./event/README.md)

# Parent commands

* [h1 recovery](./../README.md)
* [h1](./../../README.md)
