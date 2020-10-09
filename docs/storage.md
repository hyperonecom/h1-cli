## h1 storage

```
h1 storage

Synopsis

  $ h1 storage <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  disk    Management of disk resource  
  image   Management of image resource 
  iso     Management of iso resource   
  vault   Management of vault resource
```

### h1 storage disk

```
h1 storage disk

Synopsis

  $ h1 storage disk <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create     Create storage/disk [Operation ID: storage_project_disk_create]     
  list       List storage/disk [Operation ID: storage_project_disk_list]         
  show       Get storage/disk [Operation ID: storage_project_disk_get]           
  update     Update storage/disk [Operation ID: storage_project_disk_update]     
  delete     Delete storage/disk [Operation ID: storage_project_disk_delete]     
  resize     Resize storage/disk [Operation ID: storage_project_disk_resize]     
  attach     Attach storage/disk [Operation ID: storage_project_disk_attach]     
  detach     Detach storage/disk [Operation ID: storage_project_disk_detach]     
  download   Download storage/disk [Operation ID: storage_project_disk_download] 
  transfer   Transfer storage/disk [Operation ID: storage_project_disk_transfer] 
  service    Manage services of the disk                                         
  tag        Manage tags of the disk                                             
  event      Manage events of the disk
```

#### h1 storage disk create

```
h1 storage disk create

  Create storage/disk [Operation ID: storage_project_disk_create] 

Synopsis

  $ h1 storage disk create <options> 

Examples

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk create --project 5f64e2468c71177993874510 --name simple-    
  disk --service /billing/project/platform/service/562fb685a3e575771b599091     
  --size 5                                                                      
                                                                                
                                                                                
  Clone disk                                                                    
                                                                                
  $ h1 storage disk create --project 5f64e2468c71177993874510 --name simple-    
  disk --service /billing/project/platform/service/562fb685a3e575771b599091     
  --size 5 --source /storage/pl-waw-                                            
  1/project/5f64e2468c71177993874510/disk/5f577a24494c5cfdec7830e5              

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
  --name string                Disk name                                                      
  --service id-or-uri          Disk service. Provide ID or URI of billing/service             
  --size string                Disk size                                                      
  --source string              Disk source. Specifies one of the following:                   
                               - disk. Provide ID or URI of storage/disk                      
                               - file. Provide URI of local file eg. 'file://./my-file.bin'.  
  --vm id-or-uri               Disk vm. Provide ID or URI of compute/vm. Requires permissions 
                               compute/vm/use                                                 
  --tag key=key,value=value    Tag collection                                                 
  --no-progress                                                                               
  --skeleton
```

#### h1 storage disk list

```
h1 storage disk list

  List storage/disk [Operation ID: storage_project_disk_list] 

Synopsis

  $ h1 storage disk list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk list --project 5f64e2468c71177993874510                     

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
  --vm string            Filter by vm        
  --tag.value string     Filter by tag.value 
  --tag.key string       Filter by tag.key   
  --skeleton
```

#### h1 storage disk show

```
h1 storage disk show

  Get storage/disk [Operation ID: storage_project_disk_get] 

Synopsis

  $ h1 storage disk show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk show --project 5f64e2468c71177993874510 --disk              
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
  --disk id-or-uri       Disk Id     
  --skeleton
```

#### h1 storage disk update

```
h1 storage disk update

  Update storage/disk [Operation ID: storage_project_disk_update] 

Synopsis

  $ h1 storage disk update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 storage disk update --project 5f64e2468c71177993874510 --disk            
  5f577a24494c5cfdec7830e5 --name disk-renamed                                  

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
  --disk id-or-uri       Disk Id                                                  
  --name string          Disk name. Requires permissions storage/disk.name/update 
  --skeleton
```

#### h1 storage disk delete

```
h1 storage disk delete

  Delete storage/disk [Operation ID: storage_project_disk_delete] 

Synopsis

  $ h1 storage disk delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk delete --project 5f64e2468c71177993874510 --disk            
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
  --disk id-or-uri       Disk Id     
  --skeleton
```

#### h1 storage disk resize

```
h1 storage disk resize

  Resize storage/disk [Operation ID: storage_project_disk_resize] 

Synopsis

  $ h1 storage disk resize <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk resize --project 5f64e2468c71177993874510 --disk            
  5f577a24494c5cfdec7830e5 --size 10                                            

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
  --disk id-or-uri             Disk Id         
  --x-idempotency-key string   Idempotency key 
  --size string                Disk size       
  --skeleton
```

#### h1 storage disk attach

