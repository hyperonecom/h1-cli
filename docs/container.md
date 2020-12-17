## h1 container

```
h1 container

Synopsis

  $ h1 container <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  registry   Management of registry resource
```

### h1 container registry

```
h1 container registry

Synopsis

  $ h1 container registry <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  helper                                                                                       
  create       Create container/registry [Operation ID: container_project_registry_create]     
  list         List container/registry [Operation ID: container_project_registry_list]         
  show         Get container/registry [Operation ID: container_project_registry_get]           
  update       Update container/registry [Operation ID: container_project_registry_update]     
  delete       Delete container/registry [Operation ID: container_project_registry_delete]     
  start        Start container/registry [Operation ID: container_project_registry_start]       
  stop         Stop container/registry [Operation ID: container_project_registry_stop]         
  transfer     Transfer container/registry [Operation ID: container_project_registry_transfer] 
  repository   Manage repositories of the registry                                             
  credential   Manage credentials of the registry                                              
  domain       Manage domains of the registry                                                  
  service      Manage services of the registry                                                 
  tag          Manage tags of the registry                                                     
  event        Manage events of the registry
```

#### h1 container registry helper

```
h1 container registry helper

Synopsis

  $ h1 container registry helper <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  install   Install Docker credential helper               
  setup     Setup Docker credential helper for registry    
  get       Serve credential from Docker credential helper 
  store     Store credential in Docker credential helper   
  erase     Erase credential in Docker credential helper
```

##### h1 container registry helper install

```
h1 container registry helper install

  Install Docker credential helper 

Synopsis

  $ h1 container registry helper install <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --output-directory string
```

##### h1 container registry helper setup

```
h1 container registry helper setup

  Setup Docker credential helper for registry 

Synopsis

  $ h1 container registry helper setup <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project string    Project ID                             
  --registry string   Registry ID                            
  --location string   Location ID. Default value is pl-waw-1
```

##### h1 container registry helper get

```
h1 container registry helper get

  Serve credential from Docker credential helper 

Synopsis

  $ h1 container registry helper get <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options
```

##### h1 container registry helper store

```
h1 container registry helper store

  Store credential in Docker credential helper 

Synopsis

  $ h1 container registry helper store <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options
```

##### h1 container registry helper erase

```
h1 container registry helper erase

  Erase credential in Docker credential helper 

Synopsis

  $ h1 container registry helper erase <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options
```

#### h1 container registry create

```
h1 container registry create

  Create container/registry [Operation ID: container_project_registry_create] 

Synopsis

  $ h1 container registry create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry create --project 5f64e2468c71177993874510 --name      
  simple-registry --service                                                     
  /billing/project/platform/service/5d08b8c36f76391808dffc3d                    

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
  --name string                Registry name                                          
  --service id-or-uri          Registry service. Provide ID or URI of billing/service 
  --tag key=key,value=value    Tag collection                                         
  --skeleton
```

#### h1 container registry list

```
h1 container registry list

  List container/registry [Operation ID: container_project_registry_list] 

Synopsis

  $ h1 container registry list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry list --project 5f64e2468c71177993874510               

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

#### h1 container registry show

```
h1 container registry show

  Get container/registry [Operation ID: container_project_registry_get] 

Synopsis

  $ h1 container registry show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry show --project 5f64e2468c71177993874510 --registry    
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
  --registry id-or-uri   Registry Id                            
  --skeleton
```

#### h1 container registry update

```
h1 container registry update

  Update container/registry [Operation ID: container_project_registry_update] 

Synopsis

  $ h1 container registry update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 container registry update --project 5f64e2468c71177993874510 --registry  
  5f577a24494c5cfdec7830e5 --name registry-renamed                              

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
  --registry id-or-uri   Registry Id                                                        
  --name string          Registry name. Requires permissions container/registry.name/update 
  --skeleton
```

#### h1 container registry delete

```
h1 container registry delete

  Delete container/registry [Operation ID: container_project_registry_delete] 

Synopsis

  $ h1 container registry delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry delete --project 5f64e2468c71177993874510 --registry  
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
  --registry id-or-uri   Registry Id                            
  --skeleton
```

#### h1 container registry start

```
h1 container registry start

  Start container/registry [Operation ID: container_project_registry_start] 

Synopsis

  $ h1 container registry start <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry start --project 5f64e2468c71177993874510 --registry   
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

  --project id-or-uri          Project Id                             
  --location id-or-uri         Location Id. Default value is pl-waw-1 
  --registry id-or-uri         Registry Id                            
  --x-idempotency-key string   Idempotency key                        
  --skeleton
