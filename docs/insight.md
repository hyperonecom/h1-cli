## h1 insight

```
h1 insight

Synopsis

  $ h1 insight <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  journal   Management of journal resource
```

### h1 insight journal

```
h1 insight journal

Synopsis

  $ h1 insight journal <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create       Create insight/journal [Operation ID: insight_project_journal_create]     
  list         List insight/journal [Operation ID: insight_project_journal_list]         
  show         Get insight/journal [Operation ID: insight_project_journal_get]           
  update       Update insight/journal [Operation ID: insight_project_journal_update]     
  delete       Delete insight/journal [Operation ID: insight_project_journal_delete]     
  transfer     Transfer insight/journal [Operation ID: insight_project_journal_transfer] 
  log          Manage logs of the journal                                                
  credential   Manage credentials of the journal                                         
  service      Manage services of the journal                                            
  tag          Manage tags of the journal                                                
  event        Manage events of the journal                                              
  logger       Log messages to journal                                                   
  stream       Stream messages from journal
```

#### h1 insight journal create

```
h1 insight journal create

  Create insight/journal [Operation ID: insight_project_journal_create] 

Synopsis

  $ h1 insight journal create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal create --project 5f64e2468c71177993874510 --name simple- 
  journal --service /billing/project/platform/service/5c9cc2d0255c16c3e899a4ea  
  --retention 30                                                                

Global options

  --help                                      Show help message and exit.                                                   
  --verbose                                   Make the operation more talkative.                                            
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                       
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state,    
                                              flavour:flavour}                                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.            
  --as uri                                    Act as another actor eg. service account                                      
  --no-wait                                   In case of queued event do not wait for completion                            

Operation options

  --project id-or-uri          Project Id                                                                    
  --location id-or-uri         Location Id. Default value is pl-waw-1                                        
  --x-idempotency-key string   Idempotency key                                                               
  --name string                Journal name                                                                  
  --service id-or-uri          Journal service. Provide ID or URI of billing/service. Defaults is            
                               5c9cc2d0255c16c3e899a4ea. Default value is 5c9cc2d0255c16c3e899a4ea           
  --retention string           Journal retention                                                             
  --tag key=key,value=value    Tag collection                                                                
  --skeleton
```

#### h1 insight journal list

```
h1 insight journal list

  List insight/journal [Operation ID: insight_project_journal_list] 

Synopsis

  $ h1 insight journal list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal list --project 5f64e2468c71177993874510                  

Global options

  --help                                      Show help message and exit.                                                   
  --verbose                                   Make the operation more talkative.                                            
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                       
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state,    
                                              flavour:flavour}                                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.            
  --as uri                                    Act as another actor eg. service account                                      
  --no-wait                                   In case of queued event do not wait for completion                            

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --name string          Filter by name                         
  --tag.value string     Filter by tag.value                    
  --tag.key string       Filter by tag.key                      
  --skeleton
```

#### h1 insight journal show

```
h1 insight journal show

  Get insight/journal [Operation ID: insight_project_journal_get] 

Synopsis

  $ h1 insight journal show <options> 

Examples

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal show --project 5f64e2468c71177993874510 --journal        
  5f577a24494c5cfdec7830e5                                                      
                                                                                
                                                                                
  Simple write to journal                                                       
                                                                                
  $ h1 insight journal show --project 5f64e2468c71177993874510 --journal        
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                                                   
  --verbose                                   Make the operation more talkative.                                            
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                       
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state,    
                                              flavour:flavour}                                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.            
  --as uri                                    Act as another actor eg. service account                                      
  --no-wait                                   In case of queued event do not wait for completion                            

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --skeleton
```

#### h1 insight journal update

```
h1 insight journal update

  Update insight/journal [Operation ID: insight_project_journal_update] 

Synopsis

  $ h1 insight journal update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 insight journal update --project 5f64e2468c71177993874510 --journal      
  5f577a24494c5cfdec7830e5 --name journal-renamed                               

Global options

  --help                                      Show help message and exit.                                                   
  --verbose                                   Make the operation more talkative.                                            
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                       
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state,    
                                              flavour:flavour}                                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.            
  --as uri                                    Act as another actor eg. service account                                      
  --no-wait                                   In case of queued event do not wait for completion                            

Operation options

  --project id-or-uri    Project Id                                                               
  --location id-or-uri   Location Id. Default value is pl-waw-1                                   
  --journal id-or-uri    Journal Id                                                               
  --name string          Journal name. Requires permissions insight/journal.name/update           
  --retention string     Journal retention. Requires permissions insight/journal.retention/update 
  --skeleton
```

#### h1 insight journal delete

```
h1 insight journal delete

  Delete insight/journal [Operation ID: insight_project_journal_delete] 

Synopsis

  $ h1 insight journal delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal delete --project 5f64e2468c71177993874510 --journal      
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --skeleton
```

