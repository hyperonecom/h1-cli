
# h1 storage vault credential create

Create storage/vault.credential

## Synopsis

```bash
$ h1 storage vault credential create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/storage_project_vault_credential_create)

## Examples


### Simple

```bash
h1 storage vault credential create \ 
	--vault 5f577a24494c5cfdec7830e5 \ 
	--project 5f64e2468c71177993874510 \ 
	--name vault-credential \ 
	--type plain \ 
	--value xxxxxx
```
### Simple SSH

```bash
h1 storage vault credential create \ 
	--vault 5f577a24494c5cfdec7830e5 \ 
	--project 5f64e2468c71177993874510 \ 
	--name vault-credential \ 
	--type ssh \ 
	--value ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7Ssk/TZy/PS5mtGqNwmgfukrA/QrpW3oyrMM3KViHO9wtIwu1BapTdmUxIWi7TX1Nl51i8040CvTstfi11O4jMk2E5lGYp0TIduo8B8Qo/0wO6s2BrXHtLI1FlctkQacrKTnSINrSEcBbIO6G//S4fiRI5ioK8OAPt/qJK1k74AOnrupsXxTUYggmmIJfto8r1c3ZAhfwnJ4D0SDCoWjL4PLh/UGQv7sN20Z/afWVDCa78TnQ6lGlJe6VRSqoT09kJpt2CW0Pa3Ij1QaSJp6ENHpWAWGLyiwW8rLxCqFriz333yf0zzw2QmiyyNHe1ITG2goJU05pHEYyzYq6xo5X
```

## Operation options

| Option name                       | Description                                      |
| --------------------------------- | ------------------------------------------------ |
| ```--vault {id-or-uri}```         | Vault Id                                         |
| ```--location {id-or-uri}```      | Location Id. Default value is pl-waw-1           |
| ```--project {id-or-uri}```       | Project Id                                       |
| ```--name {name}```               | Credential name                                  |
| ```--type {ssh, sha512, plain}``` | Credential type                                  |
| ```--value {value}```             | Credential value                                 |
| ```--token {token}```             | Credential token                                 |
| ```--skeleton```                  | Display intermediary representation of operation |

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

* [h1 storage vault credential](./../README.md)
* [h1 storage vault](./../../README.md)
* [h1 storage](./../../../README.md)
* [h1](./../../../../README.md)