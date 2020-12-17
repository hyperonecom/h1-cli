## h1 iam

```
h1 iam

Synopsis

  $ h1 iam <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  project        Management of project resource      
  organisation   Management of organisation resource
```

### h1 iam project

```
h1 iam project

Synopsis

  $ h1 iam project <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create             Create iam/project [Operation ID: iam_project_create]     
  list               List iam/project [Operation ID: iam_project_list]         
  show               Get iam/project [Operation ID: iam_project_get]           
  update             Update iam/project [Operation ID: iam_project_update]     
  delete             Delete iam/project [Operation ID: iam_project_delete]     
  transfer           Transfer iam/project [Operation ID: iam_project_transfer] 
  billing            Manage billings of the project                            
  payment            Manage payments of the project                            
  invoice            Manage invoices of the project                            
  proforma           Manage proformas of the project                           
  threshold          Manage thresholds of the project                          
  credential-store   Manage credentialStores of the project                    
  quota              Manage quotas of the project                              
  invitation         Manage invitations of the project                         
  ownership          Manage ownerships of the project                          
  service            Manage services of the project                            
  tag                Manage tags of the project                                
  event              Manage events of the project                              
  policy             Manage policies of the project                            
  role               Manage roles of the project                               
  sa                 Manage sas of the project                                 
  select             Select default project
```

#### h1 iam project create

```
h1 iam project create

  Create iam/project [Operation ID: iam_project_create] 

Synopsis

  $ h1 iam project create <options> 

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

  --x-idempotency-key string   Idempotency key                                                               
  --name string                Project name                                                                  
  --organisation id-or-uri     Project organisation. Provide ID or URI of iam/organisation. Requires         
                               permissions iam/project/create                                                
  --tag key=key,value=value    Tag collection                                                                
  --skeleton
```

#### h1 iam project list

```
h1 iam project list

  List iam/project [Operation ID: iam_project_list] 

Synopsis

  $ h1 iam project list <options> 

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

  --name string           Filter by name                               
  --$limit string         Filter by $limit                             
  --active string         Filter by active                             
  --organisation string   Filter by organisation                       
  --$lean string          return a lightweight version of the resource 
  --tag.value string      Filter by tag.value                          
  --tag.key string        Filter by tag.key                            
  --skeleton
```

#### h1 iam project show

```
h1 iam project show

  Get iam/project [Operation ID: iam_project_get] 

Synopsis

  $ h1 iam project show <options> 

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
  --skeleton
```

#### h1 iam project update

```
h1 iam project update

  Update iam/project [Operation ID: iam_project_update] 

Synopsis

  $ h1 iam project update <options> 

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
  --name string         Project name. Requires permissions iam/project.name/update 
  --skeleton
```

#### h1 iam project delete

```
h1 iam project delete

  Delete iam/project [Operation ID: iam_project_delete] 

Synopsis

  $ h1 iam project delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --skeleton
```

#### h1 iam project transfer

```
h1 iam project transfer

  Transfer iam/project [Operation ID: iam_project_transfer] 

Synopsis

  $ h1 iam project transfer <options> 

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
  --organisation id-or-uri     Project organisation. Provide ID or URI of iam/organisation. Requires         
                               permissions                                                                   
  --skeleton
```

#### h1 iam project billing

```
h1 iam project billing

Synopsis

  $ h1 iam project billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/project.billing [Operation ID: iam_project_billing_list]
```

##### h1 iam project billing list

```
h1 iam project billing list

  List iam/project.billing [Operation ID: iam_project_billing_list] 

Synopsis

  $ h1 iam project billing list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri      Project Id    
  --start string           start         
  --end string             end           
  --resource.type string   resource.type 
  --skeleton
```

#### h1 iam project payment

```
h1 iam project payment

Synopsis

  $ h1 iam project payment <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/project.payment [Operation ID: iam_project_payment_list]
```

##### h1 iam project payment list

```
h1 iam project payment list

  List iam/project.payment [Operation ID: iam_project_payment_list] 

Synopsis

  $ h1 iam project payment list <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri   Project Id 
  --skeleton
```

#### h1 iam project invoice

```
h1 iam project invoice

Synopsis

  $ h1 iam project invoice <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/project.invoice [Operation ID: iam_project_invoice_list]
```

##### h1 iam project invoice list

```
h1 iam project invoice list

  List iam/project.invoice [Operation ID: iam_project_invoice_list] 

Synopsis

  $ h1 iam project invoice list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --skeleton
```

#### h1 iam project proforma

```
h1 iam project proforma

Synopsis

  $ h1 iam project proforma <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/project.proforma [Operation ID: iam_project_proforma_list]
```

##### h1 iam project proforma list

```
h1 iam project proforma list

  List iam/project.proforma [Operation ID: iam_project_proforma_list] 

Synopsis

  $ h1 iam project proforma list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --skeleton
```

#### h1 iam project threshold

```
h1 iam project threshold

Synopsis

  $ h1 iam project threshold <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/project.threshold [Operation ID: iam_project_threshold_create] 
  list     List iam/project.threshold [Operation ID: iam_project_threshold_list]     
  show     Get iam/project.threshold [Operation ID: iam_project_threshold_get]       
  delete   Delete iam/project.threshold [Operation ID: iam_project_threshold_delete]
```

##### h1 iam project threshold create

```
h1 iam project threshold create

  Create iam/project.threshold [Operation ID: iam_project_threshold_create] 

Synopsis

  $ h1 iam project threshold create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project threshold create --project 5f64e2468c71177993874510 --value  
  791.3966963963633                                                             

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
  --value string        Threshold value 
  --skeleton
```

##### h1 iam project threshold list

```
h1 iam project threshold list

  List iam/project.threshold [Operation ID: iam_project_threshold_list] 

Synopsis

  $ h1 iam project threshold list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project threshold list --project 5f64e2468c71177993874510            

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
  --skeleton
```

##### h1 iam project threshold show

```
h1 iam project threshold show

  Get iam/project.threshold [Operation ID: iam_project_threshold_get] 

Synopsis

  $ h1 iam project threshold show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project threshold show --project 5f64e2468c71177993874510            
  --threshold 1                                                                 

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
  --threshold id-or-uri   thresholdId 
  --skeleton
```

##### h1 iam project threshold delete

```
h1 iam project threshold delete

  Delete iam/project.threshold [Operation ID: iam_project_threshold_delete] 

Synopsis

  $ h1 iam project threshold delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project threshold delete --project 5f64e2468c71177993874510          
  --threshold 1                                                                 

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
  --threshold id-or-uri   thresholdId 
  --skeleton
```

#### h1 iam project credential-store

```
h1 iam project credential-store

Synopsis

  $ h1 iam project credential-store <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/project.credentialStore [Operation ID: iam_project_credentialStore_create] 
  list     List iam/project.credentialStore [Operation ID: iam_project_credentialStore_list]     
  show     Get iam/project.credentialStore [Operation ID: iam_project_credentialStore_get]       
  update   Update iam/project.credentialStore [Operation ID: iam_project_credentialStore_patch]  
  delete   Delete iam/project.credentialStore [Operation ID: iam_project_credentialStore_delete]
```

##### h1 iam project credential-store create

```
h1 iam project credential-store create

  Create iam/project.credentialStore [Operation ID:                             
  iam_project_credentialStore_create]                                           

Synopsis

  $ h1 iam project credential-store create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project credential-store create --project 5f64e2468c71177993874510   
  --name simple-credential-store --type ssh --value ssh-rsa                     
  AAAAB3NzaC1yc2EAAAADAQABAAABAQC7Ssk/TZy/PS5mtGqNwmgfukrA/QrpW3oyrMM3KViHO9wtIwu1BapTdmUxIWi7TX1Nl51i8040CvTstfi11O4jMk2E5lGYp0TIduo8B8Qo/0wO6s2BrXHtLI1FlctkQacrKTnSINrSEcBbIO6G//S4fiRI5ioK8OAPt/qJK1k74AOnrupsXxTUYggmmIJfto8r1c3ZAhfwnJ4D0SDCoWjL4PLh/UGQv7sN20Z/afWVDCa78TnQ6lGlJe6VRSqoT09kJpt2CW0Pa3Ij1QaSJp6ENHpWAWGLyiwW8rLxCqFriz333yf0zzw2QmiyyNHe1ITG2goJU05pHEYyzYq6xo5X 

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
  --name string         Credential name  
  --type ssh            Credential type  
  --value string        Credential value 
  --token string        Credential token 
  --skeleton
```

##### h1 iam project credential-store list

```
h1 iam project credential-store list

  List iam/project.credentialStore [Operation ID:                               
  iam_project_credentialStore_list]                                             

Synopsis

  $ h1 iam project credential-store list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project credential-store list --project 5f64e2468c71177993874510     

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
  --skeleton
```

##### h1 iam project credential-store show

```
h1 iam project credential-store show

  Get iam/project.credentialStore [Operation ID: iam_project_credentialStore_get] 

Synopsis

  $ h1 iam project credential-store show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project credential-store show --project 5f64e2468c71177993874510     
  --credential-store 5f72c96b02fbdad8a048fa40                                   

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri            Project Id        
  --credential-store id-or-uri   credentialStoreId 
  --skeleton
```

##### h1 iam project credential-store update

```
h1 iam project credential-store update

  Update iam/project.credentialStore [Operation ID:                             
  iam_project_credentialStore_patch]                                            

Synopsis

  $ h1 iam project credential-store update <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri            Project Id                                                                    
  --credential-store id-or-uri   credentialStoreId                                                             
  --name string                  CredentialStore name. Requires permissions                                    
                                 iam/project.credentialStore.name/update                                       
  --skeleton
```

