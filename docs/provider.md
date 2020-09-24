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

  --help    Show help message and exit. 

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

  spec              Print specification of context                            
  create            Create provider/agent [provider_project_agent_create]     
  list              List provider/agent [provider_project_agent_list]         
  show              Get provider/agent [provider_project_agent_get]           
  update            Update provider/agent [provider_project_agent_update]     
  delete            Delete provider/agent [provider_project_agent_delete]     
  start             Start provider/agent [provider_project_agent_start]       
  suspend           Suspend provider/agent [provider_project_agent_suspend]   
  inspect           Inspect provider/agent [provider_project_agent_inspect]   
  transfer          Transfer provider/agent [provider_project_agent_transfer] 
  resource          Manage resources of the agent                             
  credential        Manage credentials of the agent                           
  enabled-service   Manage enabledServices of the agent                       
  service           Manage services of the agent                              
  tag               Manage tags of the agent                                  
  event             Manage events of the agent
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options
```

#### h1 provider agent create

```
h1 provider agent create

  Create provider/agent [provider_project_agent_create] 

Synopsis

  $ h1 provider agent create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 provider agent create --project 5f64e2468c71177993874510 --name simple-  
  agent --service                                                               
  /billing/project/5f64e2468c71177993874510/service/5cb9e2c1467ad031486f9d87    

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id                                          
  --location id-or-uri         Location Id                                         
  --x-idempotency-key string   Idempotency key                                     
  --name string                Agent name                                          
  --service id-or-uri          Agent service. Provide ID or URI of billing/service 
  --tag key=key,value=value    Tag collection                                      
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id          
  --location id-or-uri    Location Id         
  --name string           Filter by name      
  --tag.value string      Filter by tag.value 
  --tag.key string        Filter by tag.key   
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --skeleton true,false
```

#### h1 provider agent update

```
h1 provider agent update

  Update provider/agent [provider_project_agent_update] 

Synopsis

  $ h1 provider agent update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 provider agent update --project 5f64e2468c71177993874510 --agent         
  5f577a24494c5cfdec7830e5 --name agent-renamed                                 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id                                                  
  --location id-or-uri    Location Id                                                 
  --agent id-or-uri       Agent Id                                                    
  --name string           Agent name. Requires permissions provider/agent.name/update 
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --agent id-or-uri            Agent Id        
  --x-idempotency-key string   Idempotency key 
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --agent id-or-uri            Agent Id        
  --x-idempotency-key string   Idempotency key 
  --skeleton true,false
```

#### h1 provider agent inspect

```
h1 provider agent inspect

  Inspect provider/agent [provider_project_agent_inspect] 

Synopsis

  $ h1 provider agent inspect <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --agent id-or-uri            Agent Id        
  --x-idempotency-key string   Idempotency key 
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id                                                                    
  --location id-or-uri         Location Id                                                                   
  --agent id-or-uri            Agent Id                                                                      
  --x-idempotency-key string   Idempotency key                                                               
  --project uri                Agent project. Provide URI of iam/project. Requires permissions               
                               provider/agent/create                                                         
  --skeleton true,false
```

#### h1 provider agent resource

```
h1 provider agent resource

Synopsis

  $ h1 provider agent resource <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                      
  list   List provider/agent.resource [provider_project_agent_resource_list]
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
  --no-wait true,false                        In case of queued event do not wait for completion 

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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options
```

##### h1 provider agent credential create

```
h1 provider agent credential create

  Create provider/agent.credential [provider_project_agent_credential_create] 

Synopsis

  $ h1 provider agent credential create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 provider agent credential create --project 5f64e2468c71177993874510      
  --agent 5f577a24494c5cfdec7830e5 --name agent-credential --type ssh --value   
  ssh-rsa                                                                       
  AAAAB3NzaC1yc2EAAAADAQABAAABAQC7Ssk/TZy/PS5mtGqNwmgfukrA/QrpW3oyrMM3KViHO9wtIwu1BapTdmUxIWi7TX1Nl51i8040CvTstfi11O4jMk2E5lGYp0TIduo8B8Qo/0wO6s2BrXHtLI1FlctkQacrKTnSINrSEcBbIO6G//S4fiRI5ioK8OAPt/qJK1k74AOnrupsXxTUYggmmIJfto8r1c3ZAhfwnJ4D0SDCoWjL4PLh/UGQv7sN20Z/afWVDCa78TnQ6lGlJe6VRSqoT09kJpt2CW0Pa3Ij1QaSJp6ENHpWAWGLyiwW8rLxCqFriz333yf0zzw2QmiyyNHe1ITG2goJU05pHEYyzYq6xo5X 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id       
  --location id-or-uri    Location Id      
  --agent id-or-uri       Agent Id         
  --name string           Credential name  
  --type string           Credential type  
  --value string          Credential value 
  --token string          Credential token 
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --location id-or-uri     Location Id  
  --agent id-or-uri        Agent Id     
  --credential id-or-uri   credentialId 
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id                                                                  
  --location id-or-uri     Location Id                                                                 
  --agent id-or-uri        Agent Id                                                                    
  --credential id-or-uri   credentialId                                                                
  --name string            Credential name. Requires permissions provider/agent.credential.name/update 
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --location id-or-uri     Location Id  
  --agent id-or-uri        Agent Id     
  --credential id-or-uri   credentialId 
  --skeleton true,false
