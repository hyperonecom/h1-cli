# TOC

  * [h1 log create](#h1-log-create) - Create log archive
  * [h1 log show](#h1-log-show) - Show log archive
  * [h1 log delete](#h1-log-delete) - Delete log archive
  * [h1 log rename](#h1-log-rename) - Rename log archive
  * [h1 log list](#h1-log-list) - List log archive
  * [h1 log history](#h1-log-history) - History of log archive
  * [h1 log service](#h1-log-service) - Manage your services of log archive
    * [h1 log service list](#h1-log-service-list) - List service for log archive
    * [h1 log service show](#h1-log-service-show) - Show service for log archive
  * [h1 log transfer](#h1-log-transfer) - Transfer log archive to other project
  * [h1 log stream](#h1-log-stream) - Stream or read messages of log archive
  * [h1 log logger](#h1-log-logger) - Log messages to log archive
  * [h1 log credential](#h1-log-credential) - Manage your credentials to log archive
    * [h1 log credential password](#h1-log-credential-password) - Manage your password to log archive
      * [h1 log credential password show](#h1-log-credential-password-show) - Show password to log archive
      * [h1 log credential password list](#h1-log-credential-password-list) - List password to log archive
      * [h1 log credential password rename](#h1-log-credential-password-rename) - Rename password to log archive
      * [h1 log credential password delete](#h1-log-credential-password-delete) - Delete password to log archive
      * [h1 log credential password add](#h1-log-credential-password-add) - Add password to log archive
  * [h1 log tag](#h1-log-tag) - Manage your tag
    * [h1 log tag list](#h1-log-tag-list) - List tag
    * [h1 log tag add](#h1-log-tag-add) - Add a tag to log archive
    * [h1 log tag delete](#h1-log-tag-delete) - Delete a tag of log archive


# Specification

## h1 log

Manage your log archive

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

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
$template HyperOneFormat,"<%pri%>%protocol-version% %timestamp:::date-rfc3339% %HOSTNAME% %app-name% %procid% %msgid% [{log_id}:{secret}@HyperOne tag=\"Rsyslog\"]%msg%\n"

*.* @@{log_id}.logarchive.{region}.hyperone.cloud:6514; HyperOneFormat
```

Replace the following values in the example:

* ```{log_id}``` - ID of log. To identify available logs use ```h1 log list```.
* ```{secret}``` - The password added to given log. See example above how to create a write-only password.
* ```{region}``` - Region where resource exists eg. ```pl-waw-1```

Remember to restart rsyslog:

```
sudo service rsyslog restart
```

#### Display today's log entries

```bash
h1 log stream --log my-server-log
```

#### View live-stream of log entries

```bash
h1 log stream --log my-server-log --follow
```

## h1 log create

Create log archive

### Syntax

```h1 log create | --name NAME [--password PASSWORD [--password PASSWORD ...]] [--tag TAG [--tag TAG ...]]```
### Examples

#### Create a log with password

```bash
h1 log create --name my-server-log --password my-password
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name of log archive |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD [--password PASSWORD ...]``` |  | Password to access. The parameter may occur repeatedly |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

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

## h1 log service

Manage your services of log archive

## h1 log service list

List service for log archive

### Syntax

```h1 log service list | --log LOG```
### Example

```bash
h1 log service list --log test-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |

## h1 log service show

Show service for log archive

### Syntax

```h1 log service show | --log LOG --service SERVICE```
### Example

```bash
h1 log service show --service my-service --log my-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |
| ```--service SERVICE``` |  | Service for log archive ID or name |

## h1 log transfer

Transfer log archive to other project

### Syntax

```h1 log transfer | --log LOG --new-project NEW-PROJECT```
### Example

```bash
h1 log transfer --log test-log --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 log stream

Stream or read messages of log archive

### Syntax

```h1 log stream | --log LOG [--since SINCE] [--until UNTIL] [--tail TAIL] [--follow] [--jsonl-file JSONL-FILE]```
### Examples

#### Display today's log entries

```bash
h1 log stream --log my-server-log
```

#### View live-stream of log entries for the Nginx application

```bash
h1 log stream --log my-server-log --follow --filter appName~nginx
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
| ```--jsonl-file JSONL-FILE``` |  | Path of output .jsonl file (disables all format option; default: stdout) |

## h1 log logger

Log messages to log archive

### Syntax

```h1 log logger | --log LOG --token TOKEN [--hostname HOSTNAME] [--log-file LOG-FILE]```
### Example

```
echo 'Log message' | h1 log logger --log my-log --token my-secret-token --hostname srv-01
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |
| ```--token TOKEN``` |  | Token entitling to write to log archive. Can be set also via environment variable HYPERONE_LOG_TOKEN. |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--hostname HOSTNAME``` |  | Name of the host recorded in the log |
| ```--log-file LOG-FILE``` |  | Path of the input text log file (default: stdin) |

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

```h1 log credential password delete | --password PASSWORD --log LOG```
### Example

```bash
h1 log credential password delete --password my-password --log my-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password to log archive ID or name |
| ```--log LOG``` |  | Log archive ID or name |

## h1 log credential password add

Add password to log archive

### Syntax

```h1 log credential password add | --log LOG --name NAME [--password PASSWORD]```
### Example

```bash
h1 log credential password add --name my-pass --password secret-password --log my-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |
| ```--name NAME``` |  | Name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password. It will be generated and shown if it is not specified. |

## h1 log tag

Manage your tag

## h1 log tag list

List tag

### Syntax

```h1 log tag list | --log LOG```
### Example

```bash
h1 log tag list --log my-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |

## h1 log tag add

Add a tag to log archive

### Syntax

```h1 log tag add | --log LOG [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 log tag add --log test-log --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log LOG``` |  | Log archive ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 log tag delete

Delete a tag of log archive

### Syntax

```h1 log tag delete | --tag TAG --log LOG```
### Example

```bash
h1 log tag delete --log test-log --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--log LOG``` |  | Log archive ID or name |

