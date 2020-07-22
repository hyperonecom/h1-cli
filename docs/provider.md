## h1 provider

```
h1 provider

Synopsis

  $ h1 provider <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec    Print specification of context 
  agent   Management of agent resource
```

### h1 provider spec

```
h1 provider spec

  Print specification of context 

Synopsis

  $ h1 provider spec <options> 

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

### h1 provider agent

```
h1 provider agent

Synopsis

  $ h1 provider agent <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                            
  create       Create provider/agent [provider_project_agent_create]     
  list         List provider/agent [provider_project_agent_list]         
  show         Get provider/agent [provider_project_agent_get]           
  update       Update provider/agent [provider_project_agent_update]     
  delete       Delete provider/agent [provider_project_agent_delete]     
  start        Start provider/agent [provider_project_agent_start]       
  suspend      Suspend provider/agent [provider_project_agent_suspend]   
  transfer     Transfer provider/agent [provider_project_agent_transfer] 
  inspect      Manage inspects of the agent                              
  resource     Manage resources of the agent                             
  credential   Manage credentials of the agent                           
  service      Manage services of the agent                              
  tag          Manage tags of the agent                                  
  event        Manage events of the agent
```

#### h1 provider agent spec

```
h1 provider agent spec

  Print specification of context 

Synopsis

  $ h1 provider agent spec <options> 

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

#### h1 provider agent create

```
h1 provider agent create

  Create provider/agent [provider_project_agent_create] 

Synopsis

  $ h1 provider agent create <options> 

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
  --name string                Agent name                                          
  --service id-or-uri          Agent service. Provide ID or URI of billing/service 
  --tag key=key,value=value    Tag collection
```

#### h1 provider agent list

```
h1 provider agent list

  List provider/agent [provider_project_agent_list] 

Synopsis

  $ h1 provider agent list <options> 

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

#### h1 provider agent show

```
h1 provider agent show

  Get provider/agent [provider_project_agent_get] 

Synopsis

  $ h1 provider agent show <options> 

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
  --agent id-or-uri      Agent Id
```

#### h1 provider agent update

```
h1 provider agent update

  Update provider/agent [provider_project_agent_update] 

Synopsis

  $ h1 provider agent update <options> 

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
  --agent id-or-uri      Agent Id                                                    
  --name string          Agent name. Requires permissions provider/agent.name/update
```

#### h1 provider agent delete

```
h1 provider agent delete

  Delete provider/agent [provider_project_agent_delete] 

Synopsis

  $ h1 provider agent delete <options> 

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
  --agent id-or-uri      Agent Id
```

#### h1 provider agent start

```
h1 provider agent start

  Start provider/agent [provider_project_agent_start] 

Synopsis

  $ h1 provider agent start <options> 

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
  --agent id-or-uri            Agent Id        
  --x-idempotency-key string   Idempotency key
```

#### h1 provider agent suspend

```
h1 provider agent suspend

  Suspend provider/agent [provider_project_agent_suspend] 

Synopsis

  $ h1 provider agent suspend <options> 

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
  --agent id-or-uri            Agent Id        
  --x-idempotency-key string   Idempotency key
```

#### h1 provider agent transfer

```
h1 provider agent transfer

  Transfer provider/agent [provider_project_agent_transfer] 

Synopsis

  $ h1 provider agent transfer <options> 

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
  --agent id-or-uri            Agent Id                                                                      
  --x-idempotency-key string   Idempotency key                                                               
  --project uri                Agent project. Provide URI of iam/project. Requires permissions               
                               provider/agent/create
```

#### h1 provider agent inspect

```
h1 provider agent inspect

Synopsis

  $ h1 provider agent inspect <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                  
  list   Get provider/agent.inspect [provider_project_agent_inspect_get]
```

##### h1 provider agent inspect spec

```
h1 provider agent inspect spec

  Print specification of context 

Synopsis

  $ h1 provider agent inspect spec <options> 

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

##### h1 provider agent inspect list

```
h1 provider agent inspect list

  Get provider/agent.inspect [provider_project_agent_inspect_get] 

Synopsis

  $ h1 provider agent inspect list <options> 

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
  --agent id-or-uri      Agent Id
```

