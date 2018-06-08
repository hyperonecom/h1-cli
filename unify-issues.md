# camelCase was used in h1-cli

```
h1 user create | [--email EMAIL] [--emailCode EMAILCODE] [--phone PHONE] [--phoneCode PHONECODE] [--password PASSWORD]
```

## Action plan

Use dash.

# Different parameters name for reference to "network".

```bash
$ grep '\-\-network' argument-extract.txt
h1 vm create | --name NAME --type TYPE [--password PASSWORD] [--username USERNAME] [--sshkey SSHKEY] [--image IMAGE] [--iso ISO] [--os-disk-name OS-DISK-NAME] [--os-disk-type OS-DISK-TYPE] [--os-disk-size OS-DISK-SIZE] [--os-disk OS-DISK] [--network NETWORK] [--ip IP] [--no-start NO-START] [--userdata-file USERDATA-FILE]
h1 vm nic create | [--network NETWORK] --type TYPE [--ip IP] --vm-id VM-ID
h1 network ip list | --network-id NETWORK-ID
h1 network ip show | --network-id NETWORK-ID id
h1 network ip delete | --network-id NETWORK-ID remove-id
h1 network ip create | --network-id NETWORK-ID
h1 netgw attach | --network NETWORK id
h1 firewall attach | --network NETWORK id
```

## Action plan

Rename ```network-id``` to ```network``` in all cases.

# remove / delete resources

```bash
$ grep 'delete' argument-extract.txt -c
28
$ grep 'remove' argument-extract.txt -c
31
```

## Action plan

Rename all ``remove`` to ``delete``.

# What does mean "--source" in "h1 disk create"?

Description:
> import disk path

It should be "--source-file".

## Action plan

Update description to explain what it do.

# Cert parameter for vault

```
$ h1 vault create --name x --size 25 --cert @pubkey.pub

error: 400 {"message":"validation failed: credential.certificate.0.createdBy: Path `createdBy` is required.","status":400,"error":{"credential.certificate.0.createdBy":{"message":"Path `createdBy` is required.","name":"ValidatorError","properties":{"type":"required","message":"Path `{PATH}` is required.","path":"createdBy"},"kind":"required","path":"createdBy","$isValidatorError":true}}}
```

I don't understant what this error messages mean.

# What does mean "--cert" in "h1 vault create"

It was confusing to me. In the case of an error message, there should be clear information on
how to obtain the correct value.

## Action plan

```diff
- h1 vm create | --name NAME --type TYPE [--password PASSWORD] [--username USERNAME] [--sshkey SSHKEY] [--image IMAGE] [--iso ISO] [--os-disk-name OS-DISK-NAME] [--os-disk-type OS-DISK-TYPE] [--os-disk-size OS-DISK-SIZE] [--os-disk OS-DISK] [--network NETWORK] [--ip IP] [--no-start NO-START] [--userdata-file USERDATA-FILE]
+ h1 vm create | --name NAME --type TYPE [--password PASSWORD] [--username USERNAME] [--ssh SSHKEY] [--image IMAGE] [--iso ISO] [--os-disk-name OS-DISK-NAME] [--os-disk-type OS-DISK-TYPE] [--os-disk-size OS-DISK-SIZE] [--os-disk OS-DISK] [--network NETWORK] [--ip IP] [--no-start NO-START] [--userdata-file USERDATA-FILE]
-h1 vault create | --name NAME --size SIZE [--cert CERT]
+ h1 vault create | --name NAME --size SIZE [--password PASSWORD] [--username USERNAME] [--ssh SSHKEY]
```

Add description what does it mean.

# Poor error messages

```bash

h1 dns zone create --name siecobywatelska.pl
error: 422 {"status":422,"response":{"req":{"method":"POST","url":"http://rbx-ns-master-10.srv.wdc.pl:8081/api/v1/servers/localhost/zones","data":{"account":"5af0bbbcb7802508ad844caa","name":"siecobywatelska.pl","nameservers":["ns1.hyperone.com.","ns2.hyperone.com."],"rrsets":[{"name":"siecobywatelska.pl","records":[{"content":"pns.hyperone.com. hostmaster.hyperone.com. 1 15 180 1209600 1800","disabled":false}],"type":"SOA","ttl":1800}],"kind":"Native"},"headers":{"user-agent":"node-superagent/3.8.2","x-api-key":"x","content-type":"application/json"}},"header":{"access-control-allow-origin":"*","connection":"close","content-length":"59","content-security-policy":"default-src 'self'; style-src 'self' 'unsafe-inline'","content-type":"application/json","server":"PowerDNS/4.1.0-rc1","x-content-type-options":"nosniff","x-frame-options":"deny","x-permitted-cross-domain-policies":"none","x-xss-protection":"1; mode=block"},"status":422,"text":"{\"error\": \"DNS Name 'siecobywatelska.pl' is not canonical\"}"}}
```

