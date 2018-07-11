# Argument ```--verbose```

## Examples

### Displays the URL of the request to the API

```bash
{{scope}} image list --verbose
```

# Argument ``--no-wait``

## Description

In case of queued event do not wait for completion. It allows you to perform operations
asynchronously, which can be used to optimize the execution time of scripts.

## Examples

### Create virtual machine without waiting for the process to be completed
```bash
{{scope}} vm create --name test-vm --os-disk ssd,10 --type a1.nano --image debian --ssh my-ssh --no-wait
```

# Argument ``--dry-run``

Try to perform operations without making any real changes.