# Create a Debian virtual machine

```bash
{{command_name}} --name test-vm --os-disk ssd,10 --type a1.nano --image debian --ssh my-ssh
```

Note (1): To identify available disk type use ```{{scope}} service list --resource disk``` .

Note (2): To identify available instance type use ```{{scope}} service list --resource vm --type flavour```.

Note (3): To list available SSH keys use ```{{scope}} project credentials list``` or ```{{scope}} user credentials list```.

Note (4): To list available cloud-provided images use ```{{scope}} image list --recommend```.
          For them you can also ```<distro>[:<release>]``` as ID.

# Create a diskless virtual machine in private network

```bash
{{command_name}} --name test-vm --type a1.nano --network my-network --ssh my-ssh
```

Note: You can mount ISO disk and provide stateless services. 
      This allows you to reduce the costs of server disks.
