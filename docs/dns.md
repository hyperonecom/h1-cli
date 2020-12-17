## h1 dns

```
h1 dns

Synopsis

  $ h1 dns <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  zone   Management of zone resource
```

### h1 dns zone

```
h1 dns zone

Synopsis

  $ h1 dns zone <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create      Create dns/zone [Operation ID: dns_project_zone_create] 
  list        List dns/zone [Operation ID: dns_project_zone_list]     
  show        Get dns/zone [Operation ID: dns_project_zone_get]       
  update      Update dns/zone [Operation ID: dns_project_zone_update] 
  delete      Delete dns/zone [Operation ID: dns_project_zone_delete] 
  recordset   Manage recordsets of the zone                           
  service     Manage services of the zone                             
  tag         Manage tags of the zone                                 
  event       Manage events of the zone
```

#### h1 dns zone create

```
h1 dns zone create

  Create dns/zone [Operation ID: dns_project_zone_create] 

Synopsis

  $ h1 dns zone create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone create --project 5f64e2468c71177993874510 --name simple-zone    
  --service /billing/project/platform/service/5d31a9310642a263e1c0b23d          
  --dns-name example-zone.com                                                   

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
  --name string                Zone name                                          
  --service id-or-uri          Zone service. Provide ID or URI of billing/service 
  --dns-name string            Zone dnsName                                       
  --source-dns-probing         Source dnsProbing                                  
  --tag key=key,value=value    Tag collection                                     
  --skeleton
```

#### h1 dns zone list

```
h1 dns zone list

  List dns/zone [Operation ID: dns_project_zone_list] 

Synopsis

  $ h1 dns zone list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone list --project 5f64e2468c71177993874510                         

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

#### h1 dns zone show

```
h1 dns zone show

  Get dns/zone [Operation ID: dns_project_zone_get] 

Synopsis

  $ h1 dns zone show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone show --project 5f64e2468c71177993874510 --zone                  
  5f72beb1494c5cfdec9b907f                                                      

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
  --zone id-or-uri       Zone Id                                
  --skeleton
```

#### h1 dns zone update

```
h1 dns zone update

  Update dns/zone [Operation ID: dns_project_zone_update] 

Synopsis

  $ h1 dns zone update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 dns zone update --project 5f64e2468c71177993874510 --zone                
  5f72beb1494c5cfdec9b907f --name zone-renamed                                  

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
  --zone id-or-uri       Zone Id                                              
  --name string          Zone name. Requires permissions dns/zone.name/update 
  --skeleton
```

#### h1 dns zone delete

```
h1 dns zone delete

  Delete dns/zone [Operation ID: dns_project_zone_delete] 

Synopsis

  $ h1 dns zone delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone delete --project 5f64e2468c71177993874510 --zone                
  5f72beb1494c5cfdec9b907f                                                      

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
  --zone id-or-uri       Zone Id                                
  --skeleton
```

#### h1 dns zone recordset

```
h1 dns zone recordset

Synopsis

  $ h1 dns zone recordset <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create dns/zone.recordset [Operation ID: dns_project_zone_recordset_create] 
  list     List dns/zone.recordset [Operation ID: dns_project_zone_recordset_list]     
  show     Get dns/zone.recordset [Operation ID: dns_project_zone_recordset_get]       
  update   Update dns/zone.recordset [Operation ID: dns_project_zone_recordset_patch]  
  delete   Delete dns/zone.recordset [Operation ID: dns_project_zone_recordset_delete] 
  record   Manage records of the recordset
```

##### h1 dns zone recordset create

```
h1 dns zone recordset create

  Create dns/zone.recordset [Operation ID: dns_project_zone_recordset_create] 

