## h1 compute

```
h1 compute

Synopsis

  $ h1 compute <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  replica   Management of replica resource 
  vm        Management of vm resource
```

### h1 compute replica

```
h1 compute replica

Synopsis

  $ h1 compute replica <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create    Create compute/replica [Operation ID: compute_project_replica_create] 
  list      List compute/replica [Operation ID: compute_project_replica_list]     
  show      Get compute/replica [Operation ID: compute_project_replica_get]       
  delete    Delete compute/replica [Operation ID: compute_project_replica_delete] 
  service   Manage services of the replica                                        
  tag       Manage tags of the replica                                            
  event     Manage events of the replica
```

#### h1 compute replica create

```
h1 compute replica create

  Create compute/replica [Operation ID: compute_project_replica_create] 

Synopsis

  $ h1 compute replica create <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id       
  --location id-or-uri         Location Id      
  --x-idempotency-key string   Idempotency key  
  --hostname string            Replica hostname 
  --secret string              Replica secret   
  --skeleton
```

#### h1 compute replica list

```
h1 compute replica list

  List compute/replica [Operation ID: compute_project_replica_list] 

Synopsis

  $ h1 compute replica list <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id     
  --location id-or-uri   Location Id    
  --name string          Filter by name 
  --skeleton
```

#### h1 compute replica show

```
h1 compute replica show

  Get compute/replica [Operation ID: compute_project_replica_get] 

Synopsis

  $ h1 compute replica show <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --skeleton
```

#### h1 compute replica delete

```
h1 compute replica delete

  Delete compute/replica [Operation ID: compute_project_replica_delete] 

Synopsis

  $ h1 compute replica delete <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --skeleton
```

#### h1 compute replica service

```
h1 compute replica service

Synopsis

  $ h1 compute replica service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List compute/replica.service [Operation ID: compute_project_replica_service_list] 
  show   Get compute/replica.service [Operation ID: compute_project_replica_service_get]
```

##### h1 compute replica service list

```
h1 compute replica service list

  List compute/replica.service [Operation ID:                                   
  compute_project_replica_service_list]                                         

Synopsis

  $ h1 compute replica service list <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --skeleton
```

##### h1 compute replica service show

```
h1 compute replica service show

  Get compute/replica.service [Operation ID: compute_project_replica_service_get] 

Synopsis

  $ h1 compute replica service show <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --service id-or-uri    serviceId   
  --skeleton
```

#### h1 compute replica tag

```
h1 compute replica tag

Synopsis

  $ h1 compute replica tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create compute/replica.tag [Operation ID: compute_project_replica_tag_create] 
  list     List compute/replica.tag [Operation ID: compute_project_replica_tag_list]     
  show     Get compute/replica.tag [Operation ID: compute_project_replica_tag_get]       
  delete   Delete compute/replica.tag [Operation ID: compute_project_replica_tag_delete]
```

##### h1 compute replica tag create

```
h1 compute replica tag create

  Create compute/replica.tag [Operation ID: compute_project_replica_tag_create] 

Synopsis

  $ h1 compute replica tag create <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --key string           Tag key     
  --value string         Tag value   
  --skeleton
```

##### h1 compute replica tag list

```
h1 compute replica tag list

  List compute/replica.tag [Operation ID: compute_project_replica_tag_list] 

Synopsis

  $ h1 compute replica tag list <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --skeleton
```

##### h1 compute replica tag show

```
h1 compute replica tag show

  Get compute/replica.tag [Operation ID: compute_project_replica_tag_get] 

Synopsis

  $ h1 compute replica tag show <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --tag id-or-uri        tagId       
  --skeleton
```

##### h1 compute replica tag delete

```
h1 compute replica tag delete

  Delete compute/replica.tag [Operation ID: compute_project_replica_tag_delete] 

Synopsis

  $ h1 compute replica tag delete <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --tag id-or-uri        tagId       
  --skeleton
```

#### h1 compute replica event

```
h1 compute replica event

Synopsis

  $ h1 compute replica event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List compute/replica.event [Operation ID: compute_project_replica_event_list] 
  show   Get compute/replica.event [Operation ID: compute_project_replica_event_get]
```

##### h1 compute replica event list

```
h1 compute replica event list

  List compute/replica.event [Operation ID: compute_project_replica_event_list] 

Synopsis

  $ h1 compute replica event list <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --$limit string        $limit      
  --$skip string         $skip       
  --skeleton
```

