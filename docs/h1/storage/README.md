
# h1 storage

Management of storage namespace

## Synopsis

$ h1 storage <options>

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

* [h1 storage disk](./disk/README.md)
* [h1 storage image](./image/README.md)
* [h1 storage iso](./iso/README.md)
* [h1 storage vault](./vault/README.md)
* [h1 storage bucket](./bucket/README.md)

# Parent commands

* [h1](./../README.md)
