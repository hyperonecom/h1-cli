# Create a Ubuntu virtual machine

```bash
h1 vm create --name test-vm2 --os-disk os-disk-0,ssd,10 \
    --type a1.nano --image 5b1ddeaf9a26cb1d0c0c31c3 \
    --ssh my-ssh
```

Note (1): To identify available disk type use ```h1 service list --resource disk``` .

Note (2): To identify available instance type use ```h1 service list --resource vm --type flavour```.

Note (3): To list available SSH keys use ```h1 project credentials list``` or ```h1 user credentials list```.

Note (4): To list available cloud-provided images use ```h1 image list --recommend```.

# Create a diskless virtual machine in private network

```bash
h1 vm create --name test-vm2 --type a1.nano --network my-network --ssh so-wp
```

Note: You can mount ISO disk and provide stateless services. 
      This allows you to reduce the costs of server disks.
