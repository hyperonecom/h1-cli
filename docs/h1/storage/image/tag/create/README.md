
# h1 storage image tag create

Create storage/image.tag

## Synopsis

```bash
$ h1 storage image tag create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/storage_project_image_tag_create)

## Example


### Simple

```bash
h1 storage image tag create \ 
	--image 5f577a24494c5cfdec7830e5 \ 
	--project 5f64e2468c71177993874510 \ 
	--key x \ 
	--value x
```

## Operation options

| Option name                  | Description                                      |
| ---------------------------- | ------------------------------------------------ |
| ```--image {id-or-uri}```    | Image Id                                         |
| ```--location {id-or-uri}``` | Location Id. Default value is pl-waw-1           |
| ```--project {id-or-uri}```  | Project Id                                       |
| ```--key {key}```            | Tag key                                          |
| ```--value {value}```        | Tag value                                        |
| ```--skeleton```             | Display intermediary representation of operation |

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{id:id\}                     |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 storage image tag](./../README.md)
* [h1 storage image](./../../README.md)
* [h1 storage](./../../../README.md)
* [h1](./../../../../README.md)