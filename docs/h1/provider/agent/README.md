
# h1 provider agent

Management of agent resource

## Synopsis

```bash
$ h1 provider agent <options>
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

* [h1 provider agent create](./create/README.md)
* [h1 provider agent list](./list/README.md)
* [h1 provider agent show](./show/README.md)
* [h1 provider agent update](./update/README.md)
* [h1 provider agent delete](./delete/README.md)
* [h1 provider agent start](./start/README.md)
* [h1 provider agent suspend](./suspend/README.md)
* [h1 provider agent inspect](./inspect/README.md)
* [h1 provider agent transfer](./transfer/README.md)
* [h1 provider agent credential](./credential/README.md)
* [h1 provider agent enabled-service](./enabled-service/README.md)
* [h1 provider agent resource](./resource/README.md)
* [h1 provider agent metric](./metric/README.md)
* [h1 provider agent service](./service/README.md)
* [h1 provider agent tag](./tag/README.md)
* [h1 provider agent event](./event/README.md)

# Parent commands

* [h1 provider](./../README.md)
* [h1](./../../README.md)
