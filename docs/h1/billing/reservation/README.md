
# h1 billing reservation

Management of reservation resource

## Synopsis

```bash
$ h1 billing reservation <options>
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

* [h1 billing reservation create](./create/README.md)
* [h1 billing reservation list](./list/README.md)
* [h1 billing reservation show](./show/README.md)
* [h1 billing reservation update](./update/README.md)
* [h1 billing reservation delete](./delete/README.md)
* [h1 billing reservation assign](./assign/README.md)
* [h1 billing reservation extend](./extend/README.md)
* [h1 billing reservation service](./service/README.md)
* [h1 billing reservation tag](./tag/README.md)
* [h1 billing reservation event](./event/README.md)

# Parent commands

* [h1 billing](./../README.md)
* [h1](./../../README.md)
