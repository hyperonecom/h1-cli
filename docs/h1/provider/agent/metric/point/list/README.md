
# h1 provider agent metric point list

List provider/agent.point

## Synopsis

```bash
$ h1 provider agent metric point list <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/provider_project_agent_metric_point_list)

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--timespan {timespan}```                        | timespan                                                                 |
| ```--interval {interval}```                        | interval                                                                 |
| ```--metric {id-or-uri}```                         | metricId                                                                 |
| ```--agent {id-or-uri}```                          | Agent Id                                                                 |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                   |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{value:@\}                   |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

## Operation options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--timespan {timespan}```                        | timespan                                                                 |
| ```--interval {interval}```                        | interval                                                                 |
| ```--metric {id-or-uri}```                         | metricId                                                                 |
| ```--agent {id-or-uri}```                          | Agent Id                                                                 |
| ```--location {id-or-uri}```                       | Location Id. Default value is pl-waw-1                                   |
| ```--project {id-or-uri}```                        | Project Id                                                               |
| ```--skeleton```                                   | Display intermediary representation of operation                         |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string. Default value is [].\{value:@\}                   |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 provider agent metric point](./../README.md)
* [h1 provider agent metric](./../../README.md)
* [h1 provider agent](./../../../README.md)
* [h1 provider](./../../../../README.md)
* [h1](./../../../../../README.md)