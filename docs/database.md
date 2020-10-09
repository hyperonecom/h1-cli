## h1 database

```
h1 database

Synopsis

  $ h1 database <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  instance   Management of instance resource
```

### h1 database instance

```
h1 database instance

Synopsis

  $ h1 database instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create       Create database/instance [Operation ID: database_project_instance_create]     
  list         List database/instance [Operation ID: database_project_instance_list]         
  show         Get database/instance [Operation ID: database_project_instance_get]           
  update       Update database/instance [Operation ID: database_project_instance_update]     
  delete       Delete database/instance [Operation ID: database_project_instance_delete]     
  start        Start database/instance [Operation ID: database_project_instance_start]       
  stop         Stop database/instance [Operation ID: database_project_instance_stop]         
  transfer     Transfer database/instance [Operation ID: database_project_instance_transfer] 
  credential   Manage credentials of the instance                                            
  service      Manage services of the instance                                               
  tag          Manage tags of the instance                                                   
  event        Manage events of the instance
```

#### h1 database instance create

```
h1 database instance create

  Create database/instance [Operation ID: database_project_instance_create] 

Synopsis

  $ h1 database instance create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance create --project 5f64e2468c71177993874510 --name       
  simple-instance --service                                                     
  /billing/project/platform/service/5cd2e2fc3bd40c1a6359bb26                    

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id                                             
  --location id-or-uri         Location Id                                            
  --x-idempotency-key string   Idempotency key                                        
  --name string                Instance name                                          
  --service id-or-uri          Instance service. Provide ID or URI of billing/service 
  --tag key=key,value=value    Tag collection                                         
  --skeleton
```

#### h1 database instance list

```
h1 database instance list

  List database/instance [Operation ID: database_project_instance_list] 

Synopsis

  $ h1 database instance list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance list --project 5f64e2468c71177993874510                

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id          
  --location id-or-uri   Location Id         
  --name string          Filter by name      
  --tag.value string     Filter by tag.value 
  --tag.key string       Filter by tag.key   
  --skeleton
```

#### h1 database instance show

```
h1 database instance show

  Get database/instance [Operation ID: database_project_instance_get] 

Synopsis

  $ h1 database instance show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance show --project 5f64e2468c71177993874510 --instance     
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --skeleton
```

#### h1 database instance update

```
h1 database instance update

  Update database/instance [Operation ID: database_project_instance_update] 

Synopsis

  $ h1 database instance update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 database instance update --project 5f64e2468c71177993874510 --instance   
  5f577a24494c5cfdec7830e5 --name instance-renamed                              

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id                                                        
  --location id-or-uri   Location Id                                                       
  --instance id-or-uri   Instance Id                                                       
  --name string          Instance name. Requires permissions database/instance.name/update 
  --skeleton
```

#### h1 database instance delete

```
h1 database instance delete

  Delete database/instance [Operation ID: database_project_instance_delete] 

Synopsis

  $ h1 database instance delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance delete --project 5f64e2468c71177993874510 --instance   
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --skeleton
```

#### h1 database instance start

```
h1 database instance start

  Start database/instance [Operation ID: database_project_instance_start] 

Synopsis

  $ h1 database instance start <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance start --project 5f64e2468c71177993874510 --instance    
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --instance id-or-uri         Instance Id     
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 database instance stop

```
h1 database instance stop

  Stop database/instance [Operation ID: database_project_instance_stop] 

Synopsis

  $ h1 database instance stop <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance stop --project 5f64e2468c71177993874510 --instance     
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id      
  --location id-or-uri         Location Id     
  --instance id-or-uri         Instance Id     
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 database instance transfer

```
h1 database instance transfer

  Transfer database/instance [Operation ID: database_project_instance_transfer] 

Synopsis

  $ h1 database instance transfer <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri          Project Id                                                     
  --location id-or-uri         Location Id                                                    
  --instance id-or-uri         Instance Id                                                    
  --x-idempotency-key string   Idempotency key                                                
  --project id-or-uri          Instance project. Provide ID or URI of iam/project. Requires   
                               permissions database/instance/create                           
  --skeleton
```

#### h1 database instance credential

```
h1 database instance credential

Synopsis

  $ h1 database instance credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create database/instance.credential [Operation ID:                                 
           database_project_instance_credential_create]                                       
  list     List database/instance.credential [Operation ID:                                   
           database_project_instance_credential_list]                                         
  show     Get database/instance.credential [Operation ID:                                    
           database_project_instance_credential_get]                                          
  update   Update database/instance.credential [Operation ID:                                 
           database_project_instance_credential_patch]                                        
  delete   Delete database/instance.credential [Operation ID:                                 
           database_project_instance_credential_delete]
```

##### h1 database instance credential create

```
h1 database instance credential create

  Create database/instance.credential [Operation ID:                            
  database_project_instance_credential_create]                                  

Synopsis

  $ h1 database instance credential create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance credential create --project 5f64e2468c71177993874510   
  --instance 5f577a24494c5cfdec7830e5 --name instance-credential --type plain   
  --value xxxxxx                                                                

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri           Project Id       
  --location id-or-uri          Location Id      
  --instance id-or-uri          Instance Id      
  --name string                 Credential name  
  --type mysql,plain,postgres   Credential type  
  --value string                Credential value 
  --token string                Credential token 
  --skeleton
```

##### h1 database instance credential list

```
h1 database instance credential list

  List database/instance.credential [Operation ID:                              
  database_project_instance_credential_list]                                    

Synopsis

  $ h1 database instance credential list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance credential list --project 5f64e2468c71177993874510     
  --instance 5f577a24494c5cfdec7830e5                                           

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --skeleton
```

