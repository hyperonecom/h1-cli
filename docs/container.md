## h1 container

```
h1 container

Synopsis

  $ h1 container <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context  
  instance   Management of instance resource 
  registry   Management of registry resource 
  volume     Management of volume resource
```

### h1 container spec

```
h1 container spec

  Print specification of context 

Synopsis

  $ h1 container spec <options> 

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

### h1 container instance

```
h1 container instance

Synopsis

  $ h1 container instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                                  
  create    Create container/instance [container_project_instance_create]   
  list      List container/instance [container_project_instance_list]       
  show      Get container/instance [container_project_instance_get]         
  update    Update container/instance [container_project_instance_update]   
  delete    Delete container/instance [container_project_instance_delete]   
  start     Start container/instance [container_project_instance_start]     
  stop      Stop container/instance [container_project_instance_stop]       
  restart   Restart container/instance [container_project_instance_restart] 
  process   Manage processes of the instance                                
  service   Manage services of the instance                                 
  tag       Manage tags of the instance                                     
  event     Manage events of the instance
```

#### h1 container instance spec

```
h1 container instance spec

  Print specification of context 

Synopsis

  $ h1 container instance spec <options> 

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

#### h1 container instance create

```
h1 container instance create

  Create container/instance [container_project_instance_create] 

Synopsis

  $ h1 container instance create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri                                              Project Id                                       
  --location id-or-uri                                             Location Id                                      
  --x-idempotency-key string                                       Idempotency key                                  
  --name string                                                    Instance name                                    
  --service id-or-uri                                              Instance service. Provide ID or URI of           
                                                                   billing/service                                  
  --image string                                                   Instance image                                   
  --registry string                                                Instance registry                                
  --expose internal=internal,external=external,protocol=protocol   Expose collection                                
  --env string[]                                                   Env collection                                   
  --volumes source=source,sourcePath=sourcePath,target=target      Volumes collection                               
  --tag key=key,value=value                                        Tag collection
```

#### h1 container instance list

```
h1 container instance list

  List container/instance [container_project_instance_list] 

Synopsis

  $ h1 container instance list <options> 

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

#### h1 container instance show

```
h1 container instance show

  Get container/instance [container_project_instance_get] 

Synopsis

  $ h1 container instance show <options> 

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
  --instance id-or-uri   Instance Id
```

#### h1 container instance update

```
h1 container instance update

  Update container/instance [container_project_instance_update] 

Synopsis

  $ h1 container instance update <options> 

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
  --instance id-or-uri   Instance Id                                                        
  --name string          Instance name. Requires permissions container/instance.name/update
```

#### h1 container instance delete

```
h1 container instance delete

  Delete container/instance [container_project_instance_delete] 

Synopsis

  $ h1 container instance delete <options> 

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
  --instance id-or-uri   Instance Id
```

#### h1 container instance start

```
h1 container instance start

  Start container/instance [container_project_instance_start] 

Synopsis

  $ h1 container instance start <options> 

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
  --instance id-or-uri         Instance Id     
  --x-idempotency-key string   Idempotency key
```

#### h1 container instance stop

```
h1 container instance stop

  Stop container/instance [container_project_instance_stop] 

Synopsis

  $ h1 container instance stop <options> 

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
  --instance id-or-uri         Instance Id     
  --x-idempotency-key string   Idempotency key
```

#### h1 container instance restart

```
h1 container instance restart

  Restart container/instance [container_project_instance_restart] 

Synopsis

  $ h1 container instance restart <options> 

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
  --instance id-or-uri         Instance Id     
  --x-idempotency-key string   Idempotency key
```

#### h1 container instance process

```
h1 container instance process

Synopsis

  $ h1 container instance process <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                            
  list   List container/instance.process [container_project_instance_process_list]
```

##### h1 container instance process spec

```
h1 container instance process spec

  Print specification of context 

Synopsis

  $ h1 container instance process spec <options> 

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

##### h1 container instance process list

```
h1 container instance process list

  List container/instance.process [container_project_instance_process_list] 

Synopsis

  $ h1 container instance process list <options> 

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
  --instance id-or-uri   Instance Id
```

#### h1 container instance service

```
h1 container instance service

Synopsis

  $ h1 container instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                            
  list   List container/instance.service [container_project_instance_service_list] 
  show   Get container/instance.service [container_project_instance_service_get]
```

##### h1 container instance service spec

```
h1 container instance service spec

  Print specification of context 

Synopsis

  $ h1 container instance service spec <options> 

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

##### h1 container instance service list

```
h1 container instance service list

  List container/instance.service [container_project_instance_service_list] 

