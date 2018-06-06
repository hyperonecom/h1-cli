* [#h1 config](h1 config)
* [#h1 user](h1 user)
* [#h1 login](h1 login)
* [#h1 tenant](h1 tenant)
* [#h1 disk](h1 disk)
* [#h1 vm](h1 vm)
* [#h1 image](h1 image)
* [#h1 iso](h1 iso)
* [#h1 network](h1 network)
* [#h1 ip](h1 ip)
* [#h1 dns](h1 dns)
* [#h1 service](h1 service)
* [#h1 netgw](h1 netgw)
* [#h1 firewall](h1 firewall)
* [#h1 vault](h1 vault)
* [#h1 snapshot](h1 snapshot)
# h1 config
Syntax: ```h1 config | ```



# h1 config show
Syntax: ```h1 config show | ```



# h1 config get
Syntax: ```h1 config get | key```


Parameters:
* ```key``` - key

# h1 config set
Syntax: ```h1 config set | key value```


Parameters:
* ```key``` - key
* ```value``` - value

# h1 config unset
Syntax: ```h1 config unset | key```


Parameters:
* ```key``` - key

# h1 user
Syntax: ```h1 user | ```



# h1 user create
Syntax: ```h1 user create | ```



# h1 user credentials
Syntax: ```h1 user credentials | ```



# h1 user credentials list
Syntax: ```h1 user credentials list | ```



# h1 user credentials delete
Syntax: ```h1 user credentials delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 user credentials add
Syntax: ```h1 user credentials add | --name NAME --sshkey-file SSHKEY-FILE```

Arguments:
* ```--name NAME``` - Name
* ```--sshkey-file SSHKEY-FILE``` - Public SSH key filename


# h1 login
Syntax: ```h1 login | [--password PASSWORD] username```

Arguments:
* ```[--password PASSWORD]``` - Password

Parameters:
* ```username``` - Your h1 username

# h1 tenant
Syntax: ```h1 tenant | ```



# h1 tenant list
Syntax: ```h1 tenant list | ```



# h1 tenant show
Syntax: ```h1 tenant show | id```


Parameters:
* ```id``` - Resource identifier

# h1 tenant delete
Syntax: ```h1 tenant delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 tenant list
Syntax: ```h1 tenant list | [--all ALL]```

Arguments:
* ```[--all ALL]``` - display all tenants


# h1 tenant access
Syntax: ```h1 tenant access | ```



# h1 tenant access grant
Syntax: ```h1 tenant access grant | --identity IDENTITY [--role ROLE] id```

Arguments:
* ```--identity IDENTITY``` - Identity (eg: user@example.org)
* ```[--role ROLE]``` - Role

Parameters:
* ```id``` - Tenant id

# h1 tenant access revoke
Syntax: ```h1 tenant access revoke | --identity IDENTITY id```

Arguments:
* ```--identity IDENTITY``` - Identity (eg: user@example.org)

Parameters:
* ```id``` - Tenant id

# h1 tenant access list
Syntax: ```h1 tenant access list | id```


Parameters:
* ```id``` - Tenant id

# h1 tenant token
Syntax: ```h1 tenant token | ```



# h1 tenant token list
Syntax: ```h1 tenant token list | id```


Parameters:
* ```id``` - Tenant id

# h1 tenant token delete
Syntax: ```h1 tenant token delete | id delete-id```


Parameters:
* ```id``` - Tenant id
* ```delete-id``` - Resource name or ID

# h1 tenant token add
Syntax: ```h1 tenant token add | --name NAME id```

Arguments:
* ```--name NAME``` - Name

Parameters:
* ```id``` - Tenant id

# h1 tenant token access
Syntax: ```h1 tenant token access | ```



# h1 tenant token access list
Syntax: ```h1 tenant token access list | --token TOKEN id```

Arguments:
* ```--token TOKEN``` - token id

Parameters:
* ```id``` - Tenant id

# h1 tenant token access delete
Syntax: ```h1 tenant token access delete | --token TOKEN id delete-id```

Arguments:
* ```--token TOKEN``` - token id

Parameters:
* ```id``` - Tenant id
* ```delete-id``` - Resource name or ID

# h1 tenant token access add
Syntax: ```h1 tenant token access add | --method METHOD --path PATH --token TOKEN id```

Arguments:
* ```--method METHOD``` - http method. eg: GET, POST..., ALL (to allow all methods)
* ```--path PATH``` - url path, eg: /disk
* ```--token TOKEN``` - token id

Parameters:
* ```id``` - Tenant id

# h1 tenant select
Syntax: ```h1 tenant select | id```


Parameters:
* ```id``` - Tenant id

# h1 tenant limit
Syntax: ```h1 tenant limit | id```


Parameters:
* ```id``` - Tenant id

# h1 tenant credentials
Syntax: ```h1 tenant credentials | ```



# h1 tenant credentials list
Syntax: ```h1 tenant credentials list | id```


Parameters:
* ```id``` - Tenant id

# h1 tenant credentials delete
Syntax: ```h1 tenant credentials delete | id delete-id```


Parameters:
* ```id``` - Tenant id
* ```delete-id``` - Resource name or ID

# h1 tenant credentials add
Syntax: ```h1 tenant credentials add | --name NAME --sshkey-file SSHKEY-FILE id```

Arguments:
* ```--name NAME``` - Name
* ```--sshkey-file SSHKEY-FILE``` - Public SSH key filename

Parameters:
* ```id``` - Tenant id

# h1 disk
Syntax: ```h1 disk | ```



# h1 disk list
Syntax: ```h1 disk list | ```



# h1 disk show
Syntax: ```h1 disk show | id```


Parameters:
* ```id``` - Resource identifier

# h1 disk delete
Syntax: ```h1 disk delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 disk rename
Syntax: ```h1 disk rename | --new-name NEW-NAME id```

Arguments:
* ```--new-name NEW-NAME``` - New name

Parameters:
* ```id``` - Resource identifier

# h1 disk create
Syntax: ```h1 disk create | --name NAME --type TYPE --size SIZE [--source-file SOURCE-FILE]```

Arguments:
* ```--name NAME``` - Disk name
* ```--type TYPE``` - Disk type Id
* ```--size SIZE``` - Disk size in GB
* ```[--source-file SOURCE-FILE]``` - import disk path


# h1 disk resume
Syntax: ```h1 disk resume | --source SOURCE id```

Arguments:
* ```--source SOURCE``` - import disk path

Parameters:
* ```id``` - Resource name or ID

# h1 disk resize
Syntax: ```h1 disk resize | --size SIZE id```

Arguments:
* ```--size SIZE``` - New size

Parameters:
* ```id``` - Resource name or ID

# h1 disk download
Syntax: ```h1 disk download | --destination DESTINATION id```

Arguments:
* ```--destination DESTINATION``` - destination disk path

Parameters:
* ```id``` - Resource identifier

# h1 vm
Syntax: ```h1 vm | ```



# h1 vm list
Syntax: ```h1 vm list | ```



# h1 vm show
Syntax: ```h1 vm show | id```


Parameters:
* ```id``` - Resource identifier

# h1 vm create
Syntax: ```h1 vm create | --name NAME --type TYPE [--password PASSWORD] [--username USERNAME] [--ssh SSH] [--image IMAGE] [--iso ISO] [--os-disk-name OS-DISK-NAME] [--os-disk-type OS-DISK-TYPE] [--os-disk-size OS-DISK-SIZE] [--os-disk OS-DISK] [--network NETWORK] [--ip IP] [--no-start NO-START] [--userdata-file USERDATA-FILE]```

Arguments:
* ```--name NAME``` - VM name
* ```--type TYPE``` - VM type Id
* ```[--password PASSWORD]``` - Password
* ```[--username USERNAME]``` - Username
* ```[--ssh SSH]``` - SSH key Id or name that allows access.
* ```[--image IMAGE]``` - Image id
* ```[--iso ISO]``` - Iso id
* ```[--os-disk-name OS-DISK-NAME]``` - OS disk name
* ```[--os-disk-type OS-DISK-TYPE]``` - OS disk type
* ```[--os-disk-size OS-DISK-SIZE]``` - OS disk size
* ```[--os-disk OS-DISK]``` - OS disk: name,service,size
* ```[--network NETWORK]``` - Network for VM
* ```[--ip IP]``` - IP for VM
* ```[--no-start NO-START]``` - Do not start vm after creation
* ```[--userdata-file USERDATA-FILE]``` - Read userdata from file


# h1 vm delete
Syntax: ```h1 vm delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 vm queue
Syntax: ```h1 vm queue | id```


Parameters:
* ```id``` - Resource identifier

# h1 vm console
Syntax: ```h1 vm console | id```


Parameters:
* ```id``` - Resource identifier

# h1 vm stop
Syntax: ```h1 vm stop | id```


Parameters:
* ```id``` - VM name or ID

# h1 vm start
Syntax: ```h1 vm start | id```


Parameters:
* ```id``` - VM name or ID

# h1 vm restart
Syntax: ```h1 vm restart | id```


Parameters:
* ```id``` - VM name or ID

# h1 vm turnoff
Syntax: ```h1 vm turnoff | id```


Parameters:
* ```id``` - VM name or ID

# h1 vm rename
Syntax: ```h1 vm rename | --newname NEWNAME id```

Arguments:
* ```--newname NEWNAME``` - New name

Parameters:
* ```id``` - VM name or ID

# h1 vm userdata
Syntax: ```h1 vm userdata | --userdata-file USERDATA-FILE id```

Arguments:
* ```--userdata-file USERDATA-FILE``` - Read userdata from file

Parameters:
* ```id``` - VM name or ID

# h1 vm disk
Syntax: ```h1 vm disk | ```



# h1 vm disk list
Syntax: ```h1 vm disk list | --vm VM```

Arguments:
* ```--vm VM``` - VM name or ID


# h1 vm disk attach
Syntax: ```h1 vm disk attach | --vm VM --disk DISK```

Arguments:
* ```--vm VM``` - VM name or ID
* ```--disk DISK``` - Disk name or ID


# h1 vm disk detach
Syntax: ```h1 vm disk detach | --vm VM --disk DISK```

Arguments:
* ```--vm VM``` - VM name or ID
* ```--disk DISK``` - Disk name or ID


# h1 vm nic
Syntax: ```h1 vm nic | ```



# h1 vm nic list
Syntax: ```h1 vm nic list | --vm VM```

Arguments:
* ```--vm VM``` - VM name or ID


# h1 vm nic show
Syntax: ```h1 vm nic show | --vm VM id```

Arguments:
* ```--vm VM``` - VM name or ID

Parameters:
* ```id``` - Resource identifier

# h1 vm nic delete
Syntax: ```h1 vm nic delete | --vm VM delete-id```

Arguments:
* ```--vm VM``` - VM name or ID

Parameters:
* ```delete-id``` - Resource name or ID

# h1 vm nic create
Syntax: ```h1 vm nic create | [--network NETWORK] --type TYPE [--ip IP] --vm VM```

Arguments:
* ```[--network NETWORK]``` - Network connected to network adapter
* ```--type TYPE``` - Type of network adapter
* ```[--ip IP]``` - IP to assign from network
* ```--vm VM``` - VM name or ID


# h1 vm nic delete
Syntax: ```h1 vm nic delete | --vm VM delete-id```

Arguments:
* ```--vm VM``` - VM name or ID

Parameters:
* ```delete-id``` - Resource name or ID

# h1 vm nic ip
Syntax: ```h1 vm nic ip | ```



# h1 vm nic ip list
Syntax: ```h1 vm nic ip list | --vm VM --nic NIC```

Arguments:
* ```--vm VM``` - VM name or ID
* ```--nic NIC``` - NIC name of ID


# h1 vm nic ip delete
Syntax: ```h1 vm nic ip delete | --vm VM --nic NIC delete-id```

Arguments:
* ```--vm VM``` - VM name or ID
* ```--nic NIC``` - NIC name of ID

Parameters:
* ```delete-id``` - Resource name or ID

# h1 vm nic ip add
Syntax: ```h1 vm nic ip add | --vm VM --nic NIC ip```

Arguments:
* ```--vm VM``` - VM name or ID
* ```--nic NIC``` - NIC name of ID

Parameters:
* ```ip``` - Public IP address or ID of IP

# h1 vm dvd
Syntax: ```h1 vm dvd | ```



# h1 vm dvd list
Syntax: ```h1 vm dvd list | --vm VM```

Arguments:
* ```--vm VM``` - VM name or ID


# h1 vm dvd insert
Syntax: ```h1 vm dvd insert | --iso ISO --vm VM```

Arguments:
* ```--iso ISO``` - ISO name or ID
* ```--vm VM``` - VM name or ID


# h1 vm dvd eject
Syntax: ```h1 vm dvd eject | --vm VM```

Arguments:
* ```--vm VM``` - VM name or ID


# h1 vm tag
Syntax: ```h1 vm tag | ```



# h1 vm tag list
Syntax: ```h1 vm tag list | id```


Parameters:
* ```id``` - Resource id

# h1 vm tag add
Syntax: ```h1 vm tag add | --tag TAG id```

Arguments:
* ```--tag TAG``` - New Tag

Parameters:
* ```id``` - Resource id

# h1 vm tag delete
Syntax: ```h1 vm tag delete | --tag TAG id```

Arguments:
* ```--tag TAG``` - Tag

Parameters:
* ```id``` - Resource id

# h1 vm ssh
Syntax: ```h1 vm ssh | [--username USERNAME] [--port PORT] [--private PRIVATE] id [command]```

Arguments:
* ```[--username USERNAME]``` - Username for ssh connection
* ```[--port PORT]``` - Port for ssh connection
* ```[--private PRIVATE]``` - Use first private network, skip public

Parameters:
* ```id``` - Resource identifier
* ```[command]``` - Command to execute

# h1 vm serialport
Syntax: ```h1 vm serialport | ```



# h1 vm serialport console
Syntax: ```h1 vm serialport console | [--port PORT] id```

Arguments:
* ```[--port PORT]``` - Port to connect

Parameters:
* ```id``` - Resource identifier

# h1 vm serialport log
Syntax: ```h1 vm serialport log | [--port PORT] id```

Arguments:
* ```[--port PORT]``` - Port to connect

Parameters:
* ```id``` - Resource identifier

# h1 vm passwordreset
Syntax: ```h1 vm passwordreset | --user USER id```

Arguments:
* ```--user USER``` - Username

Parameters:
* ```id``` - Resource identifier

# h1 vm metrics
Syntax: ```h1 vm metrics | id```


Parameters:
* ```id``` - Resource identifier

# h1 image
Syntax: ```h1 image | ```



# h1 image show
Syntax: ```h1 image show | id```


Parameters:
* ```id``` - Resource identifier

# h1 image delete
Syntax: ```h1 image delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 image rename
Syntax: ```h1 image rename | --new-name NEW-NAME id```

Arguments:
* ```--new-name NEW-NAME``` - New name

Parameters:
* ```id``` - Resource identifier

# h1 image create
Syntax: ```h1 image create | --name NAME [--description DESCRIPTION] --vm VM```

Arguments:
* ```--name NAME``` - Name of image
* ```[--description DESCRIPTION]``` - Description of image
* ```--vm VM``` - VM name or ID


# h1 image list
Syntax: ```h1 image list | [--recommended RECOMMENDED] [--all ALL]```

Arguments:
* ```[--recommended RECOMMENDED]``` - Display recommended images
* ```[--all ALL]``` - Display all images


# h1 image disk
Syntax: ```h1 image disk | id```


Parameters:
* ```id``` - Image name or ID

# h1 image access
Syntax: ```h1 image access | ```



# h1 image access grant
Syntax: ```h1 image access grant | --tenant TENANT id```

Arguments:
* ```--tenant TENANT``` - Tenant name or ID

Parameters:
* ```id``` - Resource ID

# h1 image access revoke
Syntax: ```h1 image access revoke | --tenant TENANT id```

Arguments:
* ```--tenant TENANT``` - Tenant name or ID

Parameters:
* ```id``` - Resource id

# h1 image access list
Syntax: ```h1 image access list | id```


Parameters:
* ```id``` - Resource name or ID

# h1 iso
Syntax: ```h1 iso | ```



# h1 iso list
Syntax: ```h1 iso list | ```



# h1 iso show
Syntax: ```h1 iso show | id```


Parameters:
* ```id``` - Resource identifier

# h1 iso delete
Syntax: ```h1 iso delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 iso rename
Syntax: ```h1 iso rename | --new-name NEW-NAME id```

Arguments:
* ```--new-name NEW-NAME``` - New name

Parameters:
* ```id``` - Resource identifier

# h1 iso access
Syntax: ```h1 iso access | ```



# h1 iso access grant
Syntax: ```h1 iso access grant | --tenant TENANT id```

Arguments:
* ```--tenant TENANT``` - Tenant name or ID

Parameters:
* ```id``` - Resource ID

# h1 iso access revoke
Syntax: ```h1 iso access revoke | --tenant TENANT id```

Arguments:
* ```--tenant TENANT``` - Tenant name or ID

Parameters:
* ```id``` - Resource id

# h1 iso access list
Syntax: ```h1 iso access list | id```


Parameters:
* ```id``` - Resource name or ID

# h1 iso resume
Syntax: ```h1 iso resume | --source SOURCE id```

Arguments:
* ```--source SOURCE``` - import disk path

Parameters:
* ```id``` - Resource name or ID

# h1 iso create
Syntax: ```h1 iso create | --name NAME [--source-url SOURCE-URL] [--source-file SOURCE-FILE]```

Arguments:
* ```--name NAME``` - ISO name
* ```[--source-url SOURCE-URL]``` - Source url for ISO import. Required if source-url is not specified.
* ```[--source-file SOURCE-FILE]``` - Source file for ISO import.


# h1 network
Syntax: ```h1 network | ```



# h1 network list
Syntax: ```h1 network list | ```



# h1 network show
Syntax: ```h1 network show | id```


Parameters:
* ```id``` - Resource identifier

# h1 network delete
Syntax: ```h1 network delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 network create
Syntax: ```h1 network create | --name NAME```

Arguments:
* ```--name NAME``` - Name


# h1 network ip
Syntax: ```h1 network ip | ```



# h1 network ip list
Syntax: ```h1 network ip list | --network NETWORK```

Arguments:
* ```--network NETWORK``` - Network name or ID


# h1 network ip show
Syntax: ```h1 network ip show | --network NETWORK id```

Arguments:
* ```--network NETWORK``` - Network name or ID

Parameters:
* ```id``` - Resource identifier

# h1 network ip delete
Syntax: ```h1 network ip delete | --network NETWORK delete-id```

Arguments:
* ```--network NETWORK``` - Network name or ID

Parameters:
* ```delete-id``` - Resource name or ID

# h1 network ip create
Syntax: ```h1 network ip create | --network NETWORK```

Arguments:
* ```--network NETWORK``` - Network name or ID


# h1 ip
Syntax: ```h1 ip | ```



# h1 ip list
Syntax: ```h1 ip list | ```



# h1 ip show
Syntax: ```h1 ip show | id```


Parameters:
* ```id``` - Resource identifier

# h1 ip delete
Syntax: ```h1 ip delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 ip disassociate
Syntax: ```h1 ip disassociate | id```


Parameters:
* ```id``` - IP id

# h1 ip associate
Syntax: ```h1 ip associate | --private-ip PRIVATE-IP id```

Arguments:
* ```--private-ip PRIVATE-IP``` - ID of private IP

Parameters:
* ```id``` - Public IP or ID or IP

# h1 ip create
Syntax: ```h1 ip create | ```



# h1 ip ptr
Syntax: ```h1 ip ptr | --value VALUE id```

Arguments:
* ```--value VALUE``` - PTR record

Parameters:
* ```id``` - IP id

# h1 dns
Syntax: ```h1 dns | ```



# h1 dns zone
Syntax: ```h1 dns zone | ```



# h1 dns zone list
Syntax: ```h1 dns zone list | ```



# h1 dns zone show
Syntax: ```h1 dns zone show | id```


Parameters:
* ```id``` - Resource identifier

# h1 dns zone delete
Syntax: ```h1 dns zone delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 dns zone create
Syntax: ```h1 dns zone create | --name NAME```

Arguments:
* ```--name NAME``` - Dns zone name


# h1 dns zone export
Syntax: ```h1 dns zone export | --name NAME```

Arguments:
* ```--name NAME``` - Dns zone name


# h1 dns record-set
Syntax: ```h1 dns record-set | ```



# h1 dns record-set a
Syntax: ```h1 dns record-set a | ```



# h1 dns record-set a list
Syntax: ```h1 dns record-set a list | --zone-name ZONE-NAME```

Arguments:
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set a create
Syntax: ```h1 dns record-set a create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --ipv4-address IPV4-ADDRESS```

Arguments:
* ```--name NAME``` - Record Set name
* ```[--ttl TTL]``` - Record Set Time To Live (TTL)
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--ipv4-address IPV4-ADDRESS``` - IPv4 address


# h1 dns record-set a delete
Syntax: ```h1 dns record-set a delete | --name NAME --zone-name ZONE-NAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set a add-record
Syntax: ```h1 dns record-set a add-record | --name NAME --zone-name ZONE-NAME --ipv4-address IPV4-ADDRESS```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--ipv4-address IPV4-ADDRESS``` - IPv4 address


# h1 dns record-set a delete-record
Syntax: ```h1 dns record-set a delete-record | --name NAME --zone-name ZONE-NAME --ipv4-address IPV4-ADDRESS```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--ipv4-address IPV4-ADDRESS``` - IPv4 address


# h1 dns record-set cname
Syntax: ```h1 dns record-set cname | ```



# h1 dns record-set cname list
Syntax: ```h1 dns record-set cname list | --zone-name ZONE-NAME```

Arguments:
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set cname create
Syntax: ```h1 dns record-set cname create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --cname CNAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```[--ttl TTL]``` - Record Set Time To Live (TTL)
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--cname CNAME``` - CName


# h1 dns record-set cname delete
Syntax: ```h1 dns record-set cname delete | --name NAME --zone-name ZONE-NAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set cname add-record
Syntax: ```h1 dns record-set cname add-record | --name NAME --zone-name ZONE-NAME --cname CNAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--cname CNAME``` - CName


# h1 dns record-set cname delete-record
Syntax: ```h1 dns record-set cname delete-record | --name NAME --zone-name ZONE-NAME --cname CNAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--cname CNAME``` - CName


# h1 dns record-set txt
Syntax: ```h1 dns record-set txt | ```



# h1 dns record-set txt list
Syntax: ```h1 dns record-set txt list | --zone-name ZONE-NAME```

Arguments:
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set txt create
Syntax: ```h1 dns record-set txt create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE```

Arguments:
* ```--name NAME``` - Record Set name
* ```[--ttl TTL]``` - Record Set Time To Live (TTL)
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--value VALUE``` - TXT value


# h1 dns record-set txt delete
Syntax: ```h1 dns record-set txt delete | --name NAME --zone-name ZONE-NAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set txt add-record
Syntax: ```h1 dns record-set txt add-record | --name NAME --zone-name ZONE-NAME --value VALUE```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--value VALUE``` - TXT value


# h1 dns record-set txt delete-record
Syntax: ```h1 dns record-set txt delete-record | --name NAME --zone-name ZONE-NAME --value VALUE```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--value VALUE``` - TXT value


# h1 dns record-set mx
Syntax: ```h1 dns record-set mx | ```



# h1 dns record-set mx list
Syntax: ```h1 dns record-set mx list | --zone-name ZONE-NAME```

Arguments:
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set mx create
Syntax: ```h1 dns record-set mx create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --exchange EXCHANGE --preference PREFERENCE```

Arguments:
* ```--name NAME``` - Record Set name
* ```[--ttl TTL]``` - Record Set Time To Live (TTL)
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--exchange EXCHANGE``` - Exchange metric
* ```--preference PREFERENCE``` - Preference metric


# h1 dns record-set mx delete
Syntax: ```h1 dns record-set mx delete | --name NAME --zone-name ZONE-NAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set mx add-record
Syntax: ```h1 dns record-set mx add-record | --name NAME --zone-name ZONE-NAME --exchange EXCHANGE --preference PREFERENCE```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--exchange EXCHANGE``` - Exchange metric
* ```--preference PREFERENCE``` - Preference metric


# h1 dns record-set mx delete-record
Syntax: ```h1 dns record-set mx delete-record | --name NAME --zone-name ZONE-NAME --exchange EXCHANGE --preference PREFERENCE```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--exchange EXCHANGE``` - Exchange metric
* ```--preference PREFERENCE``` - Preference metric


# h1 dns record-set ns
Syntax: ```h1 dns record-set ns | ```



# h1 dns record-set ns list
Syntax: ```h1 dns record-set ns list | --zone-name ZONE-NAME```

Arguments:
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set ns create
Syntax: ```h1 dns record-set ns create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --nsdname NSDNAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```[--ttl TTL]``` - Record Set Time To Live (TTL)
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--nsdname NSDNAME``` - Name server domain name


# h1 dns record-set ns delete
Syntax: ```h1 dns record-set ns delete | --name NAME --zone-name ZONE-NAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set ns add-record
Syntax: ```h1 dns record-set ns add-record | --name NAME --zone-name ZONE-NAME --nsdname NSDNAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--nsdname NSDNAME``` - Name server domain name


# h1 dns record-set ns delete-record
Syntax: ```h1 dns record-set ns delete-record | --name NAME --zone-name ZONE-NAME --nsdname NSDNAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--nsdname NSDNAME``` - Name server domain name


# h1 dns record-set srv
Syntax: ```h1 dns record-set srv | ```



# h1 dns record-set srv list
Syntax: ```h1 dns record-set srv list | --zone-name ZONE-NAME```

Arguments:
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set srv create
Syntax: ```h1 dns record-set srv create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --port PORT --priority PRIORITY --weight WEIGHT --target TARGET```

Arguments:
* ```--name NAME``` - Record Set name
* ```[--ttl TTL]``` - Record Set Time To Live (TTL)
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--port PORT``` - Service port.
* ```--priority PRIORITY``` - Priority metric
* ```--weight WEIGHT``` - Weight metric
* ```--target TARGET``` - Target domain name


# h1 dns record-set srv delete
Syntax: ```h1 dns record-set srv delete | --name NAME --zone-name ZONE-NAME```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 dns record-set srv add-record
Syntax: ```h1 dns record-set srv add-record | --name NAME --zone-name ZONE-NAME --port PORT --priority PRIORITY --weight WEIGHT --target TARGET```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--port PORT``` - Service port.
* ```--priority PRIORITY``` - Priority metric
* ```--weight WEIGHT``` - Weight metric
* ```--target TARGET``` - Target domain name


# h1 dns record-set srv delete-record
Syntax: ```h1 dns record-set srv delete-record | --name NAME --zone-name ZONE-NAME --port PORT --priority PRIORITY --weight WEIGHT --target TARGET```

Arguments:
* ```--name NAME``` - Record Set name
* ```--zone-name ZONE-NAME``` - DNS Zone Name
* ```--port PORT``` - Service port.
* ```--priority PRIORITY``` - Priority metric
* ```--weight WEIGHT``` - Weight metric
* ```--target TARGET``` - Target domain name


# h1 dns record-set list
Syntax: ```h1 dns record-set list | --zone-name ZONE-NAME```

Arguments:
* ```--zone-name ZONE-NAME``` - DNS Zone Name


# h1 service
Syntax: ```h1 service | ```



# h1 service list
Syntax: ```h1 service list | ```



# h1 service show
Syntax: ```h1 service show | id```


Parameters:
* ```id``` - Resource identifier

# h1 netgw
Syntax: ```h1 netgw | ```



# h1 netgw list
Syntax: ```h1 netgw list | ```



# h1 netgw show
Syntax: ```h1 netgw show | id```


Parameters:
* ```id``` - Resource identifier

# h1 netgw delete
Syntax: ```h1 netgw delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 netgw access
Syntax: ```h1 netgw access | ```



# h1 netgw access grant
Syntax: ```h1 netgw access grant | --tenant TENANT id```

Arguments:
* ```--tenant TENANT``` - Tenant name or ID

Parameters:
* ```id``` - Resource ID

# h1 netgw access revoke
Syntax: ```h1 netgw access revoke | --tenant TENANT id```

Arguments:
* ```--tenant TENANT``` - Tenant name or ID

Parameters:
* ```id``` - Resource id

# h1 netgw access list
Syntax: ```h1 netgw access list | id```


Parameters:
* ```id``` - Resource name or ID

# h1 netgw detach
Syntax: ```h1 netgw detach | id```


Parameters:
* ```id``` - Network gateway name or ID

# h1 netgw attach
Syntax: ```h1 netgw attach | --network NETWORK id```

Arguments:
* ```--network NETWORK``` - Network name or id

Parameters:
* ```id``` - Network gateway name or ID

# h1 netgw create
Syntax: ```h1 netgw create | --name NAME --ip IP```

Arguments:
* ```--name NAME``` - Network gateway name
* ```--ip IP``` - Primary IP for the outgoing traffic


# h1 firewall
Syntax: ```h1 firewall | ```



# h1 firewall list
Syntax: ```h1 firewall list | ```



# h1 firewall show
Syntax: ```h1 firewall show | id```


Parameters:
* ```id``` - Resource identifier

# h1 firewall delete
Syntax: ```h1 firewall delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 firewall create
Syntax: ```h1 firewall create | --name NAME```

Arguments:
* ```--name NAME``` - Name


# h1 firewall attach
Syntax: ```h1 firewall attach | --network NETWORK id```

Arguments:
* ```--network NETWORK``` - Network name or ID

Parameters:
* ```id``` - Resource identifier

# h1 firewall detach
Syntax: ```h1 firewall detach | id```


Parameters:
* ```id``` - Resource identifier

# h1 firewall ingress
Syntax: ```h1 firewall ingress | ```



# h1 firewall ingress list
Syntax: ```h1 firewall ingress list | id```


Parameters:
* ```id``` - Resource identifier

# h1 firewall ingress add
Syntax: ```h1 firewall ingress add | --name NAME --action ACTION --priority PRIORITY --filter FILTER --external EXTERNAL --internal INTERNAL id```

Arguments:
* ```--name NAME``` - Name
* ```--action ACTION``` - Action
* ```--priority PRIORITY``` - Number between 100 and 999 representing priority
* ```--filter FILTER``` - The filter rule in the form of "protocol:format [, protocol:format...]". Protocol as "icmp" / "udp" / "tcp" / "any". Port as numeric value. Example: "tcp:83"
* ```--external EXTERNAL``` - Ip address or network on internal side.
* ```--internal INTERNAL``` - Resource tags or * for all

Parameters:
* ```id``` - Resource identifier

# h1 firewall ingress delete
Syntax: ```h1 firewall ingress delete | --rule RULE id```

Arguments:
* ```--rule RULE``` - Rule identifier

Parameters:
* ```id``` - Resource identifier

# h1 firewall egress
Syntax: ```h1 firewall egress | ```



# h1 firewall egress list
Syntax: ```h1 firewall egress list | id```


Parameters:
* ```id``` - Resource identifier

# h1 firewall egress add
Syntax: ```h1 firewall egress add | --name NAME --action ACTION --priority PRIORITY --filter FILTER --external EXTERNAL --internal INTERNAL id```

Arguments:
* ```--name NAME``` - Name
* ```--action ACTION``` - Action
* ```--priority PRIORITY``` - Number between 100 and 999 representing priority
* ```--filter FILTER``` - The filter rule in the form of "protocol:format [, protocol:format...]". Protocol as "icmp" / "udp" / "tcp" / "any". Port as numeric value. Example: "tcp:83"
* ```--external EXTERNAL``` - Ip address or network on internal side.
* ```--internal INTERNAL``` - Resource tags or * for all

Parameters:
* ```id``` - Resource identifier

# h1 firewall egress delete
Syntax: ```h1 firewall egress delete | --rule RULE id```

Arguments:
* ```--rule RULE``` - Rule identifier

Parameters:
* ```id``` - Resource identifier

# h1 vault
Syntax: ```h1 vault | ```



# h1 vault list
Syntax: ```h1 vault list | ```



# h1 vault show
Syntax: ```h1 vault show | id```


Parameters:
* ```id``` - Resource identifier

# h1 vault delete
Syntax: ```h1 vault delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 vault rename
Syntax: ```h1 vault rename | --new-name NEW-NAME id```

Arguments:
* ```--new-name NEW-NAME``` - New name

Parameters:
* ```id``` - Resource identifier

# h1 vault create
Syntax: ```h1 vault create | --name NAME --size SIZE [--ssh SSH] [--password PASSWORD]```

Arguments:
* ```--name NAME``` - Vault Name
* ```--size SIZE``` - Vault Size in GB
* ```[--ssh SSH]``` - SSH key Id or name that allows access.
* ```[--password PASSWORD]``` - Password to access Vault. Recommend using SSH keys.


# h1 vault access
Syntax: ```h1 vault access | ```



# h1 vault access grant
Syntax: ```h1 vault access grant | --tenant TENANT id```

Arguments:
* ```--tenant TENANT``` - Tenant name or ID

Parameters:
* ```id``` - Resource ID

# h1 vault access revoke
Syntax: ```h1 vault access revoke | --tenant TENANT id```

Arguments:
* ```--tenant TENANT``` - Tenant name or ID

Parameters:
* ```id``` - Resource id

# h1 vault access list
Syntax: ```h1 vault access list | id```


Parameters:
* ```id``` - Resource name or ID

# h1 vault resize
Syntax: ```h1 vault resize | --size SIZE id```

Arguments:
* ```--size SIZE``` - New size

Parameters:
* ```id``` - Resource name or ID

# h1 vault credential
Syntax: ```h1 vault credential | ```



# h1 vault credential cert
Syntax: ```h1 vault credential cert | ```



# h1 vault credential cert list
Syntax: ```h1 vault credential cert list | id```


Parameters:
* ```id``` - Vault id

# h1 vault credential cert delete
Syntax: ```h1 vault credential cert delete | id delete-id```


Parameters:
* ```id``` - Vault id
* ```delete-id``` - Resource name or ID

# h1 vault credential cert add
Syntax: ```h1 vault credential cert add | --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE] id```

Arguments:
* ```--name NAME``` - Name
* ```[--sshkey SSHKEY]``` - Public SSH key Id
* ```[--sshkey-file SSHKEY-FILE]``` - Public SSH key filename

Parameters:
* ```id``` - Vault id

# h1 vault credential password
Syntax: ```h1 vault credential password | ```



# h1 vault credential password list
Syntax: ```h1 vault credential password list | id```


Parameters:
* ```id``` - Vault id

# h1 vault credential password delete
Syntax: ```h1 vault credential password delete | id delete-id```


Parameters:
* ```id``` - Vault id
* ```delete-id``` - Resource name or ID

# h1 vault credential password add
Syntax: ```h1 vault credential password add | --name NAME --password PASSWORD id```

Arguments:
* ```--name NAME``` - Name
* ```--password PASSWORD``` - Password

Parameters:
* ```id``` - Vault id

# h1 vault ssh
Syntax: ```h1 vault ssh | id```


Parameters:
* ```id``` - Resource identifier

# h1 vault snapshot
Syntax: ```h1 vault snapshot | --name NAME id```

Arguments:
* ```--name NAME``` - Name

Parameters:
* ```id``` - Resource identifier

# h1 snapshot
Syntax: ```h1 snapshot | ```



# h1 snapshot list
Syntax: ```h1 snapshot list | ```



# h1 snapshot show
Syntax: ```h1 snapshot show | id```


Parameters:
* ```id``` - Resource identifier

# h1 snapshot delete
Syntax: ```h1 snapshot delete | delete-id```


Parameters:
* ```delete-id``` - Resource name or ID

# h1 snapshot rename
Syntax: ```h1 snapshot rename | --new-name NEW-NAME id```

Arguments:
* ```--new-name NEW-NAME``` - New name

Parameters:
* ```id``` - Resource identifier

