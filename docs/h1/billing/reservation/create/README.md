
# h1 billing reservation create

Create billing/reservation

## Synopsis

```bash
$ h1 billing reservation create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/billing_project_reservation_create)

## Example


### Simple

```bash
h1 billing reservation create \ 
	--project 5f64e2468c71177993874510 \ 
	--name simple-reservation \ 
	--service /billing/project/5f64e2468c71177993874510/service/5bf55e7f96ca089454ce6f68
```

## Common options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--x-dry-run {x-dry-run}```                      | Dry run                                                                                        |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--name {name}```                                | Reservation name                                                                               |
| ```--service {id-or-uri}```                        | Reservation service. Provide ID or URI of billing/service                                      |
| ```--tag {key=key, value=value}```                 | Tag collection                                                                                 |
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
| ```--x-dry-run {x-dry-run}```                      | Dry run                                                                                        |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--name {name}```                                | Reservation name                                                                               |
| ```--service {id-or-uri}```                        | Reservation service. Provide ID or URI of billing/service                                      |
| ```--tag {key=key, value=value}```                 | Tag collection                                                                                 |
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

* [h1 billing reservation](./../README.md)
* [h1 billing](./../../README.md)
* [h1](./../../../README.md)
