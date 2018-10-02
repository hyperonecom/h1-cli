# TOC

  * [h1 log create](#h1-log-create) - Create log archive
  * [h1 log show](#h1-log-show) - Show log archive
  * [h1 log delete](#h1-log-delete) - Delete log archive
  * [h1 log rename](#h1-log-rename) - Rename log archive
  * [h1 log list](#h1-log-list) - List log archive
  * [h1 log history](#h1-log-history) - History of log archive
  * [h1 log stream](#h1-log-stream) - Stream or read messages of log archive
  * [h1 log credential](#h1-log-credential) - Manage your credentials to log archive
    * [h1 log credential password](#h1-log-credential-password) - Manage your password to log archive
      * [h1 log credential password show](#h1-log-credential-password-show) - Show password to log archive
      * [h1 log credential password list](#h1-log-credential-password-list) - List password to log archive
      * [h1 log credential password rename](#h1-log-credential-password-rename) - Rename password to log archive
      * [h1 log credential password delete](#h1-log-credential-password-delete) - Delete password to log archive
      * [h1 log credential password add](#h1-log-credential-password-add) - Add password to log archive


# Specification

## h1 log

Manage your log archive

### Examples

#### Create a log

```bash
h1 log create --name my-server-log
```

#### Create a write-only password for client

```bash
h1 log credential password add --log my-server-log --name syslog --password my-strong-secret
```

#### Configure rsyslog

Open or create a new configuration file for rsyslog:

```
sudo nano /etc/rsyslog.d/50-hyperone.conf
```

Paste in this configuration:

```
$template HyperOneFormat,"<%pri%>%protocol-version% %timestamp:::date-rfc3339% %HOSTNAME% %app-name% %procid% %msgid% [{log_id}:{secret}@HyperOne tag=\"Rsyslog\"] %msg%\n"

*.* @@{log_id}.log.pl-waw-1.hyperone.com:6514; HyperOneFormat
```

Replace the following values in the example:

* ```{log_id}``` - ID of log. To identify available logs use ```h1 log list```.
* ```{secret}``` - The password added to given log. See example above how to create a write-only password.

Remember to restart rsyslog:

```
sudo service rsyslog restart
```

#### Read logs

```bash
h1 log read --log my-server-log
```

#### View stream logs

```bash
h1 log stream --log my-server-log
```

## h1 log create

Create log archive

### Syntax

```h1 log create | --name NAME```
### Example

```bash
h1 log create --name my-server-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name of logs archive |

## h1 log show

Show log archive

### Syntax

```h1 log show | --log LOG```
### Example

```bash
h1 log show --log my-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |

## h1 log delete

Delete log archive

### Syntax

```h1 log delete | --log LOG```
### Example

```bash
h1 log delete --log my-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |

## h1 log rename

Rename log archive

### Syntax

```h1 log rename | --log LOG --new-name NEW-NAME```
### Example

```bash
h1 log rename --log my-log --new-name my-renamed-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 log list

List log archive

### Syntax

```h1 log list | ```
### Example

```bash
h1 log list
```

## h1 log history

History of log archive

### Syntax

```h1 log history | --log LOG```
### Example

```bash
h1 log history --log my-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |

## h1 log stream

Stream or read messages of log archive

### Syntax

```h1 log stream | --log LOG [--since SINCE] [--until UNTIL] [--tail TAIL] [--follow]```
### Example

```bash
h1 log stream --log my-server-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--since SINCE``` |  | Start of period for which you want to receive logs. Format: YYYY-MM-DD |
| ```--until UNTIL``` |  | End of period for which you want to receive logs. Format: YYYY-MM-DD |
| ```--tail TAIL``` |  | Number of lines to show from the end of the logs. All if skipped. |
| ```--follow``` |  | Output current messages in real time as they arrive |

## h1 log credential

Manage your credentials to log archive

## h1 log credential password

Manage your password to log archive

## h1 log credential password show

Show password to log archive

### Syntax

```h1 log credential password show | --log LOG --password PASSWORD```
### Example

```bash
h1 log credential password show --password my-password
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |
| ```--password PASSWORD``` |  | Password to log archive ID or name |

## h1 log credential password list

List password to log archive

### Syntax

```h1 log credential password list | --log LOG```
### Example

```bash
h1 log credential password list --log my-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |

## h1 log credential password rename

Rename password to log archive

### Syntax

```h1 log credential password rename | --log LOG --password PASSWORD --new-name NEW-NAME```
### Example

```bash
h1 log credential password rename --password my-password --new-name my-renamed-password --log my-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |
| ```--password PASSWORD``` |  | Password to log archive ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 log credential password delete

Delete password to log archive

### Syntax

```h1 log credential password delete | --log LOG --password PASSWORD```
### Example

```bash
h1 log credential password delete --password my-password --log my-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |
| ```--password PASSWORD``` |  | Password to log archive ID or name |

## h1 log credential password add

Add password to log archive

### Syntax

```h1 log credential password add | --log LOG --name NAME --password PASSWORD```
### Example

```bash
h1 log credential password add --name my-pass --password secret-password --log my-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |
| ```--name NAME``` |  | Name |
| ```--password PASSWORD``` |  | Password |