Synopsis

  $ h1 container instance service list <options> 

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
  --instance id-or-uri   Instance Id
```

##### h1 container instance service show

```
h1 container instance service show

  Get container/instance.service [container_project_instance_service_get] 

Synopsis

  $ h1 container instance service show <options> 

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
  --instance id-or-uri   Instance Id 
  --service id-or-uri    serviceId
```

#### h1 container instance tag

```
h1 container instance tag

Synopsis

  $ h1 container instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                        
  create   Create container/instance.tag [container_project_instance_tag_create] 
  list     List container/instance.tag [container_project_instance_tag_list]     
  show     Get container/instance.tag [container_project_instance_tag_get]       
  delete   Delete container/instance.tag [container_project_instance_tag_delete]
```

##### h1 container instance tag spec

```
h1 container instance tag spec

  Print specification of context 

Synopsis

  $ h1 container instance tag spec <options> 

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

##### h1 container instance tag create

```
h1 container instance tag create

  Create container/instance.tag [container_project_instance_tag_create] 

Synopsis

  $ h1 container instance tag create <options> 

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
  --instance id-or-uri   Instance Id 
  --key string           Tag key     
  --value string         Tag value
```

##### h1 container instance tag list

```
h1 container instance tag list

  List container/instance.tag [container_project_instance_tag_list] 

Synopsis

  $ h1 container instance tag list <options> 

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
  --instance id-or-uri   Instance Id
```

##### h1 container instance tag show

```
h1 container instance tag show

  Get container/instance.tag [container_project_instance_tag_get] 

Synopsis

  $ h1 container instance tag show <options> 

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
  --instance id-or-uri   Instance Id 
  --tag id-or-uri        tagId
```

##### h1 container instance tag delete

```
h1 container instance tag delete

  Delete container/instance.tag [container_project_instance_tag_delete] 

Synopsis

  $ h1 container instance tag delete <options> 

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
  --instance id-or-uri   Instance Id 
  --tag id-or-uri        tagId
```

#### h1 container instance event

```
h1 container instance event

Synopsis

  $ h1 container instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                        
  list   List container/instance.event [container_project_instance_event_list]
```

##### h1 container instance event spec

```
h1 container instance event spec

  Print specification of context 

Synopsis

  $ h1 container instance event spec <options> 

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

##### h1 container instance event list

```
h1 container instance event list

  List container/instance.event [container_project_instance_event_list] 

Synopsis

  $ h1 container instance event list <options> 

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
  --instance id-or-uri   Instance Id 
  --$limit string        $limit      
  --$skip string         $skip
```

### h1 container registry

```
h1 container registry

Synopsis

  $ h1 container registry <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                                    
  create       Create container/registry [container_project_registry_create]     
  list         List container/registry [container_project_registry_list]         
  show         Get container/registry [container_project_registry_get]           
  update       Update container/registry [container_project_registry_update]     
  delete       Delete container/registry [container_project_registry_delete]     
  start        Start container/registry [container_project_registry_start]       
  stop         Stop container/registry [container_project_registry_stop]         
  transfer     Transfer container/registry [container_project_registry_transfer] 
  repository   Manage repositories of the registry                               
  credential   Manage credentials of the registry                                
  service      Manage services of the registry                                   
  tag          Manage tags of the registry                                       
  event        Manage events of the registry
```

#### h1 container registry spec

```
h1 container registry spec

  Print specification of context 

Synopsis

  $ h1 container registry spec <options> 

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

#### h1 container registry create

```
h1 container registry create

  Create container/registry [container_project_registry_create] 

Synopsis

  $ h1 container registry create <options> 

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
  --name string                Registry name                                          
  --service id-or-uri          Registry service. Provide ID or URI of billing/service 
  --tag key=key,value=value    Tag collection
```

#### h1 container registry list

```
h1 container registry list

  List container/registry [container_project_registry_list] 

Synopsis

  $ h1 container registry list <options> 

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

#### h1 container registry show

```
h1 container registry show

  Get container/registry [container_project_registry_get] 

Synopsis

  $ h1 container registry show <options> 

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
  --registry id-or-uri   Registry Id
```

#### h1 container registry update

```
h1 container registry update

  Update container/registry [container_project_registry_update] 

Synopsis

  $ h1 container registry update <options> 

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
  --registry id-or-uri   Registry Id                                                              
  --name string          Registry name. Requires permissions container/registry.name/update       
  --domain string[]      Domain collection. Requires permissions container/registry.domain/update
