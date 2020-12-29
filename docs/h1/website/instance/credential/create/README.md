
# h1 website instance credential create

Create website/instance.credential

## Synopsis

```bash
$ h1 website instance credential create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/website_project_instance_credential_create)

## Example


### Simple

```h1 website instance credential create --project 5f64e2468c71177993874510 --instance 5f577a24494c5cfdec7830e5 --name instance-credential --type plain --value xxxxxx```

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                   |
| ```--instance {id-or-uri}```                       | Instance Id                                                              |
| ```--name {name}```                                | Credential name                                                          |
| ```--type {ssh,sha512,plain}```                    | Credential type                                                          |
| ```--value {value}```                              | Credential value                                                         |
| ```--token {token}```                              | Credential token                                                         |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}          |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

## Operation options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                   |
| ```--instance {id-or-uri}```                       | Instance Id                                                              |
| ```--name {name}```                                | Credential name                                                          |
| ```--type {ssh,sha512,plain}```                    | Credential type                                                          |
| ```--value {value}```                              | Credential value                                                         |
| ```--token {token}```                              | Credential token                                                         |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}          |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 website instance credential](./../README.md)
* [h1 website instance](./../../README.md)
* [h1 website](./../../../README.md)
* [h1](./../../../../README.md)
