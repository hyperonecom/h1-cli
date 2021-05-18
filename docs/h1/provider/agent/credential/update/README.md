
# h1 provider agent credential update

Update provider/agent.credential

## Synopsis

```bash
$ h1 provider agent credential update <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/provider_project_agent_credential_patch)

## Example


### Simple

```bash
h1 provider agent credential update \ 
	--project 5f64e2468c71177993874510 \ 
	--agent 5f577a24494c5cfdec7830e5 \ 
	--credential 5f60cbbe494c5cfdec81cc6b \ 
	--name renamed-credential-agent
```

## Common options

| Option name                                        | Description                                                                 |
| -------------------------------------------------- | --------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                  |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                      |
| ```--agent {id-or-uri}```                          | Agent Id                                                                    |
| ```--credential {id-or-uri}```                     | credentialId                                                                |
| ```--name {name}```                                | Credential name. Requires permissions provider/agent.credential.name/update |
| ```--skeleton```                                   | Display intermediary representation of operation                            |
| ```--help```                                       | Show help message and exit.                                                 |
| ```--verbose```                                    | Make the operation more talkative.                                          |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                     |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}             |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.    |
| ```--as {uri}```                                   | Act as another actor eg. service account                                    |
| ```--no-wait```                                    | In case of queued event do not wait for completion                          |
| ```--v, --version```                               | Show version and exit.                                                      |

## Operation options

| Option name                                        | Description                                                                 |
| -------------------------------------------------- | --------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                  |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                      |
| ```--agent {id-or-uri}```                          | Agent Id                                                                    |
| ```--credential {id-or-uri}```                     | credentialId                                                                |
| ```--name {name}```                                | Credential name. Requires permissions provider/agent.credential.name/update |
| ```--skeleton```                                   | Display intermediary representation of operation                            |
| ```--help```                                       | Show help message and exit.                                                 |
| ```--verbose```                                    | Make the operation more talkative.                                          |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                     |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}             |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.    |
| ```--as {uri}```                                   | Act as another actor eg. service account                                    |
| ```--no-wait```                                    | In case of queued event do not wait for completion                          |
| ```--v, --version```                               | Show version and exit.                                                      |

# Parent commands

* [h1 provider agent credential](./../README.md)
* [h1 provider agent](./../../README.md)
* [h1 provider](./../../../README.md)
* [h1](./../../../../README.md)