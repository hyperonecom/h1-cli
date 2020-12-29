
# h1 dns zone

Management of zone resource

## Synopsis

```bash
$ h1 dns zone <options>
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

* [h1 dns zone create](./create/README.md)
* [h1 dns zone list](./list/README.md)
* [h1 dns zone show](./show/README.md)
* [h1 dns zone update](./update/README.md)
* [h1 dns zone delete](./delete/README.md)
* [h1 dns zone recordset](./recordset/README.md)
* [h1 dns zone service](./service/README.md)
* [h1 dns zone tag](./tag/README.md)
* [h1 dns zone event](./event/README.md)

# Parent commands

* [h1 dns](./../README.md)
* [h1](./../../README.md)
