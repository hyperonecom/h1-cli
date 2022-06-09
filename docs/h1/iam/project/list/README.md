
# h1 iam project list

List iam/project

## Synopsis

```bash
$ h1 iam project list <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/iam_project_list)

## Operation options

| Option name                         | Description                                      |
| ----------------------------------- | ------------------------------------------------ |
| ```--tag.key {tag.key}```           | Filter by tag.key                                |
| ```--tag.value {tag.value}```       | Filter by tag.value                              |
| ```--$lean {$lean}```               | return a lightweight version of the resource     |
| ```--organisation {organisation}``` | Filter by organisation                           |
| ```--active {active}```             | Filter by active                                 |
| ```--$limit {$limit}```             | Filter by $limit                                 |
| ```--name {name}```                 | Filter by name                                   |
| ```--skeleton```                    | Display intermediary representation of operation |

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

* [h1 iam project](./../README.md)
* [h1 iam](./../../README.md)
* [h1](./../../../README.md)