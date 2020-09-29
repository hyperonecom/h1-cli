## h1 networking

```
h1 networking

Synopsis

  $ h1 networking <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context  
  firewall   Management of firewall resource 
  ip         Management of ip resource       
  netadp     Management of netadp resource   
  netgw      Management of netgw resource    
  network    Management of network resource
```

### h1 networking spec

```
h1 networking spec

  Print specification of context 

Synopsis

  $ h1 networking spec <options> 

Global options

  --help    Show help message and exit. 

Operation options
```

### h1 networking firewall

```
h1 networking firewall

Synopsis

  $ h1 networking firewall <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                                      
  create     Create networking/firewall [networking_project_firewall_create]     
  list       List networking/firewall [networking_project_firewall_list]         
  show       Get networking/firewall [networking_project_firewall_get]           
  update     Update networking/firewall [networking_project_firewall_update]     
  delete     Delete networking/firewall [networking_project_firewall_delete]     
  transfer   Transfer networking/firewall [networking_project_firewall_transfer] 
  ingress    Manage ingresses of the firewall                                    
  egress     Manage egresses of the firewall                                     
  service    Manage services of the firewall                                     
  tag        Manage tags of the firewall                                         
  event      Manage events of the firewall
```

#### h1 networking firewall spec

```
h1 networking firewall spec

  Print specification of context 

Synopsis

  $ h1 networking firewall spec <options> 

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

#### h1 networking firewall create

```
h1 networking firewall create

  Create networking/firewall [networking_project_firewall_create] 

Synopsis

  $ h1 networking firewall create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall create --project 5f64e2468c71177993874510 --name     
  simple-firewall                                                               

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri                                                                                     Project Id 
  --location id-or-uri                                                                                    Location   
                                                                                                          Id         
  --x-idempotency-key string                                                                              Idempotency 
                                                                                                          key        
  --name string                                                                                           Firewall   
                                                                                                          name       
  --service id-or-uri                                                                                     Firewall   
                                                                                                          service.   
                                                                                                          Provide ID 
                                                                                                          or URI of  
                                                                                                          billing/service. 
                                                                                                          Defaults   
                                                                                                          is         
                                                                                                          5bacaf7202deee0c100eda3b 
  --ingress name=name,action=action,priority=priority,filter=filter,external=external,internal=internal   Rule       
                                                                                                          collection 
  --egress name=name,action=action,priority=priority,filter=filter,external=external,internal=internal    Rule       
                                                                                                          collection 
  --tag key=key,value=value                                                                               Tag        
                                                                                                          collection 
  --skeleton true,false
```

#### h1 networking firewall list

```
h1 networking firewall list

  List networking/firewall [networking_project_firewall_list] 

Synopsis

  $ h1 networking firewall list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall list --project 5f64e2468c71177993874510              

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
  --location id-or-uri    Location Id         
  --name string           Filter by name      
  --tag.value string      Filter by tag.value 
  --tag.key string        Filter by tag.key   
  --skeleton true,false
```

#### h1 networking firewall show

```
h1 networking firewall show

  Get networking/firewall [networking_project_firewall_get] 

Synopsis

  $ h1 networking firewall show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall show --project 5f64e2468c71177993874510 --firewall   
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --skeleton true,false
```

#### h1 networking firewall update

```
h1 networking firewall update

  Update networking/firewall [networking_project_firewall_update] 

Synopsis

  $ h1 networking firewall update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 networking firewall update --project 5f64e2468c71177993874510 --firewall 
  5f577a24494c5cfdec7830e5 --name firewall-renamed                              

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
  --location id-or-uri    Location Id                                                         
  --firewall id-or-uri    Firewall Id                                                         
  --name string           Firewall name. Requires permissions networking/firewall.name/update 
  --skeleton true,false
```

#### h1 networking firewall delete

```
h1 networking firewall delete

  Delete networking/firewall [networking_project_firewall_delete] 

Synopsis

  $ h1 networking firewall delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall delete --project 5f64e2468c71177993874510 --firewall 
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --skeleton true,false
```

#### h1 networking firewall transfer

```
h1 networking firewall transfer

  Transfer networking/firewall [networking_project_firewall_transfer] 

Synopsis

  $ h1 networking firewall transfer <options> 

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
  --location id-or-uri         Location Id                                                                   
  --firewall id-or-uri         Firewall Id                                                                   
  --x-idempotency-key string   Idempotency key                                                               
  --project id-or-uri          Firewall project. Provide ID or URI of iam/project. Requires permissions      
                               networking/firewall/create                                                    
  --skeleton true,false
```

#### h1 networking firewall ingress

```
h1 networking firewall ingress

Synopsis

  $ h1 networking firewall ingress <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                                  
  create   Create networking/firewall.ingress [networking_project_firewall_ingress_create] 
  list     List networking/firewall.ingress [networking_project_firewall_ingress_list]     
  show     Get networking/firewall.ingress [networking_project_firewall_ingress_get]       
  delete   Delete networking/firewall.ingress [networking_project_firewall_ingress_delete]
```

##### h1 networking firewall ingress spec

```
h1 networking firewall ingress spec

  Print specification of context 

Synopsis

  $ h1 networking firewall ingress spec <options> 

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

##### h1 networking firewall ingress create

```
h1 networking firewall ingress create

  Create networking/firewall.ingress [networking_project_firewall_ingress_create] 

Synopsis

  $ h1 networking firewall ingress create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall ingress create --project 5f64e2468c71177993874510    
  --firewall 5f577a24494c5cfdec7830e5 --name simple-ingress --action allow      
  --priority 900 --filter tcp:80 --external 0.0.0.0/0 --internal 0.0.0.0/0      

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
  --location id-or-uri    Location Id         
  --firewall id-or-uri    Firewall Id         
  --name string           Rule name           
  --action string         Rule action         
  --priority string       Rule priority       
  --filter string[]       Filter collection   
  --external string[]     External collection 
  --internal string[]     Internal collection 
  --skeleton true,false
```

