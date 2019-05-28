JMESPath is quite a powerful tool that allows to efficiently obtain specific information about resources.
    
See the documentation and examples published on [jmespath.org](https://jmespath.org) for details about syntax.
    
# Examples

## Calculates the total size of disks

```bash
{{scope}} disk list -o json --query 'sum([].size)'
```

## Summarize image size

```bash
{{scope}} image list --query '[].{name:name,diskCount:length(disks),fileSize:fileSize}'
```

## Attach all detached disk to VM

```bash
{{scope}} disk list --query "[?state=='Detached'].{id:_id}" -o tsv | xargs -r -n 1 {{scope}} vm disk attach --vm test-vm --disk
```

## Stop all running virtual machines

```bash
{{scope}} vm list --query "[?state=='Running'].{id:_id}" -o tsv | xargs -r -n 1 {{scope}} vm stop --vm
```

## Create new disk and attach to virtual machine

```
$ DISK_ID=$({{scope}} disk create --name my-ambigious-name --type ssd --size 10 -o tsv --query '[].[_id]')
$ {{scope}} vm disk attach --vm test-vm --disk $DISK_ID
```

Note (1): In most cases, you can avoid using ID by naming resources uniquely.
