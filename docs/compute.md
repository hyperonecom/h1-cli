## h1 compute

```
h1 compute

Synopsis

  $ h1 compute <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context 
  replica   Management of replica resource 
  vm        Management of vm resource
```

### h1 compute spec

```
h1 compute spec

  Print specification of context 

Synopsis

  $ h1 compute spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

### h1 compute replica

```
h1 compute replica

Synopsis

  $ h1 compute replica <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                          
  create    Create compute/replica [compute_project_replica_create] 
  list      List compute/replica [compute_project_replica_list]     
  show      Get compute/replica [compute_project_replica_get]       
  delete    Delete compute/replica [compute_project_replica_delete] 
  service   Manage services of the replica                          
  tag       Manage tags of the replica                              
  event     Manage events of the replica
```

#### h1 compute replica spec

```
h1 compute replica spec

  Print specification of context 

Synopsis

  $ h1 compute replica spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

#### h1 compute replica create

```
h1 compute replica create

  Create compute/replica [compute_project_replica_create] 

Synopsis

  $ h1 compute replica create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id       
  --location id-or-uri         Location Id      
  --x-idempotency-key string   Idempotency key  
  --hostname string            Replica hostname 
  --secret string              Replica secret
```

#### h1 compute replica list

```
h1 compute replica list

  List compute/replica [compute_project_replica_list] 

Synopsis

  $ h1 compute replica list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id     
  --location id-or-uri   Location Id    
  --name string          Filter by name
```

#### h1 compute replica show

```
h1 compute replica show

  Get compute/replica [compute_project_replica_get] 

Synopsis

  $ h1 compute replica show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id
```

#### h1 compute replica delete

```
h1 compute replica delete

  Delete compute/replica [compute_project_replica_delete] 

Synopsis

  $ h1 compute replica delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id
```

#### h1 compute replica service

```
h1 compute replica service

Synopsis

  $ h1 compute replica service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                      
  list   List compute/replica.service [compute_project_replica_service_list] 
  show   Get compute/replica.service [compute_project_replica_service_get]
```

##### h1 compute replica service spec

```
h1 compute replica service spec

  Print specification of context 

Synopsis

  $ h1 compute replica service spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

##### h1 compute replica service list

```
h1 compute replica service list

  List compute/replica.service [compute_project_replica_service_list] 

Synopsis

  $ h1 compute replica service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id
```

##### h1 compute replica service show

```
h1 compute replica service show

  Get compute/replica.service [compute_project_replica_service_get] 

Synopsis

  $ h1 compute replica service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --service id-or-uri    serviceId
```

#### h1 compute replica tag

```
h1 compute replica tag

Synopsis

  $ h1 compute replica tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                  
  create   Create compute/replica.tag [compute_project_replica_tag_create] 
  list     List compute/replica.tag [compute_project_replica_tag_list]     
  show     Get compute/replica.tag [compute_project_replica_tag_get]       
  delete   Delete compute/replica.tag [compute_project_replica_tag_delete]
```

##### h1 compute replica tag spec

```
h1 compute replica tag spec

  Print specification of context 

Synopsis

  $ h1 compute replica tag spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

##### h1 compute replica tag create

```
h1 compute replica tag create

  Create compute/replica.tag [compute_project_replica_tag_create] 

Synopsis

  $ h1 compute replica tag create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --key string           Tag key     
  --value string         Tag value
```

##### h1 compute replica tag list

```
h1 compute replica tag list

  List compute/replica.tag [compute_project_replica_tag_list] 

Synopsis

  $ h1 compute replica tag list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id
```

##### h1 compute replica tag show

```
h1 compute replica tag show

  Get compute/replica.tag [compute_project_replica_tag_get] 

Synopsis

  $ h1 compute replica tag show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --tag id-or-uri        tagId
```

##### h1 compute replica tag delete

```
h1 compute replica tag delete

  Delete compute/replica.tag [compute_project_replica_tag_delete] 

Synopsis

  $ h1 compute replica tag delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --tag id-or-uri        tagId
```

#### h1 compute replica event

```
h1 compute replica event

Synopsis

  $ h1 compute replica event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                  
  list   List compute/replica.event [compute_project_replica_event_list]
```

