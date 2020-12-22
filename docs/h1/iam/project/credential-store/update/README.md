
# h1 iam project credential-store update

Update iam/project.credentialStore

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_project_credentialStore_patch)

## Synopsis

$ h1 iam project credential-store update <options>

## Global options

| Option name                                        | Description                                                                        |
| -------------------------------------------------- | ---------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                         |
| ```--credential-store {id-or-uri}```               | credentialStoreId                                                                  |
| ```--name {name}```                                | CredentialStore name. Requires permissions iam/project.credentialStore.name/update |
| ```--skeleton```                                   | -                                                                                  |
| ```--help```                                       | Show help message and exit.                                                        |
| ```--verbose```                                    | Make the operation more talkative.                                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                            |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}                    |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.                 |
| ```--as {uri}```                                   | Act as another actor eg. service account                                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                 |

## Operation options

| Option name                                        | Description                                                                        |
| -------------------------------------------------- | ---------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                         |
| ```--credential-store {id-or-uri}```               | credentialStoreId                                                                  |
| ```--name {name}```                                | CredentialStore name. Requires permissions iam/project.credentialStore.name/update |
| ```--skeleton```                                   | -                                                                                  |
| ```--help```                                       | Show help message and exit.                                                        |
| ```--verbose```                                    | Make the operation more talkative.                                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                            |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}                    |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.                 |
| ```--as {uri}```                                   | Act as another actor eg. service account                                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                 |

# Parent commands

* [h1 iam project credential-store](./../README.md)
* [h1 iam project](./../../README.md)
* [h1 iam](./../../../README.md)
* [h1](./../../../../README.md)