```
h1 storage disk attach

  Attach storage/disk [Operation ID: storage_project_disk_attach] 

Synopsis

  $ h1 storage disk attach <options> 

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
  --disk id-or-uri             Disk Id                                                        
  --x-idempotency-key string   Idempotency key                                                
  --vm id-or-uri               Disk vm. Provide ID or URI of compute/vm. Requires permissions 
                               compute/vm/use                                                 
  --skeleton
```

#### h1 storage disk detach

```
h1 storage disk detach

  Detach storage/disk [Operation ID: storage_project_disk_detach] 

Synopsis

  $ h1 storage disk detach <options> 

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
  --disk id-or-uri             Disk Id         
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 storage disk download

```
h1 storage disk download

  Download storage/disk [Operation ID: storage_project_disk_download] 

Synopsis

  $ h1 storage disk download <options> 

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
  --disk id-or-uri             Disk Id         
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 storage disk transfer

```
h1 storage disk transfer

  Transfer storage/disk [Operation ID: storage_project_disk_transfer] 

Synopsis

  $ h1 storage disk transfer <options> 

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
  --disk id-or-uri             Disk Id                                                        
  --x-idempotency-key string   Idempotency key                                                
  --project id-or-uri          Disk project. Provide ID or URI of iam/project. Requires       
                               permissions storage/disk/create                                
  --skeleton
```

#### h1 storage disk service

```
h1 storage disk service

Synopsis

  $ h1 storage disk service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List storage/disk.service [Operation ID: storage_project_disk_service_list] 
  show   Get storage/disk.service [Operation ID: storage_project_disk_service_get]
```

##### h1 storage disk service list

```
h1 storage disk service list

  List storage/disk.service [Operation ID: storage_project_disk_service_list] 

Synopsis

  $ h1 storage disk service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk service list --project 5f64e2468c71177993874510 --disk      
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
  --disk id-or-uri       Disk Id     
  --skeleton
```

##### h1 storage disk service show

```
h1 storage disk service show

  Get storage/disk.service [Operation ID: storage_project_disk_service_get] 

Synopsis

  $ h1 storage disk service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk service show --project 5f64e2468c71177993874510 --disk      
  5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b                   

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
  --disk id-or-uri       Disk Id     
  --service id-or-uri    serviceId   
  --skeleton
```

#### h1 storage disk tag

```
h1 storage disk tag

Synopsis

  $ h1 storage disk tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create storage/disk.tag [Operation ID: storage_project_disk_tag_create] 
  list     List storage/disk.tag [Operation ID: storage_project_disk_tag_list]     
  show     Get storage/disk.tag [Operation ID: storage_project_disk_tag_get]       
  delete   Delete storage/disk.tag [Operation ID: storage_project_disk_tag_delete]
```

##### h1 storage disk tag create

```
h1 storage disk tag create

  Create storage/disk.tag [Operation ID: storage_project_disk_tag_create] 

Synopsis

  $ h1 storage disk tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk tag create --project 5f64e2468c71177993874510 --disk        
  5f577a24494c5cfdec7830e5 --key x --value x                                    

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
  --disk id-or-uri       Disk Id     
  --key string           Tag key     
  --value string         Tag value   
  --skeleton
```

##### h1 storage disk tag list

```
h1 storage disk tag list

  List storage/disk.tag [Operation ID: storage_project_disk_tag_list] 

Synopsis

  $ h1 storage disk tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk tag list --project 5f64e2468c71177993874510 --disk          
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
  --disk id-or-uri       Disk Id     
  --skeleton
```

##### h1 storage disk tag show

```
h1 storage disk tag show

  Get storage/disk.tag [Operation ID: storage_project_disk_tag_get] 

Synopsis

  $ h1 storage disk tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk tag show --project 5f64e2468c71177993874510 --disk          
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
  --disk id-or-uri       Disk Id     
  --tag id-or-uri        tagId       
  --skeleton
```

##### h1 storage disk tag delete

```
h1 storage disk tag delete

  Delete storage/disk.tag [Operation ID: storage_project_disk_tag_delete] 

Synopsis

  $ h1 storage disk tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk tag delete --project 5f64e2468c71177993874510 --disk        
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
  --disk id-or-uri       Disk Id     
  --tag id-or-uri        tagId       
  --skeleton
```

#### h1 storage disk event

```
h1 storage disk event

Synopsis

  $ h1 storage disk event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List storage/disk.event [Operation ID: storage_project_disk_event_list] 
  show   Get storage/disk.event [Operation ID: storage_project_disk_event_get]
```

##### h1 storage disk event list

```
h1 storage disk event list

  List storage/disk.event [Operation ID: storage_project_disk_event_list] 

Synopsis

  $ h1 storage disk event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk event list --project 5f64e2468c71177993874510 --disk        
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
  --disk id-or-uri       Disk Id     
  --$limit string        $limit      
  --$skip string         $skip       
  --skeleton
```