##### h1 compute replica event spec

```
h1 compute replica event spec

  Print specification of context 

Synopsis

  $ h1 compute replica event spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

##### h1 compute replica event list

```
h1 compute replica event list

  List compute/replica.event [compute_project_replica_event_list] 

Synopsis

  $ h1 compute replica event list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --$limit string        $limit      
  --$skip string         $skip
```

### h1 compute vm

```
h1 compute vm

Synopsis

  $ h1 compute vm <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec             Print specification of context                                
  create           Create compute/vm [compute_project_vm_create]                 
  list             List compute/vm [compute_project_vm_list]                     
  show             Get compute/vm [compute_project_vm_get]                       
  update           Update compute/vm [compute_project_vm_update]                 
  delete           Delete compute/vm [compute_project_vm_delete]                 
  start            Start compute/vm [compute_project_vm_start]                   
  restart          Restart compute/vm [compute_project_vm_restart]               
  stop             Stop compute/vm [compute_project_vm_stop]                     
  turnoff          Turnoff compute/vm [compute_project_vm_turnoff]               
  rename           Rename compute/vm [compute_project_vm_rename]                 
  password_reset   Password reset compute/vm [compute_project_vm_password_reset] 
  flavour          Flavour compute/vm [compute_project_vm_flavour]               
  hdd              Manage hdds of the vm                                         
  netadp           Manage netadps of the vm                                      
  console          Manage consoles of the vm                                     
  service          Manage services of the vm                                     
  tag              Manage tags of the vm                                         
  event            Manage events of the vm                                       
  ssh              Connect to compute/vm using SSH
```

#### h1 compute vm spec

```
h1 compute vm spec

  Print specification of context 

Synopsis

  $ h1 compute vm spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

#### h1 compute vm create

```
h1 compute vm create

  Create compute/vm [compute_project_vm_create] 

Synopsis

  $ h1 compute vm create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri                                                Project Id                                     
  --location id-or-uri                                               Location Id                                    
  --x-idempotency-key string                                         Idempotency key                                
  --name string                                                      Vm name                                        
  --service id-or-uri                                                Vm service. Provide ID or URI of               
                                                                     billing/service                                
  --image id-or-uri                                                  Vm image. Provide ID or URI of storage/image.  
                                                                     Requires permissions storage/image/use         
  --iso id-or-uri                                                    Vm iso. Provide ID or URI of storage/iso.      
                                                                     Requires permissions storage/iso/use           
  --username string                                                  Vm username                                    
  --password string                                                  Vm password                                    
  --ssh-keys string[]                                                SshKeys collection                             
  --user-metadata string                                             Vm userMetadata                                
  --disk id=id,size=size,service=service,name=name                   Disk collection                                
  --netadp service=service,network=network,ip=ip,firewall=firewall   Netadp collection                              
  --boot string                                                      Vm boot                                        
  --tag key=key,value=value                                          Tag collection
```

#### h1 compute vm list

```
h1 compute vm list

  List compute/vm [compute_project_vm_list] 

Synopsis

  $ h1 compute vm list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id          
  --location id-or-uri   Location Id         
  --name string          Filter by name      
  --tag.value string     Filter by tag.value 
  --tag.key string       Filter by tag.key
```

#### h1 compute vm show

```
h1 compute vm show

  Get compute/vm [compute_project_vm_get] 

Synopsis

  $ h1 compute vm show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id
```

#### h1 compute vm update

```
h1 compute vm update

  Update compute/vm [compute_project_vm_update] 

Synopsis

  $ h1 compute vm update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id                                                           
  --location id-or-uri     Location Id                                                          
  --vm id-or-uri           Vm Id                                                                
  --user-metadata string   Vm userMetadata. Requires permissions compute/vm.userMetadata/update 
  --name string            Vm name. Requires permissions compute/vm.name/update
```

#### h1 compute vm delete

```
h1 compute vm delete

  Delete compute/vm [compute_project_vm_delete] 

Synopsis

  $ h1 compute vm delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id             
  --location id-or-uri      Location Id            
  --vm id-or-uri            Vm Id                  
  --remove-disks string[]   RemoveDisks collection
```

