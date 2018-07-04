# Create a new zone

```bash
{{command_name}} zone create --name my-domain.tld
```

# Create A record at top of domain

```bash
{{command_name}} record-set a create --name '.' --zone-name 'my-domain.tld' --value 127.0.0.1
```

# Create MX record for Google Suite

```bash
{{command_name}} record-set mx create --name '.' --zone-name 'my-domain.tld' \
    --value "10 alt1.aspmx.l.google.com." \
    --value "20 aspmx2.googlemail.com." \
    --value "10 alt2.aspmx.l.google.com." \
    --value "1 aspmx.l.google.com."
```