##### h1 iam project credential-store delete

```
h1 iam project credential-store delete

  Delete iam/project.credentialStore [Operation ID:                             
  iam_project_credentialStore_delete]                                           

Synopsis

  $ h1 iam project credential-store delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project credential-store delete --project 5f64e2468c71177993874510   
  --credential-store 5f72c96b02fbdad8a048fa40                                   

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

  --project id-or-uri            Project Id        
  --credential-store id-or-uri   credentialStoreId 
  --skeleton
```

#### h1 iam project quota

```
h1 iam project quota

Synopsis

  $ h1 iam project quota <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list    List iam/project.quota [Operation ID: iam_project_quota_list] 
  show    Get iam/project.quota [Operation ID: iam_project_quota_get]   
  limit   Manage limits of the quota
```

##### h1 iam project quota list

```
h1 iam project quota list

  List iam/project.quota [Operation ID: iam_project_quota_list] 

Synopsis

  $ h1 iam project quota list <options> 

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
  --skeleton
```

##### h1 iam project quota show

```
h1 iam project quota show

  Get iam/project.quota [Operation ID: iam_project_quota_get] 

Synopsis

  $ h1 iam project quota show <options> 

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
  --quota id-or-uri     quotaId    
  --skeleton
```

##### h1 iam project quota limit

```
h1 iam project quota limit

Synopsis

  $ h1 iam project quota limit <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  update   Update iam/project.limit [Operation ID: iam_project_quota_limit_patch]
```

###### h1 iam project quota limit update

```
h1 iam project quota limit update

  Update iam/project.limit [Operation ID: iam_project_quota_limit_patch] 

Synopsis

  $ h1 iam project quota limit update <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{value:@}               
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id                                                     
  --quota id-or-uri     quotaId                                                        
  --user string         Limit user. Requires permissions iam/project.quota.user/update 
  --skeleton
```

#### h1 iam project invitation

```
h1 iam project invitation

Synopsis

  $ h1 iam project invitation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list     List iam/project.invitation [Operation ID: iam_project_invitation_list]     
  show     Get iam/project.invitation [Operation ID: iam_project_invitation_get]       
  delete   Delete iam/project.invitation [Operation ID: iam_project_invitation_delete] 
  accept   Accept iam/project.invitation [Operation ID: iam_project_invitation_accept]
```

##### h1 iam project invitation list

```
h1 iam project invitation list

  List iam/project.invitation [Operation ID: iam_project_invitation_list] 

Synopsis

  $ h1 iam project invitation list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --resource string     resource   
  --skeleton
```

##### h1 iam project invitation show

```
h1 iam project invitation show

  Get iam/project.invitation [Operation ID: iam_project_invitation_get] 

Synopsis

  $ h1 iam project invitation show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri      Project Id   
  --invitation id-or-uri   invitationId 
  --skeleton
```

##### h1 iam project invitation delete

```
h1 iam project invitation delete

  Delete iam/project.invitation [Operation ID: iam_project_invitation_delete] 

Synopsis

  $ h1 iam project invitation delete <options> 

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
  --invitation id-or-uri   invitationId 
  --skeleton
```

##### h1 iam project invitation accept

```
h1 iam project invitation accept

  Accept iam/project.invitation [Operation ID: iam_project_invitation_accept] 

Synopsis

  $ h1 iam project invitation accept <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri      Project Id       
  --invitation id-or-uri   invitationId     
  --token string           Invitation token 
  --skeleton
```

#### h1 iam project ownership

```
h1 iam project ownership

Synopsis

  $ h1 iam project ownership <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/project.ownership [Operation ID: iam_project_ownership_create] 
  list     List iam/project.ownership [Operation ID: iam_project_ownership_list]     
  show     Get iam/project.ownership [Operation ID: iam_project_ownership_get]       
  delete   Delete iam/project.ownership [Operation ID: iam_project_ownership_delete]
```

##### h1 iam project ownership create

```
h1 iam project ownership create

  Create iam/project.ownership [Operation ID: iam_project_ownership_create] 

Synopsis

  $ h1 iam project ownership create <options> 

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
  --email string        Ownership email 
  --skeleton
```

##### h1 iam project ownership list

```
h1 iam project ownership list

  List iam/project.ownership [Operation ID: iam_project_ownership_list] 

Synopsis

  $ h1 iam project ownership list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --skeleton
```

##### h1 iam project ownership show

```
h1 iam project ownership show

  Get iam/project.ownership [Operation ID: iam_project_ownership_get] 

Synopsis

  $ h1 iam project ownership show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri     Project Id  
  --ownership id-or-uri   ownershipId 
  --skeleton
```

##### h1 iam project ownership delete

```
h1 iam project ownership delete

  Delete iam/project.ownership [Operation ID: iam_project_ownership_delete] 

Synopsis

  $ h1 iam project ownership delete <options> 

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
  --ownership id-or-uri   ownershipId 
  --skeleton
```

#### h1 iam project service

```
h1 iam project service

Synopsis

  $ h1 iam project service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/project.service [Operation ID: iam_project_service_list] 
  show   Get iam/project.service [Operation ID: iam_project_service_get]
```

##### h1 iam project service list

```
h1 iam project service list

  List iam/project.service [Operation ID: iam_project_service_list] 

Synopsis

  $ h1 iam project service list <options> 

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
  --skeleton
```

##### h1 iam project service show

```
h1 iam project service show

  Get iam/project.service [Operation ID: iam_project_service_get] 

Synopsis

  $ h1 iam project service show <options> 

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
  --service id-or-uri   serviceId  
  --skeleton
```

#### h1 iam project tag

```
h1 iam project tag

Synopsis

  $ h1 iam project tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/project.tag [Operation ID: iam_project_tag_create] 
  list     List iam/project.tag [Operation ID: iam_project_tag_list]     
  show     Get iam/project.tag [Operation ID: iam_project_tag_get]       
  delete   Delete iam/project.tag [Operation ID: iam_project_tag_delete]
```

##### h1 iam project tag create

```
h1 iam project tag create

  Create iam/project.tag [Operation ID: iam_project_tag_create] 

Synopsis

  $ h1 iam project tag create <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --key string          Tag key    
  --value string        Tag value  
  --skeleton
```

##### h1 iam project tag list

```
h1 iam project tag list

  List iam/project.tag [Operation ID: iam_project_tag_list] 

Synopsis

  $ h1 iam project tag list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --skeleton
```

##### h1 iam project tag show

```
h1 iam project tag show

  Get iam/project.tag [Operation ID: iam_project_tag_get] 

Synopsis

  $ h1 iam project tag show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --tag id-or-uri       tagId      
  --skeleton
```

##### h1 iam project tag delete

```
h1 iam project tag delete

  Delete iam/project.tag [Operation ID: iam_project_tag_delete] 

Synopsis

  $ h1 iam project tag delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --tag id-or-uri       tagId      
  --skeleton
```

#### h1 iam project event

```
h1 iam project event

Synopsis

  $ h1 iam project event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/project.event [Operation ID: iam_project_event_list] 
  show   Get iam/project.event [Operation ID: iam_project_event_get]
```

##### h1 iam project event list

```
h1 iam project event list

  List iam/project.event [Operation ID: iam_project_event_list] 

Synopsis

  $ h1 iam project event list <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri   Project Id 
  --$limit string       $limit     
  --$skip string        $skip      
  --skeleton
```

##### h1 iam project event show

```
h1 iam project event show

  Get iam/project.event [Operation ID: iam_project_event_get] 

Synopsis

  $ h1 iam project event show <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri   Project Id 
  --event id-or-uri     eventId    
  --skeleton
```

#### h1 iam project policy

```
h1 iam project policy

Synopsis

  $ h1 iam project policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create    Create iam/policy [Operation ID: iam_project_policy_create] 
  list      List iam/policy [Operation ID: iam_project_policy_list]     
  show      Get iam/policy [Operation ID: iam_project_policy_get]       
  update    Update iam/policy [Operation ID: iam_project_policy_update] 
  delete    Delete iam/policy [Operation ID: iam_project_policy_delete] 
  actor     Manage actors of the policy                                 
  service   Manage services of the policy                               
  tag       Manage tags of the policy                                   
  event     Manage events of the policy
```

##### h1 iam project policy create

```
h1 iam project policy create

  Create iam/policy [Operation ID: iam_project_policy_create] 

Synopsis

  $ h1 iam project policy create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy create --project 5f64e2468c71177993874510 --name      
  simple-policy --role                                                          
  /iam/project/5eeb5a66ac7d806a88a5bb6b/role/5eeb8b5e47c27dcf37d0ff25           
  --resource /iam/project/5f64e2468c71177993874510                              

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
  --name string                Policy name                                                             
  --role uri                   Policy role. Provide URI of iam/role. Requires permissions iam/role/use 
  --resource uri               Policy resource. Provide URI of *                                       
  --actor value=value          Actor collection                                                        
  --tag key=key,value=value    Tag collection                                                          
  --skeleton
```

##### h1 iam project policy list

```
h1 iam project policy list

  List iam/policy [Operation ID: iam_project_policy_list] 

Synopsis

  $ h1 iam project policy list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy list --project 5f64e2468c71177993874510               

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
  --resource string     Filter by resource  
  --tag.value string    Filter by tag.value 
  --tag.key string      Filter by tag.key   
  --skeleton
```

