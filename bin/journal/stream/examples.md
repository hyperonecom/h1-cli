# Display today's log entries

```bash
{{command_name}} --journal my-server-log
```

# View live-stream of log entries for the Nginx application

```bash
{{command_name}} --journal my-server-log --follow --filter appName=~nginx
```

# Filtering

Parameter ```--filter``` accept following query format:

* `{fieldName}=~{value}` - filter by regexp pattern. Example ```--filter 'message=~.*isAuthenticated: true.*'```
* `{fieldName}={value}` - filter by exact match field to value. Example: ```--filter 'tag.containerId=1234'```
* `{fieldName}={value}` - filter by values higher than ```{value}``
* `{fieldName}={value}` - filter by values lower than ```{value}``

```{fieldName}``` is name of property of log entry. It can contains any character in range of ```A-Za-z.``` .
The ```.``` sign is specially treated and is used to refer to the nested properties of the object.