Synopsis

  $ h1 dns zone recordset create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone recordset create --project 5f64e2468c71177993874510 --zone      
  5f72beb1494c5cfdec9b907f --name zone-recordset --type A --record              
  content=1.1.1.1                                                               

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri                             Project Id                                             
  --location id-or-uri                            Location Id. Default value is pl-waw-1                 
  --zone id-or-uri                                Zone Id                                                
  --name string                                   Recordset name. Defaults is @. Default value is @      
  --type A,AAAA,CAA,CNAME,MX,NS,PTR,SOA,SRV,TXT   Recordset type                                         
  --ttl string                                    Recordset ttl. Defaults is 3600. Default value is 3600 
  --record content=content                        Record collection                                      
  --skeleton
```

##### h1 dns zone recordset list

```
h1 dns zone recordset list

  List dns/zone.recordset [Operation ID: dns_project_zone_recordset_list] 

Synopsis

  $ h1 dns zone recordset list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone recordset list --project 5f64e2468c71177993874510 --zone        
  5f72beb1494c5cfdec9b907f                                                      

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
  --zone id-or-uri       Zone Id                                
  --skeleton
```

##### h1 dns zone recordset show

```
h1 dns zone recordset show

  Get dns/zone.recordset [Operation ID: dns_project_zone_recordset_get] 

Synopsis

  $ h1 dns zone recordset show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone recordset show --project 5f64e2468c71177993874510 --zone        
  5f72beb1494c5cfdec9b907f --recordset 5f60cbbe494c5cfdec81cc6b                 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri     Project Id                             
  --location id-or-uri    Location Id. Default value is pl-waw-1 
  --zone id-or-uri        Zone Id                                
  --recordset id-or-uri   recordsetId                            
  --skeleton
```

##### h1 dns zone recordset update

```
h1 dns zone recordset update

  Update dns/zone.recordset [Operation ID: dns_project_zone_recordset_patch] 

Synopsis

  $ h1 dns zone recordset update <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri     Project Id                                                                    
  --location id-or-uri    Location Id. Default value is pl-waw-1                                        
  --zone id-or-uri        Zone Id                                                                       
  --recordset id-or-uri   recordsetId                                                                   
  --ttl string            Recordset ttl. Requires permissions dns/zone.recordset.ttl/update. Defaults   
                          is 3600. Default value is 3600                                                
  --skeleton
```

##### h1 dns zone recordset delete

```
h1 dns zone recordset delete

  Delete dns/zone.recordset [Operation ID: dns_project_zone_recordset_delete] 

Synopsis

  $ h1 dns zone recordset delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone recordset delete --project 5f64e2468c71177993874510 --zone      
  5f72beb1494c5cfdec9b907f --recordset 5f60cbbe494c5cfdec81cc6b                 

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

  --project id-or-uri     Project Id                             
  --location id-or-uri    Location Id. Default value is pl-waw-1 
  --zone id-or-uri        Zone Id                                
  --recordset id-or-uri   recordsetId                            
  --skeleton
```

##### h1 dns zone recordset record

```
h1 dns zone recordset record

Synopsis

  $ h1 dns zone recordset record <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create dns/zone.record [Operation ID: dns_project_zone_recordset_record_create] 
  list     List dns/zone.record [Operation ID: dns_project_zone_recordset_record_list]     
  show     Get dns/zone.record [Operation ID: dns_project_zone_recordset_record_get]       
  delete   Delete dns/zone.record [Operation ID: dns_project_zone_recordset_record_delete]
```

###### h1 dns zone recordset record create

```
h1 dns zone recordset record create

  Create dns/zone.record [Operation ID: dns_project_zone_recordset_record_create] 

Synopsis

  $ h1 dns zone recordset record create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone recordset record create --project 5f64e2468c71177993874510      
  --zone 5f72beb1494c5cfdec9b907f --recordset 5f60cbbe494c5cfdec81cc6b          
  --content 1.1.1.1                                                             

Global options

  --help                                      Show help message and exit.                                          
  --verbose                                   Make the operation more talkative.                                   
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml              
  --query string                              JMESPath query string. Default value is [].{id:id, content:content}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.   
  --as uri                                    Act as another actor eg. service account                             
  --no-wait                                   In case of queued event do not wait for completion                   

