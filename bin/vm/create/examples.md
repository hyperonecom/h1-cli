# Create Debian Virtual Machine with recommended disk

```bash
{{command_name}} --name test-vm --type a1.nano
```

Note (1): By default, all user SSH keys are used. To manage user SSH keys use ```{{scope}} user credentials list```.

Note (1): By default, image ```debian``` is used.

# Create Ubuntu Virtual Machine with custom disk size

```bash
{{command_name}} --name test-vm --os-disk ssd,10 --type a1.nano --image debian --ssh my-ssh
```

Note (1): To identify available disk type use ```{{scope}} service list --resource disk``` .

Note (2): To identify available instance type use ```{{scope}} service list --resource vm --type flavour```.

Note (3): To list available SSH keys use ```{{scope}} project credentials list``` or ```{{scope}} user credentials list```.

Note (4): To list available cloud-provided images use ```{{scope}} image list --recommend```.
          For them you can also ```<distro>[:<release>]``` as ID.