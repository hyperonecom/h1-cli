## h1 iam

```
h1 iam

Synopsis

  $ h1 iam <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec           Print specification of context      
  project        Management of project resource      
  organisation   Management of organisation resource
```

### h1 iam spec

```
h1 iam spec

  Print specification of context 

Synopsis

  $ h1 iam spec <options> 

Global options

  --help    Show help message and exit. 

Operation options
```

### h1 iam project

```
h1 iam project

Synopsis

  $ h1 iam project <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec               Print specification of context         
  create             Create iam/project [project_create]    
  list               List iam/project [project_list]        
  show               Get iam/project [project_get]          
  update             Update iam/project [project_update]    
  delete             Delete iam/project [project_delete]    
  billing            Manage billings of the project         
  payment            Manage payments of the project         
  invoice            Manage invoices of the project         
  proforma           Manage proformas of the project        
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

#### h1 iam project spec

```
h1 iam project spec

  Print specification of context 

Synopsis

  $ h1 iam project spec <options> 

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

#### h1 iam project create

```
h1 iam project create

  Create iam/project [project_create] 

Synopsis

  $ h1 iam project create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --x-idempotency-key string   Idempotency key                                                               
  --name string                Project name                                                                  
  --organisation uri           Project organisation. Provide URI of iam/organisation. Requires permissions   
                               iam/project/create                                                            
  --tag key=key,value=value    Tag collection                                                                
  --skeleton true,false
```

#### h1 iam project list

```
h1 iam project list

  List iam/project [project_list] 

Synopsis

  $ h1 iam project list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --name string           Filter by name                               
  --$limit string         Filter by $limit                             
  --active string         Filter by active                             
  --organisation string   Filter by organisation                       
  --$lean string          return a lightweight version of the resource 
  --tag.value string      Filter by tag.value                          
  --tag.key string        Filter by tag.key                            
  --skeleton true,false
```

#### h1 iam project show

```
h1 iam project show

  Get iam/project [project_get] 

Synopsis

  $ h1 iam project show <options> 

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
  --skeleton true,false
```

#### h1 iam project update

```
h1 iam project update

  Update iam/project [project_update] 

Synopsis

  $ h1 iam project update <options> 

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
  --name string           Project name. Requires permissions iam/project.name/update 
  --skeleton true,false
```

#### h1 iam project delete

```
h1 iam project delete

  Delete iam/project [project_delete] 

Synopsis

  $ h1 iam project delete <options> 

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
  --skeleton true,false
```

#### h1 iam project billing

```
h1 iam project billing

Synopsis

  $ h1 iam project billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   List iam/project.billing [project_billing_list]
```

##### h1 iam project billing spec

```
h1 iam project billing spec

  Print specification of context 

Synopsis

  $ h1 iam project billing spec <options> 

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

##### h1 iam project billing list

```
h1 iam project billing list

  List iam/project.billing [project_billing_list] 

Synopsis

  $ h1 iam project billing list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id    
  --start string           start         
  --end string             end           
  --resource.type string   resource.type 
  --skeleton true,false
```

#### h1 iam project payment

```
h1 iam project payment

Synopsis

  $ h1 iam project payment <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   List iam/project.payment [project_payment_list]
```

##### h1 iam project payment spec

```
h1 iam project payment spec

  Print specification of context 

Synopsis

  $ h1 iam project payment spec <options> 

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

##### h1 iam project payment list

```
h1 iam project payment list

  List iam/project.payment [project_payment_list] 

Synopsis

  $ h1 iam project payment list <options> 

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
  --skeleton true,false
```

#### h1 iam project invoice

```
h1 iam project invoice

Synopsis

  $ h1 iam project invoice <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   List iam/project.invoice [project_invoice_list]
```

##### h1 iam project invoice spec

```
h1 iam project invoice spec

  Print specification of context 

Synopsis

  $ h1 iam project invoice spec <options> 

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

##### h1 iam project invoice list

```
h1 iam project invoice list

  List iam/project.invoice [project_invoice_list] 

Synopsis

  $ h1 iam project invoice list <options> 

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
  --skeleton true,false
```

#### h1 iam project proforma

```
h1 iam project proforma

Synopsis

  $ h1 iam project proforma <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   List iam/project.proforma [project_proforma_list]
```

##### h1 iam project proforma spec

```
h1 iam project proforma spec

  Print specification of context 

Synopsis

  $ h1 iam project proforma spec <options> 

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

##### h1 iam project proforma list

```
h1 iam project proforma list

  List iam/project.proforma [project_proforma_list] 

Synopsis

  $ h1 iam project proforma list <options> 

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
  --skeleton true,false
```

#### h1 iam project credential-store

```
h1 iam project credential-store

Synopsis

  $ h1 iam project credential-store <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                      
  create   Create iam/project.credentialStore [project_credentialStore_create] 
  list     List iam/project.credentialStore [project_credentialStore_list]     
  show     Get iam/project.credentialStore [project_credentialStore_get]       
  update   Update iam/project.credentialStore [project_credentialStore_patch]  
  delete   Delete iam/project.credentialStore [project_credentialStore_delete]
```

##### h1 iam project credential-store spec

```
h1 iam project credential-store spec

  Print specification of context 

Synopsis

  $ h1 iam project credential-store spec <options> 

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

##### h1 iam project credential-store create

```
h1 iam project credential-store create

  Create iam/project.credentialStore [project_credentialStore_create] 

Synopsis

  $ h1 iam project credential-store create <options> 

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
  --name string           Credential name  
  --type string           Credential type  
  --value string          Credential value 
  --token string          Credential token 
  --skeleton true,false
```

##### h1 iam project credential-store list

```
h1 iam project credential-store list

  List iam/project.credentialStore [project_credentialStore_list] 

Synopsis

  $ h1 iam project credential-store list <options> 

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
  --skeleton true,false
```

##### h1 iam project credential-store show

```
h1 iam project credential-store show

  Get iam/project.credentialStore [project_credentialStore_get] 

Synopsis

  $ h1 iam project credential-store show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --credential id-or-uri   credentialId 
  --skeleton true,false
```

##### h1 iam project credential-store update

```
h1 iam project credential-store update

  Update iam/project.credentialStore [project_credentialStore_patch] 

Synopsis

  $ h1 iam project credential-store update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id                                                                    
  --credential id-or-uri   credentialId                                                                  
  --name string            CredentialStore name. Requires permissions                                    
                           iam/project.credentialStore.name/update                                       
  --skeleton true,false
```

##### h1 iam project credential-store delete

```
h1 iam project credential-store delete

  Delete iam/project.credentialStore [project_credentialStore_delete] 

Synopsis

  $ h1 iam project credential-store delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --credential id-or-uri   credentialId 
  --skeleton true,false
```

#### h1 iam project quota

```
h1 iam project quota

Synopsis

  $ h1 iam project quota <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec    Print specification of context              
  list    List iam/project.quota [project_quota_list] 
  show    Get iam/project.quota [project_quota_get]   
  limit   Manage limits of the quota
```

##### h1 iam project quota spec

```
h1 iam project quota spec

  Print specification of context 

Synopsis

  $ h1 iam project quota spec <options> 

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

##### h1 iam project quota list

```
h1 iam project quota list

  List iam/project.quota [project_quota_list] 

Synopsis

  $ h1 iam project quota list <options> 

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
  --skeleton true,false
```

##### h1 iam project quota show

```
h1 iam project quota show

  Get iam/project.quota [project_quota_get] 

Synopsis

  $ h1 iam project quota show <options> 

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
  --quota id-or-uri       quotaId    
  --skeleton true,false
```

##### h1 iam project quota limit

```
h1 iam project quota limit

Synopsis

  $ h1 iam project quota limit <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                       
  update   Update iam/project.limit [project_quota_limit_patch]
```

###### h1 iam project quota limit spec

```
h1 iam project quota limit spec

  Print specification of context 

Synopsis

  $ h1 iam project quota limit spec <options> 

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

###### h1 iam project quota limit update

```
h1 iam project quota limit update

  Update iam/project.limit [project_quota_limit_patch] 

