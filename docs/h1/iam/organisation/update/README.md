
# h1 iam organisation update

Update iam/organisation

## Synopsis

```bash
$ h1 iam organisation update <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_organisation_update)

## Operation options

| Option name                                               | Description                                                          |
| --------------------------------------------------------- | -------------------------------------------------------------------- |
| ```--organisation {id-or-uri}```                          | Organisation Id                                                      |
| ```--name {name}```                                       | Organisation name. Requires permissions iam/organisation.name/update |
| ```--billing-email {billing-email}```                     | Billing email                                                        |
| ```--billing-company {billing-company}```                 | Billing company                                                      |
| ```--billing-address-city {billing-address-city}```       | Address city                                                         |
| ```--billing-address-zipcode {billing-address-zipcode}``` | Address zipcode                                                      |
| ```--billing-address-street {billing-address-street}```   | Address street                                                       |
| ```--skeleton```                                          | Display intermediary representation of operation                     |

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