##### h1 compute replica event show

```
h1 compute replica event show

  Get compute/replica.event [Operation ID: compute_project_replica_event_get] 

Synopsis

  $ h1 compute replica event show <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --replica id-or-uri    Replica Id  
  --event id-or-uri      eventId     
  --skeleton
```

### h1 compute vm

```
h1 compute vm

Synopsis

  $ h1 compute vm <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create           Create compute/vm [Operation ID: compute_project_vm_create]                 
  list             List compute/vm [Operation ID: compute_project_vm_list]                     
  show             Get compute/vm [Operation ID: compute_project_vm_get]                       
  update           Update compute/vm [Operation ID: compute_project_vm_update]                 
  delete           Delete compute/vm [Operation ID: compute_project_vm_delete]                 
  start            Start compute/vm [Operation ID: compute_project_vm_start]                   
  restart          Restart compute/vm [Operation ID: compute_project_vm_restart]               
  stop             Stop compute/vm [Operation ID: compute_project_vm_stop]                     
  turnoff          Turnoff compute/vm [Operation ID: compute_project_vm_turnoff]               
  password_reset   Password reset compute/vm [Operation ID: compute_project_vm_password_reset] 
  flavour          Flavour compute/vm [Operation ID: compute_project_vm_flavour]               
  console          Console compute/vm [Operation ID: compute_project_vm_console]               
  serialport       Serialport compute/vm [Operation ID: compute_project_vm_serialport]         
  metric           Manage metrics of the vm                                                    
  disk             Manage disks of the vm                                                      
  iso              Manage isos of the vm                                                       
  service          Manage services of the vm                                                   
  tag              Manage tags of the vm                                                       
  event            Manage events of the vm                                                     
  ssh              Connect to compute/vm using SSH
```

#### h1 compute vm create

```
h1 compute vm create

  Create compute/vm [Operation ID: compute_project_vm_create] 

Synopsis

  $ h1 compute vm create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm create --project 5f64e2468c71177993874510 --name simple-vm    
  --service /billing/project/platform/service/58ac418566e7477bd7bc4e0c          
  --credential type=plain,value=xxx                                             

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri                                Project Id                               
  --location id-or-uri                               Location Id                              
  --x-idempotency-key string                         Idempotency key                          
  --name string                                      Vm name                                  
  --service id-or-uri                                Vm service. Provide ID or URI of         
                                                     billing/service                          
  --image id-or-uri                                  Vm image. Provide ID or URI of           
                                                     storage/image. Requires permissions      
                                                     storage/image/use                        
  --iso id-or-uri                                    Vm iso. Provide ID or URI of             
                                                     storage/iso. Requires permissions        
                                                     storage/iso/use                          
  --username string                                  Vm username                              
  --user-metadata string                             Vm userMetadata                          
  --start true,false                                 Vm start. Defaults is true               
  --credential type=type,value=value                 Credential collection                    
  --disk name=name,service=service,size=size         Disk collection                          
  --netadp network=network,firewall=firewall,ip=ip   Netadp collection                        
  --tag key=key,value=value                          Tag collection                           
  --skeleton
```

#### h1 compute vm list

```
h1 compute vm list

  List compute/vm [Operation ID: compute_project_vm_list] 

Synopsis

  $ h1 compute vm list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm list --project 5f64e2468c71177993874510                       

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id          
  --location id-or-uri   Location Id         
  --name string          Filter by name      
  --tag.value string     Filter by tag.value 
  --tag.key string       Filter by tag.key   
  --skeleton
```

#### h1 compute vm show

```
h1 compute vm show

  Get compute/vm [Operation ID: compute_project_vm_get] 

Synopsis

  $ h1 compute vm show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm show --project 5f64e2468c71177993874510 --vm                  
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --skeleton
```

#### h1 compute vm update

```
h1 compute vm update

  Update compute/vm [Operation ID: compute_project_vm_update] 

Synopsis

  $ h1 compute vm update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 compute vm update --project 5f64e2468c71177993874510 --vm                
  5f577a24494c5cfdec7830e5 --name vm-renamed                                    

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri      Project Id                                                           
  --location id-or-uri     Location Id                                                          
  --vm id-or-uri           Vm Id                                                                
  --user-metadata string   Vm userMetadata. Requires permissions compute/vm.userMetadata/update 
  --name string            Vm name. Requires permissions compute/vm.name/update                 
  --skeleton
```

