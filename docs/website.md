# TOC

  * [h1 website create](#h1-website-create) - Create Website
  * [h1 website list](#h1-website-list) - List Website
  * [h1 website show](#h1-website-show) - Show Website
  * [h1 website delete](#h1-website-delete) - Delete Website
  * [h1 website history](#h1-website-history) - History of Website
  * [h1 website rename](#h1-website-rename) - Rename Website
  * [h1 website service](#h1-website-service) - Manage your services of Website
    * [h1 website service list](#h1-website-service-list) - List Service for Website
    * [h1 website service show](#h1-website-service-show) - Show Service for Website
  * [h1 website access](#h1-website-access) - Manage your Website access rights
    * [h1 website access check](#h1-website-access-check) - Check access rights for Website
  * [h1 website ssh](#h1-website-ssh) - Connect to Website using SSH
  * [h1 website sftp](#h1-website-sftp) - Connect to Website using SFTP
  * [h1 website start](#h1-website-start) - Start Website
  * [h1 website stop](#h1-website-stop) - Stop Website
  * [h1 website domain](#h1-website-domain) - Manage Domain name of Website
    * [h1 website domain add](#h1-website-domain-add) - Add Domain name to Website
    * [h1 website domain list](#h1-website-domain-list) - List Domain name of Website
    * [h1 website domain delete](#h1-website-domain-delete) - Delete Domain name from Website
  * [h1 website image](#h1-website-image) - Update Website image of Website
  * [h1 website log](#h1-website-log) - Live logs of Website
  * [h1 website transfer](#h1-website-transfer) - Transfer Website to other project
  * [h1 website snapshot](#h1-website-snapshot) - Manage your snapshot of Website
    * [h1 website snapshot create](#h1-website-snapshot-create) - Create snapshot of Website
    * [h1 website snapshot show](#h1-website-snapshot-show) - Show snapshot of Website
    * [h1 website snapshot list](#h1-website-snapshot-list) - List snapshot of Website
    * [h1 website snapshot delete](#h1-website-snapshot-delete) - Delete snapshot of Website
    * [h1 website snapshot access](#h1-website-snapshot-access) - Manage your snapshot of Website access rights
      * [h1 website snapshot access check](#h1-website-snapshot-access-check) - Check access rights for snapshot of Website
    * [h1 website snapshot download](#h1-website-snapshot-download) - Download snapshot of Website to a ZFS file
  * [h1 website link](#h1-website-link) - Manage your link of Website
    * [h1 website link create](#h1-website-link-create) - Create link of Website
    * [h1 website link show](#h1-website-link-show) - Show link of Website
    * [h1 website link list](#h1-website-link-list) - List link of Website
    * [h1 website link delete](#h1-website-link-delete) - Delete link of Website
    * [h1 website link access](#h1-website-link-access) - Manage your link of Website access rights
      * [h1 website link access check](#h1-website-link-access-check) - Check access rights for link of Website
  * [h1 website restart](#h1-website-restart) - Restart Website
  * [h1 website env](#h1-website-env) - Manage your environment variables of Website
    * [h1 website env create](#h1-website-env-create) - Create environment variables of Website
    * [h1 website env show](#h1-website-env-show) - Show environment variables of Website
    * [h1 website env list](#h1-website-env-list) - List environment variables of Website
    * [h1 website env delete](#h1-website-env-delete) - Delete environment variables of Website
    * [h1 website env access](#h1-website-env-access) - Manage your environment variables of Website access rights
      * [h1 website env access check](#h1-website-env-access-check) - Check access rights for environment variables of Website
  * [h1 website credential](#h1-website-credential) - Manage your credentials of Website
    * [h1 website credential access](#h1-website-credential-access) - Manage your credential of Website access rights
      * [h1 website credential access check](#h1-website-credential-access-check) - Check access rights for credential of Website
    * [h1 website credential list](#h1-website-credential-list) - List credential of Website
    * [h1 website credential show](#h1-website-credential-show) - Show credential of Website
    * [h1 website credential delete](#h1-website-credential-delete) - Delete credential of Website
    * [h1 website credential cert](#h1-website-credential-cert) - Manage your certificate credential of Website
      * [h1 website credential cert list](#h1-website-credential-cert-list) - List certificate credential of Website
      * [h1 website credential cert show](#h1-website-credential-cert-show) - Show certificate credential of Website
      * [h1 website credential cert rename](#h1-website-credential-cert-rename) - Rename certificate credential of Website
      * [h1 website credential cert delete](#h1-website-credential-cert-delete) - Delete certificate credential of Website
      * [h1 website credential cert add](#h1-website-credential-cert-add) - Add certificate credential of Website
      * [h1 website credential cert list](#h1-website-credential-cert-list) - List certificate credential of Website
    * [h1 website credential password](#h1-website-credential-password) - Manage your password Website
      * [h1 website credential password list](#h1-website-credential-password-list) - List password credential of Website
      * [h1 website credential password show](#h1-website-credential-password-show) - Show password credential of Website
      * [h1 website credential password rename](#h1-website-credential-password-rename) - Rename password credential of Website
      * [h1 website credential password delete](#h1-website-credential-password-delete) - Delete password credential of Website
      * [h1 website credential password add](#h1-website-credential-password-add) - Add password credential of Website
      * [h1 website credential password list](#h1-website-credential-password-list) - List password credential of Website
  * [h1 website tag](#h1-website-tag) - Manage your tag
    * [h1 website tag list](#h1-website-tag-list) - List tag
    * [h1 website tag add](#h1-website-tag-add) - Add a tag to Website
    * [h1 website tag delete](#h1-website-tag-delete) - Delete a tag of Website


# Specification

## h1 website

Manage your Website

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

### Examples

#### Create Website with SSH credential

```bash
h1 website create --name my-website --type website --image 'h1cr.io/website/php-apache:7.2' --ssh my-key
```

Hint: Use ```h1 project credentials list``` or ```h1 user credentials list``` to list available SSH keys.

## h1 website create

Create Website

### Syntax

```h1 website create | --name NAME --type TYPE --image IMAGE [--password PASSWORD [--password PASSWORD ...]] [--ssh SSH [--ssh SSH ...]] [--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]] [--tag TAG [--tag TAG ...]] [--source-website SOURCE-WEBSITE] [--source-snapshot SOURCE-SNAPSHOT]```
### Examples

#### Create Website with SSH credential

```bash
h1 website create --name my-website --type website --image 'h1cr.io/website/php-apache:7.2' --ssh my-key
```

Hint: Use ```h1 project credentials list``` or ```h1 user credentials list``` to list available SSH keys.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Website name |
| ```--type TYPE``` |  | Website type name or ID |
| ```--image IMAGE``` |  | Website image |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD [--password PASSWORD ...]``` |  | Password to access. Recommends to use SSH keys. The parameter may occur repeatedly |
| ```--ssh SSH [--ssh SSH ...]``` |  | SSH key ID or name that allows access. The parameter may occur repeatedly |
| ```--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]``` |  | Read SSH key from file. The parameter may occur repeatedly |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--source-website SOURCE-WEBSITE``` |  | Website ID or name which contains Snapshot |
| ```--source-snapshot SOURCE-SNAPSHOT``` |  | Snapshots to use as base of new Website |

## h1 website list

List Website

### Syntax

```h1 website list | ```
### Example

```bash
h1 website list
```

## h1 website show

Show Website

### Syntax

```h1 website show | --website WEBSITE```
### Example

```bash
h1 website show --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website delete

Delete Website

### Syntax

```h1 website delete | --website WEBSITE```
### Example

```bash
h1 website delete --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website history

History of Website

### Syntax

```h1 website history | --website WEBSITE```
### Example

```bash
h1 website history --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website rename

Rename Website

### Syntax

```h1 website rename | --website WEBSITE --new-name NEW-NAME```
### Example

```bash
h1 website rename --website my-website --new-name my-renamed-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 website service

Manage your services of Website

## h1 website service list

List Service for Website

### Syntax

```h1 website service list | --website WEBSITE```
### Example

```bash
h1 website service list --website test-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website service show

Show Service for Website

### Syntax

```h1 website service show | --website WEBSITE --service SERVICE```
### Example

```bash
h1 website service show --service my-service --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--service SERVICE``` |  | Service for Website ID or name |

## h1 website access

Manage your Website access rights

## h1 website access check

Check access rights for Website

### Syntax

```h1 website access check | --website WEBSITE```
### Example

```bash
h1 website access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website ssh

Connect to Website using SSH

### Syntax

```h1 website ssh | --website WEBSITE [--command COMMAND]```
### Example

```bash
h1 website ssh --website my-website
```

Note: Need valid credentials to access resource any way.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--command COMMAND``` |  | Command to execute |

## h1 website sftp

Connect to Website using SFTP

### Syntax

```h1 website sftp | --website WEBSITE```
### Example

```
h1 website sftp --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website start

Start Website

### Syntax

```h1 website start | --website WEBSITE```
### Example

```
h1 website start --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website stop

Stop Website

### Syntax

```h1 website stop | --website WEBSITE```
### Example

```
h1 website stop --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website domain

Manage Domain name of Website

## h1 website domain add

Add Domain name to Website

### Syntax

```h1 website domain add | --domain DOMAIN [--domain DOMAIN ...] --website WEBSITE```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--domain DOMAIN [--domain DOMAIN ...]``` |  | Domain name. The parameter may occur repeatedly |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website domain list

List Domain name of Website

### Syntax

```h1 website domain list | --website WEBSITE```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website domain delete

Delete Domain name from Website

### Syntax

```h1 website domain delete | --domain DOMAIN [--domain DOMAIN ...] --website WEBSITE```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--domain DOMAIN [--domain DOMAIN ...]``` |  | Domain name. The parameter may occur repeatedly |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website image

Update Website image of Website

### Syntax

```h1 website image | --image IMAGE --website WEBSITE```
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--image IMAGE``` |  | Website image |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website log

Live logs of Website

### Syntax

```h1 website log | --website WEBSITE [--log-file LOG-FILE] [--head HEAD]```
### Example

```
h1 website log --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--log-file LOG-FILE``` |  | Path of output log file |
| ```--head HEAD``` |  | Number of incoming messages to show |

## h1 website transfer

Transfer Website to other project

### Syntax

```h1 website transfer | --website WEBSITE --new-project NEW-PROJECT```
### Example

```bash
h1 website transfer --website test-website --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 website snapshot

Manage your snapshot of Website

### Examples

#### List available snaspshots

```bash
h1 website snapshot list --website my-website
```

Hint: Use ```h1 website list``` to list available *Website*.

## h1 website snapshot create

Create snapshot of Website

### Syntax

```h1 website snapshot create | --name NAME --website WEBSITE```
### Examples

#### Create Website with SSH credential

```bash
h1 website snapshot create --name my-website --type website --image 'h1cr.io/website/php-apache:7.2' --ssh my-key
```

Hint: Use ```h1 project credentials list``` or ```h1 user credentials list``` to list available SSH keys.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Snapshot name |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website snapshot show

Show snapshot of Website

### Syntax

```h1 website snapshot show | --website WEBSITE --snapshot SNAPSHOT```
### Example

```bash
h1 website snapshot show --snapshot my-snapshot --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--snapshot SNAPSHOT``` |  | Snapshot of Website ID or name |

## h1 website snapshot list

List snapshot of Website

### Syntax

```h1 website snapshot list | --website WEBSITE```
### Example

```bash
h1 website snapshot list --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website snapshot delete

Delete snapshot of Website

### Syntax

```h1 website snapshot delete | --website WEBSITE --snapshot SNAPSHOT```
### Example

```bash
h1 website snapshot delete --snapshot my-snapshot --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--snapshot SNAPSHOT``` |  | Snapshot of Website ID or name |

## h1 website snapshot access

Manage your snapshot of Website access rights

## h1 website snapshot access check

Check access rights for snapshot of Website

### Syntax

```h1 website snapshot access check | --website WEBSITE --snapshot SNAPSHOT```
### Example

```bash
h1 website snapshot access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--snapshot SNAPSHOT``` |  | Snapshot of Website ID or name |

## h1 website snapshot download

Download snapshot of Website to a ZFS file

### Syntax

```h1 website snapshot download | --website WEBSITE --snapshot SNAPSHOT --destination-file DESTINATION-FILE [--no-progress] [--difference DIFFERENCE]```
### Example

```
h1 website snapshot download --website my-website --snapshot my-snapshot
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--snapshot SNAPSHOT``` |  | Snapshot name or ID |
| ```--destination-file DESTINATION-FILE``` |  | Path to .vhdx file to save |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--no-progress``` |  | Disable progress bar |
| ```--difference DIFFERENCE``` |  | Snapshot relative to which difference should be downloaded |

## h1 website link

Manage your link of Website

### Examples

#### List available links

```bash
h1 website link list --website my-website
```

Hint: Use ```h1 website list``` to list available *Website*.

## h1 website link create

Create link of Website

### Syntax

```h1 website link create | --purpose {log} --actor ACTOR --resource RESOURCE --website WEBSITE```
### Examples

#### Create Website with SSH credential

```bash
h1 website link create --purpose log --actor /iam/project/5af0bbbcb7802508ad844caa/sa/5e73a73f9a229046fa196da9
 --resource RESOURCE --website WEBSITE
 --name my-website --type website --image 'h1cr.io/website/php-apache:7.2' --ssh my-key
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--purpose {log}``` |  | Purpose |
| ```--actor ACTOR``` |  | Actor ID |
| ```--resource RESOURCE``` |  | Target resource ID |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website link show

Show link of Website

### Syntax

```h1 website link show | --website WEBSITE --link LINK```
### Example

```bash
h1 website link show --link my-link --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--link LINK``` |  | Link of Website ID or name |

## h1 website link list

List link of Website

### Syntax

```h1 website link list | --website WEBSITE```
### Example

```bash
h1 website link list --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website link delete

Delete link of Website

### Syntax

```h1 website link delete | --website WEBSITE --link LINK```
### Example

```bash
h1 website link delete --link my-link --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--link LINK``` |  | Link of Website ID or name |

## h1 website link access

Manage your link of Website access rights

## h1 website link access check

Check access rights for link of Website

### Syntax

```h1 website link access check | --website WEBSITE --link LINK```
### Example

```bash
h1 website link access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--link LINK``` |  | Link of Website ID or name |

## h1 website restart

Restart Website

### Syntax

```h1 website restart | --website WEBSITE```
### Example

```bash
h1 website restart --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website env

Manage your environment variables of Website

### Examples

#### Create environment variable of Website

```bash
h1 website env create --website my-website --name DEBUG --value false
```

## h1 website env create

Create environment variables of Website

### Syntax

```h1 website env create | --name NAME --value VALUE --website WEBSITE```
### Examples

#### Create environment variable of Website

```bash
h1 website env create --website my-website --name DEBUG --value false
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Environment variable name |
| ```--value VALUE``` |  | Environment variable value |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website env show

Show environment variables of Website

### Syntax

```h1 website env show | --website WEBSITE --env ENV```
### Example

```bash
h1 website env show --env my-env
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--env ENV``` |  | Environment variables of Website ID or name |

## h1 website env list

List environment variables of Website

### Syntax

```h1 website env list | --website WEBSITE```
### Example

```bash
h1 website env list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website env delete

Delete environment variables of Website

### Syntax

```h1 website env delete | --website WEBSITE --env ENV```
### Example

```bash
h1 website env delete --env my-env
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--env ENV``` |  | Environment variables of Website ID or name |

## h1 website env access

Manage your environment variables of Website access rights

## h1 website env access check

Check access rights for environment variables of Website

### Syntax

```h1 website env access check | --website WEBSITE --env ENV```
### Example

```bash
h1 website env access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--env ENV``` |  | Environment variables of Website ID or name |

## h1 website credential

Manage your credentials of Website

## h1 website credential access

Manage your credential of Website access rights

## h1 website credential access check

Check access rights for credential of Website

### Syntax

```h1 website credential access check | --website WEBSITE --credential CREDENTIAL```
### Example

```bash
h1 website credential access check --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--credential CREDENTIAL``` |  | Credential of Website ID or name |

## h1 website credential list

List credential of Website

### Syntax

```h1 website credential list | --website WEBSITE```
### Example

```bash
h1 website credential list --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website credential show

Show credential of Website

### Syntax

```h1 website credential show | --website WEBSITE --credential CREDENTIAL```
### Example

```bash
h1 website credential show --credential my-credential
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--credential CREDENTIAL``` |  | Credential of Website ID or name |

## h1 website credential delete

Delete credential of Website

### Syntax

```h1 website credential delete | --website WEBSITE --credential CREDENTIAL```
### Example

```bash
h1 website credential delete --credential my-credential --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--credential CREDENTIAL``` |  | Credential of Website ID or name |

## h1 website credential cert

Manage your certificate credential of Website

## h1 website credential cert list

List certificate credential of Website

### Syntax

```h1 website credential cert list | --website WEBSITE```
### Example

```bash
h1 website credential cert list --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website credential cert show

Show certificate credential of Website

### Syntax

```h1 website credential cert show | --website WEBSITE --cert CERT```
### Example

```bash
h1 website credential cert show --cert my-cert
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--cert CERT``` |  | Certificate credential of Website ID or name |

## h1 website credential cert rename

Rename certificate credential of Website

### Syntax

```h1 website credential cert rename | --website WEBSITE --cert CERT --new-name NEW-NAME```
### Example

```bash
h1 website credential cert rename --cert my-cert --new-name my-renamed-cert --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--cert CERT``` |  | Certificate credential of Website ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 website credential cert delete

Delete certificate credential of Website

### Syntax

```h1 website credential cert delete | --website WEBSITE --cert CERT```
### Example

```bash
h1 website credential cert delete --cert my-cert --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--cert CERT``` |  | Certificate credential of Website ID or name |

## h1 website credential cert add

Add certificate credential of Website

### Syntax

```h1 website credential cert add | --website WEBSITE --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE]```
### Example

```bash
h1 website credential cert add --website my-website --name my-key --sshkey my-home-ssh
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--name NAME``` |  | Certificate name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--sshkey SSHKEY``` |  | Public SSH key ID or name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 website credential cert list

List certificate credential of Website

### Syntax

```h1 website credential cert list | --website WEBSITE```
### Example

```bash
h1 website credential cert list --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website credential password

Manage your password Website

## h1 website credential password list

List password credential of Website

### Syntax

```h1 website credential password list | --website WEBSITE```
### Example

```bash
h1 website credential password list --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website credential password show

Show password credential of Website

### Syntax

```h1 website credential password show | --website WEBSITE --password PASSWORD```
### Example

```bash
h1 website credential password show --password my-password
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--password PASSWORD``` |  | Password credential of Website ID or name |

## h1 website credential password rename

Rename password credential of Website

### Syntax

```h1 website credential password rename | --website WEBSITE --password PASSWORD --new-name NEW-NAME```
### Example

```bash
h1 website credential password rename --password my-password --new-name my-renamed-password --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--password PASSWORD``` |  | Password credential of Website ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 website credential password delete

Delete password credential of Website

### Syntax

```h1 website credential password delete | --website WEBSITE --password PASSWORD```
### Example

```bash
h1 website credential password delete --password my-password --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--password PASSWORD``` |  | Password credential of Website ID or name |

## h1 website credential password add

Add password credential of Website

### Syntax

```h1 website credential password add | --website WEBSITE --name NAME [--password PASSWORD]```
### Example

```bash
h1 website credential password add --name my-pass --password secret-password --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |
| ```--name NAME``` |  | Name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password. It will be generated and shown if it is not specified. |

## h1 website credential password list

List password credential of Website

### Syntax

```h1 website credential password list | --website WEBSITE```
### Example

```bash
h1 website credential password list --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website tag

Manage your tag

## h1 website tag list

List tag

### Syntax

```h1 website tag list | --website WEBSITE```
### Example

```bash
h1 website tag list --website my-website
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website tag add

Add a tag to Website

### Syntax

```h1 website tag add | --tag TAG [--tag TAG ...] --website WEBSITE```
### Example

```bash
h1 website tag add --website test-website --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--website WEBSITE``` |  | Website ID or name |

## h1 website tag delete

Delete a tag of Website

### Syntax

```h1 website tag delete | --tag TAG --website WEBSITE```
### Example

```bash
h1 website tag delete --website test-website --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--website WEBSITE``` |  | Website ID or name |