```

#### h1 container registry stop

```
h1 container registry stop

  Stop container/registry [Operation ID: container_project_registry_stop] 

Synopsis

  $ h1 container registry stop <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry stop --project 5f64e2468c71177993874510 --registry    
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

  --project id-or-uri          Project Id                             
  --location id-or-uri         Location Id. Default value is pl-waw-1 
  --registry id-or-uri         Registry Id                            
  --x-idempotency-key string   Idempotency key                        
  --skeleton
```

#### h1 container registry transfer

```
h1 container registry transfer

  Transfer container/registry [Operation ID: container_project_registry_transfer] 

Synopsis

  $ h1 container registry transfer <options> 

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
  --registry id-or-uri         Registry Id                                                                   
  --x-idempotency-key string   Idempotency key                                                               
  --project id-or-uri          Registry project. Provide ID or URI of iam/project. Requires permissions      
                               container/registry/create                                                     
  --skeleton
```

#### h1 container registry repository

```
h1 container registry repository

Synopsis

  $ h1 container registry repository <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list    List container/registry.repository [Operation ID: container_project_registry_repository_list] 
  show    Get container/registry.repository [Operation ID: container_project_registry_repository_get]   
  image   Manage images of the repository
```

##### h1 container registry repository list

```
h1 container registry repository list

  List container/registry.repository [Operation ID:                             
  container_project_registry_repository_list]                                   

Synopsis

  $ h1 container registry repository list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry repository list --project 5f64e2468c71177993874510    
  --registry 5f577a24494c5cfdec7830e5                                           

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
  --registry id-or-uri   Registry Id                            
  --skeleton
```

##### h1 container registry repository show

```
h1 container registry repository show

  Get container/registry.repository [Operation ID:                              
  container_project_registry_repository_get]                                    

Synopsis

  $ h1 container registry repository show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry repository show --project 5f64e2468c71177993874510    
  --registry 5f577a24494c5cfdec7830e5 --repository xxxx2                        

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
  --registry id-or-uri     Registry Id                            
  --repository id-or-uri   repositoryId                           
  --skeleton
```

##### h1 container registry repository image

```
h1 container registry repository image

Synopsis

  $ h1 container registry repository image <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list     List container/registry.image [Operation ID: container_project_registry_repository_image_list]     
  show     Get container/registry.image [Operation ID: container_project_registry_repository_image_get]       
  delete   Delete container/registry.image [Operation ID: container_project_registry_repository_image_delete]
```

###### h1 container registry repository image list

```
h1 container registry repository image list

  List container/registry.image [Operation ID:                                  
  container_project_registry_repository_image_list]                             

Synopsis

  $ h1 container registry repository image list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry repository image list --project                       
  5f64e2468c71177993874510 --registry 5f577a24494c5cfdec7830e5 --repository     
  xxxx3                                                                         

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
  --registry id-or-uri     Registry Id                            
  --repository id-or-uri   repositoryId                           
  --skeleton
```

###### h1 container registry repository image show

```
h1 container registry repository image show

  Get container/registry.image [Operation ID:                                   
  container_project_registry_repository_image_get]                              

Synopsis

  $ h1 container registry repository image show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry repository image show --project                       
  5f64e2468c71177993874510 --registry 5f577a24494c5cfdec7830e5 --repository     
  xxxx4 --image imageId                                                         

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
  --registry id-or-uri     Registry Id                            
  --repository id-or-uri   repositoryId                           
  --image id-or-uri        imageId                                
  --skeleton
```

###### h1 container registry repository image delete

```
h1 container registry repository image delete

  Delete container/registry.image [Operation ID:                                
  container_project_registry_repository_image_delete]                           

Synopsis

  $ h1 container registry repository image delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry repository image delete --project                     
  5f64e2468c71177993874510 --registry 5f577a24494c5cfdec7830e5 --repository     
  xxxx5 --image imageId                                                         

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri      Project Id                             
  --location id-or-uri     Location Id. Default value is pl-waw-1 
  --registry id-or-uri     Registry Id                            
  --repository id-or-uri   repositoryId                           
  --image id-or-uri        imageId                                
  --skeleton
```

#### h1 container registry credential

```
h1 container registry credential

Synopsis

  $ h1 container registry credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create container/registry.credential [Operation ID: container_project_registry_credential_create] 
  list     List container/registry.credential [Operation ID: container_project_registry_credential_list]     
  show     Get container/registry.credential [Operation ID: container_project_registry_credential_get]       
  update   Update container/registry.credential [Operation ID: container_project_registry_credential_patch]  
  delete   Delete container/registry.credential [Operation ID: container_project_registry_credential_delete]
