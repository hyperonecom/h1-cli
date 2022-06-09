
# h1 iam project sa credential update

Update iam/sa.credential

## Synopsis

```bash
$ h1 iam project sa credential update <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_project_sa_credential_patch)

## Example


### Simple

```bash
h1 iam project sa credential update \ 
	--credential 5f60cbbe494c5cfdec81cc6b \ 
	--sa 5f72c96b02fbdad8a048fa40 \ 
	--project 5f64e2468c71177993874510 \ 
	--name renamed-credential-sa
```

## Operation options

| Option name                    | Description                                                         |
| ------------------------------ | ------------------------------------------------------------------- |
| ```--credential {id-or-uri}``` | credentialId                                                        |
| ```--sa {id-or-uri}```         | Sa Id                                                               |
| ```--project {id-or-uri}```    | Project Id                                                          |
| ```--name {name}```            | Credential name. Requires permissions iam/sa.credential.name/update |
| ```--skeleton```               | Display intermediary representation of operation                    |

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name\}          |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 iam project sa credential](./../README.md)
* [h1 iam project sa](./../../README.md)
* [h1 iam project](./../../../README.md)
* [h1 iam](./../../../../README.md)
* [h1](./../../../../../README.md)