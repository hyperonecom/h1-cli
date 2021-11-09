
# h1 website instance create

long text

## Synopsis

```bash
$ h1 website instance create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/v1:website:instance:create)

## Operation options

| Option name                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```--project {id-or-uri}```        | project Id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ```--location {id-or-uri}```       | location Id. Default value is pl-waw-1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ```--image {image}```              | Allowed values is h1cr.io/website/nginx-static:latest, h1cr.io/website/node:12, h1cr.io/website/node:14, h1cr.io/website/node:latest, h1cr.io/website/php-apache:5.6, h1cr.io/website/php-apache:7.2, h1cr.io/website/php-apache:7.3, h1cr.io/website/php-apache:7.4, h1cr.io/website/php-apache:8.0, h1cr.io/website/php-apache:latest, h1cr.io/website/python-passenger:3.7, h1cr.io/website/python-passenger:3.8, h1cr.io/website/python-passenger:3.9, h1cr.io/website/python-passenger:latest, h1cr.io/website/ruby-passenger:2.7, h1cr.io/website/ruby-passenger:latest |
| ```--env {value=value}```          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ```--source {source}```            | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ```--tag {key=key, value=value}``` | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ```--profile {website}```          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ```--name {name}```                | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ```--skeleton```                   | Display intermediary representation of operation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Common options

| Option name                                        | Description                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| ```--help```                                       | Show help message and exit.                                                   |
| ```--verbose```                                    | Make the operation more talkative.                                            |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                       |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id, name:name, state:state\}  |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available.      |
| ```--as {uri}```                                   | Act as another actor eg. service account                                      |
| ```--no-wait```                                    | In case of queued event do not wait for completion                            |
| ```--v, --version```                               | Show version and exit.                                                        |

# Parent commands

* [h1 website instance](./../README.md)
* [h1 website](./../../README.md)
* [h1](./../../../README.md)
