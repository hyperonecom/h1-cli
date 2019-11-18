# Create zone

```bash
{{command_name}} --name my-domain.tld --type public
```

# Create zone and probe current DNS nameserver to guess DNS records

```bash
h1 dns zone import --zone 'my-domain.tld' --nameserver 8.8.8.8
```
