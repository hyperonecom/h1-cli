## h1 recovery

```
h1 recovery

Synopsis

  $ h1 recovery <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  backup   Management of backup resource
```

### h1 recovery backup

```
h1 recovery backup

Synopsis

  $ h1 recovery backup <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create    Create recovery/backup [Operation ID: recovery_project_backup_create] 
  list      List recovery/backup [Operation ID: recovery_project_backup_list]     
  show      Get recovery/backup [Operation ID: recovery_project_backup_get]       
  update    Update recovery/backup [Operation ID: recovery_project_backup_update] 
  delete    Delete recovery/backup [Operation ID: recovery_project_backup_delete] 
  export    Export recovery/backup [Operation ID: recovery_project_backup_export] 
  metric    Manage metrics of the backup                                          
  service   Manage services of the backup                                         
  tag       Manage tags of the backup                                             
  event     Manage events of the backup
```

#### h1 recovery backup create

```
h1 recovery backup create

  Create recovery/backup [Operation ID: recovery_project_backup_create] 

Synopsis

  $ h1 recovery backup create <options> 

Global options

  --help                                      Show help message and exit.                                                   
  --verbose                                   Make the operation more talkative.                                            
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                       
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state,    
                                              flavour:flavour, size:size}                                                   
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.            
  --as uri                                    Act as another actor eg. service account                                      
  --no-wait                                   In case of queued event do not wait for completion                            

Operation options

  --project id-or-uri          Project Id                                                                    
  --location id-or-uri         Location Id. Default value is pl-waw-1                                        
  --x-idempotency-key string   Idempotency key                                                               
  --name string                Backup name                                                                   
  --source string              Backup source. Specifies one of the following:                                
                               - website. Provide ID or URI of website/instance                              
                               - database. Provide ID or URI of database/instance                            
  --tag key=key,value=value    Tag collection                                                                
  --skeleton
```

#### h1 recovery backup list

```
h1 recovery backup list

  List recovery/backup [Operation ID: recovery_project_backup_list] 

Synopsis

  $ h1 recovery backup list <options> 

Global options

  --help                                      Show help message and exit.                                                   
  --verbose                                   Make the operation more talkative.                                            
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                       
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state,    
                                              flavour:flavour, size:size}                                                   
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.            
  --as uri                                    Act as another actor eg. service account                                      
  --no-wait                                   In case of queued event do not wait for completion                            

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --name string          Filter by name                         
  --source string        Filter by source                       
  --tag.value string     Filter by tag.value                    
  --tag.key string       Filter by tag.key                      
  --skeleton
```

#### h1 recovery backup show

```
h1 recovery backup show

  Get recovery/backup [Operation ID: recovery_project_backup_get] 

Synopsis

  $ h1 recovery backup show <options> 

Global options

  --help                                      Show help message and exit.                                                   
  --verbose                                   Make the operation more talkative.                                            
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                       
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state,    
                                              flavour:flavour, size:size}                                                   
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.            
  --as uri                                    Act as another actor eg. service account                                      
  --no-wait                                   In case of queued event do not wait for completion                            

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --backup id-or-uri     Backup Id                              
  --skeleton
```

#### h1 recovery backup update

```
h1 recovery backup update

  Update recovery/backup [Operation ID: recovery_project_backup_update] 

Synopsis

  $ h1 recovery backup update <options> 

Global options

  --help                                      Show help message and exit.                                                   
  --verbose                                   Make the operation more talkative.                                            
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                       
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state,    
                                              flavour:flavour, size:size}                                                   
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.            
  --as uri                                    Act as another actor eg. service account                                      
  --no-wait                                   In case of queued event do not wait for completion                            

Operation options

  --project id-or-uri    Project Id                                                    
  --location id-or-uri   Location Id. Default value is pl-waw-1                        
  --backup id-or-uri     Backup Id                                                     
  --name string          Backup name. Requires permissions recovery/backup.name/update 
  --skeleton
```

#### h1 recovery backup delete

```
h1 recovery backup delete

  Delete recovery/backup [Operation ID: recovery_project_backup_delete] 

Synopsis

  $ h1 recovery backup delete <options> 

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
  --backup id-or-uri     Backup Id                              
  --skeleton
```

#### h1 recovery backup export

```
h1 recovery backup export

  Export recovery/backup [Operation ID: recovery_project_backup_export] 

Synopsis

  $ h1 recovery backup export <options> 

Global options

  --help                                      Show help message and exit.                                                   
  --verbose                                   Make the operation more talkative.                                            
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                       
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state,    
                                              flavour:flavour, size:size}                                                   
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.            
  --as uri                                    Act as another actor eg. service account                                      
  --no-wait                                   In case of queued event do not wait for completion                            

Operation options

  --project id-or-uri          Project Id                                                                    
  --location id-or-uri         Location Id. Default value is pl-waw-1                                        
  --backup id-or-uri           Backup Id                                                                     
  --x-idempotency-key string   Idempotency key                                                               
  --bucket id-or-uri           Backup bucket. Provide ID or URI of storage/bucket. Requires permissions      
                               storage/bucket/upload                                                         
  --skeleton
```

#### h1 recovery backup metric

