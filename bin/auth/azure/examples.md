# Use CLI

```bash
{{command_name}} --token $(az account get-access-token | jq -r .accessToken)
```

# Discovery

```bash
{{command_name}} --discovery
```

Attempt to find credentials from the following sources (listed in order of precedence):

* Environment variables
* Azure Instance Metadata Service (IMDS) available from deployment environment