##### h1 database instance credential show

```
h1 database instance credential show

  Get database/instance.credential [Operation ID:                               
  database_project_instance_credential_get]                                     

Synopsis

  $ h1 database instance credential show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance credential show --project 5f64e2468c71177993874510     
  --instance 5f577a24494c5cfdec7830e5 --credential 5f60cbbe494c5cfdec81cc6b     

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri      Project Id   
  --location id-or-uri     Location Id  
  --instance id-or-uri     Instance Id  
  --credential id-or-uri   credentialId 
  --skeleton
```

##### h1 database instance credential update

```
h1 database instance credential update

  Update database/instance.credential [Operation ID:                            
  database_project_instance_credential_patch]                                   

Synopsis

  $ h1 database instance credential update <options> 

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri      Project Id                                                         
  --location id-or-uri     Location Id                                                        
  --instance id-or-uri     Instance Id                                                        
  --credential id-or-uri   credentialId                                                       
  --name string            Credential name. Requires permissions                              
                           database/instance.credential.name/update                           
  --skeleton
```

##### h1 database instance credential delete

```
h1 database instance credential delete

  Delete database/instance.credential [Operation ID:                            
  database_project_instance_credential_delete]                                  

Synopsis

  $ h1 database instance credential delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance credential delete --project 5f64e2468c71177993874510   
  --instance 5f577a24494c5cfdec7830e5 --credential 5f60cbbe494c5cfdec81cc6b     

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri      Project Id   
  --location id-or-uri     Location Id  
  --instance id-or-uri     Instance Id  
  --credential id-or-uri   credentialId 
  --skeleton
```

#### h1 database instance service

```
h1 database instance service

Synopsis

  $ h1 database instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List database/instance.service [Operation ID: database_project_instance_service_list] 
  show   Get database/instance.service [Operation ID: database_project_instance_service_get]
```

##### h1 database instance service list

```
h1 database instance service list

  List database/instance.service [Operation ID:                                 
  database_project_instance_service_list]                                       

Synopsis

  $ h1 database instance service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance service list --project 5f64e2468c71177993874510        
  --instance 5f577a24494c5cfdec7830e5                                           

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --skeleton
```

##### h1 database instance service show

```
h1 database instance service show

  Get database/instance.service [Operation ID:                                  
  database_project_instance_service_get]                                        

Synopsis

  $ h1 database instance service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance service show --project 5f64e2468c71177993874510        
  --instance 5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b        

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --service id-or-uri    serviceId   
  --skeleton
```

#### h1 database instance tag

```
h1 database instance tag

Synopsis

  $ h1 database instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create database/instance.tag [Operation ID: database_project_instance_tag_create] 
  list     List database/instance.tag [Operation ID: database_project_instance_tag_list]     
  show     Get database/instance.tag [Operation ID: database_project_instance_tag_get]       
  delete   Delete database/instance.tag [Operation ID: database_project_instance_tag_delete]
```

##### h1 database instance tag create

```
h1 database instance tag create

  Create database/instance.tag [Operation ID:                                   
  database_project_instance_tag_create]                                         

Synopsis

  $ h1 database instance tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance tag create --project 5f64e2468c71177993874510          
  --instance 5f577a24494c5cfdec7830e5 --key x --value x                         

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --key string           Tag key     
  --value string         Tag value   
  --skeleton
```

##### h1 database instance tag list

```
h1 database instance tag list

  List database/instance.tag [Operation ID: database_project_instance_tag_list] 

Synopsis

  $ h1 database instance tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance tag list --project 5f64e2468c71177993874510 --instance 
  5f577a24494c5cfdec7830e5                                                      

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --skeleton
```

##### h1 database instance tag show

```
h1 database instance tag show

  Get database/instance.tag [Operation ID: database_project_instance_tag_get] 

Synopsis

  $ h1 database instance tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance tag show --project 5f64e2468c71177993874510 --instance 
  5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b                       

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --tag id-or-uri        tagId       
  --skeleton
```

##### h1 database instance tag delete

```
h1 database instance tag delete

  Delete database/instance.tag [Operation ID:                                   
  database_project_instance_tag_delete]                                         

Synopsis

  $ h1 database instance tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance tag delete --project 5f64e2468c71177993874510          
  --instance 5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b            

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --tag id-or-uri        tagId       
  --skeleton
```

#### h1 database instance event

```
h1 database instance event

Synopsis

  $ h1 database instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List database/instance.event [Operation ID: database_project_instance_event_list] 
  show   Get database/instance.event [Operation ID: database_project_instance_event_get]
```

##### h1 database instance event list

```
h1 database instance event list

  List database/instance.event [Operation ID:                                   
  database_project_instance_event_list]                                         

Synopsis

  $ h1 database instance event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance event list --project 5f64e2468c71177993874510          
  --instance 5f577a24494c5cfdec7830e5                                           

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --$limit string        $limit      
  --$skip string         $skip       
  --skeleton
```

##### h1 database instance event show

```
h1 database instance event show

  Get database/instance.event [Operation ID: database_project_instance_event_get] 

Synopsis

  $ h1 database instance event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 database instance event show --project 5f64e2468c71177993874510          
  --instance 5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b          

Global options

  --help                                      Show help message and exit.                     
  --verbose                                   Make the operation more talkative.              
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                
  --query string                              JMESPath query string                           
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json. 
  --as uri                                    Act as another actor eg. service account        
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --project id-or-uri    Project Id  
  --location id-or-uri   Location Id 
  --instance id-or-uri   Instance Id 
  --event id-or-uri      eventId     
  --skeleton
```