##### h1 networking firewall ingress list

```
h1 networking firewall ingress list

  List networking/firewall.ingress [networking_project_firewall_ingress_list] 

Synopsis

  $ h1 networking firewall ingress list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall ingress list --project 5f64e2468c71177993874510      
  --firewall 5f577a24494c5cfdec7830e5                                           

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --skeleton true,false
```

##### h1 networking firewall ingress show

```
h1 networking firewall ingress show

  Get networking/firewall.ingress [networking_project_firewall_ingress_get] 

Synopsis

  $ h1 networking firewall ingress show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall ingress show --project 5f64e2468c71177993874510      
  --firewall 5f577a24494c5cfdec7830e5 --ingress 5f60cbbe494c5cfdec81cc6b        

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --ingress id-or-uri     ingressId   
  --skeleton true,false
```

##### h1 networking firewall ingress delete

```
h1 networking firewall ingress delete

  Delete networking/firewall.ingress [networking_project_firewall_ingress_delete] 

Synopsis

  $ h1 networking firewall ingress delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall ingress delete --project 5f64e2468c71177993874510    
  --firewall 5f577a24494c5cfdec7830e5 --ingress 5f60cbbe494c5cfdec81cc6b        

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --ingress id-or-uri     ingressId   
  --skeleton true,false
```

#### h1 networking firewall egress

```
h1 networking firewall egress

Synopsis

  $ h1 networking firewall egress <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                                
  create   Create networking/firewall.egress [networking_project_firewall_egress_create] 
  list     List networking/firewall.egress [networking_project_firewall_egress_list]     
  show     Get networking/firewall.egress [networking_project_firewall_egress_get]       
  delete   Delete networking/firewall.egress [networking_project_firewall_egress_delete]
```

##### h1 networking firewall egress spec

```
h1 networking firewall egress spec

  Print specification of context 

Synopsis

  $ h1 networking firewall egress spec <options> 

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

##### h1 networking firewall egress create

```
h1 networking firewall egress create

  Create networking/firewall.egress [networking_project_firewall_egress_create] 

Synopsis

  $ h1 networking firewall egress create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall egress create --project 5f64e2468c71177993874510     
  --firewall 5f577a24494c5cfdec7830e5 --name simple-egress --action allow       
  --priority 900 --filter tcp:80 --external 0.0.0.0/0 --internal 0.0.0.0/0      

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
  --location id-or-uri    Location Id         
  --firewall id-or-uri    Firewall Id         
  --name string           Rule name           
  --action string         Rule action         
  --priority string       Rule priority       
  --filter string[]       Filter collection   
  --external string[]     External collection 
  --internal string[]     Internal collection 
  --skeleton true,false
```

##### h1 networking firewall egress list

```
h1 networking firewall egress list

  List networking/firewall.egress [networking_project_firewall_egress_list] 

Synopsis

  $ h1 networking firewall egress list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall egress list --project 5f64e2468c71177993874510       
  --firewall 5f577a24494c5cfdec7830e5                                           

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --skeleton true,false
```

##### h1 networking firewall egress show

```
h1 networking firewall egress show

  Get networking/firewall.egress [networking_project_firewall_egress_get] 

Synopsis

  $ h1 networking firewall egress show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall egress show --project 5f64e2468c71177993874510       
  --firewall 5f577a24494c5cfdec7830e5 --egress 5f60cbbe494c5cfdec81cc6b         

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --egress id-or-uri      egressId    
  --skeleton true,false
```

##### h1 networking firewall egress delete

```
h1 networking firewall egress delete

  Delete networking/firewall.egress [networking_project_firewall_egress_delete] 

Synopsis

  $ h1 networking firewall egress delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall egress delete --project 5f64e2468c71177993874510     
  --firewall 5f577a24494c5cfdec7830e5 --egress 5f60cbbe494c5cfdec81cc6b         

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --egress id-or-uri      egressId    
  --skeleton true,false
```

#### h1 networking firewall service

```
h1 networking firewall service

Synopsis

  $ h1 networking firewall service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                              
  list   List networking/firewall.service [networking_project_firewall_service_list] 
  show   Get networking/firewall.service [networking_project_firewall_service_get]
```

##### h1 networking firewall service spec

```
h1 networking firewall service spec

  Print specification of context 

Synopsis

  $ h1 networking firewall service spec <options> 

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

##### h1 networking firewall service list

```
h1 networking firewall service list

  List networking/firewall.service [networking_project_firewall_service_list] 

Synopsis

  $ h1 networking firewall service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall service list --project 5f64e2468c71177993874510      
  --firewall 5f577a24494c5cfdec7830e5                                           

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --skeleton true,false
```

##### h1 networking firewall service show

```
h1 networking firewall service show

  Get networking/firewall.service [networking_project_firewall_service_get] 

Synopsis

  $ h1 networking firewall service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall service show --project 5f64e2468c71177993874510      
  --firewall 5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b        

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --service id-or-uri     serviceId   
  --skeleton true,false
```

#### h1 networking firewall tag

```
h1 networking firewall tag

Synopsis

  $ h1 networking firewall tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                          
  create   Create networking/firewall.tag [networking_project_firewall_tag_create] 
  list     List networking/firewall.tag [networking_project_firewall_tag_list]     
  show     Get networking/firewall.tag [networking_project_firewall_tag_get]       
  delete   Delete networking/firewall.tag [networking_project_firewall_tag_delete]
```

##### h1 networking firewall tag spec

```
h1 networking firewall tag spec

  Print specification of context 

Synopsis

  $ h1 networking firewall tag spec <options> 

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

##### h1 networking firewall tag create

```
h1 networking firewall tag create

  Create networking/firewall.tag [networking_project_firewall_tag_create] 

Synopsis

  $ h1 networking firewall tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall tag create --project 5f64e2468c71177993874510        
  --firewall 5f577a24494c5cfdec7830e5 --key x --value x                         

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --key string            Tag key     
  --value string          Tag value   
  --skeleton true,false
