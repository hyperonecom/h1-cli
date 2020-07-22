## h1 dns

```
h1 dns

Synopsis

  $ h1 dns <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context 
  zone   Management of zone resource
```

### h1 dns spec

```
h1 dns spec

  Print specification of context 

Synopsis

  $ h1 dns spec <options> 

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

### h1 dns zone

```
h1 dns zone

Synopsis

  $ h1 dns zone <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec        Print specification of context            
  create      Create dns/zone [dns_project_zone_create] 
  list        List dns/zone [dns_project_zone_list]     
  show        Get dns/zone [dns_project_zone_get]       
  update      Update dns/zone [dns_project_zone_update] 
  delete      Delete dns/zone [dns_project_zone_delete] 
  recordset   Manage recordsets of the zone             
  service     Manage services of the zone               
  tag         Manage tags of the zone                   
  event       Manage events of the zone
```

#### h1 dns zone spec

```
h1 dns zone spec

  Print specification of context 

Synopsis

  $ h1 dns zone spec <options> 

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

#### h1 dns zone create

```
h1 dns zone create

  Create dns/zone [dns_project_zone_create] 

Synopsis

  $ h1 dns zone create <options> 

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
  --name string                Zone name                                          
  --service id-or-uri          Zone service. Provide ID or URI of billing/service 
  --dns-name string            Zone dnsName                                       
  --source string              Zone source                                        
  --tag key=key,value=value    Tag collection
```

#### h1 dns zone list

```
h1 dns zone list

  List dns/zone [dns_project_zone_list] 

Synopsis

  $ h1 dns zone list <options> 

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

#### h1 dns zone show

```
h1 dns zone show

  Get dns/zone [dns_project_zone_get] 

Synopsis

  $ h1 dns zone show <options> 

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
  --zone id-or-uri       Zone Id
```

#### h1 dns zone update

```
h1 dns zone update

  Update dns/zone [dns_project_zone_update] 

Synopsis

  $ h1 dns zone update <options> 

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
  --zone id-or-uri       Zone Id                                              
  --name string          Zone name. Requires permissions dns/zone.name/update
```

#### h1 dns zone delete

```
h1 dns zone delete

  Delete dns/zone [dns_project_zone_delete] 

Synopsis

  $ h1 dns zone delete <options> 

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
  --zone id-or-uri       Zone Id
```

#### h1 dns zone recordset

```
h1 dns zone recordset

Synopsis

  $ h1 dns zone recordset <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                
  create   Create dns/zone.recordset [dns_project_zone_recordset_create] 
  list     List dns/zone.recordset [dns_project_zone_recordset_list]     
  show     Get dns/zone.recordset [dns_project_zone_recordset_get]       
  update   Update dns/zone.recordset [dns_project_zone_recordset_patch]  
  delete   Delete dns/zone.recordset [dns_project_zone_recordset_delete] 
  record   Manage records of the recordset
```

##### h1 dns zone recordset spec

```
h1 dns zone recordset spec

  Print specification of context 

Synopsis

  $ h1 dns zone recordset spec <options> 

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

##### h1 dns zone recordset create

```
h1 dns zone recordset create

  Create dns/zone.recordset [dns_project_zone_recordset_create] 

Synopsis

  $ h1 dns zone recordset create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri                        Project Id        
  --location id-or-uri                       Location Id       
  --zone id-or-uri                           Zone Id           
  --name string                              Recordset name    
  --type string                              Recordset type    
  --ttl string                               Recordset ttl     
  --record content=content,enabled=enabled   Record collection
```

##### h1 dns zone recordset list

```
h1 dns zone recordset list

  List dns/zone.recordset [dns_project_zone_recordset_list] 

Synopsis

  $ h1 dns zone recordset list <options> 

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
  --zone id-or-uri       Zone Id
```

##### h1 dns zone recordset show

```
h1 dns zone recordset show

  Get dns/zone.recordset [dns_project_zone_recordset_get] 

Synopsis

  $ h1 dns zone recordset show <options> 

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
  --zone id-or-uri        Zone Id     
  --recordset id-or-uri   recordsetId
```

##### h1 dns zone recordset update

```
h1 dns zone recordset update

  Update dns/zone.recordset [dns_project_zone_recordset_patch] 

Synopsis

  $ h1 dns zone recordset update <options> 

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
  --zone id-or-uri        Zone Id                                                           
  --recordset id-or-uri   recordsetId                                                       
  --ttl string            Recordset ttl. Requires permissions dns/zone.recordset.ttl/update
```

##### h1 dns zone recordset delete

```
h1 dns zone recordset delete

  Delete dns/zone.recordset [dns_project_zone_recordset_delete] 

Synopsis

  $ h1 dns zone recordset delete <options> 

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
  --zone id-or-uri        Zone Id     
  --recordset id-or-uri   recordsetId
```

##### h1 dns zone recordset record