## Action plan

No action.

# 'null'

```bash
$  h1 dns record-set list --zone-name
usage: h1 dns record-set list [-h] [--output {table,tsv,list,json}] [--query QUERY] [--transform TRANSFORM] --zone-name ZONE-NAME [--tenant-select TENANT-SELECT] [--verbose] [--no-wait] [--dry-run]
h1 dns record-set list: error: argument "--zone-name": Expected one argument. null
```

What does mean "null" there?

## Action plan

Remove them.

# What UI for DNS?

* CloudFlare web-UI
* Route 59 CLI & web-UI
* Azure CLI & web-UI

## Action plan

```diff
@@ -133,16 +133,16 @@ h1 dns zone export | --name NAME
 h1 dns record-set |
 h1 dns record-set a |
 h1 dns record-set a list | --zone-name ZONE-NAME
-h1 dns record-set a create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --ipv4-address IPV4-ADDRESS
+h1 dns record-set a create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value IPV4-ADDRESS
 h1 dns record-set a delete | --name NAME --zone-name ZONE-NAME
-h1 dns record-set a add-record | --name NAME --zone-name ZONE-NAME --ipv4-address IPV4-ADDRESS
-h1 dns record-set a remove-record | --name NAME --zone-name ZONE-NAME --ipv4-address IPV4-ADDRESS
+h1 dns record-set a add-record | --name NAME --zone-name ZONE-NAME --value IPV4-ADDRESS
+h1 dns record-set a remove-record | --name NAME --zone-name ZONE-NAME --value IPV4-ADDRESS
 h1 dns record-set cname |
 h1 dns record-set cname list | --zone-name ZONE-NAME
-h1 dns record-set cname create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --cname CNAME
+h1 dns record-set cname create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value CNAME
 h1 dns record-set cname delete | --name NAME --zone-name ZONE-NAME
-h1 dns record-set cname add-record | --name NAME --zone-name ZONE-NAME --cname CNAME
-h1 dns record-set cname remove-record | --name NAME --zone-name ZONE-NAME --cname CNAME
+h1 dns record-set cname add-record | --name NAME --zone-name ZONE-NAME --value CNAME
+h1 dns record-set cname remove-record | --name NAME --zone-name ZONE-NAME --value CNAME
 h1 dns record-set txt |
 h1 dns record-set txt list | --zone-name ZONE-NAME
 h1 dns record-set txt create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value VALUE
@@ -151,22 +151,22 @@ h1 dns record-set txt add-record | --name NAME --zone-name ZONE-NAME --value VAL
 h1 dns record-set txt remove-record | --name NAME --zone-name ZONE-NAME --value VALUE
 h1 dns record-set mx |
 h1 dns record-set mx list | --zone-name ZONE-NAME
-h1 dns record-set mx create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --exchange EXCHANGE --preference PREFERENCE
+h1 dns record-set mx create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value EXCHANGE-PREFERENCE
 h1 dns record-set mx delete | --name NAME --zone-name ZONE-NAME
-h1 dns record-set mx add-record | --name NAME --zone-name ZONE-NAME --exchange EXCHANGE --preference PREFERENCE
-h1 dns record-set mx remove-record | --name NAME --zone-name ZONE-NAME --exchange EXCHANGE --preference PREFERENCE
+h1 dns record-set mx add-record | --name NAME --zone-name ZONE-NAME --value EXCHANGE-PREFERENCE
+h1 dns record-set mx remove-record | --name NAME --zone-name ZONE-NAME --value EXCHANGE-PREFERENCE
 h1 dns record-set ns |
 h1 dns record-set ns list | --zone-name ZONE-NAME
-h1 dns record-set ns create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --nsdname NSDNAME
+h1 dns record-set ns create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value NSDNAME
 h1 dns record-set ns delete | --name NAME --zone-name ZONE-NAME
-h1 dns record-set ns add-record | --name NAME --zone-name ZONE-NAME --nsdname NSDNAME
-h1 dns record-set ns remove-record | --name NAME --zone-name ZONE-NAME --nsdname NSDNAME
+h1 dns record-set ns add-record | --name NAME --zone-name ZONE-NAME --value NSDNAME
+h1 dns record-set ns remove-record | --name NAME --zone-name ZONE-NAME --value NSDNAME
 h1 dns record-set srv |
 h1 dns record-set srv list | --zone-name ZONE-NAME
-h1 dns record-set srv create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --port PORT --priority PRIORITY --weight WEIGHT --target TARGET
+h1 dns record-set srv create | --name NAME [--ttl TTL] --zone-name ZONE-NAME --value PRIORITY-WEIGHT-PORT-TARGET
 h1 dns record-set srv delete | --name NAME --zone-name ZONE-NAME
-h1 dns record-set srv add-record | --name NAME --zone-name ZONE-NAME --port PORT --priority PRIORITY --weight WEIGHT --target TARGET
-h1 dns record-set srv remove-record | --name NAME --zone-name ZONE-NAME --port PORT --priority PRIORITY --weight WEIGHT --target TARGET
+h1 dns record-set srv add-record | --name NAME --zone-name ZONE-NAME --value PRIORITY-WEIGHT-PORT-TARGET
+h1 dns record-set srv remove-record | --name NAME --zone-name ZONE-NAME --value PRIORITY-WEIGHT-PORT-TARGET
 h1 dns record-set list | --zone-name ZONE-NAME
 h1 service |
 h1 service list |
```

