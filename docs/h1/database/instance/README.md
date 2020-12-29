
# h1 database instance

Management of instance resource

## Synopsis

```bash
$ h1 database instance <options>
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

* [h1 database instance create](./create/README.md)
* [h1 database instance list](./list/README.md)
* [h1 database instance show](./show/README.md)
* [h1 database instance update](./update/README.md)
* [h1 database instance delete](./delete/README.md)
* [h1 database instance start](./start/README.md)
* [h1 database instance stop](./stop/README.md)
* [h1 database instance transfer](./transfer/README.md)
* [h1 database instance credential](./credential/README.md)
* [h1 database instance connect](./connect/README.md)
* [h1 database instance service](./service/README.md)
* [h1 database instance tag](./tag/README.md)
* [h1 database instance event](./event/README.md)

# Parent commands

* [h1 database](./../README.md)
* [h1](./../../README.md)