```
h1 dns zone recordset record

Synopsis

  $ h1 dns zone recordset record <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                    
  create   Create dns/zone.record [dns_project_zone_recordset_record_create] 
  list     List dns/zone.record [dns_project_zone_recordset_record_list]     
  show     Get dns/zone.record [dns_project_zone_recordset_record_get]       
  delete   Delete dns/zone.record [dns_project_zone_recordset_record_delete]
```

###### h1 dns zone recordset record spec

```
h1 dns zone recordset record spec

  Print specification of context 

Synopsis

  $ h1 dns zone recordset record spec <options> 

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

###### h1 dns zone recordset record create

```
h1 dns zone recordset record create

  Create dns/zone.record [dns_project_zone_recordset_record_create] 

Synopsis

  $ h1 dns zone recordset record create <options> 

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
  --zone id-or-uri        Zone Id        
  --recordset id-or-uri   recordsetId    
  --content string        Record content 
  --enabled string        Record enabled
```

###### h1 dns zone recordset record list

```
h1 dns zone recordset record list

  List dns/zone.record [dns_project_zone_recordset_record_list] 

Synopsis

  $ h1 dns zone recordset record list <options> 

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
  --zone id-or-uri        Zone Id     
  --recordset id-or-uri   recordsetId
```

###### h1 dns zone recordset record show

```
h1 dns zone recordset record show

  Get dns/zone.record [dns_project_zone_recordset_record_get] 

Synopsis

  $ h1 dns zone recordset record show <options> 

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
  --zone id-or-uri        Zone Id     
  --recordset id-or-uri   recordsetId 
  --record id-or-uri      recordId
```

###### h1 dns zone recordset record delete

```
h1 dns zone recordset record delete

  Delete dns/zone.record [dns_project_zone_recordset_record_delete] 

Synopsis

  $ h1 dns zone recordset record delete <options> 

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
  --zone id-or-uri        Zone Id     
  --recordset id-or-uri   recordsetId 
  --record id-or-uri      recordId
```

#### h1 dns zone service

```
h1 dns zone service

Synopsis

  $ h1 dns zone service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                        
  list   List dns/zone.service [dns_project_zone_service_list] 
  show   Get dns/zone.service [dns_project_zone_service_get]
```

##### h1 dns zone service spec

```
h1 dns zone service spec

  Print specification of context 

Synopsis

  $ h1 dns zone service spec <options> 

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

##### h1 dns zone service list

```
h1 dns zone service list

  List dns/zone.service [dns_project_zone_service_list] 

Synopsis

  $ h1 dns zone service list <options> 

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
  --zone id-or-uri       Zone Id
```

##### h1 dns zone service show

```
h1 dns zone service show

  Get dns/zone.service [dns_project_zone_service_get] 

Synopsis

  $ h1 dns zone service show <options> 

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
  --zone id-or-uri       Zone Id     
  --service id-or-uri    serviceId
```

#### h1 dns zone tag

```
h1 dns zone tag

Synopsis

  $ h1 dns zone tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                    
  create   Create dns/zone.tag [dns_project_zone_tag_create] 
  list     List dns/zone.tag [dns_project_zone_tag_list]     
  show     Get dns/zone.tag [dns_project_zone_tag_get]       
  delete   Delete dns/zone.tag [dns_project_zone_tag_delete]
```

##### h1 dns zone tag spec

```
h1 dns zone tag spec

  Print specification of context 

Synopsis

  $ h1 dns zone tag spec <options> 

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

##### h1 dns zone tag create

```
h1 dns zone tag create

  Create dns/zone.tag [dns_project_zone_tag_create] 

Synopsis

  $ h1 dns zone tag create <options> 

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
  --zone id-or-uri       Zone Id     
  --key string           Tag key     
  --value string         Tag value
```

##### h1 dns zone tag list

```
h1 dns zone tag list

  List dns/zone.tag [dns_project_zone_tag_list] 

Synopsis

  $ h1 dns zone tag list <options> 

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
  --zone id-or-uri       Zone Id
```

##### h1 dns zone tag show

```
h1 dns zone tag show

  Get dns/zone.tag [dns_project_zone_tag_get] 

Synopsis

  $ h1 dns zone tag show <options> 

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
  --zone id-or-uri       Zone Id     
  --tag id-or-uri        tagId
```

##### h1 dns zone tag delete

```
h1 dns zone tag delete

  Delete dns/zone.tag [dns_project_zone_tag_delete] 

Synopsis

  $ h1 dns zone tag delete <options> 

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
  --zone id-or-uri       Zone Id     
  --tag id-or-uri        tagId
```

#### h1 dns zone event

```
h1 dns zone event

Synopsis

  $ h1 dns zone event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   List dns/zone.event [dns_project_zone_event_list]
```

##### h1 dns zone event spec

```
h1 dns zone event spec

  Print specification of context 

Synopsis

  $ h1 dns zone event spec <options> 

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

##### h1 dns zone event list

```
h1 dns zone event list

  List dns/zone.event [dns_project_zone_event_list] 

Synopsis

  $ h1 dns zone event list <options> 

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
  --zone id-or-uri       Zone Id     
  --$limit string        $limit      
  --$skip string         $skip
```

