# Add IP address to network adapter

```bash
{{command_name}} --vm test-vm2 --nic 5b1f28ffdadb705edd76b411 --ip 5784e97be2627505227b584c
```

Note: Use ```{{scope}} vm nic list --vm test-vm2``` to identify network adapter.

Note: Use ```{{scope}} ip list``` to list available IP address or ```{{scope}} ip create``` to create a new one.