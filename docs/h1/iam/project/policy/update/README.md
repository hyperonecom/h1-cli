
# h1 iam project policy update

Update iam/policy

## Synopsis

```bash
$ h1 iam project policy update <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_project_policy_update)

## Example


### Rename

```bash
h1 iam project policy update \ 
	--policy 5f72c96b02fbdad8a048fa40 \ 
	--project 5f64e2468c71177993874510 \ 
	--name policy-renamed
```

## Operation options

| Option name                 | Description                                              |
| --------------------------- | -------------------------------------------------------- |
| ```--policy {id-or-uri}```  | Policy Id                                                |
| ```--project {id-or-uri}``` | Project Id                                               |
| ```--name {name}```         | Policy name. Requires permissions iam/policy.name/update |
| ```--skeleton```            | Display intermediary representation of operation         |

## Common options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |
| ```--v, --version```                               | Show version and exit.                                                                         |

# Parent commands

* [h1 iam project policy](./../README.md)
* [h1 iam project](./../../README.md)
* [h1 iam](./../../../README.md)
* [h1](./../../../../README.md)
