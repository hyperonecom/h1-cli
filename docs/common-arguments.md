# Common arguments
## Argument ```--verbose```
Make the operation more talkative. Can be set also via environment variable HYPERONE_CLI_VERBOSE.

#### Examples

##### Displays the URL of the request to the API

```bash
h1 image list --verbose
```
## Argument ```--no-wait```
In case of queued event do not wait for completion

It allows to perform operations asynchronously, which can be used to optimize the execution time of scripts.

#### Examples

##### Create virtual machine without waiting for the process to be completed
```bash
h1 vm create --name test-vm --os-disk ssd,10 --type a1.nano --image debian --ssh my-ssh --no-wait
```
## Argument ```--dry-run```
Dry run for the request

Try to perform operations without making any real changes:

```
h1 disk create --name xxxx.com --type ssd --size 25 --dry-run
```
## Argument ```--output```
Specify output format of command. Can be set also via environment variable HYPERONE_CLI_OUTPUT.

#### Available formats

* ```table``` - Simple results as tabular (default).
* ```list``` - Subsequent properties line by line.
* ```tsv``` - Mostly works like tabular format, but without the header row. Efficiently usable in ```awk``` and shell.
* ```json``` - Raw response of API
* ```yaml``` - Full response displayed as YAML
* ```id``` - Just resource ID line by line

##### Examples

###### View all disks in tsv format

```bash
h1 disk list -o tsv
```

###### View all networks in list format

```bash
h1 network list -o list
```

###### View all virtual machines in table format

```bash
h1 vm list -o table
```
## Argument ```--query```
 JMESPath query string

JMESPath is quite a powerful tool that allows to efficiently obtain specific information about resources.
    
See the documentation and examples published on [jmespath.org](https://jmespath.org) for details about syntax.
    
#### Examples

##### Calculates the total size of disks

```bash
h1 disk list -o json --query 'sum([].size)'
```

##### Summarize image size

```bash
h1 image list --query '[].{name:name,diskCount:length(disks),fileSize:fileSize}'
```

##### Attach all detached disk to VM

```bash
h1 disk list --query "[?state=='Detached'].{id:_id}" -o tsv | xargs -r -n 1 h1 vm disk attach --vm test-vm --disk
```

##### Stop all running virtual machines

```bash
h1 vm list --query "[?state=='Running'].{id:_id}" -o tsv | xargs -r -n 1 h1 vm stop --vm
```

##### Create new disk and attach to virtual machine

```
$ DISK_ID=$(h1 disk create --name my-ambigious-name --type ssd --size 10 -o tsv --query '[].[_id]')
$ h1 vm disk attach --vm test-vm --disk $DISK_ID
```

Note (1): In most cases, you can avoid using ID by naming resources uniquely.
## Argument ```--yes```
Perform action without additional confirmation

#### Examples

##### Remove disk without additional confirmation

```bash
h1 disk delete --disk test-disk --yes
```

Note (1): Pretty useful when writing automatic scripts.
## Argument ```--project-select```
Override current project on the request. Can be set also via environment variable HYPERONE_PROJECT.

A parameter intended for selecting an ad-hoc project for a single command.

#### Examples

##### List virtual machine on selected project

```bash
h1 vm list --output tsv --project-select MyProject
```