Synopsis

  $ h1 iam project quota limit update <options> 

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
  --quota id-or-uri       quotaId                                                        
  --user string           Limit user. Requires permissions iam/project.quota.user/update 
  --skeleton true,false
```

#### h1 iam project invitation

```
h1 iam project invitation

Synopsis

  $ h1 iam project invitation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                            
  list     List iam/project.invitation [project_invitation_list]     
  show     Get iam/project.invitation [project_invitation_get]       
  delete   Delete iam/project.invitation [project_invitation_delete] 
  accept   Create iam/project.actions [project_invitation_accept]
```

##### h1 iam project invitation spec

```
h1 iam project invitation spec

  Print specification of context 

Synopsis

  $ h1 iam project invitation spec <options> 

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

##### h1 iam project invitation list

```
h1 iam project invitation list

  List iam/project.invitation [project_invitation_list] 

Synopsis

  $ h1 iam project invitation list <options> 

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
  --resource string       resource   
  --skeleton true,false
```

##### h1 iam project invitation show

```
h1 iam project invitation show

  Get iam/project.invitation [project_invitation_get] 

Synopsis

  $ h1 iam project invitation show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --invitation id-or-uri   invitationId 
  --skeleton true,false
```

##### h1 iam project invitation delete

```
h1 iam project invitation delete

  Delete iam/project.invitation [project_invitation_delete] 

Synopsis

  $ h1 iam project invitation delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --invitation id-or-uri   invitationId 
  --skeleton true,false
```

##### h1 iam project invitation accept

```
h1 iam project invitation accept

  Create iam/project.actions [project_invitation_accept] 

Synopsis

  $ h1 iam project invitation accept <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --invitation id-or-uri   invitationId 
  --token string           Accept token 
  --skeleton true,false
```

#### h1 iam project ownership

```
h1 iam project ownership

Synopsis

  $ h1 iam project ownership <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                          
  create   Create iam/project.ownership [project_ownership_create] 
  list     List iam/project.ownership [project_ownership_list]     
  show     Get iam/project.ownership [project_ownership_get]       
  delete   Delete iam/project.ownership [project_ownership_delete]
```

##### h1 iam project ownership spec

```
h1 iam project ownership spec

  Print specification of context 

Synopsis

  $ h1 iam project ownership spec <options> 

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

##### h1 iam project ownership create

```
h1 iam project ownership create

  Create iam/project.ownership [project_ownership_create] 

Synopsis

  $ h1 iam project ownership create <options> 

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
  --email string          Ownership email 
  --skeleton true,false
```

##### h1 iam project ownership list

```
h1 iam project ownership list

  List iam/project.ownership [project_ownership_list] 

Synopsis

  $ h1 iam project ownership list <options> 

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
  --skeleton true,false
```

##### h1 iam project ownership show

```
h1 iam project ownership show

  Get iam/project.ownership [project_ownership_get] 

Synopsis

  $ h1 iam project ownership show <options> 

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
  --ownership id-or-uri   ownershipId 
  --skeleton true,false
```

##### h1 iam project ownership delete

```
h1 iam project ownership delete

  Delete iam/project.ownership [project_ownership_delete] 

Synopsis

  $ h1 iam project ownership delete <options> 

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
  --ownership id-or-uri   ownershipId 
  --skeleton true,false
```

#### h1 iam project service

```
h1 iam project service

Synopsis

  $ h1 iam project service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   List iam/project.service [project_service_list] 
  show   Get iam/project.service [project_service_get]
```

##### h1 iam project service spec

```
h1 iam project service spec

  Print specification of context 

Synopsis

  $ h1 iam project service spec <options> 

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

##### h1 iam project service list

```
h1 iam project service list

  List iam/project.service [project_service_list] 

Synopsis

  $ h1 iam project service list <options> 

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
  --skeleton true,false
```

##### h1 iam project service show

```
h1 iam project service show

  Get iam/project.service [project_service_get] 

Synopsis

  $ h1 iam project service show <options> 

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
  --service id-or-uri     serviceId  
  --skeleton true,false
```

#### h1 iam project tag

```
h1 iam project tag

Synopsis

  $ h1 iam project tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context              
  create   Create iam/project.tag [project_tag_create] 
  list     List iam/project.tag [project_tag_list]     
  show     Get iam/project.tag [project_tag_get]       
  delete   Delete iam/project.tag [project_tag_delete]
```

##### h1 iam project tag spec

```
h1 iam project tag spec

  Print specification of context 

Synopsis

  $ h1 iam project tag spec <options> 

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

##### h1 iam project tag create

```
h1 iam project tag create

  Create iam/project.tag [project_tag_create] 

Synopsis

  $ h1 iam project tag create <options> 

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
  --key string            Tag key    
  --value string          Tag value  
  --skeleton true,false
```

##### h1 iam project tag list

```
h1 iam project tag list

  List iam/project.tag [project_tag_list] 

Synopsis

  $ h1 iam project tag list <options> 

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
  --skeleton true,false
```

##### h1 iam project tag show

```
h1 iam project tag show

  Get iam/project.tag [project_tag_get] 

Synopsis

  $ h1 iam project tag show <options> 

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
  --tag id-or-uri         tagId      
  --skeleton true,false
```

##### h1 iam project tag delete

```
h1 iam project tag delete

  Delete iam/project.tag [project_tag_delete] 

Synopsis

  $ h1 iam project tag delete <options> 

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
  --tag id-or-uri         tagId      
  --skeleton true,false
```

#### h1 iam project event

```
h1 iam project event

Synopsis

  $ h1 iam project event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context              
  list   List iam/project.event [project_event_list] 
  show   Get iam/project.event [project_event_get]
```

##### h1 iam project event spec

```
h1 iam project event spec

  Print specification of context 

Synopsis

  $ h1 iam project event spec <options> 

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

##### h1 iam project event list

```
h1 iam project event list

  List iam/project.event [project_event_list] 

Synopsis

  $ h1 iam project event list <options> 

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
  --$limit string         $limit     
  --$skip string          $skip      
  --skeleton true,false
```

##### h1 iam project event show

```
h1 iam project event show

  Get iam/project.event [project_event_get] 

Synopsis

  $ h1 iam project event show <options> 

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
  --event id-or-uri       eventId    
  --skeleton true,false
```

#### h1 iam project policy

```
h1 iam project policy

Synopsis

  $ h1 iam project policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                
  create    Create iam/policy [iam_project_policy_create] 
  list      List iam/policy [iam_project_policy_list]     
  show      Get iam/policy [iam_project_policy_get]       
  update    Update iam/policy [iam_project_policy_update] 
  delete    Delete iam/policy [iam_project_policy_delete] 
  actor     Manage actors of the policy                   
  service   Manage services of the policy                 
  tag       Manage tags of the policy                     
  event     Manage events of the policy
```

##### h1 iam project policy spec

```
h1 iam project policy spec

  Print specification of context 

Synopsis

  $ h1 iam project policy spec <options> 

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

##### h1 iam project policy create

```
h1 iam project policy create

  Create iam/policy [iam_project_policy_create] 

Synopsis

  $ h1 iam project policy create <options> 

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
  --name string                Policy name                                                             
  --role uri                   Policy role. Provide URI of iam/role. Requires permissions iam/role/use 
  --resource string            Policy resource                                                         
  --tag key=key,value=value    Tag collection                                                          
  --skeleton true,false
```

##### h1 iam project policy list

```
h1 iam project policy list

  List iam/policy [iam_project_policy_list] 

Synopsis

  $ h1 iam project policy list <options> 

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

##### h1 iam project policy show

```
h1 iam project policy show

  Get iam/policy [iam_project_policy_get] 

Synopsis

  $ h1 iam project policy show <options> 

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
  --policy id-or-uri      Policy Id  
  --skeleton true,false
```

##### h1 iam project policy update

```
h1 iam project policy update

  Update iam/policy [iam_project_policy_update] 

Synopsis

  $ h1 iam project policy update <options> 

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
  --policy id-or-uri      Policy Id                                                
  --name string           Policy name. Requires permissions iam/policy.name/update 
  --skeleton true,false
```

##### h1 iam project policy delete

