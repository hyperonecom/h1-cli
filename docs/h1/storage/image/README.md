
# h1 storage image

Management of image resource

## Synopsis

```bash
$ h1 storage image <options>
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

* [h1 storage image create](./create/README.md)
* [h1 storage image list](./list/README.md)
* [h1 storage image show](./show/README.md)
* [h1 storage image update](./update/README.md)
* [h1 storage image delete](./delete/README.md)
* [h1 storage image transfer](./transfer/README.md)
* [h1 storage image service](./service/README.md)
* [h1 storage image tag](./tag/README.md)
* [h1 storage image event](./event/README.md)

# Parent commands

* [h1 storage](./../README.md)
* [h1](./../../README.md)
