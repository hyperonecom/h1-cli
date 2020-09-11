## h1 website

```
h1 website

Synopsis

  $ h1 website <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context  
  instance   Management of instance resource
```

### h1 website spec

```
h1 website spec

  Print specification of context 

Synopsis

  $ h1 website spec <options> 

Global options

  --help    Show help message and exit. 

Operation options
```

### h1 website instance

```
h1 website instance

Synopsis

  $ h1 website instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                                
  create       Create website/instance [website_project_instance_create]     
  list         List website/instance [website_project_instance_list]         
  show         Get website/instance [website_project_instance_get]           
  update       Update website/instance [website_project_instance_update]     
  delete       Delete website/instance [website_project_instance_delete]     
  start        Start website/instance [website_project_instance_start]       
  stop         Stop website/instance [website_project_instance_stop]         
  restart      Restart website/instance [website_project_instance_restart]   
  transfer     Transfer website/instance [website_project_instance_transfer] 
  snapshot     Manage snapshots of the instance                              
  env          Manage envs of the instance                                   
  link         Manage links of the instance                                  
  sideapp      Manage sideapps of the instance                               
  credential   Manage credentials of the instance                            
  domain       Manage domains of the instance                                
  service      Manage services of the instance                               
  tag          Manage tags of the instance                                   
  event        Manage events of the instance                                 
  ssh          Connect to website/instance using SSH                         
  sftp         Connect to website/instance using SFTP
```

#### h1 website instance spec

```
h1 website instance spec

  Print specification of context 

Synopsis

  $ h1 website instance spec <options> 

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

#### h1 website instance create

```
h1 website instance create

  Create website/instance [website_project_instance_create] 

Synopsis

  $ h1 website instance create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri           Project Id                                                                    
  --location id-or-uri          Location Id                                                                   
  --x-idempotency-key string    Idempotency key                                                               
  --name string                 Instance name                                                                 
  --service id-or-uri           Instance service. Provide ID or URI of billing/service                        
  --image uri                   Instance image. Provide URI of website/image                                  
  --source uri                  Instance source. Provide URI of website/instance.snapshot. Requires           
                                permissions website/instance.snapshot/use                                     
  --env name=name,value=value   Env collection                                                                
  --tag key=key,value=value     Tag collection                                                                
  --skeleton true,false
```

#### h1 website instance list

```
h1 website instance list

  List website/instance [website_project_instance_list] 

Synopsis

  $ h1 website instance list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id          
  --location id-or-uri    Location Id         
  --name string           Filter by name      
  --tag.value string      Filter by tag.value 
  --tag.key string        Filter by tag.key   
  --skeleton true,false
```

#### h1 website instance show

```
h1 website instance show

  Get website/instance [website_project_instance_get] 

Synopsis

  $ h1 website instance show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --skeleton true,false
```

#### h1 website instance update

```
h1 website instance update

  Update website/instance [website_project_instance_update] 

Synopsis

  $ h1 website instance update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id                                                                    
  --location id-or-uri    Location Id                                                                   
  --instance id-or-uri    Instance Id                                                                   
  --name string           Instance name. Requires permissions website/instance.name/update              
  --image uri             Instance image. Provide URI of website/image. Requires permissions            
                          website/instance.image/update                                                 
  --skeleton true,false
```

#### h1 website instance delete

```
h1 website instance delete

  Delete website/instance [website_project_instance_delete] 

Synopsis

  $ h1 website instance delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --skeleton true,false
```

#### h1 website instance start

```
h1 website instance start

  Start website/instance [website_project_instance_start] 

Synopsis

  $ h1 website instance start <options> 

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
  --skeleton true,false
```

#### h1 website instance stop

```
h1 website instance stop

  Stop website/instance [website_project_instance_stop] 

Synopsis

  $ h1 website instance stop <options> 

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
  --skeleton true,false
```

#### h1 website instance restart

```
h1 website instance restart

  Restart website/instance [website_project_instance_restart] 

Synopsis

  $ h1 website instance restart <options> 

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
  --skeleton true,false
```

#### h1 website instance transfer

```
h1 website instance transfer

  Transfer website/instance [website_project_instance_transfer] 

Synopsis

  $ h1 website instance transfer <options> 

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
  --project uri                Instance project. Provide URI of iam/project. Requires permissions            
                               website/instance/create                                                       
  --skeleton true,false
```

#### h1 website instance snapshot

```
h1 website instance snapshot

Synopsis

  $ h1 website instance snapshot <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                                                              
  create     Create website/instance.snapshot [website_project_instance_snapshot_create]                 
  list       List website/instance.snapshot [website_project_instance_snapshot_list]                     
  show       Get website/instance.snapshot [website_project_instance_snapshot_get]                       
  delete     Delete website/instance.snapshot [website_project_instance_snapshot_delete]                 
  download   Create website/instance.actions [website_project_instance_snapshot_actions_download_create]
