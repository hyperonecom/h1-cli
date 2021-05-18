
# h1 billing reservation assign

Assign billing/reservation

## Synopsis

```bash
$ h1 billing reservation assign <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/billing_project_reservation_assign)

## Example


### Simple

```bash
h1 billing reservation assign \ 
	--project 5f64e2468c71177993874510 \ 
	--reservation 5f577a24494c5cfdec7830e5
```

## Common options

| Option name                                        | Description                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--reservation {id-or-uri}```                    | Reservation Id                                                                                 |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--resource {id-or-uri}```                       | Reservation resource. Provide ID or URI of compute/vm. Requires permissions compute/vm/use     |
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
| ```--project {id-or-uri}```                        | Project Id                                                                                     |
| ```--reservation {id-or-uri}```                    | Reservation Id                                                                                 |
| ```--x-idempotency-key {x-idempotency-key}```      | Idempotency key                                                                                |
| ```--resource {id-or-uri}```                       | Reservation resource. Provide ID or URI of compute/vm. Requires permissions compute/vm/use     |
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