#### h1 compute vm start

```
h1 compute vm start

  Start compute/vm [compute_project_vm_start] 

Synopsis

  $ h1 compute vm start <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key
```

#### h1 compute vm restart

```
h1 compute vm restart

  Restart compute/vm [compute_project_vm_restart] 

Synopsis

  $ h1 compute vm restart <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key
```

#### h1 compute vm stop

```
h1 compute vm stop

  Stop compute/vm [compute_project_vm_stop] 

Synopsis

  $ h1 compute vm stop <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key
```

#### h1 compute vm turnoff

```
h1 compute vm turnoff

  Turnoff compute/vm [compute_project_vm_turnoff] 

Synopsis

  $ h1 compute vm turnoff <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key
```

#### h1 compute vm rename

```
h1 compute vm rename

  Rename compute/vm [compute_project_vm_rename] 

Synopsis

  $ h1 compute vm rename <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key 
  --newname string             Vm newname
```

#### h1 compute vm password_reset

```
h1 compute vm password_reset

  Password reset compute/vm [compute_project_vm_password_reset] 

Synopsis

  $ h1 compute vm password_reset <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key 
  --user-name string           Vm userName     
  --modulus string             Vm modulus      
  --exponent string            Vm exponent
```

#### h1 compute vm flavour

```
h1 compute vm flavour

  Flavour compute/vm [compute_project_vm_flavour] 

Synopsis

  $ h1 compute vm flavour <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id                                       
  --location id-or-uri         Location Id                                      
  --vm id-or-uri               Vm Id                                            
  --x-idempotency-key string   Idempotency key                                  
  --service id-or-uri          Vm service. Provide ID or URI of billing/service
```

#### h1 compute vm hdd

```
h1 compute vm hdd

Synopsis

  $ h1 compute vm hdd <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                        
  create   Create compute/vm.hdd [compute_project_vm_hdd_create] 
  list     List compute/vm.hdd [compute_project_vm_hdd_list]
```

##### h1 compute vm hdd spec

```
h1 compute vm hdd spec

  Print specification of context 

Synopsis

  $ h1 compute vm hdd spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

##### h1 compute vm hdd create

```
h1 compute vm hdd create

  Create compute/vm.hdd [compute_project_vm_hdd_create] 

Synopsis

  $ h1 compute vm hdd create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri        Project Id                                                                    
  --location id-or-uri       Location Id                                                                   
  --vm id-or-uri             Vm Id                                                                         
  --disk id-or-uri           Hdd disk. Provide ID or URI of storage/disk. Requires permissions             
                             storage/disk/use                                                              
  --controller-type string   Hdd controllerType
```

##### h1 compute vm hdd list

```
h1 compute vm hdd list

  List compute/vm.hdd [compute_project_vm_hdd_list] 

Synopsis

  $ h1 compute vm hdd list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id
```

#### h1 compute vm netadp

```
h1 compute vm netadp

Synopsis

  $ h1 compute vm netadp <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                              
  create   Create compute/vm.netadp [compute_project_vm_netadp_create] 
  list     List compute/vm.netadp [compute_project_vm_netadp_list]     
  delete   Delete compute/vm.netadp [compute_project_vm_netadp_delete]
```

##### h1 compute vm netadp spec

```
h1 compute vm netadp spec

  Print specification of context 

Synopsis

  $ h1 compute vm netadp spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

##### h1 compute vm netadp create

```
h1 compute vm netadp create

  Create compute/vm.netadp [compute_project_vm_netadp_create] 

Synopsis

  $ h1 compute vm netadp create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri         Project Id                                                                    
  --location id-or-uri        Location Id                                                                   
  --vm id-or-uri              Vm Id                                                                         
  --service id-or-uri         Netadp service. Provide ID or URI of billing/service                          
  --network id-or-uri         Netadp network. Provide ID or URI of networking/network. Requires permissions 
                              networking/network/use                                                        
  --ip id-or-uri              Netadp ip. Provide ID or URI of networking/ip. Requires permissions           
                              networking/ip/use                                                             
  --tag key=key,value=value   Tag collection                                                                
  --firewall id-or-uri        Netadp firewall. Provide ID or URI of networking/firewall. Requires           
                              permissions networking/firewall/use
```