```

##### h1 networking firewall tag list

```
h1 networking firewall tag list

  List networking/firewall.tag [networking_project_firewall_tag_list] 

Synopsis

  $ h1 networking firewall tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall tag list --project 5f64e2468c71177993874510          
  --firewall 5f577a24494c5cfdec7830e5                                           

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --skeleton true,false
```

##### h1 networking firewall tag show

```
h1 networking firewall tag show

  Get networking/firewall.tag [networking_project_firewall_tag_get] 

Synopsis

  $ h1 networking firewall tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall tag show --project 5f64e2468c71177993874510          
  --firewall 5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b            

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --tag id-or-uri         tagId       
  --skeleton true,false
```

##### h1 networking firewall tag delete

```
h1 networking firewall tag delete

  Delete networking/firewall.tag [networking_project_firewall_tag_delete] 

Synopsis

  $ h1 networking firewall tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall tag delete --project 5f64e2468c71177993874510        
  --firewall 5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b            

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --tag id-or-uri         tagId       
  --skeleton true,false
```

#### h1 networking firewall event

```
h1 networking firewall event

Synopsis

  $ h1 networking firewall event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                          
  list   List networking/firewall.event [networking_project_firewall_event_list] 
  show   Get networking/firewall.event [networking_project_firewall_event_get]
```

##### h1 networking firewall event spec

```
h1 networking firewall event spec

  Print specification of context 

Synopsis

  $ h1 networking firewall event spec <options> 

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

##### h1 networking firewall event list

```
h1 networking firewall event list

  List networking/firewall.event [networking_project_firewall_event_list] 

Synopsis

  $ h1 networking firewall event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall event list --project 5f64e2468c71177993874510        
  --firewall 5f577a24494c5cfdec7830e5                                           

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --$limit string         $limit      
  --$skip string          $skip       
  --skeleton true,false
```

##### h1 networking firewall event show

```
h1 networking firewall event show

  Get networking/firewall.event [networking_project_firewall_event_get] 

Synopsis

  $ h1 networking firewall event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking firewall event show --project 5f64e2468c71177993874510        
  --firewall 5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b          

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
  --location id-or-uri    Location Id 
  --firewall id-or-uri    Firewall Id 
  --event id-or-uri       eventId     
  --skeleton true,false
```

### h1 networking ip

```
h1 networking ip

Synopsis

  $ h1 networking ip <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec           Print specification of context                                  
  create         Create networking/ip [networking_project_ip_create]             
  list           List networking/ip [networking_project_ip_list]                 
  show           Get networking/ip [networking_project_ip_get]                   
  update         Update networking/ip [networking_project_ip_update]             
  delete         Delete networking/ip [networking_project_ip_delete]             
  persist        Persist networking/ip [networking_project_ip_persist]           
  associate      Associate networking/ip [networking_project_ip_associate]       
  disassociate   Disassociate networking/ip [networking_project_ip_disassociate] 
  transfer       Transfer networking/ip [networking_project_ip_transfer]         
  service        Manage services of the ip                                       
  tag            Manage tags of the ip                                           
  event          Manage events of the ip
```

#### h1 networking ip spec

```
h1 networking ip spec

  Print specification of context 

Synopsis

  $ h1 networking ip spec <options> 

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

#### h1 networking ip create

```
h1 networking ip create

  Create networking/ip [networking_project_ip_create] 

Synopsis

  $ h1 networking ip create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip create --project 5f64e2468c71177993874510                  

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
  --location id-or-uri         Location Id                                                                   
  --x-idempotency-key string   Idempotency key                                                               
  --network id-or-uri          Ip network. Provide ID or URI of networking/network. Requires permissions     
                               networking/network/use                                                        
  --ptr-record string          Ip ptrRecord                                                                  
  --address string             Ip address                                                                    
  --tag key=key,value=value    Tag collection                                                                
  --skeleton true,false
```

#### h1 networking ip list

```
h1 networking ip list

  List networking/ip [networking_project_ip_list] 

Synopsis

  $ h1 networking ip list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip list --project 5f64e2468c71177993874510                    

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
  --location id-or-uri         Location Id                 
  --network string             Filter by network           
  --associated.netadp string   Filter by associated.netadp 
  --tag.value string           Filter by tag.value         
  --tag.key string             Filter by tag.key           
  --skeleton true,false
```

#### h1 networking ip show

```
h1 networking ip show

  Get networking/ip [networking_project_ip_get] 

Synopsis

  $ h1 networking ip show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip show --project 5f64e2468c71177993874510 --ip               
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --ip id-or-uri          Ip Id       
  --skeleton true,false
```

#### h1 networking ip update

```
h1 networking ip update

  Update networking/ip [networking_project_ip_update] 

Synopsis

  $ h1 networking ip update <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip update --project 5f64e2468c71177993874510 --ip             
  5f577a24494c5cfdec7830e5 --ptr-record ip-updated                              

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
  --location id-or-uri    Location Id                                                       
  --ip id-or-uri          Ip Id                                                             
  --ptr-record string     Ip ptrRecord. Requires permissions networking/ip.ptrRecord/update 
  --skeleton true,false
```

#### h1 networking ip delete

```
h1 networking ip delete

  Delete networking/ip [networking_project_ip_delete] 

Synopsis

  $ h1 networking ip delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip delete --project 5f64e2468c71177993874510 --ip             
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --ip id-or-uri          Ip Id       
  --skeleton true,false
```

#### h1 networking ip persist

```
h1 networking ip persist

  Persist networking/ip [networking_project_ip_persist] 

Synopsis

  $ h1 networking ip persist <options> 

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
  --location id-or-uri         Location Id     
  --ip id-or-uri               Ip Id           
  --x-idempotency-key string   Idempotency key 
  --skeleton true,false
