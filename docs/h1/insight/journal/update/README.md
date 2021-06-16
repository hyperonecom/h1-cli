
# h1 insight journal update

Update insight/journal

## Synopsis

```bash
$ h1 insight journal update <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/insight_project_journal_update)

## Example


### Rename

```bash
h1 insight journal update \ 
	--journal 5f577a24494c5cfdec7830e5 \ 
	--project 5f64e2468c71177993874510 \ 
	--name journal-renamed
```

## Common options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--journal {id-or-uri}```                        | Journal Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--name {name}```                                | Journal name. Requires permissions insight/journal.name/update                                 |
| ```--retention {retention}```                      | Journal retention. Requires permissions insight/journal.retention/update                       |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |
| ```--v, --version```                               | Show version and exit.                                                                         |

## Operation options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--journal {id-or-uri}```                        | Journal Id                                                                                     |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                         |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--name {name}```                                | Journal name. Requires permissions insight/journal.name/update                                 |
| ```--retention {retention}```                      | Journal retention. Requires permissions insight/journal.retention/update                       |
| ```--skeleton```                                   | Display intermediary representation of operation                                               |
| ```--help```                                       | Show help message and exit.                                                                    |
| ```--verbose```                                    | Make the operation more talkative.                                                             |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                        |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                       |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                       |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                             |
| ```--v, --version```                               | Show version and exit.                                                                         |

# Parent commands

* [h1 insight journal](./../README.md)
* [h1 insight](./../../README.md)
* [h1](./../../../README.md)