##### h1 iam project policy show

```
h1 iam project policy show

  Get iam/policy [Operation ID: iam_project_policy_get] 

Synopsis

  $ h1 iam project policy show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy show --project 5f64e2468c71177993874510 --policy      
  5f72c96b02fbdad8a048fa40                                                      

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
  --policy id-or-uri    Policy Id  
  --skeleton
```

##### h1 iam project policy update

```
h1 iam project policy update

  Update iam/policy [Operation ID: iam_project_policy_update] 

Synopsis

  $ h1 iam project policy update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 iam project policy update --project 5f64e2468c71177993874510 --policy    
  5f72c96b02fbdad8a048fa40 --name policy-renamed                                

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
  --policy id-or-uri    Policy Id                                                
  --name string         Policy name. Requires permissions iam/policy.name/update 
  --skeleton
```

##### h1 iam project policy delete

```
h1 iam project policy delete

  Delete iam/policy [Operation ID: iam_project_policy_delete] 

Synopsis

  $ h1 iam project policy delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy delete --project 5f64e2468c71177993874510 --policy    
  5f72c96b02fbdad8a048fa40                                                      

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --skeleton
```

##### h1 iam project policy actor

```
h1 iam project policy actor

Synopsis

  $ h1 iam project policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/policy.actor [Operation ID: iam_project_policy_actor_create] 
  list     List iam/policy.actor [Operation ID: iam_project_policy_actor_list]     
  show     Get iam/policy.actor [Operation ID: iam_project_policy_actor_get]       
  delete   Delete iam/policy.actor [Operation ID: iam_project_policy_actor_delete]
```

###### h1 iam project policy actor create

```
h1 iam project policy actor create

  Create iam/policy.actor [Operation ID: iam_project_policy_actor_create] 

Synopsis

  $ h1 iam project policy actor create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy actor create --project 5f64e2468c71177993874510       
  --policy 5f72c96b02fbdad8a048fa40 --value /iam/user/example@example.com       

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id  
  --policy id-or-uri    Policy Id   
  --value string        Actor value 
  --skeleton
```

###### h1 iam project policy actor list

```
h1 iam project policy actor list

  List iam/policy.actor [Operation ID: iam_project_policy_actor_list] 

Synopsis

  $ h1 iam project policy actor list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy actor list --project 5f64e2468c71177993874510         
  --policy 5f72c96b02fbdad8a048fa40                                             

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --skeleton
```

###### h1 iam project policy actor show

```
h1 iam project policy actor show

  Get iam/policy.actor [Operation ID: iam_project_policy_actor_get] 

Synopsis

  $ h1 iam project policy actor show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy actor show --project 5f64e2468c71177993874510         
  --policy 5f72c96b02fbdad8a048fa40 --actor 5f72ce6102fbdad8a048fb38            

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --actor id-or-uri     actorId    
  --skeleton
```

###### h1 iam project policy actor delete

```
h1 iam project policy actor delete

  Delete iam/policy.actor [Operation ID: iam_project_policy_actor_delete] 

Synopsis

  $ h1 iam project policy actor delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy actor delete --project 5f64e2468c71177993874510       
  --policy 5f72c96b02fbdad8a048fa40 --actor 5f72ce6102fbdad8a048fb38            

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --actor id-or-uri     actorId    
  --skeleton
```

##### h1 iam project policy service

```
h1 iam project policy service

Synopsis

  $ h1 iam project policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/policy.service [Operation ID: iam_project_policy_service_list] 
  show   Get iam/policy.service [Operation ID: iam_project_policy_service_get]
```

###### h1 iam project policy service list

```
h1 iam project policy service list

  List iam/policy.service [Operation ID: iam_project_policy_service_list] 

Synopsis

  $ h1 iam project policy service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy service list --project 5f64e2468c71177993874510       
  --policy 5f72c96b02fbdad8a048fa40                                             

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
  --policy id-or-uri    Policy Id  
  --skeleton
```

###### h1 iam project policy service show

```
h1 iam project policy service show

  Get iam/policy.service [Operation ID: iam_project_policy_service_get] 

Synopsis

  $ h1 iam project policy service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy service show --project 5f64e2468c71177993874510       
  --policy 5f72c96b02fbdad8a048fa40 --service 5f60cbbe494c5cfdec81cc6b          

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
  --policy id-or-uri    Policy Id  
  --service id-or-uri   serviceId  
  --skeleton
```

##### h1 iam project policy tag

```
h1 iam project policy tag

Synopsis

  $ h1 iam project policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/policy.tag [Operation ID: iam_project_policy_tag_create] 
  list     List iam/policy.tag [Operation ID: iam_project_policy_tag_list]     
  show     Get iam/policy.tag [Operation ID: iam_project_policy_tag_get]       
  delete   Delete iam/policy.tag [Operation ID: iam_project_policy_tag_delete]
```

###### h1 iam project policy tag create

```
h1 iam project policy tag create

  Create iam/policy.tag [Operation ID: iam_project_policy_tag_create] 

Synopsis

  $ h1 iam project policy tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy tag create --project 5f64e2468c71177993874510         
  --policy 5f72c96b02fbdad8a048fa40 --key x --value x                           

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --key string          Tag key    
  --value string        Tag value  
  --skeleton
```

###### h1 iam project policy tag list

```
h1 iam project policy tag list

  List iam/policy.tag [Operation ID: iam_project_policy_tag_list] 

Synopsis

  $ h1 iam project policy tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy tag list --project 5f64e2468c71177993874510 --policy  
  5f72c96b02fbdad8a048fa40                                                      

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --skeleton
```

###### h1 iam project policy tag show

```
h1 iam project policy tag show

  Get iam/policy.tag [Operation ID: iam_project_policy_tag_get] 

Synopsis

  $ h1 iam project policy tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy tag show --project 5f64e2468c71177993874510 --policy  
  5f72c96b02fbdad8a048fa40 --tag 5f60cbbe494c5cfdec81cc6b                       

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --tag id-or-uri       tagId      
  --skeleton
```

###### h1 iam project policy tag delete

```
h1 iam project policy tag delete

  Delete iam/policy.tag [Operation ID: iam_project_policy_tag_delete] 

Synopsis

  $ h1 iam project policy tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy tag delete --project 5f64e2468c71177993874510         
  --policy 5f72c96b02fbdad8a048fa40 --tag 5f60cbbe494c5cfdec81cc6b              

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --tag id-or-uri       tagId      
  --skeleton
```

##### h1 iam project policy event

```
h1 iam project policy event

Synopsis

  $ h1 iam project policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/policy.event [Operation ID: iam_project_policy_event_list] 
  show   Get iam/policy.event [Operation ID: iam_project_policy_event_get]
```

###### h1 iam project policy event list

```
h1 iam project policy event list

  List iam/policy.event [Operation ID: iam_project_policy_event_list] 

Synopsis

  $ h1 iam project policy event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy event list --project 5f64e2468c71177993874510         
  --policy 5f72c96b02fbdad8a048fa40                                             

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --$limit string       $limit     
  --$skip string        $skip      
  --skeleton
```

###### h1 iam project policy event show

```
h1 iam project policy event show

  Get iam/policy.event [Operation ID: iam_project_policy_event_get] 

Synopsis

  $ h1 iam project policy event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project policy event show --project 5f64e2468c71177993874510         
  --policy 5f72c96b02fbdad8a048fa40 --event 5f60cbbe494c5cfdec81cc6b            

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --event id-or-uri     eventId    
  --skeleton
```

#### h1 iam project role

```
h1 iam project role

Synopsis

  $ h1 iam project role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create       Create iam/role [Operation ID: iam_project_role_create] 
  list         List iam/role [Operation ID: iam_project_role_list]     
  show         Get iam/role [Operation ID: iam_project_role_get]       
  update       Update iam/role [Operation ID: iam_project_role_update] 
  delete       Delete iam/role [Operation ID: iam_project_role_delete] 
  permission   Manage permissions of the role                          
  service      Manage services of the role                             
  tag          Manage tags of the role                                 
  event        Manage events of the role
```

##### h1 iam project role create

```
h1 iam project role create

  Create iam/role [Operation ID: iam_project_role_create] 

Synopsis

  $ h1 iam project role create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role create --project 5f64e2468c71177993874510 --name        
  simple-role --service                                                         
  /billing/project/platform/service/5e679c282b39c4353cd86f34                    

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
  --name string                Role name                                                                     
  --service id-or-uri          Role service. Provide ID or URI of billing/service. Defaults is               
                               5e679c282b39c4353cd86f34. Default value is 5e679c282b39c4353cd86f34           
  --description string         Role description                                                              
  --permission value=value     Permission collection                                                         
  --tag key=key,value=value    Tag collection                                                                
  --skeleton
```

##### h1 iam project role list

```
h1 iam project role list

  List iam/role [Operation ID: iam_project_role_list] 

Synopsis

  $ h1 iam project role list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role list --project 5f64e2468c71177993874510                 

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

##### h1 iam project role show

```
h1 iam project role show

  Get iam/role [Operation ID: iam_project_role_get] 

Synopsis

  $ h1 iam project role show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role show --project 5f64e2468c71177993874510 --role          
  5f72c96b02fbdad8a048fa40                                                      

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
  --role id-or-uri      Role Id    
  --skeleton
```

##### h1 iam project role update

```
h1 iam project role update

  Update iam/role [Operation ID: iam_project_role_update] 

