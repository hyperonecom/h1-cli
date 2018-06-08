# TOC

 * [h1 vm list](#h1-vm-list) - Resource list
 * [h1 vm show](#h1-vm-show) - Resource show
 * [h1 vm create](#h1-vm-create) - VM create
 * [h1 vm delete](#h1-vm-delete) - Resource delete
 * [h1 vm queue](#h1-vm-queue) - Resource history
 * [h1 vm console](#h1-vm-console) - Open VM console in webbrowser
 * [h1 vm stop](#h1-vm-stop) - VM action: stop
 * [h1 vm start](#h1-vm-start) - VM action: start
 * [h1 vm restart](#h1-vm-restart) - VM action: restart
 * [h1 vm turnoff](#h1-vm-turnoff) - VM action: turnoff
 * [h1 vm rename](#h1-vm-rename) - VM action: rename
 * [h1 vm userdata](#h1-vm-userdata) - Userdata for VM
 * [h1 vm disk](#h1-vm-disk) - Manage your DISK
  * [h1 vm disk list](#h1-vm-disk-list) - Resource list
  * [h1 vm disk attach](#h1-vm-disk-attach) - Disk attach
  * [h1 vm disk detach](#h1-vm-disk-detach) - Disk detach
 * [h1 vm nic](#h1-vm-nic) - Manage your NIC
  * [h1 vm nic list](#h1-vm-nic-list) - Resource list
  * [h1 vm nic show](#h1-vm-nic-show) - Resource show
  * [h1 vm nic delete](#h1-vm-nic-delete) - Resource delete
  * [h1 vm nic create](#h1-vm-nic-create) - Network Adapter create
  * [h1 vm nic delete](#h1-vm-nic-delete) - Resource delete
  * [h1 vm nic ip](#h1-vm-nic-ip) - Manage your IP
   * [h1 vm nic ip list](#h1-vm-nic-ip-list) - Resource list
   * [h1 vm nic ip delete](#h1-vm-nic-ip-delete) - Resource delete
   * [h1 vm nic ip add](#h1-vm-nic-ip-add) - Add IP
 * [h1 vm dvd](#h1-vm-dvd) - Manage your DVD
  * [h1 vm dvd list](#h1-vm-dvd-list) - Resource list
  * [h1 vm dvd insert](#h1-vm-dvd-insert) - Insert ISO into DVD drive
  * [h1 vm dvd eject](#h1-vm-dvd-eject) - Eject ISO from DVD drive
 * [h1 vm tag](#h1-vm-tag) - Manage your TAG
  * [h1 vm tag list](#h1-vm-tag-list) - Resource list
  * [h1 vm tag add](#h1-vm-tag-add) - Add a Tag
  * [h1 vm tag delete](#h1-vm-tag-delete) - Add a Tag
 * [h1 vm ssh](#h1-vm-ssh) - Connect to VM using SSH
 * [h1 vm serialport](#h1-vm-serialport) - Serial Console
  * [h1 vm serialport console](#h1-vm-serialport-console) - Connect to VM using Serial Console
  * [h1 vm serialport log](#h1-vm-serialport-log) - Log Serial Console buffer
 * [h1 vm passwordreset](#h1-vm-passwordreset) - Password reset
 * [h1 vm metrics](#h1-vm-metrics) - Get Live Metrics


# Specification

## h1 vm

Manage your VM

## h1 vm list

Resource list

### Syntax

```h1 vm list | ```

## h1 vm show

Resource show

### Syntax

```h1 vm show | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 vm create

VM create

### Syntax

```h1 vm create | --name NAME --type TYPE [--password PASSWORD] [--username USERNAME] [--ssh SSH [--ssh SSH ...]] [--image IMAGE] [--iso ISO] [--os-disk-name OS-DISK-NAME] [--os-disk-type OS-DISK-TYPE] [--os-disk-size OS-DISK-SIZE] [--os-disk OS-DISK] [--network NETWORK] [--ip IP] [--no-start] [--userdata-file USERDATA-FILE]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | VM name |
| ```--type TYPE``` |  | VM type Id |
| ```[--password PASSWORD]``` |  | Password |
| ```[--username USERNAME]``` |  | Username |
| ```[--ssh SSH [--ssh SSH ...]]``` |  | SSH key Id or name that allows access.. The parameter may occur repeatedly |
| ```[--image IMAGE]``` |  | Image id |
| ```[--iso ISO]``` |  | Iso id |
| ```[--os-disk-name OS-DISK-NAME]``` |  | OS disk name |
| ```[--os-disk-type OS-DISK-TYPE]``` |  | OS disk type |
| ```[--os-disk-size OS-DISK-SIZE]``` |  | OS disk size |
| ```[--os-disk OS-DISK]``` |  | OS disk: name,service,size |
| ```[--network NETWORK]``` |  | Network for VM |
| ```[--ip IP]``` |  | IP for VM |
| ```[--no-start]``` |  | Do not start vm after creation |
| ```[--userdata-file USERDATA-FILE]``` |  | Read userdata from file |

## h1 vm delete

Resource delete

### Syntax

```h1 vm delete | delete-id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 vm queue

Resource history

### Syntax

```h1 vm queue | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 vm console

Open VM console in webbrowser

### Syntax

```h1 vm console | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 vm stop

VM action: stop

### Syntax

```h1 vm stop | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | VM name or ID |

## h1 vm start

VM action: start

### Syntax

```h1 vm start | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | VM name or ID |

## h1 vm restart

VM action: restart

### Syntax

```h1 vm restart | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | VM name or ID |

## h1 vm turnoff

VM action: turnoff

### Syntax

```h1 vm turnoff | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | VM name or ID |

## h1 vm rename

VM action: rename

### Syntax

```h1 vm rename | --newname NEWNAME id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--newname NEWNAME``` |  | New name |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | VM name or ID |

## h1 vm userdata

Userdata for VM

### Syntax

```h1 vm userdata | --userdata-file USERDATA-FILE id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--userdata-file USERDATA-FILE``` |  | Read userdata from file |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | VM name or ID |

## h1 vm disk

Manage your DISK

## h1 vm disk list

Resource list

### Syntax

```h1 vm disk list | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

## h1 vm disk attach

Disk attach

### Syntax

```h1 vm disk attach | --vm VM --disk DISK```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |
| ```--disk DISK``` |  | Disk name or ID |

## h1 vm disk detach

Disk detach

### Syntax

```h1 vm disk detach | --vm VM --disk DISK```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |
| ```--disk DISK``` |  | Disk name or ID |

## h1 vm nic

Manage your NIC

## h1 vm nic list

Resource list

### Syntax

```h1 vm nic list | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

## h1 vm nic show

Resource show

### Syntax

```h1 vm nic show | --vm VM id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 vm nic delete

Resource delete

### Syntax

```h1 vm nic delete | --vm VM delete-id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 vm nic create

Network Adapter create

### Syntax

```h1 vm nic create | [--network NETWORK] --type TYPE [--ip IP] --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```[--network NETWORK]``` |  | Network connected to network adapter |
| ```--type TYPE``` |  | Type of network adapter |
| ```[--ip IP]``` |  | IP to assign from network |
| ```--vm VM``` |  | VM name or ID |

## h1 vm nic delete

Resource delete

### Syntax

```h1 vm nic delete | --vm VM delete-id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 vm nic ip

Manage your IP

## h1 vm nic ip list

Resource list

### Syntax

```h1 vm nic ip list | --vm VM --nic NIC```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |
| ```--nic NIC``` |  | NIC name of ID |

## h1 vm nic ip delete

Resource delete

### Syntax

```h1 vm nic ip delete | --vm VM --nic NIC delete-id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |
| ```--nic NIC``` |  | NIC name of ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--delete-id DELETE-ID``` |  | Resource name or ID |

## h1 vm nic ip add

Add IP

### Syntax

```h1 vm nic ip add | --vm VM --nic NIC ip```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |
| ```--nic NIC``` |  | NIC name of ID |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--ip IP``` |  | Public IP address or ID of IP |

## h1 vm dvd

Manage your DVD

## h1 vm dvd list

Resource list

### Syntax

```h1 vm dvd list | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

## h1 vm dvd insert

Insert ISO into DVD drive

### Syntax

```h1 vm dvd insert | --iso ISO --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO name or ID |
| ```--vm VM``` |  | VM name or ID |

## h1 vm dvd eject

Eject ISO from DVD drive

### Syntax

```h1 vm dvd eject | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

## h1 vm tag

Manage your TAG

## h1 vm tag list

Resource list

### Syntax

```h1 vm tag list | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource id |

## h1 vm tag add

Add a Tag

### Syntax

```h1 vm tag add | --tag TAG [--tag TAG ...] id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | New Tag. The parameter may occur repeatedly |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource id |

## h1 vm tag delete

Add a Tag

### Syntax

```h1 vm tag delete | --tag TAG id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource id |

## h1 vm ssh

Connect to VM using SSH

### Syntax

```h1 vm ssh | [--username USERNAME] [--port PORT] [--private] id [command]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```[--username USERNAME]``` |  | Username for ssh connection |
| ```[--port PORT]``` |  | Port for ssh connection |
| ```[--private]``` |  | Use first private network, skip public |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |
| ```[--command COMMAND]``` |  | Command to execute |

## h1 vm serialport

Serial Console

## h1 vm serialport console

Connect to VM using Serial Console

### Syntax

```h1 vm serialport console | [--port PORT] id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```[--port PORT]``` |  | Port to connect |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 vm serialport log

Log Serial Console buffer

### Syntax

```h1 vm serialport log | [--port PORT] id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```[--port PORT]``` |  | Port to connect |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 vm passwordreset

Password reset

### Syntax

```h1 vm passwordreset | --user USER id```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--user USER``` |  | Username |

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

## h1 vm metrics

Get Live Metrics

### Syntax

```h1 vm metrics | id```

### Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--id ID``` |  | Resource identifier |

