## h1 storage

```
h1 storage

Synopsis

  $ h1 storage <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context  
  disk       Management of disk resource     
  image      Management of image resource    
  iso        Management of iso resource      
  snapshot   Management of snapshot resource 
  vault      Management of vault resource
```

### h1 storage spec

```
h1 storage spec

  Print specification of context 

Synopsis

  $ h1 storage spec <options> 

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

### h1 storage disk

```
h1 storage disk

Synopsis

  $ h1 storage disk <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                        
  create     Create storage/disk [storage_project_disk_create]     
  list       List storage/disk [storage_project_disk_list]         
  show       Get storage/disk [storage_project_disk_get]           
  update     Update storage/disk [storage_project_disk_update]     
  delete     Delete storage/disk [storage_project_disk_delete]     
  resize     Resize storage/disk [storage_project_disk_resize]     
  download   Download storage/disk [storage_project_disk_download] 
  transfer   Transfer storage/disk [storage_project_disk_transfer] 
  service    Manage services of the disk                           
  tag        Manage tags of the disk                               
  event      Manage events of the disk
```

#### h1 storage disk spec

```
h1 storage disk spec

  Print specification of context 

Synopsis

  $ h1 storage disk spec <options> 

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

#### h1 storage disk create

```
h1 storage disk create

  Create storage/disk [storage_project_disk_create] 

Synopsis

  $ h1 storage disk create <options> 

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
  --name string                Disk name                                                                     
  --service id-or-uri          Disk service. Provide ID or URI of billing/service                            
  --size string                Disk size                                                                     
  --source id-or-uri           Disk source. Provide ID or URI of storage/disk. Requires permissions          
                               storage/disk/use                                                              
  --tag key=key,value=value    Tag collection
```

#### h1 storage disk list

```
h1 storage disk list

  List storage/disk [storage_project_disk_list] 

Synopsis

  $ h1 storage disk list <options> 

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

#### h1 storage disk show

```
h1 storage disk show

  Get storage/disk [storage_project_disk_get] 

Synopsis

  $ h1 storage disk show <options> 

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
  --disk id-or-uri       Disk Id
```

#### h1 storage disk update

```
h1 storage disk update

  Update storage/disk [storage_project_disk_update] 

Synopsis

  $ h1 storage disk update <options> 

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
  --disk id-or-uri       Disk Id                                                  
  --name string          Disk name. Requires permissions storage/disk.name/update
```

#### h1 storage disk delete

```
h1 storage disk delete

  Delete storage/disk [storage_project_disk_delete] 

Synopsis

  $ h1 storage disk delete <options> 

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
  --disk id-or-uri       Disk Id
```

#### h1 storage disk resize

```
h1 storage disk resize

  Resize storage/disk [storage_project_disk_resize] 

Synopsis

  $ h1 storage disk resize <options> 

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
  --disk id-or-uri             Disk Id         
  --x-idempotency-key string   Idempotency key 
  --size string                Disk size
```

#### h1 storage disk download

```
h1 storage disk download

  Download storage/disk [storage_project_disk_download] 

Synopsis

  $ h1 storage disk download <options> 

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
  --disk id-or-uri             Disk Id         
  --x-idempotency-key string   Idempotency key
```

#### h1 storage disk transfer

```
h1 storage disk transfer

  Transfer storage/disk [storage_project_disk_transfer] 

Synopsis

  $ h1 storage disk transfer <options> 

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
  --disk id-or-uri             Disk Id                                                                       
  --x-idempotency-key string   Idempotency key                                                               
  --project uri                Disk project. Provide URI of iam/project. Requires permissions                
                               storage/disk/create
```

#### h1 storage disk service

```
h1 storage disk service

Synopsis

  $ h1 storage disk service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                
  list   List storage/disk.service [storage_project_disk_service_list] 
  show   Get storage/disk.service [storage_project_disk_service_get]
```

##### h1 storage disk service spec

```
h1 storage disk service spec

  Print specification of context 

Synopsis

  $ h1 storage disk service spec <options> 

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

##### h1 storage disk service list

```
h1 storage disk service list

  List storage/disk.service [storage_project_disk_service_list] 

Synopsis

  $ h1 storage disk service list <options> 

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
  --disk id-or-uri       Disk Id
```