#### h1 compute vm delete

```
h1 compute vm delete

  Delete compute/vm [Operation ID: compute_project_vm_delete] 

Synopsis

  $ h1 compute vm delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm delete --project 5f64e2468c71177993874510 --vm                
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --skeleton
```

#### h1 compute vm start

```
h1 compute vm start

  Start compute/vm [Operation ID: compute_project_vm_start] 

Synopsis

  $ h1 compute vm start <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 compute vm restart

```
h1 compute vm restart

  Restart compute/vm [Operation ID: compute_project_vm_restart] 

Synopsis

  $ h1 compute vm restart <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 compute vm stop

```
h1 compute vm stop

  Stop compute/vm [Operation ID: compute_project_vm_stop] 

Synopsis

  $ h1 compute vm stop <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 compute vm turnoff

```
h1 compute vm turnoff

  Turnoff compute/vm [Operation ID: compute_project_vm_turnoff] 

Synopsis

  $ h1 compute vm turnoff <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 compute vm password_reset

```
h1 compute vm password_reset

  Password reset compute/vm [Operation ID: compute_project_vm_password_reset] 

Synopsis

  $ h1 compute vm password_reset <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key 
  --user-name string           Vm userName     
  --modulus string             Vm modulus      
  --exponent string            Vm exponent     
  --skeleton
```

#### h1 compute vm flavour

```
h1 compute vm flavour

  Flavour compute/vm [Operation ID: compute_project_vm_flavour] 

Synopsis

  $ h1 compute vm flavour <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id                                       
  --location id-or-uri         Location Id                                      
  --vm id-or-uri               Vm Id                                            
  --x-idempotency-key string   Idempotency key                                  
  --service id-or-uri          Vm service. Provide ID or URI of billing/service 
  --skeleton
```

#### h1 compute vm console

```
h1 compute vm console

  Console compute/vm [Operation ID: compute_project_vm_console] 

Synopsis

  $ h1 compute vm console <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --vm id-or-uri               Vm Id           
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 compute vm serialport

```
h1 compute vm serialport

  Serialport compute/vm [Operation ID: compute_project_vm_serialport] 

Synopsis

  $ h1 compute vm serialport <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id               
  --location id-or-uri         Location Id              
  --vm id-or-uri               Vm Id                    
  --x-idempotency-key string   Idempotency key          
  --number 1,2                 Vm number. Defaults is 1 
  --skeleton
```

#### h1 compute vm metric

```
h1 compute vm metric

Synopsis

  $ h1 compute vm metric <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List compute/vm.metric [Operation ID: compute_project_vm_metric_list]
```

##### h1 compute vm metric list

```
h1 compute vm metric list

  List compute/vm.metric [Operation ID: compute_project_vm_metric_list] 

Synopsis

  $ h1 compute vm metric list <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --period string        period      
  --skeleton
```

#### h1 compute vm disk

```
h1 compute vm disk

Synopsis

  $ h1 compute vm disk <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create compute/vm.disk [Operation ID: compute_project_vm_disk_create] 
  list     List compute/vm.disk [Operation ID: compute_project_vm_disk_list]
```

##### h1 compute vm disk create

```
h1 compute vm disk create

  Create compute/vm.disk [Operation ID: compute_project_vm_disk_create] 

Synopsis

  $ h1 compute vm disk create <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id                                                           
  --location id-or-uri   Location Id                                                          
  --vm id-or-uri         Vm Id                                                                
  --disk id-or-uri       Disk disk. Provide ID or URI of storage/disk. Requires permissions   
                         storage/disk/attach                                                  
  --skeleton
```

##### h1 compute vm disk list

```
h1 compute vm disk list

  List compute/vm.disk [Operation ID: compute_project_vm_disk_list] 

Synopsis

  $ h1 compute vm disk list <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --skeleton
```

#### h1 compute vm iso

```
h1 compute vm iso

Synopsis

  $ h1 compute vm iso <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create compute/vm.iso [Operation ID: compute_project_vm_iso_create] 
  list     List compute/vm.iso [Operation ID: compute_project_vm_iso_list]
