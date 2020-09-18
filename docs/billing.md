## h1 billing

```
h1 billing

Synopsis

  $ h1 billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec          Print specification of context     
  reservation   Management of reservation resource 
  service       Management of service resource
```

### h1 billing spec

```
h1 billing spec

  Print specification of context 

Synopsis

  $ h1 billing spec <options> 

Global options

  --help    Show help message and exit. 

Operation options
```

### h1 billing reservation

```
h1 billing reservation

Synopsis

  $ h1 billing reservation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                                  
  create    Create billing/reservation [billing_project_reservation_create] 
  list      List billing/reservation [billing_project_reservation_list]     
  show      Get billing/reservation [billing_project_reservation_get]       
  update    Update billing/reservation [billing_project_reservation_update] 
  delete    Delete billing/reservation [billing_project_reservation_delete] 
  assign    Assign billing/reservation [billing_project_reservation_assign] 
  extend    Extend billing/reservation [billing_project_reservation_extend] 
  service   Manage services of the reservation                              
  tag       Manage tags of the reservation                                  
  event     Manage events of the reservation
```

#### h1 billing reservation spec

```
h1 billing reservation spec

  Print specification of context 

Synopsis

  $ h1 billing reservation spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options
```

#### h1 billing reservation create

```
h1 billing reservation create

  Create billing/reservation [billing_project_reservation_create] 

Synopsis

  $ h1 billing reservation create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id                                                
  --x-idempotency-key string   Idempotency key                                           
  --name string                Reservation name                                          
  --service id-or-uri          Reservation service. Provide ID or URI of billing/service 
  --tag key=key,value=value    Tag collection                                            
  --skeleton true,false
```

#### h1 billing reservation list

```
h1 billing reservation list

  List billing/reservation [billing_project_reservation_list] 

Synopsis

  $ h1 billing reservation list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id          
  --name string           Filter by name      
  --tag.value string      Filter by tag.value 
  --tag.key string        Filter by tag.key   
  --skeleton true,false
```

#### h1 billing reservation show

```
h1 billing reservation show

  Get billing/reservation [billing_project_reservation_get] 

Synopsis

  $ h1 billing reservation show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --skeleton true,false
```

#### h1 billing reservation update

```
h1 billing reservation update

  Update billing/reservation [billing_project_reservation_update] 

Synopsis

  $ h1 billing reservation update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id                                                             
  --reservation id-or-uri   Reservation Id                                                         
  --name string             Reservation name. Requires permissions billing/reservation.name/update 
  --skeleton true,false
```

#### h1 billing reservation delete

```
h1 billing reservation delete

  Delete billing/reservation [billing_project_reservation_delete] 

Synopsis

  $ h1 billing reservation delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --skeleton true,false
```

#### h1 billing reservation assign

```
h1 billing reservation assign

  Assign billing/reservation [billing_project_reservation_assign] 

Synopsis

  $ h1 billing reservation assign <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id                                                                    
  --reservation id-or-uri      Reservation Id                                                                
  --x-idempotency-key string   Idempotency key                                                               
  --resource id-or-uri         Reservation resource. Provide ID or URI of compute/vm. Requires permissions   
                               compute/vm/use                                                                
  --skeleton true,false
```

#### h1 billing reservation extend

```
h1 billing reservation extend

  Extend billing/reservation [billing_project_reservation_extend] 

Synopsis

  $ h1 billing reservation extend <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id      
  --reservation id-or-uri      Reservation Id  
  --x-idempotency-key string   Idempotency key 
  --skeleton true,false
```

#### h1 billing reservation service

```
h1 billing reservation service

Synopsis

  $ h1 billing reservation service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                              
  list   List billing/reservation.service [billing_project_reservation_service_list] 
  show   Get billing/reservation.service [billing_project_reservation_service_get]
```

##### h1 billing reservation service spec

```
h1 billing reservation service spec

  Print specification of context 

Synopsis

  $ h1 billing reservation service spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options
```