```

#### h1 container registry delete

```
h1 container registry delete

  Delete container/registry [container_project_registry_delete] 

Synopsis

  $ h1 container registry delete <options> 

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
  --registry id-or-uri   Registry Id
```

#### h1 container registry start

```
h1 container registry start

  Start container/registry [container_project_registry_start] 

Synopsis

  $ h1 container registry start <options> 

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
  --registry id-or-uri         Registry Id     
  --x-idempotency-key string   Idempotency key
```

#### h1 container registry stop

```
h1 container registry stop

  Stop container/registry [container_project_registry_stop] 

Synopsis

  $ h1 container registry stop <options> 

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
  --registry id-or-uri         Registry Id     
  --x-idempotency-key string   Idempotency key
```

#### h1 container registry transfer

```
h1 container registry transfer

  Transfer container/registry [container_project_registry_transfer] 

Synopsis

  $ h1 container registry transfer <options> 

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
  --registry id-or-uri         Registry Id                                                                   
  --x-idempotency-key string   Idempotency key                                                               
  --project uri                Registry project. Provide URI of iam/project. Requires permissions            
                               container/registry/create
```

#### h1 container registry repository

```
h1 container registry repository

Synopsis

  $ h1 container registry repository <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec    Print specification of context                                                  
  list    List container/registry.repository [container_project_registry_repository_list] 
  show    Get container/registry.repository [container_project_registry_repository_get]   
  image   Manage images of the repository
```

##### h1 container registry repository spec

```
h1 container registry repository spec

  Print specification of context 

Synopsis

  $ h1 container registry repository spec <options> 

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

##### h1 container registry repository list

```
h1 container registry repository list

  List container/registry.repository [container_project_registry_repository_list] 

Synopsis

  $ h1 container registry repository list <options> 

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
  --registry id-or-uri   Registry Id
```

##### h1 container registry repository show

```
h1 container registry repository show

  Get container/registry.repository [container_project_registry_repository_get] 

Synopsis

  $ h1 container registry repository show <options> 

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
  --registry id-or-uri     Registry Id  
  --repository id-or-uri   repositoryId
```

##### h1 container registry repository image

```
h1 container registry repository image

Synopsis

  $ h1 container registry repository image <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                                       
  list     List container/registry.image [container_project_registry_repository_image_list]     
  show     Get container/registry.image [container_project_registry_repository_image_get]       
  delete   Delete container/registry.image [container_project_registry_repository_image_delete]
```

###### h1 container registry repository image spec

```
h1 container registry repository image spec

  Print specification of context 

Synopsis

  $ h1 container registry repository image spec <options> 

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

###### h1 container registry repository image list

```
h1 container registry repository image list

  List container/registry.image                                                 
  [container_project_registry_repository_image_list]                            

Synopsis

  $ h1 container registry repository image list <options> 

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
  --registry id-or-uri     Registry Id  
  --repository id-or-uri   repositoryId
```

###### h1 container registry repository image show

```
h1 container registry repository image show

  Get container/registry.image [container_project_registry_repository_image_get] 

Synopsis

  $ h1 container registry repository image show <options> 

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
  --registry id-or-uri     Registry Id  
  --repository id-or-uri   repositoryId 
  --image id-or-uri        imageId
```

###### h1 container registry repository image delete

```
h1 container registry repository image delete

  Delete container/registry.image                                               
  [container_project_registry_repository_image_delete]                          

Synopsis

  $ h1 container registry repository image delete <options> 

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
  --registry id-or-uri     Registry Id  
  --repository id-or-uri   repositoryId 
  --image id-or-uri        imageId
```

#### h1 container registry credential

```
h1 container registry credential

Synopsis

  $ h1 container registry credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                                      
  create   Create container/registry.credential [container_project_registry_credential_create] 
  list     List container/registry.credential [container_project_registry_credential_list]     
  show     Get container/registry.credential [container_project_registry_credential_get]       
  update   Update container/registry.credential [container_project_registry_credential_patch]  
  delete   Delete container/registry.credential [container_project_registry_credential_delete]
```

##### h1 container registry credential spec

```
h1 container registry credential spec

  Print specification of context 

Synopsis

  $ h1 container registry credential spec <options> 

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

##### h1 container registry credential create

```
h1 container registry credential create

  Create container/registry.credential                                          
  [container_project_registry_credential_create]                                

Synopsis

  $ h1 container registry credential create <options> 

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
  --registry id-or-uri   Registry Id      
  --name string          Credential name  
  --type string          Credential type  
  --value string         Credential value 
  --token string         Credential token
```

##### h1 container registry credential list