```

##### h1 container registry credential create

```
h1 container registry credential create

  Create container/registry.credential [Operation ID:                           
  container_project_registry_credential_create]                                 

Synopsis

  $ h1 container registry credential create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry credential create --project 5f64e2468c71177993874510  
  --registry 5f577a24494c5cfdec7830e5 --name registry-credential --type plain   
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
  --registry id-or-uri   Registry Id                            
  --name string          Credential name                        
  --type sha512,plain    Credential type                        
  --value string         Credential value                       
  --token string         Credential token                       
  --skeleton
```

##### h1 container registry credential list

```
h1 container registry credential list

  List container/registry.credential [Operation ID:                             
  container_project_registry_credential_list]                                   

Synopsis

  $ h1 container registry credential list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry credential list --project 5f64e2468c71177993874510    
  --registry 5f577a24494c5cfdec7830e5                                           

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
  --registry id-or-uri   Registry Id                            
  --skeleton
```

##### h1 container registry credential show

```
h1 container registry credential show

  Get container/registry.credential [Operation ID:                              
  container_project_registry_credential_get]                                    

Synopsis

  $ h1 container registry credential show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry credential show --project 5f64e2468c71177993874510    
  --registry 5f577a24494c5cfdec7830e5 --credential 5f60cbbe494c5cfdec81cc6b     

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
  --registry id-or-uri     Registry Id                            
  --credential id-or-uri   credentialId                           
  --skeleton
```

##### h1 container registry credential update

```
h1 container registry credential update

  Update container/registry.credential [Operation ID:                           
  container_project_registry_credential_patch]                                  

Synopsis

  $ h1 container registry credential update <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry credential update --project 5f64e2468c71177993874510  
  --registry 5f577a24494c5cfdec7830e5 --credential 5f60cbbe494c5cfdec81cc6b     
  --name renamed-credential-registry                                            

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
  --registry id-or-uri     Registry Id                                                                   
  --credential id-or-uri   credentialId                                                                  
  --name string            Credential name. Requires permissions                                         
                           container/registry.credential.name/update                                     
  --skeleton
```

##### h1 container registry credential delete

```
h1 container registry credential delete

  Delete container/registry.credential [Operation ID:                           
  container_project_registry_credential_delete]                                 

Synopsis

  $ h1 container registry credential delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry credential delete --project 5f64e2468c71177993874510  
  --registry 5f577a24494c5cfdec7830e5 --credential 5f60cbbe494c5cfdec81cc6b     

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
  --registry id-or-uri     Registry Id                            
  --credential id-or-uri   credentialId                           
  --skeleton
```

#### h1 container registry domain

```
h1 container registry domain

Synopsis

  $ h1 container registry domain <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create container/registry.domain [Operation ID: container_project_registry_domain_create] 
  list     List container/registry.domain [Operation ID: container_project_registry_domain_list]     
  show     Get container/registry.domain [Operation ID: container_project_registry_domain_get]       
  delete   Delete container/registry.domain [Operation ID: container_project_registry_domain_delete]
```

##### h1 container registry domain create

```
h1 container registry domain create

  Create container/registry.domain [Operation ID:                               
  container_project_registry_domain_create]                                     

Synopsis

  $ h1 container registry domain create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry domain create --project 5f64e2468c71177993874510      
  --registry 5f577a24494c5cfdec7830e5 --value wonderful-ellis.example.com.      

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
  --registry id-or-uri   Registry Id                            
  --value string         Domain value                           
  --skeleton
```

##### h1 container registry domain list

```
h1 container registry domain list

  List container/registry.domain [Operation ID:                                 
  container_project_registry_domain_list]                                       

Synopsis

  $ h1 container registry domain list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry domain list --project 5f64e2468c71177993874510        
  --registry 5f577a24494c5cfdec7830e5                                           

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
  --registry id-or-uri   Registry Id                            
  --skeleton
```

##### h1 container registry domain show

```
h1 container registry domain show

  Get container/registry.domain [Operation ID:                                  
  container_project_registry_domain_get]                                        

Synopsis

  $ h1 container registry domain show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry domain show --project 5f64e2468c71177993874510        
  --registry 5f577a24494c5cfdec7830e5 --domain 5cb9e2c8467ad031486f9d88         

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
  --registry id-or-uri   Registry Id                            
  --domain id-or-uri     domainId                               
  --skeleton
