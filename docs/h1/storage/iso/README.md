
# h1 storage iso

Management of iso resource

## Synopsis

$ h1 storage iso <options>

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

* [h1 storage iso create](./create/README.md)
* [h1 storage iso list](./list/README.md)
* [h1 storage iso show](./show/README.md)
* [h1 storage iso update](./update/README.md)
* [h1 storage iso delete](./delete/README.md)
* [h1 storage iso detach](./detach/README.md)
* [h1 storage iso transfer](./transfer/README.md)
* [h1 storage iso service](./service/README.md)
* [h1 storage iso tag](./tag/README.md)
* [h1 storage iso event](./event/README.md)

# Parent commands

* [h1 storage](./../README.md)
* [h1](./../../README.md)