##### h1 storage disk service show

```
h1 storage disk service show

  Get storage/disk.service [storage_project_disk_service_get] 

Synopsis

  $ h1 storage disk service show <options> 

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
  --disk id-or-uri       Disk Id     
  --service id-or-uri    serviceId
```

#### h1 storage disk tag

```
h1 storage disk tag

Synopsis

  $ h1 storage disk tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                            
  create   Create storage/disk.tag [storage_project_disk_tag_create] 
  list     List storage/disk.tag [storage_project_disk_tag_list]     
  show     Get storage/disk.tag [storage_project_disk_tag_get]       
  delete   Delete storage/disk.tag [storage_project_disk_tag_delete]
```

##### h1 storage disk tag spec

```
h1 storage disk tag spec

  Print specification of context 

Synopsis

  $ h1 storage disk tag spec <options> 

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

##### h1 storage disk tag create

```
h1 storage disk tag create

  Create storage/disk.tag [storage_project_disk_tag_create] 

Synopsis

  $ h1 storage disk tag create <options> 

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
  --disk id-or-uri       Disk Id     
  --key string           Tag key     
  --value string         Tag value
```

##### h1 storage disk tag list

```
h1 storage disk tag list

  List storage/disk.tag [storage_project_disk_tag_list] 

Synopsis

  $ h1 storage disk tag list <options> 

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
  --disk id-or-uri       Disk Id
```

##### h1 storage disk tag show

```
h1 storage disk tag show

  Get storage/disk.tag [storage_project_disk_tag_get] 

Synopsis

  $ h1 storage disk tag show <options> 

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
  --disk id-or-uri       Disk Id     
  --tag id-or-uri        tagId
```

##### h1 storage disk tag delete

```
h1 storage disk tag delete

  Delete storage/disk.tag [storage_project_disk_tag_delete] 

Synopsis

  $ h1 storage disk tag delete <options> 

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
  --disk id-or-uri       Disk Id     
  --tag id-or-uri        tagId
```

#### h1 storage disk event

```
h1 storage disk event

Synopsis

  $ h1 storage disk event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                            
  list   List storage/disk.event [storage_project_disk_event_list]
```

##### h1 storage disk event spec

```
h1 storage disk event spec

  Print specification of context 

Synopsis

  $ h1 storage disk event spec <options> 

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

##### h1 storage disk event list

```
h1 storage disk event list

  List storage/disk.event [storage_project_disk_event_list] 

Synopsis

  $ h1 storage disk event list <options> 

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
  --disk id-or-uri       Disk Id     
  --$limit string        $limit      
  --$skip string         $skip
```

### h1 storage image

```
h1 storage image

Synopsis

  $ h1 storage image <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                          
  create     Create storage/image [storage_project_image_create]     
  list       List storage/image [storage_project_image_list]         
  show       Get storage/image [storage_project_image_get]           
  update     Update storage/image [storage_project_image_update]     
  delete     Delete storage/image [storage_project_image_delete]     
  transfer   Transfer storage/image [storage_project_image_transfer] 
  service    Manage services of the image                            
  tag        Manage tags of the image                                
  event      Manage events of the image
```

#### h1 storage image spec

```
h1 storage image spec

  Print specification of context 

Synopsis

  $ h1 storage image spec <options> 

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

#### h1 storage image create

```
h1 storage image create

  Create storage/image [storage_project_image_create] 

Synopsis

  $ h1 storage image create <options> 

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
  --name string                Image name                                                                    
  --service id-or-uri          Image service. Provide ID or URI of billing/service                           
  --vm id-or-uri               Image vm. Provide ID or URI of compute/vm. Requires permissions               
                               compute/vm/use                                                                
  --replica id-or-uri          Image replica. Provide ID or URI of compute/replica. Requires permissions     
                               compute/replica/use                                                           
  --description string         Image description                                                             
  --tag key=key,value=value    Tag collection
```

#### h1 storage image list

```
h1 storage image list

  List storage/image [storage_project_image_list] 

Synopsis

  $ h1 storage image list <options> 

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

#### h1 storage image show

```
h1 storage image show

  Get storage/image [storage_project_image_get] 

Synopsis

  $ h1 storage image show <options> 

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
  --image id-or-uri      Image Id
```