# Explain of ```--filter``` etc. in ```h1 fifrewall ingress add```

```
$ h1 firewall ingress add  --help
usage: h1 firewall ingress add [-h] [--output {table,tsv,list,json}] [--query QUERY] [--transform TRANSFORM] --name NAME --action {allow,deny} --priority PRIORITY --filter FILTER --external EXTERNAL --internal INTERNAL
                               [--tenant-select TENANT-SELECT] [--verbose] [--no-wait] [--dry-run]
                               id

Add

Positional arguments:
  id                    Resource identifier

Optional arguments:
  -h, --help            Show this help message and exit.
  --name NAME           Name
  --action {allow,deny}
                        Action
  --priority PRIORITY   Priority
  --filter FILTER       Filter
  --external EXTERNAL   External
  --internal INTERNAL   Internal
  --tenant-select TENANT-SELECT
                        Override current tenant on the request
  --verbose, -v         verbose
  --no-wait             in case of queued event do not wait for completion
  --dry-run             dry run for the request

Output options:
  --output {table,tsv,list,json}, -o {table,tsv,list,json}
                        output format
  --query QUERY         query selector
  --transform TRANSFORM
                        transform results
```

Web-UI provides nice explaination for that. Maybe some examples?

## Action plan

Add examples in description as in web-UI.

# Rename ```tenant --> project``` in CLI?

## Action plan

Do it.

# Move ```h1 user create``` to admin CLI?

There is no way to automatically create user due 2FA.
There is no way to use created user without creating / granting tenant. Tenant create in CLI is missing.

# ```h1 disk download``` - suffix ```-file``` in ```--destination```?

I suggest drop postfix ```-file``` on all commands which use local file and document that in help.
Maybe use ```@``` prefix for local file ```az``` and ```curl```?

The file can be local or remote, for e.g. ``--source`` in ``h1 iso create --source `` mean
```Source for ISO import (eg: url, file)'```.

What do with ```h1 vault credential cert add | --name NAME [--sshkey SSHKEY] [--sshkey-file SSHKEY-FILE] id```?

If we add resource URLs - just like Google Storage - it will be easier to enter them as well - see [GCP URI].