```
h1 iam project policy delete

  Delete iam/policy [iam_project_policy_delete] 

Synopsis

  $ h1 iam project policy delete <options> 

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
  --policy id-or-uri      Policy Id  
  --skeleton true,false
```

##### h1 iam project policy actor

```
h1 iam project policy actor

Synopsis

  $ h1 iam project policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                            
  create   Create iam/policy.actor [iam_project_policy_actor_create] 
  list     List iam/policy.actor [iam_project_policy_actor_list]     
  show     Get iam/policy.actor [iam_project_policy_actor_get]       
  delete   Delete iam/policy.actor [iam_project_policy_actor_delete]
```

###### h1 iam project policy actor spec

```
h1 iam project policy actor spec

  Print specification of context 

Synopsis

  $ h1 iam project policy actor spec <options> 

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

###### h1 iam project policy actor create

```
h1 iam project policy actor create

  Create iam/policy.actor [iam_project_policy_actor_create] 

Synopsis

  $ h1 iam project policy actor create <options> 

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
  --policy id-or-uri      Policy Id   
  --value string          Actor value 
  --skeleton true,false
```

###### h1 iam project policy actor list

```
h1 iam project policy actor list

  List iam/policy.actor [iam_project_policy_actor_list] 

Synopsis

  $ h1 iam project policy actor list <options> 

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
  --policy id-or-uri      Policy Id  
  --skeleton true,false
```

###### h1 iam project policy actor show

```
h1 iam project policy actor show

  Get iam/policy.actor [iam_project_policy_actor_get] 

Synopsis

  $ h1 iam project policy actor show <options> 

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
  --policy id-or-uri      Policy Id  
  --actor id-or-uri       actorId    
  --skeleton true,false
```

###### h1 iam project policy actor delete

```
h1 iam project policy actor delete

  Delete iam/policy.actor [iam_project_policy_actor_delete] 

Synopsis

  $ h1 iam project policy actor delete <options> 

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
  --policy id-or-uri      Policy Id  
  --actor id-or-uri       actorId    
  --skeleton true,false
```

##### h1 iam project policy service

```
h1 iam project policy service

Synopsis

  $ h1 iam project policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                            
  list   List iam/policy.service [iam_project_policy_service_list] 
  show   Get iam/policy.service [iam_project_policy_service_get]
```

###### h1 iam project policy service spec

```
h1 iam project policy service spec

  Print specification of context 

Synopsis

  $ h1 iam project policy service spec <options> 

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

###### h1 iam project policy service list

```
h1 iam project policy service list

  List iam/policy.service [iam_project_policy_service_list] 

Synopsis

  $ h1 iam project policy service list <options> 

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
  --policy id-or-uri      Policy Id  
  --skeleton true,false
```

###### h1 iam project policy service show

```
h1 iam project policy service show

  Get iam/policy.service [iam_project_policy_service_get] 

Synopsis

  $ h1 iam project policy service show <options> 

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
  --policy id-or-uri      Policy Id  
  --service id-or-uri     serviceId  
  --skeleton true,false
```

##### h1 iam project policy tag

```
h1 iam project policy tag

Synopsis

  $ h1 iam project policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                        
  create   Create iam/policy.tag [iam_project_policy_tag_create] 
  list     List iam/policy.tag [iam_project_policy_tag_list]     
  show     Get iam/policy.tag [iam_project_policy_tag_get]       
  delete   Delete iam/policy.tag [iam_project_policy_tag_delete]
```

###### h1 iam project policy tag spec

```
h1 iam project policy tag spec

  Print specification of context 

Synopsis

  $ h1 iam project policy tag spec <options> 

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

###### h1 iam project policy tag create

```
h1 iam project policy tag create

  Create iam/policy.tag [iam_project_policy_tag_create] 

Synopsis

  $ h1 iam project policy tag create <options> 

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
  --policy id-or-uri      Policy Id  
  --key string            Tag key    
  --value string          Tag value  
  --skeleton true,false
```

###### h1 iam project policy tag list

```
h1 iam project policy tag list

  List iam/policy.tag [iam_project_policy_tag_list] 

Synopsis

  $ h1 iam project policy tag list <options> 

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
  --policy id-or-uri      Policy Id  
  --skeleton true,false
```

###### h1 iam project policy tag show

```
h1 iam project policy tag show

  Get iam/policy.tag [iam_project_policy_tag_get] 

Synopsis

  $ h1 iam project policy tag show <options> 

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
  --policy id-or-uri      Policy Id  
  --tag id-or-uri         tagId      
  --skeleton true,false
```

###### h1 iam project policy tag delete

```
h1 iam project policy tag delete

  Delete iam/policy.tag [iam_project_policy_tag_delete] 

Synopsis

  $ h1 iam project policy tag delete <options> 

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
  --policy id-or-uri      Policy Id  
  --tag id-or-uri         tagId      
  --skeleton true,false
```

##### h1 iam project policy event

```
h1 iam project policy event

Synopsis

  $ h1 iam project policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                        
  list   List iam/policy.event [iam_project_policy_event_list] 
  show   Get iam/policy.event [iam_project_policy_event_get]
```

###### h1 iam project policy event spec

```
h1 iam project policy event spec

  Print specification of context 

Synopsis

  $ h1 iam project policy event spec <options> 

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

###### h1 iam project policy event list

```
h1 iam project policy event list

  List iam/policy.event [iam_project_policy_event_list] 

Synopsis

  $ h1 iam project policy event list <options> 

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
  --policy id-or-uri      Policy Id  
  --$limit string         $limit     
  --$skip string          $skip      
  --skeleton true,false
```

###### h1 iam project policy event show

```
h1 iam project policy event show

  Get iam/policy.event [iam_project_policy_event_get] 

Synopsis

  $ h1 iam project policy event show <options> 

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
  --policy id-or-uri      Policy Id  
  --event id-or-uri       eventId    
  --skeleton true,false
```

#### h1 iam project role

```
h1 iam project role

Synopsis

  $ h1 iam project role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context            
  create       Create iam/role [iam_project_role_create] 
  list         List iam/role [iam_project_role_list]     
  show         Get iam/role [iam_project_role_get]       
  update       Update iam/role [iam_project_role_update] 
  delete       Delete iam/role [iam_project_role_delete] 
  permission   Manage permissions of the role            
  service      Manage services of the role               
  tag          Manage tags of the role                   
  event        Manage events of the role
```

##### h1 iam project role spec

```
h1 iam project role spec

  Print specification of context 

Synopsis

  $ h1 iam project role spec <options> 

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

##### h1 iam project role create

```
h1 iam project role create

  Create iam/role [iam_project_role_create] 

Synopsis

  $ h1 iam project role create <options> 

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
  --name string                Role name                                                                     
  --service id-or-uri          Role service. Provide ID or URI of billing/service. Defaults is               
                               5e679c282b39c4353cd86f34                                                      
  --description string         Role description                                                              
  --permission value=value     Permission collection                                                         
  --tag key=key,value=value    Tag collection                                                                
  --skeleton true,false
```

##### h1 iam project role list

```
h1 iam project role list

  List iam/role [iam_project_role_list] 

Synopsis

  $ h1 iam project role list <options> 

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

##### h1 iam project role show

```
h1 iam project role show

  Get iam/role [iam_project_role_get] 

Synopsis

  $ h1 iam project role show <options> 

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
  --role id-or-uri        Role Id    
  --skeleton true,false
```

##### h1 iam project role update

```
h1 iam project role update

  Update iam/role [iam_project_role_update] 

Synopsis

  $ h1 iam project role update <options> 

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
  --role id-or-uri        Role Id                                                            
  --name string           Role name. Requires permissions iam/role.name/update               
  --description string    Role description. Requires permissions iam/role.description/update 
  --skeleton true,false
```

##### h1 iam project role delete

```
h1 iam project role delete

  Delete iam/role [iam_project_role_delete] 

Synopsis

  $ h1 iam project role delete <options> 

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
  --role id-or-uri        Role Id    
  --skeleton true,false
```

##### h1 iam project role permission

```
h1 iam project role permission

Synopsis

  $ h1 iam project role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                  
  create   Create iam/role.permission [iam_project_role_permission_create] 
  list     List iam/role.permission [iam_project_role_permission_list]     
  show     Get iam/role.permission [iam_project_role_permission_get]       
  delete   Delete iam/role.permission [iam_project_role_permission_delete]
```