#### h1 storage image update

```
h1 storage image update

  Update storage/image [storage_project_image_update] 

Synopsis

  $ h1 storage image update <options> 

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
  --image id-or-uri      Image Id                                                                 
  --name string          Image name. Requires permissions storage/image.name/update               
  --description string   Image description. Requires permissions storage/image.description/update
```

#### h1 storage image delete

```
h1 storage image delete

  Delete storage/image [storage_project_image_delete] 

Synopsis

  $ h1 storage image delete <options> 

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
  --image id-or-uri      Image Id
```

#### h1 storage image transfer

```
h1 storage image transfer

  Transfer storage/image [storage_project_image_transfer] 

Synopsis

  $ h1 storage image transfer <options> 

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
  --image id-or-uri            Image Id                                                                      
  --x-idempotency-key string   Idempotency key                                                               
  --project uri                Image project. Provide URI of iam/project. Requires permissions               
                               storage/image/create
```

#### h1 storage image service

```
h1 storage image service

Synopsis

  $ h1 storage image service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                  
  list   List storage/image.service [storage_project_image_service_list] 
  show   Get storage/image.service [storage_project_image_service_get]
```

##### h1 storage image service spec

```
h1 storage image service spec

  Print specification of context 

Synopsis

  $ h1 storage image service spec <options> 

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

##### h1 storage image service list

```
h1 storage image service list

  List storage/image.service [storage_project_image_service_list] 

Synopsis

  $ h1 storage image service list <options> 

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
  --image id-or-uri      Image Id
```

##### h1 storage image service show

```
h1 storage image service show

  Get storage/image.service [storage_project_image_service_get] 

Synopsis

  $ h1 storage image service show <options> 

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
  --image id-or-uri      Image Id    
  --service id-or-uri    serviceId
```

#### h1 storage image tag

```
h1 storage image tag

Synopsis

  $ h1 storage image tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                              
  create   Create storage/image.tag [storage_project_image_tag_create] 
  list     List storage/image.tag [storage_project_image_tag_list]     
  show     Get storage/image.tag [storage_project_image_tag_get]       
  delete   Delete storage/image.tag [storage_project_image_tag_delete]
```

##### h1 storage image tag spec

```
h1 storage image tag spec

  Print specification of context 

Synopsis

  $ h1 storage image tag spec <options> 

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

##### h1 storage image tag create

```
h1 storage image tag create

  Create storage/image.tag [storage_project_image_tag_create] 

Synopsis

  $ h1 storage image tag create <options> 

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
  --image id-or-uri      Image Id    
  --key string           Tag key     
  --value string         Tag value
```

##### h1 storage image tag list

```
h1 storage image tag list

  List storage/image.tag [storage_project_image_tag_list] 

Synopsis

  $ h1 storage image tag list <options> 

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
  --image id-or-uri      Image Id
```

##### h1 storage image tag show

```
h1 storage image tag show

  Get storage/image.tag [storage_project_image_tag_get] 

Synopsis

  $ h1 storage image tag show <options> 

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
  --image id-or-uri      Image Id    
  --tag id-or-uri        tagId
```

##### h1 storage image tag delete

```
h1 storage image tag delete

  Delete storage/image.tag [storage_project_image_tag_delete] 

Synopsis

  $ h1 storage image tag delete <options> 

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
  --image id-or-uri      Image Id    
  --tag id-or-uri        tagId
```

#### h1 storage image event

```
h1 storage image event

Synopsis

  $ h1 storage image event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                              
  list   List storage/image.event [storage_project_image_event_list]
```

##### h1 storage image event spec

```
h1 storage image event spec

  Print specification of context 

Synopsis

  $ h1 storage image event spec <options> 

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

##### h1 storage image event list

```
h1 storage image event list

  List storage/image.event [storage_project_image_event_list] 

Synopsis

  $ h1 storage image event list <options> 

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
  --image id-or-uri      Image Id    
  --$limit string        $limit      
  --$skip string         $skip
```

### h1 storage iso

```
h1 storage iso

