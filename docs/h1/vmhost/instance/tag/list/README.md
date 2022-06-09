
# h1 vmhost instance tag list

List vmhost/instance.tag

## Synopsis

```bash
$ h1 vmhost instance tag list <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/vmhost_project_instance_tag_list)

## Operation options

| Option name                  | Description                                      |
| ---------------------------- | ------------------------------------------------ |
| ```--instance {id-or-uri}``` | Instance Id                                      |
| ```--location {id-or-uri}``` | Location Id. Default value is pl-waw-1           |
| ```--project {id-or-uri}```  | Project Id                                       |
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

* [h1 vmhost instance tag](./../README.md)
* [h1 vmhost instance](./../../README.md)
* [h1 vmhost](./../../../README.md)
* [h1](./../../../../README.md)