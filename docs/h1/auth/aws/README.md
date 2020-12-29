
# h1 auth aws

Authenticate using AWS identity

## Synopsis

```bash
$ h1 auth aws <options>
```

## Global options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--access-key-id {access-key-id}```              | AWS Access Key Id                                                        |
| ```--secret-access-key {secret-access-key}```      | AWS Secret Access Key (only used to generate a signature)                |
| ```--session-token {session-token}```              | AWS Session Token                                                        |
| ```--discovery```                                  | Use standard AWS mechanisms to find credential                           |
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
| ```--access-key-id {access-key-id}```              | AWS Access Key Id                                                        |
| ```--secret-access-key {secret-access-key}```      | AWS Secret Access Key (only used to generate a signature)                |
| ```--session-token {session-token}```              | AWS Session Token                                                        |
| ```--discovery```                                  | Use standard AWS mechanisms to find credential                           |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string                                                    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |

# Parent commands

* [h1 auth](./../README.md)
* [h1](./../../README.md)
