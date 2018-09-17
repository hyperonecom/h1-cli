# Create a token 

```bash
{{command_name}} add --project 6oAoJqgyLZP4Le9UUNHrEOYP --name secret-token-1
```

# Grant access to token for snapshots of selected Vault

```bash
{{command_name}} access add --project 6oAoJqgyLZP4Le9UUNHrEOYP --method POST --path 'vault/x/actions/snapshot' --token d41d8cd98f00b204e9800998ecf8427e
```

# Verify access of token

```
{{command_name}} access list --project 6oAoJqgyLZP4Le9UUNHrEOYP \
    --token d41d8cd98f00b204e9800998ecf8427e
```

# Remove some access of token 

```bash
{{command_name}} access delete --project 6oAoJqgyLZP4Le9UUNHrEOYP --token d41d8cd98f00b204e9800998ecf8427e --access c4ca4238a0b923820dcc509a6f75849b
```

# Perform a snapshot of Vault using API token

```bash
{{scope_uppercase}}_TOKEN="d41d8cd98f00b204e9800998ecf8427e" {{scope}} vault snapshot --vault x --name $(date +"%s")
```