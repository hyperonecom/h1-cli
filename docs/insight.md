## h1 insight

```
h1 insight

Synopsis

  $ h1 insight <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context 
  journal   Management of journal resource
```

### h1 insight spec

```
h1 insight spec

  Print specification of context 

Synopsis

  $ h1 insight spec <options> 

Global options

  --help    Show help message and exit. 

Operation options
```

### h1 insight journal

```
h1 insight journal

Synopsis

  $ h1 insight journal <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                              
  create       Create insight/journal [insight_project_journal_create]     
  list         List insight/journal [insight_project_journal_list]         
  show         Get insight/journal [insight_project_journal_get]           
  update       Update insight/journal [insight_project_journal_update]     
  delete       Delete insight/journal [insight_project_journal_delete]     
  transfer     Transfer insight/journal [insight_project_journal_transfer] 
  log          Manage logs of the journal                                  
  credential   Manage credentials of the journal                           
  service      Manage services of the journal                              
  tag          Manage tags of the journal                                  
  event        Manage events of the journal                                
  logger       Log messages to journal                                     
  stream       Stream messages from journal
```

#### h1 insight journal spec

```
h1 insight journal spec

  Print specification of context 

Synopsis

  $ h1 insight journal spec <options> 

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

#### h1 insight journal create

```
h1 insight journal create

  Create insight/journal [insight_project_journal_create] 

Synopsis

  $ h1 insight journal create <options> 

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
  --name string                Journal name                                                                  
  --service id-or-uri          Journal service. Provide ID or URI of billing/service. Defaults is            
                               5c9cc2d0255c16c3e899a4ea                                                      
  --retention string           Journal retention                                                             
  --tag key=key,value=value    Tag collection
```

#### h1 insight journal list

```
h1 insight journal list

  List insight/journal [insight_project_journal_list] 

Synopsis

  $ h1 insight journal list <options> 

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

#### h1 insight journal show

```
h1 insight journal show

  Get insight/journal [insight_project_journal_get] 

Synopsis

  $ h1 insight journal show <options> 

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
  --journal id-or-uri    Journal Id
```

#### h1 insight journal update

```
h1 insight journal update

  Update insight/journal [insight_project_journal_update] 

Synopsis

  $ h1 insight journal update <options> 

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
  --journal id-or-uri    Journal Id                                                               
  --name string          Journal name. Requires permissions insight/journal.name/update           
  --retention string     Journal retention. Requires permissions insight/journal.retention/update
```

#### h1 insight journal delete

```
h1 insight journal delete

  Delete insight/journal [insight_project_journal_delete] 

Synopsis

  $ h1 insight journal delete <options> 

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
  --journal id-or-uri    Journal Id
```

#### h1 insight journal transfer

```
h1 insight journal transfer

  Transfer insight/journal [insight_project_journal_transfer] 

Synopsis

  $ h1 insight journal transfer <options> 

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
  --journal id-or-uri          Journal Id                                                                    
  --x-idempotency-key string   Idempotency key                                                               
  --project uri                Journal project. Provide URI of iam/project. Requires permissions             
                               insight/journal/create
```

#### h1 insight journal log

```
h1 insight journal log

Synopsis

  $ h1 insight journal log <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                            
  list   Get insight/journal.log [insight_project_journal_log_get]
```

##### h1 insight journal log spec

```
h1 insight journal log spec

  Print specification of context 

Synopsis

  $ h1 insight journal log spec <options> 

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

##### h1 insight journal log list

```
h1 insight journal log list

  Get insight/journal.log [insight_project_journal_log_get] 

Synopsis

  $ h1 insight journal log list <options> 

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
  --journal id-or-uri    Journal Id  
  --since string         since       
  --until string         until       
  --follow string        follow      
  --tail string          tail        
  --tag string           tag
```

#### h1 insight journal credential

```
h1 insight journal credential

Synopsis

  $ h1 insight journal credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                                
  create   Create insight/journal.credential [insight_project_journal_credential_create] 
  list     List insight/journal.credential [insight_project_journal_credential_list]     
  show     Get insight/journal.credential [insight_project_journal_credential_get]       
  update   Update insight/journal.credential [insight_project_journal_credential_patch]  
  delete   Delete insight/journal.credential [insight_project_journal_credential_delete]
```

##### h1 insight journal credential spec

```
h1 insight journal credential spec

  Print specification of context 

Synopsis

  $ h1 insight journal credential spec <options> 

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

##### h1 insight journal credential create

```
h1 insight journal credential create

  Create insight/journal.credential [insight_project_journal_credential_create] 

Synopsis

  $ h1 insight journal credential create <options> 

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
  --journal id-or-uri    Journal Id       
  --name string          Credential name  
  --type string          Credential type  
  --value string         Credential value 
  --token string         Credential token
```

##### h1 insight journal credential list

