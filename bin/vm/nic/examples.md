# Get IP address of virtual machine

```bash
h1 vm nic list --vm test-vm --output json --query "[].{ip:join(',', ip[].address)}" --output tsv
```