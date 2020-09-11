## h1 vmhost

```
h1 vmhost

Synopsis

  $ h1 vmhost <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context  
  instance   Management of instance resource
```

### h1 vmhost spec

```
h1 vmhost spec

  Print specification of context 

Synopsis

  $ h1 vmhost spec <options> 

Global options

  --help    Show help message and exit. 

Operation options
```

### h1 vmhost instance

```
h1 vmhost instance

Synopsis

  $ h1 vmhost instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                      
  list      List vmhost/instance [vmhost_project_instance_list] 
  show      Get vmhost/instance [vmhost_project_instance_get]   
  service   Manage services of the instance                     
  tag       Manage tags of the instance                         
  event     Manage events of the instance
```

#### h1 vmhost instance spec

```
h1 vmhost instance spec

  Print specification of context 

Synopsis

  $ h1 vmhost instance spec <options> 

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

#### h1 vmhost instance list

```
h1 vmhost instance list

  List vmhost/instance [vmhost_project_instance_list] 

Synopsis

  $ h1 vmhost instance list <options> 

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
  --enabled-services string   Filter by enabledServices 
  --skeleton true,false
```

#### h1 vmhost instance show

```
h1 vmhost instance show

  Get vmhost/instance [vmhost_project_instance_get] 

Synopsis

  $ h1 vmhost instance show <options> 

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

#### h1 vmhost instance service

```
h1 vmhost instance service

Synopsis

  $ h1 vmhost instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                      
  list   List vmhost/instance.service [vmhost_project_instance_service_list] 
  show   Get vmhost/instance.service [vmhost_project_instance_service_get]
```

##### h1 vmhost instance service spec

```
h1 vmhost instance service spec

  Print specification of context 

Synopsis

  $ h1 vmhost instance service spec <options> 

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

##### h1 vmhost instance service list

```
h1 vmhost instance service list

  List vmhost/instance.service [vmhost_project_instance_service_list] 

Synopsis

  $ h1 vmhost instance service list <options> 

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

##### h1 vmhost instance service show

```
h1 vmhost instance service show

  Get vmhost/instance.service [vmhost_project_instance_service_get] 

Synopsis

  $ h1 vmhost instance service show <options> 

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

#### h1 vmhost instance tag

```
h1 vmhost instance tag

Synopsis

  $ h1 vmhost instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                  
  create   Create vmhost/instance.tag [vmhost_project_instance_tag_create] 
  list     List vmhost/instance.tag [vmhost_project_instance_tag_list]     
  show     Get vmhost/instance.tag [vmhost_project_instance_tag_get]       
  delete   Delete vmhost/instance.tag [vmhost_project_instance_tag_delete]
```

##### h1 vmhost instance tag spec

```
h1 vmhost instance tag spec

  Print specification of context 

Synopsis

  $ h1 vmhost instance tag spec <options> 

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

##### h1 vmhost instance tag create

```
h1 vmhost instance tag create

  Create vmhost/instance.tag [vmhost_project_instance_tag_create] 

Synopsis

  $ h1 vmhost instance tag create <options> 

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

##### h1 vmhost instance tag list

```
h1 vmhost instance tag list

  List vmhost/instance.tag [vmhost_project_instance_tag_list] 

Synopsis

  $ h1 vmhost instance tag list <options> 

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

##### h1 vmhost instance tag show

```
h1 vmhost instance tag show

  Get vmhost/instance.tag [vmhost_project_instance_tag_get] 

Synopsis

  $ h1 vmhost instance tag show <options> 

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

##### h1 vmhost instance tag delete

```
h1 vmhost instance tag delete

  Delete vmhost/instance.tag [vmhost_project_instance_tag_delete] 

Synopsis

  $ h1 vmhost instance tag delete <options> 

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

#### h1 vmhost instance event

```
h1 vmhost instance event

Synopsis

  $ h1 vmhost instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                  
  list   List vmhost/instance.event [vmhost_project_instance_event_list] 
  show   Get vmhost/instance.event [vmhost_project_instance_event_get]
```

##### h1 vmhost instance event spec

```
h1 vmhost instance event spec

  Print specification of context 

Synopsis

  $ h1 vmhost instance event spec <options> 

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

##### h1 vmhost instance event list

```
h1 vmhost instance event list

  List vmhost/instance.event [vmhost_project_instance_event_list] 

Synopsis

  $ h1 vmhost instance event list <options> 

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

##### h1 vmhost instance event show

```
h1 vmhost instance event show

  Get vmhost/instance.event [vmhost_project_instance_event_get] 

Synopsis

  $ h1 vmhost instance event show <options> 

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