```
h1 container registry credential list

  List container/registry.credential [container_project_registry_credential_list] 

Synopsis

  $ h1 container registry credential list <options> 

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
  --registry id-or-uri   Registry Id
```

##### h1 container registry credential show

```
h1 container registry credential show

  Get container/registry.credential [container_project_registry_credential_get] 

Synopsis

  $ h1 container registry credential show <options> 

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
  --registry id-or-uri     Registry Id  
  --credential id-or-uri   credentialId
```

##### h1 container registry credential update

```
h1 container registry credential update

  Update container/registry.credential                                          
  [container_project_registry_credential_patch]                                 

Synopsis

  $ h1 container registry credential update <options> 

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
  --registry id-or-uri     Registry Id                                                                   
  --credential id-or-uri   credentialId                                                                  
  --name string            Credential name. Requires permissions                                         
                           container/registry.credential.name/update
```

##### h1 container registry credential delete

```
h1 container registry credential delete

  Delete container/registry.credential                                          
  [container_project_registry_credential_delete]                                

Synopsis

  $ h1 container registry credential delete <options> 

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
  --registry id-or-uri     Registry Id  
  --credential id-or-uri   credentialId
```

#### h1 container registry service

```
h1 container registry service

Synopsis

  $ h1 container registry service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                            
  list   List container/registry.service [container_project_registry_service_list] 
  show   Get container/registry.service [container_project_registry_service_get]
```

##### h1 container registry service spec

```
h1 container registry service spec

  Print specification of context 

Synopsis

  $ h1 container registry service spec <options> 

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

##### h1 container registry service list

```
h1 container registry service list

  List container/registry.service [container_project_registry_service_list] 

Synopsis

  $ h1 container registry service list <options> 

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
  --registry id-or-uri   Registry Id
```

##### h1 container registry service show

```
h1 container registry service show

  Get container/registry.service [container_project_registry_service_get] 

Synopsis

  $ h1 container registry service show <options> 

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
  --registry id-or-uri   Registry Id 
  --service id-or-uri    serviceId
```

#### h1 container registry tag

```
h1 container registry tag

Synopsis

  $ h1 container registry tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                        
  create   Create container/registry.tag [container_project_registry_tag_create] 
  list     List container/registry.tag [container_project_registry_tag_list]     
  show     Get container/registry.tag [container_project_registry_tag_get]       
  delete   Delete container/registry.tag [container_project_registry_tag_delete]
```

##### h1 container registry tag spec

```
h1 container registry tag spec

  Print specification of context 

Synopsis

  $ h1 container registry tag spec <options> 

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

##### h1 container registry tag create

```
h1 container registry tag create

  Create container/registry.tag [container_project_registry_tag_create] 

Synopsis

  $ h1 container registry tag create <options> 

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
  --registry id-or-uri   Registry Id 
  --key string           Tag key     
  --value string         Tag value
```

##### h1 container registry tag list

```
h1 container registry tag list

  List container/registry.tag [container_project_registry_tag_list] 

Synopsis

  $ h1 container registry tag list <options> 

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
  --registry id-or-uri   Registry Id
```

##### h1 container registry tag show

```
h1 container registry tag show

  Get container/registry.tag [container_project_registry_tag_get] 

Synopsis

  $ h1 container registry tag show <options> 

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
  --registry id-or-uri   Registry Id 
  --tag id-or-uri        tagId
```

##### h1 container registry tag delete

```
h1 container registry tag delete

  Delete container/registry.tag [container_project_registry_tag_delete] 

Synopsis

  $ h1 container registry tag delete <options> 

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
  --registry id-or-uri   Registry Id 
  --tag id-or-uri        tagId
```

#### h1 container registry event

```
h1 container registry event

Synopsis

  $ h1 container registry event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                        
  list   List container/registry.event [container_project_registry_event_list]
```

##### h1 container registry event spec

```
h1 container registry event spec

  Print specification of context 

Synopsis

  $ h1 container registry event spec <options> 

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

##### h1 container registry event list

```
h1 container registry event list

  List container/registry.event [container_project_registry_event_list] 

Synopsis

  $ h1 container registry event list <options> 

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
  --registry id-or-uri   Registry Id 
  --$limit string        $limit      
  --$skip string         $skip
```

### h1 container volume

```
h1 container volume

Synopsis

  $ h1 container volume <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                            
  create    Create container/volume [container_project_volume_create] 
  list      List container/volume [container_project_volume_list]     
  show      Get container/volume [container_project_volume_get]       
  update    Update container/volume [container_project_volume_update] 
  delete    Delete container/volume [container_project_volume_delete] 
  service   Manage services of the volume                             
  tag       Manage tags of the volume                                 
  event     Manage events of the volume
