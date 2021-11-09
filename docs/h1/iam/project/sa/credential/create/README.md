
# h1 iam project sa credential create

Create iam/sa.credential

## Synopsis

```bash
$ h1 iam project sa credential create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_project_sa_credential_create)

## Example


### Simple

```bash
h1 iam project sa credential create \ 
	--sa 5f72c96b02fbdad8a048fa40 \ 
	--project 5f64e2468c71177993874510 \ 
	--name sa-credential \ 
	--type ssh \ 
	--value ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7Ssk/TZy/PS5mtGqNwmgfukrA/QrpW3oyrMM3KViHO9wtIwu1BapTdmUxIWi7TX1Nl51i8040CvTstfi11O4jMk2E5lGYp0TIduo8B8Qo/0wO6s2BrXHtLI1FlctkQacrKTnSINrSEcBbIO6G//S4fiRI5ioK8OAPt/qJK1k74AOnrupsXxTUYggmmIJfto8r1c3ZAhfwnJ4D0SDCoWjL4PLh/UGQv7sN20Z/afWVDCa78TnQ6lGlJe6VRSqoT09kJpt2CW0Pa3Ij1QaSJp6ENHpWAWGLyiwW8rLxCqFriz333yf0zzw2QmiyyNHe1ITG2goJU05pHEYyzYq6xo5X
```

## Operation options

| Option name                 | Description                                      |
| --------------------------- | ------------------------------------------------ |
| ```--sa {id-or-uri}```      | Sa Id                                            |
| ```--project {id-or-uri}``` | Project Id                                       |
| ```--name {name}```         | Credential name                                  |
| ```--type {ssh}```          | Credential type                                  |
| ```--value {value}```       | Credential value                                 |
| ```--token {token}```       | Credential token                                 |
| ```--skeleton```            | Display intermediary representation of operation |

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