```
h1 recovery backup metric

Synopsis

  $ h1 recovery backup metric <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list    List recovery/backup.metric [Operation ID: recovery_project_backup_metric_list] 
  show    Get recovery/backup.metric [Operation ID: recovery_project_backup_metric_get]   
  point   Manage points of the metric
```

##### h1 recovery backup metric list

```
h1 recovery backup metric list

  List recovery/backup.metric [Operation ID: recovery_project_backup_metric_list] 

Synopsis

  $ h1 recovery backup metric list <options> 

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
  --backup id-or-uri     Backup Id                              
  --skeleton
```

##### h1 recovery backup metric show

```
h1 recovery backup metric show

  Get recovery/backup.metric [Operation ID: recovery_project_backup_metric_get] 

Synopsis

  $ h1 recovery backup metric show <options> 

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
  --backup id-or-uri     Backup Id                              
  --metric id-or-uri     metricId                               
  --skeleton
```

##### h1 recovery backup metric point

```
h1 recovery backup metric point

Synopsis

  $ h1 recovery backup metric point <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List recovery/backup.point [Operation ID: recovery_project_backup_metric_point_list]
```

###### h1 recovery backup metric point list

```
h1 recovery backup metric point list

  List recovery/backup.point [Operation ID:                                     
  recovery_project_backup_metric_point_list]                                    

Synopsis

  $ h1 recovery backup metric point list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{value:@}               
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri    Project Id                             
  --location id-or-uri   Location Id. Default value is pl-waw-1 
  --backup id-or-uri     Backup Id                              
  --metric id-or-uri     metricId                               
  --interval string      interval                               
  --timespan string      timespan                               
  --skeleton
```

#### h1 recovery backup service

```
h1 recovery backup service

Synopsis

  $ h1 recovery backup service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List recovery/backup.service [Operation ID: recovery_project_backup_service_list] 
  show   Get recovery/backup.service [Operation ID: recovery_project_backup_service_get]
```

##### h1 recovery backup service list

```
h1 recovery backup service list

  List recovery/backup.service [Operation ID:                                   
  recovery_project_backup_service_list]                                         

Synopsis

  $ h1 recovery backup service list <options> 

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
  --backup id-or-uri     Backup Id                              
  --skeleton
```

##### h1 recovery backup service show

```
h1 recovery backup service show

  Get recovery/backup.service [Operation ID: recovery_project_backup_service_get] 

Synopsis

  $ h1 recovery backup service show <options> 

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
  --backup id-or-uri     Backup Id                              
  --service id-or-uri    serviceId                              
  --skeleton
```

#### h1 recovery backup tag

```
h1 recovery backup tag

Synopsis

  $ h1 recovery backup tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create recovery/backup.tag [Operation ID: recovery_project_backup_tag_create] 
  list     List recovery/backup.tag [Operation ID: recovery_project_backup_tag_list]     
  show     Get recovery/backup.tag [Operation ID: recovery_project_backup_tag_get]       
  delete   Delete recovery/backup.tag [Operation ID: recovery_project_backup_tag_delete]
```

##### h1 recovery backup tag create

```
h1 recovery backup tag create

  Create recovery/backup.tag [Operation ID: recovery_project_backup_tag_create] 

Synopsis

  $ h1 recovery backup tag create <options> 

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
  --backup id-or-uri     Backup Id                              
  --key string           Tag key                                
  --value string         Tag value                              
  --skeleton
```

##### h1 recovery backup tag list

```
h1 recovery backup tag list

  List recovery/backup.tag [Operation ID: recovery_project_backup_tag_list] 

Synopsis

  $ h1 recovery backup tag list <options> 

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
  --backup id-or-uri     Backup Id                              
  --skeleton
```

##### h1 recovery backup tag show

```
h1 recovery backup tag show

  Get recovery/backup.tag [Operation ID: recovery_project_backup_tag_get] 

Synopsis

  $ h1 recovery backup tag show <options> 

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
  --backup id-or-uri     Backup Id                              
  --tag id-or-uri        tagId                                  
  --skeleton
```

##### h1 recovery backup tag delete

```
h1 recovery backup tag delete

  Delete recovery/backup.tag [Operation ID: recovery_project_backup_tag_delete] 

Synopsis

  $ h1 recovery backup tag delete <options> 

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
  --backup id-or-uri     Backup Id                              
  --tag id-or-uri        tagId                                  
  --skeleton
```

#### h1 recovery backup event

```
h1 recovery backup event

Synopsis

  $ h1 recovery backup event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List recovery/backup.event [Operation ID: recovery_project_backup_event_list] 
  show   Get recovery/backup.event [Operation ID: recovery_project_backup_event_get]
```

##### h1 recovery backup event list

```
h1 recovery backup event list

  List recovery/backup.event [Operation ID: recovery_project_backup_event_list] 

Synopsis

  $ h1 recovery backup event list <options> 

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
  --backup id-or-uri     Backup Id                              
  --$limit string        $limit                                 
  --$skip string         $skip                                  
  --skeleton
```

##### h1 recovery backup event show

```
h1 recovery backup event show

  Get recovery/backup.event [Operation ID: recovery_project_backup_event_get] 

Synopsis

  $ h1 recovery backup event show <options> 

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
  --backup id-or-uri     Backup Id                              
  --event id-or-uri      eventId                                
  --skeleton
```

