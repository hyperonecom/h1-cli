
# h1 storage disk

Management of disk resource

## Synopsis

```bash
$ h1 storage disk <options>
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

* [h1 storage disk create](./create/README.md)
* [h1 storage disk list](./list/README.md)
* [h1 storage disk show](./show/README.md)
* [h1 storage disk update](./update/README.md)
* [h1 storage disk delete](./delete/README.md)
* [h1 storage disk resize](./resize/README.md)
* [h1 storage disk detach](./detach/README.md)
* [h1 storage disk download](./download/README.md)
* [h1 storage disk transfer](./transfer/README.md)
* [h1 storage disk metric](./metric/README.md)
* [h1 storage disk service](./service/README.md)
* [h1 storage disk tag](./tag/README.md)
* [h1 storage disk event](./event/README.md)

# Parent commands

* [h1 storage](./../README.md)
* [h1](./../../README.md)
