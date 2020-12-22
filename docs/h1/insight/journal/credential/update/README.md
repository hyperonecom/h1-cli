
# h1 insight journal credential update

Update insight/journal.credential

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/insight_project_journal_credential_patch)

## Synopsis

$ h1 insight journal credential update <options>

## Example


### Simple

```h1 insight journal credential update --project 5f64e2468c71177993874510 --journal 5f577a24494c5cfdec7830e5 --credential 5f60cbbe494c5cfdec81cc6b --name renamed-credential-journal```

## Global options

| Option name                                        | Description                                                                  |
| -------------------------------------------------- | ---------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                   |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                       |
| ```--journal {id-or-uri}```                        | Journal Id                                                                   |
| ```--credential {id-or-uri}```                     | credentialId                                                                 |
| ```--name {name}```                                | Credential name. Requires permissions insight/journal.credential.name/update |
| ```--skeleton```                                   | -                                                                            |
| ```--help```                                       | Show help message and exit.                                                  |
| ```--verbose```                                    | Make the operation more talkative.                                           |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                      |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}              |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.           |
| ```--as {uri}```                                   | Act as another actor eg. service account                                     |
| ```--no-wait```                                    | In case of queued event do not wait for completion                           |

## Operation options

| Option name                                        | Description                                                                  |
| -------------------------------------------------- | ---------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                   |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                       |
| ```--journal {id-or-uri}```                        | Journal Id                                                                   |
| ```--credential {id-or-uri}```                     | credentialId                                                                 |
| ```--name {name}```                                | Credential name. Requires permissions insight/journal.credential.name/update |
| ```--skeleton```                                   | -                                                                            |
| ```--help```                                       | Show help message and exit.                                                  |
| ```--verbose```                                    | Make the operation more talkative.                                           |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                      |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}              |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available.           |
| ```--as {uri}```                                   | Act as another actor eg. service account                                     |
| ```--no-wait```                                    | In case of queued event do not wait for completion                           |

# Parent commands

* [h1 insight journal credential](./../README.md)
* [h1 insight journal](./../../README.md)
* [h1 insight](./../../../README.md)
* [h1](./../../../../README.md)
