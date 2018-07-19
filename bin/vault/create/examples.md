# Create Vault with SSH credential

```bash
{{command_name}} --name my-vault --size 10 --ssh my-key
```

Hint: Use ```{{scope}} project credentials list``` or ```{{scope}} user credentials list``` to list available SSH keys.

# Create Vault from snaphost

```bash
{{command_name}} --name my-vault --size 10 --snapshot my-snapshot
```

Hint: Use ```{{scope}} snapshot list``` to list available snapshots.