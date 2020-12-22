
# h1 storage vault

Management of vault resource

## Synopsis

$ h1 storage vault <options>

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

* [h1 storage vault create](./create/README.md)
* [h1 storage vault list](./list/README.md)
* [h1 storage vault show](./show/README.md)
* [h1 storage vault update](./update/README.md)
* [h1 storage vault delete](./delete/README.md)
* [h1 storage vault start](./start/README.md)
* [h1 storage vault stop](./stop/README.md)
* [h1 storage vault resize](./resize/README.md)
* [h1 storage vault snapshot](./snapshot/README.md)
* [h1 storage vault credential](./credential/README.md)
* [h1 storage vault connect](./connect/README.md)
* [h1 storage vault service](./service/README.md)
* [h1 storage vault tag](./tag/README.md)
* [h1 storage vault event](./event/README.md)
* [h1 storage vault ssh](./ssh/README.md)
* [h1 storage vault sftp](./sftp/README.md)

# Parent commands

* [h1 storage](./../README.md)
* [h1](./../../README.md)