```

#### h1 networking ip associate

```
h1 networking ip associate

  Associate networking/ip [networking_project_ip_associate] 

Synopsis

  $ h1 networking ip associate <options> 

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
  --location id-or-uri         Location Id                                                                   
  --ip id-or-uri               Ip Id                                                                         
  --x-idempotency-key string   Idempotency key                                                               
  --ip id-or-uri               Ip ip. Provide ID or URI of networking/ip. Requires permissions               
                               networking/ip/use                                                             
  --skeleton true,false
```

#### h1 networking ip disassociate

```
h1 networking ip disassociate

  Disassociate networking/ip [networking_project_ip_disassociate] 

Synopsis

  $ h1 networking ip disassociate <options> 

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
  --location id-or-uri         Location Id     
  --ip id-or-uri               Ip Id           
  --x-idempotency-key string   Idempotency key 
  --skeleton true,false
```

#### h1 networking ip transfer

```
h1 networking ip transfer

  Transfer networking/ip [networking_project_ip_transfer] 

Synopsis

  $ h1 networking ip transfer <options> 

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
  --location id-or-uri         Location Id                                                                   
  --ip id-or-uri               Ip Id                                                                         
  --x-idempotency-key string   Idempotency key                                                               
  --project id-or-uri          Ip project. Provide ID or URI of iam/project. Requires permissions            
                               networking/ip/create                                                          
  --skeleton true,false
```

#### h1 networking ip service

```
h1 networking ip service

Synopsis

  $ h1 networking ip service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                  
  list   List networking/ip.service [networking_project_ip_service_list] 
  show   Get networking/ip.service [networking_project_ip_service_get]
```

##### h1 networking ip service spec

```
h1 networking ip service spec

  Print specification of context 

Synopsis

  $ h1 networking ip service spec <options> 

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

##### h1 networking ip service list

```
h1 networking ip service list

  List networking/ip.service [networking_project_ip_service_list] 

Synopsis

  $ h1 networking ip service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip service list --project 5f64e2468c71177993874510 --ip       
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --ip id-or-uri          Ip Id       
  --skeleton true,false
```

##### h1 networking ip service show

```
h1 networking ip service show

  Get networking/ip.service [networking_project_ip_service_get] 

Synopsis

  $ h1 networking ip service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip service show --project 5f64e2468c71177993874510 --ip       
  5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b                   

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
  --location id-or-uri    Location Id 
  --ip id-or-uri          Ip Id       
  --service id-or-uri     serviceId   
  --skeleton true,false
```

#### h1 networking ip tag

```
h1 networking ip tag

Synopsis

  $ h1 networking ip tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                              
  create   Create networking/ip.tag [networking_project_ip_tag_create] 
  list     List networking/ip.tag [networking_project_ip_tag_list]     
  show     Get networking/ip.tag [networking_project_ip_tag_get]       
  delete   Delete networking/ip.tag [networking_project_ip_tag_delete]
```

##### h1 networking ip tag spec

```
h1 networking ip tag spec

  Print specification of context 

Synopsis

  $ h1 networking ip tag spec <options> 

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

##### h1 networking ip tag create

```
h1 networking ip tag create

  Create networking/ip.tag [networking_project_ip_tag_create] 

Synopsis

  $ h1 networking ip tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip tag create --project 5f64e2468c71177993874510 --ip         
  5f577a24494c5cfdec7830e5 --key x --value x                                    

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
  --location id-or-uri    Location Id 
  --ip id-or-uri          Ip Id       
  --key string            Tag key     
  --value string          Tag value   
  --skeleton true,false
```

##### h1 networking ip tag list

```
h1 networking ip tag list

  List networking/ip.tag [networking_project_ip_tag_list] 

Synopsis

  $ h1 networking ip tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip tag list --project 5f64e2468c71177993874510 --ip           
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --ip id-or-uri          Ip Id       
  --skeleton true,false
```

##### h1 networking ip tag show

```
h1 networking ip tag show

  Get networking/ip.tag [networking_project_ip_tag_get] 

Synopsis

  $ h1 networking ip tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip tag show --project 5f64e2468c71177993874510 --ip           
  5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b                       

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
  --location id-or-uri    Location Id 
  --ip id-or-uri          Ip Id       
  --tag id-or-uri         tagId       
  --skeleton true,false
```

##### h1 networking ip tag delete

```
h1 networking ip tag delete

  Delete networking/ip.tag [networking_project_ip_tag_delete] 

Synopsis

  $ h1 networking ip tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip tag delete --project 5f64e2468c71177993874510 --ip         
  5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b                       

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
  --location id-or-uri    Location Id 
  --ip id-or-uri          Ip Id       
  --tag id-or-uri         tagId       
  --skeleton true,false
```

#### h1 networking ip event

```
h1 networking ip event

Synopsis

  $ h1 networking ip event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                              
  list   List networking/ip.event [networking_project_ip_event_list] 
  show   Get networking/ip.event [networking_project_ip_event_get]
```

##### h1 networking ip event spec

```
h1 networking ip event spec

  Print specification of context 

Synopsis

  $ h1 networking ip event spec <options> 

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

##### h1 networking ip event list

```
h1 networking ip event list

  List networking/ip.event [networking_project_ip_event_list] 

Synopsis

  $ h1 networking ip event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip event list --project 5f64e2468c71177993874510 --ip         
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --ip id-or-uri          Ip Id       
  --$limit string         $limit      
  --$skip string          $skip       
  --skeleton true,false
```

##### h1 networking ip event show

```
h1 networking ip event show

  Get networking/ip.event [networking_project_ip_event_get] 

Synopsis

  $ h1 networking ip event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking ip event show --project 5f64e2468c71177993874510 --ip         
  5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b                     

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
  --location id-or-uri    Location Id 
  --ip id-or-uri          Ip Id       
  --event id-or-uri       eventId     
  --skeleton true,false
```

### h1 networking netadp

