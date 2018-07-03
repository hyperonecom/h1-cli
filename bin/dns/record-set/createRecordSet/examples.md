```bash
h1 dns record-set {{dns_type}} create --name '.' --zone-name 'my-domain.tld' --value '{{dns_value}}'
```

Note (1): Use ```--name '.'``` to put record at top of the zone.