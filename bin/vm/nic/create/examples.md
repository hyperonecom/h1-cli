# Create network adapter with public IP

```bash
h1 vm nic create --vm test-vm2 --type public
```

# Create network adapter and private network

```bash
h1 vm nic create --vm test-vm2 --network my-network --type private
```

Note (4): To list available networks use ```h1 network list```.