###### h1 iam project role permission spec

```
h1 iam project role permission spec

  Print specification of context 

Synopsis

  $ h1 iam project role permission spec <options> 

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

###### h1 iam project role permission create

```
h1 iam project role permission create

  Create iam/role.permission [iam_project_role_permission_create] 

Synopsis

  $ h1 iam project role permission create <options> 

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
  --role id-or-uri        Role Id          
  --value string          Permission value 
  --skeleton true,false
```

###### h1 iam project role permission list

```
h1 iam project role permission list

  List iam/role.permission [iam_project_role_permission_list] 

Synopsis

  $ h1 iam project role permission list <options> 

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
  --role id-or-uri        Role Id    
  --skeleton true,false
```

###### h1 iam project role permission show

```
h1 iam project role permission show

  Get iam/role.permission [iam_project_role_permission_get] 

Synopsis

  $ h1 iam project role permission show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --role id-or-uri         Role Id      
  --permission id-or-uri   permissionId 
  --skeleton true,false
```

###### h1 iam project role permission delete

```
h1 iam project role permission delete

  Delete iam/role.permission [iam_project_role_permission_delete] 

Synopsis

  $ h1 iam project role permission delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --role id-or-uri         Role Id      
  --permission id-or-uri   permissionId 
  --skeleton true,false
```

##### h1 iam project role service

```
h1 iam project role service

Synopsis

  $ h1 iam project role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                        
  list   List iam/role.service [iam_project_role_service_list] 
  show   Get iam/role.service [iam_project_role_service_get]
```

###### h1 iam project role service spec

```
h1 iam project role service spec

  Print specification of context 

Synopsis

  $ h1 iam project role service spec <options> 

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

###### h1 iam project role service list

```
h1 iam project role service list

  List iam/role.service [iam_project_role_service_list] 

Synopsis

  $ h1 iam project role service list <options> 

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
  --role id-or-uri        Role Id    
  --skeleton true,false
```

###### h1 iam project role service show

```
h1 iam project role service show

  Get iam/role.service [iam_project_role_service_get] 

Synopsis

  $ h1 iam project role service show <options> 

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
  --role id-or-uri        Role Id    
  --service id-or-uri     serviceId  
  --skeleton true,false
```

##### h1 iam project role tag

```
h1 iam project role tag

Synopsis

  $ h1 iam project role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                    
  create   Create iam/role.tag [iam_project_role_tag_create] 
  list     List iam/role.tag [iam_project_role_tag_list]     
  show     Get iam/role.tag [iam_project_role_tag_get]       
  delete   Delete iam/role.tag [iam_project_role_tag_delete]
```

###### h1 iam project role tag spec

```
h1 iam project role tag spec

  Print specification of context 

Synopsis

  $ h1 iam project role tag spec <options> 

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

###### h1 iam project role tag create

```
h1 iam project role tag create

  Create iam/role.tag [iam_project_role_tag_create] 

Synopsis

  $ h1 iam project role tag create <options> 

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
  --role id-or-uri        Role Id    
  --key string            Tag key    
  --value string          Tag value  
  --skeleton true,false
```

###### h1 iam project role tag list

```
h1 iam project role tag list

  List iam/role.tag [iam_project_role_tag_list] 

Synopsis

  $ h1 iam project role tag list <options> 

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
  --role id-or-uri        Role Id    
  --skeleton true,false
```

###### h1 iam project role tag show

```
h1 iam project role tag show

  Get iam/role.tag [iam_project_role_tag_get] 

Synopsis

  $ h1 iam project role tag show <options> 

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
  --role id-or-uri        Role Id    
  --tag id-or-uri         tagId      
  --skeleton true,false
```

###### h1 iam project role tag delete

```
h1 iam project role tag delete

  Delete iam/role.tag [iam_project_role_tag_delete] 

Synopsis

  $ h1 iam project role tag delete <options> 

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
  --role id-or-uri        Role Id    
  --tag id-or-uri         tagId      
  --skeleton true,false
```

##### h1 iam project role event

```
h1 iam project role event

Synopsis

  $ h1 iam project role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   List iam/role.event [iam_project_role_event_list] 
  show   Get iam/role.event [iam_project_role_event_get]
```

###### h1 iam project role event spec

```
h1 iam project role event spec

  Print specification of context 

Synopsis

  $ h1 iam project role event spec <options> 

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

###### h1 iam project role event list

```
h1 iam project role event list

  List iam/role.event [iam_project_role_event_list] 

Synopsis

  $ h1 iam project role event list <options> 

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
  --role id-or-uri        Role Id    
  --$limit string         $limit     
  --$skip string          $skip      
  --skeleton true,false
```

###### h1 iam project role event show

```
h1 iam project role event show

  Get iam/role.event [iam_project_role_event_get] 

Synopsis

  $ h1 iam project role event show <options> 

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
  --role id-or-uri        Role Id    
  --event id-or-uri       eventId    
  --skeleton true,false
```

#### h1 iam project sa

```
h1 iam project sa

Synopsis

  $ h1 iam project sa <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context        
  create       Create iam/sa [iam_project_sa_create] 
  list         List iam/sa [iam_project_sa_list]     
  show         Get iam/sa [iam_project_sa_get]       
  update       Update iam/sa [iam_project_sa_update] 
  delete       Delete iam/sa [iam_project_sa_delete] 
  credential   Manage credentials of the sa          
  service      Manage services of the sa             
  tag          Manage tags of the sa                 
  event        Manage events of the sa
```

##### h1 iam project sa spec

```
h1 iam project sa spec

  Print specification of context 

Synopsis

  $ h1 iam project sa spec <options> 

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

##### h1 iam project sa create

```
h1 iam project sa create

  Create iam/sa [iam_project_sa_create] 

Synopsis

  $ h1 iam project sa create <options> 

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
  --name string                Sa name                                                                       
  --service id-or-uri          Sa service. Provide ID or URI of billing/service. Defaults is                 
                               5e5fc76ff1fb3efe1842336a                                                      
  --tag key=key,value=value    Tag collection                                                                
  --skeleton true,false
```

##### h1 iam project sa list

```
h1 iam project sa list

  List iam/sa [iam_project_sa_list] 

Synopsis

  $ h1 iam project sa list <options> 

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

##### h1 iam project sa show

```
h1 iam project sa show

  Get iam/sa [iam_project_sa_get] 

Synopsis

  $ h1 iam project sa show <options> 

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
  --sa id-or-uri          Sa Id      
  --skeleton true,false
```

##### h1 iam project sa update

```
h1 iam project sa update

  Update iam/sa [iam_project_sa_update] 

Synopsis

  $ h1 iam project sa update <options> 

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
  --sa id-or-uri          Sa Id                                            
  --name string           Sa name. Requires permissions iam/sa.name/update 
  --skeleton true,false
```

##### h1 iam project sa delete

```
h1 iam project sa delete

  Delete iam/sa [iam_project_sa_delete] 

Synopsis

  $ h1 iam project sa delete <options> 

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
  --sa id-or-uri          Sa Id      
  --skeleton true,false
```

##### h1 iam project sa credential

```
h1 iam project sa credential

Synopsis

  $ h1 iam project sa credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                              
  create     Create iam/sa.credential [iam_project_sa_credential_create] 
  list       List iam/sa.credential [iam_project_sa_credential_list]     
  show       Get iam/sa.credential [iam_project_sa_credential_get]       
  update     Update iam/sa.credential [iam_project_sa_credential_patch]  
  delete     Delete iam/sa.credential [iam_project_sa_credential_delete] 
  generate   Generate passport file for sa
```

###### h1 iam project sa credential spec

```
h1 iam project sa credential spec

  Print specification of context 

Synopsis

  $ h1 iam project sa credential spec <options> 

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

###### h1 iam project sa credential create

```
h1 iam project sa credential create

  Create iam/sa.credential [iam_project_sa_credential_create] 

Synopsis

  $ h1 iam project sa credential create <options> 

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
  --sa id-or-uri          Sa Id            
  --name string           Credential name  
  --type string           Credential type  
  --value string          Credential value 
  --token string          Credential token 
  --skeleton true,false