Synopsis

  $ h1 storage iso <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                      
  create     Create storage/iso [storage_project_iso_create]     
  list       List storage/iso [storage_project_iso_list]         
  show       Get storage/iso [storage_project_iso_get]           
  update     Update storage/iso [storage_project_iso_update]     
  delete     Delete storage/iso [storage_project_iso_delete]     
  transfer   Transfer storage/iso [storage_project_iso_transfer] 
  service    Manage services of the iso                          
  tag        Manage tags of the iso                              
  event      Manage events of the iso
```

#### h1 storage iso spec

```
h1 storage iso spec

  Print specification of context 

Synopsis

  $ h1 storage iso spec <options> 

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

#### h1 storage iso create

```
h1 storage iso create

  Create storage/iso [storage_project_iso_create] 

Synopsis

  $ h1 storage iso create <options> 

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
  --name string                Iso name                                          
  --service id-or-uri          Iso service. Provide ID or URI of billing/service 
  --size string                Iso size                                          
  --source string              Iso source                                        
  --tag key=key,value=value    Tag collection
```

#### h1 storage iso list

```
h1 storage iso list

  List storage/iso [storage_project_iso_list] 

Synopsis

  $ h1 storage iso list <options> 

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

#### h1 storage iso show

```
h1 storage iso show

  Get storage/iso [storage_project_iso_get] 

Synopsis

  $ h1 storage iso show <options> 

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
  --iso id-or-uri        Iso Id
```

#### h1 storage iso update

```
h1 storage iso update

  Update storage/iso [storage_project_iso_update] 

Synopsis

  $ h1 storage iso update <options> 

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
  --iso id-or-uri        Iso Id                                                 
  --name string          Iso name. Requires permissions storage/iso.name/update
```

#### h1 storage iso delete

```
h1 storage iso delete

  Delete storage/iso [storage_project_iso_delete] 

Synopsis

  $ h1 storage iso delete <options> 

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
  --iso id-or-uri        Iso Id
```

#### h1 storage iso transfer

```
h1 storage iso transfer

  Transfer storage/iso [storage_project_iso_transfer] 

Synopsis

  $ h1 storage iso transfer <options> 

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
  --iso id-or-uri              Iso Id                                                                        
  --x-idempotency-key string   Idempotency key                                                               
  --project uri                Iso project. Provide URI of iam/project. Requires permissions                 
                               storage/iso/create
```

#### h1 storage iso service

```
h1 storage iso service

Synopsis

  $ h1 storage iso service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                              
  list   List storage/iso.service [storage_project_iso_service_list] 
  show   Get storage/iso.service [storage_project_iso_service_get]
```

##### h1 storage iso service spec

```
h1 storage iso service spec

  Print specification of context 

Synopsis

  $ h1 storage iso service spec <options> 

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

##### h1 storage iso service list

```
h1 storage iso service list

  List storage/iso.service [storage_project_iso_service_list] 

Synopsis

  $ h1 storage iso service list <options> 

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
  --iso id-or-uri        Iso Id
```

##### h1 storage iso service show

```
h1 storage iso service show

  Get storage/iso.service [storage_project_iso_service_get] 

Synopsis

  $ h1 storage iso service show <options> 

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
  --iso id-or-uri        Iso Id      
  --service id-or-uri    serviceId
```

#### h1 storage iso tag

```
h1 storage iso tag

Synopsis

  $ h1 storage iso tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                          
  create   Create storage/iso.tag [storage_project_iso_tag_create] 
  list     List storage/iso.tag [storage_project_iso_tag_list]     
  show     Get storage/iso.tag [storage_project_iso_tag_get]       
  delete   Delete storage/iso.tag [storage_project_iso_tag_delete]
```

##### h1 storage iso tag spec

```
h1 storage iso tag spec

  Print specification of context 

Synopsis

  $ h1 storage iso tag spec <options> 

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

##### h1 storage iso tag create

```
h1 storage iso tag create

  Create storage/iso.tag [storage_project_iso_tag_create] 

Synopsis

  $ h1 storage iso tag create <options> 

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
  --iso id-or-uri        Iso Id      
  --key string           Tag key     
  --value string         Tag value
```

##### h1 storage iso tag list

```
h1 storage iso tag list

  List storage/iso.tag [storage_project_iso_tag_list] 

Synopsis

  $ h1 storage iso tag list <options> 

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
  --iso id-or-uri        Iso Id