```

##### h1 compute vm iso create

```
h1 compute vm iso create

  Create compute/vm.iso [Operation ID: compute_project_vm_iso_create] 

Synopsis

  $ h1 compute vm iso create <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id                                                           
  --location id-or-uri   Location Id                                                          
  --vm id-or-uri         Vm Id                                                                
  --iso id-or-uri        Iso iso. Provide ID or URI of storage/iso. Requires permissions      
                         storage/iso/attach                                                   
  --skeleton
```

##### h1 compute vm iso list

```
h1 compute vm iso list

  List compute/vm.iso [Operation ID: compute_project_vm_iso_list] 

Synopsis

  $ h1 compute vm iso list <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --skeleton
```

#### h1 compute vm service

```
h1 compute vm service

Synopsis

  $ h1 compute vm service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List compute/vm.service [Operation ID: compute_project_vm_service_list] 
  show   Get compute/vm.service [Operation ID: compute_project_vm_service_get]
```

##### h1 compute vm service list

```
h1 compute vm service list

  List compute/vm.service [Operation ID: compute_project_vm_service_list] 

Synopsis

  $ h1 compute vm service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm service list --project 5f64e2468c71177993874510 --vm          
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --skeleton
```

##### h1 compute vm service show

```
h1 compute vm service show

  Get compute/vm.service [Operation ID: compute_project_vm_service_get] 

Synopsis

  $ h1 compute vm service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm service show --project 5f64e2468c71177993874510 --vm          
  5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b                   

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --service id-or-uri    serviceId   
  --skeleton
```

#### h1 compute vm tag

```
h1 compute vm tag

Synopsis

  $ h1 compute vm tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create compute/vm.tag [Operation ID: compute_project_vm_tag_create] 
  list     List compute/vm.tag [Operation ID: compute_project_vm_tag_list]     
  show     Get compute/vm.tag [Operation ID: compute_project_vm_tag_get]       
  delete   Delete compute/vm.tag [Operation ID: compute_project_vm_tag_delete]
```

##### h1 compute vm tag create

```
h1 compute vm tag create

  Create compute/vm.tag [Operation ID: compute_project_vm_tag_create] 

Synopsis

  $ h1 compute vm tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm tag create --project 5f64e2468c71177993874510 --vm            
  5f577a24494c5cfdec7830e5 --key x --value x                                    

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --key string           Tag key     
  --value string         Tag value   
  --skeleton
```

##### h1 compute vm tag list

```
h1 compute vm tag list

  List compute/vm.tag [Operation ID: compute_project_vm_tag_list] 

Synopsis

  $ h1 compute vm tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm tag list --project 5f64e2468c71177993874510 --vm              
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --skeleton
```

##### h1 compute vm tag show

```
h1 compute vm tag show

  Get compute/vm.tag [Operation ID: compute_project_vm_tag_get] 

Synopsis

  $ h1 compute vm tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm tag show --project 5f64e2468c71177993874510 --vm              
  5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b                       

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --tag id-or-uri        tagId       
  --skeleton
```

##### h1 compute vm tag delete

```
h1 compute vm tag delete

  Delete compute/vm.tag [Operation ID: compute_project_vm_tag_delete] 

Synopsis

  $ h1 compute vm tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm tag delete --project 5f64e2468c71177993874510 --vm            
  5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b                       

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --tag id-or-uri        tagId       
  --skeleton
```

#### h1 compute vm event

```
h1 compute vm event

Synopsis

  $ h1 compute vm event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List compute/vm.event [Operation ID: compute_project_vm_event_list] 
  show   Get compute/vm.event [Operation ID: compute_project_vm_event_get]
```

##### h1 compute vm event list

```
h1 compute vm event list

  List compute/vm.event [Operation ID: compute_project_vm_event_list] 

Synopsis

  $ h1 compute vm event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm event list --project 5f64e2468c71177993874510 --vm            
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --$limit string        $limit      
  --$skip string         $skip       
  --skeleton
```

##### h1 compute vm event show

```
h1 compute vm event show

  Get compute/vm.event [Operation ID: compute_project_vm_event_get] 

Synopsis

  $ h1 compute vm event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 compute vm event show --project 5f64e2468c71177993874510 --vm            
  5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b                     

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --vm id-or-uri         Vm Id       
  --event id-or-uri      eventId     
  --skeleton
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
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --vm string          
  --project string     
  --username string
```

