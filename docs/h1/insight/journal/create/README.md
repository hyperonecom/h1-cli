
# h1 insight journal create

Create insight/journal

## Synopsis

```bash
$ h1 insight journal create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/insight_project_journal_create)

## Example


### Simple

```bash
h1 insight journal create \ 
	--project 5f64e2468c71177993874510 \ 
	--name simple-journal \ 
	--service /billing/project/platform/service/5c9cc2d0255c16c3e899a4ea \ 
	--retention 30
```

## Common options

| Option name                                        | Description                                                                                      |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ```--x-dry-run {x-dry-run}```                      | Dry run                                                                                          |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                  |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                           |
| ```--project {id-or-uri}```                        | Project Id                                                                                       |
| ```--name {name}```                                | Journal name                                                                                     |
| ```--service {id-or-uri}```                        | Journal service. Provide ID or URI of billing/service. Default value is 5c9cc2d0255c16c3e899a4ea |
| ```--retention {retention}```                      | Journal retention                                                                                |
| ```--tag {key=key, value=value}```                 | Tag collection                                                                                   |
| ```--skeleton```                                   | Display intermediary representation of operation                                                 |
| ```--help```                                       | Show help message and exit.                                                                      |
| ```--verbose```                                    | Make the operation more talkative.                                                               |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                          |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                         |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                         |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                               |
| ```--v, --version```                               | Show version and exit.                                                                           |

## Operation options

| Option name                                        | Description                                                                                      |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ```--x-dry-run {x-dry-run}```                      | Dry run                                                                                          |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                  |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                                           |
| ```--project {id-or-uri}```                        | Project Id                                                                                       |
| ```--name {name}```                                | Journal name                                                                                     |
| ```--service {id-or-uri}```                        | Journal service. Provide ID or URI of billing/service. Default value is 5c9cc2d0255c16c3e899a4ea |
| ```--retention {retention}```                      | Journal retention                                                                                |
| ```--tag {key=key, value=value}```                 | Tag collection                                                                                   |
| ```--skeleton```                                   | Display intermediary representation of operation                                                 |
| ```--help```                                       | Show help message and exit.                                                                      |
| ```--verbose```                                    | Make the operation more talkative.                                                               |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                                          |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state, flavour:flavour\}    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.                         |
| ```--as {uri}```                                   | Act as another actor eg. service account                                                         |
| ```--no-wait```                                    | In case of queued event do not wait for completion                                               |
| ```--v, --version```                               | Show version and exit.                                                                           |

# Parent commands

* [h1 insight journal](./../README.md)
* [h1 insight](./../../README.md)
* [h1](./../../../README.md)
