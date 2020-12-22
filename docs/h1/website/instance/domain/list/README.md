
# h1 website instance domain list

List website/instance.domain

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/website_project_instance_domain_list)

## Synopsis

$ h1 website instance domain list <options>

## Example


### Simple

```h1 website instance domain list --project 5f64e2468c71177993874510 --instance 5f577a24494c5cfdec7830e5```

## Global options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--instance {id-or-uri}```                       | Instance Id                                                        |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}               |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

## Operation options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--instance {id-or-uri}```                       | Instance Id                                                        |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}               |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

# Parent commands

* [h1 website instance domain](./../README.md)
* [h1 website instance](./../../README.md)
* [h1 website](./../../../README.md)
* [h1](./../../../../README.md)
