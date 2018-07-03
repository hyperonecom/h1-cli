# Attach a disk

```bash
h1 vm disk attach --vm test-vm --disk my-disk-0
```

Note (1): It is possible to connect up to 24 disks to one virtual machine.

Note (2): Use ```h1 disk list``` to list available disk or 
          ```h1 disk create --name my-disk-0 --type ssd --size 10``` to create a new one.

Note (3): Each disk can be connected to one virtual machine at a time.

Note (4): Instead of adding a new disk, we suggest considering resize of available disk.
          This process can also be done on-line up to 1TB for each disk.