```
h1 networking netadp

Synopsis

  $ h1 networking netadp <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                              
  create    Create networking/netadp [networking_project_netadp_create] 
  list      List networking/netadp [networking_project_netadp_list]     
  show      Get networking/netadp [networking_project_netadp_get]       
  update    Update networking/netadp [networking_project_netadp_update] 
  delete    Delete networking/netadp [networking_project_netadp_delete] 
  service   Manage services of the netadp                               
  tag       Manage tags of the netadp                                   
  event     Manage events of the netadp
```

#### h1 networking netadp spec

```
h1 networking netadp spec

  Print specification of context 

Synopsis

  $ h1 networking netadp spec <options> 

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

#### h1 networking netadp create

```
h1 networking netadp create

  Create networking/netadp [networking_project_netadp_create] 

Synopsis

  $ h1 networking netadp create <options> 

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
  --location id-or-uri         Location Id                                                                   
  --x-idempotency-key string   Idempotency key                                                               
  --vm id-or-uri               Netadp vm. Provide ID or URI of compute/vm. Requires permissions              
                               compute/vm/use                                                                
  --network id-or-uri          Netadp network. Provide ID or URI of networking/network. Requires permissions 
                               networking/network/use                                                        
  --firewall id-or-uri         Netadp firewall. Provide ID or URI of networking/firewall. Requires           
                               permissions networking/firewall/use                                           
  --ip string[]                Ip collection                                                                 
  --tag key=key,value=value    Tag collection                                                                
  --skeleton true,false
```

#### h1 networking netadp list

```
h1 networking netadp list

  List networking/netadp [networking_project_netadp_list] 

Synopsis

  $ h1 networking netadp list <options> 

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
  --location id-or-uri         Location Id                 
  --assigned.resource string   Filter by assigned.resource 
  --assigned.id string         Filter by assigned.id       
  --network string             Filter by network           
  --tag.value string           Filter by tag.value         
  --tag.key string             Filter by tag.key           
  --skeleton true,false
```

#### h1 networking netadp show

```
h1 networking netadp show

  Get networking/netadp [networking_project_netadp_get] 

Synopsis

  $ h1 networking netadp show <options> 

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
  --location id-or-uri    Location Id 
  --netadp id-or-uri      Netadp Id   
  --skeleton true,false
```

#### h1 networking netadp update

```
h1 networking netadp update

  Update networking/netadp [networking_project_netadp_update] 

Synopsis

  $ h1 networking netadp update <options> 

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
  --location id-or-uri    Location Id                                                                   
  --netadp id-or-uri      Netadp Id                                                                     
  --firewall id-or-uri    Netadp firewall. Provide ID or URI of networking/firewall. Requires           
                          permissions networking/firewall/use, networking/netadp.firewall/update        
  --skeleton true,false
```

#### h1 networking netadp delete

```
h1 networking netadp delete

  Delete networking/netadp [networking_project_netadp_delete] 

Synopsis

  $ h1 networking netadp delete <options> 

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
  --location id-or-uri    Location Id 
  --netadp id-or-uri      Netadp Id   
  --skeleton true,false
```

#### h1 networking netadp service

```
h1 networking netadp service

Synopsis

  $ h1 networking netadp service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                          
  list   List networking/netadp.service [networking_project_netadp_service_list] 
  show   Get networking/netadp.service [networking_project_netadp_service_get]
```

##### h1 networking netadp service spec

```
h1 networking netadp service spec

  Print specification of context 

Synopsis

  $ h1 networking netadp service spec <options> 

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

##### h1 networking netadp service list

```
h1 networking netadp service list

  List networking/netadp.service [networking_project_netadp_service_list] 

Synopsis

  $ h1 networking netadp service list <options> 

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
  --location id-or-uri    Location Id 
  --netadp id-or-uri      Netadp Id   
  --skeleton true,false
```

##### h1 networking netadp service show

```
h1 networking netadp service show

  Get networking/netadp.service [networking_project_netadp_service_get] 

Synopsis

  $ h1 networking netadp service show <options> 

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
  --location id-or-uri    Location Id 
  --netadp id-or-uri      Netadp Id   
  --service id-or-uri     serviceId   
  --skeleton true,false
```

#### h1 networking netadp tag

```
h1 networking netadp tag

Synopsis

  $ h1 networking netadp tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                      
  create   Create networking/netadp.tag [networking_project_netadp_tag_create] 
  list     List networking/netadp.tag [networking_project_netadp_tag_list]     
  show     Get networking/netadp.tag [networking_project_netadp_tag_get]       
  delete   Delete networking/netadp.tag [networking_project_netadp_tag_delete]
```

##### h1 networking netadp tag spec

```
h1 networking netadp tag spec

  Print specification of context 

Synopsis

  $ h1 networking netadp tag spec <options> 

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

##### h1 networking netadp tag create

```
h1 networking netadp tag create

  Create networking/netadp.tag [networking_project_netadp_tag_create] 

Synopsis

  $ h1 networking netadp tag create <options> 

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
  --location id-or-uri    Location Id 
  --netadp id-or-uri      Netadp Id   
  --key string            Tag key     
  --value string          Tag value   
  --skeleton true,false
```

##### h1 networking netadp tag list

```
h1 networking netadp tag list

  List networking/netadp.tag [networking_project_netadp_tag_list] 

Synopsis

  $ h1 networking netadp tag list <options> 

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
  --location id-or-uri    Location Id 
  --netadp id-or-uri      Netadp Id   
  --skeleton true,false
```

##### h1 networking netadp tag show

```
h1 networking netadp tag show

  Get networking/netadp.tag [networking_project_netadp_tag_get] 

Synopsis

  $ h1 networking netadp tag show <options> 

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
  --location id-or-uri    Location Id 
  --netadp id-or-uri      Netadp Id   
  --tag id-or-uri         tagId       
  --skeleton true,false
```

##### h1 networking netadp tag delete

```
h1 networking netadp tag delete

  Delete networking/netadp.tag [networking_project_netadp_tag_delete] 