```

##### h1 storage iso tag show

```
h1 storage iso tag show

  Get storage/iso.tag [storage_project_iso_tag_get] 

Synopsis

  $ h1 storage iso tag show <options> 

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
  --iso id-or-uri        Iso Id      
  --tag id-or-uri        tagId
```

##### h1 storage iso tag delete

```
h1 storage iso tag delete

  Delete storage/iso.tag [storage_project_iso_tag_delete] 

Synopsis

  $ h1 storage iso tag delete <options> 

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
  --iso id-or-uri        Iso Id      
  --tag id-or-uri        tagId
```

#### h1 storage iso event

```
h1 storage iso event

Synopsis

  $ h1 storage iso event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                          
  list   List storage/iso.event [storage_project_iso_event_list]
```

##### h1 storage iso event spec

```
h1 storage iso event spec

  Print specification of context 

Synopsis

  $ h1 storage iso event spec <options> 

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

##### h1 storage iso event list

```
h1 storage iso event list

  List storage/iso.event [storage_project_iso_event_list] 

Synopsis

  $ h1 storage iso event list <options> 

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
  --iso id-or-uri        Iso Id      
  --$limit string        $limit      
  --$skip string         $skip
```

### h1 storage snapshot

```
h1 storage snapshot

Synopsis

  $ h1 storage snapshot <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                            
  create    Create storage/snapshot [storage_project_snapshot_create] 
  list      List storage/snapshot [storage_project_snapshot_list]     
  show      Get storage/snapshot [storage_project_snapshot_get]       
  update    Update storage/snapshot [storage_project_snapshot_update] 
  delete    Delete storage/snapshot [storage_project_snapshot_delete] 
  service   Manage services of the snapshot                           
  tag       Manage tags of the snapshot                               
  event     Manage events of the snapshot
```

#### h1 storage snapshot spec

```
h1 storage snapshot spec

  Print specification of context 

Synopsis

  $ h1 storage snapshot spec <options> 

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

#### h1 storage snapshot create

```
h1 storage snapshot create

  Create storage/snapshot [storage_project_snapshot_create] 

Synopsis

  $ h1 storage snapshot create <options> 

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
  --name string                Snapshot name                                                                 
  --service id-or-uri          Snapshot service. Provide ID or URI of billing/service                        
  --vault id-or-uri            Snapshot vault. Provide ID or URI of storage/vault. Requires permissions      
                               storage/vault.snapshot/create                                                 
  --tag key=key,value=value    Tag collection
```

#### h1 storage snapshot list

```
h1 storage snapshot list

  List storage/snapshot [storage_project_snapshot_list] 

Synopsis

  $ h1 storage snapshot list <options> 

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
  --vault string         Filter by vault     
  --tag.value string     Filter by tag.value 
  --tag.key string       Filter by tag.key
```

#### h1 storage snapshot show

```
h1 storage snapshot show

  Get storage/snapshot [storage_project_snapshot_get] 

Synopsis

  $ h1 storage snapshot show <options> 

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
  --snapshot id-or-uri   Snapshot Id
```

#### h1 storage snapshot update

```
h1 storage snapshot update

  Update storage/snapshot [storage_project_snapshot_update] 

Synopsis

  $ h1 storage snapshot update <options> 

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
  --snapshot id-or-uri   Snapshot Id                                                      
  --name string          Snapshot name. Requires permissions storage/snapshot.name/update
```

#### h1 storage snapshot delete

```
h1 storage snapshot delete

  Delete storage/snapshot [storage_project_snapshot_delete] 

Synopsis

  $ h1 storage snapshot delete <options> 

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
  --snapshot id-or-uri   Snapshot Id
```

#### h1 storage snapshot service

```
h1 storage snapshot service

Synopsis

  $ h1 storage snapshot service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                        
  list   List storage/snapshot.service [storage_project_snapshot_service_list] 
  show   Get storage/snapshot.service [storage_project_snapshot_service_get]
```

##### h1 storage snapshot service spec

```
h1 storage snapshot service spec

  Print specification of context 

Synopsis

  $ h1 storage snapshot service spec <options> 

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

##### h1 storage snapshot service list

```
h1 storage snapshot service list

  List storage/snapshot.service [storage_project_snapshot_service_list] 

Synopsis

  $ h1 storage snapshot service list <options> 

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
  --snapshot id-or-uri   Snapshot Id
```

