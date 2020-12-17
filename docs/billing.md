## h1 billing

```
h1 billing

Synopsis

  $ h1 billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  reservation   Management of reservation resource 
  service       Management of service resource
```

### h1 billing reservation

```
h1 billing reservation

Synopsis

  $ h1 billing reservation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create    Create billing/reservation [Operation ID: billing_project_reservation_create] 
  list      List billing/reservation [Operation ID: billing_project_reservation_list]     
  show      Get billing/reservation [Operation ID: billing_project_reservation_get]       
  update    Update billing/reservation [Operation ID: billing_project_reservation_update] 
  delete    Delete billing/reservation [Operation ID: billing_project_reservation_delete] 
  assign    Assign billing/reservation [Operation ID: billing_project_reservation_assign] 
  extend    Extend billing/reservation [Operation ID: billing_project_reservation_extend] 
  service   Manage services of the reservation                                            
  tag       Manage tags of the reservation                                                
  event     Manage events of the reservation
```

#### h1 billing reservation create

```
h1 billing reservation create

  Create billing/reservation [Operation ID: billing_project_reservation_create] 

Synopsis

  $ h1 billing reservation create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation create --project 5f64e2468c71177993874510 --name     
  simple-reservation --service                                                  
  /billing/project/5f64e2468c71177993874510/service/5bf55e7f96ca089454ce6f68    

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
  --x-idempotency-key string   Idempotency key                                           
  --name string                Reservation name                                          
  --service id-or-uri          Reservation service. Provide ID or URI of billing/service 
  --tag key=key,value=value    Tag collection                                            
  --skeleton
```

#### h1 billing reservation list

```
h1 billing reservation list

  List billing/reservation [Operation ID: billing_project_reservation_list] 

Synopsis

  $ h1 billing reservation list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation list --project 5f64e2468c71177993874510              

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

  --project id-or-uri   Project Id          
  --name string         Filter by name      
  --tag.value string    Filter by tag.value 
  --tag.key string      Filter by tag.key   
  --skeleton
```

#### h1 billing reservation show

```
h1 billing reservation show

  Get billing/reservation [Operation ID: billing_project_reservation_get] 

Synopsis

  $ h1 billing reservation show <options> 

Examples

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation show --project 5f64e2468c71177993874510              
  --reservation 5f577a24494c5cfdec7830e5                                        
                                                                                
                                                                                
  Simple GC                                                                     
                                                                                
  $ h1 billing reservation show --project 5f64e2468c71177993874510              
  --reservation 5f577a24494c5cfdec7830e5                                        

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

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --skeleton
```

#### h1 billing reservation update

```
h1 billing reservation update

  Update billing/reservation [Operation ID: billing_project_reservation_update] 

Synopsis

  $ h1 billing reservation update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 billing reservation update --project 5f64e2468c71177993874510            
  --reservation 5f577a24494c5cfdec7830e5 --name reservation-renamed             

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

  --project id-or-uri       Project Id                                                             
  --reservation id-or-uri   Reservation Id                                                         
  --name string             Reservation name. Requires permissions billing/reservation.name/update 
  --skeleton
```

#### h1 billing reservation delete

```
h1 billing reservation delete

  Delete billing/reservation [Operation ID: billing_project_reservation_delete] 

Synopsis

  $ h1 billing reservation delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --skeleton
```

#### h1 billing reservation assign

```
h1 billing reservation assign

  Assign billing/reservation [Operation ID: billing_project_reservation_assign] 

Synopsis

  $ h1 billing reservation assign <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation assign --project 5f64e2468c71177993874510            
  --reservation 5f577a24494c5cfdec7830e5                                        

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
  --reservation id-or-uri      Reservation Id                                                                
  --x-idempotency-key string   Idempotency key                                                               
  --resource id-or-uri         Reservation resource. Provide ID or URI of compute/vm. Requires permissions   
                               compute/vm/use                                                                
  --skeleton
```

#### h1 billing reservation extend

```
h1 billing reservation extend

  Extend billing/reservation [Operation ID: billing_project_reservation_extend] 

Synopsis

  $ h1 billing reservation extend <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation extend --project 5f64e2468c71177993874510            
  --reservation 5f577a24494c5cfdec7830e5                                        

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
  --reservation id-or-uri      Reservation Id  
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 billing reservation service

```
h1 billing reservation service

Synopsis

  $ h1 billing reservation service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List billing/reservation.service [Operation ID: billing_project_reservation_service_list] 
  show   Get billing/reservation.service [Operation ID: billing_project_reservation_service_get]