```

###### h1 iam project sa credential list

```
h1 iam project sa credential list

  List iam/sa.credential [iam_project_sa_credential_list] 

Synopsis

  $ h1 iam project sa credential list <options> 

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
  --sa id-or-uri          Sa Id      
  --skeleton true,false
```

###### h1 iam project sa credential show

```
h1 iam project sa credential show

  Get iam/sa.credential [iam_project_sa_credential_get] 

Synopsis

  $ h1 iam project sa credential show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --sa id-or-uri           Sa Id        
  --credential id-or-uri   credentialId 
  --skeleton true,false
```

###### h1 iam project sa credential update

```
h1 iam project sa credential update

  Update iam/sa.credential [iam_project_sa_credential_patch] 

Synopsis

  $ h1 iam project sa credential update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id                                                          
  --sa id-or-uri           Sa Id                                                               
  --credential id-or-uri   credentialId                                                        
  --name string            Credential name. Requires permissions iam/sa.credential.name/update 
  --skeleton true,false
```

###### h1 iam project sa credential delete

```
h1 iam project sa credential delete

  Delete iam/sa.credential [iam_project_sa_credential_delete] 

Synopsis

  $ h1 iam project sa credential delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --sa id-or-uri           Sa Id        
  --credential id-or-uri   credentialId 
  --skeleton true,false
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
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

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

  spec   Print specification of context                    
  list   List iam/sa.service [iam_project_sa_service_list] 
  show   Get iam/sa.service [iam_project_sa_service_get]
```

###### h1 iam project sa service spec

```
h1 iam project sa service spec

  Print specification of context 

Synopsis

  $ h1 iam project sa service spec <options> 

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

###### h1 iam project sa service list

```
h1 iam project sa service list

  List iam/sa.service [iam_project_sa_service_list] 

Synopsis

  $ h1 iam project sa service list <options> 

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
  --sa id-or-uri          Sa Id      
  --skeleton true,false
```

###### h1 iam project sa service show

```
h1 iam project sa service show

  Get iam/sa.service [iam_project_sa_service_get] 

Synopsis

  $ h1 iam project sa service show <options> 

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
  --sa id-or-uri          Sa Id      
  --service id-or-uri     serviceId  
  --skeleton true,false
```

##### h1 iam project sa tag

```
h1 iam project sa tag

Synopsis

  $ h1 iam project sa tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                
  create   Create iam/sa.tag [iam_project_sa_tag_create] 
  list     List iam/sa.tag [iam_project_sa_tag_list]     
  show     Get iam/sa.tag [iam_project_sa_tag_get]       
  delete   Delete iam/sa.tag [iam_project_sa_tag_delete]
```

###### h1 iam project sa tag spec

```
h1 iam project sa tag spec

  Print specification of context 

Synopsis

  $ h1 iam project sa tag spec <options> 

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

###### h1 iam project sa tag create

```
h1 iam project sa tag create

  Create iam/sa.tag [iam_project_sa_tag_create] 

Synopsis

  $ h1 iam project sa tag create <options> 

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
  --sa id-or-uri          Sa Id      
  --key string            Tag key    
  --value string          Tag value  
  --skeleton true,false
```

###### h1 iam project sa tag list

```
h1 iam project sa tag list

  List iam/sa.tag [iam_project_sa_tag_list] 

Synopsis

  $ h1 iam project sa tag list <options> 

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
  --sa id-or-uri          Sa Id      
  --skeleton true,false
```

###### h1 iam project sa tag show

```
h1 iam project sa tag show

  Get iam/sa.tag [iam_project_sa_tag_get] 

Synopsis

  $ h1 iam project sa tag show <options> 

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
  --sa id-or-uri          Sa Id      
  --tag id-or-uri         tagId      
  --skeleton true,false
```

###### h1 iam project sa tag delete

```
h1 iam project sa tag delete

  Delete iam/sa.tag [iam_project_sa_tag_delete] 

Synopsis

  $ h1 iam project sa tag delete <options> 

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
  --sa id-or-uri          Sa Id      
  --tag id-or-uri         tagId      
  --skeleton true,false
```

##### h1 iam project sa event

```
h1 iam project sa event

Synopsis

  $ h1 iam project sa event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                
  list   List iam/sa.event [iam_project_sa_event_list] 
  show   Get iam/sa.event [iam_project_sa_event_get]
```

###### h1 iam project sa event spec

```
h1 iam project sa event spec

  Print specification of context 

Synopsis

  $ h1 iam project sa event spec <options> 

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

###### h1 iam project sa event list

```
h1 iam project sa event list

  List iam/sa.event [iam_project_sa_event_list] 

Synopsis

  $ h1 iam project sa event list <options> 

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
  --sa id-or-uri          Sa Id      
  --$limit string         $limit     
  --$skip string          $skip      
  --skeleton true,false
```

###### h1 iam project sa event show

```
h1 iam project sa event show

  Get iam/sa.event [iam_project_sa_event_get] 

Synopsis

  $ h1 iam project sa event show <options> 

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
  --sa id-or-uri          Sa Id      
  --event id-or-uri       eventId    
  --skeleton true,false
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
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

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

  spec              Print specification of context                                  
  create            Create iam/organisation [organisation_create]                   
  list              List iam/organisation [organisation_list]                       
  show              Get iam/organisation [organisation_get]                         
  update            Update iam/organisation [organisation_update]                   
  delete            Delete iam/organisation [organisation_delete]                   
  transfer_accept   Transfer accept iam/organisation [organisation_transfer_accept] 
  billing           Manage billings of the organisation                             
  payment           Manage payments of the organisation                             
  invoice           Manage invoices of the organisation                             
  proforma          Manage proformas of the organisation                            
  invitation        Manage invitations of the organisation                          
  ownership         Manage ownerships of the organisation                           
  event             Manage events of the organisation                               
  policy            Manage policies of the organisation                             
  role              Manage roles of the organisation
```

#### h1 iam organisation spec

```
h1 iam organisation spec

  Print specification of context 

Synopsis

  $ h1 iam organisation spec <options> 

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

#### h1 iam organisation create

```
h1 iam organisation create

  Create iam/organisation [organisation_create] 

Synopsis

  $ h1 iam organisation create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --x-idempotency-key string         Idempotency key                   
  --name string                      Organisation name                 
  --billing-nip string               Billing nip                       
  --billing-email string             Billing email                     
  --billing-company string           Billing company                   
  --billing-currency string          Billing currency. Defaults is PLN 
  --billing--addresscountry string   Address country. Defaults is PL   
  --billing--addresscity string      Address city                      
  --billing--addresszipcode string   Address zipcode                   
  --billing--addressstreet string    Address street                    
  --skeleton true,false
```

#### h1 iam organisation list

```
h1 iam organisation list

  List iam/organisation [organisation_list] 

Synopsis

  $ h1 iam organisation list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --name string              Filter by name            
  --billing.company string   Filter by billing.company 
  --$limit string            Filter by $limit          
  --active string            Filter by active          
  --skeleton true,false
```

#### h1 iam organisation show

```
h1 iam organisation show

  Get iam/organisation [organisation_get] 

Synopsis

  $ h1 iam organisation show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton true,false
```

#### h1 iam organisation update

```
h1 iam organisation update

  Update iam/organisation [organisation_update] 

Synopsis

  $ h1 iam organisation update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri           Organisation Id                                                      
  --name string                      Organisation name. Requires permissions iam/organisation.name/update 
  --billing-email string             Billing email                                                        
  --billing-company string           Billing company                                                      
  --billing--addresscity string      Address city                                                         
  --billing--addresszipcode string   Address zipcode                                                      
  --billing--addressstreet string    Address street                                                       
  --skeleton true,false
```

#### h1 iam organisation delete

```
h1 iam organisation delete

  Delete iam/organisation [organisation_delete] 

Synopsis

  $ h1 iam organisation delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton true,false
```

#### h1 iam organisation transfer_accept

```
h1 iam organisation transfer_accept

  Transfer accept iam/organisation [organisation_transfer_accept] 