##### h1 storage snapshot service show

```
h1 storage snapshot service show

  Get storage/snapshot.service [storage_project_snapshot_service_get] 

Synopsis

  $ h1 storage snapshot service show <options> 

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
  --snapshot id-or-uri   Snapshot Id 
  --service id-or-uri    serviceId
```

#### h1 storage snapshot tag

```
h1 storage snapshot tag

Synopsis

  $ h1 storage snapshot tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                    
  create   Create storage/snapshot.tag [storage_project_snapshot_tag_create] 
  list     List storage/snapshot.tag [storage_project_snapshot_tag_list]     
  show     Get storage/snapshot.tag [storage_project_snapshot_tag_get]       
  delete   Delete storage/snapshot.tag [storage_project_snapshot_tag_delete]
```

##### h1 storage snapshot tag spec

```
h1 storage snapshot tag spec

  Print specification of context 

Synopsis

  $ h1 storage snapshot tag spec <options> 

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

##### h1 storage snapshot tag create

```
h1 storage snapshot tag create

  Create storage/snapshot.tag [storage_project_snapshot_tag_create] 

Synopsis

  $ h1 storage snapshot tag create <options> 

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
  --snapshot id-or-uri   Snapshot Id 
  --key string           Tag key     
  --value string         Tag value
```

##### h1 storage snapshot tag list

```
h1 storage snapshot tag list

  List storage/snapshot.tag [storage_project_snapshot_tag_list] 

Synopsis

  $ h1 storage snapshot tag list <options> 

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
  --snapshot id-or-uri   Snapshot Id
```

##### h1 storage snapshot tag show

```
h1 storage snapshot tag show

  Get storage/snapshot.tag [storage_project_snapshot_tag_get] 

Synopsis

  $ h1 storage snapshot tag show <options> 

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
  --snapshot id-or-uri   Snapshot Id 
  --tag id-or-uri        tagId
```

##### h1 storage snapshot tag delete

```
h1 storage snapshot tag delete

  Delete storage/snapshot.tag [storage_project_snapshot_tag_delete] 

Synopsis

  $ h1 storage snapshot tag delete <options> 

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
  --snapshot id-or-uri   Snapshot Id 
  --tag id-or-uri        tagId
```

#### h1 storage snapshot event

```
h1 storage snapshot event

Synopsis

  $ h1 storage snapshot event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                    
  list   List storage/snapshot.event [storage_project_snapshot_event_list]
```

##### h1 storage snapshot event spec

```
h1 storage snapshot event spec

  Print specification of context 

Synopsis

  $ h1 storage snapshot event spec <options> 

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

##### h1 storage snapshot event list

```
h1 storage snapshot event list

  List storage/snapshot.event [storage_project_snapshot_event_list] 

Synopsis

  $ h1 storage snapshot event list <options> 

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
  --snapshot id-or-uri   Snapshot Id 
  --$limit string        $limit      
  --$skip string         $skip
```

### h1 storage vault

```
h1 storage vault

Synopsis

  $ h1 storage vault <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                          
  create       Create storage/vault [storage_project_vault_create]     
  list         List storage/vault [storage_project_vault_list]         
  show         Get storage/vault [storage_project_vault_get]           
  update       Update storage/vault [storage_project_vault_update]     
  delete       Delete storage/vault [storage_project_vault_delete]     
  start        Start storage/vault [storage_project_vault_start]       
  stop         Stop storage/vault [storage_project_vault_stop]         
  resize       Resize storage/vault [storage_project_vault_resize]     
  snapshot     Snapshot storage/vault [storage_project_vault_snapshot] 
  credential   Manage credentials of the vault                         
  service      Manage services of the vault                            
  tag          Manage tags of the vault                                
  event        Manage events of the vault                              
  ssh          Connect to storage/vault using SSH                      
  sftp         Connect to storage/vault using SFTP
```

#### h1 storage vault spec

```
h1 storage vault spec

  Print specification of context 

Synopsis

  $ h1 storage vault spec <options> 

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

#### h1 storage vault create

```
h1 storage vault create

  Create storage/vault [storage_project_vault_create] 