#### h1 provider agent resource

```
h1 provider agent resource

Synopsis

  $ h1 provider agent resource <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                                                          
  list       List provider/agent.resource [provider_project_agent_resource_list]                     
  recreate   Create provider/agent.actions [provider_project_agent_resource_actions_recreate_create] 
  inspect    Manage inspects of the resource                                                         
  event      Manage events of the resource
```

##### h1 provider agent resource spec

```
h1 provider agent resource spec

  Print specification of context 

Synopsis

  $ h1 provider agent resource spec <options> 

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

##### h1 provider agent resource list

```
h1 provider agent resource list

  List provider/agent.resource [provider_project_agent_resource_list] 

Synopsis

  $ h1 provider agent resource list <options> 

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
  --agent id-or-uri      Agent Id
```

##### h1 provider agent resource recreate

```
h1 provider agent resource recreate

  Create provider/agent.actions                                                 
  [provider_project_agent_resource_actions_recreate_create]                     

Synopsis

  $ h1 provider agent resource recreate <options> 

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
  --agent id-or-uri      Agent Id    
  --resource id-or-uri   resourceId
```

##### h1 provider agent resource inspect

```
h1 provider agent resource inspect

Synopsis

  $ h1 provider agent resource inspect <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                           
  list   Get provider/agent.inspect [provider_project_agent_resource_inspect_get]
```

###### h1 provider agent resource inspect spec

```
h1 provider agent resource inspect spec

  Print specification of context 

Synopsis

  $ h1 provider agent resource inspect spec <options> 

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

###### h1 provider agent resource inspect list

```
h1 provider agent resource inspect list

  Get provider/agent.inspect [provider_project_agent_resource_inspect_get] 

Synopsis

  $ h1 provider agent resource inspect list <options> 

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
  --agent id-or-uri      Agent Id    
  --resource id-or-uri   resourceId
```

##### h1 provider agent resource event

```
h1 provider agent resource event

Synopsis

  $ h1 provider agent resource event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                         
  list   List provider/agent.event [provider_project_agent_resource_event_list]
```

###### h1 provider agent resource event spec

```
h1 provider agent resource event spec

  Print specification of context 

Synopsis

  $ h1 provider agent resource event spec <options> 

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

###### h1 provider agent resource event list

```
h1 provider agent resource event list

  List provider/agent.event [provider_project_agent_resource_event_list] 

Synopsis

  $ h1 provider agent resource event list <options> 

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
  --agent id-or-uri      Agent Id    
  --resource id-or-uri   resourceId  
  --$limit string        $limit      
  --$skip string         $skip
```

#### h1 provider agent credential

```
h1 provider agent credential

Synopsis

  $ h1 provider agent credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                              
  create   Create provider/agent.credential [provider_project_agent_credential_create] 
  list     List provider/agent.credential [provider_project_agent_credential_list]     
  show     Get provider/agent.credential [provider_project_agent_credential_get]       
  update   Update provider/agent.credential [provider_project_agent_credential_patch]  
  delete   Delete provider/agent.credential [provider_project_agent_credential_delete]
```

##### h1 provider agent credential spec

```
h1 provider agent credential spec

  Print specification of context 

Synopsis

  $ h1 provider agent credential spec <options> 

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

##### h1 provider agent credential create

```
h1 provider agent credential create

  Create provider/agent.credential [provider_project_agent_credential_create] 

Synopsis

  $ h1 provider agent credential create <options> 

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
  --agent id-or-uri      Agent Id         
  --name string          Credential name  
  --type string          Credential type  
  --value string         Credential value 
  --token string         Credential token
```

##### h1 provider agent credential list

```
h1 provider agent credential list

  List provider/agent.credential [provider_project_agent_credential_list] 

Synopsis

  $ h1 provider agent credential list <options> 

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
  --agent id-or-uri      Agent Id
```

##### h1 provider agent credential show

