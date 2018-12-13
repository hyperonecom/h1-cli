# Create a log

```bash
{{scope}} log create --name my-server-log
```

# Create a write-only password for client

```bash
{{scope}} log credential password add --log my-server-log --name syslog --password my-strong-secret
```

# Configure rsyslog

Open or create a new configuration file for rsyslog:

```
sudo nano /etc/rsyslog.d/50-hyperone.conf
```

Paste in this configuration:

```
$template HyperOneFormat,"<%pri%>%protocol-version% %timestamp:::date-rfc3339% %HOSTNAME% %app-name% %procid% %msgid% [{log_id}:{secret}@HyperOne tag=\"Rsyslog\"]%msg%\n"

*.* @@{log_id}.log.pl-waw-1.hyperone.com:6514; HyperOneFormat
```

Replace the following values in the example:

* ```{log_id}``` - ID of log. To identify available logs use ```{{scope}} log list```.
* ```{secret}``` - The password added to given log. See example above how to create a write-only password.

Remember to restart rsyslog:

```
sudo service rsyslog restart
```

# Display today's log entries

```bash
{{scope}} log stream --log my-server-log 
```

# View live-stream of log entries

```bash
{{scope}} log stream --log my-server-log --follow
```