```

#### h1 provider agent enabled-service

```
h1 provider agent enabled-service

Synopsis

  $ h1 provider agent enabled-service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                                      
  create   Create provider/agent.enabledService [provider_project_agent_enabledService_create] 
  list     List provider/agent.enabledService [provider_project_agent_enabledService_list]     
  show     Get provider/agent.enabledService [provider_project_agent_enabledService_get]       
  delete   Delete provider/agent.enabledService [provider_project_agent_enabledService_delete]
```

##### h1 provider agent enabled-service spec

```
h1 provider agent enabled-service spec

  Print specification of context 

Synopsis

  $ h1 provider agent enabled-service spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options
```

##### h1 provider agent enabled-service create

```
h1 provider agent enabled-service create

  Create provider/agent.enabledService                                          
  [provider_project_agent_enabledService_create]                                

Synopsis

  $ h1 provider agent enabled-service create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 provider agent enabled-service create --project 5f64e2468c71177993874510 
  --agent 5f577a24494c5cfdec7830e5 --service                                    
  /billing/project/platform/service/5cb9e2c8467ad031486f9d88                    

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id                                                   
  --location id-or-uri    Location Id                                                  
  --agent id-or-uri       Agent Id                                                     
  --service id-or-uri     EnabledService service. Provide ID or URI of billing/service 
  --skeleton true,false
```

##### h1 provider agent enabled-service list

```
h1 provider agent enabled-service list

  List provider/agent.enabledService [provider_project_agent_enabledService_list] 

Synopsis

  $ h1 provider agent enabled-service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --skeleton true,false
```

##### h1 provider agent enabled-service show

```
h1 provider agent enabled-service show

  Get provider/agent.enabledService [provider_project_agent_enabledService_get] 

Synopsis

  $ h1 provider agent enabled-service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri           Project Id       
  --location id-or-uri          Location Id      
  --agent id-or-uri             Agent Id         
  --enabled-service id-or-uri   enabledServiceId 
  --skeleton true,false
```

##### h1 provider agent enabled-service delete

```
h1 provider agent enabled-service delete

  Delete provider/agent.enabledService                                          
  [provider_project_agent_enabledService_delete]                                

Synopsis

  $ h1 provider agent enabled-service delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri           Project Id       
  --location id-or-uri          Location Id      
  --agent id-or-uri             Agent Id         
  --enabled-service id-or-uri   enabledServiceId 
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --service id-or-uri     serviceId   
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options
```

##### h1 provider agent tag create

```
h1 provider agent tag create

  Create provider/agent.tag [provider_project_agent_tag_create] 

Synopsis

  $ h1 provider agent tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 provider agent tag create --project 5f64e2468c71177993874510 --agent     
  5f577a24494c5cfdec7830e5 --key x --value x                                    

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --key string            Tag key     
  --value string          Tag value   
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --tag id-or-uri         tagId       
  --skeleton true,false
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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --tag id-or-uri         tagId       
  --skeleton true,false
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
  show   Get provider/agent.event [provider_project_agent_event_get]
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
  --no-wait true,false                        In case of queued event do not wait for completion 

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
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --$limit string         $limit      
  --$skip string          $skip       
  --skeleton true,false
```

##### h1 provider agent event show

```
h1 provider agent event show

  Get provider/agent.event [provider_project_agent_event_get] 

Synopsis

  $ h1 provider agent event show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id  
  --location id-or-uri    Location Id 
  --agent id-or-uri       Agent Id    
  --event id-or-uri       eventId     
  --skeleton true,false
```

