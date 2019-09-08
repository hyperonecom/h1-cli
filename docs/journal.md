# TOC

  * [h1 journal create](#h1-journal-create) - Create Journal
  * [h1 journal show](#h1-journal-show) - Show Journal
  * [h1 journal delete](#h1-journal-delete) - Delete Journal
  * [h1 journal rename](#h1-journal-rename) - Rename Journal
  * [h1 journal list](#h1-journal-list) - List Journal
  * [h1 journal history](#h1-journal-history) - History of Journal
  * [h1 journal service](#h1-journal-service) - Manage your services of Journal
    * [h1 journal service list](#h1-journal-service-list) - List Service for Journal
    * [h1 journal service show](#h1-journal-service-show) - Show Service for Journal
  * [h1 journal transfer](#h1-journal-transfer) - Transfer Journal to other project
  * [h1 journal stream](#h1-journal-stream) - Stream or read messages of Journal
  * [h1 journal logger](#h1-journal-logger) - Log messages to Journal
  * [h1 journal credential](#h1-journal-credential) - Manage your credentials of Journal
    * [h1 journal credential list](#h1-journal-credential-list) - List credential of Journal
    * [h1 journal credential show](#h1-journal-credential-show) - Show credential of Journal
    * [h1 journal credential password](#h1-journal-credential-password) - Manage your password Journal
      * [h1 journal credential password list](#h1-journal-credential-password-list) - List password credential of Journal
      * [h1 journal credential password show](#h1-journal-credential-password-show) - Show password credential of Journal
      * [h1 journal credential password rename](#h1-journal-credential-password-rename) - Rename password credential of Journal
      * [h1 journal credential password delete](#h1-journal-credential-password-delete) - Delete password credential of Journal
      * [h1 journal credential password add](#h1-journal-credential-password-add) - Add password credential of Journal
      * [h1 journal credential password list](#h1-journal-credential-password-list) - List password credential of Journal
  * [h1 journal tag](#h1-journal-tag) - Manage your tag
    * [h1 journal tag list](#h1-journal-tag-list) - List tag
    * [h1 journal tag add](#h1-journal-tag-add) - Add a tag to Journal
    * [h1 journal tag delete](#h1-journal-tag-delete) - Delete a tag of Journal


# Specification

## h1 journal

Manage your Journal

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

### Examples

#### Create a log

```bash
h1 journal create --name my-server-log
```

#### Create a write-only password for client

```bash
h1 journal credential password add --log my-server-log --name syslog --password my-strong-secret
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
h1 journal stream --log my-server-log
```

#### View live-stream of log entries

```bash
h1 journal stream --log my-server-log --follow
```

## h1 journal create

Create Journal

### Syntax

```h1 journal create | --name NAME [--password PASSWORD [--password PASSWORD ...]] [--tag TAG [--tag TAG ...]] [--type TYPE] [--retention RETENTION]```
### Examples

#### Create a log with password

```bash
h1 journal create --name my-server-log --password my-password
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
| ```--type TYPE``` |  | Volume type ID or name |
| ```--retention RETENTION``` |  | Data retention period (in days) |

## h1 journal show

Show Journal

### Syntax

```h1 journal show | --journal JOURNAL```
### Example

```bash
h1 journal show --journal my-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |

## h1 journal delete

Delete Journal

### Syntax

```h1 journal delete | --journal JOURNAL```
### Example

```bash
h1 journal delete --journal my-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |

## h1 journal rename

Rename Journal

### Syntax

```h1 journal rename | --journal JOURNAL --new-name NEW-NAME```
### Example

```bash
h1 journal rename --journal my-journal --new-name my-renamed-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 journal list

List Journal

### Syntax

```h1 journal list | ```
### Example

```bash
h1 journal list
```

## h1 journal history

History of Journal

### Syntax

```h1 journal history | --journal JOURNAL```
### Example

```bash
h1 journal history --journal my-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |

## h1 journal service

Manage your services of Journal

## h1 journal service list

List Service for Journal

### Syntax

```h1 journal service list | --journal JOURNAL```
### Example

```bash
h1 journal service list --journal test-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |

## h1 journal service show

Show Service for Journal

### Syntax

```h1 journal service show | --journal JOURNAL --service SERVICE```
### Example

```bash
h1 journal service show --service my-service --journal my-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |
| ```--service SERVICE``` |  | Service for Journal ID or name |

## h1 journal transfer

Transfer Journal to other project

### Syntax

```h1 journal transfer | --journal JOURNAL --new-project NEW-PROJECT```
### Example

```bash
h1 journal transfer --journal test-journal --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 journal stream

Stream or read messages of Journal

### Syntax

```h1 journal stream | --journal JOURNAL [--tag TAG [--tag TAG ...]] [--since SINCE] [--until UNTIL] [--tail TAIL] [--follow] [--head HEAD] [--jsonl-file JSONL-FILE]```
### Examples

#### Display today's log entries

```bash
h1 journal stream --log my-server-log
```

#### View live-stream of log entries for the Nginx application

```bash
h1 journal stream --log my-server-log --follow --filter appName~nginx
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--since SINCE``` |  | Start of period for which you want to receive logs. Format: YYYY-MM-DD |
| ```--until UNTIL``` |  | End of period for which you want to receive logs. Format: YYYY-MM-DD |
| ```--tail TAIL``` |  | Number of lines to show from the end of the logs. All if skipped. |
| ```--follow``` |  | Output current messages in real time as they arrive |
| ```--head HEAD``` |  | Maximum number of lines to show. All if skipped. |
| ```--jsonl-file JSONL-FILE``` |  | Path of output .jsonl file (disables all format option; default: stdout) |

## h1 journal logger

Log messages to Journal

### Syntax

```h1 journal logger | --journal JOURNAL --token TOKEN [--tag TAG [--tag TAG ...]] [--hostname HOSTNAME] [--log-file LOG-FILE]```
### Example

```
echo 'Log message' | h1 journal logger --log my-log --token my-secret-token --hostname srv-01
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |
| ```--token TOKEN``` |  | Token entitling to write to Journal. Can be set also via environment variable HYPERONE_LOG_TOKEN. |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--hostname HOSTNAME``` |  | Name of the host recorded in the log |
| ```--log-file LOG-FILE``` |  | Path of the input text log file (default: stdin) |

## h1 journal credential

Manage your credentials of Journal

## h1 journal credential list

List credential of Journal

### Syntax

```h1 journal credential list | --journal JOURNAL```
### Example

```bash
h1 journal credential list --journal my-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |

## h1 journal credential show

Show credential of Journal

### Syntax

```h1 journal credential show | --journal JOURNAL --credential CREDENTIAL```
### Example

```bash
h1 journal credential show --credential my-credential
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |
| ```--credential CREDENTIAL``` |  | Credential of Journal ID or name |

## h1 journal credential password

Manage your password Journal

## h1 journal credential password list

List password credential of Journal

### Syntax

```h1 journal credential password list | --journal JOURNAL```
### Example

```bash
h1 journal credential password list --journal my-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |

## h1 journal credential password show

Show password credential of Journal

### Syntax

```h1 journal credential password show | --journal JOURNAL --password PASSWORD```
### Example

```bash
h1 journal credential password show --password my-password
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |
| ```--password PASSWORD``` |  | Password credential of Journal ID or name |

## h1 journal credential password rename

Rename password credential of Journal

### Syntax

```h1 journal credential password rename | --journal JOURNAL --password PASSWORD --new-name NEW-NAME```
### Example

```bash
h1 journal credential password rename --password my-password --new-name my-renamed-password --journal my-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |
| ```--password PASSWORD``` |  | Password credential of Journal ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 journal credential password delete

Delete password credential of Journal

### Syntax

```h1 journal credential password delete | --journal JOURNAL --password PASSWORD```
### Example

```bash
h1 journal credential password delete --password my-password --journal my-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |
| ```--password PASSWORD``` |  | Password credential of Journal ID or name |

## h1 journal credential password add

Add password credential of Journal

### Syntax

```h1 journal credential password add | --journal JOURNAL --name NAME [--password PASSWORD]```
### Example

```bash
h1 journal credential password add --name my-pass --password secret-password --journal my-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |
| ```--name NAME``` |  | Name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password. It will be generated and shown if it is not specified. |

## h1 journal credential password list

List password credential of Journal

### Syntax

```h1 journal credential password list | --journal JOURNAL```
### Example

```bash
h1 journal credential password list --journal my-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |

## h1 journal tag

Manage your tag

## h1 journal tag list

List tag

### Syntax

```h1 journal tag list | --journal JOURNAL```
### Example

```bash
h1 journal tag list --journal my-journal
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--journal JOURNAL``` |  | Journal ID or name |

## h1 journal tag add

Add a tag to Journal

### Syntax

```h1 journal tag add | --tag TAG [--tag TAG ...] --journal JOURNAL```
### Example

```bash
h1 journal tag add --journal test-journal --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--journal JOURNAL``` |  | Journal ID or name |

## h1 journal tag delete

Delete a tag of Journal

### Syntax

```h1 journal tag delete | --tag TAG --journal JOURNAL```
### Example

```bash
h1 journal tag delete --journal test-journal --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--journal JOURNAL``` |  | Journal ID or name |

