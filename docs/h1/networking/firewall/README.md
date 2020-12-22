
# h1 networking firewall

Management of firewall resource

## Synopsis

$ h1 networking firewall <options>

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

* [h1 networking firewall create](./create/README.md)
* [h1 networking firewall list](./list/README.md)
* [h1 networking firewall show](./show/README.md)
* [h1 networking firewall update](./update/README.md)
* [h1 networking firewall delete](./delete/README.md)
* [h1 networking firewall transfer](./transfer/README.md)
* [h1 networking firewall ingress](./ingress/README.md)
* [h1 networking firewall egress](./egress/README.md)
* [h1 networking firewall service](./service/README.md)
* [h1 networking firewall tag](./tag/README.md)
* [h1 networking firewall event](./event/README.md)

# Parent commands

* [h1 networking](./../README.md)
* [h1](./../../README.md)
