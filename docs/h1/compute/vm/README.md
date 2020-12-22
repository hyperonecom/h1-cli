
# h1 compute vm

Management of vm resource

## Synopsis

$ h1 compute vm <options>

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

* [h1 compute vm create](./create/README.md)
* [h1 compute vm list](./list/README.md)
* [h1 compute vm show](./show/README.md)
* [h1 compute vm update](./update/README.md)
* [h1 compute vm delete](./delete/README.md)
* [h1 compute vm start](./start/README.md)
* [h1 compute vm restart](./restart/README.md)
* [h1 compute vm stop](./stop/README.md)
* [h1 compute vm turnoff](./turnoff/README.md)
* [h1 compute vm password_reset](./password_reset/README.md)
* [h1 compute vm flavour](./flavour/README.md)
* [h1 compute vm serialport](./serialport/README.md)
* [h1 compute vm disk](./disk/README.md)
* [h1 compute vm iso](./iso/README.md)
* [h1 compute vm metric](./metric/README.md)
* [h1 compute vm connect](./connect/README.md)
* [h1 compute vm service](./service/README.md)
* [h1 compute vm tag](./tag/README.md)
* [h1 compute vm event](./event/README.md)
* [h1 compute vm ssh](./ssh/README.md)

# Parent commands

* [h1 compute](./../README.md)
* [h1](./../../README.md)
