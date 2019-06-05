# Create Website with SSH credential

```bash
{{command_name}} create --name my-website --type website --image 'quay.io/hyperone/php-apache:7.2' --ssh my-key
```

Hint: Use ```{{scope}} project credentials list``` or ```{{scope}} user credentials list``` to list available SSH keys.