##### h1 compute vm netadp list

```
h1 compute vm netadp list

  List compute/vm.netadp [compute_project_vm_netadp_list] 

Synopsis

  $ h1 compute vm netadp list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id
```

##### h1 compute vm netadp delete

```
h1 compute vm netadp delete

  Delete compute/vm.netadp [compute_project_vm_netadp_delete] 

Synopsis

  $ h1 compute vm netadp delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --netadp id-or-uri     netadpId
```

#### h1 compute vm console

```
h1 compute vm console

Synopsis

  $ h1 compute vm console <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                          
  list   Get compute/vm.console [compute_project_vm_console_get]
```

##### h1 compute vm console spec

```
h1 compute vm console spec

  Print specification of context 

Synopsis

  $ h1 compute vm console spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

##### h1 compute vm console list

```
h1 compute vm console list

  Get compute/vm.console [compute_project_vm_console_get] 

Synopsis

  $ h1 compute vm console list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id
```

#### h1 compute vm service

```
h1 compute vm service

Synopsis

  $ h1 compute vm service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                            
  list   List compute/vm.service [compute_project_vm_service_list] 
  show   Get compute/vm.service [compute_project_vm_service_get]
```

##### h1 compute vm service spec

```
h1 compute vm service spec

  Print specification of context 

Synopsis

  $ h1 compute vm service spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

##### h1 compute vm service list

```
h1 compute vm service list

  List compute/vm.service [compute_project_vm_service_list] 

Synopsis

  $ h1 compute vm service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id
```

##### h1 compute vm service show

```
h1 compute vm service show

  Get compute/vm.service [compute_project_vm_service_get] 

Synopsis

  $ h1 compute vm service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --service id-or-uri    serviceId
```

#### h1 compute vm tag

```
h1 compute vm tag

Synopsis

  $ h1 compute vm tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                        
  create   Create compute/vm.tag [compute_project_vm_tag_create] 
  list     List compute/vm.tag [compute_project_vm_tag_list]     
  show     Get compute/vm.tag [compute_project_vm_tag_get]       
  delete   Delete compute/vm.tag [compute_project_vm_tag_delete]
```

##### h1 compute vm tag spec

```
h1 compute vm tag spec

  Print specification of context 

Synopsis

  $ h1 compute vm tag spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

##### h1 compute vm tag create

```
h1 compute vm tag create

  Create compute/vm.tag [compute_project_vm_tag_create] 

Synopsis

  $ h1 compute vm tag create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --key string           Tag key     
  --value string         Tag value
```

##### h1 compute vm tag list

```
h1 compute vm tag list

  List compute/vm.tag [compute_project_vm_tag_list] 

Synopsis

  $ h1 compute vm tag list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id
```

##### h1 compute vm tag show

```
h1 compute vm tag show

  Get compute/vm.tag [compute_project_vm_tag_get] 

Synopsis

  $ h1 compute vm tag show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --tag id-or-uri        tagId
```

##### h1 compute vm tag delete

```
h1 compute vm tag delete

  Delete compute/vm.tag [compute_project_vm_tag_delete] 

Synopsis

  $ h1 compute vm tag delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --tag id-or-uri        tagId
```

#### h1 compute vm event

```
h1 compute vm event

Synopsis

  $ h1 compute vm event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                        
  list   List compute/vm.event [compute_project_vm_event_list]
```

##### h1 compute vm event spec

```
h1 compute vm event spec

  Print specification of context 

Synopsis

  $ h1 compute vm event spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options
```

##### h1 compute vm event list

```
h1 compute vm event list

  List compute/vm.event [compute_project_vm_event_list] 

Synopsis

  $ h1 compute vm event list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --$limit string        $limit      
  --$skip string         $skip
```

#### h1 compute vm ssh

```
h1 compute vm ssh

  Connect to compute/vm using SSH 

Synopsis

  $ h1 compute vm ssh <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --vm string          
  --project string     
  --username string
```