Synopsis

  $ h1 storage vault create <options> 

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
  --name string                Vault name                                                                    
  --service id-or-uri          Vault service. Provide ID or URI of billing/service                           
  --size string                Vault size                                                                    
  --snapshot id-or-uri         Vault snapshot. Provide ID or URI of storage/snapshot. Requires permissions   
                               storage/vault.snapshot/use                                                    
  --tag key=key,value=value    Tag collection
```

#### h1 storage vault list

```
h1 storage vault list

  List storage/vault [storage_project_vault_list] 

Synopsis

  $ h1 storage vault list <options> 

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

#### h1 storage vault show

```
h1 storage vault show

  Get storage/vault [storage_project_vault_get] 

Synopsis

  $ h1 storage vault show <options> 

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
  --vault id-or-uri      Vault Id
```

#### h1 storage vault update

```
h1 storage vault update

  Update storage/vault [storage_project_vault_update] 

Synopsis

  $ h1 storage vault update <options> 

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
  --vault id-or-uri      Vault Id                                                   
  --name string          Vault name. Requires permissions storage/vault.name/update
```

#### h1 storage vault delete

```
h1 storage vault delete

  Delete storage/vault [storage_project_vault_delete] 

Synopsis

  $ h1 storage vault delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri            Project Id               
  --location id-or-uri           Location Id              
  --vault id-or-uri              Vault Id                 
  --remove-allsnapshots string   Vault removeAllSnapshots
```

#### h1 storage vault start

```
h1 storage vault start

  Start storage/vault [storage_project_vault_start] 

Synopsis

  $ h1 storage vault start <options> 

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
  --vault id-or-uri            Vault Id        
  --x-idempotency-key string   Idempotency key
```

#### h1 storage vault stop

```
h1 storage vault stop

  Stop storage/vault [storage_project_vault_stop] 

Synopsis

  $ h1 storage vault stop <options> 

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
  --vault id-or-uri            Vault Id        
  --x-idempotency-key string   Idempotency key
```

#### h1 storage vault resize

```
h1 storage vault resize

  Resize storage/vault [storage_project_vault_resize] 

Synopsis

  $ h1 storage vault resize <options> 

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
  --vault id-or-uri            Vault Id        
  --x-idempotency-key string   Idempotency key 
  --size string                Vault size
```

#### h1 storage vault snapshot

```
h1 storage vault snapshot

  Snapshot storage/vault [storage_project_vault_snapshot] 

Synopsis

  $ h1 storage vault snapshot <options> 

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
  --vault id-or-uri            Vault Id                                            
  --x-idempotency-key string   Idempotency key                                     
  --name string                Vault name                                          
  --service id-or-uri          Vault service. Provide ID or URI of billing/service
```

#### h1 storage vault credential

```
h1 storage vault credential

Synopsis

  $ h1 storage vault credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                            
  create   Create storage/vault.credential [storage_project_vault_credential_create] 
  list     List storage/vault.credential [storage_project_vault_credential_list]     
  show     Get storage/vault.credential [storage_project_vault_credential_get]       
  update   Update storage/vault.credential [storage_project_vault_credential_patch]  
  delete   Delete storage/vault.credential [storage_project_vault_credential_delete]
```

##### h1 storage vault credential spec

```
h1 storage vault credential spec

  Print specification of context 

Synopsis

  $ h1 storage vault credential spec <options> 

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

##### h1 storage vault credential create

```
h1 storage vault credential create

  Create storage/vault.credential [storage_project_vault_credential_create] 

Synopsis

  $ h1 storage vault credential create <options> 

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
  --vault id-or-uri      Vault Id         
  --name string          Credential name  
  --type string          Credential type  
  --value string         Credential value 
  --token string         Credential token
```

##### h1 storage vault credential list

```
h1 storage vault credential list

  List storage/vault.credential [storage_project_vault_credential_list] 

Synopsis

  $ h1 storage vault credential list <options> 

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
  --vault id-or-uri      Vault Id
```

##### h1 storage vault credential show

```
h1 storage vault credential show

  Get storage/vault.credential [storage_project_vault_credential_get] 

Synopsis

  $ h1 storage vault credential show <options> 

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
  --vault id-or-uri        Vault Id     
  --credential id-or-uri   credentialId
