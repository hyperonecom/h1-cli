# TOC

 * [h1 vm list](#h1-vm-list) - List Virtual machine
 * [h1 vm show](#h1-vm-show) - Show Virtual machine
 * [h1 vm create](#h1-vm-create) - Virtual machine create
 * [h1 vm delete](#h1-vm-delete) - Delete Virtual machine
 * [h1 vm queue](#h1-vm-queue) - History of Virtual machine
 * [h1 vm console](#h1-vm-console) - Open Virtual machine console in webbrowser
 * [h1 vm stop](#h1-vm-stop) - Stop Virtual machine
 * [h1 vm start](#h1-vm-start) - Start Virtual machine
 * [h1 vm restart](#h1-vm-restart) - Restart Virtual machine
 * [h1 vm turnoff](#h1-vm-turnoff) - Turnoff Virtual machine
 * [h1 vm rename](#h1-vm-rename) - Rename Virtual machine
 * [h1 vm userdata](#h1-vm-userdata) - Manage userdata for Virtual machine
 * [h1 vm disk](#h1-vm-disk) - Manage your Disk
  * [h1 vm disk list](#h1-vm-disk-list) - List Disk
  * [h1 vm disk attach](#h1-vm-disk-attach) - Attach disk to Disk
  * [h1 vm disk detach](#h1-vm-disk-detach) - Detach disk from Disk
 * [h1 vm nic](#h1-vm-nic) - Manage your Network adapter
  * [h1 vm nic list](#h1-vm-nic-list) - List Network adapter
  * [h1 vm nic show](#h1-vm-nic-show) - Show Network adapter
  * [h1 vm nic delete](#h1-vm-nic-delete) - Delete Network adapter
  * [h1 vm nic create](#h1-vm-nic-create) - Create Network adapter
  * [h1 vm nic delete](#h1-vm-nic-delete) - Delete Network adapter
  * [h1 vm nic ip](#h1-vm-nic-ip) - Manage your IP  address of network adapter
   * [h1 vm nic ip list](#h1-vm-nic-ip-list) - List IP  address of network adapter
   * [h1 vm nic ip delete](#h1-vm-nic-ip-delete) - Delete IP  address of network adapter
   * [h1 vm nic ip add](#h1-vm-nic-ip-add) - Add IP address to IP  address of network adapter
 * [h1 vm dvd](#h1-vm-dvd) - Manage your DVD
  * [h1 vm dvd list](#h1-vm-dvd-list) - List DVD
  * [h1 vm dvd insert](#h1-vm-dvd-insert) - Insert ISO into DVD drive of DVD
  * [h1 vm dvd eject](#h1-vm-dvd-eject) - Eject ISO from DVD drive of DVD
 * [h1 vm tag](#h1-vm-tag) - Manage your tag
  * [h1 vm tag list](#h1-vm-tag-list) - List tag
  * [h1 vm tag add](#h1-vm-tag-add) - Add a tag to Tag of virtual machine
  * [h1 vm tag delete](#h1-vm-tag-delete) - Add a tag of Tag of virtual machine
 * [h1 vm ssh](#h1-vm-ssh) - Connect to Virtual machine using SSH
 * [h1 vm serialport](#h1-vm-serialport) - Serial Console
  * [h1 vm serialport console](#h1-vm-serialport-console) - Connect to Virtual machine using Serial Console
  * [h1 vm serialport log](#h1-vm-serialport-log) - Log Serial Console buffer of Virtual machine
 * [h1 vm passwordreset](#h1-vm-passwordreset) - Password reset for Virtual machine
 * [h1 vm metrics](#h1-vm-metrics) - Get live metrics of Virtual machine


# Specification

## h1 vm

Manage your Virtual machine

## h1 vm list

List Virtual machine

### Syntax

```h1 vm list | ```

## h1 vm show

Show Virtual machine

### Syntax

```h1 vm show | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm create

Virtual machine create

### Syntax

```h1 vm create | --name NAME --type TYPE [--password PASSWORD] [--username USERNAME] [--ssh SSH [--ssh SSH ...]] [--image IMAGE] [--iso ISO] [--os-disk-name OS-DISK-NAME] [--os-disk-type OS-DISK-TYPE] [--os-disk-size OS-DISK-SIZE] [--os-disk OS-DISK] [--network NETWORK] [--ip IP] [--no-start] [--userdata-file USERDATA-FILE]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Virtual machine name |
| ```--type TYPE``` |  | Virtual machine type name or ID |
| ```[--password PASSWORD]``` |  | Initial administrator user password |
| ```[--username USERNAME]``` |  | Initial administrator username |
| ```[--ssh SSH [--ssh SSH ...]]``` |  | SSH key ID or name that allows access.. The parameter may occur repeatedly |
| ```[--image IMAGE]``` |  | Image ID or name |
| ```[--iso ISO]``` |  | ISO ID or name |
| ```[--os-disk-name OS-DISK-NAME]``` |  | OS disk name |
| ```[--os-disk-type OS-DISK-TYPE]``` |  | OS disk type |
| ```[--os-disk-size OS-DISK-SIZE]``` |  | OS disk size |
| ```[--os-disk OS-DISK]``` |  | OS disk: name,service,size |
| ```[--network NETWORK]``` |  | Network ID or name to attach |
| ```[--ip IP]``` |  | IP address for Virtual machine |
| ```[--no-start]``` |  | Do not start Virtual machine after creation |
| ```[--userdata-file USERDATA-FILE]``` |  | Read userdata from file |

## h1 vm delete

Delete Virtual machine

### Syntax

```h1 vm delete | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm queue

History of Virtual machine

### Syntax

```h1 vm queue | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm console

Open Virtual machine console in webbrowser

### Syntax

```h1 vm console | ```

## h1 vm stop

Stop Virtual machine

### Syntax

```h1 vm stop | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm start

Start Virtual machine

### Syntax

```h1 vm start | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm restart

Restart Virtual machine

### Syntax

```h1 vm restart | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm turnoff

Turnoff Virtual machine

### Syntax

```h1 vm turnoff | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm rename

Rename Virtual machine

### Syntax

```h1 vm rename | --vm VM --newname NEWNAME```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--newname NEWNAME``` |  | New name |

## h1 vm userdata

Manage userdata for Virtual machine

### Syntax

```h1 vm userdata | --vm VM --userdata-file USERDATA-FILE```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--userdata-file USERDATA-FILE``` |  | Read userdata from file |

## h1 vm disk

Manage your Disk

## h1 vm disk list

List Disk

### Syntax

```h1 vm disk list | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm disk attach

Attach disk to Disk

### Syntax

```h1 vm disk attach | --vm VM --disk DISK```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--disk DISK``` |  | Disk name or ID |

## h1 vm disk detach

Detach disk from Disk

### Syntax

```h1 vm disk detach | --vm VM --disk DISK```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--disk DISK``` |  | Disk name or ID |

## h1 vm nic

Manage your Network adapter

## h1 vm nic list

List Network adapter

### Syntax

```h1 vm nic list | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 vm nic show

Show Network adapter

### Syntax

```h1 vm nic show | --nic NIC```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm nic delete

Delete Network adapter

### Syntax

```h1 vm nic delete | --vm VM --nic NIC```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm nic create

Create Network adapter

### Syntax

```h1 vm nic create | [--network NETWORK] --type TYPE [--ip IP] --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```[--network NETWORK]``` |  | Network connected to network adapter |
| ```--type TYPE``` |  | Type of network adapter |
| ```[--ip IP]``` |  | IP to assign from network |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 vm nic delete

Delete Network adapter

### Syntax

```h1 vm nic delete | --vm VM --nic NIC```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm nic ip

Manage your IP  address of network adapter

## h1 vm nic ip list

List IP  address of network adapter

### Syntax

```h1 vm nic ip list | --vm VM --nic NIC```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID |

## h1 vm nic ip delete

Delete IP  address of network adapter

### Syntax

```h1 vm nic ip delete | --vm VM --nic NIC --ip IP```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID |
| ```--ip IP``` |  | IP  address of network adapter ID or name |

## h1 vm nic ip add

Add IP address to IP  address of network adapter

### Syntax

```h1 vm nic ip add | --vm VM --nic NIC --ip IP```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID |
| ```--ip IP``` |  | Public IP address or ID of IP |

## h1 vm dvd

Manage your DVD

## h1 vm dvd list

List DVD

### Syntax

```h1 vm dvd list | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 vm dvd insert

Insert ISO into DVD drive of DVD

### Syntax

```h1 vm dvd insert | --iso ISO --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO name or ID |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 vm dvd eject

Eject ISO from DVD drive of DVD

### Syntax

```h1 vm dvd eject | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 vm tag

Manage your tag

## h1 vm tag list

List tag

### Syntax

```h1 vm tag list | ```

## h1 vm tag add

Add a tag to Tag of virtual machine

### Syntax

```h1 vm tag add | --tag TAG [--tag TAG ...] --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | New tag. The parameter may occur repeatedly |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm tag delete

Add a tag of Tag of virtual machine

### Syntax

```h1 vm tag delete | --tag TAG --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm ssh

Connect to Virtual machine using SSH

### Syntax

```h1 vm ssh | [--username USERNAME] [--port PORT] [--private] [--command COMMAND] --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```[--username USERNAME]``` |  | Username for ssh connection |
| ```[--port PORT]``` |  | Port for ssh connection |
| ```[--private]``` |  | Use first private network, skip public |
| ```[--command COMMAND]``` |  | Command to execute |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm serialport

Serial Console

## h1 vm serialport console

Connect to Virtual machine using Serial Console

### Syntax

```h1 vm serialport console | --vm VM [--port PORT]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```[--port PORT]``` |  | Port to connect |

## h1 vm serialport log

Log Serial Console buffer of Virtual machine

### Syntax

```h1 vm serialport log | --vm VM [--port PORT]```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```[--port PORT]``` |  | Port to connect |

## h1 vm passwordreset

Password reset for Virtual machine

### Syntax

```h1 vm passwordreset | --user USER --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--user USER``` |  | Username |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm metrics

Get live metrics of Virtual machine

### Syntax

```h1 vm metrics | --vm VM```

### Required options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