[GCP URI]: (https://stackoverflow.com/questions/25373467/how-do-i-identify-the-google-cloud-storage-uri-from-my-google-developers-console)

## Action plan:

```diff
-h1 disk download | --destination DESTINATION id
-h1 disk create | --name NAME --type TYPE --size SIZE [--source SOURCE]
-h1 disk resume | --source SOURCE id
-h1 iso resume | --source SOURCE id
-h1 iso create | --name NAME --source SOURCE
+h1 disk download | --destination-file DESTINATION id
+h1 disk create | --name NAME --type TYPE --size SIZE [--source-file SOURCE]
+h1 disk resume-create | --source-file SOURCE id
+h1 iso resume-create | --source-file SOURCE id
+h1 iso create | --name NAME --source-file SOURCE
```

# ```h1 tenant limit id```

I suggest use as ```id``` a current selected tenat by default. This is a special and not coherent
approach, but - in my opinion - intuitive, because the resource is special because it defines the context.

## Action plan

Do it.

# ```h1 vm passwordreset``` fail

```bash
$ h1 vm passwordreset vm-elated-sinoussi --user guru --verbose

info: Generating key pair...
verbose: ws wss://api.hyperone.com/ws
verbose: websocket opened
verbose: body
{
  "name": "password_reset",
  "data": {
    "userName": "guru",
    "modulus": "AKTdU9gG2Ctm3jhEdUg0ABGhs3G1g/HhWzK1ogkfeQNzN1paehjer8wA/X/mCNsJL7el+ent8WIX8lTHdSTZbEUJtfS18iiJED8EWENabEwYQwrvzXdVT3N6jwrJlCnkhjSkbRhGrBIHp0qHGuHXjnGDIveCJuyGorAHIrT/Q2A1xs8nWkV9zlaqxFwOjqdo53BBtbIMATltzGLVgRYHctFVNIXDGjtcd2VWJ0UcnZAy0j4U8KL+AIKLnIY3XB5MSmVFFbyV43h+wSFuokjUun+TyHUyZQznioBrxWfkpV/9ivUh2LPFcpBELXWMxd+0xqVW5HqiGL3qiZjEs65e+Ck=",
    "exponent": "AAEAAQ=="
  }
}
verbose: POST https://api.hyperone.com/v1/vm/vm-elated-sinoussi/actions
verbose: headers
{
  "server": "nginx",
  "date": "Tue, 29 May 2018 12:33:05 GMT",
  "content-type": "application/json; charset=utf-8",
  "content-length": "1039",
  "connection": "close",
  "set-cookie": [
    "x-auth-token=xxxxx; Path=/; Expires=Tue, 29 May 2018 13:32:47 GMT; HttpOnly; Secure"
  ],
  "etag": "W/\"40f-eGAOp9xrbj5Fqd4wq0XAY7DYiT8\""
}
verbose: 202 event queued, waiting for completion....
verbose: state: pending
verbose: state: processing {"count":0,"current":0}
verbose: state: finished
verbose: state: finished
verbose: GET https://api.hyperone.com/v1//vm/vm-elated-sinoussi/serialport/2
verbose: 200 OK
error: Uncaught error: Unexpected token u in JSON at position 0
error: SyntaxError: Unexpected token u in JSON at position 0
    at JSON.parse (<anonymous>)
    at args.helpers.api.post.then.then.then.data (/home/adas/Devel/h1-cli/bin/vm/passwordreset.js:51:25)
    at process._tickCallback (internal/process/next_tick.js:68:7)
```

## Action plan

Fixed.

# ```h1 vm create --username``` vs. ```h1 vm passwordreset --user```

I suggest unify that in any direction.

## Action plan

```diff
-h1 vm passwordreset | --user USER id
+h1 vm passwordreset | --username USER id
```


# CLI help compare

## Hello screen

### H1

```
$ h1
usage: h1 [-h] [-v]
          {config,user,login,tenant,disk,vm,image,iso,network,ip,dns,service,netgw,firewall,vault,snapshot} ...
h1: error: too few arguments
$ h1 --help
usage: h1 [-h] [-v]
            {config,user,login,tenant,disk,vm,image,iso,network,ip,dns,service,netgw,firewall,vault,snapshot} ...

  HyperOne Command Line Interface

  Optional arguments:
    -h, --help            Show this help message and exit.
    -v, --version         Show program's version number and exit.

  subcommands:
    {config,user,login,tenant,disk,vm,image,iso,network,ip,dns,service,netgw,firewall,vault,snapshot}
      config              Manage config
      user                Manage your User
      login               Obtain your apiKey
      tenant              Manage your TENANT
      disk                Manage your DISK
      vm                  Manage your VM
      image               Manage your IMAGE
      iso                 Manage your ISO
      network             Manage your NETWORK
      ip                  Manage your IP
      dns                 Manage your DNS
      service             Manage your SERVICE
      netgw               Manage your NETGW
      firewall            Manage your FIREWALL
      vault               Manage your VAULT
      snapshot            Manage your SNAPSHOT

  Sample usage:
  1. Login to your account:
    $ h1 login user@example.org
  2. Select tenant:
    $ h1 tenant select <objectid>
```

### Azure

```
$ az

Welcome to Azure CLI!
---------------------
Use `az -h` to see available commands or go to https://aka.ms/cli.

Telemetry
---------
The Azure CLI collects usage data in order to improve your experience.
The data is anonymous and does not include commandline argument values.
The data is collected by Microsoft.

You can change your telemetry settings with `az configure`.


     /\
    /  \    _____   _ _  ___ _
   / /\ \  |_  / | | | \'__/ _\
  / ____ \  / /| |_| | | |  __/
 /_/    \_\/___|\__,_|_|  \___|


Welcome to the cool new Azure CLI!

Use `az --version` to display the current version.
Here are the base commands:

    account          : Manage Azure subscription information.
    acr              : Manage Azure Container Registries for private registries within Azure.
    acs              : Manage Azure Container Services.
    ad               : Manage Azure Active Directory Graph entities needed for Role Based Access
                       Control.
    advisor          : Manage Azure Advisor.
    aks              : (PREVIEW) Manage Azure Kubernetes Services.
    ams              : Manage Azure Media Services resources.
    appservice       : Manage App Service plans.
    backup           : Commands to manage Azure Backups.
    batch            : Manage Azure Batch.
    batchai          : Batch AI.
    billing          : Manage Azure Billing.
    cdn              : Manage Azure Content Delivery Networks (CDNs).
    cloud            : Manage registered Azure clouds.
    cognitiveservices: Manage Azure Cognitive Services accounts.
    configure        : Display and manage the Azure CLI 2.0 configuration. This command is
                       interactive.
    consumption      : Manage consumption of Azure resources.
    container        : Manage Azure Container Instances.
    cosmosdb         : Manage Azure Cosmos DB database accounts.
    disk             : Manage Azure Managed Disks.
    dla              : (PREVIEW) Manage Data Lake Analytics accounts, jobs, and catalogs.
    dls              : (PREVIEW) Manage Data Lake Store accounts and filesystems.
    dms              : Manage Azure Data Migration Service (DMS) instances.
    eventgrid        : Manage Azure Event Grid topics and subscriptions.
    eventhubs        : Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo
                       recovery configurations - Alias.
    extension        : Manage and update CLI extensions.
    feature          : Manage resource provider features.
    feedback         : Loving or hating the CLI?  Let us know!
    find             : Find Azure CLI commands.
    functionapp      : Manage function apps.
    group            : Manage resource groups and template deployments.
    identity         : Managed Service Identities.
    image            : Manage custom virtual machine images.
    interactive      : Start interactive mode.
    iot              : (PREVIEW) Manage Internet of Things (IoT) assets.
    keyvault         : Safeguard and maintain control of keys, secrets, and certificates.
    lab              : Manage Azure DevTest Labs.
    lock             : Manage Azure locks.
    login            : Log in to Azure.
    logout           : Log out to remove access to Azure subscriptions.
    managedapp       : Manage template solutions provided and maintained by Independent Software
                       Vendors (ISVs).
    maps             : Manage Azure Maps.
    monitor          : Manage the Azure Monitor Service.
    mysql            : Manage Azure Database for MySQL servers.
    network          : Manage Azure Network resources.
    policy           : Manage resource policies.
    postgres         : Manage Azure Database for PostgreSQL servers.
    provider         : Manage resource providers.
    redis            : Access to a secure, dedicated Redis cache for your Azure applications.
    reservations     : Manage Azure Reservations.
    resource         : Manage Azure resources.
    role             : Manage user roles for access control with Azure Active Directory and service
                       principals.
    servicebus       : Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules and
                       geo-disaster recovery configuration alias.
    sf               : Manage and administer Azure Service Fabric clusters.
    snapshot         : Manage point-in-time copies of managed disks, native blobs, or other
                       snapshots.
    sql              : Manage Azure SQL Databases and Data Warehouses.
    storage          : Manage Azure Cloud Storage resources.
    tag              : Manage resource tags.
    vm               : Provision Linux or Windows virtual machines.
    vmss             : Manage groupings of virtual machines in an Azure Virtual Machine Scale Set
                       (VMSS).
    webapp           : Manage web apps.

```

## Disk manage help

### H1

```
h1 disk --help
usage: h1 disk [-h] {list,show,delete,rename,create,resume,resize,download} ...

Manage your DISK

Optional arguments:
  -h, --help            Show this help message and exit.

subcommands:
  {list,show,delete,rename,create,resume,resize,download}
    list                Resource list
    show                Resource show
    delete              Resource delete
    rename              Resource rename
    create              Disk create
    resume              Resume Create Upload
    resize              Resource resize
    download            Download
```

### Azure

```
$ az disk --help

Group
    az disk: Manage Azure Managed Disks.

Commands:
    create       : Create a managed disk.
    delete       : Delete a managed disk.
    grant-access : Grant a resource read access to a managed disk.
    list         : List managed disks.
    revoke-access: Revoke a resource's read access to a managed disk.
    show         : Gets information about a disk.
    update       : Update a managed disk.
    wait         : Place the CLI in a waiting state until a condition of a managed disk is met.
```

Note: An interesting "wait" command.

## Wait command help

### Azure

```
 az vm wait --help

Command
    az vm wait: Place the CLI in a waiting state until a condition of the VM is met.

Arguments

Resource Id Arguments
    --ids              : One or more resource IDs (space-delimited). If provided, no other 'Resource
                         Id' arguments should be specified.
    --name -n          : The name of the Virtual Machine. You can configure the default using `az
                         configure --defaults vm=<name>`.
    --resource-group -g: Name of resource group. You can configure the default group using `az
                         configure --defaults group=<name>`.

Wait Condition Arguments
    --created          : Wait until created with 'provisioningState' at 'Succeeded'.
    --custom           : Wait until the condition satisfies a custom JMESPath query. E.g.
                         provisioningState!='InProgress',
                         instanceView.statuses[?code=='PowerState/running'].
    --deleted          : Wait until deleted.
    --exists           : Wait until the resource exists.
    --interval         : Polling interval in seconds.  Default: 30.
    --timeout          : Maximum wait in seconds.  Default: 3600.
    --updated          : Wait until updated with provisioningState at 'Succeeded'.

Global Arguments
    --debug            : Increase logging verbosity to show all debug logs.
    --help -h          : Show this help message and exit.
    --output -o        : Output format.  Allowed values: json, jsonc, table, tsv.  Default: json.
    --query            : JMESPath query string. See http://jmespath.org/ for more information and
                         examples.
    --verbose          : Increase logging verbosity. Use --debug for full debug logs.

Examples
    Wait until a VM is created.
        az vm wait -g MyResourceGroup -n MyVm --created

    Wait until all VMs in a resource group are deleted.
        az vm wait --deleted --ids $(az vm list -g MyResourceGroup --query "[].id" -o tsv)
```

## VM create help

### H1

```
$ h1 vm create --help

usage: h1 vm create [-h] [--output {table,tsv,list,json}] [--query QUERY] [--transform TRANSFORM] --name NAME --type
                    TYPE [--password PASSWORD] [--username USERNAME] [--sshkey SSHKEYS] [--image IMAGE] [--iso ISO]
                    [--os-disk-name OS-DISK-NAME] [--os-disk-type OS-DISK-TYPE] [--os-disk-size OS-DISK-SIZE]
                    [--os-disk OS-DISK] [--network NETWORK] [--ip IP] [--no-start] [--userdata-file USERDATA-FILE]
                    [--tenant-select TENANT-SELECT] [--verbose] [--no-wait] [--dry-run]


VM create

Optional arguments:
  -h, --help            Show this help message and exit.
  --name NAME           VM name
  --type TYPE           VM type Id
  --password PASSWORD   Password
  --username USERNAME   Username
  --sshkey SSHKEYS      SSH key id
  --image IMAGE         Image id
  --iso ISO             Iso id
  --os-disk-name OS-DISK-NAME
                        OS disk name
  --os-disk-type OS-DISK-TYPE
                        OS disk type
  --os-disk-size OS-DISK-SIZE
                        OS disk size
  --os-disk OS-DISK     OS disk: name,service,size
  --network NETWORK     Network for VM
  --ip IP               IP for VM
  --no-start            Do not start vm after creation
  --userdata-file USERDATA-FILE
                        Read userdata from file
  --tenant-select TENANT-SELECT
                        Override current tenant on the request
  --verbose, -v         verbose
  --no-wait             in case of queued event do not wait for completion
  --dry-run             dry run for the request

Output options:
  --output {table,tsv,list,json}, -o {table,tsv,list,json}
                        output format
  --query QUERY         query selector
  --transform TRANSFORM
                        transform results
```

### Azure

```
$ az vm create --help

Command
    az vm create: Create an Azure Virtual Machine.
        For an end-to-end tutorial, see https://docs.microsoft.com/azure/virtual-machines/virtual-
        machines-linux-quick-create-cli.

Arguments
    --name -n                [Required]: Name of the virtual machine.
    --resource-group -g      [Required]: Name of resource group. You can configure the default group
                                         using `az configure --defaults group=<name>`.
    --attach-data-disks                : Attach existing data disks to the VM. Can use the name or
                                         ID of a managed disk or the URI to an unmanaged disk VHD.
    --attach-os-disk                   : Attach an existing OS disk to the VM. Can use the name or
                                         ID of a managed disk or the URI to an unmanaged disk VHD.
    --availability-set                 : Name or ID of an existing availability set to add the VM
                                         to. None by default.
    --boot-diagnostics-storage         : Pre-existing storage account name or its blob uri to
                                         capture boot diagnostics. Its sku should be one of
                                         Standard_GRS, Standard_LRS and Standard_RAGRS.
    --custom-data                      : Custom init script file or text (cloud-init, cloud-config,
                                         etc..).
    --image                            : The name of the operating system image as a URN alias, URN,
                                         custom image name or ID, or VHD blob URI. This parameter is
                                         required unless using `--attach-os-disk.`.  Values from: az
                                         vm image list, az vm image show.
    --license-type                     : License type if the Windows image or disk used was licensed
                                         on-premises.  Allowed values: None, Windows_Client,
                                         Windows_Server.
    --location -l                      : Location in which to create VM and related resources. If
                                         default location is not configured, will default to the
                                         resource group's location.
    --no-wait                          : Do not wait for the long-running operation to finish.
    --secrets                          : One or many Key Vault secrets as JSON strings or files via
                                         `@<file path>` containing `[{ "sourceVault": { "id":
                                         "value" }, "vaultCertificates": [{ "certificateUrl":
                                         "value", "certificateStore": "cert store name (only on
                                         windows)"}] }]`.
    --size                             : The VM size to be created. See
                                         https://azure.microsoft.com/en-us/pricing/details/virtual-
                                         machines/ for size info.  Default: Standard_DS1_v2.
    --tags                             : Space-separated tags in 'key[=value]' format. Use '' to
                                         clear existing tags.
    --validate                         : Generate and validate the ARM template without creating any
                                         resources.
    --zone -z                          : Availability zone into which to provision the resource.
                                         Allowed values: 1, 2, 3.

Authentication Arguments
    --admin-password                   : Password for the VM if authentication type is 'Password'.
    --admin-username                   : Username for the VM.  Default: root.
    --authentication-type              : Type of authentication to use with the VM. Defaults to
                                         password for Windows and SSH public key for Linux.  Allowed
                                         values: password, ssh.
    --generate-ssh-keys                : Generate SSH public and private key files if missing. The
                                         keys will be stored in the ~/.ssh directory.
    --ssh-dest-key-path                : Destination file path on the VM for the SSH key.
    --ssh-key-value                    : The SSH public key or public key file path.

Managed Service Identity Arguments
    --assign-identity                  : Accept system or user assigned identities separated by
                                         spaces. Use '[system]' to refer system assigned identity,
                                         or a resource id to refer user assigned identity. Check out
                                         help for more examples.
    --role                             : Role name or id the system assigned identity will have.
                                         Default: Contributor.
    --scope                            : Scope that the system assigned identity can access.

Marketplace Image Plan Arguments
    --plan-name                        : Plan name.
    --plan-product                     : Plan product.
    --plan-promotion-code              : Plan promotion code.
    --plan-publisher                   : Plan publisher.

Network Arguments
    --asgs                             : Space-separated list of existing application security
                                         groups to associate with the VM.
    --nics                             : Names or IDs of existing NICs to attach to the VM. The
                                         first NIC will be designated as primary. If omitted, a new
                                         NIC will be created. If an existing NIC is specified, do
                                         not specify subnet, VNet, public IP or NSG.
    --nsg                              : The name to use when creating a new Network Security Group
                                         (default) or referencing an existing one. Can also
                                         reference an existing NSG by ID or specify "" for none.
    --nsg-rule                         : NSG rule to create when creating a new NSG. Defaults to
                                         open ports for allowing RDP on Windows and allowing SSH on
                                         Linux.  Allowed values: RDP, SSH.
    --private-ip-address               : Static private IP address (e.g. 10.0.0.5).
    --public-ip-address                : Name of the public IP address when creating one (default)
                                         or referencing an existing one. Can also reference an
                                         existing public IP by ID or specify "" for None.
    --public-ip-address-allocation     : Allowed values: dynamic, static.
    --public-ip-address-dns-name       : Globally unique DNS name for a newly created public IP.
    --public-ip-sku                    : Sku.  Allowed values: Basic, Standard.
    --subnet                           : The name of the subnet when creating a new VNet or
                                         referencing an existing one. Can also reference an existing
                                         subnet by ID. If omitted, an appropriate VNet and subnet
                                         will be selected automatically, or a new one will be
                                         created.
    --subnet-address-prefix            : The subnet IP address prefix to use when creating a new
                                         VNet in CIDR format.  Default: 10.0.0.0/24.
    --vnet-address-prefix              : The IP address prefix to use when creating a new VNet in
                                         CIDR format.  Default: 10.0.0.0/16.
    --vnet-name                        : Name of the virtual network when creating a new one or
                                         referencing an existing one.

Storage Arguments
    --data-disk-caching                : Storage caching type for data disk(s), including 'None',
                                         'ReadOnly', 'ReadWrite', etc. Use a singular value to apply
                                         on all disks, or use '<lun>=<vaule1> <lun>=<value2>' to
                                         configure individual disk.
    --data-disk-sizes-gb               : Space-separated empty managed data disk sizes in GB to
                                         create.
    --os-disk-caching --storage-caching: Storage caching type for the VM OS disk. Default:
                                         ReadWrite.  Allowed values: None, ReadOnly, ReadWrite.
    --os-disk-name                     : The name of the new VM OS disk.
    --os-disk-size-gb                  : The size of the os disk in GB.
    --os-type                          : Type of OS installed on a custom VHD. Do not use when
                                         specifying an URN or URN alias.  Allowed values: linux,
                                         windows.
    --storage-account                  : Only applicable when used with `--use-unmanaged-disk`. The
                                         name to use when creating a new storage account or
                                         referencing an existing one. If omitted, an appropriate
                                         storage account in the same resource group and location
                                         will be used, or a new one will be created.
    --storage-container-name           : Only applicable when used with `--use-unmanaged-disk`. Name
                                         of the storage container for the VM OS disk. Default: vhds.
    --storage-sku                      : The SKU of the storage account with which to persist VM. By
                                         default, only Standard_LRS and Premium_LRS are allowed.
                                         With `--use-unmanaged-disk`, all are available.  Allowed
                                         values: Premium_LRS, Standard_GRS, Standard_LRS,
                                         Standard_RAGRS, Standard_ZRS.
    --use-unmanaged-disk               : Do not use managed disk to persist VM.

Global Arguments
    --debug                            : Increase logging verbosity to show all debug logs.
    --help -h                          : Show this help message and exit.
    --output -o                        : Output format.  Allowed values: json, jsonc, table, tsv.
                                         Default: json.
    --query                            : JMESPath query string. See http://jmespath.org/ for more
                                         information and examples.
    --verbose                          : Increase logging verbosity. Use --debug for full debug
                                         logs.

Examples
    Create a default Ubuntu VM with automatic SSH authentication.
        az vm create -n MyVm -g MyResourceGroup --image UbuntuLTS


    Create a default Windows Server VM with a private IP address.
        az vm create -n MyVm -g MyResourceGroup --public-ip-address "" --image Win2012R2Datacenter


    Create a VM from a custom managed image.
        az vm create -g MyResourceGroup -n MyVm --image MyImage


    Create a VM by attaching to a managed operating system disk.
        az vm create -g MyResourceGroup -n MyVm --attach-os-disk MyOsDisk --os-type linux


    Create an Ubuntu Linux VM using a cloud-init script for configuration. See:
    https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init.
        az vm create -g MyResourceGroup -n MyVm --image debian --custom-data MyCloudInitScript.yml


    Create a Debian VM with SSH key authentication and a public DNS entry, located on an existing
    virtual network and availability set.
        az vm create -n MyVm -g MyResourceGroup --image debian --vnet-name MyVnet --subnet subnet1 \
            --availability-set MyAvailabilitySet --public-ip-address-dns-name MyUniqueDnsName \
            --ssh-key-value @key-file


    Create a simple Ubuntu Linux VM with a public IP address, DNS entry, two data disks (10GB and
    20GB), and then generate ssh key pairs.
        az vm create -n MyVm -g MyResourceGroup --public-ip-address-dns-name MyUniqueDnsName \
            --image ubuntults --data-disk-sizes-gb 10 20 --size Standard_DS2_v2 \
            --generate-ssh-keys


    Create a Debian VM using Key Vault secrets.
        az keyvault certificate create --vault-name vaultname -n cert1 \
          -p "$(az keyvault certificate get-default-policy)"

        secrets=$(az keyvault secret list-versions --vault-name vaultname \
          -n cert1 --query "[?attributes.enabled].id" -o tsv)

        vm_secrets=$(az vm secret format -s "$secrets")

        az vm create -g group-name -n vm-name --admin-username deploy  \
          --image debian --secrets "$vm_secrets"


    Create a CentOS VM with a system assigned identity. The VM will have a 'Contributor' role with
    access to a storage account.
        az vm create -n MyVm -g rg1 --image centos --assign-identity --scope
        /subscriptions/99999999-1bf0-4dda-
        aec3-cb9272f09590/MyResourceGroup/myRG/providers/Microsoft.Storage/storageAccounts/storage1


    Create a debian VM with a user assigned identity.
        az vm create -n MyVm -g rg1 --image debian --assign-identity
        /subscriptions/99999999-1bf0-4dda-aec3-cb9272f09590/resourcegroups/myRG/providers/Microsoft.
        ManagedIdentity/userAssignedIdentities/myID


    Create a debian VM with both system and user assigned identity.
        az vm create -n MyVm -g rg1 --image debian --assign-identity  [system]
        /subscriptions/99999999-1bf0-4dda-aec3-cb9272f09590/resourcegroups/myRG/providers/Microsoft.
        ManagedIdentity/userAssignedIdentities/myID


    Create a VM in an availability zone in the current resource group's region
        az vm create -n MyVm -g MyResourceGroup --image Centos --zone 1
```