Synopsis

  $ h1 iam project role update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 iam project role update --project 5f64e2468c71177993874510 --role        
  5f72c96b02fbdad8a048fa40 --name role-renamed                                  

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
  --role id-or-uri       Role Id                                                            
  --name string          Role name. Requires permissions iam/role.name/update               
  --description string   Role description. Requires permissions iam/role.description/update 
  --skeleton
```

##### h1 iam project role delete

```
h1 iam project role delete

  Delete iam/role [Operation ID: iam_project_role_delete] 

Synopsis

  $ h1 iam project role delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role delete --project 5f64e2468c71177993874510 --role        
  5f72c96b02fbdad8a048fa40                                                      

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --skeleton
```

##### h1 iam project role permission

```
h1 iam project role permission

Synopsis

  $ h1 iam project role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/role.permission [Operation ID: iam_project_role_permission_create] 
  list     List iam/role.permission [Operation ID: iam_project_role_permission_list]     
  show     Get iam/role.permission [Operation ID: iam_project_role_permission_get]       
  delete   Delete iam/role.permission [Operation ID: iam_project_role_permission_delete]
```

###### h1 iam project role permission create

```
h1 iam project role permission create

  Create iam/role.permission [Operation ID: iam_project_role_permission_create] 

Synopsis

  $ h1 iam project role permission create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role permission create --project 5f64e2468c71177993874510    
  --role 5f72c96b02fbdad8a048fa40 --value website/instance.tag/list             

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id       
  --role id-or-uri      Role Id          
  --value string        Permission value 
  --skeleton
```

###### h1 iam project role permission list

```
h1 iam project role permission list

  List iam/role.permission [Operation ID: iam_project_role_permission_list] 

Synopsis

  $ h1 iam project role permission list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role permission list --project 5f64e2468c71177993874510      
  --role 5f72c96b02fbdad8a048fa40                                               

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --skeleton
```

###### h1 iam project role permission show

```
h1 iam project role permission show

  Get iam/role.permission [Operation ID: iam_project_role_permission_get] 

Synopsis

  $ h1 iam project role permission show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role permission show --project 5f64e2468c71177993874510      
  --role 5f72c96b02fbdad8a048fa40 --permission 5f72ce6102fbdad8a048fb38         

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri      Project Id   
  --role id-or-uri         Role Id      
  --permission id-or-uri   permissionId 
  --skeleton
```

###### h1 iam project role permission delete

```
h1 iam project role permission delete

  Delete iam/role.permission [Operation ID: iam_project_role_permission_delete] 

Synopsis

  $ h1 iam project role permission delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role permission delete --project 5f64e2468c71177993874510    
  --role 5f72c96b02fbdad8a048fa40 --permission 5f72ce6102fbdad8a048fb38         

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri      Project Id   
  --role id-or-uri         Role Id      
  --permission id-or-uri   permissionId 
  --skeleton
```

##### h1 iam project role service

```
h1 iam project role service

Synopsis

  $ h1 iam project role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/role.service [Operation ID: iam_project_role_service_list] 
  show   Get iam/role.service [Operation ID: iam_project_role_service_get]
```

###### h1 iam project role service list

```
h1 iam project role service list

  List iam/role.service [Operation ID: iam_project_role_service_list] 

Synopsis

  $ h1 iam project role service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role service list --project 5f64e2468c71177993874510 --role  
  5f72c96b02fbdad8a048fa40                                                      

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
  --role id-or-uri      Role Id    
  --skeleton
```

###### h1 iam project role service show

```
h1 iam project role service show

  Get iam/role.service [Operation ID: iam_project_role_service_get] 

Synopsis

  $ h1 iam project role service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role service show --project 5f64e2468c71177993874510 --role  
  5f72c96b02fbdad8a048fa40 --service 5f60cbbe494c5cfdec81cc6b                   

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
  --role id-or-uri      Role Id    
  --service id-or-uri   serviceId  
  --skeleton
```

##### h1 iam project role tag

```
h1 iam project role tag

Synopsis

  $ h1 iam project role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/role.tag [Operation ID: iam_project_role_tag_create] 
  list     List iam/role.tag [Operation ID: iam_project_role_tag_list]     
  show     Get iam/role.tag [Operation ID: iam_project_role_tag_get]       
  delete   Delete iam/role.tag [Operation ID: iam_project_role_tag_delete]
```

###### h1 iam project role tag create

```
h1 iam project role tag create

  Create iam/role.tag [Operation ID: iam_project_role_tag_create] 

Synopsis

  $ h1 iam project role tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role tag create --project 5f64e2468c71177993874510 --role    
  5f72c96b02fbdad8a048fa40 --key x --value x                                    

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --key string          Tag key    
  --value string        Tag value  
  --skeleton
```

###### h1 iam project role tag list

```
h1 iam project role tag list

  List iam/role.tag [Operation ID: iam_project_role_tag_list] 

Synopsis

  $ h1 iam project role tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role tag list --project 5f64e2468c71177993874510 --role      
  5f72c96b02fbdad8a048fa40                                                      

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --skeleton
```

###### h1 iam project role tag show

```
h1 iam project role tag show

  Get iam/role.tag [Operation ID: iam_project_role_tag_get] 

Synopsis

  $ h1 iam project role tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role tag show --project 5f64e2468c71177993874510 --role      
  5f72c96b02fbdad8a048fa40 --tag 5f60cbbe494c5cfdec81cc6b                       

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --tag id-or-uri       tagId      
  --skeleton
```

###### h1 iam project role tag delete

```
h1 iam project role tag delete

  Delete iam/role.tag [Operation ID: iam_project_role_tag_delete] 

Synopsis

  $ h1 iam project role tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role tag delete --project 5f64e2468c71177993874510 --role    
  5f72c96b02fbdad8a048fa40 --tag 5f60cbbe494c5cfdec81cc6b                       

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --tag id-or-uri       tagId      
  --skeleton
```

##### h1 iam project role event

```
h1 iam project role event

Synopsis

  $ h1 iam project role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/role.event [Operation ID: iam_project_role_event_list] 
  show   Get iam/role.event [Operation ID: iam_project_role_event_get]
```

###### h1 iam project role event list

```
h1 iam project role event list

  List iam/role.event [Operation ID: iam_project_role_event_list] 

Synopsis

  $ h1 iam project role event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role event list --project 5f64e2468c71177993874510 --role    
  5f72c96b02fbdad8a048fa40                                                      

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --$limit string       $limit     
  --$skip string        $skip      
  --skeleton
```

###### h1 iam project role event show

```
h1 iam project role event show

  Get iam/role.event [Operation ID: iam_project_role_event_get] 

Synopsis

  $ h1 iam project role event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project role event show --project 5f64e2468c71177993874510 --role    
  5f72c96b02fbdad8a048fa40 --event 5f60cbbe494c5cfdec81cc6b                     

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --event id-or-uri     eventId    
  --skeleton
```

#### h1 iam project sa

```
h1 iam project sa

Synopsis

  $ h1 iam project sa <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create       Create iam/sa [Operation ID: iam_project_sa_create] 
  list         List iam/sa [Operation ID: iam_project_sa_list]     
  show         Get iam/sa [Operation ID: iam_project_sa_get]       
  update       Update iam/sa [Operation ID: iam_project_sa_update] 
  delete       Delete iam/sa [Operation ID: iam_project_sa_delete] 
  credential   Manage credentials of the sa                        
  service      Manage services of the sa                           
  tag          Manage tags of the sa                               
  event        Manage events of the sa
```

##### h1 iam project sa create

```
h1 iam project sa create

  Create iam/sa [Operation ID: iam_project_sa_create] 

Synopsis

  $ h1 iam project sa create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa create --project 5f64e2468c71177993874510 --name simple-  
  sa                                                                            

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
  --name string                Sa name                                                                       
  --service id-or-uri          Sa service. Provide ID or URI of billing/service. Defaults is                 
                               5e5fc76ff1fb3efe1842336a. Default value is 5e5fc76ff1fb3efe1842336a           
  --tag key=key,value=value    Tag collection                                                                
  --skeleton
```

##### h1 iam project sa list

```
h1 iam project sa list

  List iam/sa [Operation ID: iam_project_sa_list] 

Synopsis

  $ h1 iam project sa list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa list --project 5f64e2468c71177993874510                   

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

##### h1 iam project sa show

```
h1 iam project sa show

  Get iam/sa [Operation ID: iam_project_sa_get] 

Synopsis

  $ h1 iam project sa show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa show --project 5f64e2468c71177993874510 --sa              
  5f72c96b02fbdad8a048fa40                                                      

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
  --sa id-or-uri        Sa Id      
  --skeleton
```

##### h1 iam project sa update

```
h1 iam project sa update

  Update iam/sa [Operation ID: iam_project_sa_update] 

Synopsis

  $ h1 iam project sa update <options> 

Example

                                                                                
  Rename                                                                        
                                                                                
  $ h1 iam project sa update --project 5f64e2468c71177993874510 --sa            
  5f72c96b02fbdad8a048fa40 --name sa-renamed                                    

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
  --sa id-or-uri        Sa Id                                            
  --name string         Sa name. Requires permissions iam/sa.name/update 
  --skeleton
```

##### h1 iam project sa delete

```
h1 iam project sa delete

  Delete iam/sa [Operation ID: iam_project_sa_delete] 

Synopsis

  $ h1 iam project sa delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa delete --project 5f64e2468c71177993874510 --sa            
  5f72c96b02fbdad8a048fa40                                                      

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --skeleton
```

##### h1 iam project sa credential

