
# h1 container registry

Management of registry resource

## Synopsis

```bash
$ h1 container registry <options>
```

## Global options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string                                                    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |

## Operation options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string                                                    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |

# Available commands

* [h1 container registry helper](./helper/README.md)
* [h1 container registry create](./create/README.md)
* [h1 container registry list](./list/README.md)
* [h1 container registry show](./show/README.md)
* [h1 container registry update](./update/README.md)
* [h1 container registry delete](./delete/README.md)
* [h1 container registry start](./start/README.md)
* [h1 container registry stop](./stop/README.md)
* [h1 container registry transfer](./transfer/README.md)
* [h1 container registry repository](./repository/README.md)
* [h1 container registry credential](./credential/README.md)
* [h1 container registry domain](./domain/README.md)
* [h1 container registry service](./service/README.md)
* [h1 container registry tag](./tag/README.md)
* [h1 container registry event](./event/README.md)

# Parent commands

* [h1 container](./../README.md)
* [h1](./../../README.md)