##### h1 billing reservation service list

```
h1 billing reservation service list

  List billing/reservation.service [billing_project_reservation_service_list] 

Synopsis

  $ h1 billing reservation service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --skeleton true,false
```

##### h1 billing reservation service show

```
h1 billing reservation service show

  Get billing/reservation.service [billing_project_reservation_service_get] 

Synopsis

  $ h1 billing reservation service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --service id-or-uri       serviceId      
  --skeleton true,false
```

#### h1 billing reservation tag

```
h1 billing reservation tag

Synopsis

  $ h1 billing reservation tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                          
  create   Create billing/reservation.tag [billing_project_reservation_tag_create] 
  list     List billing/reservation.tag [billing_project_reservation_tag_list]     
  show     Get billing/reservation.tag [billing_project_reservation_tag_get]       
  delete   Delete billing/reservation.tag [billing_project_reservation_tag_delete]
```

##### h1 billing reservation tag spec

```
h1 billing reservation tag spec

  Print specification of context 

Synopsis

  $ h1 billing reservation tag spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options
```

##### h1 billing reservation tag create

```
h1 billing reservation tag create

  Create billing/reservation.tag [billing_project_reservation_tag_create] 

Synopsis

  $ h1 billing reservation tag create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --key string              Tag key        
  --value string            Tag value      
  --skeleton true,false
```

##### h1 billing reservation tag list

```
h1 billing reservation tag list

  List billing/reservation.tag [billing_project_reservation_tag_list] 

Synopsis

  $ h1 billing reservation tag list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --skeleton true,false
```

##### h1 billing reservation tag show

```
h1 billing reservation tag show

  Get billing/reservation.tag [billing_project_reservation_tag_get] 

Synopsis

  $ h1 billing reservation tag show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --tag id-or-uri           tagId          
  --skeleton true,false
```

##### h1 billing reservation tag delete

```
h1 billing reservation tag delete

  Delete billing/reservation.tag [billing_project_reservation_tag_delete] 

Synopsis

  $ h1 billing reservation tag delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --tag id-or-uri           tagId          
  --skeleton true,false
```

#### h1 billing reservation event

```
h1 billing reservation event

Synopsis

  $ h1 billing reservation event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                          
  list   List billing/reservation.event [billing_project_reservation_event_list] 
  show   Get billing/reservation.event [billing_project_reservation_event_get]
```

##### h1 billing reservation event spec

```
h1 billing reservation event spec

  Print specification of context 

Synopsis

  $ h1 billing reservation event spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options
```

##### h1 billing reservation event list

```
h1 billing reservation event list

  List billing/reservation.event [billing_project_reservation_event_list] 

Synopsis

  $ h1 billing reservation event list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --$limit string           $limit         
  --$skip string            $skip          
  --skeleton true,false
```

##### h1 billing reservation event show

```
h1 billing reservation event show

  Get billing/reservation.event [billing_project_reservation_event_get] 

Synopsis

  $ h1 billing reservation event show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri       Project Id     
  --reservation id-or-uri   Reservation Id 
  --event id-or-uri         eventId        
  --skeleton true,false
```

### h1 billing service

```
h1 billing service

Synopsis

  $ h1 billing service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                      
  list   List billing/service [billing_project_service_list] 
  show   Get billing/service [billing_project_service_get]
```

#### h1 billing service spec

```
h1 billing service spec

  Print specification of context 

Synopsis

  $ h1 billing service spec <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options
```

#### h1 billing service list

```
h1 billing service list

  List billing/service [billing_project_service_list] 

Synopsis

  $ h1 billing service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id     
  --kind string           Filter by kind 
  --name string           Filter by name 
  --type string           Filter by type 
  --skeleton true,false
```

#### h1 billing service show

```
h1 billing service show

  Get billing/service [billing_project_service_get] 

Synopsis

  $ h1 billing service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri     Project Id 
  --service id-or-uri     Service Id 
  --skeleton true,false
```