```

##### h1 website instance snapshot spec

```
h1 website instance snapshot spec

  Print specification of context 

Synopsis

  $ h1 website instance snapshot spec <options> 

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

##### h1 website instance snapshot create

```
h1 website instance snapshot create

  Create website/instance.snapshot [website_project_instance_snapshot_create] 

Synopsis

  $ h1 website instance snapshot create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id    
  --location id-or-uri    Location Id   
  --instance id-or-uri    Instance Id   
  --name string           Snapshot name 
  --skeleton true,false
```

##### h1 website instance snapshot list

```
h1 website instance snapshot list

  List website/instance.snapshot [website_project_instance_snapshot_list] 

Synopsis

  $ h1 website instance snapshot list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --skeleton true,false
```

##### h1 website instance snapshot show

```
h1 website instance snapshot show

  Get website/instance.snapshot [website_project_instance_snapshot_get] 

Synopsis

  $ h1 website instance snapshot show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --snapshot id-or-uri    snapshotId  
  --skeleton true,false
```

##### h1 website instance snapshot delete

```
h1 website instance snapshot delete

  Delete website/instance.snapshot [website_project_instance_snapshot_delete] 

Synopsis

  $ h1 website instance snapshot delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --snapshot id-or-uri    snapshotId  
  --skeleton true,false
```

##### h1 website instance snapshot download

```
h1 website instance snapshot download

  Create website/instance.actions                                               
  [website_project_instance_snapshot_actions_download_create]                   

Synopsis

  $ h1 website instance snapshot download <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id           
  --location id-or-uri    Location Id          
  --instance id-or-uri    Instance Id          
  --snapshot id-or-uri    snapshotId           
  --incremental string    Download incremental 
  --skeleton true,false
```

#### h1 website instance env

```
h1 website instance env

Synopsis

  $ h1 website instance env <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                    
  create   Create website/instance.env [website_project_instance_env_create] 
  list     List website/instance.env [website_project_instance_env_list]     
  show     Get website/instance.env [website_project_instance_env_get]       
  delete   Delete website/instance.env [website_project_instance_env_delete]
```

##### h1 website instance env spec

```
h1 website instance env spec

  Print specification of context 

Synopsis

  $ h1 website instance env spec <options> 

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

##### h1 website instance env create

```
h1 website instance env create

  Create website/instance.env [website_project_instance_env_create] 

Synopsis

  $ h1 website instance env create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --name string           Env name    
  --value string          Env value   
  --skeleton true,false
```

##### h1 website instance env list

```
h1 website instance env list

  List website/instance.env [website_project_instance_env_list] 

Synopsis

  $ h1 website instance env list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --skeleton true,false
```

##### h1 website instance env show

```
h1 website instance env show

  Get website/instance.env [website_project_instance_env_get] 

Synopsis

  $ h1 website instance env show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --env id-or-uri         envId       
  --skeleton true,false
```

##### h1 website instance env delete

```
h1 website instance env delete

  Delete website/instance.env [website_project_instance_env_delete] 

Synopsis

  $ h1 website instance env delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --env id-or-uri         envId       
  --skeleton true,false
```

#### h1 website instance link

```
h1 website instance link

Synopsis

  $ h1 website instance link <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                      
  create   Create website/instance.link [website_project_instance_link_create] 
  list     List website/instance.link [website_project_instance_link_list]     
  show     Get website/instance.link [website_project_instance_link_get]       
  delete   Delete website/instance.link [website_project_instance_link_delete]
```

##### h1 website instance link spec

```
h1 website instance link spec

  Print specification of context 

Synopsis

  $ h1 website instance link spec <options> 

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

##### h1 website instance link create

```
h1 website instance link create

  Create website/instance.link [website_project_instance_link_create] 

Synopsis

  $ h1 website instance link create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id                                                                    
  --location id-or-uri    Location Id                                                                   
  --instance id-or-uri    Instance Id                                                                   
  --actor id-or-uri       Link actor. Provide ID or URI of iam/sa. Requires permissions iam/sa/use      
  --purpose string        Link purpose                                                                  
  --resource id-or-uri    Link resource. Provide ID or URI of insight/journal. Requires permissions     
                          insight/journal/use                                                           
  --skeleton true,false
```

##### h1 website instance link list

```
h1 website instance link list

  List website/instance.link [website_project_instance_link_list] 

Synopsis

  $ h1 website instance link list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --skeleton true,false
```

##### h1 website instance link show