```

##### h1 container registry domain delete

```
h1 container registry domain delete

  Delete container/registry.domain [Operation ID:                               
  container_project_registry_domain_delete]                                     

Synopsis

  $ h1 container registry domain delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry domain delete --project 5f64e2468c71177993874510      
  --registry 5f577a24494c5cfdec7830e5 --domain 5cb9e2c8467ad031486f9d88         

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
  --registry id-or-uri   Registry Id                            
  --domain id-or-uri     domainId                               
  --skeleton
```

#### h1 container registry service

```
h1 container registry service

Synopsis

  $ h1 container registry service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List container/registry.service [Operation ID: container_project_registry_service_list] 
  show   Get container/registry.service [Operation ID: container_project_registry_service_get]
```

##### h1 container registry service list

```
h1 container registry service list

  List container/registry.service [Operation ID:                                
  container_project_registry_service_list]                                      

Synopsis

  $ h1 container registry service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry service list --project 5f64e2468c71177993874510       
  --registry 5f577a24494c5cfdec7830e5                                           

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
  --registry id-or-uri   Registry Id                            
  --skeleton
```

##### h1 container registry service show

```
h1 container registry service show

  Get container/registry.service [Operation ID:                                 
  container_project_registry_service_get]                                       

Synopsis

  $ h1 container registry service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry service show --project 5f64e2468c71177993874510       
  --registry 5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b        

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
  --registry id-or-uri   Registry Id                            
  --service id-or-uri    serviceId                              
  --skeleton
```

#### h1 container registry tag

```
h1 container registry tag

Synopsis

  $ h1 container registry tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create container/registry.tag [Operation ID: container_project_registry_tag_create] 
  list     List container/registry.tag [Operation ID: container_project_registry_tag_list]     
  show     Get container/registry.tag [Operation ID: container_project_registry_tag_get]       
  delete   Delete container/registry.tag [Operation ID: container_project_registry_tag_delete]
```

##### h1 container registry tag create

```
h1 container registry tag create

  Create container/registry.tag [Operation ID:                                  
  container_project_registry_tag_create]                                        

Synopsis

  $ h1 container registry tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry tag create --project 5f64e2468c71177993874510         
  --registry 5f577a24494c5cfdec7830e5 --key x --value x                         

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
  --registry id-or-uri   Registry Id                            
  --key string           Tag key                                
  --value string         Tag value                              
  --skeleton
```

##### h1 container registry tag list

```
h1 container registry tag list

  List container/registry.tag [Operation ID: container_project_registry_tag_list] 

Synopsis

  $ h1 container registry tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry tag list --project 5f64e2468c71177993874510           
  --registry 5f577a24494c5cfdec7830e5                                           

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
  --registry id-or-uri   Registry Id                            
  --skeleton
```

##### h1 container registry tag show

```
h1 container registry tag show

  Get container/registry.tag [Operation ID: container_project_registry_tag_get] 

Synopsis

  $ h1 container registry tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry tag show --project 5f64e2468c71177993874510           
  --registry 5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b            

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
  --registry id-or-uri   Registry Id                            
  --tag id-or-uri        tagId                                  
  --skeleton
```

##### h1 container registry tag delete

```
h1 container registry tag delete

  Delete container/registry.tag [Operation ID:                                  
  container_project_registry_tag_delete]                                        

Synopsis

  $ h1 container registry tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry tag delete --project 5f64e2468c71177993874510         
  --registry 5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b            

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
  --registry id-or-uri   Registry Id                            
  --tag id-or-uri        tagId                                  
  --skeleton
```

#### h1 container registry event

```
h1 container registry event

Synopsis

  $ h1 container registry event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List container/registry.event [Operation ID: container_project_registry_event_list] 
  show   Get container/registry.event [Operation ID: container_project_registry_event_get]
```

##### h1 container registry event list

```
h1 container registry event list

  List container/registry.event [Operation ID:                                  
  container_project_registry_event_list]                                        

Synopsis

  $ h1 container registry event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry event list --project 5f64e2468c71177993874510         
  --registry 5f577a24494c5cfdec7830e5                                           

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
  --registry id-or-uri   Registry Id                            
  --$limit string        $limit                                 
  --$skip string         $skip                                  
  --skeleton
```

##### h1 container registry event show

```
h1 container registry event show

  Get container/registry.event [Operation ID:                                   
  container_project_registry_event_get]                                         

Synopsis

  $ h1 container registry event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 container registry event show --project 5f64e2468c71177993874510         
  --registry 5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b          

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
  --registry id-or-uri   Registry Id                            
  --event id-or-uri      eventId                                
  --skeleton
```