Synopsis

  $ h1 iam organisation transfer_accept <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri     Organisation Id      
  --x-idempotency-key string   Idempotency key      
  --payment string             Organisation payment 
  --project string             Organisation project 
  --skeleton true,false
```

#### h1 iam organisation billing

```
h1 iam organisation billing

Synopsis

  $ h1 iam organisation billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                            
  list   List iam/organisation.billing [organisation_billing_list]
```

##### h1 iam organisation billing spec

```
h1 iam organisation billing spec

  Print specification of context 

Synopsis

  $ h1 iam organisation billing spec <options> 

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

##### h1 iam organisation billing list

```
h1 iam organisation billing list

  List iam/organisation.billing [organisation_billing_list] 

Synopsis

  $ h1 iam organisation billing list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --start string             start           
  --end string               end             
  --resource.type string     resource.type   
  --skeleton true,false
```

#### h1 iam organisation payment

```
h1 iam organisation payment

Synopsis

  $ h1 iam organisation payment <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                                  
  list       List iam/organisation.payment [organisation_payment_list]       
  show       Get iam/organisation.payment [organisation_payment_get]         
  allocate   Create iam/organisation.actions [organisation_payment_allocate]
```

##### h1 iam organisation payment spec

```
h1 iam organisation payment spec

  Print specification of context 

Synopsis

  $ h1 iam organisation payment spec <options> 

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

##### h1 iam organisation payment list

```
h1 iam organisation payment list

  List iam/organisation.payment [organisation_payment_list] 

Synopsis

  $ h1 iam organisation payment list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton true,false
```

##### h1 iam organisation payment show

```
h1 iam organisation payment show

  Get iam/organisation.payment [organisation_payment_get] 

Synopsis

  $ h1 iam organisation payment show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --payment id-or-uri        paymentId       
  --skeleton true,false
```

##### h1 iam organisation payment allocate

```
h1 iam organisation payment allocate

  Create iam/organisation.actions [organisation_payment_allocate] 

Synopsis

  $ h1 iam organisation payment allocate <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id                                                               
  --payment id-or-uri        paymentId                                                                     
  --project uri              Allocate project. Provide URI of iam/project. Requires permissions            
                             iam/project/get                                                               
  --skeleton true,false
```

#### h1 iam organisation invoice

```
h1 iam organisation invoice

Synopsis

  $ h1 iam organisation invoice <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                                  
  list       List iam/organisation.invoice [organisation_invoice_list]       
  show       Get iam/organisation.invoice [organisation_invoice_get]         
  download   Create iam/organisation.actions [organisation_invoice_download]
```

##### h1 iam organisation invoice spec

```
h1 iam organisation invoice spec

  Print specification of context 

Synopsis

  $ h1 iam organisation invoice spec <options> 

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

##### h1 iam organisation invoice list

```
h1 iam organisation invoice list

  List iam/organisation.invoice [organisation_invoice_list] 

Synopsis

  $ h1 iam organisation invoice list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton true,false
```

##### h1 iam organisation invoice show

```
h1 iam organisation invoice show

  Get iam/organisation.invoice [organisation_invoice_get] 

Synopsis

  $ h1 iam organisation invoice show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --invoice id-or-uri        invoiceId       
  --skeleton true,false
```

##### h1 iam organisation invoice download

```
h1 iam organisation invoice download

  Create iam/organisation.actions [organisation_invoice_download] 

Synopsis

  $ h1 iam organisation invoice download <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --invoice id-or-uri        invoiceId       
  --skeleton true,false
```

#### h1 iam organisation proforma

```
h1 iam organisation proforma

Synopsis

  $ h1 iam organisation proforma <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                                   
  create     Create iam/organisation.proforma [organisation_proforma_create]  
  list       List iam/organisation.proforma [organisation_proforma_list]      
  show       Get iam/organisation.proforma [organisation_proforma_get]        
  download   Create iam/organisation.actions [organisation_proforma_download]
```

##### h1 iam organisation proforma spec

```
h1 iam organisation proforma spec

  Print specification of context 

Synopsis

  $ h1 iam organisation proforma spec <options> 

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

##### h1 iam organisation proforma create

```
h1 iam organisation proforma create

  Create iam/organisation.proforma [organisation_proforma_create] 

Synopsis

  $ h1 iam organisation proforma create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id                                                               
  --amount string            Proforma amount                                                               
  --project uri              Proforma project. Provide URI of iam/project. Requires permissions            
                             iam/project/get                                                               
  --skeleton true,false
```

##### h1 iam organisation proforma list

```
h1 iam organisation proforma list

  List iam/organisation.proforma [organisation_proforma_list] 

Synopsis

  $ h1 iam organisation proforma list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton true,false
```

##### h1 iam organisation proforma show

```
h1 iam organisation proforma show

  Get iam/organisation.proforma [organisation_proforma_get] 

Synopsis

  $ h1 iam organisation proforma show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --proforma id-or-uri       proformaId      
  --skeleton true,false
```

##### h1 iam organisation proforma download

```
h1 iam organisation proforma download

  Create iam/organisation.actions [organisation_proforma_download] 

Synopsis

  $ h1 iam organisation proforma download <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --proforma id-or-uri       proformaId      
  --skeleton true,false
```

#### h1 iam organisation invitation

```
h1 iam organisation invitation

Synopsis

  $ h1 iam organisation invitation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                      
  list     List iam/organisation.invitation [organisation_invitation_list]     
  show     Get iam/organisation.invitation [organisation_invitation_get]       
  delete   Delete iam/organisation.invitation [organisation_invitation_delete] 
  accept   Create iam/organisation.actions [organisation_invitation_accept]
```

##### h1 iam organisation invitation spec

```
h1 iam organisation invitation spec

  Print specification of context 

Synopsis

  $ h1 iam organisation invitation spec <options> 

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

##### h1 iam organisation invitation list

```
h1 iam organisation invitation list

  List iam/organisation.invitation [organisation_invitation_list] 

Synopsis

  $ h1 iam organisation invitation list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --resource string          resource        
  --skeleton true,false
```

##### h1 iam organisation invitation show

```
h1 iam organisation invitation show

  Get iam/organisation.invitation [organisation_invitation_get] 

Synopsis

  $ h1 iam organisation invitation show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --invitation id-or-uri     invitationId    
  --skeleton true,false
```

##### h1 iam organisation invitation delete

```
h1 iam organisation invitation delete

  Delete iam/organisation.invitation [organisation_invitation_delete] 

Synopsis

  $ h1 iam organisation invitation delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --invitation id-or-uri     invitationId    
  --skeleton true,false
```

##### h1 iam organisation invitation accept

```
h1 iam organisation invitation accept

  Create iam/organisation.actions [organisation_invitation_accept] 

Synopsis

  $ h1 iam organisation invitation accept <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --invitation id-or-uri     invitationId    
  --token string             Accept token    
  --skeleton true,false
```

#### h1 iam organisation ownership

```
h1 iam organisation ownership

Synopsis

  $ h1 iam organisation ownership <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                    
  create   Create iam/organisation.ownership [organisation_ownership_create] 
  list     List iam/organisation.ownership [organisation_ownership_list]     
  show     Get iam/organisation.ownership [organisation_ownership_get]       
  delete   Delete iam/organisation.ownership [organisation_ownership_delete]
```

##### h1 iam organisation ownership spec

```
h1 iam organisation ownership spec

  Print specification of context 

Synopsis

  $ h1 iam organisation ownership spec <options> 

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

##### h1 iam organisation ownership create

```
h1 iam organisation ownership create

  Create iam/organisation.ownership [organisation_ownership_create] 

Synopsis

  $ h1 iam organisation ownership create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --email string             Ownership email 
  --skeleton true,false
```

##### h1 iam organisation ownership list

```
h1 iam organisation ownership list

  List iam/organisation.ownership [organisation_ownership_list] 

Synopsis

  $ h1 iam organisation ownership list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --skeleton true,false
```

##### h1 iam organisation ownership show

```
h1 iam organisation ownership show

  Get iam/organisation.ownership [organisation_ownership_get] 

Synopsis

  $ h1 iam organisation ownership show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --ownership id-or-uri      ownershipId     
  --skeleton true,false