```
h1 website instance link show

  Get website/instance.link [website_project_instance_link_get] 

Synopsis

  $ h1 website instance link show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --link id-or-uri        linkId      
  --skeleton true,false
```

##### h1 website instance link delete

```
h1 website instance link delete

  Delete website/instance.link [website_project_instance_link_delete] 

Synopsis

  $ h1 website instance link delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --link id-or-uri        linkId      
  --skeleton true,false
```

#### h1 website instance sideapp

```
h1 website instance sideapp

Synopsis

  $ h1 website instance sideapp <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                            
  create   Create website/instance.sideapp [website_project_instance_sideapp_create] 
  list     List website/instance.sideapp [website_project_instance_sideapp_list]     
  show     Get website/instance.sideapp [website_project_instance_sideapp_get]       
  delete   Delete website/instance.sideapp [website_project_instance_sideapp_delete]
```

##### h1 website instance sideapp spec

```
h1 website instance sideapp spec

  Print specification of context 

Synopsis

  $ h1 website instance sideapp spec <options> 

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

##### h1 website instance sideapp create

```
h1 website instance sideapp create

  Create website/instance.sideapp [website_project_instance_sideapp_create] 

Synopsis

  $ h1 website instance sideapp create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id      
  --location id-or-uri    Location Id     
  --instance id-or-uri    Instance Id     
  --flavour string        Sideapp flavour 
  --skeleton true,false
```

##### h1 website instance sideapp list

```
h1 website instance sideapp list

  List website/instance.sideapp [website_project_instance_sideapp_list] 

Synopsis

  $ h1 website instance sideapp list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --skeleton true,false
```

##### h1 website instance sideapp show

```
h1 website instance sideapp show

  Get website/instance.sideapp [website_project_instance_sideapp_get] 

Synopsis

  $ h1 website instance sideapp show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --sideapp id-or-uri     sideappId   
  --skeleton true,false
```

##### h1 website instance sideapp delete

```
h1 website instance sideapp delete

  Delete website/instance.sideapp [website_project_instance_sideapp_delete] 

Synopsis

  $ h1 website instance sideapp delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --sideapp id-or-uri     sideappId   
  --skeleton true,false
```

#### h1 website instance credential

```
h1 website instance credential

Synopsis

  $ h1 website instance credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                                  
  create   Create website/instance.credential [website_project_instance_credential_create] 
  list     List website/instance.credential [website_project_instance_credential_list]     
  show     Get website/instance.credential [website_project_instance_credential_get]       
  update   Update website/instance.credential [website_project_instance_credential_patch]  
  delete   Delete website/instance.credential [website_project_instance_credential_delete]
```

##### h1 website instance credential spec

```
h1 website instance credential spec

  Print specification of context 

Synopsis

  $ h1 website instance credential spec <options> 

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

##### h1 website instance credential create

```
h1 website instance credential create

  Create website/instance.credential [website_project_instance_credential_create] 

Synopsis

  $ h1 website instance credential create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id       
  --location id-or-uri    Location Id      
  --instance id-or-uri    Instance Id      
  --name string           Credential name  
  --type string           Credential type  
  --value string          Credential value 
  --token string          Credential token 
  --skeleton true,false
```

##### h1 website instance credential list

```
h1 website instance credential list

  List website/instance.credential [website_project_instance_credential_list] 

Synopsis

  $ h1 website instance credential list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --skeleton true,false
```

##### h1 website instance credential show

```
h1 website instance credential show

  Get website/instance.credential [website_project_instance_credential_get] 

Synopsis

  $ h1 website instance credential show <options> 

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
  --instance id-or-uri     Instance Id  
  --credential id-or-uri   credentialId 
  --skeleton true,false
```

##### h1 website instance credential update

```
h1 website instance credential update

  Update website/instance.credential [website_project_instance_credential_patch] 

Synopsis

  $ h1 website instance credential update <options> 

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
  --instance id-or-uri     Instance Id                                                                   
  --credential id-or-uri   credentialId                                                                  
  --name string            Credential name. Requires permissions website/instance.credential.name/update 
  --skeleton true,false
```

##### h1 website instance credential delete

```
h1 website instance credential delete

  Delete website/instance.credential [website_project_instance_credential_delete] 

Synopsis

  $ h1 website instance credential delete <options> 

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
  --instance id-or-uri     Instance Id  
  --credential id-or-uri   credentialId 
  --skeleton true,false
```

#### h1 website instance domain

```
h1 website instance domain

Synopsis

  $ h1 website instance domain <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                          
  create   Create website/instance.domain [website_project_instance_domain_create] 
  list     List website/instance.domain [website_project_instance_domain_list]     
  show     Get website/instance.domain [website_project_instance_domain_get]       
  delete   Delete website/instance.domain [website_project_instance_domain_delete]
```

