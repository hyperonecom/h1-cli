
# h1 insight journal

Management of journal resource

## Synopsis

$ h1 insight journal <options>

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

* [h1 insight journal create](./create/README.md)
* [h1 insight journal list](./list/README.md)
* [h1 insight journal show](./show/README.md)
* [h1 insight journal update](./update/README.md)
* [h1 insight journal delete](./delete/README.md)
* [h1 insight journal transfer](./transfer/README.md)
* [h1 insight journal log](./log/README.md)
* [h1 insight journal credential](./credential/README.md)
* [h1 insight journal service](./service/README.md)
* [h1 insight journal tag](./tag/README.md)
* [h1 insight journal event](./event/README.md)
* [h1 insight journal logger](./logger/README.md)
* [h1 insight journal stream](./stream/README.md)

# Parent commands

* [h1 insight](./../README.md)
* [h1](./../../README.md)