```

##### h1 iam organisation ownership delete

```
h1 iam organisation ownership delete

  Delete iam/organisation.ownership [organisation_ownership_delete] 

Synopsis

  $ h1 iam organisation ownership delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --ownership id-or-uri      ownershipId     
  --skeleton true,false
```

#### h1 iam organisation event

```
h1 iam organisation event

Synopsis

  $ h1 iam organisation event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                        
  list   List iam/organisation.event [organisation_event_list] 
  show   Get iam/organisation.event [organisation_event_get]
```

##### h1 iam organisation event spec

```
h1 iam organisation event spec

  Print specification of context 

Synopsis

  $ h1 iam organisation event spec <options> 

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

##### h1 iam organisation event list

```
h1 iam organisation event list

  List iam/organisation.event [organisation_event_list] 

Synopsis

  $ h1 iam organisation event list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --$limit string            $limit          
  --$skip string             $skip           
  --skeleton true,false
```

##### h1 iam organisation event show

```
h1 iam organisation event show

  Get iam/organisation.event [organisation_event_get] 

Synopsis

  $ h1 iam organisation event show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --event id-or-uri          eventId         
  --skeleton true,false
```

#### h1 iam organisation policy

```
h1 iam organisation policy

Synopsis

  $ h1 iam organisation policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                     
  create    Create iam/policy [iam_organisation_policy_create] 
  list      List iam/policy [iam_organisation_policy_list]     
  show      Get iam/policy [iam_organisation_policy_get]       
  update    Update iam/policy [iam_organisation_policy_update] 
  delete    Delete iam/policy [iam_organisation_policy_delete] 
  actor     Manage actors of the policy                        
  service   Manage services of the policy                      
  tag       Manage tags of the policy                          
  event     Manage events of the policy
```

##### h1 iam organisation policy spec

```
h1 iam organisation policy spec

  Print specification of context 

Synopsis

  $ h1 iam organisation policy spec <options> 

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

##### h1 iam organisation policy create

```
h1 iam organisation policy create

  Create iam/policy [iam_organisation_policy_create] 

Synopsis

  $ h1 iam organisation policy create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri     Organisation Id                                                         
  --x-idempotency-key string   Idempotency key                                                         
  --name string                Policy name                                                             
  --role uri                   Policy role. Provide URI of iam/role. Requires permissions iam/role/use 
  --resource string            Policy resource                                                         
  --tag key=key,value=value    Tag collection                                                          
  --skeleton true,false
```

##### h1 iam organisation policy list

```
h1 iam organisation policy list

  List iam/policy [iam_organisation_policy_list] 

Synopsis

  $ h1 iam organisation policy list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id     
  --name string              Filter by name      
  --tag.value string         Filter by tag.value 
  --tag.key string           Filter by tag.key   
  --skeleton true,false
```

##### h1 iam organisation policy show

```
h1 iam organisation policy show

  Get iam/policy [iam_organisation_policy_get] 

Synopsis

  $ h1 iam organisation policy show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --skeleton true,false
```

##### h1 iam organisation policy update

```
h1 iam organisation policy update

  Update iam/policy [iam_organisation_policy_update] 

Synopsis

  $ h1 iam organisation policy update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id                                          
  --policy id-or-uri         Policy Id                                                
  --name string              Policy name. Requires permissions iam/policy.name/update 
  --skeleton true,false
```

##### h1 iam organisation policy delete

```
h1 iam organisation policy delete

  Delete iam/policy [iam_organisation_policy_delete] 

Synopsis

  $ h1 iam organisation policy delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --skeleton true,false
```

##### h1 iam organisation policy actor

```
h1 iam organisation policy actor

Synopsis

  $ h1 iam organisation policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                 
  create   Create iam/policy.actor [iam_organisation_policy_actor_create] 
  list     List iam/policy.actor [iam_organisation_policy_actor_list]     
  show     Get iam/policy.actor [iam_organisation_policy_actor_get]       
  delete   Delete iam/policy.actor [iam_organisation_policy_actor_delete]
```

###### h1 iam organisation policy actor spec

```
h1 iam organisation policy actor spec

  Print specification of context 

Synopsis

  $ h1 iam organisation policy actor spec <options> 

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

###### h1 iam organisation policy actor create

```
h1 iam organisation policy actor create

  Create iam/policy.actor [iam_organisation_policy_actor_create] 

Synopsis

  $ h1 iam organisation policy actor create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --value string             Actor value     
  --skeleton true,false
```

###### h1 iam organisation policy actor list

```
h1 iam organisation policy actor list

  List iam/policy.actor [iam_organisation_policy_actor_list] 

Synopsis

  $ h1 iam organisation policy actor list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --skeleton true,false
```

###### h1 iam organisation policy actor show

```
h1 iam organisation policy actor show

  Get iam/policy.actor [iam_organisation_policy_actor_get] 

Synopsis

  $ h1 iam organisation policy actor show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --actor id-or-uri          actorId         
  --skeleton true,false
```

###### h1 iam organisation policy actor delete

```
h1 iam organisation policy actor delete

  Delete iam/policy.actor [iam_organisation_policy_actor_delete] 

Synopsis

  $ h1 iam organisation policy actor delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --actor id-or-uri          actorId         
  --skeleton true,false
```

##### h1 iam organisation policy service

```
h1 iam organisation policy service

Synopsis

  $ h1 iam organisation policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                 
  list   List iam/policy.service [iam_organisation_policy_service_list] 
  show   Get iam/policy.service [iam_organisation_policy_service_get]
```

###### h1 iam organisation policy service spec

```
h1 iam organisation policy service spec

  Print specification of context 

Synopsis

  $ h1 iam organisation policy service spec <options> 

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

###### h1 iam organisation policy service list

```
h1 iam organisation policy service list

  List iam/policy.service [iam_organisation_policy_service_list] 

Synopsis

  $ h1 iam organisation policy service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --skeleton true,false
```

###### h1 iam organisation policy service show

```
h1 iam organisation policy service show

  Get iam/policy.service [iam_organisation_policy_service_get] 

Synopsis

  $ h1 iam organisation policy service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --service id-or-uri        serviceId       
  --skeleton true,false
```

##### h1 iam organisation policy tag

```
h1 iam organisation policy tag

Synopsis

  $ h1 iam organisation policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                             
  create   Create iam/policy.tag [iam_organisation_policy_tag_create] 
  list     List iam/policy.tag [iam_organisation_policy_tag_list]     
  show     Get iam/policy.tag [iam_organisation_policy_tag_get]       
  delete   Delete iam/policy.tag [iam_organisation_policy_tag_delete]
```

###### h1 iam organisation policy tag spec

```
h1 iam organisation policy tag spec

  Print specification of context 

Synopsis

  $ h1 iam organisation policy tag spec <options> 

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

###### h1 iam organisation policy tag create

```
h1 iam organisation policy tag create

  Create iam/policy.tag [iam_organisation_policy_tag_create] 

Synopsis

  $ h1 iam organisation policy tag create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --key string               Tag key         
  --value string             Tag value       
  --skeleton true,false
```

###### h1 iam organisation policy tag list

```
h1 iam organisation policy tag list

  List iam/policy.tag [iam_organisation_policy_tag_list] 

Synopsis

  $ h1 iam organisation policy tag list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --skeleton true,false
```

###### h1 iam organisation policy tag show

```
h1 iam organisation policy tag show

  Get iam/policy.tag [iam_organisation_policy_tag_get] 

Synopsis

  $ h1 iam organisation policy tag show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --tag id-or-uri            tagId           
  --skeleton true,false
```

###### h1 iam organisation policy tag delete

```
h1 iam organisation policy tag delete

  Delete iam/policy.tag [iam_organisation_policy_tag_delete] 

Synopsis

  $ h1 iam organisation policy tag delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --tag id-or-uri            tagId           
  --skeleton true,false
```

##### h1 iam organisation policy event

```
h1 iam organisation policy event

Synopsis

  $ h1 iam organisation policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                             
  list   List iam/policy.event [iam_organisation_policy_event_list] 
  show   Get iam/policy.event [iam_organisation_policy_event_get]
```

###### h1 iam organisation policy event spec