```
h1 iam project sa credential

Synopsis

  $ h1 iam project sa credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create     Create iam/sa.credential [Operation ID: iam_project_sa_credential_create] 
  list       List iam/sa.credential [Operation ID: iam_project_sa_credential_list]     
  show       Get iam/sa.credential [Operation ID: iam_project_sa_credential_get]       
  update     Update iam/sa.credential [Operation ID: iam_project_sa_credential_patch]  
  delete     Delete iam/sa.credential [Operation ID: iam_project_sa_credential_delete] 
  generate   Generate passport file for sa
```

###### h1 iam project sa credential create

```
h1 iam project sa credential create

  Create iam/sa.credential [Operation ID: iam_project_sa_credential_create] 

Synopsis

  $ h1 iam project sa credential create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa credential create --project 5f64e2468c71177993874510 --sa 
  5f72c96b02fbdad8a048fa40 --name sa-credential --type ssh --value ssh-rsa      
  AAAAB3NzaC1yc2EAAAADAQABAAABAQC7Ssk/TZy/PS5mtGqNwmgfukrA/QrpW3oyrMM3KViHO9wtIwu1BapTdmUxIWi7TX1Nl51i8040CvTstfi11O4jMk2E5lGYp0TIduo8B8Qo/0wO6s2BrXHtLI1FlctkQacrKTnSINrSEcBbIO6G//S4fiRI5ioK8OAPt/qJK1k74AOnrupsXxTUYggmmIJfto8r1c3ZAhfwnJ4D0SDCoWjL4PLh/UGQv7sN20Z/afWVDCa78TnQ6lGlJe6VRSqoT09kJpt2CW0Pa3Ij1QaSJp6ENHpWAWGLyiwW8rLxCqFriz333yf0zzw2QmiyyNHe1ITG2goJU05pHEYyzYq6xo5X 

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
  --sa id-or-uri        Sa Id            
  --name string         Credential name  
  --type ssh            Credential type  
  --value string        Credential value 
  --token string        Credential token 
  --skeleton
```

###### h1 iam project sa credential list

```
h1 iam project sa credential list

  List iam/sa.credential [Operation ID: iam_project_sa_credential_list] 

Synopsis

  $ h1 iam project sa credential list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa credential list --project 5f64e2468c71177993874510 --sa   
  5f72c96b02fbdad8a048fa40                                                      

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
  --sa id-or-uri        Sa Id      
  --skeleton
```

###### h1 iam project sa credential show

```
h1 iam project sa credential show

  Get iam/sa.credential [Operation ID: iam_project_sa_credential_get] 

Synopsis

  $ h1 iam project sa credential show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa credential show --project 5f64e2468c71177993874510 --sa   
  5f72c96b02fbdad8a048fa40 --credential 5f60cbbe494c5cfdec81cc6b                

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
  --sa id-or-uri           Sa Id        
  --credential id-or-uri   credentialId 
  --skeleton
```

###### h1 iam project sa credential update

```
h1 iam project sa credential update

  Update iam/sa.credential [Operation ID: iam_project_sa_credential_patch] 

Synopsis

  $ h1 iam project sa credential update <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa credential update --project 5f64e2468c71177993874510 --sa 
  5f72c96b02fbdad8a048fa40 --credential 5f60cbbe494c5cfdec81cc6b --name         
  renamed-credential-sa                                                         

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
  --sa id-or-uri           Sa Id                                                               
  --credential id-or-uri   credentialId                                                        
  --name string            Credential name. Requires permissions iam/sa.credential.name/update 
  --skeleton
```

###### h1 iam project sa credential delete

```
h1 iam project sa credential delete

  Delete iam/sa.credential [Operation ID: iam_project_sa_credential_delete] 

Synopsis

  $ h1 iam project sa credential delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa credential delete --project 5f64e2468c71177993874510 --sa 
  5f72c96b02fbdad8a048fa40 --credential 5f60cbbe494c5cfdec81cc6b                

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
  --sa id-or-uri           Sa Id        
  --credential id-or-uri   credentialId 
  --skeleton
```

###### h1 iam project sa credential generate

```
h1 iam project sa credential generate

  Generate passport file for sa 

Synopsis

  $ h1 iam project sa credential generate <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --sa string                      
  --name string                    
  --project string                 
  --passport-output-file string
```

##### h1 iam project sa service

```
h1 iam project sa service

Synopsis

  $ h1 iam project sa service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/sa.service [Operation ID: iam_project_sa_service_list] 
  show   Get iam/sa.service [Operation ID: iam_project_sa_service_get]
```

###### h1 iam project sa service list

```
h1 iam project sa service list

  List iam/sa.service [Operation ID: iam_project_sa_service_list] 

Synopsis

  $ h1 iam project sa service list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa service list --project 5f64e2468c71177993874510 --sa      
  5f72c96b02fbdad8a048fa40                                                      

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
  --sa id-or-uri        Sa Id      
  --skeleton
```

###### h1 iam project sa service show

```
h1 iam project sa service show

  Get iam/sa.service [Operation ID: iam_project_sa_service_get] 

Synopsis

  $ h1 iam project sa service show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa service show --project 5f64e2468c71177993874510 --sa      
  5f72c96b02fbdad8a048fa40 --service 5f60cbbe494c5cfdec81cc6b                   

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
  --sa id-or-uri        Sa Id      
  --service id-or-uri   serviceId  
  --skeleton
```

##### h1 iam project sa tag

```
h1 iam project sa tag

Synopsis

  $ h1 iam project sa tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/sa.tag [Operation ID: iam_project_sa_tag_create] 
  list     List iam/sa.tag [Operation ID: iam_project_sa_tag_list]     
  show     Get iam/sa.tag [Operation ID: iam_project_sa_tag_get]       
  delete   Delete iam/sa.tag [Operation ID: iam_project_sa_tag_delete]
```

###### h1 iam project sa tag create

```
h1 iam project sa tag create

  Create iam/sa.tag [Operation ID: iam_project_sa_tag_create] 

Synopsis

  $ h1 iam project sa tag create <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa tag create --project 5f64e2468c71177993874510 --sa        
  5f72c96b02fbdad8a048fa40 --key x --value x                                    

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --key string          Tag key    
  --value string        Tag value  
  --skeleton
```

###### h1 iam project sa tag list

```
h1 iam project sa tag list

  List iam/sa.tag [Operation ID: iam_project_sa_tag_list] 

Synopsis

  $ h1 iam project sa tag list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa tag list --project 5f64e2468c71177993874510 --sa          
  5f72c96b02fbdad8a048fa40                                                      

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --skeleton
```

###### h1 iam project sa tag show

```
h1 iam project sa tag show

  Get iam/sa.tag [Operation ID: iam_project_sa_tag_get] 

Synopsis

  $ h1 iam project sa tag show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa tag show --project 5f64e2468c71177993874510 --sa          
  5f72c96b02fbdad8a048fa40 --tag 5f60cbbe494c5cfdec81cc6b                       

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --tag id-or-uri       tagId      
  --skeleton
```

###### h1 iam project sa tag delete

```
h1 iam project sa tag delete

  Delete iam/sa.tag [Operation ID: iam_project_sa_tag_delete] 

Synopsis

  $ h1 iam project sa tag delete <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa tag delete --project 5f64e2468c71177993874510 --sa        
  5f72c96b02fbdad8a048fa40 --tag 5f60cbbe494c5cfdec81cc6b                       

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --tag id-or-uri       tagId      
  --skeleton
```

##### h1 iam project sa event

```
h1 iam project sa event

Synopsis

  $ h1 iam project sa event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/sa.event [Operation ID: iam_project_sa_event_list] 
  show   Get iam/sa.event [Operation ID: iam_project_sa_event_get]
```

###### h1 iam project sa event list

```
h1 iam project sa event list

  List iam/sa.event [Operation ID: iam_project_sa_event_list] 

Synopsis

  $ h1 iam project sa event list <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa event list --project 5f64e2468c71177993874510 --sa        
  5f72c96b02fbdad8a048fa40                                                      

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --$limit string       $limit     
  --$skip string        $skip      
  --skeleton
```

###### h1 iam project sa event show

```
h1 iam project sa event show

  Get iam/sa.event [Operation ID: iam_project_sa_event_get] 

Synopsis

  $ h1 iam project sa event show <options> 

Example

                                                                                
  Simple                                                                        
                                                                                
  $ h1 iam project sa event show --project 5f64e2468c71177993874510 --sa        
  5f72c96b02fbdad8a048fa40 --event 5f60cbbe494c5cfdec81cc6b                     

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --event id-or-uri     eventId    
  --skeleton
```

#### h1 iam project select

```
h1 iam project select

  Select default project 

Synopsis

  $ h1 iam project select <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --project string
```

### h1 iam organisation

```
h1 iam organisation

Synopsis

  $ h1 iam organisation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create       Create iam/organisation [Operation ID: iam_organisation_create] 
  list         List iam/organisation [Operation ID: iam_organisation_list]     
  show         Get iam/organisation [Operation ID: iam_organisation_get]       
  update       Update iam/organisation [Operation ID: iam_organisation_update] 
  delete       Delete iam/organisation [Operation ID: iam_organisation_delete] 
  billing      Manage billings of the organisation                             
  transfer     Manage transfers of the organisation                            
  payment      Manage payments of the organisation                             
  invoice      Manage invoices of the organisation                             
  proforma     Manage proformas of the organisation                            
  invitation   Manage invitations of the organisation                          
  ownership    Manage ownerships of the organisation                           
  service      Manage services of the organisation                             
  event        Manage events of the organisation                               
  policy       Manage policies of the organisation                             
  role         Manage roles of the organisation
```