##### h1 storage disk event show

```
h1 storage disk event show

  Get storage/disk.event [Operation ID: storage_project_disk_event_get] 

Synopsis

  $ h1 storage disk event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage disk event show --project 5f64e2468c71177993874510 --disk        
  5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b                     

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
  --disk id-or-uri       Disk Id     
  --event id-or-uri      eventId     
  --skeleton
```

### h1 storage image

```
h1 storage image

Synopsis

  $ h1 storage image <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create     Create storage/image [Operation ID: storage_project_image_create]     
  list       List storage/image [Operation ID: storage_project_image_list]         
  show       Get storage/image [Operation ID: storage_project_image_get]           
  update     Update storage/image [Operation ID: storage_project_image_update]     
  delete     Delete storage/image [Operation ID: storage_project_image_delete]     
  transfer   Transfer storage/image [Operation ID: storage_project_image_transfer] 
  disk       Manage disks of the image                                             
  service    Manage services of the image                                          
  tag        Manage tags of the image                                              
  event      Manage events of the image
```

#### h1 storage image create

```
h1 storage image create

  Create storage/image [Operation ID: storage_project_image_create] 

Synopsis

  $ h1 storage image create <options> 

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
  --name string                Image name                                                     
  --service id-or-uri          Image service. Provide ID or URI of billing/service. Defaults  
                               is 564639bc052c084e2f2e3266                                    
  --vm id-or-uri               Image vm. Provide ID or URI of compute/vm. Requires            
                               permissions compute/vm/use                                     
  --replica id-or-uri          Image replica. Provide ID or URI of compute/replica. Requires  
                               permissions compute/replica/use                                
  --description string         Image description                                              
  --tag key=key,value=value    Tag collection                                                 
  --skeleton
```

#### h1 storage image list

```
h1 storage image list

  List storage/image [Operation ID: storage_project_image_list] 

Synopsis

  $ h1 storage image list <options> 

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

#### h1 storage image show

```
h1 storage image show

  Get storage/image [Operation ID: storage_project_image_get] 

Synopsis

  $ h1 storage image show <options> 

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
  --image id-or-uri      Image Id    
  --skeleton
```

#### h1 storage image update

```
h1 storage image update

  Update storage/image [Operation ID: storage_project_image_update] 

Synopsis

  $ h1 storage image update <options> 

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
  --image id-or-uri      Image Id                                                             
  --name string          Image name. Requires permissions storage/image.name/update           
  --description string   Image description. Requires permissions                              
                         storage/image.description/update                                     
  --skeleton
```

#### h1 storage image delete

```
h1 storage image delete

  Delete storage/image [Operation ID: storage_project_image_delete] 

Synopsis

  $ h1 storage image delete <options> 

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
  --image id-or-uri      Image Id    
  --skeleton
```

#### h1 storage image transfer

```
h1 storage image transfer

  Transfer storage/image [Operation ID: storage_project_image_transfer] 

Synopsis

  $ h1 storage image transfer <options> 

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
  --image id-or-uri            Image Id                                                       
  --x-idempotency-key string   Idempotency key                                                
  --project id-or-uri          Image project. Provide ID or URI of iam/project. Requires      
                               permissions storage/image/create                               
  --skeleton
```

#### h1 storage image disk

```
h1 storage image disk

Synopsis

  $ h1 storage image disk <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List storage/image.disk [Operation ID: storage_project_image_disk_list]
```

##### h1 storage image disk list

```
h1 storage image disk list

  List storage/image.disk [Operation ID: storage_project_image_disk_list] 

Synopsis

  $ h1 storage image disk list <options> 

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
  --image id-or-uri      Image Id    
  --skeleton
```

#### h1 storage image service

```
h1 storage image service

Synopsis

  $ h1 storage image service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List storage/image.service [Operation ID: storage_project_image_service_list] 
  show   Get storage/image.service [Operation ID: storage_project_image_service_get]
```

##### h1 storage image service list

```
h1 storage image service list

  List storage/image.service [Operation ID: storage_project_image_service_list] 

Synopsis

  $ h1 storage image service list <options> 

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
  --image id-or-uri      Image Id    
  --skeleton
```

##### h1 storage image service show

```
h1 storage image service show

  Get storage/image.service [Operation ID: storage_project_image_service_get] 

Synopsis

  $ h1 storage image service show <options> 

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
  --image id-or-uri      Image Id    
  --service id-or-uri    serviceId   
  --skeleton
```

#### h1 storage image tag

```
h1 storage image tag

Synopsis

  $ h1 storage image tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create storage/image.tag [Operation ID: storage_project_image_tag_create] 
  list     List storage/image.tag [Operation ID: storage_project_image_tag_list]     
  show     Get storage/image.tag [Operation ID: storage_project_image_tag_get]       
  delete   Delete storage/image.tag [Operation ID: storage_project_image_tag_delete]
