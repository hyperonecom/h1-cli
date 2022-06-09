
# h1 compute vm serialport

Serialport compute/vm

## Synopsis

```bash
$ h1 compute vm serialport <options>
```

## Description

See also:

* [API reference](https://api.hyperone.com/v2/docs#operation/compute_project_vm_serialport)

## Example


### Simple

```bash
h1 compute vm serialport \ 
	--vm 5f577a24494c5cfdec7830e5 \ 
	--project 5f64e2468c71177993874510
```

## Operation options

| Option name                                   | Description                                      |
| --------------------------------------------- | ------------------------------------------------ |
| ```--x-dry-run {x-dry-run}```                 | Dry run                                          |
| ```--x-idempotency-key {x-idempotency-key}``` | Idempotency key                                  |
| ```--vm {id-or-uri}```                        | Vm Id                                            |
| ```--location {id-or-uri}```                  | Location Id. Default value is pl-waw-1           |
| ```--project {id-or-uri}```                   | Project Id                                       |
| ```--number {1, 2}```                         | Vm number. Default value is 1                    |
| ```--skeleton```                              | Display intermediary representation of operation |

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

* [h1 compute vm](./../README.md)
* [h1 compute](./../../README.md)
* [h1](./../../../README.md)