Synopsis

  $ h1 networking netadp tag delete <options> 

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
  --location id-or-uri    Location Id 
  --netadp id-or-uri      Netadp Id   
  --tag id-or-uri         tagId       
  --skeleton true,false
```

#### h1 networking netadp event

```
h1 networking netadp event

Synopsis

  $ h1 networking netadp event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                      
  list   List networking/netadp.event [networking_project_netadp_event_list] 
  show   Get networking/netadp.event [networking_project_netadp_event_get]
```

##### h1 networking netadp event spec

```
h1 networking netadp event spec

  Print specification of context 

Synopsis

  $ h1 networking netadp event spec <options> 

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

##### h1 networking netadp event list

```
h1 networking netadp event list

  List networking/netadp.event [networking_project_netadp_event_list] 

Synopsis

  $ h1 networking netadp event list <options> 

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
  --location id-or-uri    Location Id 
  --netadp id-or-uri      Netadp Id   
  --$limit string         $limit      
  --$skip string          $skip       
  --skeleton true,false
```

##### h1 networking netadp event show

```
h1 networking netadp event show

  Get networking/netadp.event [networking_project_netadp_event_get] 

Synopsis

  $ h1 networking netadp event show <options> 

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
  --location id-or-uri    Location Id 
  --netadp id-or-uri      Netadp Id   
  --event id-or-uri       eventId     
  --skeleton true,false
```

### h1 networking netgw

```
h1 networking netgw

Synopsis

  $ h1 networking netgw <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                            
  create    Create networking/netgw [networking_project_netgw_create] 
  list      List networking/netgw [networking_project_netgw_list]     
  show      Get networking/netgw [networking_project_netgw_get]       
  update    Update networking/netgw [networking_project_netgw_update] 
  delete    Delete networking/netgw [networking_project_netgw_delete] 
  attach    Attach networking/netgw [networking_project_netgw_attach] 
  detach    Detach networking/netgw [networking_project_netgw_detach] 
  service   Manage services of the netgw                              
  tag       Manage tags of the netgw                                  
  event     Manage events of the netgw
```

#### h1 networking netgw spec

```
h1 networking netgw spec

  Print specification of context 

Synopsis

  $ h1 networking netgw spec <options> 

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

#### h1 networking netgw create

```
h1 networking netgw create

  Create networking/netgw [networking_project_netgw_create] 

Synopsis

  $ h1 networking netgw create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw create --project 5f64e2468c71177993874510 --name        
  simple-netgw --public-ip /networking/pl-waw-                                  
  1/project/5f64e2468c71177993874510/ip/5f50e6fe8139642f0c8fcca1                

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
  --location id-or-uri         Location Id                                                                   
  --x-idempotency-key string   Idempotency key                                                               
  --name string                Netgw name                                                                    
  --public-ip id-or-uri        Public ip. Provide ID or URI of networking/ip. Requires permissions           
                               networking/ip/use                                                             
  --tag key=key,value=value    Tag collection                                                                
  --skeleton true,false
```

#### h1 networking netgw list

```
h1 networking netgw list

  List networking/netgw [networking_project_netgw_list] 

Synopsis

  $ h1 networking netgw list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw list --project 5f64e2468c71177993874510                 

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
  --location id-or-uri    Location Id         
  --name string           Filter by name      
  --tag.value string      Filter by tag.value 
  --tag.key string        Filter by tag.key   
  --skeleton true,false
```

#### h1 networking netgw show

```
h1 networking netgw show

  Get networking/netgw [networking_project_netgw_get] 

Synopsis

  $ h1 networking netgw show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw show --project 5f64e2468c71177993874510 --netgw         
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --netgw id-or-uri       Netgw Id    
  --skeleton true,false
```

#### h1 networking netgw update

```
h1 networking netgw update

  Update networking/netgw [networking_project_netgw_update] 

Synopsis

  $ h1 networking netgw update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 networking netgw update --project 5f64e2468c71177993874510 --netgw       
  5f577a24494c5cfdec7830e5 --name netgw-renamed                                 

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
  --location id-or-uri    Location Id                                                   
  --netgw id-or-uri       Netgw Id                                                      
  --name string           Netgw name. Requires permissions networking/netgw.name/update 
  --skeleton true,false
```

#### h1 networking netgw delete

```
h1 networking netgw delete

  Delete networking/netgw [networking_project_netgw_delete] 

Synopsis

  $ h1 networking netgw delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw delete --project 5f64e2468c71177993874510 --netgw       
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --netgw id-or-uri       Netgw Id    
  --skeleton true,false
```

#### h1 networking netgw attach

```
h1 networking netgw attach

  Attach networking/netgw [networking_project_netgw_attach] 

Synopsis

  $ h1 networking netgw attach <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri           Project Id                                                                    
  --location id-or-uri          Location Id                                                                   
  --netgw id-or-uri             Netgw Id                                                                      
  --x-idempotency-key string    Idempotency key                                                               
  --private-network id-or-uri   Private network. Provide ID or URI of networking/network. Requires            
                                permissions networking/network/use                                            
  --skeleton true,false
```

#### h1 networking netgw detach

```
h1 networking netgw detach

  Detach networking/netgw [networking_project_netgw_detach] 

Synopsis

  $ h1 networking netgw detach <options> 

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
  --location id-or-uri         Location Id     
  --netgw id-or-uri            Netgw Id        
  --x-idempotency-key string   Idempotency key 
  --skeleton true,false
```

#### h1 networking netgw service

```
h1 networking netgw service

Synopsis

  $ h1 networking netgw service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                        
  list   List networking/netgw.service [networking_project_netgw_service_list] 
  show   Get networking/netgw.service [networking_project_netgw_service_get]
```

##### h1 networking netgw service spec

```
h1 networking netgw service spec

  Print specification of context 

Synopsis

  $ h1 networking netgw service spec <options> 

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

