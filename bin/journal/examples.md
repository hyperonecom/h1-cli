# Create a log

```bash
{{command_name}} create --name my-server-log
```

# Create a write-only password for client

```bash
{{command_name}} credential password add --journal my-server-journal --name syslog --password my-strong-secret
```

# Display today's log entries

```bash
{{command_name}} stream --journal my-server-log
```

# View live-stream of log entries

```bash
{{command_name}} stream --journal my-server-log --follow
```
