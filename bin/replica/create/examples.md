```bash
{{command_name}} --local-vm test-vm-hyperv
```

Command introduces changes to the configuration of the local Hyper-V host aimed at:

 * adding new certificate to authenticate to our replica host
 * setup replication for selected VM
 * start replication of VM (if requested)

Note: Use ```Get-VM``` in Powershell to identify available virtual machines.