```
h1 provider agent credential show

  Get provider/agent.credential [provider_project_agent_credential_get] 

Synopsis

  $ h1 provider agent credential show <options> 

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
  --agent id-or-uri        Agent Id     
  --credential id-or-uri   credentialId
```

##### h1 provider agent credential update

```
h1 provider agent credential update

  Update provider/agent.credential [provider_project_agent_credential_patch] 

Synopsis

  $ h1 provider agent credential update <options> 

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
  --agent id-or-uri        Agent Id                                                                    
  --credential id-or-uri   credentialId                                                                
  --name string            Credential name. Requires permissions provider/agent.credential.name/update
```

##### h1 provider agent credential delete

```
h1 provider agent credential delete

  Delete provider/agent.credential [provider_project_agent_credential_delete] 

Synopsis

  $ h1 provider agent credential delete <options> 

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
  --agent id-or-uri        Agent Id     
  --credential id-or-uri   credentialId
```

#### h1 provider agent service

```
h1 provider agent service

Synopsis

  $ h1 provider agent service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                    
  list   List provider/agent.service [provider_project_agent_service_list] 
  show   Get provider/agent.service [provider_project_agent_service_get]
```

##### h1 provider agent service spec

```
h1 provider agent service spec

  Print specification of context 

Synopsis

  $ h1 provider agent service spec <options> 

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

##### h1 provider agent service list

```
h1 provider agent service list

  List provider/agent.service [provider_project_agent_service_list] 

Synopsis

  $ h1 provider agent service list <options> 

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
  --agent id-or-uri      Agent Id
```

##### h1 provider agent service show

```
h1 provider agent service show

  Get provider/agent.service [provider_project_agent_service_get] 

Synopsis

  $ h1 provider agent service show <options> 

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
  --agent id-or-uri      Agent Id    
  --service id-or-uri    serviceId
```

#### h1 provider agent tag

```
h1 provider agent tag

Synopsis

  $ h1 provider agent tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                
  create   Create provider/agent.tag [provider_project_agent_tag_create] 
  list     List provider/agent.tag [provider_project_agent_tag_list]     
  show     Get provider/agent.tag [provider_project_agent_tag_get]       
  delete   Delete provider/agent.tag [provider_project_agent_tag_delete]
```

##### h1 provider agent tag spec

```
h1 provider agent tag spec

  Print specification of context 

Synopsis

  $ h1 provider agent tag spec <options> 

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

##### h1 provider agent tag create

```
h1 provider agent tag create

  Create provider/agent.tag [provider_project_agent_tag_create] 

Synopsis

  $ h1 provider agent tag create <options> 

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
  --agent id-or-uri      Agent Id    
  --key string           Tag key     
  --value string         Tag value
```

##### h1 provider agent tag list

```
h1 provider agent tag list

  List provider/agent.tag [provider_project_agent_tag_list] 

Synopsis

  $ h1 provider agent tag list <options> 

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
  --agent id-or-uri      Agent Id
```

##### h1 provider agent tag show

```
h1 provider agent tag show

  Get provider/agent.tag [provider_project_agent_tag_get] 

Synopsis

  $ h1 provider agent tag show <options> 

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
  --agent id-or-uri      Agent Id    
  --tag id-or-uri        tagId
```

##### h1 provider agent tag delete

```
h1 provider agent tag delete

  Delete provider/agent.tag [provider_project_agent_tag_delete] 

Synopsis

  $ h1 provider agent tag delete <options> 

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
  --agent id-or-uri      Agent Id    
  --tag id-or-uri        tagId
```

#### h1 provider agent event

```
h1 provider agent event

Synopsis

  $ h1 provider agent event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                
  list   List provider/agent.event [provider_project_agent_event_list]
```

##### h1 provider agent event spec

```
h1 provider agent event spec

  Print specification of context 

Synopsis

  $ h1 provider agent event spec <options> 

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

##### h1 provider agent event list

```
h1 provider agent event list

  List provider/agent.event [provider_project_agent_event_list] 

Synopsis

  $ h1 provider agent event list <options> 

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
  --agent id-or-uri      Agent Id    
  --$limit string        $limit      
  --$skip string         $skip
```