```

##### h1 storage image tag create

```
h1 storage image tag create

  Create storage/image.tag [Operation ID: storage_project_image_tag_create] 

Synopsis

  $ h1 storage image tag create <options> 

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
  --image id-or-uri      Image Id    
  --key string           Tag key     
  --value string         Tag value   
  --skeleton
```

##### h1 storage image tag list

```
h1 storage image tag list

  List storage/image.tag [Operation ID: storage_project_image_tag_list] 

Synopsis

  $ h1 storage image tag list <options> 

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
  --image id-or-uri      Image Id    
  --skeleton
```

##### h1 storage image tag show

```
h1 storage image tag show

  Get storage/image.tag [Operation ID: storage_project_image_tag_get] 

Synopsis

  $ h1 storage image tag show <options> 

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
  --image id-or-uri      Image Id    
  --tag id-or-uri        tagId       
  --skeleton
```

##### h1 storage image tag delete

```
h1 storage image tag delete

  Delete storage/image.tag [Operation ID: storage_project_image_tag_delete] 

Synopsis

  $ h1 storage image tag delete <options> 

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
  --image id-or-uri      Image Id    
  --tag id-or-uri        tagId       
  --skeleton
```

#### h1 storage image event

```
h1 storage image event

Synopsis

  $ h1 storage image event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List storage/image.event [Operation ID: storage_project_image_event_list] 
  show   Get storage/image.event [Operation ID: storage_project_image_event_get]
```

##### h1 storage image event list

```
h1 storage image event list

  List storage/image.event [Operation ID: storage_project_image_event_list] 

Synopsis

  $ h1 storage image event list <options> 

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
  --image id-or-uri      Image Id    
  --$limit string        $limit      
  --$skip string         $skip       
  --skeleton
```

##### h1 storage image event show

```
h1 storage image event show

  Get storage/image.event [Operation ID: storage_project_image_event_get] 

Synopsis

  $ h1 storage image event show <options> 

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
  --image id-or-uri      Image Id    
  --event id-or-uri      eventId     
  --skeleton
```

### h1 storage iso

```
h1 storage iso

Synopsis

  $ h1 storage iso <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create     Create storage/iso [Operation ID: storage_project_iso_create]     
  list       List storage/iso [Operation ID: storage_project_iso_list]         
  show       Get storage/iso [Operation ID: storage_project_iso_get]           
  update     Update storage/iso [Operation ID: storage_project_iso_update]     
  delete     Delete storage/iso [Operation ID: storage_project_iso_delete]     
  detach     Detach storage/iso [Operation ID: storage_project_iso_detach]     
  transfer   Transfer storage/iso [Operation ID: storage_project_iso_transfer] 
  service    Manage services of the iso                                        
  tag        Manage tags of the iso                                            
  event      Manage events of the iso
```

#### h1 storage iso create

```
h1 storage iso create

  Create storage/iso [Operation ID: storage_project_iso_create] 

Synopsis

  $ h1 storage iso create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso create --project 5f64e2468c71177993874510 --name simple-     
  network --source http://www.tinycorelinux.net/9.x/x86/release/Core-           
  current.iso                                                                   

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
  --name string                Iso name                                                       
  --source string              Iso source. Provide URI of local file eg. 'file://./my-        
                               file.bin'.                                                     
  --tag key=key,value=value    Tag collection                                                 
  --no-progress                                                                               
  --skeleton
```

#### h1 storage iso list

```
h1 storage iso list

  List storage/iso [Operation ID: storage_project_iso_list] 

Synopsis

  $ h1 storage iso list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso list --project 5f64e2468c71177993874510                      

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

#### h1 storage iso show

```
h1 storage iso show

  Get storage/iso [Operation ID: storage_project_iso_get] 

Synopsis

  $ h1 storage iso show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso show --project 5f64e2468c71177993874510 --iso                
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
  --iso id-or-uri        Iso Id      
  --skeleton
```

#### h1 storage iso update

```
h1 storage iso update

  Update storage/iso [Operation ID: storage_project_iso_update] 

Synopsis

  $ h1 storage iso update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 storage iso update --project 5f64e2468c71177993874510 --iso              
  5f577a24494c5cfdec7830e5 --name iso-renamed                                   

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
  --iso id-or-uri        Iso Id                                                 
  --name string          Iso name. Requires permissions storage/iso.name/update 
  --skeleton
```

#### h1 storage iso delete

```
h1 storage iso delete

  Delete storage/iso [Operation ID: storage_project_iso_delete] 

Synopsis

  $ h1 storage iso delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso delete --project 5f64e2468c71177993874510 --iso              
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
  --iso id-or-uri        Iso Id      
  --skeleton
```

