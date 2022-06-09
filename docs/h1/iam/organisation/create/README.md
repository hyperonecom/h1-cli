
# h1 iam organisation create

Create iam/organisation

## Synopsis

```bash
$ h1 iam organisation create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_organisation_create)

## Operation options

| Option name                                               | Description                                                                                                                                                    |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```--x-dry-run {x-dry-run}```                             | Dry run                                                                                                                                                        |
| ```--x-idempotency-key {x-idempotency-key}```             | Idempotency key                                                                                                                                                |
| ```--name {name}```                                       | Organisation name                                                                                                                                              |
| ```--billing-nip {billing-nip}```                         | Billing nip                                                                                                                                                    |
| ```--billing-email {billing-email}```                     | Billing email                                                                                                                                                  |
| ```--billing-company {billing-company}```                 | Billing company                                                                                                                                                |
| ```--billing-currency {PLN}```                            | Billing currency. Default value is PLN                                                                                                                         |
| ```--billing-address-country {billing-address-country}``` | Address country. Allowed values is AD, BE, HR, CY, CZ, DK, EE, FI, FR, DE, GR, HU, IE, IT, LV, LT, LU, MT, NL, PL, PT, RO, SK, SI, ES, GB. Default value is PL |
| ```--billing-address-city {billing-address-city}```       | Address city                                                                                                                                                   |
| ```--billing-address-street {billing-address-street}```   | Address street                                                                                                                                                 |
| ```--billing-address-zipcode {billing-address-zipcode}``` | Address zipcode                                                                                                                                                |
| ```--skeleton```                                          | Display intermediary representation of operation                                                                                                               |

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

* [h1 iam organisation](./../README.md)
* [h1 iam](./../../README.md)
* [h1](./../../../README.md)