Operation options

  --project id-or-uri     Project Id                             
  --location id-or-uri    Location Id. Default value is pl-waw-1 
  --zone id-or-uri        Zone Id                                
  --recordset id-or-uri   recordsetId                            
  --content string        Record content                         
  --skeleton
```

###### h1 dns zone recordset record list

```
h1 dns zone recordset record list

  List dns/zone.record [Operation ID: dns_project_zone_recordset_record_list] 

Synopsis

  $ h1 dns zone recordset record list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone recordset record list --project 5f64e2468c71177993874510 --zone 
  5f72beb1494c5cfdec9b907f --recordset 5f60cbbe494c5cfdec81cc6b                 

Global options

  --help                                      Show help message and exit.                                          
  --verbose                                   Make the operation more talkative.                                   
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml              
  --query string                              JMESPath query string. Default value is [].{id:id, content:content}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.   
  --as uri                                    Act as another actor eg. service account                             
  --no-wait                                   In case of queued event do not wait for completion                   

Operation options

  --project id-or-uri     Project Id                             
  --location id-or-uri    Location Id. Default value is pl-waw-1 
  --zone id-or-uri        Zone Id                                
  --recordset id-or-uri   recordsetId                            
  --skeleton
```

###### h1 dns zone recordset record show

```
h1 dns zone recordset record show

  Get dns/zone.record [Operation ID: dns_project_zone_recordset_record_get] 

Synopsis

  $ h1 dns zone recordset record show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone recordset record show --project 5f64e2468c71177993874510 --zone 
  5f72beb1494c5cfdec9b907f --recordset 5f60cbbe494c5cfdec81cc6b --record        
  5cb9e2c8467ad031486f9d88                                                      

Global options

  --help                                      Show help message and exit.                                          
  --verbose                                   Make the operation more talkative.                                   
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml              
  --query string                              JMESPath query string. Default value is [].{id:id, content:content}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.   
  --as uri                                    Act as another actor eg. service account                             
  --no-wait                                   In case of queued event do not wait for completion                   

Operation options

  --project id-or-uri     Project Id                             
  --location id-or-uri    Location Id. Default value is pl-waw-1 
  --zone id-or-uri        Zone Id                                
  --recordset id-or-uri   recordsetId                            
  --record id-or-uri      recordId                               
  --skeleton
```

###### h1 dns zone recordset record delete

```
h1 dns zone recordset record delete

  Delete dns/zone.record [Operation ID: dns_project_zone_recordset_record_delete] 

Synopsis

  $ h1 dns zone recordset record delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone recordset record delete --project 5f64e2468c71177993874510      
  --zone 5f72beb1494c5cfdec9b907f --recordset 5f60cbbe494c5cfdec81cc6b --record 
  5cb9e2c8467ad031486f9d88                                                      

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri     Project Id                             
  --location id-or-uri    Location Id. Default value is pl-waw-1 
  --zone id-or-uri        Zone Id                                
  --recordset id-or-uri   recordsetId                            
  --record id-or-uri      recordId                               
  --skeleton
```

#### h1 dns zone service

```
h1 dns zone service

Synopsis

  $ h1 dns zone service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List dns/zone.service [Operation ID: dns_project_zone_service_list] 
  show   Get dns/zone.service [Operation ID: dns_project_zone_service_get]
```

##### h1 dns zone service list

```
h1 dns zone service list

  List dns/zone.service [Operation ID: dns_project_zone_service_list] 

Synopsis

  $ h1 dns zone service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone service list --project 5f64e2468c71177993874510 --zone          
  5f72beb1494c5cfdec9b907f                                                      

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
  --zone id-or-uri       Zone Id                                
  --skeleton