#### h1 storage iso detach

```
h1 storage iso detach

  Detach storage/iso [Operation ID: storage_project_iso_detach] 

Synopsis

  $ h1 storage iso detach <options> 

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
  --iso id-or-uri              Iso Id                                                         
  --x-idempotency-key string   Idempotency key                                                
  --vm id-or-uri               Iso vm. Provide ID or URI of compute/vm. Requires permissions  
                               compute/vm/use                                                 
  --skeleton
```

#### h1 storage iso transfer

```
h1 storage iso transfer

  Transfer storage/iso [Operation ID: storage_project_iso_transfer] 

Synopsis

  $ h1 storage iso transfer <options> 

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
  --iso id-or-uri              Iso Id                                                         
  --x-idempotency-key string   Idempotency key                                                
  --project id-or-uri          Iso project. Provide ID or URI of iam/project. Requires        
                               permissions storage/iso/create                                 
  --skeleton
```

#### h1 storage iso service

```
h1 storage iso service

Synopsis

  $ h1 storage iso service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List storage/iso.service [Operation ID: storage_project_iso_service_list] 
  show   Get storage/iso.service [Operation ID: storage_project_iso_service_get]
```

##### h1 storage iso service list

```
h1 storage iso service list

  List storage/iso.service [Operation ID: storage_project_iso_service_list] 

Synopsis

  $ h1 storage iso service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso service list --project 5f64e2468c71177993874510 --iso        
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
  --iso id-or-uri        Iso Id      
  --skeleton
```

##### h1 storage iso service show

```
h1 storage iso service show

  Get storage/iso.service [Operation ID: storage_project_iso_service_get] 

Synopsis

  $ h1 storage iso service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso service show --project 5f64e2468c71177993874510 --iso        
  5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b                   

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
  --iso id-or-uri        Iso Id      
  --service id-or-uri    serviceId   
  --skeleton
```

#### h1 storage iso tag

```
h1 storage iso tag

Synopsis

  $ h1 storage iso tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create storage/iso.tag [Operation ID: storage_project_iso_tag_create] 
  list     List storage/iso.tag [Operation ID: storage_project_iso_tag_list]     
  show     Get storage/iso.tag [Operation ID: storage_project_iso_tag_get]       
  delete   Delete storage/iso.tag [Operation ID: storage_project_iso_tag_delete]
```

##### h1 storage iso tag create

```
h1 storage iso tag create

  Create storage/iso.tag [Operation ID: storage_project_iso_tag_create] 

Synopsis

  $ h1 storage iso tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso tag create --project 5f64e2468c71177993874510 --iso          
  5f577a24494c5cfdec7830e5 --key x --value x                                    

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
  --iso id-or-uri        Iso Id      
  --key string           Tag key     
  --value string         Tag value   
  --skeleton
```

##### h1 storage iso tag list

```
h1 storage iso tag list

  List storage/iso.tag [Operation ID: storage_project_iso_tag_list] 

Synopsis

  $ h1 storage iso tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso tag list --project 5f64e2468c71177993874510 --iso            
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
  --iso id-or-uri        Iso Id      
  --skeleton
```

##### h1 storage iso tag show

```
h1 storage iso tag show

  Get storage/iso.tag [Operation ID: storage_project_iso_tag_get] 

Synopsis

  $ h1 storage iso tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso tag show --project 5f64e2468c71177993874510 --iso            
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
  --iso id-or-uri        Iso Id      
  --tag id-or-uri        tagId       
  --skeleton
```

##### h1 storage iso tag delete

```
h1 storage iso tag delete

  Delete storage/iso.tag [Operation ID: storage_project_iso_tag_delete] 

Synopsis

  $ h1 storage iso tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso tag delete --project 5f64e2468c71177993874510 --iso          
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
  --iso id-or-uri        Iso Id      
  --tag id-or-uri        tagId       
  --skeleton
```

#### h1 storage iso event

```
h1 storage iso event

Synopsis

  $ h1 storage iso event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List storage/iso.event [Operation ID: storage_project_iso_event_list] 
  show   Get storage/iso.event [Operation ID: storage_project_iso_event_get]
```

##### h1 storage iso event list

```
h1 storage iso event list

  List storage/iso.event [Operation ID: storage_project_iso_event_list] 

Synopsis

  $ h1 storage iso event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso event list --project 5f64e2468c71177993874510 --iso          
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
  --iso id-or-uri        Iso Id      
  --$limit string        $limit      
  --$skip string         $skip       
  --skeleton
```

##### h1 storage iso event show