##### h1 networking netgw service list

```
h1 networking netgw service list

  List networking/netgw.service [networking_project_netgw_service_list] 

Synopsis

  $ h1 networking netgw service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw service list --project 5f64e2468c71177993874510 --netgw 
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --netgw id-or-uri       Netgw Id    
  --skeleton true,false
```

##### h1 networking netgw service show

```
h1 networking netgw service show

  Get networking/netgw.service [networking_project_netgw_service_get] 

Synopsis

  $ h1 networking netgw service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw service show --project 5f64e2468c71177993874510 --netgw 
  5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b                   

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
  --location id-or-uri    Location Id 
  --netgw id-or-uri       Netgw Id    
  --service id-or-uri     serviceId   
  --skeleton true,false
```

#### h1 networking netgw tag

```
h1 networking netgw tag

Synopsis

  $ h1 networking netgw tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                    
  create   Create networking/netgw.tag [networking_project_netgw_tag_create] 
  list     List networking/netgw.tag [networking_project_netgw_tag_list]     
  show     Get networking/netgw.tag [networking_project_netgw_tag_get]       
  delete   Delete networking/netgw.tag [networking_project_netgw_tag_delete]
```

##### h1 networking netgw tag spec

```
h1 networking netgw tag spec

  Print specification of context 

Synopsis

  $ h1 networking netgw tag spec <options> 

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

##### h1 networking netgw tag create

```
h1 networking netgw tag create

  Create networking/netgw.tag [networking_project_netgw_tag_create] 

Synopsis

  $ h1 networking netgw tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw tag create --project 5f64e2468c71177993874510 --netgw   
  5f577a24494c5cfdec7830e5 --key x --value x                                    

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
  --location id-or-uri    Location Id 
  --netgw id-or-uri       Netgw Id    
  --key string            Tag key     
  --value string          Tag value   
  --skeleton true,false
```

##### h1 networking netgw tag list

```
h1 networking netgw tag list

  List networking/netgw.tag [networking_project_netgw_tag_list] 

Synopsis

  $ h1 networking netgw tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw tag list --project 5f64e2468c71177993874510 --netgw     
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --netgw id-or-uri       Netgw Id    
  --skeleton true,false
```

##### h1 networking netgw tag show

```
h1 networking netgw tag show

  Get networking/netgw.tag [networking_project_netgw_tag_get] 

Synopsis

  $ h1 networking netgw tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw tag show --project 5f64e2468c71177993874510 --netgw     
  5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b                       

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
  --location id-or-uri    Location Id 
  --netgw id-or-uri       Netgw Id    
  --tag id-or-uri         tagId       
  --skeleton true,false
```

##### h1 networking netgw tag delete

```
h1 networking netgw tag delete

  Delete networking/netgw.tag [networking_project_netgw_tag_delete] 

Synopsis

  $ h1 networking netgw tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw tag delete --project 5f64e2468c71177993874510 --netgw   
  5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b                       

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
  --location id-or-uri    Location Id 
  --netgw id-or-uri       Netgw Id    
  --tag id-or-uri         tagId       
  --skeleton true,false
```

#### h1 networking netgw event

```
h1 networking netgw event

Synopsis

  $ h1 networking netgw event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                    
  list   List networking/netgw.event [networking_project_netgw_event_list] 
  show   Get networking/netgw.event [networking_project_netgw_event_get]
```

##### h1 networking netgw event spec

```
h1 networking netgw event spec

  Print specification of context 

Synopsis

  $ h1 networking netgw event spec <options> 

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

##### h1 networking netgw event list

```
h1 networking netgw event list

  List networking/netgw.event [networking_project_netgw_event_list] 

Synopsis

  $ h1 networking netgw event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw event list --project 5f64e2468c71177993874510 --netgw   
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --netgw id-or-uri       Netgw Id    
  --$limit string         $limit      
  --$skip string          $skip       
  --skeleton true,false
```

##### h1 networking netgw event show

```
h1 networking netgw event show

  Get networking/netgw.event [networking_project_netgw_event_get] 

Synopsis

  $ h1 networking netgw event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking netgw event show --project 5f64e2468c71177993874510 --netgw   
  5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b                     

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
  --location id-or-uri    Location Id 
  --netgw id-or-uri       Netgw Id    
  --event id-or-uri       eventId     
  --skeleton true,false
```

### h1 networking network

```
h1 networking network

Synopsis

  $ h1 networking network <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                                
  create    Create networking/network [networking_project_network_create] 
  list      List networking/network [networking_project_network_list]     
  show      Get networking/network [networking_project_network_get]       
  update    Update networking/network [networking_project_network_update] 
  delete    Delete networking/network [networking_project_network_delete] 
  service   Manage services of the network                                
  tag       Manage tags of the network                                    
  event     Manage events of the network
```

#### h1 networking network spec

```
h1 networking network spec

  Print specification of context 

Synopsis

  $ h1 networking network spec <options> 

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

#### h1 networking network create

```
h1 networking network create

  Create networking/network [networking_project_network_create] 

Synopsis

  $ h1 networking network create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network create --project 5f64e2468c71177993874510 --name      
  simple-network                                                                

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
  --location id-or-uri         Location Id     
  --x-idempotency-key string   Idempotency key 
  --name string                Network name    
  --address string             Network address 
  --gateway string             Network gateway 
  --tag key=key,value=value    Tag collection  
  --skeleton true,false
```

#### h1 networking network list

```
h1 networking network list

  List networking/network [networking_project_network_list] 

Synopsis

  $ h1 networking network list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network list --project 5f64e2468c71177993874510               

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
  --location id-or-uri    Location Id         
  --name string           Filter by name      
  --tag.value string      Filter by tag.value 
  --tag.key string        Filter by tag.key   
  --skeleton true,false
```

#### h1 networking network show

```
h1 networking network show

  Get networking/network [networking_project_network_get] 

