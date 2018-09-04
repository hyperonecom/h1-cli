# Common arguments
## Argument ```--project-select {project_id}```

A parameter intended for selecting an ad-hoc project for a single command.

###Examples

#### List virtual machine on selected project

```bash
{{scope}} vm list --output tsv --project-select 5b34c27bddd5b3c5e9fbaab0
```
## Argument ```--output table / -o table```

### Description

Default output format, which can be overwritten by the environment variable ```H1_DEFAULT_OUTPUT``` also.

### Examples

#### View all virtual machines in table format

```bash
{{scope}} vm list -o table
```

## Argument ```--output tsv / -o tsv```

### Description

Output format which mostly works like tabular format, but without the header row. Efficiently usable in ```awk``` and shell.

### Examples

#### View all disk in tsv format

```bash
{{scope}} disk list -o tsv
```

## Argument ```--output list / -o list```

### Description

An output format that displays subsequent properties line by line.

### Examples

#### View all network in list format

```bash
{{scope}} network list -o list
```

## Argument ```--query```

### Description

Argument ```--query``` mean JMESPath query string. It is quite a powerful tool that allows you to efficiently 
    obtain specific information about resources.
    
See the documentation and examples published on [jmespath.org](https://jmespath.org) for details about syntax.
    
### Examples

#### Calculates the total size of disks

```bash
{{scope}} disk list -o json --query 'sum([].size)'
```

#### Summarize image size

```bash
{{scope}} image list --query '[].{name:name,diskCount:length(disks),fileSize:fileSize}'
```

#### Attach all detached disk to VM

```bash
{{scope}} disk list --query "[?state=='Detached'].{id:_id}" -o tsv | xargs -r -n 1 {{scope}} vm disk attach --vm test-vm --disk
```

#### Stop all virtual machines

```bash
{{scope}} vm list -o id | xargs -r -n 1 {{scope}} vm stop --vm
```

#### Create new disk and attach to virtual machine

```
$ DISK_ID=$({{scope}} disk create --name my-ambigious-name --type ssd --size 10 -o tsv --query '[].[_id]')
$ {{scope}} vm disk attach --vm test-vm --disk $DISK_ID
```

Note (1): In most cases, you can avoid using ID by naming resources uniquely.
## Argument ```--verbose```

### Examples

#### Displays the URL of the request to the API

```bash
{{scope}} image list --verbose
```

## Argument ``--no-wait``

### Description

In case of queued event do not wait for completion. It allows you to perform operations
asynchronously, which can be used to optimize the execution time of scripts.

### Examples

#### Create virtual machine without waiting for the process to be completed
```bash
{{scope}} vm create --name test-vm --os-disk ssd,10 --type a1.nano --image debian --ssh my-ssh --no-wait
```

## Argument ``--dry-run``

Try to perform operations without making any real changes.
## Argument ```--yes```
### Remove disk without additional confirmation

```bash
{{scope}} disk delete --disk test-disk --yes
```

Note (1): Pretty useful when writing automatic scripts.