#### h1 insight journal transfer

```
h1 insight journal transfer

  Transfer insight/journal [Operation ID: insight_project_journal_transfer] 

Synopsis

  $ h1 insight journal transfer <options> 

Global options

  --help                                      Show help message and exit.                                                   
  --verbose                                   Make the operation more talkative.                                            
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                       
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state,    
                                              flavour:flavour}                                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.            
  --as uri                                    Act as another actor eg. service account                                      
  --no-wait                                   In case of queued event do not wait for completion                            

Operation options

  --project id-or-uri          Project Id                                                                    
  --location id-or-uri         Location Id. Default value is pl-waw-1                                        
  --journal id-or-uri          Journal Id                                                                    
  --x-idempotency-key string   Idempotency key                                                               
  --project id-or-uri          Journal project. Provide ID or URI of iam/project. Requires permissions       
                               insight/journal/create                                                        
  --skeleton
```

#### h1 insight journal log

```
h1 insight journal log

Synopsis

  $ h1 insight journal log <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   Get insight/journal.log [Operation ID: insight_project_journal_log_get]
```

##### h1 insight journal log list

```
h1 insight journal log list

  Get insight/journal.log [Operation ID: insight_project_journal_log_get] 

Synopsis

  $ h1 insight journal log list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --since string         since                                  
  --until string         until                                  
  --follow string        follow                                 
  --tail string          tail                                   
  --tag string           tag                                    
  --skeleton
```

#### h1 insight journal credential

```
h1 insight journal credential

Synopsis

  $ h1 insight journal credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create insight/journal.credential [Operation ID: insight_project_journal_credential_create] 
  list     List insight/journal.credential [Operation ID: insight_project_journal_credential_list]     
  show     Get insight/journal.credential [Operation ID: insight_project_journal_credential_get]       
  update   Update insight/journal.credential [Operation ID: insight_project_journal_credential_patch]  
  delete   Delete insight/journal.credential [Operation ID: insight_project_journal_credential_delete]
```

##### h1 insight journal credential create

```
h1 insight journal credential create

  Create insight/journal.credential [Operation ID:                              
  insight_project_journal_credential_create]                                    

Synopsis

  $ h1 insight journal credential create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal credential create --project 5f64e2468c71177993874510     
  --journal 5f577a24494c5cfdec7830e5 --name journal-credential --type plain     
  --value xxxxxx                                                                

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --name string          Credential name                        
  --type sha512,plain    Credential type                        
  --value string         Credential value                       
  --token string         Credential token                       
  --skeleton
```

##### h1 insight journal credential list

```
h1 insight journal credential list

  List insight/journal.credential [Operation ID:                                
  insight_project_journal_credential_list]                                      

Synopsis

  $ h1 insight journal credential list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal credential list --project 5f64e2468c71177993874510       
  --journal 5f577a24494c5cfdec7830e5                                            

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --skeleton
```

##### h1 insight journal credential show

```
h1 insight journal credential show

  Get insight/journal.credential [Operation ID:                                 
  insight_project_journal_credential_get]                                       

Synopsis

  $ h1 insight journal credential show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal credential show --project 5f64e2468c71177993874510       
  --journal 5f577a24494c5cfdec7830e5 --credential 5f60cbbe494c5cfdec81cc6b      

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri      Project Id                             
  --location id-or-uri     Location Id. Default value is pl-waw-1 
  --journal id-or-uri      Journal Id                             
  --credential id-or-uri   credentialId                           
  --skeleton
```

##### h1 insight journal credential update

```
h1 insight journal credential update

  Update insight/journal.credential [Operation ID:                              
  insight_project_journal_credential_patch]                                     

Synopsis

  $ h1 insight journal credential update <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal credential update --project 5f64e2468c71177993874510     
  --journal 5f577a24494c5cfdec7830e5 --credential 5f60cbbe494c5cfdec81cc6b      
  --name renamed-credential-journal                                             

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri      Project Id                                                                   
  --location id-or-uri     Location Id. Default value is pl-waw-1                                       
  --journal id-or-uri      Journal Id                                                                   
  --credential id-or-uri   credentialId                                                                 
  --name string            Credential name. Requires permissions insight/journal.credential.name/update 
  --skeleton
```

##### h1 insight journal credential delete

```
h1 insight journal credential delete

  Delete insight/journal.credential [Operation ID:                              
  insight_project_journal_credential_delete]                                    

Synopsis

  $ h1 insight journal credential delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal credential delete --project 5f64e2468c71177993874510     
  --journal 5f577a24494c5cfdec7830e5 --credential 5f60cbbe494c5cfdec81cc6b      

Global options

  --help                                      Show help message and exit.                                                   
  --verbose                                   Make the operation more talkative.                                            
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                       
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state,    
                                              flavour:flavour}                                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.            
  --as uri                                    Act as another actor eg. service account                                      
  --no-wait                                   In case of queued event do not wait for completion                            

Operation options

  --project id-or-uri      Project Id                             
  --location id-or-uri     Location Id. Default value is pl-waw-1 
  --journal id-or-uri      Journal Id                             
  --credential id-or-uri   credentialId                           
  --skeleton
```