Synopsis

  $ h1 networking network show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network show --project 5f64e2468c71177993874510 --network     
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --network id-or-uri     Network Id  
  --skeleton true,false
```

#### h1 networking network update

```
h1 networking network update

  Update networking/network [networking_project_network_update] 

Synopsis

  $ h1 networking network update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 networking network update --project 5f64e2468c71177993874510 --network   
  5f577a24494c5cfdec7830e5 --name network-renamed                               

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
  --location id-or-uri    Location Id                                                                   
  --network id-or-uri     Network Id                                                                    
  --name string           Network name. Requires permissions networking/network.name/update             
  --gateway string        Network gateway. Requires permissions networking/network.gateway/update       
  --firewall id-or-uri    Network firewall. Provide ID or URI of networking/firewall. Requires          
                          permissions networking/firewall/use, networking/network.firewall/update       
  --skeleton true,false
```

#### h1 networking network delete

```
h1 networking network delete

  Delete networking/network [networking_project_network_delete] 

Synopsis

  $ h1 networking network delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network delete --project 5f64e2468c71177993874510 --network   
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --network id-or-uri     Network Id  
  --skeleton true,false
```

#### h1 networking network service

```
h1 networking network service

Synopsis

  $ h1 networking network service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                            
  list   List networking/network.service [networking_project_network_service_list] 
  show   Get networking/network.service [networking_project_network_service_get]
```

##### h1 networking network service spec

```
h1 networking network service spec

  Print specification of context 

Synopsis

  $ h1 networking network service spec <options> 

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

##### h1 networking network service list

```
h1 networking network service list

  List networking/network.service [networking_project_network_service_list] 

Synopsis

  $ h1 networking network service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network service list --project 5f64e2468c71177993874510       
  --network 5f577a24494c5cfdec7830e5                                            

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
  --location id-or-uri    Location Id 
  --network id-or-uri     Network Id  
  --skeleton true,false
```

##### h1 networking network service show

```
h1 networking network service show

  Get networking/network.service [networking_project_network_service_get] 

Synopsis

  $ h1 networking network service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network service show --project 5f64e2468c71177993874510       
  --network 5f577a24494c5cfdec7830e5 --service 5f60cbbe494c5cfdec81cc6b         

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
  --location id-or-uri    Location Id 
  --network id-or-uri     Network Id  
  --service id-or-uri     serviceId   
  --skeleton true,false
```

#### h1 networking network tag

```
h1 networking network tag

Synopsis

  $ h1 networking network tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                        
  create   Create networking/network.tag [networking_project_network_tag_create] 
  list     List networking/network.tag [networking_project_network_tag_list]     
  show     Get networking/network.tag [networking_project_network_tag_get]       
  delete   Delete networking/network.tag [networking_project_network_tag_delete]
```

##### h1 networking network tag spec

```
h1 networking network tag spec

  Print specification of context 

Synopsis

  $ h1 networking network tag spec <options> 

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

##### h1 networking network tag create

```
h1 networking network tag create

  Create networking/network.tag [networking_project_network_tag_create] 

Synopsis

  $ h1 networking network tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network tag create --project 5f64e2468c71177993874510         
  --network 5f577a24494c5cfdec7830e5 --key x --value x                          

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
  --location id-or-uri    Location Id 
  --network id-or-uri     Network Id  
  --key string            Tag key     
  --value string          Tag value   
  --skeleton true,false
```

##### h1 networking network tag list

```
h1 networking network tag list

  List networking/network.tag [networking_project_network_tag_list] 

Synopsis

  $ h1 networking network tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network tag list --project 5f64e2468c71177993874510 --network 
  5f577a24494c5cfdec7830e5                                                      

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
  --location id-or-uri    Location Id 
  --network id-or-uri     Network Id  
  --skeleton true,false
```

##### h1 networking network tag show

```
h1 networking network tag show

  Get networking/network.tag [networking_project_network_tag_get] 

Synopsis

  $ h1 networking network tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network tag show --project 5f64e2468c71177993874510 --network 
  5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b                       

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
  --location id-or-uri    Location Id 
  --network id-or-uri     Network Id  
  --tag id-or-uri         tagId       
  --skeleton true,false
```

##### h1 networking network tag delete

```
h1 networking network tag delete

  Delete networking/network.tag [networking_project_network_tag_delete] 

Synopsis

  $ h1 networking network tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network tag delete --project 5f64e2468c71177993874510         
  --network 5f577a24494c5cfdec7830e5 --tag 5f60cbbe494c5cfdec81cc6b             

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
  --location id-or-uri    Location Id 
  --network id-or-uri     Network Id  
  --tag id-or-uri         tagId       
  --skeleton true,false
```

#### h1 networking network event

```
h1 networking network event

Synopsis

  $ h1 networking network event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                        
  list   List networking/network.event [networking_project_network_event_list] 
  show   Get networking/network.event [networking_project_network_event_get]
```

##### h1 networking network event spec

```
h1 networking network event spec

  Print specification of context 

Synopsis

  $ h1 networking network event spec <options> 

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

##### h1 networking network event list

```
h1 networking network event list

  List networking/network.event [networking_project_network_event_list] 

Synopsis

  $ h1 networking network event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network event list --project 5f64e2468c71177993874510         
  --network 5f577a24494c5cfdec7830e5                                            

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
  --location id-or-uri    Location Id 
  --network id-or-uri     Network Id  
  --$limit string         $limit      
  --$skip string          $skip       
  --skeleton true,false
```

##### h1 networking network event show

```
h1 networking network event show

  Get networking/network.event [networking_project_network_event_get] 

Synopsis

  $ h1 networking network event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 networking network event show --project 5f64e2468c71177993874510         
  --network 5f577a24494c5cfdec7830e5 --event 5f60cbbe494c5cfdec81cc6b           

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
  --location id-or-uri    Location Id 
  --network id-or-uri     Network Id  
  --event id-or-uri       eventId     
  --skeleton true,false
```