```
h1 iam organisation policy event spec

  Print specification of context 

Synopsis

  $ h1 iam organisation policy event spec <options> 

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

###### h1 iam organisation policy event list

```
h1 iam organisation policy event list

  List iam/policy.event [iam_organisation_policy_event_list] 

Synopsis

  $ h1 iam organisation policy event list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --$limit string            $limit          
  --$skip string             $skip           
  --skeleton true,false
```

###### h1 iam organisation policy event show

```
h1 iam organisation policy event show

  Get iam/policy.event [iam_organisation_policy_event_get] 

Synopsis

  $ h1 iam organisation policy event show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --event id-or-uri          eventId         
  --skeleton true,false
```

#### h1 iam organisation role

```
h1 iam organisation role

Synopsis

  $ h1 iam organisation role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                 
  create       Create iam/role [iam_organisation_role_create] 
  list         List iam/role [iam_organisation_role_list]     
  show         Get iam/role [iam_organisation_role_get]       
  update       Update iam/role [iam_organisation_role_update] 
  delete       Delete iam/role [iam_organisation_role_delete] 
  permission   Manage permissions of the role                 
  service      Manage services of the role                    
  tag          Manage tags of the role                        
  event        Manage events of the role
```

##### h1 iam organisation role spec

```
h1 iam organisation role spec

  Print specification of context 

Synopsis

  $ h1 iam organisation role spec <options> 

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

##### h1 iam organisation role create

```
h1 iam organisation role create

  Create iam/role [iam_organisation_role_create] 

Synopsis

  $ h1 iam organisation role create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri     Organisation Id                                                               
  --x-idempotency-key string   Idempotency key                                                               
  --name string                Role name                                                                     
  --service id-or-uri          Role service. Provide ID or URI of billing/service. Defaults is               
                               5e679c282b39c4353cd86f34                                                      
  --description string         Role description                                                              
  --permission value=value     Permission collection                                                         
  --tag key=key,value=value    Tag collection                                                                
  --skeleton true,false
```

##### h1 iam organisation role list

```
h1 iam organisation role list

  List iam/role [iam_organisation_role_list] 

Synopsis

  $ h1 iam organisation role list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id     
  --name string              Filter by name      
  --tag.value string         Filter by tag.value 
  --tag.key string           Filter by tag.key   
  --skeleton true,false
```

##### h1 iam organisation role show

```
h1 iam organisation role show

  Get iam/role [iam_organisation_role_get] 

Synopsis

  $ h1 iam organisation role show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --skeleton true,false
```

##### h1 iam organisation role update

```
h1 iam organisation role update

  Update iam/role [iam_organisation_role_update] 

Synopsis

  $ h1 iam organisation role update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id                                                    
  --role id-or-uri           Role Id                                                            
  --name string              Role name. Requires permissions iam/role.name/update               
  --description string       Role description. Requires permissions iam/role.description/update 
  --skeleton true,false
```

##### h1 iam organisation role delete

```
h1 iam organisation role delete

  Delete iam/role [iam_organisation_role_delete] 

Synopsis

  $ h1 iam organisation role delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --skeleton true,false
```

##### h1 iam organisation role permission

```
h1 iam organisation role permission

Synopsis

  $ h1 iam organisation role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                       
  create   Create iam/role.permission [iam_organisation_role_permission_create] 
  list     List iam/role.permission [iam_organisation_role_permission_list]     
  show     Get iam/role.permission [iam_organisation_role_permission_get]       
  delete   Delete iam/role.permission [iam_organisation_role_permission_delete]
```

###### h1 iam organisation role permission spec

```
h1 iam organisation role permission spec

  Print specification of context 

Synopsis

  $ h1 iam organisation role permission spec <options> 

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

###### h1 iam organisation role permission create

```
h1 iam organisation role permission create

  Create iam/role.permission [iam_organisation_role_permission_create] 

Synopsis

  $ h1 iam organisation role permission create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id  
  --role id-or-uri           Role Id          
  --value string             Permission value 
  --skeleton true,false
```

###### h1 iam organisation role permission list

```
h1 iam organisation role permission list

  List iam/role.permission [iam_organisation_role_permission_list] 

Synopsis

  $ h1 iam organisation role permission list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --skeleton true,false
```

###### h1 iam organisation role permission show

```
h1 iam organisation role permission show

  Get iam/role.permission [iam_organisation_role_permission_get] 

Synopsis

  $ h1 iam organisation role permission show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --permission id-or-uri     permissionId    
  --skeleton true,false
```

###### h1 iam organisation role permission delete

```
h1 iam organisation role permission delete

  Delete iam/role.permission [iam_organisation_role_permission_delete] 

Synopsis

  $ h1 iam organisation role permission delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --permission id-or-uri     permissionId    
  --skeleton true,false
```

##### h1 iam organisation role service

```
h1 iam organisation role service

Synopsis

  $ h1 iam organisation role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                             
  list   List iam/role.service [iam_organisation_role_service_list] 
  show   Get iam/role.service [iam_organisation_role_service_get]
```

###### h1 iam organisation role service spec

```
h1 iam organisation role service spec

  Print specification of context 

Synopsis

  $ h1 iam organisation role service spec <options> 

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

###### h1 iam organisation role service list

```
h1 iam organisation role service list

  List iam/role.service [iam_organisation_role_service_list] 

Synopsis

  $ h1 iam organisation role service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --skeleton true,false
```

###### h1 iam organisation role service show

```
h1 iam organisation role service show

  Get iam/role.service [iam_organisation_role_service_get] 

Synopsis

  $ h1 iam organisation role service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --service id-or-uri        serviceId       
  --skeleton true,false
```

##### h1 iam organisation role tag

```
h1 iam organisation role tag

Synopsis

  $ h1 iam organisation role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                         
  create   Create iam/role.tag [iam_organisation_role_tag_create] 
  list     List iam/role.tag [iam_organisation_role_tag_list]     
  show     Get iam/role.tag [iam_organisation_role_tag_get]       
  delete   Delete iam/role.tag [iam_organisation_role_tag_delete]
```

###### h1 iam organisation role tag spec

```
h1 iam organisation role tag spec

  Print specification of context 

Synopsis

  $ h1 iam organisation role tag spec <options> 

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

###### h1 iam organisation role tag create

```
h1 iam organisation role tag create

  Create iam/role.tag [iam_organisation_role_tag_create] 

Synopsis

  $ h1 iam organisation role tag create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --key string               Tag key         
  --value string             Tag value       
  --skeleton true,false
```

###### h1 iam organisation role tag list

```
h1 iam organisation role tag list

  List iam/role.tag [iam_organisation_role_tag_list] 

Synopsis

  $ h1 iam organisation role tag list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --skeleton true,false
```

###### h1 iam organisation role tag show

```
h1 iam organisation role tag show

  Get iam/role.tag [iam_organisation_role_tag_get] 

Synopsis

  $ h1 iam organisation role tag show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --tag id-or-uri            tagId           
  --skeleton true,false
```

###### h1 iam organisation role tag delete

```
h1 iam organisation role tag delete

  Delete iam/role.tag [iam_organisation_role_tag_delete] 

Synopsis

  $ h1 iam organisation role tag delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --tag id-or-uri            tagId           
  --skeleton true,false
```

##### h1 iam organisation role event

```
h1 iam organisation role event

Synopsis

  $ h1 iam organisation role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                         
  list   List iam/role.event [iam_organisation_role_event_list] 
  show   Get iam/role.event [iam_organisation_role_event_get]
```

###### h1 iam organisation role event spec

```
h1 iam organisation role event spec

  Print specification of context 

Synopsis

  $ h1 iam organisation role event spec <options> 

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

###### h1 iam organisation role event list

```
h1 iam organisation role event list

  List iam/role.event [iam_organisation_role_event_list] 

Synopsis

  $ h1 iam organisation role event list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --$limit string            $limit          
  --$skip string             $skip           
  --skeleton true,false
```

###### h1 iam organisation role event show

```
h1 iam organisation role event show

  Get iam/role.event [iam_organisation_role_event_get] 

Synopsis

  $ h1 iam organisation role event show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait true,false                        In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --event id-or-uri          eventId         
  --skeleton true,false
```

