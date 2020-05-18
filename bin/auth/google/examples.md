# Use CLI

```bash
{{command_name}} --token $(gcloud auth print-access-token)
```

# Discovery

Use Google Application Default Credentials as a simple way to get authorization credentials.

```bash
GOOGLE_APPLICATION_CREDENTIALS=credential-file.json {{command_name}} --discovery
```