#### h1 iam organisation create

```
h1 iam organisation create

  Create iam/organisation [Operation ID: iam_organisation_create] 

Synopsis

  $ h1 iam organisation create <options> 

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

  --x-idempotency-key string                                                                                Idempotency key                                         
  --name string                                                                                             Organisation name                                       
  --billing-nip string                                                                                      Billing nip                                             
  --billing-email string                                                                                    Billing email                                           
  --billing-company string                                                                                  Billing company                                         
  --billing-currency PLN                                                                                    Billing currency. Defaults is PLN. Default value is PLN 
  --billing-address-country AD,BE,HR,CY,CZ,DK,EE,FI,FR,DE,GR,HU,IE,IT,LV,LT,LU,MT,NL,PL,PT,RO,SK,SI,ES,GB   Address country. Defaults is PL. Default value is PL    
  --billing-address-city string                                                                             Address city                                            
  --billing-address-street string                                                                           Address street                                          
  --billing-address-zipcode string                                                                          Address zipcode                                         
  --skeleton
```

#### h1 iam organisation list

```
h1 iam organisation list

  List iam/organisation [Operation ID: iam_organisation_list] 

Synopsis

  $ h1 iam organisation list <options> 

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

  --name string              Filter by name            
  --billing.company string   Filter by billing.company 
  --$limit string            Filter by $limit          
  --active string            Filter by active          
  --skeleton
```

#### h1 iam organisation show

```
h1 iam organisation show

  Get iam/organisation [Operation ID: iam_organisation_get] 

Synopsis

  $ h1 iam organisation show <options> 

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

  --organisation id-or-uri   Organisation Id 
  --skeleton
```

#### h1 iam organisation update

```
h1 iam organisation update

  Update iam/organisation [Operation ID: iam_organisation_update] 

Synopsis

  $ h1 iam organisation update <options> 

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

  --organisation id-or-uri           Organisation Id                                                      
  --name string                      Organisation name. Requires permissions iam/organisation.name/update 
  --billing-email string             Billing email                                                        
  --billing-company string           Billing company                                                      
  --billing-address-city string      Address city                                                         
  --billing-address-zipcode string   Address zipcode                                                      
  --billing-address-street string    Address street                                                       
  --skeleton
```

#### h1 iam organisation delete

```
h1 iam organisation delete

  Delete iam/organisation [Operation ID: iam_organisation_delete] 

Synopsis

  $ h1 iam organisation delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton
```

#### h1 iam organisation billing

```
h1 iam organisation billing

Synopsis

  $ h1 iam organisation billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/organisation.billing [Operation ID: iam_organisation_billing_list]
```

##### h1 iam organisation billing list

```
h1 iam organisation billing list

  List iam/organisation.billing [Operation ID: iam_organisation_billing_list] 

Synopsis

  $ h1 iam organisation billing list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --start string             start           
  --end string               end             
  --resource.type string     resource.type   
  --skeleton
```

#### h1 iam organisation transfer

```
h1 iam organisation transfer

Synopsis

  $ h1 iam organisation transfer <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list     List iam/organisation.transfer [Operation ID: iam_organisation_transfer_list]     
  show     Get iam/organisation.transfer [Operation ID: iam_organisation_transfer_get]       
  accept   Accept iam/organisation.transfer [Operation ID: iam_organisation_transfer_accept]
```

##### h1 iam organisation transfer list

```
h1 iam organisation transfer list

  List iam/organisation.transfer [Operation ID: iam_organisation_transfer_list] 

Synopsis

  $ h1 iam organisation transfer list <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton
```

##### h1 iam organisation transfer show

```
h1 iam organisation transfer show

  Get iam/organisation.transfer [Operation ID: iam_organisation_transfer_get] 

Synopsis

  $ h1 iam organisation transfer show <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id 
  --transfer id-or-uri       transferId      
  --skeleton
```

##### h1 iam organisation transfer accept

```
h1 iam organisation transfer accept

  Accept iam/organisation.transfer [Operation ID:                               
  iam_organisation_transfer_accept]                                             

Synopsis

  $ h1 iam organisation transfer accept <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id                                                               
  --transfer id-or-uri       transferId                                                                    
  --payment uri              Transfer payment. Provide URI of billing/payment. Requires permissions        
                             iam/organisation.payment/allocate                                             
  --skeleton
```

#### h1 iam organisation payment

```
h1 iam organisation payment

Synopsis

  $ h1 iam organisation payment <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list       List iam/organisation.payment [Operation ID: iam_organisation_payment_list]         
  show       Get iam/organisation.payment [Operation ID: iam_organisation_payment_get]           
  allocate   Allocate iam/organisation.payment [Operation ID: iam_organisation_payment_allocate]
```

##### h1 iam organisation payment list

```
h1 iam organisation payment list

  List iam/organisation.payment [Operation ID: iam_organisation_payment_list] 

Synopsis

  $ h1 iam organisation payment list <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton
```

##### h1 iam organisation payment show

```
h1 iam organisation payment show

  Get iam/organisation.payment [Operation ID: iam_organisation_payment_get] 

Synopsis

  $ h1 iam organisation payment show <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id 
  --payment id-or-uri        paymentId       
  --skeleton
```

##### h1 iam organisation payment allocate

```
h1 iam organisation payment allocate

  Allocate iam/organisation.payment [Operation ID:                              
  iam_organisation_payment_allocate]                                            

Synopsis

  $ h1 iam organisation payment allocate <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id                                                               
  --payment id-or-uri        paymentId                                                                     
  --project id-or-uri        Payment project. Provide ID or URI of iam/project. Requires permissions       
                             iam/project/get                                                               
  --skeleton
```

#### h1 iam organisation invoice

```
h1 iam organisation invoice

Synopsis

  $ h1 iam organisation invoice <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list       List iam/organisation.invoice [Operation ID: iam_organisation_invoice_list]         
  show       Get iam/organisation.invoice [Operation ID: iam_organisation_invoice_get]           
  download   Download iam/organisation.invoice [Operation ID: iam_organisation_invoice_download]
```

##### h1 iam organisation invoice list

```
h1 iam organisation invoice list

  List iam/organisation.invoice [Operation ID: iam_organisation_invoice_list] 

Synopsis

  $ h1 iam organisation invoice list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton
```

##### h1 iam organisation invoice show

```
h1 iam organisation invoice show

  Get iam/organisation.invoice [Operation ID: iam_organisation_invoice_get] 

Synopsis

  $ h1 iam organisation invoice show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --invoice id-or-uri        invoiceId       
  --skeleton
```

##### h1 iam organisation invoice download

```
h1 iam organisation invoice download

  Download iam/organisation.invoice [Operation ID:                              
  iam_organisation_invoice_download]                                            

Synopsis

  $ h1 iam organisation invoice download <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --invoice id-or-uri        invoiceId       
  --skeleton
```

#### h1 iam organisation proforma

```
h1 iam organisation proforma

Synopsis

  $ h1 iam organisation proforma <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create     Create iam/organisation.proforma [Operation ID: iam_organisation_proforma_create]     
  list       List iam/organisation.proforma [Operation ID: iam_organisation_proforma_list]         
  show       Get iam/organisation.proforma [Operation ID: iam_organisation_proforma_get]           
  download   Download iam/organisation.proforma [Operation ID: iam_organisation_proforma_download]
```

##### h1 iam organisation proforma create

```
h1 iam organisation proforma create

  Create iam/organisation.proforma [Operation ID:                               
  iam_organisation_proforma_create]                                             

Synopsis

  $ h1 iam organisation proforma create <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id                                                               
  --amount string            Proforma amount                                                               
  --project id-or-uri        Proforma project. Provide ID or URI of iam/project. Requires permissions      
                             iam/project/get                                                               
  --skeleton
```

##### h1 iam organisation proforma list

```
h1 iam organisation proforma list

  List iam/organisation.proforma [Operation ID: iam_organisation_proforma_list] 

Synopsis

  $ h1 iam organisation proforma list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton
```

##### h1 iam organisation proforma show

```
h1 iam organisation proforma show

  Get iam/organisation.proforma [Operation ID: iam_organisation_proforma_get] 

Synopsis

  $ h1 iam organisation proforma show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --proforma id-or-uri       proformaId      
  --skeleton
```

##### h1 iam organisation proforma download

```
h1 iam organisation proforma download

  Download iam/organisation.proforma [Operation ID:                             
  iam_organisation_proforma_download]                                           

Synopsis

  $ h1 iam organisation proforma download <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --proforma id-or-uri       proformaId      
  --skeleton
```

#### h1 iam organisation invitation

```
h1 iam organisation invitation

Synopsis

  $ h1 iam organisation invitation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list     List iam/organisation.invitation [Operation ID: iam_organisation_invitation_list]     
  show     Get iam/organisation.invitation [Operation ID: iam_organisation_invitation_get]       
  delete   Delete iam/organisation.invitation [Operation ID: iam_organisation_invitation_delete] 
  accept   Accept iam/organisation.invitation [Operation ID: iam_organisation_invitation_accept]
```

##### h1 iam organisation invitation list

```
h1 iam organisation invitation list

  List iam/organisation.invitation [Operation ID:                               
  iam_organisation_invitation_list]                                             

Synopsis

  $ h1 iam organisation invitation list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --resource string          resource        
  --skeleton
```

##### h1 iam organisation invitation show