```

##### h1 dns zone service show

```
h1 dns zone service show

  Get dns/zone.service [Operation ID: dns_project_zone_service_get] 

Synopsis

  $ h1 dns zone service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone service show --project 5f64e2468c71177993874510 --zone          
  5f72beb1494c5cfdec9b907f --service 5f60cbbe494c5cfdec81cc6b                   

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
  --zone id-or-uri       Zone Id                                
  --service id-or-uri    serviceId                              
  --skeleton
```

#### h1 dns zone tag

```
h1 dns zone tag

Synopsis

  $ h1 dns zone tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create dns/zone.tag [Operation ID: dns_project_zone_tag_create] 
  list     List dns/zone.tag [Operation ID: dns_project_zone_tag_list]     
  show     Get dns/zone.tag [Operation ID: dns_project_zone_tag_get]       
  delete   Delete dns/zone.tag [Operation ID: dns_project_zone_tag_delete]
```

##### h1 dns zone tag create

```
h1 dns zone tag create

  Create dns/zone.tag [Operation ID: dns_project_zone_tag_create] 

Synopsis

  $ h1 dns zone tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone tag create --project 5f64e2468c71177993874510 --zone            
  5f72beb1494c5cfdec9b907f --key x --value x                                    

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
  --zone id-or-uri       Zone Id                                
  --key string           Tag key                                
  --value string         Tag value                              
  --skeleton
```

##### h1 dns zone tag list

```
h1 dns zone tag list

  List dns/zone.tag [Operation ID: dns_project_zone_tag_list] 

Synopsis

  $ h1 dns zone tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone tag list --project 5f64e2468c71177993874510 --zone              
  5f72beb1494c5cfdec9b907f                                                      

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
  --zone id-or-uri       Zone Id                                
  --skeleton
```

##### h1 dns zone tag show

```
h1 dns zone tag show

  Get dns/zone.tag [Operation ID: dns_project_zone_tag_get] 

Synopsis

  $ h1 dns zone tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone tag show --project 5f64e2468c71177993874510 --zone              
  5f72beb1494c5cfdec9b907f --tag 5f60cbbe494c5cfdec81cc6b                       

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
  --zone id-or-uri       Zone Id                                
  --tag id-or-uri        tagId                                  
  --skeleton
```

##### h1 dns zone tag delete

```
h1 dns zone tag delete

  Delete dns/zone.tag [Operation ID: dns_project_zone_tag_delete] 

Synopsis

  $ h1 dns zone tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone tag delete --project 5f64e2468c71177993874510 --zone            
  5f72beb1494c5cfdec9b907f --tag 5f60cbbe494c5cfdec81cc6b                       

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
  --zone id-or-uri       Zone Id                                
  --tag id-or-uri        tagId                                  
  --skeleton
```

#### h1 dns zone event

```
h1 dns zone event

Synopsis

  $ h1 dns zone event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List dns/zone.event [Operation ID: dns_project_zone_event_list] 
  show   Get dns/zone.event [Operation ID: dns_project_zone_event_get]
```

##### h1 dns zone event list

```
h1 dns zone event list

  List dns/zone.event [Operation ID: dns_project_zone_event_list] 

Synopsis

  $ h1 dns zone event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone event list --project 5f64e2468c71177993874510 --zone            
  5f72beb1494c5cfdec9b907f                                                      

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
  --zone id-or-uri       Zone Id                                
  --$limit string        $limit                                 
  --$skip string         $skip                                  
  --skeleton
```

##### h1 dns zone event show

```
h1 dns zone event show

  Get dns/zone.event [Operation ID: dns_project_zone_event_get] 

Synopsis

  $ h1 dns zone event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 dns zone event show --project 5f64e2468c71177993874510 --zone            
  5f72beb1494c5cfdec9b907f --event 5f60cbbe494c5cfdec81cc6b                     

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
  --zone id-or-uri       Zone Id                                
  --event id-or-uri      eventId                                
  --skeleton
```

