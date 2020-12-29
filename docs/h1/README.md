
# h1

Management for cloud services of HyperOne

## Synopsis

```bash
$ h1 <options>
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

* [h1 iam](./iam/README.md)
* [h1 provider](./provider/README.md)
* [h1 recovery](./recovery/README.md)
* [h1 database](./database/README.md)
* [h1 insight](./insight/README.md)
* [h1 container](./container/README.md)
* [h1 website](./website/README.md)
* [h1 dns](./dns/README.md)
* [h1 storage](./storage/README.md)
* [h1 networking](./networking/README.md)
* [h1 compute](./compute/README.md)
* [h1 billing](./billing/README.md)
* [h1 vmhost](./vmhost/README.md)
* [h1 support](./support/README.md)
* [h1 auth](./auth/README.md)
* [h1 config](./config/README.md)
* [h1 version](./version/README.md)
