# h1 vm

## Syntax

```h1 vm | ```

# h1 vm list

## Syntax

```h1 vm list | ```

# h1 vm show

## Syntax

```h1 vm show | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 vm create

## Syntax

```h1 vm create | --name NAME --type TYPE [--password PASSWORD] [--username USERNAME] [--ssh SSH [--ssh SSH ...]] [--image IMAGE] [--iso ISO] [--os-disk-name OS-DISK-NAME] [--os-disk-type OS-DISK-TYPE] [--os-disk-size OS-DISK-SIZE] [--os-disk OS-DISK] [--network NETWORK] [--ip IP] [--no-start NO-START] [--userdata-file USERDATA-FILE]```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--name NAME``` |  | VM name |
| ```--type TYPE``` |  | VM type Id |
| ```--password PASSWORD``` |  | Password |
| ```--username USERNAME``` |  | Username |
| ```--ssh SSH``` |  | SSH key Id or name that allows access.. The parameter may occur repeatedly |
| ```--image IMAGE``` |  | Image id |
| ```--iso ISO``` |  | Iso id |
| ```--os-disk-name OS-DISK-NAME``` |  | OS disk name |
| ```--os-disk-type OS-DISK-TYPE``` |  | OS disk type |
| ```--os-disk-size OS-DISK-SIZE``` |  | OS disk size |
| ```--os-disk OS-DISK``` |  | OS disk: name,service,size |
| ```--network NETWORK``` |  | Network for VM |
| ```--ip IP``` |  | IP for VM |
| ```--no-start NO-START``` |  | Do not start vm after creation |
| ```--userdata-file USERDATA-FILE``` |  | Read userdata from file |

# h1 vm delete

## Syntax

```h1 vm delete | delete-id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

# h1 vm queue

## Syntax

```h1 vm queue | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 vm console

## Syntax

```h1 vm console | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 vm stop

## Syntax

```h1 vm stop | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | VM name or ID |

# h1 vm start

## Syntax

```h1 vm start | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | VM name or ID |

# h1 vm restart

## Syntax

```h1 vm restart | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | VM name or ID |

# h1 vm turnoff

## Syntax

```h1 vm turnoff | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | VM name or ID |

# h1 vm rename

## Syntax

```h1 vm rename | --newname NEWNAME id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--newname NEWNAME``` |  | New name |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | VM name or ID |

# h1 vm userdata

## Syntax

```h1 vm userdata | --userdata-file USERDATA-FILE id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--userdata-file USERDATA-FILE``` |  | Read userdata from file |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | VM name or ID |

# h1 vm disk

## Syntax

```h1 vm disk | ```

# h1 vm disk list

## Syntax

```h1 vm disk list | --vm VM```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

# h1 vm disk attach

## Syntax

```h1 vm disk attach | --vm VM --disk DISK```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |
| ```--disk DISK``` |  | Disk name or ID |

# h1 vm disk detach

## Syntax

```h1 vm disk detach | --vm VM --disk DISK```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |
| ```--disk DISK``` |  | Disk name or ID |

# h1 vm nic

## Syntax

```h1 vm nic | ```

# h1 vm nic list

## Syntax

```h1 vm nic list | --vm VM```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

# h1 vm nic show

## Syntax

```h1 vm nic show | --vm VM id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 vm nic delete

## Syntax

```h1 vm nic delete | --vm VM delete-id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

# h1 vm nic create

## Syntax

```h1 vm nic create | [--network NETWORK] --type TYPE [--ip IP] --vm VM```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--network NETWORK``` |  | Network connected to network adapter |
| ```--type TYPE``` |  | Type of network adapter |
| ```--ip IP``` |  | IP to assign from network |
| ```--vm VM``` |  | VM name or ID |

# h1 vm nic delete

## Syntax

```h1 vm nic delete | --vm VM delete-id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

# h1 vm nic ip

## Syntax

```h1 vm nic ip | ```

# h1 vm nic ip list

## Syntax

```h1 vm nic ip list | --vm VM --nic NIC```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |
| ```--nic NIC``` |  | NIC name of ID |

# h1 vm nic ip delete

## Syntax

```h1 vm nic ip delete | --vm VM --nic NIC delete-id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |
| ```--nic NIC``` |  | NIC name of ID |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```delete-id``` |  | Resource name or ID |

# h1 vm nic ip add

## Syntax

```h1 vm nic ip add | --vm VM --nic NIC ip```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |
| ```--nic NIC``` |  | NIC name of ID |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```ip``` |  | Public IP address or ID of IP |

# h1 vm dvd

## Syntax

```h1 vm dvd | ```

# h1 vm dvd list

## Syntax

```h1 vm dvd list | --vm VM```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

# h1 vm dvd insert

## Syntax

```h1 vm dvd insert | --iso ISO --vm VM```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--iso ISO``` |  | ISO name or ID |
| ```--vm VM``` |  | VM name or ID |

# h1 vm dvd eject

## Syntax

```h1 vm dvd eject | --vm VM```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--vm VM``` |  | VM name or ID |

# h1 vm tag

## Syntax

```h1 vm tag | ```

# h1 vm tag list

## Syntax

```h1 vm tag list | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource id |

# h1 vm tag add

## Syntax

```h1 vm tag add | --tag TAG [--tag TAG ...] id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | New Tag. The parameter may occur repeatedly |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource id |

# h1 vm tag delete

## Syntax

```h1 vm tag delete | --tag TAG id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource id |

# h1 vm ssh

## Syntax

```h1 vm ssh | [--username USERNAME] [--port PORT] [--private PRIVATE] id [command]```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--username USERNAME``` |  | Username for ssh connection |
| ```--port PORT``` |  | Port for ssh connection |
| ```--private PRIVATE``` |  | Use first private network, skip public |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |
| ```[command]``` |  | Command to execute |

# h1 vm serialport

## Syntax

```h1 vm serialport | ```

# h1 vm serialport console

## Syntax

```h1 vm serialport console | [--port PORT] id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--port PORT``` |  | Port to connect |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 vm serialport log

## Syntax

```h1 vm serialport log | [--port PORT] id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--port PORT``` |  | Port to connect |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 vm passwordreset

## Syntax

```h1 vm passwordreset | --user USER id```

## Optional options

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```--user USER``` |  | Username |

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

# h1 vm metrics

## Syntax

```h1 vm metrics | id```

## Parameters (DEPRECATED)

| Name | Default | Description | 
| ---- | ------- | ----------- |
| ```id``` |  | Resource identifier |