```
h1 iam organisation invitation show

  Get iam/organisation.invitation [Operation ID: iam_organisation_invitation_get] 

Synopsis

  $ h1 iam organisation invitation show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --invitation id-or-uri     invitationId    
  --skeleton
```

##### h1 iam organisation invitation delete

```
h1 iam organisation invitation delete

  Delete iam/organisation.invitation [Operation ID:                             
  iam_organisation_invitation_delete]                                           

Synopsis

  $ h1 iam organisation invitation delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --invitation id-or-uri     invitationId    
  --skeleton
```

##### h1 iam organisation invitation accept

```
h1 iam organisation invitation accept

  Accept iam/organisation.invitation [Operation ID:                             
  iam_organisation_invitation_accept]                                           

Synopsis

  $ h1 iam organisation invitation accept <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id  
  --invitation id-or-uri     invitationId     
  --token string             Invitation token 
  --skeleton
```

#### h1 iam organisation ownership

```
h1 iam organisation ownership

Synopsis

  $ h1 iam organisation ownership <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/organisation.ownership [Operation ID: iam_organisation_ownership_create] 
  list     List iam/organisation.ownership [Operation ID: iam_organisation_ownership_list]     
  show     Get iam/organisation.ownership [Operation ID: iam_organisation_ownership_get]       
  delete   Delete iam/organisation.ownership [Operation ID: iam_organisation_ownership_delete]
```

##### h1 iam organisation ownership create

```
h1 iam organisation ownership create

  Create iam/organisation.ownership [Operation ID:                              
  iam_organisation_ownership_create]                                            

Synopsis

  $ h1 iam organisation ownership create <options> 

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

  --organisation id-or-uri   Organisation Id 
  --email string             Ownership email 
  --skeleton
```

##### h1 iam organisation ownership list

```
h1 iam organisation ownership list

  List iam/organisation.ownership [Operation ID: iam_organisation_ownership_list] 

Synopsis

  $ h1 iam organisation ownership list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton
```

##### h1 iam organisation ownership show

```
h1 iam organisation ownership show

  Get iam/organisation.ownership [Operation ID: iam_organisation_ownership_get] 

Synopsis

  $ h1 iam organisation ownership show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --ownership id-or-uri      ownershipId     
  --skeleton
```

##### h1 iam organisation ownership delete

```
h1 iam organisation ownership delete

  Delete iam/organisation.ownership [Operation ID:                              
  iam_organisation_ownership_delete]                                            

Synopsis

  $ h1 iam organisation ownership delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --ownership id-or-uri      ownershipId     
  --skeleton
```

#### h1 iam organisation service

```
h1 iam organisation service

Synopsis

  $ h1 iam organisation service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/organisation.service [Operation ID: iam_organisation_service_list] 
  show   Get iam/organisation.service [Operation ID: iam_organisation_service_get]
```

##### h1 iam organisation service list

```
h1 iam organisation service list

  List iam/organisation.service [Operation ID: iam_organisation_service_list] 

Synopsis

  $ h1 iam organisation service list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton
```

##### h1 iam organisation service show

```
h1 iam organisation service show

  Get iam/organisation.service [Operation ID: iam_organisation_service_get] 

Synopsis

  $ h1 iam organisation service show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --service id-or-uri        serviceId       
  --skeleton
```

#### h1 iam organisation event

```
h1 iam organisation event

Synopsis

  $ h1 iam organisation event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/organisation.event [Operation ID: iam_organisation_event_list] 
  show   Get iam/organisation.event [Operation ID: iam_organisation_event_get]
```

##### h1 iam organisation event list

```
h1 iam organisation event list

  List iam/organisation.event [Operation ID: iam_organisation_event_list] 

Synopsis

  $ h1 iam organisation event list <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id 
  --$limit string            $limit          
  --$skip string             $skip           
  --skeleton
```

##### h1 iam organisation event show

```
h1 iam organisation event show

  Get iam/organisation.event [Operation ID: iam_organisation_event_get] 

Synopsis

  $ h1 iam organisation event show <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id 
  --event id-or-uri          eventId         
  --skeleton
```

#### h1 iam organisation policy

```
h1 iam organisation policy

Synopsis

  $ h1 iam organisation policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create    Create iam/policy [Operation ID: iam_organisation_policy_create] 
  list      List iam/policy [Operation ID: iam_organisation_policy_list]     
  show      Get iam/policy [Operation ID: iam_organisation_policy_get]       
  update    Update iam/policy [Operation ID: iam_organisation_policy_update] 
  delete    Delete iam/policy [Operation ID: iam_organisation_policy_delete] 
  actor     Manage actors of the policy                                      
  service   Manage services of the policy                                    
  tag       Manage tags of the policy                                        
  event     Manage events of the policy
```

##### h1 iam organisation policy create

```
h1 iam organisation policy create

  Create iam/policy [Operation ID: iam_organisation_policy_create] 

Synopsis

  $ h1 iam organisation policy create <options> 

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

  --organisation id-or-uri     Organisation Id                                                         
  --x-idempotency-key string   Idempotency key                                                         
  --name string                Policy name                                                             
  --role uri                   Policy role. Provide URI of iam/role. Requires permissions iam/role/use 
  --resource uri               Policy resource. Provide URI of *                                       
  --actor value=value          Actor collection                                                        
  --tag key=key,value=value    Tag collection                                                          
  --skeleton
```

##### h1 iam organisation policy list

```
h1 iam organisation policy list

  List iam/policy [Operation ID: iam_organisation_policy_list] 

Synopsis

  $ h1 iam organisation policy list <options> 

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

  --organisation id-or-uri   Organisation Id     
  --name string              Filter by name      
  --resource string          Filter by resource  
  --tag.value string         Filter by tag.value 
  --tag.key string           Filter by tag.key   
  --skeleton
```

##### h1 iam organisation policy show

```
h1 iam organisation policy show

  Get iam/policy [Operation ID: iam_organisation_policy_get] 

Synopsis

  $ h1 iam organisation policy show <options> 

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

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --skeleton
```

##### h1 iam organisation policy update

```
h1 iam organisation policy update

  Update iam/policy [Operation ID: iam_organisation_policy_update] 

Synopsis

  $ h1 iam organisation policy update <options> 

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

  --organisation id-or-uri   Organisation Id                                          
  --policy id-or-uri         Policy Id                                                
  --name string              Policy name. Requires permissions iam/policy.name/update 
  --skeleton
```

##### h1 iam organisation policy delete

```
h1 iam organisation policy delete

  Delete iam/policy [Operation ID: iam_organisation_policy_delete] 

Synopsis

  $ h1 iam organisation policy delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --skeleton
```

##### h1 iam organisation policy actor

```
h1 iam organisation policy actor

Synopsis

  $ h1 iam organisation policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/policy.actor [Operation ID: iam_organisation_policy_actor_create] 
  list     List iam/policy.actor [Operation ID: iam_organisation_policy_actor_list]     
  show     Get iam/policy.actor [Operation ID: iam_organisation_policy_actor_get]       
  delete   Delete iam/policy.actor [Operation ID: iam_organisation_policy_actor_delete]
```

###### h1 iam organisation policy actor create

```
h1 iam organisation policy actor create

  Create iam/policy.actor [Operation ID: iam_organisation_policy_actor_create] 

Synopsis

  $ h1 iam organisation policy actor create <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --value string             Actor value     
  --skeleton
```

###### h1 iam organisation policy actor list

```
h1 iam organisation policy actor list

  List iam/policy.actor [Operation ID: iam_organisation_policy_actor_list] 

Synopsis

  $ h1 iam organisation policy actor list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --skeleton
```

###### h1 iam organisation policy actor show

```
h1 iam organisation policy actor show

  Get iam/policy.actor [Operation ID: iam_organisation_policy_actor_get] 

Synopsis

  $ h1 iam organisation policy actor show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --actor id-or-uri          actorId         
  --skeleton
```

###### h1 iam organisation policy actor delete

```
h1 iam organisation policy actor delete

  Delete iam/policy.actor [Operation ID: iam_organisation_policy_actor_delete] 

Synopsis

  $ h1 iam organisation policy actor delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --actor id-or-uri          actorId         
  --skeleton
```

##### h1 iam organisation policy service

```
h1 iam organisation policy service

Synopsis

  $ h1 iam organisation policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/policy.service [Operation ID: iam_organisation_policy_service_list] 
  show   Get iam/policy.service [Operation ID: iam_organisation_policy_service_get]
```

###### h1 iam organisation policy service list

```
h1 iam organisation policy service list

  List iam/policy.service [Operation ID: iam_organisation_policy_service_list] 

Synopsis

  $ h1 iam organisation policy service list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --skeleton
```

###### h1 iam organisation policy service show

```
h1 iam organisation policy service show

  Get iam/policy.service [Operation ID: iam_organisation_policy_service_get] 

Synopsis

  $ h1 iam organisation policy service show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --service id-or-uri        serviceId       
  --skeleton
```

##### h1 iam organisation policy tag

```
h1 iam organisation policy tag

Synopsis

  $ h1 iam organisation policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/policy.tag [Operation ID: iam_organisation_policy_tag_create] 
  list     List iam/policy.tag [Operation ID: iam_organisation_policy_tag_list]     
  show     Get iam/policy.tag [Operation ID: iam_organisation_policy_tag_get]       
  delete   Delete iam/policy.tag [Operation ID: iam_organisation_policy_tag_delete]
```

###### h1 iam organisation policy tag create

