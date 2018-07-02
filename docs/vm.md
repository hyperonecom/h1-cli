# TOC

  * [h1 vm list](#h1-vm-list) - List virtual machine
  * [h1 vm show](#h1-vm-show) - Show virtual machine
  * [h1 vm history](#h1-vm-history) - History of virtual machine
  * [h1 vm create](#h1-vm-create) - Create virtual machine
  * [h1 vm delete](#h1-vm-delete) - Delete virtual machine
  * [h1 vm console](#h1-vm-console) - Open virtual machine console in web-browser
  * [h1 vm stop](#h1-vm-stop) - Stop virtual machine
  * [h1 vm start](#h1-vm-start) - Start virtual machine
  * [h1 vm restart](#h1-vm-restart) - Restart virtual machine
  * [h1 vm turnoff](#h1-vm-turnoff) - Turnoff virtual machine
  * [h1 vm rename](#h1-vm-rename) - Rename virtual machine
  * [h1 vm userdata](#h1-vm-userdata) - Manage userdata for virtual machine
  * [h1 vm disk](#h1-vm-disk) - Manage your disk
    * [h1 vm disk list](#h1-vm-disk-list) - List disk
    * [h1 vm disk attach](#h1-vm-disk-attach) - Attach disk to disk
    * [h1 vm disk detach](#h1-vm-disk-detach) - Detach disk from disk
  * [h1 vm nic](#h1-vm-nic) - Manage your network adapter
    * [h1 vm nic list](#h1-vm-nic-list) - List network adapter
    * [h1 vm nic show](#h1-vm-nic-show) - Show network adapter
    * [h1 vm nic delete](#h1-vm-nic-delete) - Delete network adapter
    * [h1 vm nic create](#h1-vm-nic-create) - Create network adapter
    * [h1 vm nic history](#h1-vm-nic-history) - History of nic
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
  * [h1 vm ssh](#h1-vm-ssh) - Connect to virtual machine using SSH
  * [h1 vm serialport](#h1-vm-serialport) - Serial Console
    * [h1 vm serialport console](#h1-vm-serialport-console) - Connect to virtual machine using Serial Console
    * [h1 vm serialport log](#h1-vm-serialport-log) - Log Serial Console buffer of virtual machine
  * [h1 vm passwordreset](#h1-vm-passwordreset) - Password reset for virtual machine
  * [h1 vm metrics](#h1-vm-metrics) - Get live metrics of virtual machine


# Specification

## h1 vm

Manage your virtual machine

## h1 vm list

List virtual machine

### Syntax

```h1 vm list | ```

## h1 vm show

Show virtual machine

### Syntax

```h1 vm show | --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm history

History of virtual machine

### Syntax

```h1 vm history | --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm create

Create virtual machine

### Syntax

```h1 vm create | --name NAME --type TYPE [--password PASSWORD] [--username USERNAME] [--ssh SSH [--ssh SSH ...]] [--image IMAGE] [--iso ISO] [--os-disk-name OS-DISK-NAME] [--os-disk-type OS-DISK-TYPE] [--os-disk-size OS-DISK-SIZE] [--os-disk OS-DISK] [--network NETWORK] [--ip IP] [--no-start] [--userdata-file USERDATA-FILE]```

### Examples

#### Create a Ubuntu virtual machine

```bash
h1 vm create --name test-vm --os-disk os-disk-0,ssd,10 --type a1.nano --image debian --ssh my-ssh
```

Note (1): To identify available disk type use ```h1 service list --resource disk``` .

Note (2): To identify available instance type use ```h1 service list --resource vm --type flavour```.

Note (3): To list available SSH keys use ```h1 project credentials list``` or ```h1 user credentials list```.

Note (4): To list available cloud-provided images use ```h1 image list --recommend```.
          For them you can also ``<distro>[:<release>]``` as ID.

#### Create a diskless virtual machine in private network

```bash
h1 vm create --name test-vm --type a1.nano --network my-network --ssh so-wp
```

Note: You can mount ISO disk and provide stateless services. 
      This allows you to reduce the costs of server disks.

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

Delete virtual machine

### Syntax

```h1 vm delete | --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm console

Open virtual machine console in web-browser

### Syntax

```h1 vm console | --vm VM```

### Examples

#### Open virtual machine console in web-browser

```bash
h1 vm console --vm test-vm
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm stop

Stop virtual machine

### Syntax

```h1 vm stop | --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm start

Start virtual machine

### Syntax

```h1 vm start | --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm restart

Restart virtual machine

### Syntax

```h1 vm restart | --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm turnoff

Turnoff virtual machine

### Syntax

```h1 vm turnoff | --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm rename

Rename virtual machine

### Syntax

```h1 vm rename | --vm VM --new-name NEW-NAME```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 vm userdata

Manage userdata for virtual machine

### Syntax

```h1 vm userdata | --vm VM --userdata-file USERDATA-FILE```

### Examples

#### Set userdata for virtual machine

```bash
echo "any-data" > data.txt
 h1 vm userdata --vm test-vm --userdata-file 'data.txt'
```
 
 # Read userdata for virtual machine
 
```bash
$ h1 vm show --vm test-vm --query '[].{data:userMetadata}' --output tsv | openssl base64 -d
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--userdata-file USERDATA-FILE``` |  | Read userdata from file |

## h1 vm disk

Manage your disk

## h1 vm disk list

List disk

### Syntax

```h1 vm disk list | --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm disk attach

Attach disk to disk

### Syntax

```h1 vm disk attach | --vm VM --disk DISK```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--disk DISK``` |  | Disk name or ID |

## h1 vm disk detach

Detach disk from disk

### Syntax

```h1 vm disk detach | --vm VM --disk DISK```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--disk DISK``` |  | Disk name or ID |

## h1 vm nic

Manage your network adapter

### Examples

#### Get IP address of virtual machine

```bash
h1 vm nic list --vm test-vm --output json --query "[].{ip:join(',', ip[].address)}" --output tsv
```

## h1 vm nic list

List network adapter

### Syntax

```h1 vm nic list | --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 vm nic show

Show network adapter

### Syntax

```h1 vm nic show | --vm VM --nic NIC```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm nic delete

Delete network adapter

### Syntax

```h1 vm nic delete | --vm VM --nic NIC```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm nic create

Create network adapter

### Syntax

```h1 vm nic create | [--network NETWORK] --type TYPE [--ip IP] --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```[--network NETWORK]``` |  | Network connected to network adapter |
| ```--type TYPE``` |  | Type of network adapter |
| ```[--ip IP]``` |  | IP to assign from network |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 vm nic history

History of nic

### Syntax

```h1 vm nic history | --nic NIC --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--nic NIC``` |  | Nic ID or name |
| ```--vm VM``` |  | Virtual machine name or ID |

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

### Examples

#### Add IP address to network adapter

```bash
h1 vm nic ip add --vm test-vm2 --nic 5b1f28ffdadb705edd76b411 --ip 5784e97be2627505227b584c
```

Note: Use ```h1 vm nic list --vm test-vm2``` to identify network adapter.

Note: Use ```h1 ip list``` to list available IP address or ```h1 ip create``` to create a new one.

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

```h1 vm dvd insert | --vm VM --iso ISO```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--iso ISO``` |  | ISO name or ID |

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

```h1 vm tag list | --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm tag add

Add a tag to Tag of virtual machine

### Syntax

```h1 vm tag add | --vm VM --tag TAG [--tag TAG ...]```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--tag TAG [--tag TAG ...]``` |  | New tag. The parameter may occur repeatedly |

## h1 vm tag delete

Add a tag of Tag of virtual machine

### Syntax

```h1 vm tag delete | --tag TAG --vm VM```

### Examples

#### Remove a tag

```bash
h1 vm tag delete --vm test-vm --tag prod
```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm ssh

Connect to virtual machine using SSH

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

Connect to virtual machine using Serial Console

### Syntax

```h1 vm serialport console | --vm VM [--port PORT]```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```[--port PORT]``` |  | Port to connect |

## h1 vm serialport log

Log Serial Console buffer of virtual machine

### Syntax

```h1 vm serialport log | --vm VM [--port PORT]```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```[--port PORT]``` |  | Port to connect |

## h1 vm passwordreset

Password reset for virtual machine

### Syntax

```h1 vm passwordreset | --user USER --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | Username |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm metrics

Get live metrics of virtual machine

### Syntax

```h1 vm metrics | --vm VM```

### Required options

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