```
h1 storage iso event show

  Get storage/iso.event [Operation ID: storage_project_iso_event_get] 

Synopsis

  $ h1 storage iso event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage iso event show --project 5f64e2468c71177993874510 --iso          
  5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b                     

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
  --iso id-or-uri        Iso Id      
  --event id-or-uri      eventId     
  --skeleton
```

### h1 storage vault

```
h1 storage vault

Synopsis

  $ h1 storage vault <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create       Create storage/vault [Operation ID: storage_project_vault_create] 
  list         List storage/vault [Operation ID: storage_project_vault_list]     
  show         Get storage/vault [Operation ID: storage_project_vault_get]       
  update       Update storage/vault [Operation ID: storage_project_vault_update] 
  delete       Delete storage/vault [Operation ID: storage_project_vault_delete] 
  start        Start storage/vault [Operation ID: storage_project_vault_start]   
  stop         Stop storage/vault [Operation ID: storage_project_vault_stop]     
  resize       Resize storage/vault [Operation ID: storage_project_vault_resize] 
  snapshot     Manage snapshots of the vault                                     
  credential   Manage credentials of the vault                                   
  service      Manage services of the vault                                      
  tag          Manage tags of the vault                                          
  event        Manage events of the vault                                        
  ssh          Connect to storage/vault using SSH                                
  sftp         Connect to storage/vault using SFTP
```

#### h1 storage vault create

```
h1 storage vault create

  Create storage/vault [Operation ID: storage_project_vault_create] 

Synopsis

  $ h1 storage vault create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault create --project 5f64e2468c71177993874510 --name simple-   
  vault --size 10                                                               

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
  --name string                Vault name                                                     
  --service id-or-uri          Vault service. Provide ID or URI of billing/service. Defaults  
                               is 5a0332c4eb8f4ed95c206a12                                    
  --size string                Vault size                                                     
  --source uri                 Vault source. Provide URI of storage/vault.snapshot. Requires  
                               permissions storage/vault.snapshot/use                         
  --tag key=key,value=value    Tag collection                                                 
  --skeleton
```

#### h1 storage vault list

```
h1 storage vault list

  List storage/vault [Operation ID: storage_project_vault_list] 

Synopsis

  $ h1 storage vault list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault list --project 5f64e2468c71177993874510                    

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

#### h1 storage vault show

```
h1 storage vault show

  Get storage/vault [Operation ID: storage_project_vault_get] 

Synopsis

  $ h1 storage vault show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault show --project 5f64e2468c71177993874510 --vault            
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
  --vault id-or-uri      Vault Id    
  --skeleton
```

#### h1 storage vault update

```
h1 storage vault update

  Update storage/vault [Operation ID: storage_project_vault_update] 

Synopsis

  $ h1 storage vault update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 storage vault update --project 5f64e2468c71177993874510 --vault          
  5f577a24494c5cfdec7830e5 --name vault-renamed                                 

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
  --vault id-or-uri      Vault Id                                                   
  --name string          Vault name. Requires permissions storage/vault.name/update 
  --skeleton
```

#### h1 storage vault delete

```
h1 storage vault delete

  Delete storage/vault [Operation ID: storage_project_vault_delete] 

Synopsis

  $ h1 storage vault delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault delete --project 5f64e2468c71177993874510 --vault          
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

  --project id-or-uri                Project Id               
  --location id-or-uri               Location Id              
  --vault id-or-uri                  Vault Id                 
  --remove-allsnapshots true,false   Vault removeAllSnapshots 
  --skeleton
```

#### h1 storage vault start

```
h1 storage vault start

  Start storage/vault [Operation ID: storage_project_vault_start] 

Synopsis

  $ h1 storage vault start <options> 

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
  --vault id-or-uri            Vault Id        
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 storage vault stop

```
h1 storage vault stop

  Stop storage/vault [Operation ID: storage_project_vault_stop] 

Synopsis

  $ h1 storage vault stop <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault stop --project 5f64e2468c71177993874510 --vault            
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
  --vault id-or-uri            Vault Id        
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 storage vault resize

```
h1 storage vault resize

  Resize storage/vault [Operation ID: storage_project_vault_resize] 

Synopsis

  $ h1 storage vault resize <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault resize --project 5f64e2468c71177993874510 --vault          
  5f577a24494c5cfdec7830e5 --size 25                                            

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
  --vault id-or-uri            Vault Id        
  --x-idempotency-key string   Idempotency key 
  --size string                Vault size      
  --skeleton
```

#### h1 storage vault snapshot

```
h1 storage vault snapshot