##### h1 website instance domain spec

```
h1 website instance domain spec

  Print specification of context 

Synopsis

  $ h1 website instance domain spec <options> 

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

##### h1 website instance domain create

```
h1 website instance domain create

  Create website/instance.domain [website_project_instance_domain_create] 

Synopsis

  $ h1 website instance domain create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id   
  --location id-or-uri    Location Id  
  --instance id-or-uri    Instance Id  
  --value string          Domain value 
  --skeleton true,false
```

##### h1 website instance domain list

```
h1 website instance domain list

  List website/instance.domain [website_project_instance_domain_list] 

Synopsis

  $ h1 website instance domain list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --skeleton true,false
```

##### h1 website instance domain show

```
h1 website instance domain show

  Get website/instance.domain [website_project_instance_domain_get] 

Synopsis

  $ h1 website instance domain show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --domain id-or-uri      domainId    
  --skeleton true,false
```

##### h1 website instance domain delete

```
h1 website instance domain delete

  Delete website/instance.domain [website_project_instance_domain_delete] 

Synopsis

  $ h1 website instance domain delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --domain id-or-uri      domainId    
  --skeleton true,false
```

#### h1 website instance service

```
h1 website instance service

Synopsis

  $ h1 website instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                        
  list   List website/instance.service [website_project_instance_service_list] 
  show   Get website/instance.service [website_project_instance_service_get]
```

##### h1 website instance service spec

```
h1 website instance service spec

  Print specification of context 

Synopsis

  $ h1 website instance service spec <options> 

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

##### h1 website instance service list

```
h1 website instance service list

  List website/instance.service [website_project_instance_service_list] 

Synopsis

  $ h1 website instance service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --skeleton true,false
```

##### h1 website instance service show

```
h1 website instance service show

  Get website/instance.service [website_project_instance_service_get] 

Synopsis

  $ h1 website instance service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --service id-or-uri     serviceId   
  --skeleton true,false
```

#### h1 website instance tag

```
h1 website instance tag

Synopsis

  $ h1 website instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                    
  create   Create website/instance.tag [website_project_instance_tag_create] 
  list     List website/instance.tag [website_project_instance_tag_list]     
  show     Get website/instance.tag [website_project_instance_tag_get]       
  delete   Delete website/instance.tag [website_project_instance_tag_delete]
```

##### h1 website instance tag spec

```
h1 website instance tag spec

  Print specification of context 

Synopsis

  $ h1 website instance tag spec <options> 

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

##### h1 website instance tag create

```
h1 website instance tag create

  Create website/instance.tag [website_project_instance_tag_create] 

Synopsis

  $ h1 website instance tag create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --key string            Tag key     
  --value string          Tag value   
  --skeleton true,false
```

##### h1 website instance tag list

```
h1 website instance tag list

  List website/instance.tag [website_project_instance_tag_list] 

Synopsis

  $ h1 website instance tag list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --skeleton true,false
```

##### h1 website instance tag show

```
h1 website instance tag show

  Get website/instance.tag [website_project_instance_tag_get] 

Synopsis

  $ h1 website instance tag show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --tag id-or-uri         tagId       
  --skeleton true,false
```

##### h1 website instance tag delete

```
h1 website instance tag delete

  Delete website/instance.tag [website_project_instance_tag_delete] 

Synopsis

  $ h1 website instance tag delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --tag id-or-uri         tagId       
  --skeleton true,false
```

#### h1 website instance event

```
h1 website instance event

Synopsis

  $ h1 website instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                    
  list   List website/instance.event [website_project_instance_event_list] 
  show   Get website/instance.event [website_project_instance_event_get]
```

##### h1 website instance event spec

```
h1 website instance event spec

  Print specification of context 

Synopsis

  $ h1 website instance event spec <options> 

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

##### h1 website instance event list

```
h1 website instance event list

  List website/instance.event [website_project_instance_event_list] 

Synopsis

  $ h1 website instance event list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --$limit string         $limit      
  --$skip string          $skip       
  --skeleton true,false
```

##### h1 website instance event show

```
h1 website instance event show

  Get website/instance.event [website_project_instance_event_get] 

Synopsis

  $ h1 website instance event show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --instance id-or-uri    Instance Id 
  --event id-or-uri       eventId     
  --skeleton true,false
```

#### h1 website instance ssh

```
h1 website instance ssh

  Connect to website/instance using SSH 

Synopsis

  $ h1 website instance ssh <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --instance string    
  --project string
```

#### h1 website instance sftp

```
h1 website instance sftp

  Connect to website/instance using SFTP 

Synopsis

  $ h1 website instance sftp <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --instance string    
  --project string
```