```

##### h1 billing reservation service list

```
h1 billing reservation service list

  List billing/reservation.service [Operation ID:                               
  billing_project_reservation_service_list]                                     

Synopsis

  $ h1 billing reservation service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation service list --project 5f64e2468c71177993874510      
  --reservation 5f577a24494c5cfdec7830e5                                        

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --skeleton
```

##### h1 billing reservation service show

```
h1 billing reservation service show

  Get billing/reservation.service [Operation ID:                                
  billing_project_reservation_service_get]                                      

Synopsis

  $ h1 billing reservation service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation service show --project 5f64e2468c71177993874510      
  --reservation 5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b     

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --service id-or-uri       serviceId      
  --skeleton
```

#### h1 billing reservation tag

```
h1 billing reservation tag

Synopsis

  $ h1 billing reservation tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create billing/reservation.tag [Operation ID: billing_project_reservation_tag_create] 
  list     List billing/reservation.tag [Operation ID: billing_project_reservation_tag_list]     
  show     Get billing/reservation.tag [Operation ID: billing_project_reservation_tag_get]       
  delete   Delete billing/reservation.tag [Operation ID: billing_project_reservation_tag_delete]
```

##### h1 billing reservation tag create

```
h1 billing reservation tag create

  Create billing/reservation.tag [Operation ID:                                 
  billing_project_reservation_tag_create]                                       

Synopsis

  $ h1 billing reservation tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation tag create --project 5f64e2468c71177993874510        
  --reservation 5f577a24494c5cfdec7830e5 --key x --value x                      

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --key string              Tag key        
  --value string            Tag value      
  --skeleton
```

##### h1 billing reservation tag list

```
h1 billing reservation tag list

  List billing/reservation.tag [Operation ID:                                   
  billing_project_reservation_tag_list]                                         

Synopsis

  $ h1 billing reservation tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation tag list --project 5f64e2468c71177993874510          
  --reservation 5f577a24494c5cfdec7830e5                                        

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --skeleton
```

##### h1 billing reservation tag show

```
h1 billing reservation tag show

  Get billing/reservation.tag [Operation ID: billing_project_reservation_tag_get] 

Synopsis

  $ h1 billing reservation tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation tag show --project 5f64e2468c71177993874510          
  --reservation 5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b         

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --tag id-or-uri           tagId          
  --skeleton
```

##### h1 billing reservation tag delete

```
h1 billing reservation tag delete

  Delete billing/reservation.tag [Operation ID:                                 
  billing_project_reservation_tag_delete]                                       

Synopsis

  $ h1 billing reservation tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation tag delete --project 5f64e2468c71177993874510        
  --reservation 5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b         

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --tag id-or-uri           tagId          
  --skeleton
```

#### h1 billing reservation event

```
h1 billing reservation event

Synopsis

  $ h1 billing reservation event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List billing/reservation.event [Operation ID: billing_project_reservation_event_list] 
  show   Get billing/reservation.event [Operation ID: billing_project_reservation_event_get]
```

##### h1 billing reservation event list

```
h1 billing reservation event list

  List billing/reservation.event [Operation ID:                                 
  billing_project_reservation_event_list]                                       

Synopsis

  $ h1 billing reservation event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation event list --project 5f64e2468c71177993874510        
  --reservation 5f577a24494c5cfdec7830e5                                        

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --$limit string           $limit         
  --$skip string            $skip          
  --skeleton
```

##### h1 billing reservation event show

```
h1 billing reservation event show

  Get billing/reservation.event [Operation ID:                                  
  billing_project_reservation_event_get]                                        

Synopsis

  $ h1 billing reservation event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 billing reservation event show --project 5f64e2468c71177993874510        
  --reservation 5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b       

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --event id-or-uri         eventId        
  --skeleton
```

### h1 billing service

```
h1 billing service

Synopsis

  $ h1 billing service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List billing/service [Operation ID: billing_project_service_list] 
  show   Get billing/service [Operation ID: billing_project_service_get]
```

#### h1 billing service list

```
h1 billing service list

  List billing/service [Operation ID: billing_project_service_list] 

Synopsis

  $ h1 billing service list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id     
  --kind string         Filter by kind 
  --name string         Filter by name 
  --type string         Filter by type 
  --skeleton
```

#### h1 billing service show

```
h1 billing service show

  Get billing/service [Operation ID: billing_project_service_get] 

Synopsis

  $ h1 billing service show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --service id-or-uri   Service Id 
  --skeleton
```