Synopsis

  $ h1 storage vault snapshot <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create storage/vault.snapshot [Operation ID: storage_project_vault_snapshot_create] 
  list     List storage/vault.snapshot [Operation ID: storage_project_vault_snapshot_list]     
  show     Get storage/vault.snapshot [Operation ID: storage_project_vault_snapshot_get]       
  delete   Delete storage/vault.snapshot [Operation ID: storage_project_vault_snapshot_delete]
```

##### h1 storage vault snapshot create

```
h1 storage vault snapshot create

  Create storage/vault.snapshot [Operation ID:                                  
  storage_project_vault_snapshot_create]                                        

Synopsis

  $ h1 storage vault snapshot create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault snapshot create --project 5f64e2468c71177993874510 --vault 
  5f577a24494c5cfdec7830e5 --name vault-snapshot                                

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
  --vault id-or-uri      Vault Id      
  --name string          Snapshot name 
  --skeleton
```

##### h1 storage vault snapshot list

```
h1 storage vault snapshot list

  List storage/vault.snapshot [Operation ID: storage_project_vault_snapshot_list] 

Synopsis

  $ h1 storage vault snapshot list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault snapshot list --project 5f64e2468c71177993874510 --vault   
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
  --vault id-or-uri      Vault Id    
  --skeleton
```

##### h1 storage vault snapshot show

```
h1 storage vault snapshot show

  Get storage/vault.snapshot [Operation ID: storage_project_vault_snapshot_get] 

Synopsis

  $ h1 storage vault snapshot show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault snapshot show --project 5f64e2468c71177993874510 --vault   
  5f577a24494c5cfdec7830e5 --snapshot 5f60cbbe494c5cfdec81cc6b                  

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
  --vault id-or-uri      Vault Id    
  --snapshot id-or-uri   snapshotId  
  --skeleton
```

##### h1 storage vault snapshot delete

```
h1 storage vault snapshot delete

  Delete storage/vault.snapshot [Operation ID:                                  
  storage_project_vault_snapshot_delete]                                        

Synopsis

  $ h1 storage vault snapshot delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault snapshot delete --project 5f64e2468c71177993874510 --vault 
  5f577a24494c5cfdec7830e5 --snapshot 5f60cbbe494c5cfdec81cc6b                  

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
  --vault id-or-uri      Vault Id    
  --snapshot id-or-uri   snapshotId  
  --skeleton
```

#### h1 storage vault credential

```
h1 storage vault credential

Synopsis

  $ h1 storage vault credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create storage/vault.credential [Operation ID:                                     
           storage_project_vault_credential_create]                                           
  list     List storage/vault.credential [Operation ID:                                       
           storage_project_vault_credential_list]                                             
  show     Get storage/vault.credential [Operation ID: storage_project_vault_credential_get]  
  update   Update storage/vault.credential [Operation ID:                                     
           storage_project_vault_credential_patch]                                            
  delete   Delete storage/vault.credential [Operation ID:                                     
           storage_project_vault_credential_delete]
```

##### h1 storage vault credential create

```
h1 storage vault credential create

  Create storage/vault.credential [Operation ID:                                
  storage_project_vault_credential_create]                                      

Synopsis

  $ h1 storage vault credential create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault credential create --project 5f64e2468c71177993874510       
  --vault 5f577a24494c5cfdec7830e5 --name vault-credential --type plain --value 
  xxxxxx                                                                        

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

  --project id-or-uri       Project Id       
  --location id-or-uri      Location Id      
  --vault id-or-uri         Vault Id         
  --name string             Credential name  
  --type ssh,sha512,plain   Credential type  
  --value string            Credential value 
  --token string            Credential token 
  --skeleton
```

##### h1 storage vault credential list

```
h1 storage vault credential list

  List storage/vault.credential [Operation ID:                                  
  storage_project_vault_credential_list]                                        

Synopsis

  $ h1 storage vault credential list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault credential list --project 5f64e2468c71177993874510 --vault 
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
  --vault id-or-uri      Vault Id    
  --skeleton
```

##### h1 storage vault credential show

```
h1 storage vault credential show

  Get storage/vault.credential [Operation ID:                                   
  storage_project_vault_credential_get]                                         

Synopsis

  $ h1 storage vault credential show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault credential show --project 5f64e2468c71177993874510 --vault 
  5f577a24494c5cfdec7830e5 --credential 5f60cbbe494c5cfdec81cc6b                

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
  --vault id-or-uri        Vault Id     
  --credential id-or-uri   credentialId 
  --skeleton
```

##### h1 storage vault credential update

```
h1 storage vault credential update

  Update storage/vault.credential [Operation ID:                                
  storage_project_vault_credential_patch]                                       

Synopsis

  $ h1 storage vault credential update <options> 

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
  --vault id-or-uri        Vault Id                                                           
  --credential id-or-uri   credentialId                                                       
  --name string            Credential name. Requires permissions                              
                           storage/vault.credential.name/update                               
  --skeleton