#### h1 insight journal service

```
h1 insight journal service

Synopsis

  $ h1 insight journal service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List insight/journal.service [Operation ID: insight_project_journal_service_list] 
  show   Get insight/journal.service [Operation ID: insight_project_journal_service_get]
```

##### h1 insight journal service list

```
h1 insight journal service list

  List insight/journal.service [Operation ID:                                   
  insight_project_journal_service_list]                                         

Synopsis

  $ h1 insight journal service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal service list --project 5f64e2468c71177993874510          
  --journal 5f577a24494c5cfdec7830e5                                            

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --skeleton
```

##### h1 insight journal service show

```
h1 insight journal service show

  Get insight/journal.service [Operation ID: insight_project_journal_service_get] 

Synopsis

  $ h1 insight journal service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal service show --project 5f64e2468c71177993874510          
  --journal 5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b         

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --service id-or-uri    serviceId                              
  --skeleton
```

#### h1 insight journal tag

```
h1 insight journal tag

Synopsis

  $ h1 insight journal tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create insight/journal.tag [Operation ID: insight_project_journal_tag_create] 
  list     List insight/journal.tag [Operation ID: insight_project_journal_tag_list]     
  show     Get insight/journal.tag [Operation ID: insight_project_journal_tag_get]       
  delete   Delete insight/journal.tag [Operation ID: insight_project_journal_tag_delete]
```

##### h1 insight journal tag create

```
h1 insight journal tag create

  Create insight/journal.tag [Operation ID: insight_project_journal_tag_create] 

Synopsis

  $ h1 insight journal tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal tag create --project 5f64e2468c71177993874510 --journal  
  5f577a24494c5cfdec7830e5 --key x --value x                                    

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --key string           Tag key                                
  --value string         Tag value                              
  --skeleton
```

##### h1 insight journal tag list

```
h1 insight journal tag list

  List insight/journal.tag [Operation ID: insight_project_journal_tag_list] 

Synopsis

  $ h1 insight journal tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal tag list --project 5f64e2468c71177993874510 --journal    
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --skeleton
```

##### h1 insight journal tag show

```
h1 insight journal tag show

  Get insight/journal.tag [Operation ID: insight_project_journal_tag_get] 

Synopsis

  $ h1 insight journal tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal tag show --project 5f64e2468c71177993874510 --journal    
  5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b                       

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --tag id-or-uri        tagId                                  
  --skeleton
```

##### h1 insight journal tag delete

```
h1 insight journal tag delete

  Delete insight/journal.tag [Operation ID: insight_project_journal_tag_delete] 

Synopsis

  $ h1 insight journal tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal tag delete --project 5f64e2468c71177993874510 --journal  
  5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b                       

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --tag id-or-uri        tagId                                  
  --skeleton
```

#### h1 insight journal event

```
h1 insight journal event

Synopsis

  $ h1 insight journal event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List insight/journal.event [Operation ID: insight_project_journal_event_list] 
  show   Get insight/journal.event [Operation ID: insight_project_journal_event_get]
```

##### h1 insight journal event list

```
h1 insight journal event list

  List insight/journal.event [Operation ID: insight_project_journal_event_list] 

Synopsis

  $ h1 insight journal event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal event list --project 5f64e2468c71177993874510 --journal  
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --$limit string        $limit                                 
  --$skip string         $skip                                  
  --skeleton
```

##### h1 insight journal event show

```
h1 insight journal event show

  Get insight/journal.event [Operation ID: insight_project_journal_event_get] 

Synopsis

  $ h1 insight journal event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 insight journal event show --project 5f64e2468c71177993874510 --journal  
  5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b                     

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --journal id-or-uri    Journal Id                             
  --event id-or-uri      eventId                                
  --skeleton
```

#### h1 insight journal logger

```
h1 insight journal logger

  Log messages to journal 

Synopsis

  $ h1 insight journal logger <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --journal string                                                                                  
  --project string                                                                                  
  --hostname string   undefined. Default value is adas-Latitude-E7450                               
  --log-file string   Path of the input text log file. "stdin" is a specially handled file..        
                      Default value is stdin
```

#### h1 insight journal stream

```
h1 insight journal stream

  Stream messages from journal 

Synopsis

  $ h1 insight journal stream <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --journal string                                                                                         
  --project string                                                                                         
  --log-file-output string   Path of the output json log file. "stdout" is a specially handled file..      
                             Default value is stdout                                                       
  --head number              Maximum number of lines to show. All if skipped.
```

