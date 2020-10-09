## h1 support

```
h1 support

Synopsis

  $ h1 support <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  ticket   Management of ticket resource
```

### h1 support ticket

```
h1 support ticket

Synopsis

  $ h1 support ticket <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create    Create support/ticket [Operation ID: support_project_ticket_create] 
  list      List support/ticket [Operation ID: support_project_ticket_list]     
  show      Get support/ticket [Operation ID: support_project_ticket_get]       
  close     Close support/ticket [Operation ID: support_project_ticket_close]   
  message   Manage messages of the ticket
```

#### h1 support ticket create

```
h1 support ticket create

  Create support/ticket [Operation ID: support_project_ticket_create] 

Synopsis

  $ h1 support ticket create <options> 

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

  --project id-or-uri                    Project Id      
  --x-idempotency-key string             Idempotency key 
  --type sales,billing,service support   Ticket type     
  --subject string                       Ticket subject  
  --message string                       Ticket message  
  --skeleton
```

#### h1 support ticket list

```
h1 support ticket list

  List support/ticket [Operation ID: support_project_ticket_list] 

Synopsis

  $ h1 support ticket list <options> 

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

  --project id-or-uri   Project Id      
  --state string        Filter by state 
  --skeleton
```

#### h1 support ticket show

```
h1 support ticket show

  Get support/ticket [Operation ID: support_project_ticket_get] 

Synopsis

  $ h1 support ticket show <options> 

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

  --project id-or-uri   Project Id 
  --ticket id-or-uri    Ticket Id  
  --skeleton
```

#### h1 support ticket close

```
h1 support ticket close

  Close support/ticket [Operation ID: support_project_ticket_close] 

Synopsis

  $ h1 support ticket close <options> 

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
  --ticket id-or-uri           Ticket Id       
  --x-idempotency-key string   Idempotency key 
  --skeleton
```

#### h1 support ticket message

```
h1 support ticket message

Synopsis

  $ h1 support ticket message <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create support/ticket.message [Operation ID: support_project_ticket_message_create] 
  list     List support/ticket.message [Operation ID: support_project_ticket_message_list]     
  show     Get support/ticket.message [Operation ID: support_project_ticket_message_get]
```

##### h1 support ticket message create

```
h1 support ticket message create

  Create support/ticket.message [Operation ID:                                  
  support_project_ticket_message_create]                                        

Synopsis

  $ h1 support ticket message create <options> 

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

  --project id-or-uri                           Project Id   
  --ticket id-or-uri                            Ticket Id    
  --type text,attachment                        Message type 
  --data-mime text/plain,image/png,image/jpeg   Data mime    
  --data-body string                            Data body    
  --skeleton
```

##### h1 support ticket message list

```
h1 support ticket message list

  List support/ticket.message [Operation ID: support_project_ticket_message_list] 

Synopsis

  $ h1 support ticket message list <options> 

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

  --project id-or-uri   Project Id 
  --ticket id-or-uri    Ticket Id  
  --skeleton
```

##### h1 support ticket message show

```
h1 support ticket message show

  Get support/ticket.message [Operation ID: support_project_ticket_message_get] 

Synopsis

  $ h1 support ticket message show <options> 

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

  --project id-or-uri   Project Id 
  --ticket id-or-uri    Ticket Id  
  --message id-or-uri   messageId  
  --skeleton
```