```
h1 iam organisation policy tag create

  Create iam/policy.tag [Operation ID: iam_organisation_policy_tag_create] 

Synopsis

  $ h1 iam organisation policy tag create <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --key string               Tag key         
  --value string             Tag value       
  --skeleton
```

###### h1 iam organisation policy tag list

```
h1 iam organisation policy tag list

  List iam/policy.tag [Operation ID: iam_organisation_policy_tag_list] 

Synopsis

  $ h1 iam organisation policy tag list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --skeleton
```

###### h1 iam organisation policy tag show

```
h1 iam organisation policy tag show

  Get iam/policy.tag [Operation ID: iam_organisation_policy_tag_get] 

Synopsis

  $ h1 iam organisation policy tag show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --tag id-or-uri            tagId           
  --skeleton
```

###### h1 iam organisation policy tag delete

```
h1 iam organisation policy tag delete

  Delete iam/policy.tag [Operation ID: iam_organisation_policy_tag_delete] 

Synopsis

  $ h1 iam organisation policy tag delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --tag id-or-uri            tagId           
  --skeleton
```

##### h1 iam organisation policy event

```
h1 iam organisation policy event

Synopsis

  $ h1 iam organisation policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/policy.event [Operation ID: iam_organisation_policy_event_list] 
  show   Get iam/policy.event [Operation ID: iam_organisation_policy_event_get]
```

###### h1 iam organisation policy event list

```
h1 iam organisation policy event list

  List iam/policy.event [Operation ID: iam_organisation_policy_event_list] 

Synopsis

  $ h1 iam organisation policy event list <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --$limit string            $limit          
  --$skip string             $skip           
  --skeleton
```

###### h1 iam organisation policy event show

```
h1 iam organisation policy event show

  Get iam/policy.event [Operation ID: iam_organisation_policy_event_get] 

Synopsis

  $ h1 iam organisation policy event show <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --event id-or-uri          eventId         
  --skeleton
```

#### h1 iam organisation role

```
h1 iam organisation role

Synopsis

  $ h1 iam organisation role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create       Create iam/role [Operation ID: iam_organisation_role_create] 
  list         List iam/role [Operation ID: iam_organisation_role_list]     
  show         Get iam/role [Operation ID: iam_organisation_role_get]       
  update       Update iam/role [Operation ID: iam_organisation_role_update] 
  delete       Delete iam/role [Operation ID: iam_organisation_role_delete] 
  permission   Manage permissions of the role                               
  service      Manage services of the role                                  
  tag          Manage tags of the role                                      
  event        Manage events of the role
```

##### h1 iam organisation role create

```
h1 iam organisation role create

  Create iam/role [Operation ID: iam_organisation_role_create] 

Synopsis

  $ h1 iam organisation role create <options> 

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

  --organisation id-or-uri     Organisation Id                                                               
  --x-idempotency-key string   Idempotency key                                                               
  --name string                Role name                                                                     
  --service id-or-uri          Role service. Provide ID or URI of billing/service. Defaults is               
                               5e679c282b39c4353cd86f34. Default value is 5e679c282b39c4353cd86f34           
  --description string         Role description                                                              
  --permission value=value     Permission collection                                                         
  --tag key=key,value=value    Tag collection                                                                
  --skeleton
```

##### h1 iam organisation role list

```
h1 iam organisation role list

  List iam/role [Operation ID: iam_organisation_role_list] 

Synopsis

  $ h1 iam organisation role list <options> 

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

  --organisation id-or-uri   Organisation Id     
  --name string              Filter by name      
  --tag.value string         Filter by tag.value 
  --tag.key string           Filter by tag.key   
  --skeleton
```

##### h1 iam organisation role show

```
h1 iam organisation role show

  Get iam/role [Operation ID: iam_organisation_role_get] 

Synopsis

  $ h1 iam organisation role show <options> 

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

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --skeleton
```

##### h1 iam organisation role update

```
h1 iam organisation role update

  Update iam/role [Operation ID: iam_organisation_role_update] 

Synopsis

  $ h1 iam organisation role update <options> 

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

  --organisation id-or-uri   Organisation Id                                                    
  --role id-or-uri           Role Id                                                            
  --name string              Role name. Requires permissions iam/role.name/update               
  --description string       Role description. Requires permissions iam/role.description/update 
  --skeleton
```

##### h1 iam organisation role delete

```
h1 iam organisation role delete

  Delete iam/role [Operation ID: iam_organisation_role_delete] 

Synopsis

  $ h1 iam organisation role delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --skeleton
```

##### h1 iam organisation role permission

```
h1 iam organisation role permission

Synopsis

  $ h1 iam organisation role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/role.permission [Operation ID: iam_organisation_role_permission_create] 
  list     List iam/role.permission [Operation ID: iam_organisation_role_permission_list]     
  show     Get iam/role.permission [Operation ID: iam_organisation_role_permission_get]       
  delete   Delete iam/role.permission [Operation ID: iam_organisation_role_permission_delete]
```

###### h1 iam organisation role permission create

```
h1 iam organisation role permission create

  Create iam/role.permission [Operation ID:                                     
  iam_organisation_role_permission_create]                                      

Synopsis

  $ h1 iam organisation role permission create <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id  
  --role id-or-uri           Role Id          
  --value string             Permission value 
  --skeleton
```

###### h1 iam organisation role permission list

```
h1 iam organisation role permission list

  List iam/role.permission [Operation ID: iam_organisation_role_permission_list] 

Synopsis

  $ h1 iam organisation role permission list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --skeleton
```

###### h1 iam organisation role permission show

```
h1 iam organisation role permission show

  Get iam/role.permission [Operation ID: iam_organisation_role_permission_get] 

Synopsis

  $ h1 iam organisation role permission show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --permission id-or-uri     permissionId    
  --skeleton
```

###### h1 iam organisation role permission delete

```
h1 iam organisation role permission delete

  Delete iam/role.permission [Operation ID:                                     
  iam_organisation_role_permission_delete]                                      

Synopsis

  $ h1 iam organisation role permission delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --permission id-or-uri     permissionId    
  --skeleton
```

##### h1 iam organisation role service

```
h1 iam organisation role service

Synopsis

  $ h1 iam organisation role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/role.service [Operation ID: iam_organisation_role_service_list] 
  show   Get iam/role.service [Operation ID: iam_organisation_role_service_get]
```

###### h1 iam organisation role service list

```
h1 iam organisation role service list

  List iam/role.service [Operation ID: iam_organisation_role_service_list] 

Synopsis

  $ h1 iam organisation role service list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --skeleton
```

###### h1 iam organisation role service show

```
h1 iam organisation role service show

  Get iam/role.service [Operation ID: iam_organisation_role_service_get] 

Synopsis

  $ h1 iam organisation role service show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id, name:name}      
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --service id-or-uri        serviceId       
  --skeleton
```

##### h1 iam organisation role tag

```
h1 iam organisation role tag

Synopsis

  $ h1 iam organisation role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  create   Create iam/role.tag [Operation ID: iam_organisation_role_tag_create] 
  list     List iam/role.tag [Operation ID: iam_organisation_role_tag_list]     
  show     Get iam/role.tag [Operation ID: iam_organisation_role_tag_get]       
  delete   Delete iam/role.tag [Operation ID: iam_organisation_role_tag_delete]
```

###### h1 iam organisation role tag create

```
h1 iam organisation role tag create

  Create iam/role.tag [Operation ID: iam_organisation_role_tag_create] 

Synopsis

  $ h1 iam organisation role tag create <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --key string               Tag key         
  --value string             Tag value       
  --skeleton
```

###### h1 iam organisation role tag list

```
h1 iam organisation role tag list

  List iam/role.tag [Operation ID: iam_organisation_role_tag_list] 

Synopsis

  $ h1 iam organisation role tag list <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --skeleton
```

###### h1 iam organisation role tag show

```
h1 iam organisation role tag show

  Get iam/role.tag [Operation ID: iam_organisation_role_tag_get] 

Synopsis

  $ h1 iam organisation role tag show <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string. Default value is [].{id:id}                 
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --tag id-or-uri            tagId           
  --skeleton
```

###### h1 iam organisation role tag delete

```
h1 iam organisation role tag delete

  Delete iam/role.tag [Operation ID: iam_organisation_role_tag_delete] 

Synopsis

  $ h1 iam organisation role tag delete <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --tag id-or-uri            tagId           
  --skeleton
```

##### h1 iam organisation role event

```
h1 iam organisation role event

Synopsis

  $ h1 iam organisation role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list   List iam/role.event [Operation ID: iam_organisation_role_event_list] 
  show   Get iam/role.event [Operation ID: iam_organisation_role_event_get]
```

###### h1 iam organisation role event list

```
h1 iam organisation role event list

  List iam/role.event [Operation ID: iam_organisation_role_event_list] 

Synopsis

  $ h1 iam organisation role event list <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --$limit string            $limit          
  --$skip string             $skip           
  --skeleton
```

###### h1 iam organisation role event show

```
h1 iam organisation role event show

  Get iam/role.event [Operation ID: iam_organisation_role_event_get] 

Synopsis

  $ h1 iam organisation role event show <options> 

Global options

  --help                                      Show help message and exit.                                                 
  --verbose                                   Make the operation more talkative.                                          
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml                     
  --query string                              JMESPath query string. Default value is [].{id:id, name:name, state:state}  
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available.          
  --as uri                                    Act as another actor eg. service account                                    
  --no-wait                                   In case of queued event do not wait for completion                          

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --event id-or-uri          eventId         
  --skeleton
```

