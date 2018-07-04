# Get IP address of virtual machine

```bash
{{command_name}}l list --vm test-vm --output json --query "[].{ip:join(',', ip[].address)}" --output tsv
```