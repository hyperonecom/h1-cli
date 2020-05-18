# Discovery

```bash
{{command_name}} --discovery
```

Attempt to find credentials from the following sources (listed in order of precedence):

* Environment variables
* Shared credentials and config ini files
* EC2/ECS Instance Metadata Service

Credentials is used only to generate the request signature, which only allows you to confirm your identity and does not allow you to make any modifications to AWS resources.
