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

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

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
  --image string                Instance image                                                                
  --source uri                  Instance source. Provide URI of website/instance.snapshot. Requires           
                                permissions website/instance.snapshot/use                                     
  --env name=name,value=value   Env collection                                                                
  --tag key=key,value=value     Tag collection
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

  --project id-or-uri    Project Id          
  --location id-or-uri   Location Id         
  --name string          Filter by name      
  --tag.value string     Filter by tag.value 
  --tag.key string       Filter by tag.key
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id
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

  --project id-or-uri    Project Id                                                             
  --location id-or-uri   Location Id                                                            
  --instance id-or-uri   Instance Id                                                            
  --name string          Instance name. Requires permissions website/instance.name/update       
  --domain string[]      Domain collection. Requires permissions website/instance.domain/update 
  --image string         Instance image. Requires permissions website/instance.image/update
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id
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
                               website/website/create
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

  --project id-or-uri    Project Id    
  --location id-or-uri   Location Id   
  --instance id-or-uri   Instance Id   
  --name string          Snapshot name
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --snapshot id-or-uri   snapshotId
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --snapshot id-or-uri   snapshotId
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

  --project id-or-uri    Project Id           
  --location id-or-uri   Location Id          
  --instance id-or-uri   Instance Id          
  --snapshot id-or-uri   snapshotId           
  --incremental string   Download incremental
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --name string          Env name    
  --value string         Env value
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --env id-or-uri        envId
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --env id-or-uri        envId
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

  --project id-or-uri    Project Id                                                                    
  --location id-or-uri   Location Id                                                                   
  --instance id-or-uri   Instance Id                                                                   
  --actor id-or-uri      Link actor. Provide ID or URI of iam/sa. Requires permissions iam/sa/use      
  --purpose string       Link purpose                                                                  
  --resource id-or-uri   Link resource. Provide ID or URI of insight/journal. Requires permissions     
                         insight/journal/use
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --link id-or-uri       linkId
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --link id-or-uri       linkId
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

  --project id-or-uri    Project Id      
  --location id-or-uri   Location Id     
  --instance id-or-uri   Instance Id     
  --flavour string       Sideapp flavour
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id
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

  --project id-or-uri    Project Id       
  --location id-or-uri   Location Id      
  --instance id-or-uri   Instance Id      
  --name string          Credential name  
  --type string          Credential type  
  --value string         Credential value 
  --token string         Credential token
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --service id-or-uri    serviceId
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --key string           Tag key     
  --value string         Tag value
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --tag id-or-uri        tagId
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --tag id-or-uri        tagId
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

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --$limit string        $limit      
  --$skip string         $skip
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