```

##### h1 storage vault credential update

```
h1 storage vault credential update

  Update storage/vault.credential [storage_project_vault_credential_patch] 

Synopsis

  $ h1 storage vault credential update <options> 

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
  --vault id-or-uri        Vault Id                                                                   
  --credential id-or-uri   credentialId                                                               
  --name string            Credential name. Requires permissions storage/vault.credential.name/update
```

##### h1 storage vault credential delete

```
h1 storage vault credential delete

  Delete storage/vault.credential [storage_project_vault_credential_delete] 

Synopsis

  $ h1 storage vault credential delete <options> 

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
  --vault id-or-uri        Vault Id     
  --credential id-or-uri   credentialId
```

#### h1 storage vault service

```
h1 storage vault service

Synopsis

  $ h1 storage vault service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                  
  list   List storage/vault.service [storage_project_vault_service_list] 
  show   Get storage/vault.service [storage_project_vault_service_get]
```

##### h1 storage vault service spec

```
h1 storage vault service spec

  Print specification of context 

Synopsis

  $ h1 storage vault service spec <options> 

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

##### h1 storage vault service list

```
h1 storage vault service list

  List storage/vault.service [storage_project_vault_service_list] 

Synopsis

  $ h1 storage vault service list <options> 

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
  --vault id-or-uri      Vault Id
```

##### h1 storage vault service show

```
h1 storage vault service show

  Get storage/vault.service [storage_project_vault_service_get] 

Synopsis

  $ h1 storage vault service show <options> 

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
  --vault id-or-uri      Vault Id    
  --service id-or-uri    serviceId
```

#### h1 storage vault tag

```
h1 storage vault tag

Synopsis

  $ h1 storage vault tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                              
  create   Create storage/vault.tag [storage_project_vault_tag_create] 
  list     List storage/vault.tag [storage_project_vault_tag_list]     
  show     Get storage/vault.tag [storage_project_vault_tag_get]       
  delete   Delete storage/vault.tag [storage_project_vault_tag_delete]
```

##### h1 storage vault tag spec

```
h1 storage vault tag spec

  Print specification of context 

Synopsis

  $ h1 storage vault tag spec <options> 

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

##### h1 storage vault tag create

```
h1 storage vault tag create

  Create storage/vault.tag [storage_project_vault_tag_create] 

Synopsis

  $ h1 storage vault tag create <options> 

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
  --vault id-or-uri      Vault Id    
  --key string           Tag key     
  --value string         Tag value
```

##### h1 storage vault tag list

```
h1 storage vault tag list

  List storage/vault.tag [storage_project_vault_tag_list] 

Synopsis

  $ h1 storage vault tag list <options> 

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
  --vault id-or-uri      Vault Id
```

##### h1 storage vault tag show

```
h1 storage vault tag show

  Get storage/vault.tag [storage_project_vault_tag_get] 

Synopsis

  $ h1 storage vault tag show <options> 

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
  --vault id-or-uri      Vault Id    
  --tag id-or-uri        tagId
```

##### h1 storage vault tag delete

```
h1 storage vault tag delete

  Delete storage/vault.tag [storage_project_vault_tag_delete] 

Synopsis

  $ h1 storage vault tag delete <options> 

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
  --vault id-or-uri      Vault Id    
  --tag id-or-uri        tagId
```

#### h1 storage vault event

```
h1 storage vault event

Synopsis

  $ h1 storage vault event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                              
  list   List storage/vault.event [storage_project_vault_event_list]
```

##### h1 storage vault event spec

```
h1 storage vault event spec

  Print specification of context 

Synopsis

  $ h1 storage vault event spec <options> 

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

##### h1 storage vault event list

```
h1 storage vault event list

  List storage/vault.event [storage_project_vault_event_list] 

Synopsis

  $ h1 storage vault event list <options> 

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
  --vault id-or-uri      Vault Id    
  --$limit string        $limit      
  --$skip string         $skip
```

#### h1 storage vault ssh

```
h1 storage vault ssh

  Connect to storage/vault using SSH 

Synopsis

  $ h1 storage vault ssh <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --vault string      
  --project string
```

#### h1 storage vault sftp

```
h1 storage vault sftp

  Connect to storage/vault using SFTP 

Synopsis

  $ h1 storage vault sftp <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --vault string      
  --project string
```

