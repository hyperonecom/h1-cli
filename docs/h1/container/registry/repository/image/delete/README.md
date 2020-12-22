
# h1 container registry repository image delete

Delete container/registry.image

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/container_project_registry_repository_image_delete)

## Synopsis

$ h1 container registry repository image delete <options>

## Example


### Simple

```h1 container registry repository image delete --project 5f64e2468c71177993874510 --registry 5f577a24494c5cfdec7830e5 --repository xxxx5 --image imageId```

## Global options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--registry {id-or-uri}```                       | Registry Id                                                        |
| ```--repository {id-or-uri}```                     | repositoryId                                                       |
| ```--image {id-or-uri}```                          | imageId                                                            |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string                                              |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

## Operation options

| Option name                                        | Description                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| ```--project {id-or-uri}```                        | Project Id                                                         |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                             |
| ```--registry {id-or-uri}```                       | Registry Id                                                        |
| ```--repository {id-or-uri}```                     | repositoryId                                                       |
| ```--image {id-or-uri}```                          | imageId                                                            |
| ```--skeleton```                                   | -                                                                  |
| ```--help```                                       | Show help message and exit.                                        |
| ```--verbose```                                    | Make the operation more talkative.                                 |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml            |
| ```--query {query}```                              | JMESPath query string                                              |
| ```--passport-file {path}```                       | Passport file. Default value is ~/.h1/passport.json, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                           |
| ```--no-wait```                                    | In case of queued event do not wait for completion                 |

# Parent commands

* [h1 container registry repository image](./../README.md)
* [h1 container registry repository](./../../README.md)
* [h1 container registry](./../../../README.md)
* [h1 container](./../../../../README.md)
* [h1](./../../../../../README.md)