```
h1 insight journal credential list

  List insight/journal.credential [insight_project_journal_credential_list] 

Synopsis

  $ h1 insight journal credential list <options> 

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
  --journal id-or-uri    Journal Id
```

##### h1 insight journal credential show

```
h1 insight journal credential show

  Get insight/journal.credential [insight_project_journal_credential_get] 

Synopsis

  $ h1 insight journal credential show <options> 

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
  --journal id-or-uri      Journal Id   
  --credential id-or-uri   credentialId
```

##### h1 insight journal credential update

```
h1 insight journal credential update

  Update insight/journal.credential [insight_project_journal_credential_patch] 

Synopsis

  $ h1 insight journal credential update <options> 

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
  --journal id-or-uri      Journal Id                                                                   
  --credential id-or-uri   credentialId                                                                 
  --name string            Credential name. Requires permissions insight/journal.credential.name/update
```

##### h1 insight journal credential delete

```
h1 insight journal credential delete

  Delete insight/journal.credential [insight_project_journal_credential_delete] 

Synopsis

  $ h1 insight journal credential delete <options> 

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
  --journal id-or-uri      Journal Id   
  --credential id-or-uri   credentialId
```

#### h1 insight journal service

```
h1 insight journal service

Synopsis

  $ h1 insight journal service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                      
  list   List insight/journal.service [insight_project_journal_service_list] 
  show   Get insight/journal.service [insight_project_journal_service_get]
```

##### h1 insight journal service spec

```
h1 insight journal service spec

  Print specification of context 

Synopsis

  $ h1 insight journal service spec <options> 

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

##### h1 insight journal service list

```
h1 insight journal service list

  List insight/journal.service [insight_project_journal_service_list] 

Synopsis

  $ h1 insight journal service list <options> 

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
  --journal id-or-uri    Journal Id
```

##### h1 insight journal service show

```
h1 insight journal service show

  Get insight/journal.service [insight_project_journal_service_get] 

Synopsis

  $ h1 insight journal service show <options> 

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
  --journal id-or-uri    Journal Id  
  --service id-or-uri    serviceId
```

#### h1 insight journal tag

```
h1 insight journal tag

Synopsis

  $ h1 insight journal tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                  
  create   Create insight/journal.tag [insight_project_journal_tag_create] 
  list     List insight/journal.tag [insight_project_journal_tag_list]     
  show     Get insight/journal.tag [insight_project_journal_tag_get]       
  delete   Delete insight/journal.tag [insight_project_journal_tag_delete]
```

##### h1 insight journal tag spec

```
h1 insight journal tag spec

  Print specification of context 

Synopsis

  $ h1 insight journal tag spec <options> 

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

##### h1 insight journal tag create

```
h1 insight journal tag create

  Create insight/journal.tag [insight_project_journal_tag_create] 

Synopsis

  $ h1 insight journal tag create <options> 

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
  --journal id-or-uri    Journal Id  
  --key string           Tag key     
  --value string         Tag value
```

##### h1 insight journal tag list

```
h1 insight journal tag list

  List insight/journal.tag [insight_project_journal_tag_list] 

Synopsis

  $ h1 insight journal tag list <options> 

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
  --journal id-or-uri    Journal Id
```

##### h1 insight journal tag show

```
h1 insight journal tag show

  Get insight/journal.tag [insight_project_journal_tag_get] 

Synopsis

  $ h1 insight journal tag show <options> 

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
  --journal id-or-uri    Journal Id  
  --tag id-or-uri        tagId
```

##### h1 insight journal tag delete

```
h1 insight journal tag delete

  Delete insight/journal.tag [insight_project_journal_tag_delete] 

Synopsis

  $ h1 insight journal tag delete <options> 

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
  --journal id-or-uri    Journal Id  
  --tag id-or-uri        tagId
```

#### h1 insight journal event

```
h1 insight journal event

Synopsis

  $ h1 insight journal event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                  
  list   List insight/journal.event [insight_project_journal_event_list] 
  show   Get insight/journal.event [insight_project_journal_event_get]
```

##### h1 insight journal event spec

```
h1 insight journal event spec

  Print specification of context 

Synopsis

  $ h1 insight journal event spec <options> 

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

##### h1 insight journal event list

```
h1 insight journal event list

  List insight/journal.event [insight_project_journal_event_list] 

Synopsis

  $ h1 insight journal event list <options> 

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
  --journal id-or-uri    Journal Id  
  --$limit string        $limit      
  --$skip string         $skip
```

##### h1 insight journal event show

```
h1 insight journal event show

  Get insight/journal.event [insight_project_journal_event_get] 

Synopsis

  $ h1 insight journal event show <options> 

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
  --journal id-or-uri    Journal Id  
  --event id-or-uri      eventId
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
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --journal string                                                     
  --project string                                                     
  --hostname string                                                    
  --log-file type     Path of the input text log file (default: stdin)
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
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --journal string                                                    
  --project string                                                    
  --log-file type    Path of the input json log file (default: stdin)
```

