
# h1 support ticket message create

Create support/ticket.message

## Synopsis

```bash
$ h1 support ticket message create <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/support_project_ticket_message_create)

## Global options

| Option name                                         | Description                                                              |
| --------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                         | Project Id                                                               |
| ```--ticket {id-or-uri}```                          | Ticket Id                                                                |
| ```--type {text,attachment}```                      | Message type                                                             |
| ```--data-mime {text/plain,image/png,image/jpeg}``` | Data mime                                                                |
| ```--data-body {data-body}```                       | Data body                                                                |
| ```--skeleton```                                    | Display intermediary representation of operation                         |
| ```--help```                                        | Show help message and exit.                                              |
| ```--verbose```                                     | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}```  | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                               | JMESPath query string. Default value is [].\{id:id\}                     |
| ```--passport-file {path}```                        | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                    | Act as another actor eg. service account                                 |
| ```--no-wait```                                     | In case of queued event do not wait for completion                       |
| ```--v, --version```                                | Show version and exit.                                                   |

## Operation options

| Option name                                         | Description                                                              |
| --------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--project {id-or-uri}```                         | Project Id                                                               |
| ```--ticket {id-or-uri}```                          | Ticket Id                                                                |
| ```--type {text,attachment}```                      | Message type                                                             |
| ```--data-mime {text/plain,image/png,image/jpeg}``` | Data mime                                                                |
| ```--data-body {data-body}```                       | Data body                                                                |
| ```--skeleton```                                    | Display intermediary representation of operation                         |
| ```--help```                                        | Show help message and exit.                                              |
| ```--verbose```                                     | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}```  | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                               | JMESPath query string. Default value is [].\{id:id\}                     |
| ```--passport-file {path}```                        | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                    | Act as another actor eg. service account                                 |
| ```--no-wait```                                     | In case of queued event do not wait for completion                       |
| ```--v, --version```                                | Show version and exit.                                                   |

# Parent commands

* [h1 support ticket message](./../README.md)
* [h1 support ticket](./../../README.md)
* [h1 support](./../../../README.md)
* [h1](./../../../../README.md)