```

##### h1 storage vault credential delete

```
h1 storage vault credential delete

  Delete storage/vault.credential [Operation ID:                                
  storage_project_vault_credential_delete]                                      

Synopsis

  $ h1 storage vault credential delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault credential delete --project 5f64e2468c71177993874510       
  --vault 5f577a24494c5cfdec7830e5 --credential 5f60cbbe494c5cfdec81cc6b        

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
  --vault id-or-uri        Vault Id     
  --credential id-or-uri   credentialId 
  --skeleton
```

#### h1 storage vault service

```
h1 storage vault service

Synopsis

  $ h1 storage vault service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List storage/vault.service [Operation ID: storage_project_vault_service_list] 
  show   Get storage/vault.service [Operation ID: storage_project_vault_service_get]
```

##### h1 storage vault service list

```
h1 storage vault service list

  List storage/vault.service [Operation ID: storage_project_vault_service_list] 

Synopsis

  $ h1 storage vault service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault service list --project 5f64e2468c71177993874510 --vault    
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
  --vault id-or-uri      Vault Id    
  --skeleton
```

##### h1 storage vault service show

```
h1 storage vault service show

  Get storage/vault.service [Operation ID: storage_project_vault_service_get] 

Synopsis

  $ h1 storage vault service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault service show --project 5f64e2468c71177993874510 --vault    
  5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b                   

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
  --vault id-or-uri      Vault Id    
  --service id-or-uri    serviceId   
  --skeleton
```

#### h1 storage vault tag

```
h1 storage vault tag

Synopsis

  $ h1 storage vault tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create storage/vault.tag [Operation ID: storage_project_vault_tag_create] 
  list     List storage/vault.tag [Operation ID: storage_project_vault_tag_list]     
  show     Get storage/vault.tag [Operation ID: storage_project_vault_tag_get]       
  delete   Delete storage/vault.tag [Operation ID: storage_project_vault_tag_delete]
```

##### h1 storage vault tag create

```
h1 storage vault tag create

  Create storage/vault.tag [Operation ID: storage_project_vault_tag_create] 

Synopsis

  $ h1 storage vault tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault tag create --project 5f64e2468c71177993874510 --vault      
  5f577a24494c5cfdec7830e5 --key x --value x                                    

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
  --vault id-or-uri      Vault Id    
  --key string           Tag key     
  --value string         Tag value   
  --skeleton
```

##### h1 storage vault tag list

```
h1 storage vault tag list

  List storage/vault.tag [Operation ID: storage_project_vault_tag_list] 

Synopsis

  $ h1 storage vault tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault tag list --project 5f64e2468c71177993874510 --vault        
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
  --vault id-or-uri      Vault Id    
  --skeleton
```

##### h1 storage vault tag show

```
h1 storage vault tag show

  Get storage/vault.tag [Operation ID: storage_project_vault_tag_get] 

Synopsis

  $ h1 storage vault tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault tag show --project 5f64e2468c71177993874510 --vault        
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
  --vault id-or-uri      Vault Id    
  --tag id-or-uri        tagId       
  --skeleton
```

##### h1 storage vault tag delete

```
h1 storage vault tag delete

  Delete storage/vault.tag [Operation ID: storage_project_vault_tag_delete] 

Synopsis

  $ h1 storage vault tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault tag delete --project 5f64e2468c71177993874510 --vault      
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
  --vault id-or-uri      Vault Id    
  --tag id-or-uri        tagId       
  --skeleton
```

#### h1 storage vault event

```
h1 storage vault event

Synopsis

  $ h1 storage vault event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List storage/vault.event [Operation ID: storage_project_vault_event_list] 
  show   Get storage/vault.event [Operation ID: storage_project_vault_event_get]
```

##### h1 storage vault event list

```
h1 storage vault event list

  List storage/vault.event [Operation ID: storage_project_vault_event_list] 

Synopsis

  $ h1 storage vault event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault event list --project 5f64e2468c71177993874510 --vault      
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
  --vault id-or-uri      Vault Id    
  --$limit string        $limit      
  --$skip string         $skip       
  --skeleton
```

##### h1 storage vault event show

```
h1 storage vault event show

  Get storage/vault.event [Operation ID: storage_project_vault_event_get] 

Synopsis

  $ h1 storage vault event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 storage vault event show --project 5f64e2468c71177993874510 --vault      
  5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b                     

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
  --vault id-or-uri      Vault Id    
  --event id-or-uri      eventId     
  --skeleton
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
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

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
  --no-wait true,false                        In case of queued event do not wait for         
                                              completion                                      

Operation options

  --vault string      
  --project string
```

