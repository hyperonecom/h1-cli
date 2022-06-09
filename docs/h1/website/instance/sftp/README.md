
# h1 website instance sftp

Connect to website/instance using SFTP

## Synopsis

```bash
$ h1 website instance sftp <options>
```

## Operation options

| Option name                 | Description |
| --------------------------- | ----------- |
| ```--instance {instance}``` | -           |
| ```--project {project}```   | -           |

## Common options

| Option name                                        | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| ```--help```                                       | Show help message and exit.                                              |
| ```--verbose```                                    | Make the operation more talkative.                                       |
| ```--o, --output {tsv,list,json,js,id,uri,yaml}``` | Specify output format of command. Default value is yaml                  |
| ```--query {query}```                              | JMESPath query string                                                    |
| ```--passport-file {path}```                       | Passport file. Default value is ```~/.h1/passport.json```, if available. |
| ```--as {uri}```                                   | Act as another actor eg. service account                                 |
| ```--no-wait```                                    | In case of queued event do not wait for completion                       |
| ```--v, --version```                               | Show version and exit.                                                   |

# Parent commands

* [h1 website instance](./../README.md)
* [h1 website](./../../README.md)
* [h1](./../../../README.md)