```

#### h1 container volume spec

```
h1 container volume spec

  Print specification of context 

Synopsis

  $ h1 container volume spec <options> 

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

#### h1 container volume create

```
h1 container volume create

  Create container/volume [container_project_volume_create] 

Synopsis

  $ h1 container volume create <options> 

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
  --name string                Volume name                                          
  --service id-or-uri          Volume service. Provide ID or URI of billing/service 
  --size string                Volume size                                          
  --tag key=key,value=value    Tag collection
```

#### h1 container volume list

```
h1 container volume list

  List container/volume [container_project_volume_list] 

Synopsis

  $ h1 container volume list <options> 

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

#### h1 container volume show

```
h1 container volume show

  Get container/volume [container_project_volume_get] 

Synopsis

  $ h1 container volume show <options> 

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
  --volume id-or-uri     Volume Id
```

#### h1 container volume update

```
h1 container volume update

  Update container/volume [container_project_volume_update] 

Synopsis

  $ h1 container volume update <options> 

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
  --volume id-or-uri     Volume Id                                                      
  --name string          Volume name. Requires permissions container/volume.name/update
```

#### h1 container volume delete

```
h1 container volume delete

  Delete container/volume [container_project_volume_delete] 

Synopsis

  $ h1 container volume delete <options> 

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
  --volume id-or-uri     Volume Id
```

#### h1 container volume service

```
h1 container volume service

Synopsis

  $ h1 container volume service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                        
  list   List container/volume.service [container_project_volume_service_list] 
  show   Get container/volume.service [container_project_volume_service_get]
```

##### h1 container volume service spec

```
h1 container volume service spec

  Print specification of context 

Synopsis

  $ h1 container volume service spec <options> 

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

##### h1 container volume service list

```
h1 container volume service list

  List container/volume.service [container_project_volume_service_list] 

Synopsis

  $ h1 container volume service list <options> 

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
  --volume id-or-uri     Volume Id
```

##### h1 container volume service show

```
h1 container volume service show

  Get container/volume.service [container_project_volume_service_get] 

Synopsis

  $ h1 container volume service show <options> 

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
  --volume id-or-uri     Volume Id   
  --service id-or-uri    serviceId
```

#### h1 container volume tag

```
h1 container volume tag

Synopsis

  $ h1 container volume tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                    
  create   Create container/volume.tag [container_project_volume_tag_create] 
  list     List container/volume.tag [container_project_volume_tag_list]     
  show     Get container/volume.tag [container_project_volume_tag_get]       
  delete   Delete container/volume.tag [container_project_volume_tag_delete]
```

##### h1 container volume tag spec

```
h1 container volume tag spec

  Print specification of context 

Synopsis

  $ h1 container volume tag spec <options> 

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

##### h1 container volume tag create

```
h1 container volume tag create

  Create container/volume.tag [container_project_volume_tag_create] 

Synopsis

  $ h1 container volume tag create <options> 

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
  --volume id-or-uri     Volume Id   
  --key string           Tag key     
  --value string         Tag value
```

##### h1 container volume tag list

```
h1 container volume tag list

  List container/volume.tag [container_project_volume_tag_list] 

Synopsis

  $ h1 container volume tag list <options> 

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
  --volume id-or-uri     Volume Id
```

##### h1 container volume tag show

```
h1 container volume tag show

  Get container/volume.tag [container_project_volume_tag_get] 

Synopsis

  $ h1 container volume tag show <options> 

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
  --volume id-or-uri     Volume Id   
  --tag id-or-uri        tagId
```

##### h1 container volume tag delete

```
h1 container volume tag delete

  Delete container/volume.tag [container_project_volume_tag_delete] 

Synopsis

  $ h1 container volume tag delete <options> 

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
  --volume id-or-uri     Volume Id   
  --tag id-or-uri        tagId
```

#### h1 container volume event

```
h1 container volume event

Synopsis

  $ h1 container volume event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                    
  list   List container/volume.event [container_project_volume_event_list]
```

##### h1 container volume event spec

```
h1 container volume event spec

  Print specification of context 

Synopsis

  $ h1 container volume event spec <options> 

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

##### h1 container volume event list

```
h1 container volume event list

  List container/volume.event [container_project_volume_event_list] 

Synopsis

  $ h1 container volume event list <options> 

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
  --volume id-or-uri     Volume Id   
  --$limit string        $limit      
  --$skip string         $skip
```

