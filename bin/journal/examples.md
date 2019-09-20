# Create a log

```bash
{{command_name}} create --name my-server-log
```

# Create a write-only password for client

```bash
{{command_name}} credential password add --log my-server-log --name syslog --password my-strong-secret
```

# Display today's log entries

```bash
{{command_name}} stream --log my-server-log 
```

# View live-stream of log entries

```bash
{{command_name}} stream --log my-server-log --follow
```
