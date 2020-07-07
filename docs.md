{ name: 'print', argv: [] }
 h1-cli

```
h1-cli

Synopsis

  $ h1-cli <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  iam          Management of iam        
  provider     Management of provider   
  container    Management of container  
  database     Management of database   
  insight      Management of insight    
  website      Management of website    
  dns          Management of dns        
  storage      Management of storage    
  networking   Management of networking 
  compute      Management of compute    
  billing      Management of billing    
  vmhost       Management of vmhost
```

 h1-cli iam

```
h1-cli iam

Synopsis

  $ h1-cli iam <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec           Print specification of context 
  user           Management of user             
  project        Management of project          
  organisation   Management of organisation     
  policy         Management of policy           
  role           Management of role             
  sa             Management of sa               
  organisation   Management of organisation
```

 h1-cli iam spec

```
h1-cli iam spec

  Print specification of context 

Synopsis

  $ h1-cli iam spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam user

```
h1-cli iam user

Synopsis

  $ h1-cli iam user <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context   
  show         Returns a single user [user_get] 
  invitation   Manage invitations of the user   
  credential   Manage credentials of the user   
  service      Manage services of the user
```

 h1-cli iam user spec

```
h1-cli iam user spec

  Print specification of context 

Synopsis

  $ h1-cli iam user spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam user show

```
h1-cli iam user show

  Returns a single user [user_get] 

Synopsis

  $ h1-cli iam user show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id
```

 h1-cli iam user invitation

```
h1-cli iam user invitation

Synopsis

  $ h1-cli iam user invitation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context    
  list      undefined [user_invitation_list]  
  accept    Manage accepts of the invitation  
  decline   Manage declines of the invitation
```

 h1-cli iam user invitation spec

```
h1-cli iam user invitation spec

  Print specification of context 

Synopsis

  $ h1-cli iam user invitation spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam user invitation list

```
h1-cli iam user invitation list

  undefined [user_invitation_list] 

Synopsis

  $ h1-cli iam user invitation list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id
```

 h1-cli iam user invitation accept

```
h1-cli iam user invitation accept

Synopsis

  $ h1-cli iam user invitation accept <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context            
  create   undefined [user_invitation_accept_create]
```

 h1-cli iam user invitation accept spec

```
h1-cli iam user invitation accept spec

  Print specification of context 

Synopsis

  $ h1-cli iam user invitation accept spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam user invitation accept create

```
h1-cli iam user invitation accept create

  undefined [user_invitation_accept_create] 

Synopsis

  $ h1-cli iam user invitation accept create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id                     
  --invitation extractid   invitationId
```

 h1-cli iam user invitation decline

```
h1-cli iam user invitation decline

Synopsis

  $ h1-cli iam user invitation decline <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context             
  create   undefined [user_invitation_decline_create]
```

 h1-cli iam user invitation decline spec

```
h1-cli iam user invitation decline spec

  Print specification of context 

Synopsis

  $ h1-cli iam user invitation decline spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam user invitation decline create

```
h1-cli iam user invitation decline create

  undefined [user_invitation_decline_create] 

Synopsis

  $ h1-cli iam user invitation decline create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id                     
  --invitation extractid   invitationId
```

 h1-cli iam user credential

```
h1-cli iam user credential

Synopsis

  $ h1-cli iam user credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context     
  create   undefined [user_credential_create] 
  list     undefined [user_credential_list]
```

 h1-cli iam user credential spec

```
h1-cli iam user credential spec

  Print specification of context 

Synopsis

  $ h1-cli iam user credential spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam user credential create

```
h1-cli iam user credential create

  undefined [user_credential_create] 

Synopsis

  $ h1-cli iam user credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id                     
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

 h1-cli iam user credential list

```
h1-cli iam user credential list

  undefined [user_credential_list] 

Synopsis

  $ h1-cli iam user credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id
```

 h1-cli iam user service

```
h1-cli iam user service

Synopsis

  $ h1-cli iam user service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context 
  list   undefined [user_service_list]  
  show   undefined [user_service_get]
```

 h1-cli iam user service spec

```
h1-cli iam user service spec

  Print specification of context 

Synopsis

  $ h1-cli iam user service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam user service list

```
h1-cli iam user service list

  undefined [user_service_list] 

Synopsis

  $ h1-cli iam user service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id
```

 h1-cli iam user service show

```
h1-cli iam user service show

  undefined [user_service_get] 

Synopsis

  $ h1-cli iam user service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id                     
  --service extractid      serviceId
```

 h1-cli iam project

```
h1-cli iam project

Synopsis

  $ h1-cli iam project <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context         
  create     Create project [project_create]        
  list       List project [project_list]            
  show       Returns a single project [project_get] 
  stats      Manage stats of the project            
  limit      Manage limits of the project           
  billing    Manage billings of the project         
  payment    Manage payments of the project         
  invoice    Manage invoices of the project         
  proforma   Manage proformas of the project        
  service    Manage services of the project         
  tag        Manage tags of the project             
  event      Manage events of the project           
  policy     Manage policies of the project         
  role       Manage roles of the project            
  sa         Manage sas of the project
```

 h1-cli iam project spec

```
h1-cli iam project spec

  Print specification of context 

Synopsis

  $ h1-cli iam project spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project create

```
h1-cli iam project create

  Create project [project_create] 

Synopsis

  $ h1-cli iam project create <options> 

Options

  --help                       Show help message and exit.                                             
  --passport-file string       Passport file                                                           
  --x-idempotency-key string                                                                           
  --name string                                                                                        
  --organisation string        Provide URI of iam/organisation. Require permissions iam/project/create 
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli iam project list

```
h1-cli iam project list

  List project [project_list] 

Synopsis

  $ h1-cli iam project list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --name string            Filter by name              
  --$limit string          Filter by $limit            
  --active string          Filter by active            
  --organisation string    Filter by organisation      
  --tag string             Filter by tag
```

 h1-cli iam project show

```
h1-cli iam project show

  Returns a single project [project_get] 

Synopsis

  $ h1-cli iam project show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

 h1-cli iam project stats

```
h1-cli iam project stats

Synopsis

  $ h1-cli iam project stats <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context 
  list   undefined [project_stats_list]
```

 h1-cli iam project stats spec

```
h1-cli iam project stats spec

  Print specification of context 

Synopsis

  $ h1-cli iam project stats spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project stats list

```
h1-cli iam project stats list

  undefined [project_stats_list] 

Synopsis

  $ h1-cli iam project stats list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

 h1-cli iam project limit

```
h1-cli iam project limit

Synopsis

  $ h1-cli iam project limit <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context 
  list   undefined [project_limit_get]
```

 h1-cli iam project limit spec

```
h1-cli iam project limit spec

  Print specification of context 

Synopsis

  $ h1-cli iam project limit spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project limit list

```
h1-cli iam project limit list

  undefined [project_limit_get] 

Synopsis

  $ h1-cli iam project limit list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

 h1-cli iam project billing

```
h1-cli iam project billing

Synopsis

  $ h1-cli iam project billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context   
  list   undefined [project_billing_list]
```

 h1-cli iam project billing spec

```
h1-cli iam project billing spec

  Print specification of context 

Synopsis

  $ h1-cli iam project billing spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project billing list

```
h1-cli iam project billing list

  undefined [project_billing_list] 

Synopsis

  $ h1-cli iam project billing list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --start string           start                       
  --end string             end                         
  --resource.type string   resource.type
```

 h1-cli iam project payment

```
h1-cli iam project payment

Synopsis

  $ h1-cli iam project payment <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context   
  list   undefined [project_payment_list]
```

 h1-cli iam project payment spec

```
h1-cli iam project payment spec

  Print specification of context 

Synopsis

  $ h1-cli iam project payment spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project payment list

```
h1-cli iam project payment list

  undefined [project_payment_list] 

Synopsis

  $ h1-cli iam project payment list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

 h1-cli iam project invoice

```
h1-cli iam project invoice

Synopsis

  $ h1-cli iam project invoice <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context   
  list   undefined [project_invoice_list]
```

 h1-cli iam project invoice spec

```
h1-cli iam project invoice spec

  Print specification of context 

Synopsis

  $ h1-cli iam project invoice spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project invoice list

```
h1-cli iam project invoice list

  undefined [project_invoice_list] 

Synopsis

  $ h1-cli iam project invoice list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

 h1-cli iam project proforma

```
h1-cli iam project proforma

Synopsis

  $ h1-cli iam project proforma <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context    
  list   undefined [project_proforma_list]
```

 h1-cli iam project proforma spec

```
h1-cli iam project proforma spec

  Print specification of context 

Synopsis

  $ h1-cli iam project proforma spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project proforma list

```
h1-cli iam project proforma list

  undefined [project_proforma_list] 

Synopsis

  $ h1-cli iam project proforma list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

 h1-cli iam project service

```
h1-cli iam project service

Synopsis

  $ h1-cli iam project service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context   
  list   undefined [project_service_list] 
  show   undefined [project_service_get]
```

 h1-cli iam project service spec

```
h1-cli iam project service spec

  Print specification of context 

Synopsis

  $ h1-cli iam project service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project service list

```
h1-cli iam project service list

  undefined [project_service_list] 

Synopsis

  $ h1-cli iam project service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

 h1-cli iam project service show

```
h1-cli iam project service show

  undefined [project_service_get] 

Synopsis

  $ h1-cli iam project service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --service extractid      serviceId
```

 h1-cli iam project tag

```
h1-cli iam project tag

Synopsis

  $ h1-cli iam project tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context 
  create   undefined [project_tag_create] 
  list     undefined [project_tag_list]   
  show     undefined [project_tag_get]
```

 h1-cli iam project tag spec

```
h1-cli iam project tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam project tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project tag create

```
h1-cli iam project tag create

  undefined [project_tag_create] 

Synopsis

  $ h1-cli iam project tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli iam project tag list

```
h1-cli iam project tag list

  undefined [project_tag_list] 

Synopsis

  $ h1-cli iam project tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

 h1-cli iam project tag show

```
h1-cli iam project tag show

  undefined [project_tag_get] 

Synopsis

  $ h1-cli iam project tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --tag extractid          tagId
```

 h1-cli iam project event

```
h1-cli iam project event

Synopsis

  $ h1-cli iam project event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context 
  list   undefined [project_event_list]
```

 h1-cli iam project event spec

```
h1-cli iam project event spec

  Print specification of context 

Synopsis

  $ h1-cli iam project event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project event list

```
h1-cli iam project event list

  undefined [project_event_list] 

Synopsis

  $ h1-cli iam project event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli iam project policy

```
h1-cli iam project policy

Synopsis

  $ h1-cli iam project policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                   
  create    Create policy [iam_project_policy_create]        
  list      List policy [iam_project_policy_list]            
  show      Returns a single policy [iam_project_policy_get] 
  actor     Manage actors of the policy                      
  service   Manage services of the policy                    
  tag       Manage tags of the policy                        
  event     Manage events of the policy
```

 h1-cli iam project policy spec

```
h1-cli iam project policy spec

  Print specification of context 

Synopsis

  $ h1-cli iam project policy spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project policy create

```
h1-cli iam project policy create

  Create policy [iam_project_policy_create] 

Synopsis

  $ h1-cli iam project policy create <options> 

Options

  --help                       Show help message and exit.                               
  --passport-file string       Passport file                                             
  --project extractid          project Id                                                
  --x-idempotency-key string                                                             
  --name string                                                                          
  --service string             Provide URI of billing/service                            
  --role string                Provide URI of iam/role. Require permissions iam/role/use 
  --resource string                                                                      
  --actor nestedvalue[]        Use as value=value                                        
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli iam project policy list

```
h1-cli iam project policy list

  List policy [iam_project_policy_list] 

Synopsis

  $ h1-cli iam project policy list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli iam project policy show

```
h1-cli iam project policy show

  Returns a single policy [iam_project_policy_get] 

Synopsis

  $ h1-cli iam project policy show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

 h1-cli iam project policy actor

```
h1-cli iam project policy actor

Synopsis

  $ h1-cli iam project policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context              
  create   undefined [iam_project_policy_actor_create] 
  list     undefined [iam_project_policy_actor_list]   
  show     undefined [iam_project_policy_actor_get]
```

 h1-cli iam project policy actor spec

```
h1-cli iam project policy actor spec

  Print specification of context 

Synopsis

  $ h1-cli iam project policy actor spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project policy actor create

```
h1-cli iam project policy actor create

  undefined [iam_project_policy_actor_create] 

Synopsis

  $ h1-cli iam project policy actor create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --value string
```

 h1-cli iam project policy actor list

```
h1-cli iam project policy actor list

  undefined [iam_project_policy_actor_list] 

Synopsis

  $ h1-cli iam project policy actor list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

 h1-cli iam project policy actor show

```
h1-cli iam project policy actor show

  undefined [iam_project_policy_actor_get] 

Synopsis

  $ h1-cli iam project policy actor show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --actor extractid        actorId
```

 h1-cli iam project policy service

```
h1-cli iam project policy service

Synopsis

  $ h1-cli iam project policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context              
  list   undefined [iam_project_policy_service_list] 
  show   undefined [iam_project_policy_service_get]
```

 h1-cli iam project policy service spec

```
h1-cli iam project policy service spec

  Print specification of context 

Synopsis

  $ h1-cli iam project policy service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project policy service list

```
h1-cli iam project policy service list

  undefined [iam_project_policy_service_list] 

Synopsis

  $ h1-cli iam project policy service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

 h1-cli iam project policy service show

```
h1-cli iam project policy service show

  undefined [iam_project_policy_service_get] 

Synopsis

  $ h1-cli iam project policy service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --service extractid      serviceId
```

 h1-cli iam project policy tag

```
h1-cli iam project policy tag

Synopsis

  $ h1-cli iam project policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context            
  create   undefined [iam_project_policy_tag_create] 
  list     undefined [iam_project_policy_tag_list]   
  show     undefined [iam_project_policy_tag_get]
```

 h1-cli iam project policy tag spec

```
h1-cli iam project policy tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam project policy tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project policy tag create

```
h1-cli iam project policy tag create

  undefined [iam_project_policy_tag_create] 

Synopsis

  $ h1-cli iam project policy tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli iam project policy tag list

```
h1-cli iam project policy tag list

  undefined [iam_project_policy_tag_list] 

Synopsis

  $ h1-cli iam project policy tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

 h1-cli iam project policy tag show

```
h1-cli iam project policy tag show

  undefined [iam_project_policy_tag_get] 

Synopsis

  $ h1-cli iam project policy tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --tag extractid          tagId
```

 h1-cli iam project policy event

```
h1-cli iam project policy event

Synopsis

  $ h1-cli iam project policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [iam_project_policy_event_list]
```

 h1-cli iam project policy event spec

```
h1-cli iam project policy event spec

  Print specification of context 

Synopsis

  $ h1-cli iam project policy event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project policy event list

```
h1-cli iam project policy event list

  undefined [iam_project_policy_event_list] 

Synopsis

  $ h1-cli iam project policy event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli iam project role

```
h1-cli iam project role

Synopsis

  $ h1-cli iam project role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context               
  create       Create role [iam_project_role_create]        
  list         List role [iam_project_role_list]            
  show         Returns a single role [iam_project_role_get] 
  permission   Manage permissions of the role               
  service      Manage services of the role                  
  tag          Manage tags of the role                      
  event        Manage events of the role
```

 h1-cli iam project role spec

```
h1-cli iam project role spec

  Print specification of context 

Synopsis

  $ h1-cli iam project role spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project role create

```
h1-cli iam project role create

  Create role [iam_project_role_create] 

Synopsis

  $ h1-cli iam project role create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --description string                                        
  --permission nestedvalue[]   Use as value=value             
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli iam project role list

```
h1-cli iam project role list

  List role [iam_project_role_list] 

Synopsis

  $ h1-cli iam project role list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli iam project role show

```
h1-cli iam project role show

  Returns a single role [iam_project_role_get] 

Synopsis

  $ h1-cli iam project role show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

 h1-cli iam project role permission

```
h1-cli iam project role permission

Synopsis

  $ h1-cli iam project role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [iam_project_role_permission_create] 
  list     undefined [iam_project_role_permission_list]   
  show     undefined [iam_project_role_permission_get]
```

 h1-cli iam project role permission spec

```
h1-cli iam project role permission spec

  Print specification of context 

Synopsis

  $ h1-cli iam project role permission spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project role permission create

```
h1-cli iam project role permission create

  undefined [iam_project_role_permission_create] 

Synopsis

  $ h1-cli iam project role permission create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --value string
```

 h1-cli iam project role permission list

```
h1-cli iam project role permission list

  undefined [iam_project_role_permission_list] 

Synopsis

  $ h1-cli iam project role permission list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

 h1-cli iam project role permission show

```
h1-cli iam project role permission show

  undefined [iam_project_role_permission_get] 

Synopsis

  $ h1-cli iam project role permission show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --permission extractid   permissionId
```

 h1-cli iam project role service

```
h1-cli iam project role service

Synopsis

  $ h1-cli iam project role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [iam_project_role_service_list] 
  show   undefined [iam_project_role_service_get]
```

 h1-cli iam project role service spec

```
h1-cli iam project role service spec

  Print specification of context 

Synopsis

  $ h1-cli iam project role service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project role service list

```
h1-cli iam project role service list

  undefined [iam_project_role_service_list] 

Synopsis

  $ h1-cli iam project role service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

 h1-cli iam project role service show

```
h1-cli iam project role service show

  undefined [iam_project_role_service_get] 

Synopsis

  $ h1-cli iam project role service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --service extractid      serviceId
```

 h1-cli iam project role tag

```
h1-cli iam project role tag

Synopsis

  $ h1-cli iam project role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context          
  create   undefined [iam_project_role_tag_create] 
  list     undefined [iam_project_role_tag_list]   
  show     undefined [iam_project_role_tag_get]
```

 h1-cli iam project role tag spec

```
h1-cli iam project role tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam project role tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project role tag create

```
h1-cli iam project role tag create

  undefined [iam_project_role_tag_create] 

Synopsis

  $ h1-cli iam project role tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli iam project role tag list

```
h1-cli iam project role tag list

  undefined [iam_project_role_tag_list] 

Synopsis

  $ h1-cli iam project role tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

 h1-cli iam project role tag show

```
h1-cli iam project role tag show

  undefined [iam_project_role_tag_get] 

Synopsis

  $ h1-cli iam project role tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --tag extractid          tagId
```

 h1-cli iam project role event

```
h1-cli iam project role event

Synopsis

  $ h1-cli iam project role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context          
  list   undefined [iam_project_role_event_list]
```

 h1-cli iam project role event spec

```
h1-cli iam project role event spec

  Print specification of context 

Synopsis

  $ h1-cli iam project role event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project role event list

```
h1-cli iam project role event list

  undefined [iam_project_role_event_list] 

Synopsis

  $ h1-cli iam project role event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli iam project sa

```
h1-cli iam project sa

Synopsis

  $ h1-cli iam project sa <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context           
  create       Create sa [iam_project_sa_create]        
  list         List sa [iam_project_sa_list]            
  show         Returns a single sa [iam_project_sa_get] 
  credential   Manage credentials of the sa             
  service      Manage services of the sa                
  tag          Manage tags of the sa                    
  event        Manage events of the sa
```

 h1-cli iam project sa spec

```
h1-cli iam project sa spec

  Print specification of context 

Synopsis

  $ h1-cli iam project sa spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project sa create

```
h1-cli iam project sa create

  Create sa [iam_project_sa_create] 

Synopsis

  $ h1-cli iam project sa create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli iam project sa list

```
h1-cli iam project sa list

  List sa [iam_project_sa_list] 

Synopsis

  $ h1-cli iam project sa list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli iam project sa show

```
h1-cli iam project sa show

  Returns a single sa [iam_project_sa_get] 

Synopsis

  $ h1-cli iam project sa show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

 h1-cli iam project sa credential

```
h1-cli iam project sa credential

Synopsis

  $ h1-cli iam project sa credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [iam_project_sa_credential_create] 
  list     undefined [iam_project_sa_credential_list]
```

 h1-cli iam project sa credential spec

```
h1-cli iam project sa credential spec

  Print specification of context 

Synopsis

  $ h1-cli iam project sa credential spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project sa credential create

```
h1-cli iam project sa credential create

  undefined [iam_project_sa_credential_create] 

Synopsis

  $ h1-cli iam project sa credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

 h1-cli iam project sa credential list

```
h1-cli iam project sa credential list

  undefined [iam_project_sa_credential_list] 

Synopsis

  $ h1-cli iam project sa credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

 h1-cli iam project sa service

```
h1-cli iam project sa service

Synopsis

  $ h1-cli iam project sa service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context          
  list   undefined [iam_project_sa_service_list] 
  show   undefined [iam_project_sa_service_get]
```

 h1-cli iam project sa service spec

```
h1-cli iam project sa service spec

  Print specification of context 

Synopsis

  $ h1-cli iam project sa service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project sa service list

```
h1-cli iam project sa service list

  undefined [iam_project_sa_service_list] 

Synopsis

  $ h1-cli iam project sa service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

 h1-cli iam project sa service show

```
h1-cli iam project sa service show

  undefined [iam_project_sa_service_get] 

Synopsis

  $ h1-cli iam project sa service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --service extractid      serviceId
```

 h1-cli iam project sa tag

```
h1-cli iam project sa tag

Synopsis

  $ h1-cli iam project sa tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context        
  create   undefined [iam_project_sa_tag_create] 
  list     undefined [iam_project_sa_tag_list]   
  show     undefined [iam_project_sa_tag_get]
```

 h1-cli iam project sa tag spec

```
h1-cli iam project sa tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam project sa tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project sa tag create

```
h1-cli iam project sa tag create

  undefined [iam_project_sa_tag_create] 

Synopsis

  $ h1-cli iam project sa tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli iam project sa tag list

```
h1-cli iam project sa tag list

  undefined [iam_project_sa_tag_list] 

Synopsis

  $ h1-cli iam project sa tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

 h1-cli iam project sa tag show

```
h1-cli iam project sa tag show

  undefined [iam_project_sa_tag_get] 

Synopsis

  $ h1-cli iam project sa tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --tag extractid          tagId
```

 h1-cli iam project sa event

```
h1-cli iam project sa event

Synopsis

  $ h1-cli iam project sa event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context        
  list   undefined [iam_project_sa_event_list]
```

 h1-cli iam project sa event spec

```
h1-cli iam project sa event spec

  Print specification of context 

Synopsis

  $ h1-cli iam project sa event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam project sa event list

```
h1-cli iam project sa event list

  undefined [iam_project_sa_event_list] 

Synopsis

  $ h1-cli iam project sa event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli iam organisation

```
h1-cli iam organisation

Synopsis

  $ h1-cli iam organisation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec              Print specification of context                        
  create            Create organisation [organisation_create]             
  list              List organisation [organisation_list]                 
  show              Returns a single organisation [organisation_get]      
  transfer_accept   Action transfer_accept [organisation_transfer_accept] 
  payment_assign    Action payment_assign [organisation_payment_assign]   
  billing           Manage billings of the organisation                   
  payment           Manage payments of the organisation                   
  invoice           Manage invoices of the organisation                   
  proforma          Manage proformas of the organisation                  
  event             Manage events of the organisation                     
  policy            Manage policies of the organisation                   
  role              Manage roles of the organisation
```

 h1-cli iam organisation spec

```
h1-cli iam organisation spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation create

```
h1-cli iam organisation create

  Create organisation [organisation_create] 

Synopsis

  $ h1-cli iam organisation create <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --x-idempotency-key string                               
  --name string                                            
  --billing string
```

 h1-cli iam organisation list

```
h1-cli iam organisation list

  List organisation [organisation_list] 

Synopsis

  $ h1-cli iam organisation list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --name string              Filter by name              
  --billing.company string   Filter by billing.company   
  --$limit string            Filter by $limit            
  --active string            Filter by active
```

 h1-cli iam organisation show

```
h1-cli iam organisation show

  Returns a single organisation [organisation_get] 

Synopsis

  $ h1-cli iam organisation show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id
```

 h1-cli iam organisation transfer_accept

```
h1-cli iam organisation transfer_accept

  Action transfer_accept [organisation_transfer_accept] 

Synopsis

  $ h1-cli iam organisation transfer_accept <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --organisation extractid     organisation Id             
  --x-idempotency-key string                               
  --payment string                                         
  --project string
```

 h1-cli iam organisation payment_assign

```
h1-cli iam organisation payment_assign

  Action payment_assign [organisation_payment_assign] 

Synopsis

  $ h1-cli iam organisation payment_assign <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --organisation extractid     organisation Id             
  --x-idempotency-key string                               
  --payment string                                         
  --project string
```

 h1-cli iam organisation billing

```
h1-cli iam organisation billing

Synopsis

  $ h1-cli iam organisation billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context        
  list   undefined [organisation_billing_list]
```

 h1-cli iam organisation billing spec

```
h1-cli iam organisation billing spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation billing spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation billing list

```
h1-cli iam organisation billing list

  undefined [organisation_billing_list] 

Synopsis

  $ h1-cli iam organisation billing list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --start string             start                       
  --end string               end                         
  --resource.type string     resource.type
```

 h1-cli iam organisation payment

```
h1-cli iam organisation payment

Synopsis

  $ h1-cli iam organisation payment <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context        
  list   undefined [organisation_payment_list]
```

 h1-cli iam organisation payment spec

```
h1-cli iam organisation payment spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation payment spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation payment list

```
h1-cli iam organisation payment list

  undefined [organisation_payment_list] 

Synopsis

  $ h1-cli iam organisation payment list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id
```

 h1-cli iam organisation invoice

```
h1-cli iam organisation invoice

Synopsis

  $ h1-cli iam organisation invoice <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                           
  list       undefined [organisation_invoice_list]                    
  show       undefined [organisation_invoice_get]                     
  download   undefined [organisation_invoice_actions_download_create]
```

 h1-cli iam organisation invoice spec

```
h1-cli iam organisation invoice spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation invoice spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation invoice list

```
h1-cli iam organisation invoice list

  undefined [organisation_invoice_list] 

Synopsis

  $ h1-cli iam organisation invoice list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id
```

 h1-cli iam organisation invoice show

```
h1-cli iam organisation invoice show

  undefined [organisation_invoice_get] 

Synopsis

  $ h1-cli iam organisation invoice show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --invoice extractid        invoiceId
```

 h1-cli iam organisation invoice download

```
h1-cli iam organisation invoice download

  undefined [organisation_invoice_actions_download_create] 

Synopsis

  $ h1-cli iam organisation invoice download <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --invoice extractid        invoiceId
```

 h1-cli iam organisation proforma

```
h1-cli iam organisation proforma

Synopsis

  $ h1-cli iam organisation proforma <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                            
  create     undefined [organisation_proforma_create]                  
  list       undefined [organisation_proforma_list]                    
  show       undefined [organisation_proforma_get]                     
  download   undefined [organisation_proforma_actions_download_create]
```

 h1-cli iam organisation proforma spec

```
h1-cli iam organisation proforma spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation proforma spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation proforma create

```
h1-cli iam organisation proforma create

  undefined [organisation_proforma_create] 

Synopsis

  $ h1-cli iam organisation proforma create <options> 

Options

  --help                     Show help message and exit.                                     
  --passport-file string     Passport file                                                   
  --organisation extractid   organisation Id                                                 
  --amount string                                                                            
  --project string           Provide URI of iam/project. Require permissions iam/project/get
```

 h1-cli iam organisation proforma list

```
h1-cli iam organisation proforma list

  undefined [organisation_proforma_list] 

Synopsis

  $ h1-cli iam organisation proforma list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id
```

 h1-cli iam organisation proforma show

```
h1-cli iam organisation proforma show

  undefined [organisation_proforma_get] 

Synopsis

  $ h1-cli iam organisation proforma show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --proforma extractid       proformaId
```

 h1-cli iam organisation proforma download

```
h1-cli iam organisation proforma download

  undefined [organisation_proforma_actions_download_create] 

Synopsis

  $ h1-cli iam organisation proforma download <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --proforma extractid       proformaId
```

 h1-cli iam organisation event

```
h1-cli iam organisation event

Synopsis

  $ h1-cli iam organisation event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context      
  list   undefined [organisation_event_list]
```

 h1-cli iam organisation event spec

```
h1-cli iam organisation event spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation event list

```
h1-cli iam organisation event list

  undefined [organisation_event_list] 

Synopsis

  $ h1-cli iam organisation event list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --$limit string            $limit                      
  --$skip string             $skip
```

 h1-cli iam organisation policy

```
h1-cli iam organisation policy

Synopsis

  $ h1-cli iam organisation policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                        
  create    Create policy [iam_organisation_policy_create]        
  list      List policy [iam_organisation_policy_list]            
  show      Returns a single policy [iam_organisation_policy_get] 
  actor     Manage actors of the policy                           
  service   Manage services of the policy                         
  tag       Manage tags of the policy                             
  event     Manage events of the policy
```

 h1-cli iam organisation policy spec

```
h1-cli iam organisation policy spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation policy create

```
h1-cli iam organisation policy create

  Create policy [iam_organisation_policy_create] 

Synopsis

  $ h1-cli iam organisation policy create <options> 

Options

  --help                       Show help message and exit.                               
  --passport-file string       Passport file                                             
  --organisation extractid     organisation Id                                           
  --x-idempotency-key string                                                             
  --name string                                                                          
  --service string             Provide URI of billing/service                            
  --role string                Provide URI of iam/role. Require permissions iam/role/use 
  --resource string                                                                      
  --actor nestedvalue[]        Use as value=value                                        
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli iam organisation policy list

```
h1-cli iam organisation policy list

  List policy [iam_organisation_policy_list] 

Synopsis

  $ h1-cli iam organisation policy list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --name string              Filter by name              
  --tag string               Filter by tag
```

 h1-cli iam organisation policy show

```
h1-cli iam organisation policy show

  Returns a single policy [iam_organisation_policy_get] 

Synopsis

  $ h1-cli iam organisation policy show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

 h1-cli iam organisation policy actor

```
h1-cli iam organisation policy actor

Synopsis

  $ h1-cli iam organisation policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [iam_organisation_policy_actor_create] 
  list     undefined [iam_organisation_policy_actor_list]   
  show     undefined [iam_organisation_policy_actor_get]
```

 h1-cli iam organisation policy actor spec

```
h1-cli iam organisation policy actor spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy actor spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation policy actor create

```
h1-cli iam organisation policy actor create

  undefined [iam_organisation_policy_actor_create] 

Synopsis

  $ h1-cli iam organisation policy actor create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --value string
```

 h1-cli iam organisation policy actor list

```
h1-cli iam organisation policy actor list

  undefined [iam_organisation_policy_actor_list] 

Synopsis

  $ h1-cli iam organisation policy actor list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

 h1-cli iam organisation policy actor show

```
h1-cli iam organisation policy actor show

  undefined [iam_organisation_policy_actor_get] 

Synopsis

  $ h1-cli iam organisation policy actor show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --actor extractid          actorId
```

 h1-cli iam organisation policy service

```
h1-cli iam organisation policy service

Synopsis

  $ h1-cli iam organisation policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [iam_organisation_policy_service_list] 
  show   undefined [iam_organisation_policy_service_get]
```

 h1-cli iam organisation policy service spec

```
h1-cli iam organisation policy service spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation policy service list

```
h1-cli iam organisation policy service list

  undefined [iam_organisation_policy_service_list] 

Synopsis

  $ h1-cli iam organisation policy service list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

 h1-cli iam organisation policy service show

```
h1-cli iam organisation policy service show

  undefined [iam_organisation_policy_service_get] 

Synopsis

  $ h1-cli iam organisation policy service show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --service extractid        serviceId
```

 h1-cli iam organisation policy tag

```
h1-cli iam organisation policy tag

Synopsis

  $ h1-cli iam organisation policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [iam_organisation_policy_tag_create] 
  list     undefined [iam_organisation_policy_tag_list]   
  show     undefined [iam_organisation_policy_tag_get]
```

 h1-cli iam organisation policy tag spec

```
h1-cli iam organisation policy tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation policy tag create

```
h1-cli iam organisation policy tag create

  undefined [iam_organisation_policy_tag_create] 

Synopsis

  $ h1-cli iam organisation policy tag create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --id string                                            
  --value string                                         
  --name string
```

 h1-cli iam organisation policy tag list

```
h1-cli iam organisation policy tag list

  undefined [iam_organisation_policy_tag_list] 

Synopsis

  $ h1-cli iam organisation policy tag list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

 h1-cli iam organisation policy tag show

```
h1-cli iam organisation policy tag show

  undefined [iam_organisation_policy_tag_get] 

Synopsis

  $ h1-cli iam organisation policy tag show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --tag extractid            tagId
```

 h1-cli iam organisation policy event

```
h1-cli iam organisation policy event

Synopsis

  $ h1-cli iam organisation policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [iam_organisation_policy_event_list]
```

 h1-cli iam organisation policy event spec

```
h1-cli iam organisation policy event spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation policy event list

```
h1-cli iam organisation policy event list

  undefined [iam_organisation_policy_event_list] 

Synopsis

  $ h1-cli iam organisation policy event list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --$limit string            $limit                      
  --$skip string             $skip
```

 h1-cli iam organisation role

```
h1-cli iam organisation role

Synopsis

  $ h1-cli iam organisation role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                    
  create       Create role [iam_organisation_role_create]        
  list         List role [iam_organisation_role_list]            
  show         Returns a single role [iam_organisation_role_get] 
  permission   Manage permissions of the role                    
  service      Manage services of the role                       
  tag          Manage tags of the role                           
  event        Manage events of the role
```

 h1-cli iam organisation role spec

```
h1-cli iam organisation role spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation role create

```
h1-cli iam organisation role create

  Create role [iam_organisation_role_create] 

Synopsis

  $ h1-cli iam organisation role create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --organisation extractid     organisation Id                
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --description string                                        
  --permission nestedvalue[]   Use as value=value             
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli iam organisation role list

```
h1-cli iam organisation role list

  List role [iam_organisation_role_list] 

Synopsis

  $ h1-cli iam organisation role list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --name string              Filter by name              
  --tag string               Filter by tag
```

 h1-cli iam organisation role show

```
h1-cli iam organisation role show

  Returns a single role [iam_organisation_role_get] 

Synopsis

  $ h1-cli iam organisation role show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

 h1-cli iam organisation role permission

```
h1-cli iam organisation role permission

Synopsis

  $ h1-cli iam organisation role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                      
  create   undefined [iam_organisation_role_permission_create] 
  list     undefined [iam_organisation_role_permission_list]   
  show     undefined [iam_organisation_role_permission_get]
```

 h1-cli iam organisation role permission spec

```
h1-cli iam organisation role permission spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role permission spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation role permission create

```
h1-cli iam organisation role permission create

  undefined [iam_organisation_role_permission_create] 

Synopsis

  $ h1-cli iam organisation role permission create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --value string
```

 h1-cli iam organisation role permission list

```
h1-cli iam organisation role permission list

  undefined [iam_organisation_role_permission_list] 

Synopsis

  $ h1-cli iam organisation role permission list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

 h1-cli iam organisation role permission show

```
h1-cli iam organisation role permission show

  undefined [iam_organisation_role_permission_get] 

Synopsis

  $ h1-cli iam organisation role permission show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --permission extractid     permissionId
```

 h1-cli iam organisation role service

```
h1-cli iam organisation role service

Synopsis

  $ h1-cli iam organisation role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [iam_organisation_role_service_list] 
  show   undefined [iam_organisation_role_service_get]
```

 h1-cli iam organisation role service spec

```
h1-cli iam organisation role service spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation role service list

```
h1-cli iam organisation role service list

  undefined [iam_organisation_role_service_list] 

Synopsis

  $ h1-cli iam organisation role service list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

 h1-cli iam organisation role service show

```
h1-cli iam organisation role service show

  undefined [iam_organisation_role_service_get] 

Synopsis

  $ h1-cli iam organisation role service show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --service extractid        serviceId
```

 h1-cli iam organisation role tag

```
h1-cli iam organisation role tag

Synopsis

  $ h1-cli iam organisation role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [iam_organisation_role_tag_create] 
  list     undefined [iam_organisation_role_tag_list]   
  show     undefined [iam_organisation_role_tag_get]
```

 h1-cli iam organisation role tag spec

```
h1-cli iam organisation role tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation role tag create

```
h1-cli iam organisation role tag create

  undefined [iam_organisation_role_tag_create] 

Synopsis

  $ h1-cli iam organisation role tag create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --id string                                            
  --value string                                         
  --name string
```

 h1-cli iam organisation role tag list

```
h1-cli iam organisation role tag list

  undefined [iam_organisation_role_tag_list] 

Synopsis

  $ h1-cli iam organisation role tag list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

 h1-cli iam organisation role tag show

```
h1-cli iam organisation role tag show

  undefined [iam_organisation_role_tag_get] 

Synopsis

  $ h1-cli iam organisation role tag show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --tag extractid            tagId
```

 h1-cli iam organisation role event

```
h1-cli iam organisation role event

Synopsis

  $ h1-cli iam organisation role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [iam_organisation_role_event_list]
```

 h1-cli iam organisation role event spec

```
h1-cli iam organisation role event spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation role event list

```
h1-cli iam organisation role event list

  undefined [iam_organisation_role_event_list] 

Synopsis

  $ h1-cli iam organisation role event list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --$limit string            $limit                      
  --$skip string             $skip
```

 h1-cli iam policy

```
h1-cli iam policy

Synopsis

  $ h1-cli iam policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                   
  create    Create policy [iam_project_policy_create]        
  list      List policy [iam_project_policy_list]            
  show      Returns a single policy [iam_project_policy_get] 
  actor     Manage actors of the policy                      
  service   Manage services of the policy                    
  tag       Manage tags of the policy                        
  event     Manage events of the policy
```

 h1-cli iam policy spec

```
h1-cli iam policy spec

  Print specification of context 

Synopsis

  $ h1-cli iam policy spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam policy create

```
h1-cli iam policy create

  Create policy [iam_project_policy_create] 

Synopsis

  $ h1-cli iam policy create <options> 

Options

  --help                       Show help message and exit.                               
  --passport-file string       Passport file                                             
  --project extractid          project Id                                                
  --x-idempotency-key string                                                             
  --name string                                                                          
  --service string             Provide URI of billing/service                            
  --role string                Provide URI of iam/role. Require permissions iam/role/use 
  --resource string                                                                      
  --actor nestedvalue[]        Use as value=value                                        
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli iam policy list

```
h1-cli iam policy list

  List policy [iam_project_policy_list] 

Synopsis

  $ h1-cli iam policy list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli iam policy show

```
h1-cli iam policy show

  Returns a single policy [iam_project_policy_get] 

Synopsis

  $ h1-cli iam policy show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

 h1-cli iam policy actor

```
h1-cli iam policy actor

Synopsis

  $ h1-cli iam policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context              
  create   undefined [iam_project_policy_actor_create] 
  list     undefined [iam_project_policy_actor_list]   
  show     undefined [iam_project_policy_actor_get]
```

 h1-cli iam policy actor spec

```
h1-cli iam policy actor spec

  Print specification of context 

Synopsis

  $ h1-cli iam policy actor spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam policy actor create

```
h1-cli iam policy actor create

  undefined [iam_project_policy_actor_create] 

Synopsis

  $ h1-cli iam policy actor create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --value string
```

 h1-cli iam policy actor list

```
h1-cli iam policy actor list

  undefined [iam_project_policy_actor_list] 

Synopsis

  $ h1-cli iam policy actor list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

 h1-cli iam policy actor show

```
h1-cli iam policy actor show

  undefined [iam_project_policy_actor_get] 

Synopsis

  $ h1-cli iam policy actor show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --actor extractid        actorId
```

 h1-cli iam policy service

```
h1-cli iam policy service

Synopsis

  $ h1-cli iam policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context              
  list   undefined [iam_project_policy_service_list] 
  show   undefined [iam_project_policy_service_get]
```

 h1-cli iam policy service spec

```
h1-cli iam policy service spec

  Print specification of context 

Synopsis

  $ h1-cli iam policy service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam policy service list

```
h1-cli iam policy service list

  undefined [iam_project_policy_service_list] 

Synopsis

  $ h1-cli iam policy service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

 h1-cli iam policy service show

```
h1-cli iam policy service show

  undefined [iam_project_policy_service_get] 

Synopsis

  $ h1-cli iam policy service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --service extractid      serviceId
```

 h1-cli iam policy tag

```
h1-cli iam policy tag

Synopsis

  $ h1-cli iam policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context            
  create   undefined [iam_project_policy_tag_create] 
  list     undefined [iam_project_policy_tag_list]   
  show     undefined [iam_project_policy_tag_get]
```

 h1-cli iam policy tag spec

```
h1-cli iam policy tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam policy tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam policy tag create

```
h1-cli iam policy tag create

  undefined [iam_project_policy_tag_create] 

Synopsis

  $ h1-cli iam policy tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli iam policy tag list

```
h1-cli iam policy tag list

  undefined [iam_project_policy_tag_list] 

Synopsis

  $ h1-cli iam policy tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

 h1-cli iam policy tag show

```
h1-cli iam policy tag show

  undefined [iam_project_policy_tag_get] 

Synopsis

  $ h1-cli iam policy tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --tag extractid          tagId
```

 h1-cli iam policy event

```
h1-cli iam policy event

Synopsis

  $ h1-cli iam policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [iam_project_policy_event_list]
```

 h1-cli iam policy event spec

```
h1-cli iam policy event spec

  Print specification of context 

Synopsis

  $ h1-cli iam policy event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam policy event list

```
h1-cli iam policy event list

  undefined [iam_project_policy_event_list] 

Synopsis

  $ h1-cli iam policy event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli iam role

```
h1-cli iam role

Synopsis

  $ h1-cli iam role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context               
  create       Create role [iam_project_role_create]        
  list         List role [iam_project_role_list]            
  show         Returns a single role [iam_project_role_get] 
  permission   Manage permissions of the role               
  service      Manage services of the role                  
  tag          Manage tags of the role                      
  event        Manage events of the role
```

 h1-cli iam role spec

```
h1-cli iam role spec

  Print specification of context 

Synopsis

  $ h1-cli iam role spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam role create

```
h1-cli iam role create

  Create role [iam_project_role_create] 

Synopsis

  $ h1-cli iam role create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --description string                                        
  --permission nestedvalue[]   Use as value=value             
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli iam role list

```
h1-cli iam role list

  List role [iam_project_role_list] 

Synopsis

  $ h1-cli iam role list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli iam role show

```
h1-cli iam role show

  Returns a single role [iam_project_role_get] 

Synopsis

  $ h1-cli iam role show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

 h1-cli iam role permission

```
h1-cli iam role permission

Synopsis

  $ h1-cli iam role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [iam_project_role_permission_create] 
  list     undefined [iam_project_role_permission_list]   
  show     undefined [iam_project_role_permission_get]
```

 h1-cli iam role permission spec

```
h1-cli iam role permission spec

  Print specification of context 

Synopsis

  $ h1-cli iam role permission spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam role permission create

```
h1-cli iam role permission create

  undefined [iam_project_role_permission_create] 

Synopsis

  $ h1-cli iam role permission create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --value string
```

 h1-cli iam role permission list

```
h1-cli iam role permission list

  undefined [iam_project_role_permission_list] 

Synopsis

  $ h1-cli iam role permission list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

 h1-cli iam role permission show

```
h1-cli iam role permission show

  undefined [iam_project_role_permission_get] 

Synopsis

  $ h1-cli iam role permission show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --permission extractid   permissionId
```

 h1-cli iam role service

```
h1-cli iam role service

Synopsis

  $ h1-cli iam role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [iam_project_role_service_list] 
  show   undefined [iam_project_role_service_get]
```

 h1-cli iam role service spec

```
h1-cli iam role service spec

  Print specification of context 

Synopsis

  $ h1-cli iam role service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam role service list

```
h1-cli iam role service list

  undefined [iam_project_role_service_list] 

Synopsis

  $ h1-cli iam role service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

 h1-cli iam role service show

```
h1-cli iam role service show

  undefined [iam_project_role_service_get] 

Synopsis

  $ h1-cli iam role service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --service extractid      serviceId
```

 h1-cli iam role tag

```
h1-cli iam role tag

Synopsis

  $ h1-cli iam role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context          
  create   undefined [iam_project_role_tag_create] 
  list     undefined [iam_project_role_tag_list]   
  show     undefined [iam_project_role_tag_get]
```

 h1-cli iam role tag spec

```
h1-cli iam role tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam role tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam role tag create

```
h1-cli iam role tag create

  undefined [iam_project_role_tag_create] 

Synopsis

  $ h1-cli iam role tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli iam role tag list

```
h1-cli iam role tag list

  undefined [iam_project_role_tag_list] 

Synopsis

  $ h1-cli iam role tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

 h1-cli iam role tag show

```
h1-cli iam role tag show

  undefined [iam_project_role_tag_get] 

Synopsis

  $ h1-cli iam role tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --tag extractid          tagId
```

 h1-cli iam role event

```
h1-cli iam role event

Synopsis

  $ h1-cli iam role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context          
  list   undefined [iam_project_role_event_list]
```

 h1-cli iam role event spec

```
h1-cli iam role event spec

  Print specification of context 

Synopsis

  $ h1-cli iam role event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam role event list

```
h1-cli iam role event list

  undefined [iam_project_role_event_list] 

Synopsis

  $ h1-cli iam role event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli iam sa

```
h1-cli iam sa

Synopsis

  $ h1-cli iam sa <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context           
  create       Create sa [iam_project_sa_create]        
  list         List sa [iam_project_sa_list]            
  show         Returns a single sa [iam_project_sa_get] 
  credential   Manage credentials of the sa             
  service      Manage services of the sa                
  tag          Manage tags of the sa                    
  event        Manage events of the sa
```

 h1-cli iam sa spec

```
h1-cli iam sa spec

  Print specification of context 

Synopsis

  $ h1-cli iam sa spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam sa create

```
h1-cli iam sa create

  Create sa [iam_project_sa_create] 

Synopsis

  $ h1-cli iam sa create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli iam sa list

```
h1-cli iam sa list

  List sa [iam_project_sa_list] 

Synopsis

  $ h1-cli iam sa list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli iam sa show

```
h1-cli iam sa show

  Returns a single sa [iam_project_sa_get] 

Synopsis

  $ h1-cli iam sa show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

 h1-cli iam sa credential

```
h1-cli iam sa credential

Synopsis

  $ h1-cli iam sa credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [iam_project_sa_credential_create] 
  list     undefined [iam_project_sa_credential_list]
```

 h1-cli iam sa credential spec

```
h1-cli iam sa credential spec

  Print specification of context 

Synopsis

  $ h1-cli iam sa credential spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam sa credential create

```
h1-cli iam sa credential create

  undefined [iam_project_sa_credential_create] 

Synopsis

  $ h1-cli iam sa credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

 h1-cli iam sa credential list

```
h1-cli iam sa credential list

  undefined [iam_project_sa_credential_list] 

Synopsis

  $ h1-cli iam sa credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

 h1-cli iam sa service

```
h1-cli iam sa service

Synopsis

  $ h1-cli iam sa service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context          
  list   undefined [iam_project_sa_service_list] 
  show   undefined [iam_project_sa_service_get]
```

 h1-cli iam sa service spec

```
h1-cli iam sa service spec

  Print specification of context 

Synopsis

  $ h1-cli iam sa service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam sa service list

```
h1-cli iam sa service list

  undefined [iam_project_sa_service_list] 

Synopsis

  $ h1-cli iam sa service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

 h1-cli iam sa service show

```
h1-cli iam sa service show

  undefined [iam_project_sa_service_get] 

Synopsis

  $ h1-cli iam sa service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --service extractid      serviceId
```

 h1-cli iam sa tag

```
h1-cli iam sa tag

Synopsis

  $ h1-cli iam sa tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context        
  create   undefined [iam_project_sa_tag_create] 
  list     undefined [iam_project_sa_tag_list]   
  show     undefined [iam_project_sa_tag_get]
```

 h1-cli iam sa tag spec

```
h1-cli iam sa tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam sa tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam sa tag create

```
h1-cli iam sa tag create

  undefined [iam_project_sa_tag_create] 

Synopsis

  $ h1-cli iam sa tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli iam sa tag list

```
h1-cli iam sa tag list

  undefined [iam_project_sa_tag_list] 

Synopsis

  $ h1-cli iam sa tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

 h1-cli iam sa tag show

```
h1-cli iam sa tag show

  undefined [iam_project_sa_tag_get] 

Synopsis

  $ h1-cli iam sa tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --tag extractid          tagId
```

 h1-cli iam sa event

```
h1-cli iam sa event

Synopsis

  $ h1-cli iam sa event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context        
  list   undefined [iam_project_sa_event_list]
```

 h1-cli iam sa event spec

```
h1-cli iam sa event spec

  Print specification of context 

Synopsis

  $ h1-cli iam sa event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam sa event list

```
h1-cli iam sa event list

  undefined [iam_project_sa_event_list] 

Synopsis

  $ h1-cli iam sa event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli iam organisation

```
h1-cli iam organisation

Synopsis

  $ h1-cli iam organisation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  policy   Management of policy 
  role     Management of role
```

 h1-cli iam organisation policy

```
h1-cli iam organisation policy

Synopsis

  $ h1-cli iam organisation policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                        
  create    Create policy [iam_organisation_policy_create]        
  list      List policy [iam_organisation_policy_list]            
  show      Returns a single policy [iam_organisation_policy_get] 
  actor     Manage actors of the policy                           
  service   Manage services of the policy                         
  tag       Manage tags of the policy                             
  event     Manage events of the policy
```

 h1-cli iam organisation policy spec

```
h1-cli iam organisation policy spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation policy create

```
h1-cli iam organisation policy create

  Create policy [iam_organisation_policy_create] 

Synopsis

  $ h1-cli iam organisation policy create <options> 

Options

  --help                       Show help message and exit.                               
  --passport-file string       Passport file                                             
  --organisation extractid     organisation Id                                           
  --x-idempotency-key string                                                             
  --name string                                                                          
  --service string             Provide URI of billing/service                            
  --role string                Provide URI of iam/role. Require permissions iam/role/use 
  --resource string                                                                      
  --actor nestedvalue[]        Use as value=value                                        
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli iam organisation policy list

```
h1-cli iam organisation policy list

  List policy [iam_organisation_policy_list] 

Synopsis

  $ h1-cli iam organisation policy list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --name string              Filter by name              
  --tag string               Filter by tag
```

 h1-cli iam organisation policy show

```
h1-cli iam organisation policy show

  Returns a single policy [iam_organisation_policy_get] 

Synopsis

  $ h1-cli iam organisation policy show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

 h1-cli iam organisation policy actor

```
h1-cli iam organisation policy actor

Synopsis

  $ h1-cli iam organisation policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [iam_organisation_policy_actor_create] 
  list     undefined [iam_organisation_policy_actor_list]   
  show     undefined [iam_organisation_policy_actor_get]
```

 h1-cli iam organisation policy actor spec

```
h1-cli iam organisation policy actor spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy actor spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation policy actor create

```
h1-cli iam organisation policy actor create

  undefined [iam_organisation_policy_actor_create] 

Synopsis

  $ h1-cli iam organisation policy actor create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --value string
```

 h1-cli iam organisation policy actor list

```
h1-cli iam organisation policy actor list

  undefined [iam_organisation_policy_actor_list] 

Synopsis

  $ h1-cli iam organisation policy actor list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

 h1-cli iam organisation policy actor show

```
h1-cli iam organisation policy actor show

  undefined [iam_organisation_policy_actor_get] 

Synopsis

  $ h1-cli iam organisation policy actor show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --actor extractid          actorId
```

 h1-cli iam organisation policy service

```
h1-cli iam organisation policy service

Synopsis

  $ h1-cli iam organisation policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [iam_organisation_policy_service_list] 
  show   undefined [iam_organisation_policy_service_get]
```

 h1-cli iam organisation policy service spec

```
h1-cli iam organisation policy service spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation policy service list

```
h1-cli iam organisation policy service list

  undefined [iam_organisation_policy_service_list] 

Synopsis

  $ h1-cli iam organisation policy service list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

 h1-cli iam organisation policy service show

```
h1-cli iam organisation policy service show

  undefined [iam_organisation_policy_service_get] 

Synopsis

  $ h1-cli iam organisation policy service show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --service extractid        serviceId
```

 h1-cli iam organisation policy tag

```
h1-cli iam organisation policy tag

Synopsis

  $ h1-cli iam organisation policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [iam_organisation_policy_tag_create] 
  list     undefined [iam_organisation_policy_tag_list]   
  show     undefined [iam_organisation_policy_tag_get]
```

 h1-cli iam organisation policy tag spec

```
h1-cli iam organisation policy tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation policy tag create

```
h1-cli iam organisation policy tag create

  undefined [iam_organisation_policy_tag_create] 

Synopsis

  $ h1-cli iam organisation policy tag create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --id string                                            
  --value string                                         
  --name string
```

 h1-cli iam organisation policy tag list

```
h1-cli iam organisation policy tag list

  undefined [iam_organisation_policy_tag_list] 

Synopsis

  $ h1-cli iam organisation policy tag list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

 h1-cli iam organisation policy tag show

```
h1-cli iam organisation policy tag show

  undefined [iam_organisation_policy_tag_get] 

Synopsis

  $ h1-cli iam organisation policy tag show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --tag extractid            tagId
```

 h1-cli iam organisation policy event

```
h1-cli iam organisation policy event

Synopsis

  $ h1-cli iam organisation policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [iam_organisation_policy_event_list]
```

 h1-cli iam organisation policy event spec

```
h1-cli iam organisation policy event spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation policy event list

```
h1-cli iam organisation policy event list

  undefined [iam_organisation_policy_event_list] 

Synopsis

  $ h1-cli iam organisation policy event list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --$limit string            $limit                      
  --$skip string             $skip
```

 h1-cli iam organisation role

```
h1-cli iam organisation role

Synopsis

  $ h1-cli iam organisation role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                    
  create       Create role [iam_organisation_role_create]        
  list         List role [iam_organisation_role_list]            
  show         Returns a single role [iam_organisation_role_get] 
  permission   Manage permissions of the role                    
  service      Manage services of the role                       
  tag          Manage tags of the role                           
  event        Manage events of the role
```

 h1-cli iam organisation role spec

```
h1-cli iam organisation role spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation role create

```
h1-cli iam organisation role create

  Create role [iam_organisation_role_create] 

Synopsis

  $ h1-cli iam organisation role create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --organisation extractid     organisation Id                
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --description string                                        
  --permission nestedvalue[]   Use as value=value             
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli iam organisation role list

```
h1-cli iam organisation role list

  List role [iam_organisation_role_list] 

Synopsis

  $ h1-cli iam organisation role list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --name string              Filter by name              
  --tag string               Filter by tag
```

 h1-cli iam organisation role show

```
h1-cli iam organisation role show

  Returns a single role [iam_organisation_role_get] 

Synopsis

  $ h1-cli iam organisation role show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

 h1-cli iam organisation role permission

```
h1-cli iam organisation role permission

Synopsis

  $ h1-cli iam organisation role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                      
  create   undefined [iam_organisation_role_permission_create] 
  list     undefined [iam_organisation_role_permission_list]   
  show     undefined [iam_organisation_role_permission_get]
```

 h1-cli iam organisation role permission spec

```
h1-cli iam organisation role permission spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role permission spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation role permission create

```
h1-cli iam organisation role permission create

  undefined [iam_organisation_role_permission_create] 

Synopsis

  $ h1-cli iam organisation role permission create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --value string
```

 h1-cli iam organisation role permission list

```
h1-cli iam organisation role permission list

  undefined [iam_organisation_role_permission_list] 

Synopsis

  $ h1-cli iam organisation role permission list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

 h1-cli iam organisation role permission show

```
h1-cli iam organisation role permission show

  undefined [iam_organisation_role_permission_get] 

Synopsis

  $ h1-cli iam organisation role permission show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --permission extractid     permissionId
```

 h1-cli iam organisation role service

```
h1-cli iam organisation role service

Synopsis

  $ h1-cli iam organisation role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [iam_organisation_role_service_list] 
  show   undefined [iam_organisation_role_service_get]
```

 h1-cli iam organisation role service spec

```
h1-cli iam organisation role service spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation role service list

```
h1-cli iam organisation role service list

  undefined [iam_organisation_role_service_list] 

Synopsis

  $ h1-cli iam organisation role service list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

 h1-cli iam organisation role service show

```
h1-cli iam organisation role service show

  undefined [iam_organisation_role_service_get] 

Synopsis

  $ h1-cli iam organisation role service show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --service extractid        serviceId
```

 h1-cli iam organisation role tag

```
h1-cli iam organisation role tag

Synopsis

  $ h1-cli iam organisation role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [iam_organisation_role_tag_create] 
  list     undefined [iam_organisation_role_tag_list]   
  show     undefined [iam_organisation_role_tag_get]
```

 h1-cli iam organisation role tag spec

```
h1-cli iam organisation role tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation role tag create

```
h1-cli iam organisation role tag create

  undefined [iam_organisation_role_tag_create] 

Synopsis

  $ h1-cli iam organisation role tag create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --id string                                            
  --value string                                         
  --name string
```

 h1-cli iam organisation role tag list

```
h1-cli iam organisation role tag list

  undefined [iam_organisation_role_tag_list] 

Synopsis

  $ h1-cli iam organisation role tag list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

 h1-cli iam organisation role tag show

```
h1-cli iam organisation role tag show

  undefined [iam_organisation_role_tag_get] 

Synopsis

  $ h1-cli iam organisation role tag show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --tag extractid            tagId
```

 h1-cli iam organisation role event

```
h1-cli iam organisation role event

Synopsis

  $ h1-cli iam organisation role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [iam_organisation_role_event_list]
```

 h1-cli iam organisation role event spec

```
h1-cli iam organisation role event spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli iam organisation role event list

```
h1-cli iam organisation role event list

  undefined [iam_organisation_role_event_list] 

Synopsis

  $ h1-cli iam organisation role event list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --$limit string            $limit                      
  --$skip string             $skip
```

 h1-cli provider

```
h1-cli provider

Synopsis

  $ h1-cli provider <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec    Print specification of context 
  agent   Management of agent
```

 h1-cli provider spec

```
h1-cli provider spec

  Print specification of context 

Synopsis

  $ h1-cli provider spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli provider agent

```
h1-cli provider agent

Synopsis

  $ h1-cli provider agent <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                      
  create       Create agent [provider_project_agent_create]        
  list         List agent [provider_project_agent_list]            
  show         Returns a single agent [provider_project_agent_get] 
  start        Action start [provider_project_agent_start]         
  suspend      Action suspend [provider_project_agent_suspend]     
  transfer     Action transfer [provider_project_agent_transfer]   
  inspect      Manage inspects of the agent                        
  resource     Manage resources of the agent                       
  credential   Manage credentials of the agent                     
  service      Manage services of the agent                        
  tag          Manage tags of the agent                            
  event        Manage events of the agent
```

 h1-cli provider agent spec

```
h1-cli provider agent spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli provider agent create

```
h1-cli provider agent create

  Create agent [provider_project_agent_create] 

Synopsis

  $ h1-cli provider agent create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli provider agent list

```
h1-cli provider agent list

  List agent [provider_project_agent_list] 

Synopsis

  $ h1-cli provider agent list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli provider agent show

```
h1-cli provider agent show

  Returns a single agent [provider_project_agent_get] 

Synopsis

  $ h1-cli provider agent show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

 h1-cli provider agent start

```
h1-cli provider agent start

  Action start [provider_project_agent_start] 

Synopsis

  $ h1-cli provider agent start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --agent extractid            agent Id                    
  --x-idempotency-key string
```

 h1-cli provider agent suspend

```
h1-cli provider agent suspend

  Action suspend [provider_project_agent_suspend] 

Synopsis

  $ h1-cli provider agent suspend <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --agent extractid            agent Id                    
  --x-idempotency-key string
```

 h1-cli provider agent transfer

```
h1-cli provider agent transfer

  Action transfer [provider_project_agent_transfer] 

Synopsis

  $ h1-cli provider agent transfer <options> 

Options

  --help                       Show help message and exit.                                           
  --passport-file string       Passport file                                                         
  --project extractid          project Id                                                            
  --location extractid         location Id                                                           
  --agent extractid            agent Id                                                              
  --x-idempotency-key string                                                                         
  --project string             Provide URI of iam/project. Require permissions provider/agent/create
```

 h1-cli provider agent inspect

```
h1-cli provider agent inspect

Synopsis

  $ h1-cli provider agent inspect <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [provider_project_agent_inspect_get]
```

 h1-cli provider agent inspect spec

```
h1-cli provider agent inspect spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent inspect spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli provider agent inspect list

```
h1-cli provider agent inspect list

  undefined [provider_project_agent_inspect_get] 

Synopsis

  $ h1-cli provider agent inspect list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

 h1-cli provider agent resource

```
h1-cli provider agent resource

Synopsis

  $ h1-cli provider agent resource <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                                      
  list       undefined [provider_project_agent_resource_list]                    
  recreate   undefined [provider_project_agent_resource_actions_recreate_create] 
  inspect    Manage inspects of the resource                                     
  event      Manage events of the resource
```

 h1-cli provider agent resource spec

```
h1-cli provider agent resource spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent resource spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli provider agent resource list

```
h1-cli provider agent resource list

  undefined [provider_project_agent_resource_list] 

Synopsis

  $ h1-cli provider agent resource list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

 h1-cli provider agent resource recreate

```
h1-cli provider agent resource recreate

  undefined [provider_project_agent_resource_actions_recreate_create] 

Synopsis

  $ h1-cli provider agent resource recreate <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --resource extractid     resourceId
```

 h1-cli provider agent resource inspect

```
h1-cli provider agent resource inspect

Synopsis

  $ h1-cli provider agent resource inspect <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                          
  list   undefined [provider_project_agent_resource_inspect_get]
```

 h1-cli provider agent resource inspect spec

```
h1-cli provider agent resource inspect spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent resource inspect spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli provider agent resource inspect list

```
h1-cli provider agent resource inspect list

  undefined [provider_project_agent_resource_inspect_get] 

Synopsis

  $ h1-cli provider agent resource inspect list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --resource extractid     resourceId
```

 h1-cli provider agent resource event

```
h1-cli provider agent resource event

Synopsis

  $ h1-cli provider agent resource event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                         
  list   undefined [provider_project_agent_resource_event_list]
```

 h1-cli provider agent resource event spec

```
h1-cli provider agent resource event spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent resource event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli provider agent resource event list

```
h1-cli provider agent resource event list

  undefined [provider_project_agent_resource_event_list] 

Synopsis

  $ h1-cli provider agent resource event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --resource extractid     resourceId                  
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli provider agent credential

```
h1-cli provider agent credential

Synopsis

  $ h1-cli provider agent credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                       
  create   undefined [provider_project_agent_credential_create] 
  list     undefined [provider_project_agent_credential_list]
```

 h1-cli provider agent credential spec

```
h1-cli provider agent credential spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent credential spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli provider agent credential create

```
h1-cli provider agent credential create

  undefined [provider_project_agent_credential_create] 

Synopsis

  $ h1-cli provider agent credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

 h1-cli provider agent credential list

```
h1-cli provider agent credential list

  undefined [provider_project_agent_credential_list] 

Synopsis

  $ h1-cli provider agent credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

 h1-cli provider agent service

```
h1-cli provider agent service

Synopsis

  $ h1-cli provider agent service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   undefined [provider_project_agent_service_list] 
  show   undefined [provider_project_agent_service_get]
```

 h1-cli provider agent service spec

```
h1-cli provider agent service spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli provider agent service list

```
h1-cli provider agent service list

  undefined [provider_project_agent_service_list] 

Synopsis

  $ h1-cli provider agent service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

 h1-cli provider agent service show

```
h1-cli provider agent service show

  undefined [provider_project_agent_service_get] 

Synopsis

  $ h1-cli provider agent service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --service extractid      serviceId
```

 h1-cli provider agent tag

```
h1-cli provider agent tag

Synopsis

  $ h1-cli provider agent tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                
  create   undefined [provider_project_agent_tag_create] 
  list     undefined [provider_project_agent_tag_list]   
  show     undefined [provider_project_agent_tag_get]
```

 h1-cli provider agent tag spec

```
h1-cli provider agent tag spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli provider agent tag create

```
h1-cli provider agent tag create

  undefined [provider_project_agent_tag_create] 

Synopsis

  $ h1-cli provider agent tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli provider agent tag list

```
h1-cli provider agent tag list

  undefined [provider_project_agent_tag_list] 

Synopsis

  $ h1-cli provider agent tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

 h1-cli provider agent tag show

```
h1-cli provider agent tag show

  undefined [provider_project_agent_tag_get] 

Synopsis

  $ h1-cli provider agent tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --tag extractid          tagId
```

 h1-cli provider agent event

```
h1-cli provider agent event

Synopsis

  $ h1-cli provider agent event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                
  list   undefined [provider_project_agent_event_list]
```

 h1-cli provider agent event spec

```
h1-cli provider agent event spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli provider agent event list

```
h1-cli provider agent event list

  undefined [provider_project_agent_event_list] 

Synopsis

  $ h1-cli provider agent event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli container

```
h1-cli container

Synopsis

  $ h1-cli container <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  instance   Management of instance         
  registry   Management of registry         
  volume     Management of volume
```

 h1-cli container spec

```
h1-cli container spec

  Print specification of context 

Synopsis

  $ h1-cli container spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container instance

```
h1-cli container instance

Synopsis

  $ h1-cli container instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                             
  create    Create instance [container_project_instance_create]        
  list      List instance [container_project_instance_list]            
  show      Returns a single instance [container_project_instance_get] 
  start     Action start [container_project_instance_start]            
  stop      Action stop [container_project_instance_stop]              
  restart   Action restart [container_project_instance_restart]        
  process   Manage processes of the instance                           
  service   Manage services of the instance                            
  tag       Manage tags of the instance                                
  event     Manage events of the instance
```

 h1-cli container instance spec

```
h1-cli container instance spec

  Print specification of context 

Synopsis

  $ h1-cli container instance spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container instance create

```
h1-cli container instance create

  Create instance [container_project_instance_create] 

Synopsis

  $ h1-cli container instance create <options> 

Options

  --help                       Show help message and exit.                                  
  --passport-file string       Passport file                                                
  --project extractid          project Id                                                   
  --location extractid         location Id                                                  
  --x-idempotency-key string                                                                
  --name string                                                                             
  --service string             Provide URI of billing/service                               
  --image string                                                                            
  --registry string                                                                         
  --expose nestedvalue[]       Use as internal=internal,external=external,protocol=protocol 
  --env string[]                                                                            
  --volumes nestedvalue[]      Use as source=source,sourcePath=sourcePath,target=target     
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli container instance list

```
h1-cli container instance list

  List instance [container_project_instance_list] 

Synopsis

  $ h1-cli container instance list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli container instance show

```
h1-cli container instance show

  Returns a single instance [container_project_instance_get] 

Synopsis

  $ h1-cli container instance show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli container instance start

```
h1-cli container instance start

  Action start [container_project_instance_start] 

Synopsis

  $ h1-cli container instance start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

 h1-cli container instance stop

```
h1-cli container instance stop

  Action stop [container_project_instance_stop] 

Synopsis

  $ h1-cli container instance stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

 h1-cli container instance restart

```
h1-cli container instance restart

  Action restart [container_project_instance_restart] 

Synopsis

  $ h1-cli container instance restart <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

 h1-cli container instance process

```
h1-cli container instance process

Synopsis

  $ h1-cli container instance process <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                      
  list   undefined [container_project_instance_process_list]
```

 h1-cli container instance process spec

```
h1-cli container instance process spec

  Print specification of context 

Synopsis

  $ h1-cli container instance process spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container instance process list

```
h1-cli container instance process list

  undefined [container_project_instance_process_list] 

Synopsis

  $ h1-cli container instance process list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli container instance service

```
h1-cli container instance service

Synopsis

  $ h1-cli container instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                      
  list   undefined [container_project_instance_service_list] 
  show   undefined [container_project_instance_service_get]
```

 h1-cli container instance service spec

```
h1-cli container instance service spec

  Print specification of context 

Synopsis

  $ h1-cli container instance service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container instance service list

```
h1-cli container instance service list

  undefined [container_project_instance_service_list] 

Synopsis

  $ h1-cli container instance service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli container instance service show

```
h1-cli container instance service show

  undefined [container_project_instance_service_get] 

Synopsis

  $ h1-cli container instance service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --service extractid      serviceId
```

 h1-cli container instance tag

```
h1-cli container instance tag

Synopsis

  $ h1-cli container instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                    
  create   undefined [container_project_instance_tag_create] 
  list     undefined [container_project_instance_tag_list]   
  show     undefined [container_project_instance_tag_get]
```

 h1-cli container instance tag spec

```
h1-cli container instance tag spec

  Print specification of context 

Synopsis

  $ h1-cli container instance tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container instance tag create

```
h1-cli container instance tag create

  undefined [container_project_instance_tag_create] 

Synopsis

  $ h1-cli container instance tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli container instance tag list

```
h1-cli container instance tag list

  undefined [container_project_instance_tag_list] 

Synopsis

  $ h1-cli container instance tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli container instance tag show

```
h1-cli container instance tag show

  undefined [container_project_instance_tag_get] 

Synopsis

  $ h1-cli container instance tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --tag extractid          tagId
```

 h1-cli container instance event

```
h1-cli container instance event

Synopsis

  $ h1-cli container instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [container_project_instance_event_list]
```

 h1-cli container instance event spec

```
h1-cli container instance event spec

  Print specification of context 

Synopsis

  $ h1-cli container instance event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container instance event list

```
h1-cli container instance event list

  undefined [container_project_instance_event_list] 

Synopsis

  $ h1-cli container instance event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli container registry

```
h1-cli container registry

Synopsis

  $ h1-cli container registry <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                             
  create       Create registry [container_project_registry_create]        
  list         List registry [container_project_registry_list]            
  show         Returns a single registry [container_project_registry_get] 
  start        Action start [container_project_registry_start]            
  stop         Action stop [container_project_registry_stop]              
  transfer     Action transfer [container_project_registry_transfer]      
  repository   Manage repositories of the registry                        
  credential   Manage credentials of the registry                         
  service      Manage services of the registry                            
  tag          Manage tags of the registry                                
  event        Manage events of the registry
```

 h1-cli container registry spec

```
h1-cli container registry spec

  Print specification of context 

Synopsis

  $ h1-cli container registry spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container registry create

```
h1-cli container registry create

  Create registry [container_project_registry_create] 

Synopsis

  $ h1-cli container registry create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli container registry list

```
h1-cli container registry list

  List registry [container_project_registry_list] 

Synopsis

  $ h1-cli container registry list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli container registry show

```
h1-cli container registry show

  Returns a single registry [container_project_registry_get] 

Synopsis

  $ h1-cli container registry show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id
```

 h1-cli container registry start

```
h1-cli container registry start

  Action start [container_project_registry_start] 

Synopsis

  $ h1-cli container registry start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --registry extractid         registry Id                 
  --x-idempotency-key string
```

 h1-cli container registry stop

```
h1-cli container registry stop

  Action stop [container_project_registry_stop] 

Synopsis

  $ h1-cli container registry stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --registry extractid         registry Id                 
  --x-idempotency-key string
```

 h1-cli container registry transfer

```
h1-cli container registry transfer

  Action transfer [container_project_registry_transfer] 

Synopsis

  $ h1-cli container registry transfer <options> 

Options

  --help                       Show help message and exit.                                               
  --passport-file string       Passport file                                                             
  --project extractid          project Id                                                                
  --location extractid         location Id                                                               
  --registry extractid         registry Id                                                               
  --x-idempotency-key string                                                                             
  --project string             Provide URI of iam/project. Require permissions container/registry/create
```

 h1-cli container registry repository

```
h1-cli container registry repository

Synopsis

  $ h1-cli container registry repository <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec    Print specification of context                         
  list    undefined [container_project_registry_repository_list] 
  show    undefined [container_project_registry_repository_get]  
  image   Manage images of the repository
```

 h1-cli container registry repository spec

```
h1-cli container registry repository spec

  Print specification of context 

Synopsis

  $ h1-cli container registry repository spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container registry repository list

```
h1-cli container registry repository list

  undefined [container_project_registry_repository_list] 

Synopsis

  $ h1-cli container registry repository list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id
```

 h1-cli container registry repository show

```
h1-cli container registry repository show

  undefined [container_project_registry_repository_get] 

Synopsis

  $ h1-cli container registry repository show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --repository extractid   repositoryId
```

 h1-cli container registry repository image

```
h1-cli container registry repository image

Synopsis

  $ h1-cli container registry repository image <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                               
  list   undefined [container_project_registry_repository_image_list] 
  show   undefined [container_project_registry_repository_image_get]
```

 h1-cli container registry repository image spec

```
h1-cli container registry repository image spec

  Print specification of context 

Synopsis

  $ h1-cli container registry repository image spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container registry repository image list

```
h1-cli container registry repository image list

  undefined [container_project_registry_repository_image_list] 

Synopsis

  $ h1-cli container registry repository image list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --repository extractid   repositoryId
```

 h1-cli container registry repository image show

```
h1-cli container registry repository image show

  undefined [container_project_registry_repository_image_get] 

Synopsis

  $ h1-cli container registry repository image show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --repository extractid   repositoryId                
  --image extractid        imageId
```

 h1-cli container registry credential

```
h1-cli container registry credential

Synopsis

  $ h1-cli container registry credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                           
  create   undefined [container_project_registry_credential_create] 
  list     undefined [container_project_registry_credential_list]
```

 h1-cli container registry credential spec

```
h1-cli container registry credential spec

  Print specification of context 

Synopsis

  $ h1-cli container registry credential spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container registry credential create

```
h1-cli container registry credential create

  undefined [container_project_registry_credential_create] 

Synopsis

  $ h1-cli container registry credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

 h1-cli container registry credential list

```
h1-cli container registry credential list

  undefined [container_project_registry_credential_list] 

Synopsis

  $ h1-cli container registry credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id
```

 h1-cli container registry service

```
h1-cli container registry service

Synopsis

  $ h1-cli container registry service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                      
  list   undefined [container_project_registry_service_list] 
  show   undefined [container_project_registry_service_get]
```

 h1-cli container registry service spec

```
h1-cli container registry service spec

  Print specification of context 

Synopsis

  $ h1-cli container registry service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container registry service list

```
h1-cli container registry service list

  undefined [container_project_registry_service_list] 

Synopsis

  $ h1-cli container registry service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id
```

 h1-cli container registry service show

```
h1-cli container registry service show

  undefined [container_project_registry_service_get] 

Synopsis

  $ h1-cli container registry service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --service extractid      serviceId
```

 h1-cli container registry tag

```
h1-cli container registry tag

Synopsis

  $ h1-cli container registry tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                    
  create   undefined [container_project_registry_tag_create] 
  list     undefined [container_project_registry_tag_list]   
  show     undefined [container_project_registry_tag_get]
```

 h1-cli container registry tag spec

```
h1-cli container registry tag spec

  Print specification of context 

Synopsis

  $ h1-cli container registry tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container registry tag create

```
h1-cli container registry tag create

  undefined [container_project_registry_tag_create] 

Synopsis

  $ h1-cli container registry tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli container registry tag list

```
h1-cli container registry tag list

  undefined [container_project_registry_tag_list] 

Synopsis

  $ h1-cli container registry tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id
```

 h1-cli container registry tag show

```
h1-cli container registry tag show

  undefined [container_project_registry_tag_get] 

Synopsis

  $ h1-cli container registry tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --tag extractid          tagId
```

 h1-cli container registry event

```
h1-cli container registry event

Synopsis

  $ h1-cli container registry event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [container_project_registry_event_list]
```

 h1-cli container registry event spec

```
h1-cli container registry event spec

  Print specification of context 

Synopsis

  $ h1-cli container registry event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container registry event list

```
h1-cli container registry event list

  undefined [container_project_registry_event_list] 

Synopsis

  $ h1-cli container registry event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli container volume

```
h1-cli container volume

Synopsis

  $ h1-cli container volume <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                         
  create    Create volume [container_project_volume_create]        
  list      List volume [container_project_volume_list]            
  show      Returns a single volume [container_project_volume_get] 
  service   Manage services of the volume                          
  tag       Manage tags of the volume                              
  event     Manage events of the volume
```

 h1-cli container volume spec

```
h1-cli container volume spec

  Print specification of context 

Synopsis

  $ h1-cli container volume spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container volume create

```
h1-cli container volume create

  Create volume [container_project_volume_create] 

Synopsis

  $ h1-cli container volume create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --size string                                               
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli container volume list

```
h1-cli container volume list

  List volume [container_project_volume_list] 

Synopsis

  $ h1-cli container volume list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli container volume show

```
h1-cli container volume show

  Returns a single volume [container_project_volume_get] 

Synopsis

  $ h1-cli container volume show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id
```

 h1-cli container volume service

```
h1-cli container volume service

Synopsis

  $ h1-cli container volume service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [container_project_volume_service_list] 
  show   undefined [container_project_volume_service_get]
```

 h1-cli container volume service spec

```
h1-cli container volume service spec

  Print specification of context 

Synopsis

  $ h1-cli container volume service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container volume service list

```
h1-cli container volume service list

  undefined [container_project_volume_service_list] 

Synopsis

  $ h1-cli container volume service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id
```

 h1-cli container volume service show

```
h1-cli container volume service show

  undefined [container_project_volume_service_get] 

Synopsis

  $ h1-cli container volume service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id                   
  --service extractid      serviceId
```

 h1-cli container volume tag

```
h1-cli container volume tag

Synopsis

  $ h1-cli container volume tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                  
  create   undefined [container_project_volume_tag_create] 
  list     undefined [container_project_volume_tag_list]   
  show     undefined [container_project_volume_tag_get]
```

 h1-cli container volume tag spec

```
h1-cli container volume tag spec

  Print specification of context 

Synopsis

  $ h1-cli container volume tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container volume tag create

```
h1-cli container volume tag create

  undefined [container_project_volume_tag_create] 

Synopsis

  $ h1-cli container volume tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id                   
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli container volume tag list

```
h1-cli container volume tag list

  undefined [container_project_volume_tag_list] 

Synopsis

  $ h1-cli container volume tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id
```

 h1-cli container volume tag show

```
h1-cli container volume tag show

  undefined [container_project_volume_tag_get] 

Synopsis

  $ h1-cli container volume tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id                   
  --tag extractid          tagId
```

 h1-cli container volume event

```
h1-cli container volume event

Synopsis

  $ h1-cli container volume event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   undefined [container_project_volume_event_list]
```

 h1-cli container volume event spec

```
h1-cli container volume event spec

  Print specification of context 

Synopsis

  $ h1-cli container volume event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli container volume event list

```
h1-cli container volume event list

  undefined [container_project_volume_event_list] 

Synopsis

  $ h1-cli container volume event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id                   
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli database

```
h1-cli database

Synopsis

  $ h1-cli database <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  instance   Management of instance
```

 h1-cli database spec

```
h1-cli database spec

  Print specification of context 

Synopsis

  $ h1-cli database spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli database instance

```
h1-cli database instance

Synopsis

  $ h1-cli database instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                            
  create       Create instance [database_project_instance_create]        
  list         List instance [database_project_instance_list]            
  show         Returns a single instance [database_project_instance_get] 
  start        Action start [database_project_instance_start]            
  stop         Action stop [database_project_instance_stop]              
  transfer     Action transfer [database_project_instance_transfer]      
  credential   Manage credentials of the instance                        
  service      Manage services of the instance                           
  tag          Manage tags of the instance                               
  event        Manage events of the instance
```

 h1-cli database instance spec

```
h1-cli database instance spec

  Print specification of context 

Synopsis

  $ h1-cli database instance spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli database instance create

```
h1-cli database instance create

  Create instance [database_project_instance_create] 

Synopsis

  $ h1-cli database instance create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli database instance list

```
h1-cli database instance list

  List instance [database_project_instance_list] 

Synopsis

  $ h1-cli database instance list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli database instance show

```
h1-cli database instance show

  Returns a single instance [database_project_instance_get] 

Synopsis

  $ h1-cli database instance show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli database instance start

```
h1-cli database instance start

  Action start [database_project_instance_start] 

Synopsis

  $ h1-cli database instance start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

 h1-cli database instance stop

```
h1-cli database instance stop

  Action stop [database_project_instance_stop] 

Synopsis

  $ h1-cli database instance stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

 h1-cli database instance transfer

```
h1-cli database instance transfer

  Action transfer [database_project_instance_transfer] 

Synopsis

  $ h1-cli database instance transfer <options> 

Options

  --help                       Show help message and exit.                                              
  --passport-file string       Passport file                                                            
  --project extractid          project Id                                                               
  --location extractid         location Id                                                              
  --instance extractid         instance Id                                                              
  --x-idempotency-key string                                                                            
  --project string             Provide URI of iam/project. Require permissions database/database/create
```

 h1-cli database instance credential

```
h1-cli database instance credential

Synopsis

  $ h1-cli database instance credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                          
  create   undefined [database_project_instance_credential_create] 
  list     undefined [database_project_instance_credential_list]
```

 h1-cli database instance credential spec

```
h1-cli database instance credential spec

  Print specification of context 

Synopsis

  $ h1-cli database instance credential spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli database instance credential create

```
h1-cli database instance credential create

  undefined [database_project_instance_credential_create] 

Synopsis

  $ h1-cli database instance credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

 h1-cli database instance credential list

```
h1-cli database instance credential list

  undefined [database_project_instance_credential_list] 

Synopsis

  $ h1-cli database instance credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli database instance service

```
h1-cli database instance service

Synopsis

  $ h1-cli database instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                     
  list   undefined [database_project_instance_service_list] 
  show   undefined [database_project_instance_service_get]
```

 h1-cli database instance service spec

```
h1-cli database instance service spec

  Print specification of context 

Synopsis

  $ h1-cli database instance service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli database instance service list

```
h1-cli database instance service list

  undefined [database_project_instance_service_list] 

Synopsis

  $ h1-cli database instance service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli database instance service show

```
h1-cli database instance service show

  undefined [database_project_instance_service_get] 

Synopsis

  $ h1-cli database instance service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --service extractid      serviceId
```

 h1-cli database instance tag

```
h1-cli database instance tag

Synopsis

  $ h1-cli database instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [database_project_instance_tag_create] 
  list     undefined [database_project_instance_tag_list]   
  show     undefined [database_project_instance_tag_get]
```

 h1-cli database instance tag spec

```
h1-cli database instance tag spec

  Print specification of context 

Synopsis

  $ h1-cli database instance tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli database instance tag create

```
h1-cli database instance tag create

  undefined [database_project_instance_tag_create] 

Synopsis

  $ h1-cli database instance tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli database instance tag list

```
h1-cli database instance tag list

  undefined [database_project_instance_tag_list] 

Synopsis

  $ h1-cli database instance tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli database instance tag show

```
h1-cli database instance tag show

  undefined [database_project_instance_tag_get] 

Synopsis

  $ h1-cli database instance tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --tag extractid          tagId
```

 h1-cli database instance event

```
h1-cli database instance event

Synopsis

  $ h1-cli database instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [database_project_instance_event_list]
```

 h1-cli database instance event spec

```
h1-cli database instance event spec

  Print specification of context 

Synopsis

  $ h1-cli database instance event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli database instance event list

```
h1-cli database instance event list

  undefined [database_project_instance_event_list] 

Synopsis

  $ h1-cli database instance event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli insight

```
h1-cli insight

Synopsis

  $ h1-cli insight <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context 
  journal   Management of journal
```

 h1-cli insight spec

```
h1-cli insight spec

  Print specification of context 

Synopsis

  $ h1-cli insight spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli insight journal

```
h1-cli insight journal

Synopsis

  $ h1-cli insight journal <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                         
  create       Create journal [insight_project_journal_create]        
  list         List journal [insight_project_journal_list]            
  show         Returns a single journal [insight_project_journal_get] 
  transfer     Action transfer [insight_project_journal_transfer]     
  log          Manage logs of the journal                             
  credential   Manage credentials of the journal                      
  service      Manage services of the journal                         
  tag          Manage tags of the journal                             
  event        Manage events of the journal
```

 h1-cli insight journal spec

```
h1-cli insight journal spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli insight journal create

```
h1-cli insight journal create

  Create journal [insight_project_journal_create] 

Synopsis

  $ h1-cli insight journal create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --retention string                                          
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli insight journal list

```
h1-cli insight journal list

  List journal [insight_project_journal_list] 

Synopsis

  $ h1-cli insight journal list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli insight journal show

```
h1-cli insight journal show

  Returns a single journal [insight_project_journal_get] 

Synopsis

  $ h1-cli insight journal show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id
```

 h1-cli insight journal transfer

```
h1-cli insight journal transfer

  Action transfer [insight_project_journal_transfer] 

Synopsis

  $ h1-cli insight journal transfer <options> 

Options

  --help                       Show help message and exit.                                            
  --passport-file string       Passport file                                                          
  --project extractid          project Id                                                             
  --location extractid         location Id                                                            
  --journal extractid          journal Id                                                             
  --x-idempotency-key string                                                                          
  --project string             Provide URI of iam/project. Require permissions insight/journal/create
```

 h1-cli insight journal log

```
h1-cli insight journal log

Synopsis

  $ h1-cli insight journal log <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                
  list   websocket is also supported [insight_project_journal_log_get]
```

 h1-cli insight journal log spec

```
h1-cli insight journal log spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal log spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli insight journal log list

```
h1-cli insight journal log list

  websocket is also supported [insight_project_journal_log_get] 

Synopsis

  $ h1-cli insight journal log list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --since string           since                       
  --until string           until                       
  --follow string          follow                      
  --tail string            tail                        
  --tag string             tag
```

 h1-cli insight journal credential

```
h1-cli insight journal credential

Synopsis

  $ h1-cli insight journal credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                        
  create   undefined [insight_project_journal_credential_create] 
  list     undefined [insight_project_journal_credential_list]
```

 h1-cli insight journal credential spec

```
h1-cli insight journal credential spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal credential spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli insight journal credential create

```
h1-cli insight journal credential create

  undefined [insight_project_journal_credential_create] 

Synopsis

  $ h1-cli insight journal credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

 h1-cli insight journal credential list

```
h1-cli insight journal credential list

  undefined [insight_project_journal_credential_list] 

Synopsis

  $ h1-cli insight journal credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id
```

 h1-cli insight journal service

```
h1-cli insight journal service

Synopsis

  $ h1-cli insight journal service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [insight_project_journal_service_list] 
  show   undefined [insight_project_journal_service_get]
```

 h1-cli insight journal service spec

```
h1-cli insight journal service spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli insight journal service list

```
h1-cli insight journal service list

  undefined [insight_project_journal_service_list] 

Synopsis

  $ h1-cli insight journal service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id
```

 h1-cli insight journal service show

```
h1-cli insight journal service show

  undefined [insight_project_journal_service_get] 

Synopsis

  $ h1-cli insight journal service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --service extractid      serviceId
```

 h1-cli insight journal tag

```
h1-cli insight journal tag

Synopsis

  $ h1-cli insight journal tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [insight_project_journal_tag_create] 
  list     undefined [insight_project_journal_tag_list]   
  show     undefined [insight_project_journal_tag_get]
```

 h1-cli insight journal tag spec

```
h1-cli insight journal tag spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli insight journal tag create

```
h1-cli insight journal tag create

  undefined [insight_project_journal_tag_create] 

Synopsis

  $ h1-cli insight journal tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli insight journal tag list

```
h1-cli insight journal tag list

  undefined [insight_project_journal_tag_list] 

Synopsis

  $ h1-cli insight journal tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id
```

 h1-cli insight journal tag show

```
h1-cli insight journal tag show

  undefined [insight_project_journal_tag_get] 

Synopsis

  $ h1-cli insight journal tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --tag extractid          tagId
```

 h1-cli insight journal event

```
h1-cli insight journal event

Synopsis

  $ h1-cli insight journal event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [insight_project_journal_event_list]
```

 h1-cli insight journal event spec

```
h1-cli insight journal event spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli insight journal event list

```
h1-cli insight journal event list

  undefined [insight_project_journal_event_list] 

Synopsis

  $ h1-cli insight journal event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli website

```
h1-cli website

Synopsis

  $ h1-cli website <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  instance   Management of instance
```

 h1-cli website spec

```
h1-cli website spec

  Print specification of context 

Synopsis

  $ h1-cli website spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli website instance

```
h1-cli website instance

Synopsis

  $ h1-cli website instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                           
  create       Create instance [website_project_instance_create]        
  list         List instance [website_project_instance_list]            
  show         Returns a single instance [website_project_instance_get] 
  start        Action start [website_project_instance_start]            
  stop         Action stop [website_project_instance_stop]              
  restart      Action restart [website_project_instance_restart]        
  transfer     Action transfer [website_project_instance_transfer]      
  snapshot     Manage snapshots of the instance                         
  env          Manage envs of the instance                              
  link         Manage links of the instance                             
  sideapp      Manage sideapps of the instance                          
  credential   Manage credentials of the instance                       
  service      Manage services of the instance                          
  tag          Manage tags of the instance                              
  event        Manage events of the instance
```

 h1-cli website instance spec

```
h1-cli website instance spec

  Print specification of context 

Synopsis

  $ h1-cli website instance spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli website instance create

```
h1-cli website instance create

  Create instance [website_project_instance_create] 

Synopsis

  $ h1-cli website instance create <options> 

Options

  --help                       Show help message and exit.                                                   
  --passport-file string       Passport file                                                                 
  --project extractid          project Id                                                                    
  --location extractid         location Id                                                                   
  --x-idempotency-key string                                                                                 
  --name string                                                                                              
  --service string             Provide URI of billing/service                                                
  --image string                                                                                             
  --source string              Provide URI of website/instance.snapshot. Require permissions                 
                               website/instance.snapshot/use                                                 
  --env nestedvalue[]          Use as name=name,value=value                                                  
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli website instance list

```
h1-cli website instance list

  List instance [website_project_instance_list] 

Synopsis

  $ h1-cli website instance list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli website instance show

```
h1-cli website instance show

  Returns a single instance [website_project_instance_get] 

Synopsis

  $ h1-cli website instance show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli website instance start

```
h1-cli website instance start

  Action start [website_project_instance_start] 

Synopsis

  $ h1-cli website instance start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

 h1-cli website instance stop

```
h1-cli website instance stop

  Action stop [website_project_instance_stop] 

Synopsis

  $ h1-cli website instance stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

 h1-cli website instance restart

```
h1-cli website instance restart

  Action restart [website_project_instance_restart] 

Synopsis

  $ h1-cli website instance restart <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

 h1-cli website instance transfer

```
h1-cli website instance transfer

  Action transfer [website_project_instance_transfer] 

Synopsis

  $ h1-cli website instance transfer <options> 

Options

  --help                       Show help message and exit.                                            
  --passport-file string       Passport file                                                          
  --project extractid          project Id                                                             
  --location extractid         location Id                                                            
  --instance extractid         instance Id                                                            
  --x-idempotency-key string                                                                          
  --project string             Provide URI of iam/project. Require permissions website/website/create
```

 h1-cli website instance snapshot

```
h1-cli website instance snapshot

Synopsis

  $ h1-cli website instance snapshot <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                       
  create   undefined [website_project_instance_snapshot_create] 
  list     undefined [website_project_instance_snapshot_list]
```

 h1-cli website instance snapshot spec

```
h1-cli website instance snapshot spec

  Print specification of context 

Synopsis

  $ h1-cli website instance snapshot spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli website instance snapshot create

```
h1-cli website instance snapshot create

  undefined [website_project_instance_snapshot_create] 

Synopsis

  $ h1-cli website instance snapshot create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --name string
```

 h1-cli website instance snapshot list

```
h1-cli website instance snapshot list

  undefined [website_project_instance_snapshot_list] 

Synopsis

  $ h1-cli website instance snapshot list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli website instance env

```
h1-cli website instance env

Synopsis

  $ h1-cli website instance env <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                  
  create   undefined [website_project_instance_env_create] 
  list     undefined [website_project_instance_env_list]
```

 h1-cli website instance env spec

```
h1-cli website instance env spec

  Print specification of context 

Synopsis

  $ h1-cli website instance env spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli website instance env create

```
h1-cli website instance env create

  undefined [website_project_instance_env_create] 

Synopsis

  $ h1-cli website instance env create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --name string                                        
  --value string
```

 h1-cli website instance env list

```
h1-cli website instance env list

  undefined [website_project_instance_env_list] 

Synopsis

  $ h1-cli website instance env list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli website instance link

```
h1-cli website instance link

Synopsis

  $ h1-cli website instance link <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [website_project_instance_link_create] 
  list     undefined [website_project_instance_link_list]
```

 h1-cli website instance link spec

```
h1-cli website instance link spec

  Print specification of context 

Synopsis

  $ h1-cli website instance link spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli website instance link create

```
h1-cli website instance link create

  undefined [website_project_instance_link_create] 

Synopsis

  $ h1-cli website instance link create <options> 

Options

  --help                   Show help message and exit.                                             
  --passport-file string   Passport file                                                           
  --project extractid      project Id                                                              
  --location extractid     location Id                                                             
  --instance extractid     instance Id                                                             
  --actor string           Provide URI of iam/sa. Require permissions iam/sa/use                   
  --purpose string                                                                                 
  --resource string        Provide URI of insight/journal. Require permissions insight/journal/use
```

 h1-cli website instance link list

```
h1-cli website instance link list

  undefined [website_project_instance_link_list] 

Synopsis

  $ h1-cli website instance link list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli website instance sideapp

```
h1-cli website instance sideapp

Synopsis

  $ h1-cli website instance sideapp <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                      
  create   undefined [website_project_instance_sideapp_create] 
  list     undefined [website_project_instance_sideapp_list]
```

 h1-cli website instance sideapp spec

```
h1-cli website instance sideapp spec

  Print specification of context 

Synopsis

  $ h1-cli website instance sideapp spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli website instance sideapp create

```
h1-cli website instance sideapp create

  undefined [website_project_instance_sideapp_create] 

Synopsis

  $ h1-cli website instance sideapp create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --flavour string
```

 h1-cli website instance sideapp list

```
h1-cli website instance sideapp list

  undefined [website_project_instance_sideapp_list] 

Synopsis

  $ h1-cli website instance sideapp list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli website instance credential

```
h1-cli website instance credential

Synopsis

  $ h1-cli website instance credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                         
  create   undefined [website_project_instance_credential_create] 
  list     undefined [website_project_instance_credential_list]
```

 h1-cli website instance credential spec

```
h1-cli website instance credential spec

  Print specification of context 

Synopsis

  $ h1-cli website instance credential spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli website instance credential create

```
h1-cli website instance credential create

  undefined [website_project_instance_credential_create] 

Synopsis

  $ h1-cli website instance credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

 h1-cli website instance credential list

```
h1-cli website instance credential list

  undefined [website_project_instance_credential_list] 

Synopsis

  $ h1-cli website instance credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli website instance service

```
h1-cli website instance service

Synopsis

  $ h1-cli website instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [website_project_instance_service_list] 
  show   undefined [website_project_instance_service_get]
```

 h1-cli website instance service spec

```
h1-cli website instance service spec

  Print specification of context 

Synopsis

  $ h1-cli website instance service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli website instance service list

```
h1-cli website instance service list

  undefined [website_project_instance_service_list] 

Synopsis

  $ h1-cli website instance service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli website instance service show

```
h1-cli website instance service show

  undefined [website_project_instance_service_get] 

Synopsis

  $ h1-cli website instance service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --service extractid      serviceId
```

 h1-cli website instance tag

```
h1-cli website instance tag

Synopsis

  $ h1-cli website instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                  
  create   undefined [website_project_instance_tag_create] 
  list     undefined [website_project_instance_tag_list]   
  show     undefined [website_project_instance_tag_get]
```

 h1-cli website instance tag spec

```
h1-cli website instance tag spec

  Print specification of context 

Synopsis

  $ h1-cli website instance tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli website instance tag create

```
h1-cli website instance tag create

  undefined [website_project_instance_tag_create] 

Synopsis

  $ h1-cli website instance tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli website instance tag list

```
h1-cli website instance tag list

  undefined [website_project_instance_tag_list] 

Synopsis

  $ h1-cli website instance tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli website instance tag show

```
h1-cli website instance tag show

  undefined [website_project_instance_tag_get] 

Synopsis

  $ h1-cli website instance tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --tag extractid          tagId
```

 h1-cli website instance event

```
h1-cli website instance event

Synopsis

  $ h1-cli website instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   undefined [website_project_instance_event_list]
```

 h1-cli website instance event spec

```
h1-cli website instance event spec

  Print specification of context 

Synopsis

  $ h1-cli website instance event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli website instance event list

```
h1-cli website instance event list

  undefined [website_project_instance_event_list] 

Synopsis

  $ h1-cli website instance event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli dns

```
h1-cli dns

Synopsis

  $ h1-cli dns <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context 
  zone   Management of zone
```

 h1-cli dns spec

```
h1-cli dns spec

  Print specification of context 

Synopsis

  $ h1-cli dns spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli dns zone

```
h1-cli dns zone

Synopsis

  $ h1-cli dns zone <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec        Print specification of context               
  create      Create zone [dns_project_zone_create]        
  list        List zone [dns_project_zone_list]            
  show        Returns a single zone [dns_project_zone_get] 
  recordset   Manage recordsets of the zone                
  service     Manage services of the zone                  
  tag         Manage tags of the zone                      
  event       Manage events of the zone
```

 h1-cli dns zone spec

```
h1-cli dns zone spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli dns zone create

```
h1-cli dns zone create

  Create zone [dns_project_zone_create] 

Synopsis

  $ h1-cli dns zone create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --dns-name string                                           
  --source string                                             
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli dns zone list

```
h1-cli dns zone list

  List zone [dns_project_zone_list] 

Synopsis

  $ h1-cli dns zone list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli dns zone show

```
h1-cli dns zone show

  Returns a single zone [dns_project_zone_get] 

Synopsis

  $ h1-cli dns zone show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id
```

 h1-cli dns zone recordset

```
h1-cli dns zone recordset

Synopsis

  $ h1-cli dns zone recordset <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                
  create   undefined [dns_project_zone_recordset_create] 
  list     undefined [dns_project_zone_recordset_list]   
  show     undefined [dns_project_zone_recordset_get]    
  record   Manage records of the recordset
```

 h1-cli dns zone recordset spec

```
h1-cli dns zone recordset spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone recordset spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli dns zone recordset create

```
h1-cli dns zone recordset create

  undefined [dns_project_zone_recordset_create] 

Synopsis

  $ h1-cli dns zone recordset create <options> 

Options

  --help                   Show help message and exit.            
  --passport-file string   Passport file                          
  --project extractid      project Id                             
  --location extractid     location Id                            
  --zone extractid         zone Id                                
  --name string                                                   
  --type string                                                   
  --ttl string                                                    
  --record nestedvalue[]   Use as content=content,enabled=enabled
```

 h1-cli dns zone recordset list

```
h1-cli dns zone recordset list

  undefined [dns_project_zone_recordset_list] 

Synopsis

  $ h1-cli dns zone recordset list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id
```

 h1-cli dns zone recordset show

```
h1-cli dns zone recordset show

  undefined [dns_project_zone_recordset_get] 

Synopsis

  $ h1-cli dns zone recordset show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --recordset extractid    recordsetId
```

 h1-cli dns zone recordset record

```
h1-cli dns zone recordset record

Synopsis

  $ h1-cli dns zone recordset record <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                       
  create   undefined [dns_project_zone_recordset_record_create] 
  list     undefined [dns_project_zone_recordset_record_list]   
  show     undefined [dns_project_zone_recordset_record_get]
```

 h1-cli dns zone recordset record spec

```
h1-cli dns zone recordset record spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone recordset record spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli dns zone recordset record create

```
h1-cli dns zone recordset record create

  undefined [dns_project_zone_recordset_record_create] 

Synopsis

  $ h1-cli dns zone recordset record create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --recordset extractid    recordsetId                 
  --content string                                     
  --enabled string
```

 h1-cli dns zone recordset record list

```
h1-cli dns zone recordset record list

  undefined [dns_project_zone_recordset_record_list] 

Synopsis

  $ h1-cli dns zone recordset record list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --recordset extractid    recordsetId
```

 h1-cli dns zone recordset record show

```
h1-cli dns zone recordset record show

  undefined [dns_project_zone_recordset_record_get] 

Synopsis

  $ h1-cli dns zone recordset record show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --recordset extractid    recordsetId                 
  --record extractid       recordId
```

 h1-cli dns zone service

```
h1-cli dns zone service

Synopsis

  $ h1-cli dns zone service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [dns_project_zone_service_list] 
  show   undefined [dns_project_zone_service_get]
```

 h1-cli dns zone service spec

```
h1-cli dns zone service spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli dns zone service list

```
h1-cli dns zone service list

  undefined [dns_project_zone_service_list] 

Synopsis

  $ h1-cli dns zone service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id
```

 h1-cli dns zone service show

```
h1-cli dns zone service show

  undefined [dns_project_zone_service_get] 

Synopsis

  $ h1-cli dns zone service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --service extractid      serviceId
```

 h1-cli dns zone tag

```
h1-cli dns zone tag

Synopsis

  $ h1-cli dns zone tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context          
  create   undefined [dns_project_zone_tag_create] 
  list     undefined [dns_project_zone_tag_list]   
  show     undefined [dns_project_zone_tag_get]
```

 h1-cli dns zone tag spec

```
h1-cli dns zone tag spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli dns zone tag create

```
h1-cli dns zone tag create

  undefined [dns_project_zone_tag_create] 

Synopsis

  $ h1-cli dns zone tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli dns zone tag list

```
h1-cli dns zone tag list

  undefined [dns_project_zone_tag_list] 

Synopsis

  $ h1-cli dns zone tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id
```

 h1-cli dns zone tag show

```
h1-cli dns zone tag show

  undefined [dns_project_zone_tag_get] 

Synopsis

  $ h1-cli dns zone tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --tag extractid          tagId
```

 h1-cli dns zone event

```
h1-cli dns zone event

Synopsis

  $ h1-cli dns zone event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context          
  list   undefined [dns_project_zone_event_list]
```

 h1-cli dns zone event spec

```
h1-cli dns zone event spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli dns zone event list

```
h1-cli dns zone event list

  undefined [dns_project_zone_event_list] 

Synopsis

  $ h1-cli dns zone event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli storage

```
h1-cli storage

Synopsis

  $ h1-cli storage <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  disk       Management of disk             
  image      Management of image            
  iso        Management of iso              
  snapshot   Management of snapshot         
  vault      Management of vault
```

 h1-cli storage spec

```
h1-cli storage spec

  Print specification of context 

Synopsis

  $ h1-cli storage spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage disk

```
h1-cli storage disk

Synopsis

  $ h1-cli storage disk <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                   
  create     Create disk [storage_project_disk_create]        
  list       List disk [storage_project_disk_list]            
  show       Returns a single disk [storage_project_disk_get] 
  resize     Action resize [storage_project_disk_resize]      
  transfer   Action transfer [storage_project_disk_transfer]  
  download   Manage downloads of the disk                     
  service    Manage services of the disk                      
  tag        Manage tags of the disk                          
  event      Manage events of the disk
```

 h1-cli storage disk spec

```
h1-cli storage disk spec

  Print specification of context 

Synopsis

  $ h1-cli storage disk spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage disk create

```
h1-cli storage disk create

  Create disk [storage_project_disk_create] 

Synopsis

  $ h1-cli storage disk create <options> 

Options

  --help                       Show help message and exit.                                       
  --passport-file string       Passport file                                                     
  --project extractid          project Id                                                        
  --location extractid         location Id                                                       
  --x-idempotency-key string                                                                     
  --name string                                                                                  
  --service string             Provide URI of billing/service                                    
  --size string                                                                                  
  --source string              Provide URI of storage/disk. Require permissions storage/disk/use 
  --cloud string                                                                                 
  --metadata string                                                                              
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli storage disk list

```
h1-cli storage disk list

  List disk [storage_project_disk_list] 

Synopsis

  $ h1-cli storage disk list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli storage disk show

```
h1-cli storage disk show

  Returns a single disk [storage_project_disk_get] 

Synopsis

  $ h1-cli storage disk show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id
```

 h1-cli storage disk resize

```
h1-cli storage disk resize

  Action resize [storage_project_disk_resize] 

Synopsis

  $ h1-cli storage disk resize <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --disk extractid             disk Id                     
  --x-idempotency-key string                               
  --size string
```

 h1-cli storage disk transfer

```
h1-cli storage disk transfer

  Action transfer [storage_project_disk_transfer] 

Synopsis

  $ h1-cli storage disk transfer <options> 

Options

  --help                       Show help message and exit.                                         
  --passport-file string       Passport file                                                       
  --project extractid          project Id                                                          
  --location extractid         location Id                                                         
  --disk extractid             disk Id                                                             
  --x-idempotency-key string                                                                       
  --project string             Provide URI of iam/project. Require permissions storage/disk/create
```

 h1-cli storage disk download

```
h1-cli storage disk download

Synopsis

  $ h1-cli storage disk download <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                
  list   undefined [storage_project_disk_download_get]
```

 h1-cli storage disk download spec

```
h1-cli storage disk download spec

  Print specification of context 

Synopsis

  $ h1-cli storage disk download spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage disk download list

```
h1-cli storage disk download list

  undefined [storage_project_disk_download_get] 

Synopsis

  $ h1-cli storage disk download list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id
```

 h1-cli storage disk service

```
h1-cli storage disk service

Synopsis

  $ h1-cli storage disk service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                
  list   undefined [storage_project_disk_service_list] 
  show   undefined [storage_project_disk_service_get]
```

 h1-cli storage disk service spec

```
h1-cli storage disk service spec

  Print specification of context 

Synopsis

  $ h1-cli storage disk service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage disk service list

```
h1-cli storage disk service list

  undefined [storage_project_disk_service_list] 

Synopsis

  $ h1-cli storage disk service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id
```

 h1-cli storage disk service show

```
h1-cli storage disk service show

  undefined [storage_project_disk_service_get] 

Synopsis

  $ h1-cli storage disk service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id                     
  --service extractid      serviceId
```

 h1-cli storage disk tag

```
h1-cli storage disk tag

Synopsis

  $ h1-cli storage disk tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context              
  create   undefined [storage_project_disk_tag_create] 
  list     undefined [storage_project_disk_tag_list]   
  show     undefined [storage_project_disk_tag_get]
```

 h1-cli storage disk tag spec

```
h1-cli storage disk tag spec

  Print specification of context 

Synopsis

  $ h1-cli storage disk tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage disk tag create

```
h1-cli storage disk tag create

  undefined [storage_project_disk_tag_create] 

Synopsis

  $ h1-cli storage disk tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id                     
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli storage disk tag list

```
h1-cli storage disk tag list

  undefined [storage_project_disk_tag_list] 

Synopsis

  $ h1-cli storage disk tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id
```

 h1-cli storage disk tag show

```
h1-cli storage disk tag show

  undefined [storage_project_disk_tag_get] 

Synopsis

  $ h1-cli storage disk tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id                     
  --tag extractid          tagId
```

 h1-cli storage disk event

```
h1-cli storage disk event

Synopsis

  $ h1-cli storage disk event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context              
  list   undefined [storage_project_disk_event_list]
```

 h1-cli storage disk event spec

```
h1-cli storage disk event spec

  Print specification of context 

Synopsis

  $ h1-cli storage disk event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage disk event list

```
h1-cli storage disk event list

  undefined [storage_project_disk_event_list] 

Synopsis

  $ h1-cli storage disk event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id                     
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli storage image

```
h1-cli storage image

Synopsis

  $ h1-cli storage image <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                     
  create     Create image [storage_project_image_create]        
  list       List image [storage_project_image_list]            
  show       Returns a single image [storage_project_image_get] 
  transfer   Action transfer [storage_project_image_transfer]   
  service    Manage services of the image                       
  tag        Manage tags of the image                           
  event      Manage events of the image
```

 h1-cli storage image spec

```
h1-cli storage image spec

  Print specification of context 

Synopsis

  $ h1-cli storage image spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage image create

```
h1-cli storage image create

  Create image [storage_project_image_create] 

Synopsis

  $ h1-cli storage image create <options> 

Options

  --help                       Show help message and exit.                                             
  --passport-file string       Passport file                                                           
  --project extractid          project Id                                                              
  --location extractid         location Id                                                             
  --x-idempotency-key string                                                                           
  --name string                                                                                        
  --service string             Provide URI of billing/service                                          
  --vm string                  Provide URI of compute/vm. Require permissions compute/vm/use           
  --replica string             Provide URI of compute/replica. Require permissions compute/replica/use 
  --description string                                                                                 
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli storage image list

```
h1-cli storage image list

  List image [storage_project_image_list] 

Synopsis

  $ h1-cli storage image list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli storage image show

```
h1-cli storage image show

  Returns a single image [storage_project_image_get] 

Synopsis

  $ h1-cli storage image show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id
```

 h1-cli storage image transfer

```
h1-cli storage image transfer

  Action transfer [storage_project_image_transfer] 

Synopsis

  $ h1-cli storage image transfer <options> 

Options

  --help                       Show help message and exit.                                          
  --passport-file string       Passport file                                                        
  --project extractid          project Id                                                           
  --location extractid         location Id                                                          
  --image extractid            image Id                                                             
  --x-idempotency-key string                                                                        
  --project string             Provide URI of iam/project. Require permissions storage/image/create
```

 h1-cli storage image service

```
h1-cli storage image service

Synopsis

  $ h1-cli storage image service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [storage_project_image_service_list] 
  show   undefined [storage_project_image_service_get]
```

 h1-cli storage image service spec

```
h1-cli storage image service spec

  Print specification of context 

Synopsis

  $ h1-cli storage image service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage image service list

```
h1-cli storage image service list

  undefined [storage_project_image_service_list] 

Synopsis

  $ h1-cli storage image service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id
```

 h1-cli storage image service show

```
h1-cli storage image service show

  undefined [storage_project_image_service_get] 

Synopsis

  $ h1-cli storage image service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id                    
  --service extractid      serviceId
```

 h1-cli storage image tag

```
h1-cli storage image tag

Synopsis

  $ h1-cli storage image tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [storage_project_image_tag_create] 
  list     undefined [storage_project_image_tag_list]   
  show     undefined [storage_project_image_tag_get]
```

 h1-cli storage image tag spec

```
h1-cli storage image tag spec

  Print specification of context 

Synopsis

  $ h1-cli storage image tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage image tag create

```
h1-cli storage image tag create

  undefined [storage_project_image_tag_create] 

Synopsis

  $ h1-cli storage image tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id                    
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli storage image tag list

```
h1-cli storage image tag list

  undefined [storage_project_image_tag_list] 

Synopsis

  $ h1-cli storage image tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id
```

 h1-cli storage image tag show

```
h1-cli storage image tag show

  undefined [storage_project_image_tag_get] 

Synopsis

  $ h1-cli storage image tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id                    
  --tag extractid          tagId
```

 h1-cli storage image event

```
h1-cli storage image event

Synopsis

  $ h1-cli storage image event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [storage_project_image_event_list]
```

 h1-cli storage image event spec

```
h1-cli storage image event spec

  Print specification of context 

Synopsis

  $ h1-cli storage image event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage image event list

```
h1-cli storage image event list

  undefined [storage_project_image_event_list] 

Synopsis

  $ h1-cli storage image event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id                    
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli storage iso

```
h1-cli storage iso

Synopsis

  $ h1-cli storage iso <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                 
  create     Create iso [storage_project_iso_create]        
  list       List iso [storage_project_iso_list]            
  show       Returns a single iso [storage_project_iso_get] 
  transfer   Action transfer [storage_project_iso_transfer] 
  service    Manage services of the iso                     
  tag        Manage tags of the iso                         
  event      Manage events of the iso
```

 h1-cli storage iso spec

```
h1-cli storage iso spec

  Print specification of context 

Synopsis

  $ h1-cli storage iso spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage iso create

```
h1-cli storage iso create

  Create iso [storage_project_iso_create] 

Synopsis

  $ h1-cli storage iso create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --size string                                               
  --source string                                             
  --cloud string                                              
  --metadata string                                           
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli storage iso list

```
h1-cli storage iso list

  List iso [storage_project_iso_list] 

Synopsis

  $ h1-cli storage iso list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli storage iso show

```
h1-cli storage iso show

  Returns a single iso [storage_project_iso_get] 

Synopsis

  $ h1-cli storage iso show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id
```

 h1-cli storage iso transfer

```
h1-cli storage iso transfer

  Action transfer [storage_project_iso_transfer] 

Synopsis

  $ h1-cli storage iso transfer <options> 

Options

  --help                       Show help message and exit.                                        
  --passport-file string       Passport file                                                      
  --project extractid          project Id                                                         
  --location extractid         location Id                                                        
  --iso extractid              iso Id                                                             
  --x-idempotency-key string                                                                      
  --project string             Provide URI of iam/project. Require permissions storage/iso/create
```

 h1-cli storage iso service

```
h1-cli storage iso service

Synopsis

  $ h1-cli storage iso service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [storage_project_iso_service_list] 
  show   undefined [storage_project_iso_service_get]
```

 h1-cli storage iso service spec

```
h1-cli storage iso service spec

  Print specification of context 

Synopsis

  $ h1-cli storage iso service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage iso service list

```
h1-cli storage iso service list

  undefined [storage_project_iso_service_list] 

Synopsis

  $ h1-cli storage iso service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id
```

 h1-cli storage iso service show

```
h1-cli storage iso service show

  undefined [storage_project_iso_service_get] 

Synopsis

  $ h1-cli storage iso service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id                      
  --service extractid      serviceId
```

 h1-cli storage iso tag

```
h1-cli storage iso tag

Synopsis

  $ h1-cli storage iso tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context             
  create   undefined [storage_project_iso_tag_create] 
  list     undefined [storage_project_iso_tag_list]   
  show     undefined [storage_project_iso_tag_get]
```

 h1-cli storage iso tag spec

```
h1-cli storage iso tag spec

  Print specification of context 

Synopsis

  $ h1-cli storage iso tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage iso tag create

```
h1-cli storage iso tag create

  undefined [storage_project_iso_tag_create] 

Synopsis

  $ h1-cli storage iso tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id                      
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli storage iso tag list

```
h1-cli storage iso tag list

  undefined [storage_project_iso_tag_list] 

Synopsis

  $ h1-cli storage iso tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id
```

 h1-cli storage iso tag show

```
h1-cli storage iso tag show

  undefined [storage_project_iso_tag_get] 

Synopsis

  $ h1-cli storage iso tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id                      
  --tag extractid          tagId
```

 h1-cli storage iso event

```
h1-cli storage iso event

Synopsis

  $ h1-cli storage iso event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context             
  list   undefined [storage_project_iso_event_list]
```

 h1-cli storage iso event spec

```
h1-cli storage iso event spec

  Print specification of context 

Synopsis

  $ h1-cli storage iso event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage iso event list

```
h1-cli storage iso event list

  undefined [storage_project_iso_event_list] 

Synopsis

  $ h1-cli storage iso event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id                      
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli storage snapshot

```
h1-cli storage snapshot

Synopsis

  $ h1-cli storage snapshot <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                           
  create    Create snapshot [storage_project_snapshot_create]        
  list      List snapshot [storage_project_snapshot_list]            
  show      Returns a single snapshot [storage_project_snapshot_get] 
  service   Manage services of the snapshot                          
  tag       Manage tags of the snapshot                              
  event     Manage events of the snapshot
```

 h1-cli storage snapshot spec

```
h1-cli storage snapshot spec

  Print specification of context 

Synopsis

  $ h1-cli storage snapshot spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage snapshot create

```
h1-cli storage snapshot create

  Create snapshot [storage_project_snapshot_create] 

Synopsis

  $ h1-cli storage snapshot create <options> 

Options

  --help                       Show help message and exit.                                                   
  --passport-file string       Passport file                                                                 
  --project extractid          project Id                                                                    
  --location extractid         location Id                                                                   
  --x-idempotency-key string                                                                                 
  --name string                                                                                              
  --service string             Provide URI of billing/service                                                
  --vault string               Provide URI of storage/vault. Require permissions                             
                               storage/vault.snapshot/create                                                 
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli storage snapshot list

```
h1-cli storage snapshot list

  List snapshot [storage_project_snapshot_list] 

Synopsis

  $ h1-cli storage snapshot list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --vault string           Filter by vault             
  --tag string             Filter by tag
```

 h1-cli storage snapshot show

```
h1-cli storage snapshot show

  Returns a single snapshot [storage_project_snapshot_get] 

Synopsis

  $ h1-cli storage snapshot show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id
```

 h1-cli storage snapshot service

```
h1-cli storage snapshot service

Synopsis

  $ h1-cli storage snapshot service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [storage_project_snapshot_service_list] 
  show   undefined [storage_project_snapshot_service_get]
```

 h1-cli storage snapshot service spec

```
h1-cli storage snapshot service spec

  Print specification of context 

Synopsis

  $ h1-cli storage snapshot service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage snapshot service list

```
h1-cli storage snapshot service list

  undefined [storage_project_snapshot_service_list] 

Synopsis

  $ h1-cli storage snapshot service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id
```

 h1-cli storage snapshot service show

```
h1-cli storage snapshot service show

  undefined [storage_project_snapshot_service_get] 

Synopsis

  $ h1-cli storage snapshot service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id                 
  --service extractid      serviceId
```

 h1-cli storage snapshot tag

```
h1-cli storage snapshot tag

Synopsis

  $ h1-cli storage snapshot tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                  
  create   undefined [storage_project_snapshot_tag_create] 
  list     undefined [storage_project_snapshot_tag_list]   
  show     undefined [storage_project_snapshot_tag_get]
```

 h1-cli storage snapshot tag spec

```
h1-cli storage snapshot tag spec

  Print specification of context 

Synopsis

  $ h1-cli storage snapshot tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage snapshot tag create

```
h1-cli storage snapshot tag create

  undefined [storage_project_snapshot_tag_create] 

Synopsis

  $ h1-cli storage snapshot tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id                 
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli storage snapshot tag list

```
h1-cli storage snapshot tag list

  undefined [storage_project_snapshot_tag_list] 

Synopsis

  $ h1-cli storage snapshot tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id
```

 h1-cli storage snapshot tag show

```
h1-cli storage snapshot tag show

  undefined [storage_project_snapshot_tag_get] 

Synopsis

  $ h1-cli storage snapshot tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id                 
  --tag extractid          tagId
```

 h1-cli storage snapshot event

```
h1-cli storage snapshot event

Synopsis

  $ h1-cli storage snapshot event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   undefined [storage_project_snapshot_event_list]
```

 h1-cli storage snapshot event spec

```
h1-cli storage snapshot event spec

  Print specification of context 

Synopsis

  $ h1-cli storage snapshot event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage snapshot event list

```
h1-cli storage snapshot event list

  undefined [storage_project_snapshot_event_list] 

Synopsis

  $ h1-cli storage snapshot event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli storage vault

```
h1-cli storage vault

Synopsis

  $ h1-cli storage vault <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                     
  create       Create vault [storage_project_vault_create]        
  list         List vault [storage_project_vault_list]            
  show         Returns a single vault [storage_project_vault_get] 
  start        Action start [storage_project_vault_start]         
  stop         Action stop [storage_project_vault_stop]           
  resize       Action resize [storage_project_vault_resize]       
  snapshot     Action snapshot [storage_project_vault_snapshot]   
  credential   Manage credentials of the vault                    
  service      Manage services of the vault                       
  tag          Manage tags of the vault                           
  event        Manage events of the vault
```

 h1-cli storage vault spec

```
h1-cli storage vault spec

  Print specification of context 

Synopsis

  $ h1-cli storage vault spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage vault create

```
h1-cli storage vault create

  Create vault [storage_project_vault_create] 

Synopsis

  $ h1-cli storage vault create <options> 

Options

  --help                       Show help message and exit.                                                   
  --passport-file string       Passport file                                                                 
  --project extractid          project Id                                                                    
  --location extractid         location Id                                                                   
  --x-idempotency-key string                                                                                 
  --name string                                                                                              
  --service string             Provide URI of billing/service                                                
  --size string                                                                                              
  --snapshot string            Provide URI of storage/snapshot. Require permissions                          
                               storage/vault.snapshot/use                                                    
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli storage vault list

```
h1-cli storage vault list

  List vault [storage_project_vault_list] 

Synopsis

  $ h1-cli storage vault list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli storage vault show

```
h1-cli storage vault show

  Returns a single vault [storage_project_vault_get] 

Synopsis

  $ h1-cli storage vault show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id
```

 h1-cli storage vault start

```
h1-cli storage vault start

  Action start [storage_project_vault_start] 

Synopsis

  $ h1-cli storage vault start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vault extractid            vault Id                    
  --x-idempotency-key string
```

 h1-cli storage vault stop

```
h1-cli storage vault stop

  Action stop [storage_project_vault_stop] 

Synopsis

  $ h1-cli storage vault stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vault extractid            vault Id                    
  --x-idempotency-key string
```

 h1-cli storage vault resize

```
h1-cli storage vault resize

  Action resize [storage_project_vault_resize] 

Synopsis

  $ h1-cli storage vault resize <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vault extractid            vault Id                    
  --x-idempotency-key string                               
  --size string
```

 h1-cli storage vault snapshot

```
h1-cli storage vault snapshot

  Action snapshot [storage_project_vault_snapshot] 

Synopsis

  $ h1-cli storage vault snapshot <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --vault extractid            vault Id                       
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service
```

 h1-cli storage vault credential

```
h1-cli storage vault credential

Synopsis

  $ h1-cli storage vault credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                      
  create   undefined [storage_project_vault_credential_create] 
  list     undefined [storage_project_vault_credential_list]
```

 h1-cli storage vault credential spec

```
h1-cli storage vault credential spec

  Print specification of context 

Synopsis

  $ h1-cli storage vault credential spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage vault credential create

```
h1-cli storage vault credential create

  undefined [storage_project_vault_credential_create] 

Synopsis

  $ h1-cli storage vault credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id                    
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

 h1-cli storage vault credential list

```
h1-cli storage vault credential list

  undefined [storage_project_vault_credential_list] 

Synopsis

  $ h1-cli storage vault credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id
```

 h1-cli storage vault service

```
h1-cli storage vault service

Synopsis

  $ h1-cli storage vault service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [storage_project_vault_service_list] 
  show   undefined [storage_project_vault_service_get]
```

 h1-cli storage vault service spec

```
h1-cli storage vault service spec

  Print specification of context 

Synopsis

  $ h1-cli storage vault service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage vault service list

```
h1-cli storage vault service list

  undefined [storage_project_vault_service_list] 

Synopsis

  $ h1-cli storage vault service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id
```

 h1-cli storage vault service show

```
h1-cli storage vault service show

  undefined [storage_project_vault_service_get] 

Synopsis

  $ h1-cli storage vault service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id                    
  --service extractid      serviceId
```

 h1-cli storage vault tag

```
h1-cli storage vault tag

Synopsis

  $ h1-cli storage vault tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [storage_project_vault_tag_create] 
  list     undefined [storage_project_vault_tag_list]   
  show     undefined [storage_project_vault_tag_get]
```

 h1-cli storage vault tag spec

```
h1-cli storage vault tag spec

  Print specification of context 

Synopsis

  $ h1-cli storage vault tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage vault tag create

```
h1-cli storage vault tag create

  undefined [storage_project_vault_tag_create] 

Synopsis

  $ h1-cli storage vault tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id                    
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli storage vault tag list

```
h1-cli storage vault tag list

  undefined [storage_project_vault_tag_list] 

Synopsis

  $ h1-cli storage vault tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id
```

 h1-cli storage vault tag show

```
h1-cli storage vault tag show

  undefined [storage_project_vault_tag_get] 

Synopsis

  $ h1-cli storage vault tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id                    
  --tag extractid          tagId
```

 h1-cli storage vault event

```
h1-cli storage vault event

Synopsis

  $ h1-cli storage vault event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [storage_project_vault_event_list]
```

 h1-cli storage vault event spec

```
h1-cli storage vault event spec

  Print specification of context 

Synopsis

  $ h1-cli storage vault event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli storage vault event list

```
h1-cli storage vault event list

  undefined [storage_project_vault_event_list] 

Synopsis

  $ h1-cli storage vault event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id                    
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli networking

```
h1-cli networking

Synopsis

  $ h1-cli networking <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  firewall   Management of firewall         
  ip         Management of ip               
  netadp     Management of netadp           
  netgw      Management of netgw            
  network    Management of network
```

 h1-cli networking spec

```
h1-cli networking spec

  Print specification of context 

Synopsis

  $ h1-cli networking spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking firewall

```
h1-cli networking firewall

Synopsis

  $ h1-cli networking firewall <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                              
  create     Create firewall [networking_project_firewall_create]        
  list       List firewall [networking_project_firewall_list]            
  show       Returns a single firewall [networking_project_firewall_get] 
  transfer   Action transfer [networking_project_firewall_transfer]      
  ingress    Manage ingresses of the firewall                            
  egress     Manage egresses of the firewall                             
  service    Manage services of the firewall                             
  tag        Manage tags of the firewall                                 
  event      Manage events of the firewall
```

 h1-cli networking firewall spec

```
h1-cli networking firewall spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking firewall create

```
h1-cli networking firewall create

  Create firewall [networking_project_firewall_create] 

Synopsis

  $ h1-cli networking firewall create <options> 

Options

  --help                       Show help message and exit.                                                                 
  --passport-file string       Passport file                                                                               
  --project extractid          project Id                                                                                  
  --location extractid         location Id                                                                                 
  --x-idempotency-key string                                                                                               
  --name string                                                                                                            
  --service string             Provide URI of billing/service                                                              
  --ingress nestedvalue[]      Use as                                                                                      
                               name=name,action=action,priority=priority,filter=filter,external=external,internal=internal 
  --egress nestedvalue[]       Use as                                                                                      
                               name=name,action=action,priority=priority,filter=filter,external=external,internal=internal 
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli networking firewall list

```
h1-cli networking firewall list

  List firewall [networking_project_firewall_list] 

Synopsis

  $ h1-cli networking firewall list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli networking firewall show

```
h1-cli networking firewall show

  Returns a single firewall [networking_project_firewall_get] 

Synopsis

  $ h1-cli networking firewall show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id
```

 h1-cli networking firewall transfer

```
h1-cli networking firewall transfer

  Action transfer [networking_project_firewall_transfer] 

Synopsis

  $ h1-cli networking firewall transfer <options> 

Options

  --help                       Show help message and exit.                                                
  --passport-file string       Passport file                                                              
  --project extractid          project Id                                                                 
  --location extractid         location Id                                                                
  --firewall extractid         firewall Id                                                                
  --x-idempotency-key string                                                                              
  --project string             Provide URI of iam/project. Require permissions networking/firewall/create
```

 h1-cli networking firewall ingress

```
h1-cli networking firewall ingress

Synopsis

  $ h1-cli networking firewall ingress <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                         
  create   undefined [networking_project_firewall_ingress_create] 
  list     undefined [networking_project_firewall_ingress_list]
```

 h1-cli networking firewall ingress spec

```
h1-cli networking firewall ingress spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall ingress spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking firewall ingress create

```
h1-cli networking firewall ingress create

  undefined [networking_project_firewall_ingress_create] 

Synopsis

  $ h1-cli networking firewall ingress create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --name string                                        
  --action string                                      
  --priority string                                    
  --filter string[]                                    
  --external string[]                                  
  --internal string[]
```

 h1-cli networking firewall ingress list

```
h1-cli networking firewall ingress list

  undefined [networking_project_firewall_ingress_list] 

Synopsis

  $ h1-cli networking firewall ingress list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id
```

 h1-cli networking firewall egress

```
h1-cli networking firewall egress

Synopsis

  $ h1-cli networking firewall egress <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                        
  create   undefined [networking_project_firewall_egress_create] 
  list     undefined [networking_project_firewall_egress_list]
```

 h1-cli networking firewall egress spec

```
h1-cli networking firewall egress spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall egress spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking firewall egress create

```
h1-cli networking firewall egress create

  undefined [networking_project_firewall_egress_create] 

Synopsis

  $ h1-cli networking firewall egress create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --name string                                        
  --action string                                      
  --priority string                                    
  --filter string[]                                    
  --external string[]                                  
  --internal string[]
```

 h1-cli networking firewall egress list

```
h1-cli networking firewall egress list

  undefined [networking_project_firewall_egress_list] 

Synopsis

  $ h1-cli networking firewall egress list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id
```

 h1-cli networking firewall service

```
h1-cli networking firewall service

Synopsis

  $ h1-cli networking firewall service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                       
  list   undefined [networking_project_firewall_service_list] 
  show   undefined [networking_project_firewall_service_get]
```

 h1-cli networking firewall service spec

```
h1-cli networking firewall service spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking firewall service list

```
h1-cli networking firewall service list

  undefined [networking_project_firewall_service_list] 

Synopsis

  $ h1-cli networking firewall service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id
```

 h1-cli networking firewall service show

```
h1-cli networking firewall service show

  undefined [networking_project_firewall_service_get] 

Synopsis

  $ h1-cli networking firewall service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --service extractid      serviceId
```

 h1-cli networking firewall tag

```
h1-cli networking firewall tag

Synopsis

  $ h1-cli networking firewall tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                     
  create   undefined [networking_project_firewall_tag_create] 
  list     undefined [networking_project_firewall_tag_list]   
  show     undefined [networking_project_firewall_tag_get]
```

 h1-cli networking firewall tag spec

```
h1-cli networking firewall tag spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking firewall tag create

```
h1-cli networking firewall tag create

  undefined [networking_project_firewall_tag_create] 

Synopsis

  $ h1-cli networking firewall tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli networking firewall tag list

```
h1-cli networking firewall tag list

  undefined [networking_project_firewall_tag_list] 

Synopsis

  $ h1-cli networking firewall tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id
```

 h1-cli networking firewall tag show

```
h1-cli networking firewall tag show

  undefined [networking_project_firewall_tag_get] 

Synopsis

  $ h1-cli networking firewall tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --tag extractid          tagId
```

 h1-cli networking firewall event

```
h1-cli networking firewall event

Synopsis

  $ h1-cli networking firewall event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                     
  list   undefined [networking_project_firewall_event_list]
```

 h1-cli networking firewall event spec

```
h1-cli networking firewall event spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking firewall event list

```
h1-cli networking firewall event list

  undefined [networking_project_firewall_event_list] 

Synopsis

  $ h1-cli networking firewall event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli networking ip

```
h1-cli networking ip

Synopsis

  $ h1-cli networking ip <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec           Print specification of context                           
  create         Create ip [networking_project_ip_create]                 
  list           List ip [networking_project_ip_list]                     
  show           Returns a single ip [networking_project_ip_get]          
  allocate       Action allocate [networking_project_ip_allocate]         
  associate      Action associate [networking_project_ip_associate]       
  disassociate   Action disassociate [networking_project_ip_disassociate] 
  transfer       Action transfer [networking_project_ip_transfer]         
  service        Manage services of the ip                                
  tag            Manage tags of the ip                                    
  event          Manage events of the ip
```

 h1-cli networking ip spec

```
h1-cli networking ip spec

  Print specification of context 

Synopsis

  $ h1-cli networking ip spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking ip create

```
h1-cli networking ip create

  Create ip [networking_project_ip_create] 

Synopsis

  $ h1-cli networking ip create <options> 

Options

  --help                       Show help message and exit.                                                   
  --passport-file string       Passport file                                                                 
  --project extractid          project Id                                                                    
  --location extractid         location Id                                                                   
  --x-idempotency-key string                                                                                 
  --network string             Provide URI of networking/network. Require permissions networking/network/use 
  --ptr-record string                                                                                        
  --address string                                                                                           
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli networking ip list

```
h1-cli networking ip list

  List ip [networking_project_ip_list] 

Synopsis

  $ h1-cli networking ip list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network string         Filter by network           
  --type string            Filter by type              
  --tag string             Filter by tag
```

 h1-cli networking ip show

```
h1-cli networking ip show

  Returns a single ip [networking_project_ip_get] 

Synopsis

  $ h1-cli networking ip show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id
```

 h1-cli networking ip allocate

```
h1-cli networking ip allocate

  Action allocate [networking_project_ip_allocate] 

Synopsis

  $ h1-cli networking ip allocate <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --ip extractid               ip Id                       
  --x-idempotency-key string
```

 h1-cli networking ip associate

```
h1-cli networking ip associate

  Action associate [networking_project_ip_associate] 

Synopsis

  $ h1-cli networking ip associate <options> 

Options

  --help                       Show help message and exit.                                         
  --passport-file string       Passport file                                                       
  --project extractid          project Id                                                          
  --location extractid         location Id                                                         
  --ip extractid               ip Id                                                               
  --x-idempotency-key string                                                                       
  --ip string                  Provide URI of networking/ip. Require permissions networking/ip/use
```

 h1-cli networking ip disassociate

```
h1-cli networking ip disassociate

  Action disassociate [networking_project_ip_disassociate] 

Synopsis

  $ h1-cli networking ip disassociate <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --ip extractid               ip Id                       
  --x-idempotency-key string
```

 h1-cli networking ip transfer

```
h1-cli networking ip transfer

  Action transfer [networking_project_ip_transfer] 

Synopsis

  $ h1-cli networking ip transfer <options> 

Options

  --help                       Show help message and exit.                                          
  --passport-file string       Passport file                                                        
  --project extractid          project Id                                                           
  --location extractid         location Id                                                          
  --ip extractid               ip Id                                                                
  --x-idempotency-key string                                                                        
  --project string             Provide URI of iam/project. Require permissions networking/ip/create
```

 h1-cli networking ip service

```
h1-cli networking ip service

Synopsis

  $ h1-cli networking ip service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [networking_project_ip_service_list] 
  show   undefined [networking_project_ip_service_get]
```

 h1-cli networking ip service spec

```
h1-cli networking ip service spec

  Print specification of context 

Synopsis

  $ h1-cli networking ip service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking ip service list

```
h1-cli networking ip service list

  undefined [networking_project_ip_service_list] 

Synopsis

  $ h1-cli networking ip service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id
```

 h1-cli networking ip service show

```
h1-cli networking ip service show

  undefined [networking_project_ip_service_get] 

Synopsis

  $ h1-cli networking ip service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id                       
  --service extractid      serviceId
```

 h1-cli networking ip tag

```
h1-cli networking ip tag

Synopsis

  $ h1-cli networking ip tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [networking_project_ip_tag_create] 
  list     undefined [networking_project_ip_tag_list]   
  show     undefined [networking_project_ip_tag_get]
```

 h1-cli networking ip tag spec

```
h1-cli networking ip tag spec

  Print specification of context 

Synopsis

  $ h1-cli networking ip tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking ip tag create

```
h1-cli networking ip tag create

  undefined [networking_project_ip_tag_create] 

Synopsis

  $ h1-cli networking ip tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id                       
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli networking ip tag list

```
h1-cli networking ip tag list

  undefined [networking_project_ip_tag_list] 

Synopsis

  $ h1-cli networking ip tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id
```

 h1-cli networking ip tag show

```
h1-cli networking ip tag show

  undefined [networking_project_ip_tag_get] 

Synopsis

  $ h1-cli networking ip tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id                       
  --tag extractid          tagId
```

 h1-cli networking ip event

```
h1-cli networking ip event

Synopsis

  $ h1-cli networking ip event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [networking_project_ip_event_list]
```

 h1-cli networking ip event spec

```
h1-cli networking ip event spec

  Print specification of context 

Synopsis

  $ h1-cli networking ip event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking ip event list

```
h1-cli networking ip event list

  undefined [networking_project_ip_event_list] 

Synopsis

  $ h1-cli networking ip event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id                       
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli networking netadp

```
h1-cli networking netadp

Synopsis

  $ h1-cli networking netadp <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                          
  list      List netadp [networking_project_netadp_list]            
  show      Returns a single netadp [networking_project_netadp_get] 
  service   Manage services of the netadp                           
  tag       Manage tags of the netadp                               
  event     Manage events of the netadp
```

 h1-cli networking netadp spec

```
h1-cli networking netadp spec

  Print specification of context 

Synopsis

  $ h1-cli networking netadp spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking netadp list

```
h1-cli networking netadp list

  List netadp [networking_project_netadp_list] 

Synopsis

  $ h1-cli networking netadp list <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --assigned.resource string   Filter by assigned.resource 
  --assigned.id string         Filter by assigned.id
```

 h1-cli networking netadp show

```
h1-cli networking netadp show

  Returns a single netadp [networking_project_netadp_get] 

Synopsis

  $ h1-cli networking netadp show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id
```

 h1-cli networking netadp service

```
h1-cli networking netadp service

Synopsis

  $ h1-cli networking netadp service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                     
  list   undefined [networking_project_netadp_service_list] 
  show   undefined [networking_project_netadp_service_get]
```

 h1-cli networking netadp service spec

```
h1-cli networking netadp service spec

  Print specification of context 

Synopsis

  $ h1-cli networking netadp service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking netadp service list

```
h1-cli networking netadp service list

  undefined [networking_project_netadp_service_list] 

Synopsis

  $ h1-cli networking netadp service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id
```

 h1-cli networking netadp service show

```
h1-cli networking netadp service show

  undefined [networking_project_netadp_service_get] 

Synopsis

  $ h1-cli networking netadp service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id                   
  --service extractid      serviceId
```

 h1-cli networking netadp tag

```
h1-cli networking netadp tag

Synopsis

  $ h1-cli networking netadp tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [networking_project_netadp_tag_create] 
  list     undefined [networking_project_netadp_tag_list]   
  show     undefined [networking_project_netadp_tag_get]
```

 h1-cli networking netadp tag spec

```
h1-cli networking netadp tag spec

  Print specification of context 

Synopsis

  $ h1-cli networking netadp tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking netadp tag create

```
h1-cli networking netadp tag create

  undefined [networking_project_netadp_tag_create] 

Synopsis

  $ h1-cli networking netadp tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id                   
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli networking netadp tag list

```
h1-cli networking netadp tag list

  undefined [networking_project_netadp_tag_list] 

Synopsis

  $ h1-cli networking netadp tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id
```

 h1-cli networking netadp tag show

```
h1-cli networking netadp tag show

  undefined [networking_project_netadp_tag_get] 

Synopsis

  $ h1-cli networking netadp tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id                   
  --tag extractid          tagId
```

 h1-cli networking netadp event

```
h1-cli networking netadp event

Synopsis

  $ h1-cli networking netadp event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [networking_project_netadp_event_list]
```

 h1-cli networking netadp event spec

```
h1-cli networking netadp event spec

  Print specification of context 

Synopsis

  $ h1-cli networking netadp event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking netadp event list

```
h1-cli networking netadp event list

  undefined [networking_project_netadp_event_list] 

Synopsis

  $ h1-cli networking netadp event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id                   
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli networking netgw

```
h1-cli networking netgw

Synopsis

  $ h1-cli networking netgw <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                        
  create    Create netgw [networking_project_netgw_create]        
  list      List netgw [networking_project_netgw_list]            
  show      Returns a single netgw [networking_project_netgw_get] 
  attach    Action attach [networking_project_netgw_attach]       
  detach    Action detach [networking_project_netgw_detach]       
  service   Manage services of the netgw                          
  tag       Manage tags of the netgw                              
  event     Manage events of the netgw
```

 h1-cli networking netgw spec

```
h1-cli networking netgw spec

  Print specification of context 

Synopsis

  $ h1-cli networking netgw spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking netgw create

```
h1-cli networking netgw create

  Create netgw [networking_project_netgw_create] 

Synopsis

  $ h1-cli networking netgw create <options> 

Options

  --help                       Show help message and exit.  
  --passport-file string       Passport file                
  --project extractid          project Id                   
  --location extractid         location Id                  
  --x-idempotency-key string                                
  --name string                                             
  --public string                                           
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli networking netgw list

```
h1-cli networking netgw list

  List netgw [networking_project_netgw_list] 

Synopsis

  $ h1-cli networking netgw list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli networking netgw show

```
h1-cli networking netgw show

  Returns a single netgw [networking_project_netgw_get] 

Synopsis

  $ h1-cli networking netgw show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id
```

 h1-cli networking netgw attach

```
h1-cli networking netgw attach

  Action attach [networking_project_netgw_attach] 

Synopsis

  $ h1-cli networking netgw attach <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --netgw extractid            netgw Id                    
  --x-idempotency-key string                               
  --private string
```

 h1-cli networking netgw detach

```
h1-cli networking netgw detach

  Action detach [networking_project_netgw_detach] 

Synopsis

  $ h1-cli networking netgw detach <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --netgw extractid            netgw Id                    
  --x-idempotency-key string
```

 h1-cli networking netgw service

```
h1-cli networking netgw service

Synopsis

  $ h1-cli networking netgw service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [networking_project_netgw_service_list] 
  show   undefined [networking_project_netgw_service_get]
```

 h1-cli networking netgw service spec

```
h1-cli networking netgw service spec

  Print specification of context 

Synopsis

  $ h1-cli networking netgw service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking netgw service list

```
h1-cli networking netgw service list

  undefined [networking_project_netgw_service_list] 

Synopsis

  $ h1-cli networking netgw service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id
```

 h1-cli networking netgw service show

```
h1-cli networking netgw service show

  undefined [networking_project_netgw_service_get] 

Synopsis

  $ h1-cli networking netgw service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id                    
  --service extractid      serviceId
```

 h1-cli networking netgw tag

```
h1-cli networking netgw tag

Synopsis

  $ h1-cli networking netgw tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                  
  create   undefined [networking_project_netgw_tag_create] 
  list     undefined [networking_project_netgw_tag_list]   
  show     undefined [networking_project_netgw_tag_get]
```

 h1-cli networking netgw tag spec

```
h1-cli networking netgw tag spec

  Print specification of context 

Synopsis

  $ h1-cli networking netgw tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking netgw tag create

```
h1-cli networking netgw tag create

  undefined [networking_project_netgw_tag_create] 

Synopsis

  $ h1-cli networking netgw tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id                    
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli networking netgw tag list

```
h1-cli networking netgw tag list

  undefined [networking_project_netgw_tag_list] 

Synopsis

  $ h1-cli networking netgw tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id
```

 h1-cli networking netgw tag show

```
h1-cli networking netgw tag show

  undefined [networking_project_netgw_tag_get] 

Synopsis

  $ h1-cli networking netgw tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id                    
  --tag extractid          tagId
```

 h1-cli networking netgw event

```
h1-cli networking netgw event

Synopsis

  $ h1-cli networking netgw event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   undefined [networking_project_netgw_event_list]
```

 h1-cli networking netgw event spec

```
h1-cli networking netgw event spec

  Print specification of context 

Synopsis

  $ h1-cli networking netgw event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking netgw event list

```
h1-cli networking netgw event list

  undefined [networking_project_netgw_event_list] 

Synopsis

  $ h1-cli networking netgw event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id                    
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli networking network

```
h1-cli networking network

Synopsis

  $ h1-cli networking network <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                            
  create    Create network [networking_project_network_create]        
  list      List network [networking_project_network_list]            
  show      Returns a single network [networking_project_network_get] 
  ip        Manage ips of the network                                 
  service   Manage services of the network                            
  tag       Manage tags of the network                                
  event     Manage events of the network
```

 h1-cli networking network spec

```
h1-cli networking network spec

  Print specification of context 

Synopsis

  $ h1-cli networking network spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking network create

```
h1-cli networking network create

  Create network [networking_project_network_create] 

Synopsis

  $ h1-cli networking network create <options> 

Options

  --help                       Show help message and exit.  
  --passport-file string       Passport file                
  --project extractid          project Id                   
  --location extractid         location Id                  
  --x-idempotency-key string                                
  --name string                                             
  --address string                                          
  --gateway string                                          
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli networking network list

```
h1-cli networking network list

  List network [networking_project_network_list] 

Synopsis

  $ h1-cli networking network list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli networking network show

```
h1-cli networking network show

  Returns a single network [networking_project_network_get] 

Synopsis

  $ h1-cli networking network show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id
```

 h1-cli networking network ip

```
h1-cli networking network ip

Synopsis

  $ h1-cli networking network ip <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [networking_project_network_ip_create] 
  list     undefined [networking_project_network_ip_list]   
  show     undefined [networking_project_network_ip_get]
```

 h1-cli networking network ip spec

```
h1-cli networking network ip spec

  Print specification of context 

Synopsis

  $ h1-cli networking network ip spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking network ip create

```
h1-cli networking network ip create

  undefined [networking_project_network_ip_create] 

Synopsis

  $ h1-cli networking network ip create <options> 

Options

  --help                   Show help message and exit.  
  --passport-file string   Passport file                
  --project extractid      project Id                   
  --location extractid     location Id                  
  --network extractid      network Id                   
  --address string                                      
  --tag nestedvalue[]      Use as value=value,name=name
```

 h1-cli networking network ip list

```
h1-cli networking network ip list

  undefined [networking_project_network_ip_list] 

Synopsis

  $ h1-cli networking network ip list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id
```

 h1-cli networking network ip show

```
h1-cli networking network ip show

  undefined [networking_project_network_ip_get] 

Synopsis

  $ h1-cli networking network ip show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id                  
  --ip extractid           ipId
```

 h1-cli networking network service

```
h1-cli networking network service

Synopsis

  $ h1-cli networking network service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                      
  list   undefined [networking_project_network_service_list] 
  show   undefined [networking_project_network_service_get]
```

 h1-cli networking network service spec

```
h1-cli networking network service spec

  Print specification of context 

Synopsis

  $ h1-cli networking network service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking network service list

```
h1-cli networking network service list

  undefined [networking_project_network_service_list] 

Synopsis

  $ h1-cli networking network service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id
```

 h1-cli networking network service show

```
h1-cli networking network service show

  undefined [networking_project_network_service_get] 

Synopsis

  $ h1-cli networking network service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id                  
  --service extractid      serviceId
```

 h1-cli networking network tag

```
h1-cli networking network tag

Synopsis

  $ h1-cli networking network tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                    
  create   undefined [networking_project_network_tag_create] 
  list     undefined [networking_project_network_tag_list]   
  show     undefined [networking_project_network_tag_get]
```

 h1-cli networking network tag spec

```
h1-cli networking network tag spec

  Print specification of context 

Synopsis

  $ h1-cli networking network tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking network tag create

```
h1-cli networking network tag create

  undefined [networking_project_network_tag_create] 

Synopsis

  $ h1-cli networking network tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id                  
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli networking network tag list

```
h1-cli networking network tag list

  undefined [networking_project_network_tag_list] 

Synopsis

  $ h1-cli networking network tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id
```

 h1-cli networking network tag show

```
h1-cli networking network tag show

  undefined [networking_project_network_tag_get] 

Synopsis

  $ h1-cli networking network tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id                  
  --tag extractid          tagId
```

 h1-cli networking network event

```
h1-cli networking network event

Synopsis

  $ h1-cli networking network event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [networking_project_network_event_list]
```

 h1-cli networking network event spec

```
h1-cli networking network event spec

  Print specification of context 

Synopsis

  $ h1-cli networking network event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli networking network event list

```
h1-cli networking network event list

  undefined [networking_project_network_event_list] 

Synopsis

  $ h1-cli networking network event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id                  
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli compute

```
h1-cli compute

Synopsis

  $ h1-cli compute <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context 
  replica   Management of replica          
  vm        Management of vm
```

 h1-cli compute spec

```
h1-cli compute spec

  Print specification of context 

Synopsis

  $ h1-cli compute spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute replica

```
h1-cli compute replica

Synopsis

  $ h1-cli compute replica <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                         
  create    Create replica [compute_project_replica_create]        
  list      List replica [compute_project_replica_list]            
  show      Returns a single replica [compute_project_replica_get] 
  service   Manage services of the replica                         
  tag       Manage tags of the replica                             
  event     Manage events of the replica
```

 h1-cli compute replica spec

```
h1-cli compute replica spec

  Print specification of context 

Synopsis

  $ h1-cli compute replica spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute replica create

```
h1-cli compute replica create

  Create replica [compute_project_replica_create] 

Synopsis

  $ h1-cli compute replica create <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --x-idempotency-key string                               
  --hostname string                                        
  --secret string
```

 h1-cli compute replica list

```
h1-cli compute replica list

  List replica [compute_project_replica_list] 

Synopsis

  $ h1-cli compute replica list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name
```

 h1-cli compute replica show

```
h1-cli compute replica show

  Returns a single replica [compute_project_replica_get] 

Synopsis

  $ h1-cli compute replica show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id
```

 h1-cli compute replica service

```
h1-cli compute replica service

Synopsis

  $ h1-cli compute replica service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [compute_project_replica_service_list] 
  show   undefined [compute_project_replica_service_get]
```

 h1-cli compute replica service spec

```
h1-cli compute replica service spec

  Print specification of context 

Synopsis

  $ h1-cli compute replica service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute replica service list

```
h1-cli compute replica service list

  undefined [compute_project_replica_service_list] 

Synopsis

  $ h1-cli compute replica service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id
```

 h1-cli compute replica service show

```
h1-cli compute replica service show

  undefined [compute_project_replica_service_get] 

Synopsis

  $ h1-cli compute replica service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id                  
  --service extractid      serviceId
```

 h1-cli compute replica tag

```
h1-cli compute replica tag

Synopsis

  $ h1-cli compute replica tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [compute_project_replica_tag_create] 
  list     undefined [compute_project_replica_tag_list]   
  show     undefined [compute_project_replica_tag_get]
```

 h1-cli compute replica tag spec

```
h1-cli compute replica tag spec

  Print specification of context 

Synopsis

  $ h1-cli compute replica tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute replica tag create

```
h1-cli compute replica tag create

  undefined [compute_project_replica_tag_create] 

Synopsis

  $ h1-cli compute replica tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id                  
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli compute replica tag list

```
h1-cli compute replica tag list

  undefined [compute_project_replica_tag_list] 

Synopsis

  $ h1-cli compute replica tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id
```

 h1-cli compute replica tag show

```
h1-cli compute replica tag show

  undefined [compute_project_replica_tag_get] 

Synopsis

  $ h1-cli compute replica tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id                  
  --tag extractid          tagId
```

 h1-cli compute replica event

```
h1-cli compute replica event

Synopsis

  $ h1-cli compute replica event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [compute_project_replica_event_list]
```

 h1-cli compute replica event spec

```
h1-cli compute replica event spec

  Print specification of context 

Synopsis

  $ h1-cli compute replica event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute replica event list

```
h1-cli compute replica event list

  undefined [compute_project_replica_event_list] 

Synopsis

  $ h1-cli compute replica event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id                  
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli compute vm

```
h1-cli compute vm

Synopsis

  $ h1-cli compute vm <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec             Print specification of context                            
  create           Create vm [compute_project_vm_create]                     
  list             List vm [compute_project_vm_list]                         
  show             Returns a single vm [compute_project_vm_get]              
  start            Action start [compute_project_vm_start]                   
  restart          Action restart [compute_project_vm_restart]               
  stop             Action stop [compute_project_vm_stop]                     
  turnoff          Action turnoff [compute_project_vm_turnoff]               
  rename           Action rename [compute_project_vm_rename]                 
  password_reset   Action password_reset [compute_project_vm_password_reset] 
  flavour          Action flavour [compute_project_vm_flavour]               
  hdd              Manage hdds of the vm                                     
  netadp           Manage netadps of the vm                                  
  console          Manage consoles of the vm                                 
  service          Manage services of the vm                                 
  tag              Manage tags of the vm                                     
  event            Manage events of the vm
```

 h1-cli compute vm spec

```
h1-cli compute vm spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute vm create

```
h1-cli compute vm create

  Create vm [compute_project_vm_create] 

Synopsis

  $ h1-cli compute vm create <options> 

Options

  --help                       Show help message and exit.                                         
  --passport-file string       Passport file                                                       
  --project extractid          project Id                                                          
  --location extractid         location Id                                                         
  --x-idempotency-key string                                                                       
  --name string                                                                                    
  --service string             Provide URI of billing/service                                      
  --image string               Provide URI of storage/image. Require permissions storage/image/use 
  --iso string                 Provide URI of storage/iso. Require permissions storage/iso/use     
  --username string                                                                                
  --password string                                                                                
  --ssh-keys string[]                                                                              
  --user-metadata string                                                                           
  --disk nestedvalue[]         Use as id=id,size=size,service=service,name=name,cloud=cloud        
  --netadp nestedvalue[]       Use as service=service,network=network,ip=ip,firewall=firewall      
  --boot string                                                                                    
  --cloud string                                                                                   
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli compute vm list

```
h1-cli compute vm list

  List vm [compute_project_vm_list] 

Synopsis

  $ h1-cli compute vm list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli compute vm show

```
h1-cli compute vm show

  Returns a single vm [compute_project_vm_get] 

Synopsis

  $ h1-cli compute vm show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

 h1-cli compute vm start

```
h1-cli compute vm start

  Action start [compute_project_vm_start] 

Synopsis

  $ h1-cli compute vm start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string
```

 h1-cli compute vm restart

```
h1-cli compute vm restart

  Action restart [compute_project_vm_restart] 

Synopsis

  $ h1-cli compute vm restart <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string
```

 h1-cli compute vm stop

```
h1-cli compute vm stop

  Action stop [compute_project_vm_stop] 

Synopsis

  $ h1-cli compute vm stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string
```

 h1-cli compute vm turnoff

```
h1-cli compute vm turnoff

  Action turnoff [compute_project_vm_turnoff] 

Synopsis

  $ h1-cli compute vm turnoff <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string
```

 h1-cli compute vm rename

```
h1-cli compute vm rename

  Action rename [compute_project_vm_rename] 

Synopsis

  $ h1-cli compute vm rename <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string                               
  --newname string
```

 h1-cli compute vm password_reset

```
h1-cli compute vm password_reset

  Action password_reset [compute_project_vm_password_reset] 

Synopsis

  $ h1-cli compute vm password_reset <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string                               
  --user-name string                                       
  --modulus string                                         
  --exponent string
```

 h1-cli compute vm flavour

```
h1-cli compute vm flavour

  Action flavour [compute_project_vm_flavour] 

Synopsis

  $ h1-cli compute vm flavour <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --vm extractid               vm Id                          
  --x-idempotency-key string                                  
  --service string             Provide URI of billing/service
```

 h1-cli compute vm hdd

```
h1-cli compute vm hdd

Synopsis

  $ h1-cli compute vm hdd <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context            
  create   undefined [compute_project_vm_hdd_create] 
  list     undefined [compute_project_vm_hdd_list]
```

 h1-cli compute vm hdd spec

```
h1-cli compute vm hdd spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm hdd spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute vm hdd create

```
h1-cli compute vm hdd create

  undefined [compute_project_vm_hdd_create] 

Synopsis

  $ h1-cli compute vm hdd create <options> 

Options

  --help                     Show help message and exit.                                       
  --passport-file string     Passport file                                                     
  --project extractid        project Id                                                        
  --location extractid       location Id                                                       
  --vm extractid             vm Id                                                             
  --disk string              Provide URI of storage/disk. Require permissions storage/disk/use 
  --controller-type string
```

 h1-cli compute vm hdd list

```
h1-cli compute vm hdd list

  undefined [compute_project_vm_hdd_list] 

Synopsis

  $ h1-cli compute vm hdd list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

 h1-cli compute vm netadp

```
h1-cli compute vm netadp

Synopsis

  $ h1-cli compute vm netadp <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [compute_project_vm_netadp_create] 
  list     undefined [compute_project_vm_netadp_list]
```

 h1-cli compute vm netadp spec

```
h1-cli compute vm netadp spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm netadp spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute vm netadp create

```
h1-cli compute vm netadp create

  undefined [compute_project_vm_netadp_create] 

Synopsis

  $ h1-cli compute vm netadp create <options> 

Options

  --help                   Show help message and exit.                                                   
  --passport-file string   Passport file                                                                 
  --project extractid      project Id                                                                    
  --location extractid     location Id                                                                   
  --vm extractid           vm Id                                                                         
  --service string         Provide URI of billing/service                                                
  --network string         Provide URI of networking/network. Require permissions networking/network/use 
  --ip string              Provide URI of networking/ip. Require permissions networking/ip/use           
  --tag nestedvalue[]      Use as value=value,name=name                                                  
  --firewall string        Provide URI of networking/firewall. Require permissions                       
                           networking/firewall/use
```

 h1-cli compute vm netadp list

```
h1-cli compute vm netadp list

  undefined [compute_project_vm_netadp_list] 

Synopsis

  $ h1-cli compute vm netadp list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

 h1-cli compute vm console

```
h1-cli compute vm console

Synopsis

  $ h1-cli compute vm console <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context             
  list   undefined [compute_project_vm_console_get]
```

 h1-cli compute vm console spec

```
h1-cli compute vm console spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm console spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute vm console list

```
h1-cli compute vm console list

  undefined [compute_project_vm_console_get] 

Synopsis

  $ h1-cli compute vm console list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

 h1-cli compute vm service

```
h1-cli compute vm service

Synopsis

  $ h1-cli compute vm service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context              
  list   undefined [compute_project_vm_service_list] 
  show   undefined [compute_project_vm_service_get]
```

 h1-cli compute vm service spec

```
h1-cli compute vm service spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute vm service list

```
h1-cli compute vm service list

  undefined [compute_project_vm_service_list] 

Synopsis

  $ h1-cli compute vm service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

 h1-cli compute vm service show

```
h1-cli compute vm service show

  undefined [compute_project_vm_service_get] 

Synopsis

  $ h1-cli compute vm service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id                       
  --service extractid      serviceId
```

 h1-cli compute vm tag

```
h1-cli compute vm tag

Synopsis

  $ h1-cli compute vm tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context            
  create   undefined [compute_project_vm_tag_create] 
  list     undefined [compute_project_vm_tag_list]   
  show     undefined [compute_project_vm_tag_get]
```

 h1-cli compute vm tag spec

```
h1-cli compute vm tag spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute vm tag create

```
h1-cli compute vm tag create

  undefined [compute_project_vm_tag_create] 

Synopsis

  $ h1-cli compute vm tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id                       
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli compute vm tag list

```
h1-cli compute vm tag list

  undefined [compute_project_vm_tag_list] 

Synopsis

  $ h1-cli compute vm tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

 h1-cli compute vm tag show

```
h1-cli compute vm tag show

  undefined [compute_project_vm_tag_get] 

Synopsis

  $ h1-cli compute vm tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id                       
  --tag extractid          tagId
```

 h1-cli compute vm event

```
h1-cli compute vm event

Synopsis

  $ h1-cli compute vm event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [compute_project_vm_event_list]
```

 h1-cli compute vm event spec

```
h1-cli compute vm event spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli compute vm event list

```
h1-cli compute vm event list

  undefined [compute_project_vm_event_list] 

Synopsis

  $ h1-cli compute vm event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id                       
  --$limit string          $limit                      
  --$skip string           $skip
```

 h1-cli billing

```
h1-cli billing

Synopsis

  $ h1-cli billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec          Print specification of context 
  reservation   Management of reservation      
  service       Management of service
```

 h1-cli billing spec

```
h1-cli billing spec

  Print specification of context 

Synopsis

  $ h1-cli billing spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli billing reservation

```
h1-cli billing reservation

Synopsis

  $ h1-cli billing reservation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                                 
  create    Create reservation [billing_project_reservation_create]        
  list      List reservation [billing_project_reservation_list]            
  show      Returns a single reservation [billing_project_reservation_get] 
  assign    Action assign [billing_project_reservation_assign]             
  extend    Action extend [billing_project_reservation_extend]             
  service   Manage services of the reservation                             
  tag       Manage tags of the reservation                                 
  event     Manage events of the reservation
```

 h1-cli billing reservation spec

```
h1-cli billing reservation spec

  Print specification of context 

Synopsis

  $ h1-cli billing reservation spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli billing reservation create

```
h1-cli billing reservation create

  Create reservation [billing_project_reservation_create] 

Synopsis

  $ h1-cli billing reservation create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

 h1-cli billing reservation list

```
h1-cli billing reservation list

  List reservation [billing_project_reservation_list] 

Synopsis

  $ h1-cli billing reservation list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

 h1-cli billing reservation show

```
h1-cli billing reservation show

  Returns a single reservation [billing_project_reservation_get] 

Synopsis

  $ h1-cli billing reservation show <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id
```

 h1-cli billing reservation assign

```
h1-cli billing reservation assign

  Action assign [billing_project_reservation_assign] 

Synopsis

  $ h1-cli billing reservation assign <options> 

Options

  --help                       Show help message and exit.                                   
  --passport-file string       Passport file                                                 
  --project extractid          project Id                                                    
  --location extractid         location Id                                                   
  --reservation extractid      reservation Id                                                
  --x-idempotency-key string                                                                 
  --resource string            Provide URI of compute/vm. Require permissions compute/vm/use
```

 h1-cli billing reservation extend

```
h1-cli billing reservation extend

  Action extend [billing_project_reservation_extend] 

Synopsis

  $ h1-cli billing reservation extend <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --reservation extractid      reservation Id              
  --x-idempotency-key string
```

 h1-cli billing reservation service

```
h1-cli billing reservation service

Synopsis

  $ h1-cli billing reservation service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                       
  list   undefined [billing_project_reservation_service_list] 
  show   undefined [billing_project_reservation_service_get]
```

 h1-cli billing reservation service spec

```
h1-cli billing reservation service spec

  Print specification of context 

Synopsis

  $ h1-cli billing reservation service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli billing reservation service list

```
h1-cli billing reservation service list

  undefined [billing_project_reservation_service_list] 

Synopsis

  $ h1-cli billing reservation service list <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id
```

 h1-cli billing reservation service show

```
h1-cli billing reservation service show

  undefined [billing_project_reservation_service_get] 

Synopsis

  $ h1-cli billing reservation service show <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id              
  --service extractid       serviceId
```

 h1-cli billing reservation tag

```
h1-cli billing reservation tag

Synopsis

  $ h1-cli billing reservation tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                     
  create   undefined [billing_project_reservation_tag_create] 
  list     undefined [billing_project_reservation_tag_list]   
  show     undefined [billing_project_reservation_tag_get]
```

 h1-cli billing reservation tag spec

```
h1-cli billing reservation tag spec

  Print specification of context 

Synopsis

  $ h1-cli billing reservation tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli billing reservation tag create

```
h1-cli billing reservation tag create

  undefined [billing_project_reservation_tag_create] 

Synopsis

  $ h1-cli billing reservation tag create <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id              
  --id string                                           
  --value string                                        
  --name string
```

 h1-cli billing reservation tag list

```
h1-cli billing reservation tag list

  undefined [billing_project_reservation_tag_list] 

Synopsis

  $ h1-cli billing reservation tag list <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id
```

 h1-cli billing reservation tag show

```
h1-cli billing reservation tag show

  undefined [billing_project_reservation_tag_get] 

Synopsis

  $ h1-cli billing reservation tag show <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id              
  --tag extractid           tagId
```

 h1-cli billing reservation event

```
h1-cli billing reservation event

Synopsis

  $ h1-cli billing reservation event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                     
  list   undefined [billing_project_reservation_event_list]
```

 h1-cli billing reservation event spec

```
h1-cli billing reservation event spec

  Print specification of context 

Synopsis

  $ h1-cli billing reservation event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli billing reservation event list

```
h1-cli billing reservation event list

  undefined [billing_project_reservation_event_list] 

Synopsis

  $ h1-cli billing reservation event list <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id              
  --$limit string           $limit                      
  --$skip string            $skip
```

 h1-cli billing service

```
h1-cli billing service

Synopsis

  $ h1-cli billing service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                         
  list   List service [billing_project_service_list]            
  show   Returns a single service [billing_project_service_get]
```

 h1-cli billing service spec

```
h1-cli billing service spec

  Print specification of context 

Synopsis

  $ h1-cli billing service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli billing service list

```
h1-cli billing service list

  List service [billing_project_service_list] 

Synopsis

  $ h1-cli billing service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --kind string            Filter by kind              
  --name string            Filter by name
```

 h1-cli billing service show

```
h1-cli billing service show

  Returns a single service [billing_project_service_get] 

Synopsis

  $ h1-cli billing service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --service extractid      service Id
```

 h1-cli vmhost

```
h1-cli vmhost

Synopsis

  $ h1-cli vmhost <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  instance   Management of instance
```

 h1-cli vmhost spec

```
h1-cli vmhost spec

  Print specification of context 

Synopsis

  $ h1-cli vmhost spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli vmhost instance

```
h1-cli vmhost instance

Synopsis

  $ h1-cli vmhost instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                          
  list      List instance [vmhost_project_instance_list]            
  show      Returns a single instance [vmhost_project_instance_get] 
  service   Manage services of the instance                         
  tag       Manage tags of the instance                             
  event     Manage events of the instance
```

 h1-cli vmhost instance spec

```
h1-cli vmhost instance spec

  Print specification of context 

Synopsis

  $ h1-cli vmhost instance spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli vmhost instance list

```
h1-cli vmhost instance list

  List instance [vmhost_project_instance_list] 

Synopsis

  $ h1-cli vmhost instance list <options> 

Options

  --help                      Show help message and exit. 
  --passport-file string      Passport file               
  --project extractid         project Id                  
  --location extractid        location Id                 
  --enabled-services string   Filter by enabledServices
```

 h1-cli vmhost instance show

```
h1-cli vmhost instance show

  Returns a single instance [vmhost_project_instance_get] 

Synopsis

  $ h1-cli vmhost instance show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli vmhost instance service

```
h1-cli vmhost instance service

Synopsis

  $ h1-cli vmhost instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [vmhost_project_instance_service_list] 
  show   undefined [vmhost_project_instance_service_get]
```

 h1-cli vmhost instance service spec

```
h1-cli vmhost instance service spec

  Print specification of context 

Synopsis

  $ h1-cli vmhost instance service spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli vmhost instance service list

```
h1-cli vmhost instance service list

  undefined [vmhost_project_instance_service_list] 

Synopsis

  $ h1-cli vmhost instance service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli vmhost instance service show

```
h1-cli vmhost instance service show

  undefined [vmhost_project_instance_service_get] 

Synopsis

  $ h1-cli vmhost instance service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --service extractid      serviceId
```

 h1-cli vmhost instance tag

```
h1-cli vmhost instance tag

Synopsis

  $ h1-cli vmhost instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [vmhost_project_instance_tag_create] 
  list     undefined [vmhost_project_instance_tag_list]   
  show     undefined [vmhost_project_instance_tag_get]
```

 h1-cli vmhost instance tag spec

```
h1-cli vmhost instance tag spec

  Print specification of context 

Synopsis

  $ h1-cli vmhost instance tag spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli vmhost instance tag create

```
h1-cli vmhost instance tag create

  undefined [vmhost_project_instance_tag_create] 

Synopsis

  $ h1-cli vmhost instance tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --id string                                          
  --value string                                       
  --name string
```

 h1-cli vmhost instance tag list

```
h1-cli vmhost instance tag list

  undefined [vmhost_project_instance_tag_list] 

Synopsis

  $ h1-cli vmhost instance tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

 h1-cli vmhost instance tag show

```
h1-cli vmhost instance tag show

  undefined [vmhost_project_instance_tag_get] 

Synopsis

  $ h1-cli vmhost instance tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --tag extractid          tagId
```

 h1-cli vmhost instance event

```
h1-cli vmhost instance event

Synopsis

  $ h1-cli vmhost instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [vmhost_project_instance_event_list]
```

 h1-cli vmhost instance event spec

```
h1-cli vmhost instance event spec

  Print specification of context 

Synopsis

  $ h1-cli vmhost instance event spec <options> 

Options

  --help    Show help message and exit.
```

 h1-cli vmhost instance event list

```
h1-cli vmhost instance event list

  undefined [vmhost_project_instance_event_list] 

Synopsis

  $ h1-cli vmhost instance event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

## h1-cli iam

```
h1-cli iam

Synopsis

  $ h1-cli iam <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec           Print specification of context 
  user           Management of user             
  project        Management of project          
  organisation   Management of organisation     
  policy         Management of policy           
  role           Management of role             
  sa             Management of sa               
  organisation   Management of organisation
```

### h1-cli iam spec

```
h1-cli iam spec

  Print specification of context 

Synopsis

  $ h1-cli iam spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli iam user

```
h1-cli iam user

Synopsis

  $ h1-cli iam user <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context   
  show         Returns a single user [user_get] 
  invitation   Manage invitations of the user   
  credential   Manage credentials of the user   
  service      Manage services of the user
```

#### h1-cli iam user spec

```
h1-cli iam user spec

  Print specification of context 

Synopsis

  $ h1-cli iam user spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli iam user show

```
h1-cli iam user show

  Returns a single user [user_get] 

Synopsis

  $ h1-cli iam user show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id
```

#### h1-cli iam user invitation

```
h1-cli iam user invitation

Synopsis

  $ h1-cli iam user invitation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context    
  list      undefined [user_invitation_list]  
  accept    Manage accepts of the invitation  
  decline   Manage declines of the invitation
```

##### h1-cli iam user invitation spec

```
h1-cli iam user invitation spec

  Print specification of context 

Synopsis

  $ h1-cli iam user invitation spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam user invitation list

```
h1-cli iam user invitation list

  undefined [user_invitation_list] 

Synopsis

  $ h1-cli iam user invitation list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id
```

##### h1-cli iam user invitation accept

```
h1-cli iam user invitation accept

Synopsis

  $ h1-cli iam user invitation accept <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context            
  create   undefined [user_invitation_accept_create]
```

###### h1-cli iam user invitation accept spec

```
h1-cli iam user invitation accept spec

  Print specification of context 

Synopsis

  $ h1-cli iam user invitation accept spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam user invitation accept create

```
h1-cli iam user invitation accept create

  undefined [user_invitation_accept_create] 

Synopsis

  $ h1-cli iam user invitation accept create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id                     
  --invitation extractid   invitationId
```

##### h1-cli iam user invitation decline

```
h1-cli iam user invitation decline

Synopsis

  $ h1-cli iam user invitation decline <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context             
  create   undefined [user_invitation_decline_create]
```

###### h1-cli iam user invitation decline spec

```
h1-cli iam user invitation decline spec

  Print specification of context 

Synopsis

  $ h1-cli iam user invitation decline spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam user invitation decline create

```
h1-cli iam user invitation decline create

  undefined [user_invitation_decline_create] 

Synopsis

  $ h1-cli iam user invitation decline create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id                     
  --invitation extractid   invitationId
```

#### h1-cli iam user credential

```
h1-cli iam user credential

Synopsis

  $ h1-cli iam user credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context     
  create   undefined [user_credential_create] 
  list     undefined [user_credential_list]
```

##### h1-cli iam user credential spec

```
h1-cli iam user credential spec

  Print specification of context 

Synopsis

  $ h1-cli iam user credential spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam user credential create

```
h1-cli iam user credential create

  undefined [user_credential_create] 

Synopsis

  $ h1-cli iam user credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id                     
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

##### h1-cli iam user credential list

```
h1-cli iam user credential list

  undefined [user_credential_list] 

Synopsis

  $ h1-cli iam user credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id
```

#### h1-cli iam user service

```
h1-cli iam user service

Synopsis

  $ h1-cli iam user service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context 
  list   undefined [user_service_list]  
  show   undefined [user_service_get]
```

##### h1-cli iam user service spec

```
h1-cli iam user service spec

  Print specification of context 

Synopsis

  $ h1-cli iam user service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam user service list

```
h1-cli iam user service list

  undefined [user_service_list] 

Synopsis

  $ h1-cli iam user service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id
```

##### h1-cli iam user service show

```
h1-cli iam user service show

  undefined [user_service_get] 

Synopsis

  $ h1-cli iam user service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --user extractid         user Id                     
  --service extractid      serviceId
```

### h1-cli iam project

```
h1-cli iam project

Synopsis

  $ h1-cli iam project <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context         
  create     Create project [project_create]        
  list       List project [project_list]            
  show       Returns a single project [project_get] 
  stats      Manage stats of the project            
  limit      Manage limits of the project           
  billing    Manage billings of the project         
  payment    Manage payments of the project         
  invoice    Manage invoices of the project         
  proforma   Manage proformas of the project        
  service    Manage services of the project         
  tag        Manage tags of the project             
  event      Manage events of the project           
  policy     Manage policies of the project         
  role       Manage roles of the project            
  sa         Manage sas of the project
```

#### h1-cli iam project spec

```
h1-cli iam project spec

  Print specification of context 

Synopsis

  $ h1-cli iam project spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli iam project create

```
h1-cli iam project create

  Create project [project_create] 

Synopsis

  $ h1-cli iam project create <options> 

Options

  --help                       Show help message and exit.                                             
  --passport-file string       Passport file                                                           
  --x-idempotency-key string                                                                           
  --name string                                                                                        
  --organisation string        Provide URI of iam/organisation. Require permissions iam/project/create 
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli iam project list

```
h1-cli iam project list

  List project [project_list] 

Synopsis

  $ h1-cli iam project list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --name string            Filter by name              
  --$limit string          Filter by $limit            
  --active string          Filter by active            
  --organisation string    Filter by organisation      
  --tag string             Filter by tag
```

#### h1-cli iam project show

```
h1-cli iam project show

  Returns a single project [project_get] 

Synopsis

  $ h1-cli iam project show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

#### h1-cli iam project stats

```
h1-cli iam project stats

Synopsis

  $ h1-cli iam project stats <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context 
  list   undefined [project_stats_list]
```

##### h1-cli iam project stats spec

```
h1-cli iam project stats spec

  Print specification of context 

Synopsis

  $ h1-cli iam project stats spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project stats list

```
h1-cli iam project stats list

  undefined [project_stats_list] 

Synopsis

  $ h1-cli iam project stats list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

#### h1-cli iam project limit

```
h1-cli iam project limit

Synopsis

  $ h1-cli iam project limit <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context 
  list   undefined [project_limit_get]
```

##### h1-cli iam project limit spec

```
h1-cli iam project limit spec

  Print specification of context 

Synopsis

  $ h1-cli iam project limit spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project limit list

```
h1-cli iam project limit list

  undefined [project_limit_get] 

Synopsis

  $ h1-cli iam project limit list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

#### h1-cli iam project billing

```
h1-cli iam project billing

Synopsis

  $ h1-cli iam project billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context   
  list   undefined [project_billing_list]
```

##### h1-cli iam project billing spec

```
h1-cli iam project billing spec

  Print specification of context 

Synopsis

  $ h1-cli iam project billing spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project billing list

```
h1-cli iam project billing list

  undefined [project_billing_list] 

Synopsis

  $ h1-cli iam project billing list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --start string           start                       
  --end string             end                         
  --resource.type string   resource.type
```

#### h1-cli iam project payment

```
h1-cli iam project payment

Synopsis

  $ h1-cli iam project payment <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context   
  list   undefined [project_payment_list]
```

##### h1-cli iam project payment spec

```
h1-cli iam project payment spec

  Print specification of context 

Synopsis

  $ h1-cli iam project payment spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project payment list

```
h1-cli iam project payment list

  undefined [project_payment_list] 

Synopsis

  $ h1-cli iam project payment list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

#### h1-cli iam project invoice

```
h1-cli iam project invoice

Synopsis

  $ h1-cli iam project invoice <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context   
  list   undefined [project_invoice_list]
```

##### h1-cli iam project invoice spec

```
h1-cli iam project invoice spec

  Print specification of context 

Synopsis

  $ h1-cli iam project invoice spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project invoice list

```
h1-cli iam project invoice list

  undefined [project_invoice_list] 

Synopsis

  $ h1-cli iam project invoice list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

#### h1-cli iam project proforma

```
h1-cli iam project proforma

Synopsis

  $ h1-cli iam project proforma <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context    
  list   undefined [project_proforma_list]
```

##### h1-cli iam project proforma spec

```
h1-cli iam project proforma spec

  Print specification of context 

Synopsis

  $ h1-cli iam project proforma spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project proforma list

```
h1-cli iam project proforma list

  undefined [project_proforma_list] 

Synopsis

  $ h1-cli iam project proforma list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

#### h1-cli iam project service

```
h1-cli iam project service

Synopsis

  $ h1-cli iam project service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context   
  list   undefined [project_service_list] 
  show   undefined [project_service_get]
```

##### h1-cli iam project service spec

```
h1-cli iam project service spec

  Print specification of context 

Synopsis

  $ h1-cli iam project service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project service list

```
h1-cli iam project service list

  undefined [project_service_list] 

Synopsis

  $ h1-cli iam project service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

##### h1-cli iam project service show

```
h1-cli iam project service show

  undefined [project_service_get] 

Synopsis

  $ h1-cli iam project service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --service extractid      serviceId
```

#### h1-cli iam project tag

```
h1-cli iam project tag

Synopsis

  $ h1-cli iam project tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context 
  create   undefined [project_tag_create] 
  list     undefined [project_tag_list]   
  show     undefined [project_tag_get]
```

##### h1-cli iam project tag spec

```
h1-cli iam project tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam project tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project tag create

```
h1-cli iam project tag create

  undefined [project_tag_create] 

Synopsis

  $ h1-cli iam project tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli iam project tag list

```
h1-cli iam project tag list

  undefined [project_tag_list] 

Synopsis

  $ h1-cli iam project tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id
```

##### h1-cli iam project tag show

```
h1-cli iam project tag show

  undefined [project_tag_get] 

Synopsis

  $ h1-cli iam project tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --tag extractid          tagId
```

#### h1-cli iam project event

```
h1-cli iam project event

Synopsis

  $ h1-cli iam project event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context 
  list   undefined [project_event_list]
```

##### h1-cli iam project event spec

```
h1-cli iam project event spec

  Print specification of context 

Synopsis

  $ h1-cli iam project event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project event list

```
h1-cli iam project event list

  undefined [project_event_list] 

Synopsis

  $ h1-cli iam project event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --$limit string          $limit                      
  --$skip string           $skip
```

#### h1-cli iam project policy

```
h1-cli iam project policy

Synopsis

  $ h1-cli iam project policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                   
  create    Create policy [iam_project_policy_create]        
  list      List policy [iam_project_policy_list]            
  show      Returns a single policy [iam_project_policy_get] 
  actor     Manage actors of the policy                      
  service   Manage services of the policy                    
  tag       Manage tags of the policy                        
  event     Manage events of the policy
```

##### h1-cli iam project policy spec

```
h1-cli iam project policy spec

  Print specification of context 

Synopsis

  $ h1-cli iam project policy spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project policy create

```
h1-cli iam project policy create

  Create policy [iam_project_policy_create] 

Synopsis

  $ h1-cli iam project policy create <options> 

Options

  --help                       Show help message and exit.                               
  --passport-file string       Passport file                                             
  --project extractid          project Id                                                
  --x-idempotency-key string                                                             
  --name string                                                                          
  --service string             Provide URI of billing/service                            
  --role string                Provide URI of iam/role. Require permissions iam/role/use 
  --resource string                                                                      
  --actor nestedvalue[]        Use as value=value                                        
  --tag nestedvalue[]          Use as value=value,name=name
```

##### h1-cli iam project policy list

```
h1-cli iam project policy list

  List policy [iam_project_policy_list] 

Synopsis

  $ h1-cli iam project policy list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

##### h1-cli iam project policy show

```
h1-cli iam project policy show

  Returns a single policy [iam_project_policy_get] 

Synopsis

  $ h1-cli iam project policy show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

##### h1-cli iam project policy actor

```
h1-cli iam project policy actor

Synopsis

  $ h1-cli iam project policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context              
  create   undefined [iam_project_policy_actor_create] 
  list     undefined [iam_project_policy_actor_list]   
  show     undefined [iam_project_policy_actor_get]
```

###### h1-cli iam project policy actor spec

```
h1-cli iam project policy actor spec

  Print specification of context 

Synopsis

  $ h1-cli iam project policy actor spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project policy actor create

```
h1-cli iam project policy actor create

  undefined [iam_project_policy_actor_create] 

Synopsis

  $ h1-cli iam project policy actor create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --value string
```

###### h1-cli iam project policy actor list

```
h1-cli iam project policy actor list

  undefined [iam_project_policy_actor_list] 

Synopsis

  $ h1-cli iam project policy actor list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

###### h1-cli iam project policy actor show

```
h1-cli iam project policy actor show

  undefined [iam_project_policy_actor_get] 

Synopsis

  $ h1-cli iam project policy actor show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --actor extractid        actorId
```

##### h1-cli iam project policy service

```
h1-cli iam project policy service

Synopsis

  $ h1-cli iam project policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context              
  list   undefined [iam_project_policy_service_list] 
  show   undefined [iam_project_policy_service_get]
```

###### h1-cli iam project policy service spec

```
h1-cli iam project policy service spec

  Print specification of context 

Synopsis

  $ h1-cli iam project policy service spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project policy service list

```
h1-cli iam project policy service list

  undefined [iam_project_policy_service_list] 

Synopsis

  $ h1-cli iam project policy service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

###### h1-cli iam project policy service show

```
h1-cli iam project policy service show

  undefined [iam_project_policy_service_get] 

Synopsis

  $ h1-cli iam project policy service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --service extractid      serviceId
```

##### h1-cli iam project policy tag

```
h1-cli iam project policy tag

Synopsis

  $ h1-cli iam project policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context            
  create   undefined [iam_project_policy_tag_create] 
  list     undefined [iam_project_policy_tag_list]   
  show     undefined [iam_project_policy_tag_get]
```

###### h1-cli iam project policy tag spec

```
h1-cli iam project policy tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam project policy tag spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project policy tag create

```
h1-cli iam project policy tag create

  undefined [iam_project_policy_tag_create] 

Synopsis

  $ h1-cli iam project policy tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --id string                                          
  --value string                                       
  --name string
```

###### h1-cli iam project policy tag list

```
h1-cli iam project policy tag list

  undefined [iam_project_policy_tag_list] 

Synopsis

  $ h1-cli iam project policy tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

###### h1-cli iam project policy tag show

```
h1-cli iam project policy tag show

  undefined [iam_project_policy_tag_get] 

Synopsis

  $ h1-cli iam project policy tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --tag extractid          tagId
```

##### h1-cli iam project policy event

```
h1-cli iam project policy event

Synopsis

  $ h1-cli iam project policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [iam_project_policy_event_list]
```

###### h1-cli iam project policy event spec

```
h1-cli iam project policy event spec

  Print specification of context 

Synopsis

  $ h1-cli iam project policy event spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project policy event list

```
h1-cli iam project policy event list

  undefined [iam_project_policy_event_list] 

Synopsis

  $ h1-cli iam project policy event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --$limit string          $limit                      
  --$skip string           $skip
```

#### h1-cli iam project role

```
h1-cli iam project role

Synopsis

  $ h1-cli iam project role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context               
  create       Create role [iam_project_role_create]        
  list         List role [iam_project_role_list]            
  show         Returns a single role [iam_project_role_get] 
  permission   Manage permissions of the role               
  service      Manage services of the role                  
  tag          Manage tags of the role                      
  event        Manage events of the role
```

##### h1-cli iam project role spec

```
h1-cli iam project role spec

  Print specification of context 

Synopsis

  $ h1-cli iam project role spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project role create

```
h1-cli iam project role create

  Create role [iam_project_role_create] 

Synopsis

  $ h1-cli iam project role create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --description string                                        
  --permission nestedvalue[]   Use as value=value             
  --tag nestedvalue[]          Use as value=value,name=name
```

##### h1-cli iam project role list

```
h1-cli iam project role list

  List role [iam_project_role_list] 

Synopsis

  $ h1-cli iam project role list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

##### h1-cli iam project role show

```
h1-cli iam project role show

  Returns a single role [iam_project_role_get] 

Synopsis

  $ h1-cli iam project role show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

##### h1-cli iam project role permission

```
h1-cli iam project role permission

Synopsis

  $ h1-cli iam project role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [iam_project_role_permission_create] 
  list     undefined [iam_project_role_permission_list]   
  show     undefined [iam_project_role_permission_get]
```

###### h1-cli iam project role permission spec

```
h1-cli iam project role permission spec

  Print specification of context 

Synopsis

  $ h1-cli iam project role permission spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project role permission create

```
h1-cli iam project role permission create

  undefined [iam_project_role_permission_create] 

Synopsis

  $ h1-cli iam project role permission create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --value string
```

###### h1-cli iam project role permission list

```
h1-cli iam project role permission list

  undefined [iam_project_role_permission_list] 

Synopsis

  $ h1-cli iam project role permission list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

###### h1-cli iam project role permission show

```
h1-cli iam project role permission show

  undefined [iam_project_role_permission_get] 

Synopsis

  $ h1-cli iam project role permission show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --permission extractid   permissionId
```

##### h1-cli iam project role service

```
h1-cli iam project role service

Synopsis

  $ h1-cli iam project role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [iam_project_role_service_list] 
  show   undefined [iam_project_role_service_get]
```

###### h1-cli iam project role service spec

```
h1-cli iam project role service spec

  Print specification of context 

Synopsis

  $ h1-cli iam project role service spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project role service list

```
h1-cli iam project role service list

  undefined [iam_project_role_service_list] 

Synopsis

  $ h1-cli iam project role service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

###### h1-cli iam project role service show

```
h1-cli iam project role service show

  undefined [iam_project_role_service_get] 

Synopsis

  $ h1-cli iam project role service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --service extractid      serviceId
```

##### h1-cli iam project role tag

```
h1-cli iam project role tag

Synopsis

  $ h1-cli iam project role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context          
  create   undefined [iam_project_role_tag_create] 
  list     undefined [iam_project_role_tag_list]   
  show     undefined [iam_project_role_tag_get]
```

###### h1-cli iam project role tag spec

```
h1-cli iam project role tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam project role tag spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project role tag create

```
h1-cli iam project role tag create

  undefined [iam_project_role_tag_create] 

Synopsis

  $ h1-cli iam project role tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --id string                                          
  --value string                                       
  --name string
```

###### h1-cli iam project role tag list

```
h1-cli iam project role tag list

  undefined [iam_project_role_tag_list] 

Synopsis

  $ h1-cli iam project role tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

###### h1-cli iam project role tag show

```
h1-cli iam project role tag show

  undefined [iam_project_role_tag_get] 

Synopsis

  $ h1-cli iam project role tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --tag extractid          tagId
```

##### h1-cli iam project role event

```
h1-cli iam project role event

Synopsis

  $ h1-cli iam project role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context          
  list   undefined [iam_project_role_event_list]
```

###### h1-cli iam project role event spec

```
h1-cli iam project role event spec

  Print specification of context 

Synopsis

  $ h1-cli iam project role event spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project role event list

```
h1-cli iam project role event list

  undefined [iam_project_role_event_list] 

Synopsis

  $ h1-cli iam project role event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --$limit string          $limit                      
  --$skip string           $skip
```

#### h1-cli iam project sa

```
h1-cli iam project sa

Synopsis

  $ h1-cli iam project sa <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context           
  create       Create sa [iam_project_sa_create]        
  list         List sa [iam_project_sa_list]            
  show         Returns a single sa [iam_project_sa_get] 
  credential   Manage credentials of the sa             
  service      Manage services of the sa                
  tag          Manage tags of the sa                    
  event        Manage events of the sa
```

##### h1-cli iam project sa spec

```
h1-cli iam project sa spec

  Print specification of context 

Synopsis

  $ h1-cli iam project sa spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam project sa create

```
h1-cli iam project sa create

  Create sa [iam_project_sa_create] 

Synopsis

  $ h1-cli iam project sa create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

##### h1-cli iam project sa list

```
h1-cli iam project sa list

  List sa [iam_project_sa_list] 

Synopsis

  $ h1-cli iam project sa list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

##### h1-cli iam project sa show

```
h1-cli iam project sa show

  Returns a single sa [iam_project_sa_get] 

Synopsis

  $ h1-cli iam project sa show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

##### h1-cli iam project sa credential

```
h1-cli iam project sa credential

Synopsis

  $ h1-cli iam project sa credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [iam_project_sa_credential_create] 
  list     undefined [iam_project_sa_credential_list]
```

###### h1-cli iam project sa credential spec

```
h1-cli iam project sa credential spec

  Print specification of context 

Synopsis

  $ h1-cli iam project sa credential spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project sa credential create

```
h1-cli iam project sa credential create

  undefined [iam_project_sa_credential_create] 

Synopsis

  $ h1-cli iam project sa credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

###### h1-cli iam project sa credential list

```
h1-cli iam project sa credential list

  undefined [iam_project_sa_credential_list] 

Synopsis

  $ h1-cli iam project sa credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

##### h1-cli iam project sa service

```
h1-cli iam project sa service

Synopsis

  $ h1-cli iam project sa service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context          
  list   undefined [iam_project_sa_service_list] 
  show   undefined [iam_project_sa_service_get]
```

###### h1-cli iam project sa service spec

```
h1-cli iam project sa service spec

  Print specification of context 

Synopsis

  $ h1-cli iam project sa service spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project sa service list

```
h1-cli iam project sa service list

  undefined [iam_project_sa_service_list] 

Synopsis

  $ h1-cli iam project sa service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

###### h1-cli iam project sa service show

```
h1-cli iam project sa service show

  undefined [iam_project_sa_service_get] 

Synopsis

  $ h1-cli iam project sa service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --service extractid      serviceId
```

##### h1-cli iam project sa tag

```
h1-cli iam project sa tag

Synopsis

  $ h1-cli iam project sa tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context        
  create   undefined [iam_project_sa_tag_create] 
  list     undefined [iam_project_sa_tag_list]   
  show     undefined [iam_project_sa_tag_get]
```

###### h1-cli iam project sa tag spec

```
h1-cli iam project sa tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam project sa tag spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project sa tag create

```
h1-cli iam project sa tag create

  undefined [iam_project_sa_tag_create] 

Synopsis

  $ h1-cli iam project sa tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --id string                                          
  --value string                                       
  --name string
```

###### h1-cli iam project sa tag list

```
h1-cli iam project sa tag list

  undefined [iam_project_sa_tag_list] 

Synopsis

  $ h1-cli iam project sa tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

###### h1-cli iam project sa tag show

```
h1-cli iam project sa tag show

  undefined [iam_project_sa_tag_get] 

Synopsis

  $ h1-cli iam project sa tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --tag extractid          tagId
```

##### h1-cli iam project sa event

```
h1-cli iam project sa event

Synopsis

  $ h1-cli iam project sa event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context        
  list   undefined [iam_project_sa_event_list]
```

###### h1-cli iam project sa event spec

```
h1-cli iam project sa event spec

  Print specification of context 

Synopsis

  $ h1-cli iam project sa event spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam project sa event list

```
h1-cli iam project sa event list

  undefined [iam_project_sa_event_list] 

Synopsis

  $ h1-cli iam project sa event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli iam organisation

```
h1-cli iam organisation

Synopsis

  $ h1-cli iam organisation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec              Print specification of context                        
  create            Create organisation [organisation_create]             
  list              List organisation [organisation_list]                 
  show              Returns a single organisation [organisation_get]      
  transfer_accept   Action transfer_accept [organisation_transfer_accept] 
  payment_assign    Action payment_assign [organisation_payment_assign]   
  billing           Manage billings of the organisation                   
  payment           Manage payments of the organisation                   
  invoice           Manage invoices of the organisation                   
  proforma          Manage proformas of the organisation                  
  event             Manage events of the organisation                     
  policy            Manage policies of the organisation                   
  role              Manage roles of the organisation
```

#### h1-cli iam organisation spec

```
h1-cli iam organisation spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli iam organisation create

```
h1-cli iam organisation create

  Create organisation [organisation_create] 

Synopsis

  $ h1-cli iam organisation create <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --x-idempotency-key string                               
  --name string                                            
  --billing string
```

#### h1-cli iam organisation list

```
h1-cli iam organisation list

  List organisation [organisation_list] 

Synopsis

  $ h1-cli iam organisation list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --name string              Filter by name              
  --billing.company string   Filter by billing.company   
  --$limit string            Filter by $limit            
  --active string            Filter by active
```

#### h1-cli iam organisation show

```
h1-cli iam organisation show

  Returns a single organisation [organisation_get] 

Synopsis

  $ h1-cli iam organisation show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id
```

#### h1-cli iam organisation transfer_accept

```
h1-cli iam organisation transfer_accept

  Action transfer_accept [organisation_transfer_accept] 

Synopsis

  $ h1-cli iam organisation transfer_accept <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --organisation extractid     organisation Id             
  --x-idempotency-key string                               
  --payment string                                         
  --project string
```

#### h1-cli iam organisation payment_assign

```
h1-cli iam organisation payment_assign

  Action payment_assign [organisation_payment_assign] 

Synopsis

  $ h1-cli iam organisation payment_assign <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --organisation extractid     organisation Id             
  --x-idempotency-key string                               
  --payment string                                         
  --project string
```

#### h1-cli iam organisation billing

```
h1-cli iam organisation billing

Synopsis

  $ h1-cli iam organisation billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context        
  list   undefined [organisation_billing_list]
```

##### h1-cli iam organisation billing spec

```
h1-cli iam organisation billing spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation billing spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam organisation billing list

```
h1-cli iam organisation billing list

  undefined [organisation_billing_list] 

Synopsis

  $ h1-cli iam organisation billing list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --start string             start                       
  --end string               end                         
  --resource.type string     resource.type
```

#### h1-cli iam organisation payment

```
h1-cli iam organisation payment

Synopsis

  $ h1-cli iam organisation payment <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context        
  list   undefined [organisation_payment_list]
```

##### h1-cli iam organisation payment spec

```
h1-cli iam organisation payment spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation payment spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam organisation payment list

```
h1-cli iam organisation payment list

  undefined [organisation_payment_list] 

Synopsis

  $ h1-cli iam organisation payment list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id
```

#### h1-cli iam organisation invoice

```
h1-cli iam organisation invoice

Synopsis

  $ h1-cli iam organisation invoice <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                           
  list       undefined [organisation_invoice_list]                    
  show       undefined [organisation_invoice_get]                     
  download   undefined [organisation_invoice_actions_download_create]
```

##### h1-cli iam organisation invoice spec

```
h1-cli iam organisation invoice spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation invoice spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam organisation invoice list

```
h1-cli iam organisation invoice list

  undefined [organisation_invoice_list] 

Synopsis

  $ h1-cli iam organisation invoice list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id
```

##### h1-cli iam organisation invoice show

```
h1-cli iam organisation invoice show

  undefined [organisation_invoice_get] 

Synopsis

  $ h1-cli iam organisation invoice show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --invoice extractid        invoiceId
```

##### h1-cli iam organisation invoice download

```
h1-cli iam organisation invoice download

  undefined [organisation_invoice_actions_download_create] 

Synopsis

  $ h1-cli iam organisation invoice download <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --invoice extractid        invoiceId
```

#### h1-cli iam organisation proforma

```
h1-cli iam organisation proforma

Synopsis

  $ h1-cli iam organisation proforma <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                            
  create     undefined [organisation_proforma_create]                  
  list       undefined [organisation_proforma_list]                    
  show       undefined [organisation_proforma_get]                     
  download   undefined [organisation_proforma_actions_download_create]
```

##### h1-cli iam organisation proforma spec

```
h1-cli iam organisation proforma spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation proforma spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam organisation proforma create

```
h1-cli iam organisation proforma create

  undefined [organisation_proforma_create] 

Synopsis

  $ h1-cli iam organisation proforma create <options> 

Options

  --help                     Show help message and exit.                                     
  --passport-file string     Passport file                                                   
  --organisation extractid   organisation Id                                                 
  --amount string                                                                            
  --project string           Provide URI of iam/project. Require permissions iam/project/get
```

##### h1-cli iam organisation proforma list

```
h1-cli iam organisation proforma list

  undefined [organisation_proforma_list] 

Synopsis

  $ h1-cli iam organisation proforma list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id
```

##### h1-cli iam organisation proforma show

```
h1-cli iam organisation proforma show

  undefined [organisation_proforma_get] 

Synopsis

  $ h1-cli iam organisation proforma show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --proforma extractid       proformaId
```

##### h1-cli iam organisation proforma download

```
h1-cli iam organisation proforma download

  undefined [organisation_proforma_actions_download_create] 

Synopsis

  $ h1-cli iam organisation proforma download <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --proforma extractid       proformaId
```

#### h1-cli iam organisation event

```
h1-cli iam organisation event

Synopsis

  $ h1-cli iam organisation event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context      
  list   undefined [organisation_event_list]
```

##### h1-cli iam organisation event spec

```
h1-cli iam organisation event spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam organisation event list

```
h1-cli iam organisation event list

  undefined [organisation_event_list] 

Synopsis

  $ h1-cli iam organisation event list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --$limit string            $limit                      
  --$skip string             $skip
```

#### h1-cli iam organisation policy

```
h1-cli iam organisation policy

Synopsis

  $ h1-cli iam organisation policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                        
  create    Create policy [iam_organisation_policy_create]        
  list      List policy [iam_organisation_policy_list]            
  show      Returns a single policy [iam_organisation_policy_get] 
  actor     Manage actors of the policy                           
  service   Manage services of the policy                         
  tag       Manage tags of the policy                             
  event     Manage events of the policy
```

##### h1-cli iam organisation policy spec

```
h1-cli iam organisation policy spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam organisation policy create

```
h1-cli iam organisation policy create

  Create policy [iam_organisation_policy_create] 

Synopsis

  $ h1-cli iam organisation policy create <options> 

Options

  --help                       Show help message and exit.                               
  --passport-file string       Passport file                                             
  --organisation extractid     organisation Id                                           
  --x-idempotency-key string                                                             
  --name string                                                                          
  --service string             Provide URI of billing/service                            
  --role string                Provide URI of iam/role. Require permissions iam/role/use 
  --resource string                                                                      
  --actor nestedvalue[]        Use as value=value                                        
  --tag nestedvalue[]          Use as value=value,name=name
```

##### h1-cli iam organisation policy list

```
h1-cli iam organisation policy list

  List policy [iam_organisation_policy_list] 

Synopsis

  $ h1-cli iam organisation policy list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --name string              Filter by name              
  --tag string               Filter by tag
```

##### h1-cli iam organisation policy show

```
h1-cli iam organisation policy show

  Returns a single policy [iam_organisation_policy_get] 

Synopsis

  $ h1-cli iam organisation policy show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

##### h1-cli iam organisation policy actor

```
h1-cli iam organisation policy actor

Synopsis

  $ h1-cli iam organisation policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [iam_organisation_policy_actor_create] 
  list     undefined [iam_organisation_policy_actor_list]   
  show     undefined [iam_organisation_policy_actor_get]
```

###### h1-cli iam organisation policy actor spec

```
h1-cli iam organisation policy actor spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy actor spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation policy actor create

```
h1-cli iam organisation policy actor create

  undefined [iam_organisation_policy_actor_create] 

Synopsis

  $ h1-cli iam organisation policy actor create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --value string
```

###### h1-cli iam organisation policy actor list

```
h1-cli iam organisation policy actor list

  undefined [iam_organisation_policy_actor_list] 

Synopsis

  $ h1-cli iam organisation policy actor list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

###### h1-cli iam organisation policy actor show

```
h1-cli iam organisation policy actor show

  undefined [iam_organisation_policy_actor_get] 

Synopsis

  $ h1-cli iam organisation policy actor show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --actor extractid          actorId
```

##### h1-cli iam organisation policy service

```
h1-cli iam organisation policy service

Synopsis

  $ h1-cli iam organisation policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [iam_organisation_policy_service_list] 
  show   undefined [iam_organisation_policy_service_get]
```

###### h1-cli iam organisation policy service spec

```
h1-cli iam organisation policy service spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy service spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation policy service list

```
h1-cli iam organisation policy service list

  undefined [iam_organisation_policy_service_list] 

Synopsis

  $ h1-cli iam organisation policy service list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

###### h1-cli iam organisation policy service show

```
h1-cli iam organisation policy service show

  undefined [iam_organisation_policy_service_get] 

Synopsis

  $ h1-cli iam organisation policy service show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --service extractid        serviceId
```

##### h1-cli iam organisation policy tag

```
h1-cli iam organisation policy tag

Synopsis

  $ h1-cli iam organisation policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [iam_organisation_policy_tag_create] 
  list     undefined [iam_organisation_policy_tag_list]   
  show     undefined [iam_organisation_policy_tag_get]
```

###### h1-cli iam organisation policy tag spec

```
h1-cli iam organisation policy tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy tag spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation policy tag create

```
h1-cli iam organisation policy tag create

  undefined [iam_organisation_policy_tag_create] 

Synopsis

  $ h1-cli iam organisation policy tag create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --id string                                            
  --value string                                         
  --name string
```

###### h1-cli iam organisation policy tag list

```
h1-cli iam organisation policy tag list

  undefined [iam_organisation_policy_tag_list] 

Synopsis

  $ h1-cli iam organisation policy tag list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

###### h1-cli iam organisation policy tag show

```
h1-cli iam organisation policy tag show

  undefined [iam_organisation_policy_tag_get] 

Synopsis

  $ h1-cli iam organisation policy tag show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --tag extractid            tagId
```

##### h1-cli iam organisation policy event

```
h1-cli iam organisation policy event

Synopsis

  $ h1-cli iam organisation policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [iam_organisation_policy_event_list]
```

###### h1-cli iam organisation policy event spec

```
h1-cli iam organisation policy event spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy event spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation policy event list

```
h1-cli iam organisation policy event list

  undefined [iam_organisation_policy_event_list] 

Synopsis

  $ h1-cli iam organisation policy event list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --$limit string            $limit                      
  --$skip string             $skip
```

#### h1-cli iam organisation role

```
h1-cli iam organisation role

Synopsis

  $ h1-cli iam organisation role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                    
  create       Create role [iam_organisation_role_create]        
  list         List role [iam_organisation_role_list]            
  show         Returns a single role [iam_organisation_role_get] 
  permission   Manage permissions of the role                    
  service      Manage services of the role                       
  tag          Manage tags of the role                           
  event        Manage events of the role
```

##### h1-cli iam organisation role spec

```
h1-cli iam organisation role spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam organisation role create

```
h1-cli iam organisation role create

  Create role [iam_organisation_role_create] 

Synopsis

  $ h1-cli iam organisation role create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --organisation extractid     organisation Id                
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --description string                                        
  --permission nestedvalue[]   Use as value=value             
  --tag nestedvalue[]          Use as value=value,name=name
```

##### h1-cli iam organisation role list

```
h1-cli iam organisation role list

  List role [iam_organisation_role_list] 

Synopsis

  $ h1-cli iam organisation role list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --name string              Filter by name              
  --tag string               Filter by tag
```

##### h1-cli iam organisation role show

```
h1-cli iam organisation role show

  Returns a single role [iam_organisation_role_get] 

Synopsis

  $ h1-cli iam organisation role show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

##### h1-cli iam organisation role permission

```
h1-cli iam organisation role permission

Synopsis

  $ h1-cli iam organisation role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                      
  create   undefined [iam_organisation_role_permission_create] 
  list     undefined [iam_organisation_role_permission_list]   
  show     undefined [iam_organisation_role_permission_get]
```

###### h1-cli iam organisation role permission spec

```
h1-cli iam organisation role permission spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role permission spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation role permission create

```
h1-cli iam organisation role permission create

  undefined [iam_organisation_role_permission_create] 

Synopsis

  $ h1-cli iam organisation role permission create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --value string
```

###### h1-cli iam organisation role permission list

```
h1-cli iam organisation role permission list

  undefined [iam_organisation_role_permission_list] 

Synopsis

  $ h1-cli iam organisation role permission list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

###### h1-cli iam organisation role permission show

```
h1-cli iam organisation role permission show

  undefined [iam_organisation_role_permission_get] 

Synopsis

  $ h1-cli iam organisation role permission show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --permission extractid     permissionId
```

##### h1-cli iam organisation role service

```
h1-cli iam organisation role service

Synopsis

  $ h1-cli iam organisation role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [iam_organisation_role_service_list] 
  show   undefined [iam_organisation_role_service_get]
```

###### h1-cli iam organisation role service spec

```
h1-cli iam organisation role service spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role service spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation role service list

```
h1-cli iam organisation role service list

  undefined [iam_organisation_role_service_list] 

Synopsis

  $ h1-cli iam organisation role service list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

###### h1-cli iam organisation role service show

```
h1-cli iam organisation role service show

  undefined [iam_organisation_role_service_get] 

Synopsis

  $ h1-cli iam organisation role service show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --service extractid        serviceId
```

##### h1-cli iam organisation role tag

```
h1-cli iam organisation role tag

Synopsis

  $ h1-cli iam organisation role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [iam_organisation_role_tag_create] 
  list     undefined [iam_organisation_role_tag_list]   
  show     undefined [iam_organisation_role_tag_get]
```

###### h1-cli iam organisation role tag spec

```
h1-cli iam organisation role tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role tag spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation role tag create

```
h1-cli iam organisation role tag create

  undefined [iam_organisation_role_tag_create] 

Synopsis

  $ h1-cli iam organisation role tag create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --id string                                            
  --value string                                         
  --name string
```

###### h1-cli iam organisation role tag list

```
h1-cli iam organisation role tag list

  undefined [iam_organisation_role_tag_list] 

Synopsis

  $ h1-cli iam organisation role tag list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

###### h1-cli iam organisation role tag show

```
h1-cli iam organisation role tag show

  undefined [iam_organisation_role_tag_get] 

Synopsis

  $ h1-cli iam organisation role tag show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --tag extractid            tagId
```

##### h1-cli iam organisation role event

```
h1-cli iam organisation role event

Synopsis

  $ h1-cli iam organisation role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [iam_organisation_role_event_list]
```

###### h1-cli iam organisation role event spec

```
h1-cli iam organisation role event spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role event spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation role event list

```
h1-cli iam organisation role event list

  undefined [iam_organisation_role_event_list] 

Synopsis

  $ h1-cli iam organisation role event list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --$limit string            $limit                      
  --$skip string             $skip
```

### h1-cli iam policy

```
h1-cli iam policy

Synopsis

  $ h1-cli iam policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                   
  create    Create policy [iam_project_policy_create]        
  list      List policy [iam_project_policy_list]            
  show      Returns a single policy [iam_project_policy_get] 
  actor     Manage actors of the policy                      
  service   Manage services of the policy                    
  tag       Manage tags of the policy                        
  event     Manage events of the policy
```

#### h1-cli iam policy spec

```
h1-cli iam policy spec

  Print specification of context 

Synopsis

  $ h1-cli iam policy spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli iam policy create

```
h1-cli iam policy create

  Create policy [iam_project_policy_create] 

Synopsis

  $ h1-cli iam policy create <options> 

Options

  --help                       Show help message and exit.                               
  --passport-file string       Passport file                                             
  --project extractid          project Id                                                
  --x-idempotency-key string                                                             
  --name string                                                                          
  --service string             Provide URI of billing/service                            
  --role string                Provide URI of iam/role. Require permissions iam/role/use 
  --resource string                                                                      
  --actor nestedvalue[]        Use as value=value                                        
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli iam policy list

```
h1-cli iam policy list

  List policy [iam_project_policy_list] 

Synopsis

  $ h1-cli iam policy list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli iam policy show

```
h1-cli iam policy show

  Returns a single policy [iam_project_policy_get] 

Synopsis

  $ h1-cli iam policy show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

#### h1-cli iam policy actor

```
h1-cli iam policy actor

Synopsis

  $ h1-cli iam policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context              
  create   undefined [iam_project_policy_actor_create] 
  list     undefined [iam_project_policy_actor_list]   
  show     undefined [iam_project_policy_actor_get]
```

##### h1-cli iam policy actor spec

```
h1-cli iam policy actor spec

  Print specification of context 

Synopsis

  $ h1-cli iam policy actor spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam policy actor create

```
h1-cli iam policy actor create

  undefined [iam_project_policy_actor_create] 

Synopsis

  $ h1-cli iam policy actor create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --value string
```

##### h1-cli iam policy actor list

```
h1-cli iam policy actor list

  undefined [iam_project_policy_actor_list] 

Synopsis

  $ h1-cli iam policy actor list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

##### h1-cli iam policy actor show

```
h1-cli iam policy actor show

  undefined [iam_project_policy_actor_get] 

Synopsis

  $ h1-cli iam policy actor show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --actor extractid        actorId
```

#### h1-cli iam policy service

```
h1-cli iam policy service

Synopsis

  $ h1-cli iam policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context              
  list   undefined [iam_project_policy_service_list] 
  show   undefined [iam_project_policy_service_get]
```

##### h1-cli iam policy service spec

```
h1-cli iam policy service spec

  Print specification of context 

Synopsis

  $ h1-cli iam policy service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam policy service list

```
h1-cli iam policy service list

  undefined [iam_project_policy_service_list] 

Synopsis

  $ h1-cli iam policy service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

##### h1-cli iam policy service show

```
h1-cli iam policy service show

  undefined [iam_project_policy_service_get] 

Synopsis

  $ h1-cli iam policy service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --service extractid      serviceId
```

#### h1-cli iam policy tag

```
h1-cli iam policy tag

Synopsis

  $ h1-cli iam policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context            
  create   undefined [iam_project_policy_tag_create] 
  list     undefined [iam_project_policy_tag_list]   
  show     undefined [iam_project_policy_tag_get]
```

##### h1-cli iam policy tag spec

```
h1-cli iam policy tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam policy tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam policy tag create

```
h1-cli iam policy tag create

  undefined [iam_project_policy_tag_create] 

Synopsis

  $ h1-cli iam policy tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli iam policy tag list

```
h1-cli iam policy tag list

  undefined [iam_project_policy_tag_list] 

Synopsis

  $ h1-cli iam policy tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id
```

##### h1-cli iam policy tag show

```
h1-cli iam policy tag show

  undefined [iam_project_policy_tag_get] 

Synopsis

  $ h1-cli iam policy tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --tag extractid          tagId
```

#### h1-cli iam policy event

```
h1-cli iam policy event

Synopsis

  $ h1-cli iam policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [iam_project_policy_event_list]
```

##### h1-cli iam policy event spec

```
h1-cli iam policy event spec

  Print specification of context 

Synopsis

  $ h1-cli iam policy event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam policy event list

```
h1-cli iam policy event list

  undefined [iam_project_policy_event_list] 

Synopsis

  $ h1-cli iam policy event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --policy extractid       policy Id                   
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli iam role

```
h1-cli iam role

Synopsis

  $ h1-cli iam role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context               
  create       Create role [iam_project_role_create]        
  list         List role [iam_project_role_list]            
  show         Returns a single role [iam_project_role_get] 
  permission   Manage permissions of the role               
  service      Manage services of the role                  
  tag          Manage tags of the role                      
  event        Manage events of the role
```

#### h1-cli iam role spec

```
h1-cli iam role spec

  Print specification of context 

Synopsis

  $ h1-cli iam role spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli iam role create

```
h1-cli iam role create

  Create role [iam_project_role_create] 

Synopsis

  $ h1-cli iam role create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --description string                                        
  --permission nestedvalue[]   Use as value=value             
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli iam role list

```
h1-cli iam role list

  List role [iam_project_role_list] 

Synopsis

  $ h1-cli iam role list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli iam role show

```
h1-cli iam role show

  Returns a single role [iam_project_role_get] 

Synopsis

  $ h1-cli iam role show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

#### h1-cli iam role permission

```
h1-cli iam role permission

Synopsis

  $ h1-cli iam role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [iam_project_role_permission_create] 
  list     undefined [iam_project_role_permission_list]   
  show     undefined [iam_project_role_permission_get]
```

##### h1-cli iam role permission spec

```
h1-cli iam role permission spec

  Print specification of context 

Synopsis

  $ h1-cli iam role permission spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam role permission create

```
h1-cli iam role permission create

  undefined [iam_project_role_permission_create] 

Synopsis

  $ h1-cli iam role permission create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --value string
```

##### h1-cli iam role permission list

```
h1-cli iam role permission list

  undefined [iam_project_role_permission_list] 

Synopsis

  $ h1-cli iam role permission list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

##### h1-cli iam role permission show

```
h1-cli iam role permission show

  undefined [iam_project_role_permission_get] 

Synopsis

  $ h1-cli iam role permission show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --permission extractid   permissionId
```

#### h1-cli iam role service

```
h1-cli iam role service

Synopsis

  $ h1-cli iam role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [iam_project_role_service_list] 
  show   undefined [iam_project_role_service_get]
```

##### h1-cli iam role service spec

```
h1-cli iam role service spec

  Print specification of context 

Synopsis

  $ h1-cli iam role service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam role service list

```
h1-cli iam role service list

  undefined [iam_project_role_service_list] 

Synopsis

  $ h1-cli iam role service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

##### h1-cli iam role service show

```
h1-cli iam role service show

  undefined [iam_project_role_service_get] 

Synopsis

  $ h1-cli iam role service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --service extractid      serviceId
```

#### h1-cli iam role tag

```
h1-cli iam role tag

Synopsis

  $ h1-cli iam role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context          
  create   undefined [iam_project_role_tag_create] 
  list     undefined [iam_project_role_tag_list]   
  show     undefined [iam_project_role_tag_get]
```

##### h1-cli iam role tag spec

```
h1-cli iam role tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam role tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam role tag create

```
h1-cli iam role tag create

  undefined [iam_project_role_tag_create] 

Synopsis

  $ h1-cli iam role tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli iam role tag list

```
h1-cli iam role tag list

  undefined [iam_project_role_tag_list] 

Synopsis

  $ h1-cli iam role tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id
```

##### h1-cli iam role tag show

```
h1-cli iam role tag show

  undefined [iam_project_role_tag_get] 

Synopsis

  $ h1-cli iam role tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --tag extractid          tagId
```

#### h1-cli iam role event

```
h1-cli iam role event

Synopsis

  $ h1-cli iam role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context          
  list   undefined [iam_project_role_event_list]
```

##### h1-cli iam role event spec

```
h1-cli iam role event spec

  Print specification of context 

Synopsis

  $ h1-cli iam role event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam role event list

```
h1-cli iam role event list

  undefined [iam_project_role_event_list] 

Synopsis

  $ h1-cli iam role event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --role extractid         role Id                     
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli iam sa

```
h1-cli iam sa

Synopsis

  $ h1-cli iam sa <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context           
  create       Create sa [iam_project_sa_create]        
  list         List sa [iam_project_sa_list]            
  show         Returns a single sa [iam_project_sa_get] 
  credential   Manage credentials of the sa             
  service      Manage services of the sa                
  tag          Manage tags of the sa                    
  event        Manage events of the sa
```

#### h1-cli iam sa spec

```
h1-cli iam sa spec

  Print specification of context 

Synopsis

  $ h1-cli iam sa spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli iam sa create

```
h1-cli iam sa create

  Create sa [iam_project_sa_create] 

Synopsis

  $ h1-cli iam sa create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli iam sa list

```
h1-cli iam sa list

  List sa [iam_project_sa_list] 

Synopsis

  $ h1-cli iam sa list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli iam sa show

```
h1-cli iam sa show

  Returns a single sa [iam_project_sa_get] 

Synopsis

  $ h1-cli iam sa show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

#### h1-cli iam sa credential

```
h1-cli iam sa credential

Synopsis

  $ h1-cli iam sa credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [iam_project_sa_credential_create] 
  list     undefined [iam_project_sa_credential_list]
```

##### h1-cli iam sa credential spec

```
h1-cli iam sa credential spec

  Print specification of context 

Synopsis

  $ h1-cli iam sa credential spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam sa credential create

```
h1-cli iam sa credential create

  undefined [iam_project_sa_credential_create] 

Synopsis

  $ h1-cli iam sa credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

##### h1-cli iam sa credential list

```
h1-cli iam sa credential list

  undefined [iam_project_sa_credential_list] 

Synopsis

  $ h1-cli iam sa credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

#### h1-cli iam sa service

```
h1-cli iam sa service

Synopsis

  $ h1-cli iam sa service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context          
  list   undefined [iam_project_sa_service_list] 
  show   undefined [iam_project_sa_service_get]
```

##### h1-cli iam sa service spec

```
h1-cli iam sa service spec

  Print specification of context 

Synopsis

  $ h1-cli iam sa service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam sa service list

```
h1-cli iam sa service list

  undefined [iam_project_sa_service_list] 

Synopsis

  $ h1-cli iam sa service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

##### h1-cli iam sa service show

```
h1-cli iam sa service show

  undefined [iam_project_sa_service_get] 

Synopsis

  $ h1-cli iam sa service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --service extractid      serviceId
```

#### h1-cli iam sa tag

```
h1-cli iam sa tag

Synopsis

  $ h1-cli iam sa tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context        
  create   undefined [iam_project_sa_tag_create] 
  list     undefined [iam_project_sa_tag_list]   
  show     undefined [iam_project_sa_tag_get]
```

##### h1-cli iam sa tag spec

```
h1-cli iam sa tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam sa tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam sa tag create

```
h1-cli iam sa tag create

  undefined [iam_project_sa_tag_create] 

Synopsis

  $ h1-cli iam sa tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli iam sa tag list

```
h1-cli iam sa tag list

  undefined [iam_project_sa_tag_list] 

Synopsis

  $ h1-cli iam sa tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id
```

##### h1-cli iam sa tag show

```
h1-cli iam sa tag show

  undefined [iam_project_sa_tag_get] 

Synopsis

  $ h1-cli iam sa tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --tag extractid          tagId
```

#### h1-cli iam sa event

```
h1-cli iam sa event

Synopsis

  $ h1-cli iam sa event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context        
  list   undefined [iam_project_sa_event_list]
```

##### h1-cli iam sa event spec

```
h1-cli iam sa event spec

  Print specification of context 

Synopsis

  $ h1-cli iam sa event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam sa event list

```
h1-cli iam sa event list

  undefined [iam_project_sa_event_list] 

Synopsis

  $ h1-cli iam sa event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --sa extractid           sa Id                       
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli iam organisation

```
h1-cli iam organisation

Synopsis

  $ h1-cli iam organisation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  policy   Management of policy 
  role     Management of role
```

#### h1-cli iam organisation policy

```
h1-cli iam organisation policy

Synopsis

  $ h1-cli iam organisation policy <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                        
  create    Create policy [iam_organisation_policy_create]        
  list      List policy [iam_organisation_policy_list]            
  show      Returns a single policy [iam_organisation_policy_get] 
  actor     Manage actors of the policy                           
  service   Manage services of the policy                         
  tag       Manage tags of the policy                             
  event     Manage events of the policy
```

##### h1-cli iam organisation policy spec

```
h1-cli iam organisation policy spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam organisation policy create

```
h1-cli iam organisation policy create

  Create policy [iam_organisation_policy_create] 

Synopsis

  $ h1-cli iam organisation policy create <options> 

Options

  --help                       Show help message and exit.                               
  --passport-file string       Passport file                                             
  --organisation extractid     organisation Id                                           
  --x-idempotency-key string                                                             
  --name string                                                                          
  --service string             Provide URI of billing/service                            
  --role string                Provide URI of iam/role. Require permissions iam/role/use 
  --resource string                                                                      
  --actor nestedvalue[]        Use as value=value                                        
  --tag nestedvalue[]          Use as value=value,name=name
```

##### h1-cli iam organisation policy list

```
h1-cli iam organisation policy list

  List policy [iam_organisation_policy_list] 

Synopsis

  $ h1-cli iam organisation policy list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --name string              Filter by name              
  --tag string               Filter by tag
```

##### h1-cli iam organisation policy show

```
h1-cli iam organisation policy show

  Returns a single policy [iam_organisation_policy_get] 

Synopsis

  $ h1-cli iam organisation policy show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

##### h1-cli iam organisation policy actor

```
h1-cli iam organisation policy actor

Synopsis

  $ h1-cli iam organisation policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [iam_organisation_policy_actor_create] 
  list     undefined [iam_organisation_policy_actor_list]   
  show     undefined [iam_organisation_policy_actor_get]
```

###### h1-cli iam organisation policy actor spec

```
h1-cli iam organisation policy actor spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy actor spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation policy actor create

```
h1-cli iam organisation policy actor create

  undefined [iam_organisation_policy_actor_create] 

Synopsis

  $ h1-cli iam organisation policy actor create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --value string
```

###### h1-cli iam organisation policy actor list

```
h1-cli iam organisation policy actor list

  undefined [iam_organisation_policy_actor_list] 

Synopsis

  $ h1-cli iam organisation policy actor list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

###### h1-cli iam organisation policy actor show

```
h1-cli iam organisation policy actor show

  undefined [iam_organisation_policy_actor_get] 

Synopsis

  $ h1-cli iam organisation policy actor show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --actor extractid          actorId
```

##### h1-cli iam organisation policy service

```
h1-cli iam organisation policy service

Synopsis

  $ h1-cli iam organisation policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [iam_organisation_policy_service_list] 
  show   undefined [iam_organisation_policy_service_get]
```

###### h1-cli iam organisation policy service spec

```
h1-cli iam organisation policy service spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy service spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation policy service list

```
h1-cli iam organisation policy service list

  undefined [iam_organisation_policy_service_list] 

Synopsis

  $ h1-cli iam organisation policy service list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

###### h1-cli iam organisation policy service show

```
h1-cli iam organisation policy service show

  undefined [iam_organisation_policy_service_get] 

Synopsis

  $ h1-cli iam organisation policy service show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --service extractid        serviceId
```

##### h1-cli iam organisation policy tag

```
h1-cli iam organisation policy tag

Synopsis

  $ h1-cli iam organisation policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [iam_organisation_policy_tag_create] 
  list     undefined [iam_organisation_policy_tag_list]   
  show     undefined [iam_organisation_policy_tag_get]
```

###### h1-cli iam organisation policy tag spec

```
h1-cli iam organisation policy tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy tag spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation policy tag create

```
h1-cli iam organisation policy tag create

  undefined [iam_organisation_policy_tag_create] 

Synopsis

  $ h1-cli iam organisation policy tag create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --id string                                            
  --value string                                         
  --name string
```

###### h1-cli iam organisation policy tag list

```
h1-cli iam organisation policy tag list

  undefined [iam_organisation_policy_tag_list] 

Synopsis

  $ h1-cli iam organisation policy tag list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id
```

###### h1-cli iam organisation policy tag show

```
h1-cli iam organisation policy tag show

  undefined [iam_organisation_policy_tag_get] 

Synopsis

  $ h1-cli iam organisation policy tag show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --tag extractid            tagId
```

##### h1-cli iam organisation policy event

```
h1-cli iam organisation policy event

Synopsis

  $ h1-cli iam organisation policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [iam_organisation_policy_event_list]
```

###### h1-cli iam organisation policy event spec

```
h1-cli iam organisation policy event spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation policy event spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation policy event list

```
h1-cli iam organisation policy event list

  undefined [iam_organisation_policy_event_list] 

Synopsis

  $ h1-cli iam organisation policy event list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --policy extractid         policy Id                   
  --$limit string            $limit                      
  --$skip string             $skip
```

#### h1-cli iam organisation role

```
h1-cli iam organisation role

Synopsis

  $ h1-cli iam organisation role <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                    
  create       Create role [iam_organisation_role_create]        
  list         List role [iam_organisation_role_list]            
  show         Returns a single role [iam_organisation_role_get] 
  permission   Manage permissions of the role                    
  service      Manage services of the role                       
  tag          Manage tags of the role                           
  event        Manage events of the role
```

##### h1-cli iam organisation role spec

```
h1-cli iam organisation role spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli iam organisation role create

```
h1-cli iam organisation role create

  Create role [iam_organisation_role_create] 

Synopsis

  $ h1-cli iam organisation role create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --organisation extractid     organisation Id                
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --description string                                        
  --permission nestedvalue[]   Use as value=value             
  --tag nestedvalue[]          Use as value=value,name=name
```

##### h1-cli iam organisation role list

```
h1-cli iam organisation role list

  List role [iam_organisation_role_list] 

Synopsis

  $ h1-cli iam organisation role list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --name string              Filter by name              
  --tag string               Filter by tag
```

##### h1-cli iam organisation role show

```
h1-cli iam organisation role show

  Returns a single role [iam_organisation_role_get] 

Synopsis

  $ h1-cli iam organisation role show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

##### h1-cli iam organisation role permission

```
h1-cli iam organisation role permission

Synopsis

  $ h1-cli iam organisation role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                      
  create   undefined [iam_organisation_role_permission_create] 
  list     undefined [iam_organisation_role_permission_list]   
  show     undefined [iam_organisation_role_permission_get]
```

###### h1-cli iam organisation role permission spec

```
h1-cli iam organisation role permission spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role permission spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation role permission create

```
h1-cli iam organisation role permission create

  undefined [iam_organisation_role_permission_create] 

Synopsis

  $ h1-cli iam organisation role permission create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --value string
```

###### h1-cli iam organisation role permission list

```
h1-cli iam organisation role permission list

  undefined [iam_organisation_role_permission_list] 

Synopsis

  $ h1-cli iam organisation role permission list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

###### h1-cli iam organisation role permission show

```
h1-cli iam organisation role permission show

  undefined [iam_organisation_role_permission_get] 

Synopsis

  $ h1-cli iam organisation role permission show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --permission extractid     permissionId
```

##### h1-cli iam organisation role service

```
h1-cli iam organisation role service

Synopsis

  $ h1-cli iam organisation role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [iam_organisation_role_service_list] 
  show   undefined [iam_organisation_role_service_get]
```

###### h1-cli iam organisation role service spec

```
h1-cli iam organisation role service spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role service spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation role service list

```
h1-cli iam organisation role service list

  undefined [iam_organisation_role_service_list] 

Synopsis

  $ h1-cli iam organisation role service list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

###### h1-cli iam organisation role service show

```
h1-cli iam organisation role service show

  undefined [iam_organisation_role_service_get] 

Synopsis

  $ h1-cli iam organisation role service show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --service extractid        serviceId
```

##### h1-cli iam organisation role tag

```
h1-cli iam organisation role tag

Synopsis

  $ h1-cli iam organisation role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [iam_organisation_role_tag_create] 
  list     undefined [iam_organisation_role_tag_list]   
  show     undefined [iam_organisation_role_tag_get]
```

###### h1-cli iam organisation role tag spec

```
h1-cli iam organisation role tag spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role tag spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation role tag create

```
h1-cli iam organisation role tag create

  undefined [iam_organisation_role_tag_create] 

Synopsis

  $ h1-cli iam organisation role tag create <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --id string                                            
  --value string                                         
  --name string
```

###### h1-cli iam organisation role tag list

```
h1-cli iam organisation role tag list

  undefined [iam_organisation_role_tag_list] 

Synopsis

  $ h1-cli iam organisation role tag list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id
```

###### h1-cli iam organisation role tag show

```
h1-cli iam organisation role tag show

  undefined [iam_organisation_role_tag_get] 

Synopsis

  $ h1-cli iam organisation role tag show <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --tag extractid            tagId
```

##### h1-cli iam organisation role event

```
h1-cli iam organisation role event

Synopsis

  $ h1-cli iam organisation role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [iam_organisation_role_event_list]
```

###### h1-cli iam organisation role event spec

```
h1-cli iam organisation role event spec

  Print specification of context 

Synopsis

  $ h1-cli iam organisation role event spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli iam organisation role event list

```
h1-cli iam organisation role event list

  undefined [iam_organisation_role_event_list] 

Synopsis

  $ h1-cli iam organisation role event list <options> 

Options

  --help                     Show help message and exit. 
  --passport-file string     Passport file               
  --organisation extractid   organisation Id             
  --role extractid           role Id                     
  --$limit string            $limit                      
  --$skip string             $skip
```

## h1-cli provider

```
h1-cli provider

Synopsis

  $ h1-cli provider <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec    Print specification of context 
  agent   Management of agent
```

### h1-cli provider spec

```
h1-cli provider spec

  Print specification of context 

Synopsis

  $ h1-cli provider spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli provider agent

```
h1-cli provider agent

Synopsis

  $ h1-cli provider agent <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                      
  create       Create agent [provider_project_agent_create]        
  list         List agent [provider_project_agent_list]            
  show         Returns a single agent [provider_project_agent_get] 
  start        Action start [provider_project_agent_start]         
  suspend      Action suspend [provider_project_agent_suspend]     
  transfer     Action transfer [provider_project_agent_transfer]   
  inspect      Manage inspects of the agent                        
  resource     Manage resources of the agent                       
  credential   Manage credentials of the agent                     
  service      Manage services of the agent                        
  tag          Manage tags of the agent                            
  event        Manage events of the agent
```

#### h1-cli provider agent spec

```
h1-cli provider agent spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli provider agent create

```
h1-cli provider agent create

  Create agent [provider_project_agent_create] 

Synopsis

  $ h1-cli provider agent create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli provider agent list

```
h1-cli provider agent list

  List agent [provider_project_agent_list] 

Synopsis

  $ h1-cli provider agent list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli provider agent show

```
h1-cli provider agent show

  Returns a single agent [provider_project_agent_get] 

Synopsis

  $ h1-cli provider agent show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

#### h1-cli provider agent start

```
h1-cli provider agent start

  Action start [provider_project_agent_start] 

Synopsis

  $ h1-cli provider agent start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --agent extractid            agent Id                    
  --x-idempotency-key string
```

#### h1-cli provider agent suspend

```
h1-cli provider agent suspend

  Action suspend [provider_project_agent_suspend] 

Synopsis

  $ h1-cli provider agent suspend <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --agent extractid            agent Id                    
  --x-idempotency-key string
```

#### h1-cli provider agent transfer

```
h1-cli provider agent transfer

  Action transfer [provider_project_agent_transfer] 

Synopsis

  $ h1-cli provider agent transfer <options> 

Options

  --help                       Show help message and exit.                                           
  --passport-file string       Passport file                                                         
  --project extractid          project Id                                                            
  --location extractid         location Id                                                           
  --agent extractid            agent Id                                                              
  --x-idempotency-key string                                                                         
  --project string             Provide URI of iam/project. Require permissions provider/agent/create
```

#### h1-cli provider agent inspect

```
h1-cli provider agent inspect

Synopsis

  $ h1-cli provider agent inspect <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [provider_project_agent_inspect_get]
```

##### h1-cli provider agent inspect spec

```
h1-cli provider agent inspect spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent inspect spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli provider agent inspect list

```
h1-cli provider agent inspect list

  undefined [provider_project_agent_inspect_get] 

Synopsis

  $ h1-cli provider agent inspect list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

#### h1-cli provider agent resource

```
h1-cli provider agent resource

Synopsis

  $ h1-cli provider agent resource <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                                      
  list       undefined [provider_project_agent_resource_list]                    
  recreate   undefined [provider_project_agent_resource_actions_recreate_create] 
  inspect    Manage inspects of the resource                                     
  event      Manage events of the resource
```

##### h1-cli provider agent resource spec

```
h1-cli provider agent resource spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent resource spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli provider agent resource list

```
h1-cli provider agent resource list

  undefined [provider_project_agent_resource_list] 

Synopsis

  $ h1-cli provider agent resource list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

##### h1-cli provider agent resource recreate

```
h1-cli provider agent resource recreate

  undefined [provider_project_agent_resource_actions_recreate_create] 

Synopsis

  $ h1-cli provider agent resource recreate <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --resource extractid     resourceId
```

##### h1-cli provider agent resource inspect

```
h1-cli provider agent resource inspect

Synopsis

  $ h1-cli provider agent resource inspect <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                          
  list   undefined [provider_project_agent_resource_inspect_get]
```

###### h1-cli provider agent resource inspect spec

```
h1-cli provider agent resource inspect spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent resource inspect spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli provider agent resource inspect list

```
h1-cli provider agent resource inspect list

  undefined [provider_project_agent_resource_inspect_get] 

Synopsis

  $ h1-cli provider agent resource inspect list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --resource extractid     resourceId
```

##### h1-cli provider agent resource event

```
h1-cli provider agent resource event

Synopsis

  $ h1-cli provider agent resource event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                         
  list   undefined [provider_project_agent_resource_event_list]
```

###### h1-cli provider agent resource event spec

```
h1-cli provider agent resource event spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent resource event spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli provider agent resource event list

```
h1-cli provider agent resource event list

  undefined [provider_project_agent_resource_event_list] 

Synopsis

  $ h1-cli provider agent resource event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --resource extractid     resourceId                  
  --$limit string          $limit                      
  --$skip string           $skip
```

#### h1-cli provider agent credential

```
h1-cli provider agent credential

Synopsis

  $ h1-cli provider agent credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                       
  create   undefined [provider_project_agent_credential_create] 
  list     undefined [provider_project_agent_credential_list]
```

##### h1-cli provider agent credential spec

```
h1-cli provider agent credential spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent credential spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli provider agent credential create

```
h1-cli provider agent credential create

  undefined [provider_project_agent_credential_create] 

Synopsis

  $ h1-cli provider agent credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

##### h1-cli provider agent credential list

```
h1-cli provider agent credential list

  undefined [provider_project_agent_credential_list] 

Synopsis

  $ h1-cli provider agent credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

#### h1-cli provider agent service

```
h1-cli provider agent service

Synopsis

  $ h1-cli provider agent service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   undefined [provider_project_agent_service_list] 
  show   undefined [provider_project_agent_service_get]
```

##### h1-cli provider agent service spec

```
h1-cli provider agent service spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli provider agent service list

```
h1-cli provider agent service list

  undefined [provider_project_agent_service_list] 

Synopsis

  $ h1-cli provider agent service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

##### h1-cli provider agent service show

```
h1-cli provider agent service show

  undefined [provider_project_agent_service_get] 

Synopsis

  $ h1-cli provider agent service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --service extractid      serviceId
```

#### h1-cli provider agent tag

```
h1-cli provider agent tag

Synopsis

  $ h1-cli provider agent tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                
  create   undefined [provider_project_agent_tag_create] 
  list     undefined [provider_project_agent_tag_list]   
  show     undefined [provider_project_agent_tag_get]
```

##### h1-cli provider agent tag spec

```
h1-cli provider agent tag spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli provider agent tag create

```
h1-cli provider agent tag create

  undefined [provider_project_agent_tag_create] 

Synopsis

  $ h1-cli provider agent tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli provider agent tag list

```
h1-cli provider agent tag list

  undefined [provider_project_agent_tag_list] 

Synopsis

  $ h1-cli provider agent tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id
```

##### h1-cli provider agent tag show

```
h1-cli provider agent tag show

  undefined [provider_project_agent_tag_get] 

Synopsis

  $ h1-cli provider agent tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --tag extractid          tagId
```

#### h1-cli provider agent event

```
h1-cli provider agent event

Synopsis

  $ h1-cli provider agent event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                
  list   undefined [provider_project_agent_event_list]
```

##### h1-cli provider agent event spec

```
h1-cli provider agent event spec

  Print specification of context 

Synopsis

  $ h1-cli provider agent event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli provider agent event list

```
h1-cli provider agent event list

  undefined [provider_project_agent_event_list] 

Synopsis

  $ h1-cli provider agent event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --agent extractid        agent Id                    
  --$limit string          $limit                      
  --$skip string           $skip
```

## h1-cli container

```
h1-cli container

Synopsis

  $ h1-cli container <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  instance   Management of instance         
  registry   Management of registry         
  volume     Management of volume
```

### h1-cli container spec

```
h1-cli container spec

  Print specification of context 

Synopsis

  $ h1-cli container spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli container instance

```
h1-cli container instance

Synopsis

  $ h1-cli container instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                             
  create    Create instance [container_project_instance_create]        
  list      List instance [container_project_instance_list]            
  show      Returns a single instance [container_project_instance_get] 
  start     Action start [container_project_instance_start]            
  stop      Action stop [container_project_instance_stop]              
  restart   Action restart [container_project_instance_restart]        
  process   Manage processes of the instance                           
  service   Manage services of the instance                            
  tag       Manage tags of the instance                                
  event     Manage events of the instance
```

#### h1-cli container instance spec

```
h1-cli container instance spec

  Print specification of context 

Synopsis

  $ h1-cli container instance spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli container instance create

```
h1-cli container instance create

  Create instance [container_project_instance_create] 

Synopsis

  $ h1-cli container instance create <options> 

Options

  --help                       Show help message and exit.                                  
  --passport-file string       Passport file                                                
  --project extractid          project Id                                                   
  --location extractid         location Id                                                  
  --x-idempotency-key string                                                                
  --name string                                                                             
  --service string             Provide URI of billing/service                               
  --image string                                                                            
  --registry string                                                                         
  --expose nestedvalue[]       Use as internal=internal,external=external,protocol=protocol 
  --env string[]                                                                            
  --volumes nestedvalue[]      Use as source=source,sourcePath=sourcePath,target=target     
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli container instance list

```
h1-cli container instance list

  List instance [container_project_instance_list] 

Synopsis

  $ h1-cli container instance list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli container instance show

```
h1-cli container instance show

  Returns a single instance [container_project_instance_get] 

Synopsis

  $ h1-cli container instance show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

#### h1-cli container instance start

```
h1-cli container instance start

  Action start [container_project_instance_start] 

Synopsis

  $ h1-cli container instance start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

#### h1-cli container instance stop

```
h1-cli container instance stop

  Action stop [container_project_instance_stop] 

Synopsis

  $ h1-cli container instance stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

#### h1-cli container instance restart

```
h1-cli container instance restart

  Action restart [container_project_instance_restart] 

Synopsis

  $ h1-cli container instance restart <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

#### h1-cli container instance process

```
h1-cli container instance process

Synopsis

  $ h1-cli container instance process <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                      
  list   undefined [container_project_instance_process_list]
```

##### h1-cli container instance process spec

```
h1-cli container instance process spec

  Print specification of context 

Synopsis

  $ h1-cli container instance process spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container instance process list

```
h1-cli container instance process list

  undefined [container_project_instance_process_list] 

Synopsis

  $ h1-cli container instance process list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

#### h1-cli container instance service

```
h1-cli container instance service

Synopsis

  $ h1-cli container instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                      
  list   undefined [container_project_instance_service_list] 
  show   undefined [container_project_instance_service_get]
```

##### h1-cli container instance service spec

```
h1-cli container instance service spec

  Print specification of context 

Synopsis

  $ h1-cli container instance service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container instance service list

```
h1-cli container instance service list

  undefined [container_project_instance_service_list] 

Synopsis

  $ h1-cli container instance service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

##### h1-cli container instance service show

```
h1-cli container instance service show

  undefined [container_project_instance_service_get] 

Synopsis

  $ h1-cli container instance service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --service extractid      serviceId
```

#### h1-cli container instance tag

```
h1-cli container instance tag

Synopsis

  $ h1-cli container instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                    
  create   undefined [container_project_instance_tag_create] 
  list     undefined [container_project_instance_tag_list]   
  show     undefined [container_project_instance_tag_get]
```

##### h1-cli container instance tag spec

```
h1-cli container instance tag spec

  Print specification of context 

Synopsis

  $ h1-cli container instance tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container instance tag create

```
h1-cli container instance tag create

  undefined [container_project_instance_tag_create] 

Synopsis

  $ h1-cli container instance tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli container instance tag list

```
h1-cli container instance tag list

  undefined [container_project_instance_tag_list] 

Synopsis

  $ h1-cli container instance tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

##### h1-cli container instance tag show

```
h1-cli container instance tag show

  undefined [container_project_instance_tag_get] 

Synopsis

  $ h1-cli container instance tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --tag extractid          tagId
```

#### h1-cli container instance event

```
h1-cli container instance event

Synopsis

  $ h1-cli container instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [container_project_instance_event_list]
```

##### h1-cli container instance event spec

```
h1-cli container instance event spec

  Print specification of context 

Synopsis

  $ h1-cli container instance event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container instance event list

```
h1-cli container instance event list

  undefined [container_project_instance_event_list] 

Synopsis

  $ h1-cli container instance event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli container registry

```
h1-cli container registry

Synopsis

  $ h1-cli container registry <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                             
  create       Create registry [container_project_registry_create]        
  list         List registry [container_project_registry_list]            
  show         Returns a single registry [container_project_registry_get] 
  start        Action start [container_project_registry_start]            
  stop         Action stop [container_project_registry_stop]              
  transfer     Action transfer [container_project_registry_transfer]      
  repository   Manage repositories of the registry                        
  credential   Manage credentials of the registry                         
  service      Manage services of the registry                            
  tag          Manage tags of the registry                                
  event        Manage events of the registry
```

#### h1-cli container registry spec

```
h1-cli container registry spec

  Print specification of context 

Synopsis

  $ h1-cli container registry spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli container registry create

```
h1-cli container registry create

  Create registry [container_project_registry_create] 

Synopsis

  $ h1-cli container registry create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli container registry list

```
h1-cli container registry list

  List registry [container_project_registry_list] 

Synopsis

  $ h1-cli container registry list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli container registry show

```
h1-cli container registry show

  Returns a single registry [container_project_registry_get] 

Synopsis

  $ h1-cli container registry show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id
```

#### h1-cli container registry start

```
h1-cli container registry start

  Action start [container_project_registry_start] 

Synopsis

  $ h1-cli container registry start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --registry extractid         registry Id                 
  --x-idempotency-key string
```

#### h1-cli container registry stop

```
h1-cli container registry stop

  Action stop [container_project_registry_stop] 

Synopsis

  $ h1-cli container registry stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --registry extractid         registry Id                 
  --x-idempotency-key string
```

#### h1-cli container registry transfer

```
h1-cli container registry transfer

  Action transfer [container_project_registry_transfer] 

Synopsis

  $ h1-cli container registry transfer <options> 

Options

  --help                       Show help message and exit.                                               
  --passport-file string       Passport file                                                             
  --project extractid          project Id                                                                
  --location extractid         location Id                                                               
  --registry extractid         registry Id                                                               
  --x-idempotency-key string                                                                             
  --project string             Provide URI of iam/project. Require permissions container/registry/create
```

#### h1-cli container registry repository

```
h1-cli container registry repository

Synopsis

  $ h1-cli container registry repository <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec    Print specification of context                         
  list    undefined [container_project_registry_repository_list] 
  show    undefined [container_project_registry_repository_get]  
  image   Manage images of the repository
```

##### h1-cli container registry repository spec

```
h1-cli container registry repository spec

  Print specification of context 

Synopsis

  $ h1-cli container registry repository spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container registry repository list

```
h1-cli container registry repository list

  undefined [container_project_registry_repository_list] 

Synopsis

  $ h1-cli container registry repository list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id
```

##### h1-cli container registry repository show

```
h1-cli container registry repository show

  undefined [container_project_registry_repository_get] 

Synopsis

  $ h1-cli container registry repository show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --repository extractid   repositoryId
```

##### h1-cli container registry repository image

```
h1-cli container registry repository image

Synopsis

  $ h1-cli container registry repository image <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                               
  list   undefined [container_project_registry_repository_image_list] 
  show   undefined [container_project_registry_repository_image_get]
```

###### h1-cli container registry repository image spec

```
h1-cli container registry repository image spec

  Print specification of context 

Synopsis

  $ h1-cli container registry repository image spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli container registry repository image list

```
h1-cli container registry repository image list

  undefined [container_project_registry_repository_image_list] 

Synopsis

  $ h1-cli container registry repository image list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --repository extractid   repositoryId
```

###### h1-cli container registry repository image show

```
h1-cli container registry repository image show

  undefined [container_project_registry_repository_image_get] 

Synopsis

  $ h1-cli container registry repository image show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --repository extractid   repositoryId                
  --image extractid        imageId
```

#### h1-cli container registry credential

```
h1-cli container registry credential

Synopsis

  $ h1-cli container registry credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                           
  create   undefined [container_project_registry_credential_create] 
  list     undefined [container_project_registry_credential_list]
```

##### h1-cli container registry credential spec

```
h1-cli container registry credential spec

  Print specification of context 

Synopsis

  $ h1-cli container registry credential spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container registry credential create

```
h1-cli container registry credential create

  undefined [container_project_registry_credential_create] 

Synopsis

  $ h1-cli container registry credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

##### h1-cli container registry credential list

```
h1-cli container registry credential list

  undefined [container_project_registry_credential_list] 

Synopsis

  $ h1-cli container registry credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id
```

#### h1-cli container registry service

```
h1-cli container registry service

Synopsis

  $ h1-cli container registry service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                      
  list   undefined [container_project_registry_service_list] 
  show   undefined [container_project_registry_service_get]
```

##### h1-cli container registry service spec

```
h1-cli container registry service spec

  Print specification of context 

Synopsis

  $ h1-cli container registry service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container registry service list

```
h1-cli container registry service list

  undefined [container_project_registry_service_list] 

Synopsis

  $ h1-cli container registry service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id
```

##### h1-cli container registry service show

```
h1-cli container registry service show

  undefined [container_project_registry_service_get] 

Synopsis

  $ h1-cli container registry service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --service extractid      serviceId
```

#### h1-cli container registry tag

```
h1-cli container registry tag

Synopsis

  $ h1-cli container registry tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                    
  create   undefined [container_project_registry_tag_create] 
  list     undefined [container_project_registry_tag_list]   
  show     undefined [container_project_registry_tag_get]
```

##### h1-cli container registry tag spec

```
h1-cli container registry tag spec

  Print specification of context 

Synopsis

  $ h1-cli container registry tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container registry tag create

```
h1-cli container registry tag create

  undefined [container_project_registry_tag_create] 

Synopsis

  $ h1-cli container registry tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli container registry tag list

```
h1-cli container registry tag list

  undefined [container_project_registry_tag_list] 

Synopsis

  $ h1-cli container registry tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id
```

##### h1-cli container registry tag show

```
h1-cli container registry tag show

  undefined [container_project_registry_tag_get] 

Synopsis

  $ h1-cli container registry tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --tag extractid          tagId
```

#### h1-cli container registry event

```
h1-cli container registry event

Synopsis

  $ h1-cli container registry event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [container_project_registry_event_list]
```

##### h1-cli container registry event spec

```
h1-cli container registry event spec

  Print specification of context 

Synopsis

  $ h1-cli container registry event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container registry event list

```
h1-cli container registry event list

  undefined [container_project_registry_event_list] 

Synopsis

  $ h1-cli container registry event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --registry extractid     registry Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli container volume

```
h1-cli container volume

Synopsis

  $ h1-cli container volume <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                         
  create    Create volume [container_project_volume_create]        
  list      List volume [container_project_volume_list]            
  show      Returns a single volume [container_project_volume_get] 
  service   Manage services of the volume                          
  tag       Manage tags of the volume                              
  event     Manage events of the volume
```

#### h1-cli container volume spec

```
h1-cli container volume spec

  Print specification of context 

Synopsis

  $ h1-cli container volume spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli container volume create

```
h1-cli container volume create

  Create volume [container_project_volume_create] 

Synopsis

  $ h1-cli container volume create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --size string                                               
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli container volume list

```
h1-cli container volume list

  List volume [container_project_volume_list] 

Synopsis

  $ h1-cli container volume list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli container volume show

```
h1-cli container volume show

  Returns a single volume [container_project_volume_get] 

Synopsis

  $ h1-cli container volume show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id
```

#### h1-cli container volume service

```
h1-cli container volume service

Synopsis

  $ h1-cli container volume service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [container_project_volume_service_list] 
  show   undefined [container_project_volume_service_get]
```

##### h1-cli container volume service spec

```
h1-cli container volume service spec

  Print specification of context 

Synopsis

  $ h1-cli container volume service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container volume service list

```
h1-cli container volume service list

  undefined [container_project_volume_service_list] 

Synopsis

  $ h1-cli container volume service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id
```

##### h1-cli container volume service show

```
h1-cli container volume service show

  undefined [container_project_volume_service_get] 

Synopsis

  $ h1-cli container volume service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id                   
  --service extractid      serviceId
```

#### h1-cli container volume tag

```
h1-cli container volume tag

Synopsis

  $ h1-cli container volume tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                  
  create   undefined [container_project_volume_tag_create] 
  list     undefined [container_project_volume_tag_list]   
  show     undefined [container_project_volume_tag_get]
```

##### h1-cli container volume tag spec

```
h1-cli container volume tag spec

  Print specification of context 

Synopsis

  $ h1-cli container volume tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container volume tag create

```
h1-cli container volume tag create

  undefined [container_project_volume_tag_create] 

Synopsis

  $ h1-cli container volume tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id                   
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli container volume tag list

```
h1-cli container volume tag list

  undefined [container_project_volume_tag_list] 

Synopsis

  $ h1-cli container volume tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id
```

##### h1-cli container volume tag show

```
h1-cli container volume tag show

  undefined [container_project_volume_tag_get] 

Synopsis

  $ h1-cli container volume tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id                   
  --tag extractid          tagId
```

#### h1-cli container volume event

```
h1-cli container volume event

Synopsis

  $ h1-cli container volume event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   undefined [container_project_volume_event_list]
```

##### h1-cli container volume event spec

```
h1-cli container volume event spec

  Print specification of context 

Synopsis

  $ h1-cli container volume event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli container volume event list

```
h1-cli container volume event list

  undefined [container_project_volume_event_list] 

Synopsis

  $ h1-cli container volume event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --volume extractid       volume Id                   
  --$limit string          $limit                      
  --$skip string           $skip
```

## h1-cli database

```
h1-cli database

Synopsis

  $ h1-cli database <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  instance   Management of instance
```

### h1-cli database spec

```
h1-cli database spec

  Print specification of context 

Synopsis

  $ h1-cli database spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli database instance

```
h1-cli database instance

Synopsis

  $ h1-cli database instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                            
  create       Create instance [database_project_instance_create]        
  list         List instance [database_project_instance_list]            
  show         Returns a single instance [database_project_instance_get] 
  start        Action start [database_project_instance_start]            
  stop         Action stop [database_project_instance_stop]              
  transfer     Action transfer [database_project_instance_transfer]      
  credential   Manage credentials of the instance                        
  service      Manage services of the instance                           
  tag          Manage tags of the instance                               
  event        Manage events of the instance
```

#### h1-cli database instance spec

```
h1-cli database instance spec

  Print specification of context 

Synopsis

  $ h1-cli database instance spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli database instance create

```
h1-cli database instance create

  Create instance [database_project_instance_create] 

Synopsis

  $ h1-cli database instance create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli database instance list

```
h1-cli database instance list

  List instance [database_project_instance_list] 

Synopsis

  $ h1-cli database instance list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli database instance show

```
h1-cli database instance show

  Returns a single instance [database_project_instance_get] 

Synopsis

  $ h1-cli database instance show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

#### h1-cli database instance start

```
h1-cli database instance start

  Action start [database_project_instance_start] 

Synopsis

  $ h1-cli database instance start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

#### h1-cli database instance stop

```
h1-cli database instance stop

  Action stop [database_project_instance_stop] 

Synopsis

  $ h1-cli database instance stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

#### h1-cli database instance transfer

```
h1-cli database instance transfer

  Action transfer [database_project_instance_transfer] 

Synopsis

  $ h1-cli database instance transfer <options> 

Options

  --help                       Show help message and exit.                                              
  --passport-file string       Passport file                                                            
  --project extractid          project Id                                                               
  --location extractid         location Id                                                              
  --instance extractid         instance Id                                                              
  --x-idempotency-key string                                                                            
  --project string             Provide URI of iam/project. Require permissions database/database/create
```

#### h1-cli database instance credential

```
h1-cli database instance credential

Synopsis

  $ h1-cli database instance credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                          
  create   undefined [database_project_instance_credential_create] 
  list     undefined [database_project_instance_credential_list]
```

##### h1-cli database instance credential spec

```
h1-cli database instance credential spec

  Print specification of context 

Synopsis

  $ h1-cli database instance credential spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli database instance credential create

```
h1-cli database instance credential create

  undefined [database_project_instance_credential_create] 

Synopsis

  $ h1-cli database instance credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

##### h1-cli database instance credential list

```
h1-cli database instance credential list

  undefined [database_project_instance_credential_list] 

Synopsis

  $ h1-cli database instance credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

#### h1-cli database instance service

```
h1-cli database instance service

Synopsis

  $ h1-cli database instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                     
  list   undefined [database_project_instance_service_list] 
  show   undefined [database_project_instance_service_get]
```

##### h1-cli database instance service spec

```
h1-cli database instance service spec

  Print specification of context 

Synopsis

  $ h1-cli database instance service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli database instance service list

```
h1-cli database instance service list

  undefined [database_project_instance_service_list] 

Synopsis

  $ h1-cli database instance service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

##### h1-cli database instance service show

```
h1-cli database instance service show

  undefined [database_project_instance_service_get] 

Synopsis

  $ h1-cli database instance service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --service extractid      serviceId
```

#### h1-cli database instance tag

```
h1-cli database instance tag

Synopsis

  $ h1-cli database instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [database_project_instance_tag_create] 
  list     undefined [database_project_instance_tag_list]   
  show     undefined [database_project_instance_tag_get]
```

##### h1-cli database instance tag spec

```
h1-cli database instance tag spec

  Print specification of context 

Synopsis

  $ h1-cli database instance tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli database instance tag create

```
h1-cli database instance tag create

  undefined [database_project_instance_tag_create] 

Synopsis

  $ h1-cli database instance tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli database instance tag list

```
h1-cli database instance tag list

  undefined [database_project_instance_tag_list] 

Synopsis

  $ h1-cli database instance tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

##### h1-cli database instance tag show

```
h1-cli database instance tag show

  undefined [database_project_instance_tag_get] 

Synopsis

  $ h1-cli database instance tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --tag extractid          tagId
```

#### h1-cli database instance event

```
h1-cli database instance event

Synopsis

  $ h1-cli database instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [database_project_instance_event_list]
```

##### h1-cli database instance event spec

```
h1-cli database instance event spec

  Print specification of context 

Synopsis

  $ h1-cli database instance event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli database instance event list

```
h1-cli database instance event list

  undefined [database_project_instance_event_list] 

Synopsis

  $ h1-cli database instance event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

## h1-cli insight

```
h1-cli insight

Synopsis

  $ h1-cli insight <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context 
  journal   Management of journal
```

### h1-cli insight spec

```
h1-cli insight spec

  Print specification of context 

Synopsis

  $ h1-cli insight spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli insight journal

```
h1-cli insight journal

Synopsis

  $ h1-cli insight journal <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                         
  create       Create journal [insight_project_journal_create]        
  list         List journal [insight_project_journal_list]            
  show         Returns a single journal [insight_project_journal_get] 
  transfer     Action transfer [insight_project_journal_transfer]     
  log          Manage logs of the journal                             
  credential   Manage credentials of the journal                      
  service      Manage services of the journal                         
  tag          Manage tags of the journal                             
  event        Manage events of the journal
```

#### h1-cli insight journal spec

```
h1-cli insight journal spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli insight journal create

```
h1-cli insight journal create

  Create journal [insight_project_journal_create] 

Synopsis

  $ h1-cli insight journal create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --retention string                                          
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli insight journal list

```
h1-cli insight journal list

  List journal [insight_project_journal_list] 

Synopsis

  $ h1-cli insight journal list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli insight journal show

```
h1-cli insight journal show

  Returns a single journal [insight_project_journal_get] 

Synopsis

  $ h1-cli insight journal show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id
```

#### h1-cli insight journal transfer

```
h1-cli insight journal transfer

  Action transfer [insight_project_journal_transfer] 

Synopsis

  $ h1-cli insight journal transfer <options> 

Options

  --help                       Show help message and exit.                                            
  --passport-file string       Passport file                                                          
  --project extractid          project Id                                                             
  --location extractid         location Id                                                            
  --journal extractid          journal Id                                                             
  --x-idempotency-key string                                                                          
  --project string             Provide URI of iam/project. Require permissions insight/journal/create
```

#### h1-cli insight journal log

```
h1-cli insight journal log

Synopsis

  $ h1-cli insight journal log <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                                
  list   websocket is also supported [insight_project_journal_log_get]
```

##### h1-cli insight journal log spec

```
h1-cli insight journal log spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal log spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli insight journal log list

```
h1-cli insight journal log list

  websocket is also supported [insight_project_journal_log_get] 

Synopsis

  $ h1-cli insight journal log list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --since string           since                       
  --until string           until                       
  --follow string          follow                      
  --tail string            tail                        
  --tag string             tag
```

#### h1-cli insight journal credential

```
h1-cli insight journal credential

Synopsis

  $ h1-cli insight journal credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                        
  create   undefined [insight_project_journal_credential_create] 
  list     undefined [insight_project_journal_credential_list]
```

##### h1-cli insight journal credential spec

```
h1-cli insight journal credential spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal credential spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli insight journal credential create

```
h1-cli insight journal credential create

  undefined [insight_project_journal_credential_create] 

Synopsis

  $ h1-cli insight journal credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

##### h1-cli insight journal credential list

```
h1-cli insight journal credential list

  undefined [insight_project_journal_credential_list] 

Synopsis

  $ h1-cli insight journal credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id
```

#### h1-cli insight journal service

```
h1-cli insight journal service

Synopsis

  $ h1-cli insight journal service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [insight_project_journal_service_list] 
  show   undefined [insight_project_journal_service_get]
```

##### h1-cli insight journal service spec

```
h1-cli insight journal service spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli insight journal service list

```
h1-cli insight journal service list

  undefined [insight_project_journal_service_list] 

Synopsis

  $ h1-cli insight journal service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id
```

##### h1-cli insight journal service show

```
h1-cli insight journal service show

  undefined [insight_project_journal_service_get] 

Synopsis

  $ h1-cli insight journal service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --service extractid      serviceId
```

#### h1-cli insight journal tag

```
h1-cli insight journal tag

Synopsis

  $ h1-cli insight journal tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [insight_project_journal_tag_create] 
  list     undefined [insight_project_journal_tag_list]   
  show     undefined [insight_project_journal_tag_get]
```

##### h1-cli insight journal tag spec

```
h1-cli insight journal tag spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli insight journal tag create

```
h1-cli insight journal tag create

  undefined [insight_project_journal_tag_create] 

Synopsis

  $ h1-cli insight journal tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli insight journal tag list

```
h1-cli insight journal tag list

  undefined [insight_project_journal_tag_list] 

Synopsis

  $ h1-cli insight journal tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id
```

##### h1-cli insight journal tag show

```
h1-cli insight journal tag show

  undefined [insight_project_journal_tag_get] 

Synopsis

  $ h1-cli insight journal tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --tag extractid          tagId
```

#### h1-cli insight journal event

```
h1-cli insight journal event

Synopsis

  $ h1-cli insight journal event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [insight_project_journal_event_list]
```

##### h1-cli insight journal event spec

```
h1-cli insight journal event spec

  Print specification of context 

Synopsis

  $ h1-cli insight journal event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli insight journal event list

```
h1-cli insight journal event list

  undefined [insight_project_journal_event_list] 

Synopsis

  $ h1-cli insight journal event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --journal extractid      journal Id                  
  --$limit string          $limit                      
  --$skip string           $skip
```

## h1-cli website

```
h1-cli website

Synopsis

  $ h1-cli website <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  instance   Management of instance
```

### h1-cli website spec

```
h1-cli website spec

  Print specification of context 

Synopsis

  $ h1-cli website spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli website instance

```
h1-cli website instance

Synopsis

  $ h1-cli website instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                           
  create       Create instance [website_project_instance_create]        
  list         List instance [website_project_instance_list]            
  show         Returns a single instance [website_project_instance_get] 
  start        Action start [website_project_instance_start]            
  stop         Action stop [website_project_instance_stop]              
  restart      Action restart [website_project_instance_restart]        
  transfer     Action transfer [website_project_instance_transfer]      
  snapshot     Manage snapshots of the instance                         
  env          Manage envs of the instance                              
  link         Manage links of the instance                             
  sideapp      Manage sideapps of the instance                          
  credential   Manage credentials of the instance                       
  service      Manage services of the instance                          
  tag          Manage tags of the instance                              
  event        Manage events of the instance
```

#### h1-cli website instance spec

```
h1-cli website instance spec

  Print specification of context 

Synopsis

  $ h1-cli website instance spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli website instance create

```
h1-cli website instance create

  Create instance [website_project_instance_create] 

Synopsis

  $ h1-cli website instance create <options> 

Options

  --help                       Show help message and exit.                                                   
  --passport-file string       Passport file                                                                 
  --project extractid          project Id                                                                    
  --location extractid         location Id                                                                   
  --x-idempotency-key string                                                                                 
  --name string                                                                                              
  --service string             Provide URI of billing/service                                                
  --image string                                                                                             
  --source string              Provide URI of website/instance.snapshot. Require permissions                 
                               website/instance.snapshot/use                                                 
  --env nestedvalue[]          Use as name=name,value=value                                                  
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli website instance list

```
h1-cli website instance list

  List instance [website_project_instance_list] 

Synopsis

  $ h1-cli website instance list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli website instance show

```
h1-cli website instance show

  Returns a single instance [website_project_instance_get] 

Synopsis

  $ h1-cli website instance show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

#### h1-cli website instance start

```
h1-cli website instance start

  Action start [website_project_instance_start] 

Synopsis

  $ h1-cli website instance start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

#### h1-cli website instance stop

```
h1-cli website instance stop

  Action stop [website_project_instance_stop] 

Synopsis

  $ h1-cli website instance stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

#### h1-cli website instance restart

```
h1-cli website instance restart

  Action restart [website_project_instance_restart] 

Synopsis

  $ h1-cli website instance restart <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --instance extractid         instance Id                 
  --x-idempotency-key string
```

#### h1-cli website instance transfer

```
h1-cli website instance transfer

  Action transfer [website_project_instance_transfer] 

Synopsis

  $ h1-cli website instance transfer <options> 

Options

  --help                       Show help message and exit.                                            
  --passport-file string       Passport file                                                          
  --project extractid          project Id                                                             
  --location extractid         location Id                                                            
  --instance extractid         instance Id                                                            
  --x-idempotency-key string                                                                          
  --project string             Provide URI of iam/project. Require permissions website/website/create
```

#### h1-cli website instance snapshot

```
h1-cli website instance snapshot

Synopsis

  $ h1-cli website instance snapshot <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                       
  create   undefined [website_project_instance_snapshot_create] 
  list     undefined [website_project_instance_snapshot_list]
```

##### h1-cli website instance snapshot spec

```
h1-cli website instance snapshot spec

  Print specification of context 

Synopsis

  $ h1-cli website instance snapshot spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli website instance snapshot create

```
h1-cli website instance snapshot create

  undefined [website_project_instance_snapshot_create] 

Synopsis

  $ h1-cli website instance snapshot create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --name string
```

##### h1-cli website instance snapshot list

```
h1-cli website instance snapshot list

  undefined [website_project_instance_snapshot_list] 

Synopsis

  $ h1-cli website instance snapshot list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

#### h1-cli website instance env

```
h1-cli website instance env

Synopsis

  $ h1-cli website instance env <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                  
  create   undefined [website_project_instance_env_create] 
  list     undefined [website_project_instance_env_list]
```

##### h1-cli website instance env spec

```
h1-cli website instance env spec

  Print specification of context 

Synopsis

  $ h1-cli website instance env spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli website instance env create

```
h1-cli website instance env create

  undefined [website_project_instance_env_create] 

Synopsis

  $ h1-cli website instance env create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --name string                                        
  --value string
```

##### h1-cli website instance env list

```
h1-cli website instance env list

  undefined [website_project_instance_env_list] 

Synopsis

  $ h1-cli website instance env list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

#### h1-cli website instance link

```
h1-cli website instance link

Synopsis

  $ h1-cli website instance link <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [website_project_instance_link_create] 
  list     undefined [website_project_instance_link_list]
```

##### h1-cli website instance link spec

```
h1-cli website instance link spec

  Print specification of context 

Synopsis

  $ h1-cli website instance link spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli website instance link create

```
h1-cli website instance link create

  undefined [website_project_instance_link_create] 

Synopsis

  $ h1-cli website instance link create <options> 

Options

  --help                   Show help message and exit.                                             
  --passport-file string   Passport file                                                           
  --project extractid      project Id                                                              
  --location extractid     location Id                                                             
  --instance extractid     instance Id                                                             
  --actor string           Provide URI of iam/sa. Require permissions iam/sa/use                   
  --purpose string                                                                                 
  --resource string        Provide URI of insight/journal. Require permissions insight/journal/use
```

##### h1-cli website instance link list

```
h1-cli website instance link list

  undefined [website_project_instance_link_list] 

Synopsis

  $ h1-cli website instance link list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

#### h1-cli website instance sideapp

```
h1-cli website instance sideapp

Synopsis

  $ h1-cli website instance sideapp <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                      
  create   undefined [website_project_instance_sideapp_create] 
  list     undefined [website_project_instance_sideapp_list]
```

##### h1-cli website instance sideapp spec

```
h1-cli website instance sideapp spec

  Print specification of context 

Synopsis

  $ h1-cli website instance sideapp spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli website instance sideapp create

```
h1-cli website instance sideapp create

  undefined [website_project_instance_sideapp_create] 

Synopsis

  $ h1-cli website instance sideapp create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --flavour string
```

##### h1-cli website instance sideapp list

```
h1-cli website instance sideapp list

  undefined [website_project_instance_sideapp_list] 

Synopsis

  $ h1-cli website instance sideapp list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

#### h1-cli website instance credential

```
h1-cli website instance credential

Synopsis

  $ h1-cli website instance credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                         
  create   undefined [website_project_instance_credential_create] 
  list     undefined [website_project_instance_credential_list]
```

##### h1-cli website instance credential spec

```
h1-cli website instance credential spec

  Print specification of context 

Synopsis

  $ h1-cli website instance credential spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli website instance credential create

```
h1-cli website instance credential create

  undefined [website_project_instance_credential_create] 

Synopsis

  $ h1-cli website instance credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

##### h1-cli website instance credential list

```
h1-cli website instance credential list

  undefined [website_project_instance_credential_list] 

Synopsis

  $ h1-cli website instance credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

#### h1-cli website instance service

```
h1-cli website instance service

Synopsis

  $ h1-cli website instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [website_project_instance_service_list] 
  show   undefined [website_project_instance_service_get]
```

##### h1-cli website instance service spec

```
h1-cli website instance service spec

  Print specification of context 

Synopsis

  $ h1-cli website instance service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli website instance service list

```
h1-cli website instance service list

  undefined [website_project_instance_service_list] 

Synopsis

  $ h1-cli website instance service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

##### h1-cli website instance service show

```
h1-cli website instance service show

  undefined [website_project_instance_service_get] 

Synopsis

  $ h1-cli website instance service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --service extractid      serviceId
```

#### h1-cli website instance tag

```
h1-cli website instance tag

Synopsis

  $ h1-cli website instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                  
  create   undefined [website_project_instance_tag_create] 
  list     undefined [website_project_instance_tag_list]   
  show     undefined [website_project_instance_tag_get]
```

##### h1-cli website instance tag spec

```
h1-cli website instance tag spec

  Print specification of context 

Synopsis

  $ h1-cli website instance tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli website instance tag create

```
h1-cli website instance tag create

  undefined [website_project_instance_tag_create] 

Synopsis

  $ h1-cli website instance tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli website instance tag list

```
h1-cli website instance tag list

  undefined [website_project_instance_tag_list] 

Synopsis

  $ h1-cli website instance tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

##### h1-cli website instance tag show

```
h1-cli website instance tag show

  undefined [website_project_instance_tag_get] 

Synopsis

  $ h1-cli website instance tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --tag extractid          tagId
```

#### h1-cli website instance event

```
h1-cli website instance event

Synopsis

  $ h1-cli website instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   undefined [website_project_instance_event_list]
```

##### h1-cli website instance event spec

```
h1-cli website instance event spec

  Print specification of context 

Synopsis

  $ h1-cli website instance event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli website instance event list

```
h1-cli website instance event list

  undefined [website_project_instance_event_list] 

Synopsis

  $ h1-cli website instance event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

## h1-cli dns

```
h1-cli dns

Synopsis

  $ h1-cli dns <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context 
  zone   Management of zone
```

### h1-cli dns spec

```
h1-cli dns spec

  Print specification of context 

Synopsis

  $ h1-cli dns spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli dns zone

```
h1-cli dns zone

Synopsis

  $ h1-cli dns zone <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec        Print specification of context               
  create      Create zone [dns_project_zone_create]        
  list        List zone [dns_project_zone_list]            
  show        Returns a single zone [dns_project_zone_get] 
  recordset   Manage recordsets of the zone                
  service     Manage services of the zone                  
  tag         Manage tags of the zone                      
  event       Manage events of the zone
```

#### h1-cli dns zone spec

```
h1-cli dns zone spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli dns zone create

```
h1-cli dns zone create

  Create zone [dns_project_zone_create] 

Synopsis

  $ h1-cli dns zone create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --dns-name string                                           
  --source string                                             
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli dns zone list

```
h1-cli dns zone list

  List zone [dns_project_zone_list] 

Synopsis

  $ h1-cli dns zone list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli dns zone show

```
h1-cli dns zone show

  Returns a single zone [dns_project_zone_get] 

Synopsis

  $ h1-cli dns zone show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id
```

#### h1-cli dns zone recordset

```
h1-cli dns zone recordset

Synopsis

  $ h1-cli dns zone recordset <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                
  create   undefined [dns_project_zone_recordset_create] 
  list     undefined [dns_project_zone_recordset_list]   
  show     undefined [dns_project_zone_recordset_get]    
  record   Manage records of the recordset
```

##### h1-cli dns zone recordset spec

```
h1-cli dns zone recordset spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone recordset spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli dns zone recordset create

```
h1-cli dns zone recordset create

  undefined [dns_project_zone_recordset_create] 

Synopsis

  $ h1-cli dns zone recordset create <options> 

Options

  --help                   Show help message and exit.            
  --passport-file string   Passport file                          
  --project extractid      project Id                             
  --location extractid     location Id                            
  --zone extractid         zone Id                                
  --name string                                                   
  --type string                                                   
  --ttl string                                                    
  --record nestedvalue[]   Use as content=content,enabled=enabled
```

##### h1-cli dns zone recordset list

```
h1-cli dns zone recordset list

  undefined [dns_project_zone_recordset_list] 

Synopsis

  $ h1-cli dns zone recordset list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id
```

##### h1-cli dns zone recordset show

```
h1-cli dns zone recordset show

  undefined [dns_project_zone_recordset_get] 

Synopsis

  $ h1-cli dns zone recordset show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --recordset extractid    recordsetId
```

##### h1-cli dns zone recordset record

```
h1-cli dns zone recordset record

Synopsis

  $ h1-cli dns zone recordset record <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                       
  create   undefined [dns_project_zone_recordset_record_create] 
  list     undefined [dns_project_zone_recordset_record_list]   
  show     undefined [dns_project_zone_recordset_record_get]
```

###### h1-cli dns zone recordset record spec

```
h1-cli dns zone recordset record spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone recordset record spec <options> 

Options

  --help    Show help message and exit.
```

###### h1-cli dns zone recordset record create

```
h1-cli dns zone recordset record create

  undefined [dns_project_zone_recordset_record_create] 

Synopsis

  $ h1-cli dns zone recordset record create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --recordset extractid    recordsetId                 
  --content string                                     
  --enabled string
```

###### h1-cli dns zone recordset record list

```
h1-cli dns zone recordset record list

  undefined [dns_project_zone_recordset_record_list] 

Synopsis

  $ h1-cli dns zone recordset record list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --recordset extractid    recordsetId
```

###### h1-cli dns zone recordset record show

```
h1-cli dns zone recordset record show

  undefined [dns_project_zone_recordset_record_get] 

Synopsis

  $ h1-cli dns zone recordset record show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --recordset extractid    recordsetId                 
  --record extractid       recordId
```

#### h1-cli dns zone service

```
h1-cli dns zone service

Synopsis

  $ h1-cli dns zone service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [dns_project_zone_service_list] 
  show   undefined [dns_project_zone_service_get]
```

##### h1-cli dns zone service spec

```
h1-cli dns zone service spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli dns zone service list

```
h1-cli dns zone service list

  undefined [dns_project_zone_service_list] 

Synopsis

  $ h1-cli dns zone service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id
```

##### h1-cli dns zone service show

```
h1-cli dns zone service show

  undefined [dns_project_zone_service_get] 

Synopsis

  $ h1-cli dns zone service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --service extractid      serviceId
```

#### h1-cli dns zone tag

```
h1-cli dns zone tag

Synopsis

  $ h1-cli dns zone tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context          
  create   undefined [dns_project_zone_tag_create] 
  list     undefined [dns_project_zone_tag_list]   
  show     undefined [dns_project_zone_tag_get]
```

##### h1-cli dns zone tag spec

```
h1-cli dns zone tag spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli dns zone tag create

```
h1-cli dns zone tag create

  undefined [dns_project_zone_tag_create] 

Synopsis

  $ h1-cli dns zone tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli dns zone tag list

```
h1-cli dns zone tag list

  undefined [dns_project_zone_tag_list] 

Synopsis

  $ h1-cli dns zone tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id
```

##### h1-cli dns zone tag show

```
h1-cli dns zone tag show

  undefined [dns_project_zone_tag_get] 

Synopsis

  $ h1-cli dns zone tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --tag extractid          tagId
```

#### h1-cli dns zone event

```
h1-cli dns zone event

Synopsis

  $ h1-cli dns zone event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context          
  list   undefined [dns_project_zone_event_list]
```

##### h1-cli dns zone event spec

```
h1-cli dns zone event spec

  Print specification of context 

Synopsis

  $ h1-cli dns zone event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli dns zone event list

```
h1-cli dns zone event list

  undefined [dns_project_zone_event_list] 

Synopsis

  $ h1-cli dns zone event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --zone extractid         zone Id                     
  --$limit string          $limit                      
  --$skip string           $skip
```

## h1-cli storage

```
h1-cli storage

Synopsis

  $ h1-cli storage <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  disk       Management of disk             
  image      Management of image            
  iso        Management of iso              
  snapshot   Management of snapshot         
  vault      Management of vault
```

### h1-cli storage spec

```
h1-cli storage spec

  Print specification of context 

Synopsis

  $ h1-cli storage spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli storage disk

```
h1-cli storage disk

Synopsis

  $ h1-cli storage disk <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                   
  create     Create disk [storage_project_disk_create]        
  list       List disk [storage_project_disk_list]            
  show       Returns a single disk [storage_project_disk_get] 
  resize     Action resize [storage_project_disk_resize]      
  transfer   Action transfer [storage_project_disk_transfer]  
  download   Manage downloads of the disk                     
  service    Manage services of the disk                      
  tag        Manage tags of the disk                          
  event      Manage events of the disk
```

#### h1-cli storage disk spec

```
h1-cli storage disk spec

  Print specification of context 

Synopsis

  $ h1-cli storage disk spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli storage disk create

```
h1-cli storage disk create

  Create disk [storage_project_disk_create] 

Synopsis

  $ h1-cli storage disk create <options> 

Options

  --help                       Show help message and exit.                                       
  --passport-file string       Passport file                                                     
  --project extractid          project Id                                                        
  --location extractid         location Id                                                       
  --x-idempotency-key string                                                                     
  --name string                                                                                  
  --service string             Provide URI of billing/service                                    
  --size string                                                                                  
  --source string              Provide URI of storage/disk. Require permissions storage/disk/use 
  --cloud string                                                                                 
  --metadata string                                                                              
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli storage disk list

```
h1-cli storage disk list

  List disk [storage_project_disk_list] 

Synopsis

  $ h1-cli storage disk list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli storage disk show

```
h1-cli storage disk show

  Returns a single disk [storage_project_disk_get] 

Synopsis

  $ h1-cli storage disk show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id
```

#### h1-cli storage disk resize

```
h1-cli storage disk resize

  Action resize [storage_project_disk_resize] 

Synopsis

  $ h1-cli storage disk resize <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --disk extractid             disk Id                     
  --x-idempotency-key string                               
  --size string
```

#### h1-cli storage disk transfer

```
h1-cli storage disk transfer

  Action transfer [storage_project_disk_transfer] 

Synopsis

  $ h1-cli storage disk transfer <options> 

Options

  --help                       Show help message and exit.                                         
  --passport-file string       Passport file                                                       
  --project extractid          project Id                                                          
  --location extractid         location Id                                                         
  --disk extractid             disk Id                                                             
  --x-idempotency-key string                                                                       
  --project string             Provide URI of iam/project. Require permissions storage/disk/create
```

#### h1-cli storage disk download

```
h1-cli storage disk download

Synopsis

  $ h1-cli storage disk download <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                
  list   undefined [storage_project_disk_download_get]
```

##### h1-cli storage disk download spec

```
h1-cli storage disk download spec

  Print specification of context 

Synopsis

  $ h1-cli storage disk download spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage disk download list

```
h1-cli storage disk download list

  undefined [storage_project_disk_download_get] 

Synopsis

  $ h1-cli storage disk download list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id
```

#### h1-cli storage disk service

```
h1-cli storage disk service

Synopsis

  $ h1-cli storage disk service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                
  list   undefined [storage_project_disk_service_list] 
  show   undefined [storage_project_disk_service_get]
```

##### h1-cli storage disk service spec

```
h1-cli storage disk service spec

  Print specification of context 

Synopsis

  $ h1-cli storage disk service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage disk service list

```
h1-cli storage disk service list

  undefined [storage_project_disk_service_list] 

Synopsis

  $ h1-cli storage disk service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id
```

##### h1-cli storage disk service show

```
h1-cli storage disk service show

  undefined [storage_project_disk_service_get] 

Synopsis

  $ h1-cli storage disk service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id                     
  --service extractid      serviceId
```

#### h1-cli storage disk tag

```
h1-cli storage disk tag

Synopsis

  $ h1-cli storage disk tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context              
  create   undefined [storage_project_disk_tag_create] 
  list     undefined [storage_project_disk_tag_list]   
  show     undefined [storage_project_disk_tag_get]
```

##### h1-cli storage disk tag spec

```
h1-cli storage disk tag spec

  Print specification of context 

Synopsis

  $ h1-cli storage disk tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage disk tag create

```
h1-cli storage disk tag create

  undefined [storage_project_disk_tag_create] 

Synopsis

  $ h1-cli storage disk tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id                     
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli storage disk tag list

```
h1-cli storage disk tag list

  undefined [storage_project_disk_tag_list] 

Synopsis

  $ h1-cli storage disk tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id
```

##### h1-cli storage disk tag show

```
h1-cli storage disk tag show

  undefined [storage_project_disk_tag_get] 

Synopsis

  $ h1-cli storage disk tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id                     
  --tag extractid          tagId
```

#### h1-cli storage disk event

```
h1-cli storage disk event

Synopsis

  $ h1-cli storage disk event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context              
  list   undefined [storage_project_disk_event_list]
```

##### h1-cli storage disk event spec

```
h1-cli storage disk event spec

  Print specification of context 

Synopsis

  $ h1-cli storage disk event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage disk event list

```
h1-cli storage disk event list

  undefined [storage_project_disk_event_list] 

Synopsis

  $ h1-cli storage disk event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --disk extractid         disk Id                     
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli storage image

```
h1-cli storage image

Synopsis

  $ h1-cli storage image <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                     
  create     Create image [storage_project_image_create]        
  list       List image [storage_project_image_list]            
  show       Returns a single image [storage_project_image_get] 
  transfer   Action transfer [storage_project_image_transfer]   
  service    Manage services of the image                       
  tag        Manage tags of the image                           
  event      Manage events of the image
```

#### h1-cli storage image spec

```
h1-cli storage image spec

  Print specification of context 

Synopsis

  $ h1-cli storage image spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli storage image create

```
h1-cli storage image create

  Create image [storage_project_image_create] 

Synopsis

  $ h1-cli storage image create <options> 

Options

  --help                       Show help message and exit.                                             
  --passport-file string       Passport file                                                           
  --project extractid          project Id                                                              
  --location extractid         location Id                                                             
  --x-idempotency-key string                                                                           
  --name string                                                                                        
  --service string             Provide URI of billing/service                                          
  --vm string                  Provide URI of compute/vm. Require permissions compute/vm/use           
  --replica string             Provide URI of compute/replica. Require permissions compute/replica/use 
  --description string                                                                                 
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli storage image list

```
h1-cli storage image list

  List image [storage_project_image_list] 

Synopsis

  $ h1-cli storage image list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli storage image show

```
h1-cli storage image show

  Returns a single image [storage_project_image_get] 

Synopsis

  $ h1-cli storage image show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id
```

#### h1-cli storage image transfer

```
h1-cli storage image transfer

  Action transfer [storage_project_image_transfer] 

Synopsis

  $ h1-cli storage image transfer <options> 

Options

  --help                       Show help message and exit.                                          
  --passport-file string       Passport file                                                        
  --project extractid          project Id                                                           
  --location extractid         location Id                                                          
  --image extractid            image Id                                                             
  --x-idempotency-key string                                                                        
  --project string             Provide URI of iam/project. Require permissions storage/image/create
```

#### h1-cli storage image service

```
h1-cli storage image service

Synopsis

  $ h1-cli storage image service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [storage_project_image_service_list] 
  show   undefined [storage_project_image_service_get]
```

##### h1-cli storage image service spec

```
h1-cli storage image service spec

  Print specification of context 

Synopsis

  $ h1-cli storage image service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage image service list

```
h1-cli storage image service list

  undefined [storage_project_image_service_list] 

Synopsis

  $ h1-cli storage image service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id
```

##### h1-cli storage image service show

```
h1-cli storage image service show

  undefined [storage_project_image_service_get] 

Synopsis

  $ h1-cli storage image service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id                    
  --service extractid      serviceId
```

#### h1-cli storage image tag

```
h1-cli storage image tag

Synopsis

  $ h1-cli storage image tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [storage_project_image_tag_create] 
  list     undefined [storage_project_image_tag_list]   
  show     undefined [storage_project_image_tag_get]
```

##### h1-cli storage image tag spec

```
h1-cli storage image tag spec

  Print specification of context 

Synopsis

  $ h1-cli storage image tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage image tag create

```
h1-cli storage image tag create

  undefined [storage_project_image_tag_create] 

Synopsis

  $ h1-cli storage image tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id                    
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli storage image tag list

```
h1-cli storage image tag list

  undefined [storage_project_image_tag_list] 

Synopsis

  $ h1-cli storage image tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id
```

##### h1-cli storage image tag show

```
h1-cli storage image tag show

  undefined [storage_project_image_tag_get] 

Synopsis

  $ h1-cli storage image tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id                    
  --tag extractid          tagId
```

#### h1-cli storage image event

```
h1-cli storage image event

Synopsis

  $ h1-cli storage image event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [storage_project_image_event_list]
```

##### h1-cli storage image event spec

```
h1-cli storage image event spec

  Print specification of context 

Synopsis

  $ h1-cli storage image event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage image event list

```
h1-cli storage image event list

  undefined [storage_project_image_event_list] 

Synopsis

  $ h1-cli storage image event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --image extractid        image Id                    
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli storage iso

```
h1-cli storage iso

Synopsis

  $ h1-cli storage iso <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                 
  create     Create iso [storage_project_iso_create]        
  list       List iso [storage_project_iso_list]            
  show       Returns a single iso [storage_project_iso_get] 
  transfer   Action transfer [storage_project_iso_transfer] 
  service    Manage services of the iso                     
  tag        Manage tags of the iso                         
  event      Manage events of the iso
```

#### h1-cli storage iso spec

```
h1-cli storage iso spec

  Print specification of context 

Synopsis

  $ h1-cli storage iso spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli storage iso create

```
h1-cli storage iso create

  Create iso [storage_project_iso_create] 

Synopsis

  $ h1-cli storage iso create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --size string                                               
  --source string                                             
  --cloud string                                              
  --metadata string                                           
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli storage iso list

```
h1-cli storage iso list

  List iso [storage_project_iso_list] 

Synopsis

  $ h1-cli storage iso list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli storage iso show

```
h1-cli storage iso show

  Returns a single iso [storage_project_iso_get] 

Synopsis

  $ h1-cli storage iso show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id
```

#### h1-cli storage iso transfer

```
h1-cli storage iso transfer

  Action transfer [storage_project_iso_transfer] 

Synopsis

  $ h1-cli storage iso transfer <options> 

Options

  --help                       Show help message and exit.                                        
  --passport-file string       Passport file                                                      
  --project extractid          project Id                                                         
  --location extractid         location Id                                                        
  --iso extractid              iso Id                                                             
  --x-idempotency-key string                                                                      
  --project string             Provide URI of iam/project. Require permissions storage/iso/create
```

#### h1-cli storage iso service

```
h1-cli storage iso service

Synopsis

  $ h1-cli storage iso service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [storage_project_iso_service_list] 
  show   undefined [storage_project_iso_service_get]
```

##### h1-cli storage iso service spec

```
h1-cli storage iso service spec

  Print specification of context 

Synopsis

  $ h1-cli storage iso service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage iso service list

```
h1-cli storage iso service list

  undefined [storage_project_iso_service_list] 

Synopsis

  $ h1-cli storage iso service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id
```

##### h1-cli storage iso service show

```
h1-cli storage iso service show

  undefined [storage_project_iso_service_get] 

Synopsis

  $ h1-cli storage iso service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id                      
  --service extractid      serviceId
```

#### h1-cli storage iso tag

```
h1-cli storage iso tag

Synopsis

  $ h1-cli storage iso tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context             
  create   undefined [storage_project_iso_tag_create] 
  list     undefined [storage_project_iso_tag_list]   
  show     undefined [storage_project_iso_tag_get]
```

##### h1-cli storage iso tag spec

```
h1-cli storage iso tag spec

  Print specification of context 

Synopsis

  $ h1-cli storage iso tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage iso tag create

```
h1-cli storage iso tag create

  undefined [storage_project_iso_tag_create] 

Synopsis

  $ h1-cli storage iso tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id                      
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli storage iso tag list

```
h1-cli storage iso tag list

  undefined [storage_project_iso_tag_list] 

Synopsis

  $ h1-cli storage iso tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id
```

##### h1-cli storage iso tag show

```
h1-cli storage iso tag show

  undefined [storage_project_iso_tag_get] 

Synopsis

  $ h1-cli storage iso tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id                      
  --tag extractid          tagId
```

#### h1-cli storage iso event

```
h1-cli storage iso event

Synopsis

  $ h1-cli storage iso event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context             
  list   undefined [storage_project_iso_event_list]
```

##### h1-cli storage iso event spec

```
h1-cli storage iso event spec

  Print specification of context 

Synopsis

  $ h1-cli storage iso event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage iso event list

```
h1-cli storage iso event list

  undefined [storage_project_iso_event_list] 

Synopsis

  $ h1-cli storage iso event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --iso extractid          iso Id                      
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli storage snapshot

```
h1-cli storage snapshot

Synopsis

  $ h1-cli storage snapshot <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                           
  create    Create snapshot [storage_project_snapshot_create]        
  list      List snapshot [storage_project_snapshot_list]            
  show      Returns a single snapshot [storage_project_snapshot_get] 
  service   Manage services of the snapshot                          
  tag       Manage tags of the snapshot                              
  event     Manage events of the snapshot
```

#### h1-cli storage snapshot spec

```
h1-cli storage snapshot spec

  Print specification of context 

Synopsis

  $ h1-cli storage snapshot spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli storage snapshot create

```
h1-cli storage snapshot create

  Create snapshot [storage_project_snapshot_create] 

Synopsis

  $ h1-cli storage snapshot create <options> 

Options

  --help                       Show help message and exit.                                                   
  --passport-file string       Passport file                                                                 
  --project extractid          project Id                                                                    
  --location extractid         location Id                                                                   
  --x-idempotency-key string                                                                                 
  --name string                                                                                              
  --service string             Provide URI of billing/service                                                
  --vault string               Provide URI of storage/vault. Require permissions                             
                               storage/vault.snapshot/create                                                 
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli storage snapshot list

```
h1-cli storage snapshot list

  List snapshot [storage_project_snapshot_list] 

Synopsis

  $ h1-cli storage snapshot list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --vault string           Filter by vault             
  --tag string             Filter by tag
```

#### h1-cli storage snapshot show

```
h1-cli storage snapshot show

  Returns a single snapshot [storage_project_snapshot_get] 

Synopsis

  $ h1-cli storage snapshot show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id
```

#### h1-cli storage snapshot service

```
h1-cli storage snapshot service

Synopsis

  $ h1-cli storage snapshot service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [storage_project_snapshot_service_list] 
  show   undefined [storage_project_snapshot_service_get]
```

##### h1-cli storage snapshot service spec

```
h1-cli storage snapshot service spec

  Print specification of context 

Synopsis

  $ h1-cli storage snapshot service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage snapshot service list

```
h1-cli storage snapshot service list

  undefined [storage_project_snapshot_service_list] 

Synopsis

  $ h1-cli storage snapshot service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id
```

##### h1-cli storage snapshot service show

```
h1-cli storage snapshot service show

  undefined [storage_project_snapshot_service_get] 

Synopsis

  $ h1-cli storage snapshot service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id                 
  --service extractid      serviceId
```

#### h1-cli storage snapshot tag

```
h1-cli storage snapshot tag

Synopsis

  $ h1-cli storage snapshot tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                  
  create   undefined [storage_project_snapshot_tag_create] 
  list     undefined [storage_project_snapshot_tag_list]   
  show     undefined [storage_project_snapshot_tag_get]
```

##### h1-cli storage snapshot tag spec

```
h1-cli storage snapshot tag spec

  Print specification of context 

Synopsis

  $ h1-cli storage snapshot tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage snapshot tag create

```
h1-cli storage snapshot tag create

  undefined [storage_project_snapshot_tag_create] 

Synopsis

  $ h1-cli storage snapshot tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id                 
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli storage snapshot tag list

```
h1-cli storage snapshot tag list

  undefined [storage_project_snapshot_tag_list] 

Synopsis

  $ h1-cli storage snapshot tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id
```

##### h1-cli storage snapshot tag show

```
h1-cli storage snapshot tag show

  undefined [storage_project_snapshot_tag_get] 

Synopsis

  $ h1-cli storage snapshot tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id                 
  --tag extractid          tagId
```

#### h1-cli storage snapshot event

```
h1-cli storage snapshot event

Synopsis

  $ h1-cli storage snapshot event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   undefined [storage_project_snapshot_event_list]
```

##### h1-cli storage snapshot event spec

```
h1-cli storage snapshot event spec

  Print specification of context 

Synopsis

  $ h1-cli storage snapshot event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage snapshot event list

```
h1-cli storage snapshot event list

  undefined [storage_project_snapshot_event_list] 

Synopsis

  $ h1-cli storage snapshot event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --snapshot extractid     snapshot Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli storage vault

```
h1-cli storage vault

Synopsis

  $ h1-cli storage vault <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context                     
  create       Create vault [storage_project_vault_create]        
  list         List vault [storage_project_vault_list]            
  show         Returns a single vault [storage_project_vault_get] 
  start        Action start [storage_project_vault_start]         
  stop         Action stop [storage_project_vault_stop]           
  resize       Action resize [storage_project_vault_resize]       
  snapshot     Action snapshot [storage_project_vault_snapshot]   
  credential   Manage credentials of the vault                    
  service      Manage services of the vault                       
  tag          Manage tags of the vault                           
  event        Manage events of the vault
```

#### h1-cli storage vault spec

```
h1-cli storage vault spec

  Print specification of context 

Synopsis

  $ h1-cli storage vault spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli storage vault create

```
h1-cli storage vault create

  Create vault [storage_project_vault_create] 

Synopsis

  $ h1-cli storage vault create <options> 

Options

  --help                       Show help message and exit.                                                   
  --passport-file string       Passport file                                                                 
  --project extractid          project Id                                                                    
  --location extractid         location Id                                                                   
  --x-idempotency-key string                                                                                 
  --name string                                                                                              
  --service string             Provide URI of billing/service                                                
  --size string                                                                                              
  --snapshot string            Provide URI of storage/snapshot. Require permissions                          
                               storage/vault.snapshot/use                                                    
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli storage vault list

```
h1-cli storage vault list

  List vault [storage_project_vault_list] 

Synopsis

  $ h1-cli storage vault list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli storage vault show

```
h1-cli storage vault show

  Returns a single vault [storage_project_vault_get] 

Synopsis

  $ h1-cli storage vault show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id
```

#### h1-cli storage vault start

```
h1-cli storage vault start

  Action start [storage_project_vault_start] 

Synopsis

  $ h1-cli storage vault start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vault extractid            vault Id                    
  --x-idempotency-key string
```

#### h1-cli storage vault stop

```
h1-cli storage vault stop

  Action stop [storage_project_vault_stop] 

Synopsis

  $ h1-cli storage vault stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vault extractid            vault Id                    
  --x-idempotency-key string
```

#### h1-cli storage vault resize

```
h1-cli storage vault resize

  Action resize [storage_project_vault_resize] 

Synopsis

  $ h1-cli storage vault resize <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vault extractid            vault Id                    
  --x-idempotency-key string                               
  --size string
```

#### h1-cli storage vault snapshot

```
h1-cli storage vault snapshot

  Action snapshot [storage_project_vault_snapshot] 

Synopsis

  $ h1-cli storage vault snapshot <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --vault extractid            vault Id                       
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service
```

#### h1-cli storage vault credential

```
h1-cli storage vault credential

Synopsis

  $ h1-cli storage vault credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                      
  create   undefined [storage_project_vault_credential_create] 
  list     undefined [storage_project_vault_credential_list]
```

##### h1-cli storage vault credential spec

```
h1-cli storage vault credential spec

  Print specification of context 

Synopsis

  $ h1-cli storage vault credential spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage vault credential create

```
h1-cli storage vault credential create

  undefined [storage_project_vault_credential_create] 

Synopsis

  $ h1-cli storage vault credential create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id                    
  --name string                                        
  --type string                                        
  --value string                                       
  --token string
```

##### h1-cli storage vault credential list

```
h1-cli storage vault credential list

  undefined [storage_project_vault_credential_list] 

Synopsis

  $ h1-cli storage vault credential list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id
```

#### h1-cli storage vault service

```
h1-cli storage vault service

Synopsis

  $ h1-cli storage vault service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [storage_project_vault_service_list] 
  show   undefined [storage_project_vault_service_get]
```

##### h1-cli storage vault service spec

```
h1-cli storage vault service spec

  Print specification of context 

Synopsis

  $ h1-cli storage vault service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage vault service list

```
h1-cli storage vault service list

  undefined [storage_project_vault_service_list] 

Synopsis

  $ h1-cli storage vault service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id
```

##### h1-cli storage vault service show

```
h1-cli storage vault service show

  undefined [storage_project_vault_service_get] 

Synopsis

  $ h1-cli storage vault service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id                    
  --service extractid      serviceId
```

#### h1-cli storage vault tag

```
h1-cli storage vault tag

Synopsis

  $ h1-cli storage vault tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [storage_project_vault_tag_create] 
  list     undefined [storage_project_vault_tag_list]   
  show     undefined [storage_project_vault_tag_get]
```

##### h1-cli storage vault tag spec

```
h1-cli storage vault tag spec

  Print specification of context 

Synopsis

  $ h1-cli storage vault tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage vault tag create

```
h1-cli storage vault tag create

  undefined [storage_project_vault_tag_create] 

Synopsis

  $ h1-cli storage vault tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id                    
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli storage vault tag list

```
h1-cli storage vault tag list

  undefined [storage_project_vault_tag_list] 

Synopsis

  $ h1-cli storage vault tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id
```

##### h1-cli storage vault tag show

```
h1-cli storage vault tag show

  undefined [storage_project_vault_tag_get] 

Synopsis

  $ h1-cli storage vault tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id                    
  --tag extractid          tagId
```

#### h1-cli storage vault event

```
h1-cli storage vault event

Synopsis

  $ h1-cli storage vault event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [storage_project_vault_event_list]
```

##### h1-cli storage vault event spec

```
h1-cli storage vault event spec

  Print specification of context 

Synopsis

  $ h1-cli storage vault event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli storage vault event list

```
h1-cli storage vault event list

  undefined [storage_project_vault_event_list] 

Synopsis

  $ h1-cli storage vault event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vault extractid        vault Id                    
  --$limit string          $limit                      
  --$skip string           $skip
```

## h1-cli networking

```
h1-cli networking

Synopsis

  $ h1-cli networking <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  firewall   Management of firewall         
  ip         Management of ip               
  netadp     Management of netadp           
  netgw      Management of netgw            
  network    Management of network
```

### h1-cli networking spec

```
h1-cli networking spec

  Print specification of context 

Synopsis

  $ h1-cli networking spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli networking firewall

```
h1-cli networking firewall

Synopsis

  $ h1-cli networking firewall <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context                              
  create     Create firewall [networking_project_firewall_create]        
  list       List firewall [networking_project_firewall_list]            
  show       Returns a single firewall [networking_project_firewall_get] 
  transfer   Action transfer [networking_project_firewall_transfer]      
  ingress    Manage ingresses of the firewall                            
  egress     Manage egresses of the firewall                             
  service    Manage services of the firewall                             
  tag        Manage tags of the firewall                                 
  event      Manage events of the firewall
```

#### h1-cli networking firewall spec

```
h1-cli networking firewall spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli networking firewall create

```
h1-cli networking firewall create

  Create firewall [networking_project_firewall_create] 

Synopsis

  $ h1-cli networking firewall create <options> 

Options

  --help                       Show help message and exit.                                                                 
  --passport-file string       Passport file                                                                               
  --project extractid          project Id                                                                                  
  --location extractid         location Id                                                                                 
  --x-idempotency-key string                                                                                               
  --name string                                                                                                            
  --service string             Provide URI of billing/service                                                              
  --ingress nestedvalue[]      Use as                                                                                      
                               name=name,action=action,priority=priority,filter=filter,external=external,internal=internal 
  --egress nestedvalue[]       Use as                                                                                      
                               name=name,action=action,priority=priority,filter=filter,external=external,internal=internal 
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli networking firewall list

```
h1-cli networking firewall list

  List firewall [networking_project_firewall_list] 

Synopsis

  $ h1-cli networking firewall list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli networking firewall show

```
h1-cli networking firewall show

  Returns a single firewall [networking_project_firewall_get] 

Synopsis

  $ h1-cli networking firewall show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id
```

#### h1-cli networking firewall transfer

```
h1-cli networking firewall transfer

  Action transfer [networking_project_firewall_transfer] 

Synopsis

  $ h1-cli networking firewall transfer <options> 

Options

  --help                       Show help message and exit.                                                
  --passport-file string       Passport file                                                              
  --project extractid          project Id                                                                 
  --location extractid         location Id                                                                
  --firewall extractid         firewall Id                                                                
  --x-idempotency-key string                                                                              
  --project string             Provide URI of iam/project. Require permissions networking/firewall/create
```

#### h1-cli networking firewall ingress

```
h1-cli networking firewall ingress

Synopsis

  $ h1-cli networking firewall ingress <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                         
  create   undefined [networking_project_firewall_ingress_create] 
  list     undefined [networking_project_firewall_ingress_list]
```

##### h1-cli networking firewall ingress spec

```
h1-cli networking firewall ingress spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall ingress spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking firewall ingress create

```
h1-cli networking firewall ingress create

  undefined [networking_project_firewall_ingress_create] 

Synopsis

  $ h1-cli networking firewall ingress create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --name string                                        
  --action string                                      
  --priority string                                    
  --filter string[]                                    
  --external string[]                                  
  --internal string[]
```

##### h1-cli networking firewall ingress list

```
h1-cli networking firewall ingress list

  undefined [networking_project_firewall_ingress_list] 

Synopsis

  $ h1-cli networking firewall ingress list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id
```

#### h1-cli networking firewall egress

```
h1-cli networking firewall egress

Synopsis

  $ h1-cli networking firewall egress <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                        
  create   undefined [networking_project_firewall_egress_create] 
  list     undefined [networking_project_firewall_egress_list]
```

##### h1-cli networking firewall egress spec

```
h1-cli networking firewall egress spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall egress spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking firewall egress create

```
h1-cli networking firewall egress create

  undefined [networking_project_firewall_egress_create] 

Synopsis

  $ h1-cli networking firewall egress create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --name string                                        
  --action string                                      
  --priority string                                    
  --filter string[]                                    
  --external string[]                                  
  --internal string[]
```

##### h1-cli networking firewall egress list

```
h1-cli networking firewall egress list

  undefined [networking_project_firewall_egress_list] 

Synopsis

  $ h1-cli networking firewall egress list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id
```

#### h1-cli networking firewall service

```
h1-cli networking firewall service

Synopsis

  $ h1-cli networking firewall service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                       
  list   undefined [networking_project_firewall_service_list] 
  show   undefined [networking_project_firewall_service_get]
```

##### h1-cli networking firewall service spec

```
h1-cli networking firewall service spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking firewall service list

```
h1-cli networking firewall service list

  undefined [networking_project_firewall_service_list] 

Synopsis

  $ h1-cli networking firewall service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id
```

##### h1-cli networking firewall service show

```
h1-cli networking firewall service show

  undefined [networking_project_firewall_service_get] 

Synopsis

  $ h1-cli networking firewall service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --service extractid      serviceId
```

#### h1-cli networking firewall tag

```
h1-cli networking firewall tag

Synopsis

  $ h1-cli networking firewall tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                     
  create   undefined [networking_project_firewall_tag_create] 
  list     undefined [networking_project_firewall_tag_list]   
  show     undefined [networking_project_firewall_tag_get]
```

##### h1-cli networking firewall tag spec

```
h1-cli networking firewall tag spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking firewall tag create

```
h1-cli networking firewall tag create

  undefined [networking_project_firewall_tag_create] 

Synopsis

  $ h1-cli networking firewall tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli networking firewall tag list

```
h1-cli networking firewall tag list

  undefined [networking_project_firewall_tag_list] 

Synopsis

  $ h1-cli networking firewall tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id
```

##### h1-cli networking firewall tag show

```
h1-cli networking firewall tag show

  undefined [networking_project_firewall_tag_get] 

Synopsis

  $ h1-cli networking firewall tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --tag extractid          tagId
```

#### h1-cli networking firewall event

```
h1-cli networking firewall event

Synopsis

  $ h1-cli networking firewall event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                     
  list   undefined [networking_project_firewall_event_list]
```

##### h1-cli networking firewall event spec

```
h1-cli networking firewall event spec

  Print specification of context 

Synopsis

  $ h1-cli networking firewall event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking firewall event list

```
h1-cli networking firewall event list

  undefined [networking_project_firewall_event_list] 

Synopsis

  $ h1-cli networking firewall event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --firewall extractid     firewall Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli networking ip

```
h1-cli networking ip

Synopsis

  $ h1-cli networking ip <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec           Print specification of context                           
  create         Create ip [networking_project_ip_create]                 
  list           List ip [networking_project_ip_list]                     
  show           Returns a single ip [networking_project_ip_get]          
  allocate       Action allocate [networking_project_ip_allocate]         
  associate      Action associate [networking_project_ip_associate]       
  disassociate   Action disassociate [networking_project_ip_disassociate] 
  transfer       Action transfer [networking_project_ip_transfer]         
  service        Manage services of the ip                                
  tag            Manage tags of the ip                                    
  event          Manage events of the ip
```

#### h1-cli networking ip spec

```
h1-cli networking ip spec

  Print specification of context 

Synopsis

  $ h1-cli networking ip spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli networking ip create

```
h1-cli networking ip create

  Create ip [networking_project_ip_create] 

Synopsis

  $ h1-cli networking ip create <options> 

Options

  --help                       Show help message and exit.                                                   
  --passport-file string       Passport file                                                                 
  --project extractid          project Id                                                                    
  --location extractid         location Id                                                                   
  --x-idempotency-key string                                                                                 
  --network string             Provide URI of networking/network. Require permissions networking/network/use 
  --ptr-record string                                                                                        
  --address string                                                                                           
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli networking ip list

```
h1-cli networking ip list

  List ip [networking_project_ip_list] 

Synopsis

  $ h1-cli networking ip list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network string         Filter by network           
  --type string            Filter by type              
  --tag string             Filter by tag
```

#### h1-cli networking ip show

```
h1-cli networking ip show

  Returns a single ip [networking_project_ip_get] 

Synopsis

  $ h1-cli networking ip show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id
```

#### h1-cli networking ip allocate

```
h1-cli networking ip allocate

  Action allocate [networking_project_ip_allocate] 

Synopsis

  $ h1-cli networking ip allocate <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --ip extractid               ip Id                       
  --x-idempotency-key string
```

#### h1-cli networking ip associate

```
h1-cli networking ip associate

  Action associate [networking_project_ip_associate] 

Synopsis

  $ h1-cli networking ip associate <options> 

Options

  --help                       Show help message and exit.                                         
  --passport-file string       Passport file                                                       
  --project extractid          project Id                                                          
  --location extractid         location Id                                                         
  --ip extractid               ip Id                                                               
  --x-idempotency-key string                                                                       
  --ip string                  Provide URI of networking/ip. Require permissions networking/ip/use
```

#### h1-cli networking ip disassociate

```
h1-cli networking ip disassociate

  Action disassociate [networking_project_ip_disassociate] 

Synopsis

  $ h1-cli networking ip disassociate <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --ip extractid               ip Id                       
  --x-idempotency-key string
```

#### h1-cli networking ip transfer

```
h1-cli networking ip transfer

  Action transfer [networking_project_ip_transfer] 

Synopsis

  $ h1-cli networking ip transfer <options> 

Options

  --help                       Show help message and exit.                                          
  --passport-file string       Passport file                                                        
  --project extractid          project Id                                                           
  --location extractid         location Id                                                          
  --ip extractid               ip Id                                                                
  --x-idempotency-key string                                                                        
  --project string             Provide URI of iam/project. Require permissions networking/ip/create
```

#### h1-cli networking ip service

```
h1-cli networking ip service

Synopsis

  $ h1-cli networking ip service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [networking_project_ip_service_list] 
  show   undefined [networking_project_ip_service_get]
```

##### h1-cli networking ip service spec

```
h1-cli networking ip service spec

  Print specification of context 

Synopsis

  $ h1-cli networking ip service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking ip service list

```
h1-cli networking ip service list

  undefined [networking_project_ip_service_list] 

Synopsis

  $ h1-cli networking ip service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id
```

##### h1-cli networking ip service show

```
h1-cli networking ip service show

  undefined [networking_project_ip_service_get] 

Synopsis

  $ h1-cli networking ip service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id                       
  --service extractid      serviceId
```

#### h1-cli networking ip tag

```
h1-cli networking ip tag

Synopsis

  $ h1-cli networking ip tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [networking_project_ip_tag_create] 
  list     undefined [networking_project_ip_tag_list]   
  show     undefined [networking_project_ip_tag_get]
```

##### h1-cli networking ip tag spec

```
h1-cli networking ip tag spec

  Print specification of context 

Synopsis

  $ h1-cli networking ip tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking ip tag create

```
h1-cli networking ip tag create

  undefined [networking_project_ip_tag_create] 

Synopsis

  $ h1-cli networking ip tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id                       
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli networking ip tag list

```
h1-cli networking ip tag list

  undefined [networking_project_ip_tag_list] 

Synopsis

  $ h1-cli networking ip tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id
```

##### h1-cli networking ip tag show

```
h1-cli networking ip tag show

  undefined [networking_project_ip_tag_get] 

Synopsis

  $ h1-cli networking ip tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id                       
  --tag extractid          tagId
```

#### h1-cli networking ip event

```
h1-cli networking ip event

Synopsis

  $ h1-cli networking ip event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context               
  list   undefined [networking_project_ip_event_list]
```

##### h1-cli networking ip event spec

```
h1-cli networking ip event spec

  Print specification of context 

Synopsis

  $ h1-cli networking ip event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking ip event list

```
h1-cli networking ip event list

  undefined [networking_project_ip_event_list] 

Synopsis

  $ h1-cli networking ip event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --ip extractid           ip Id                       
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli networking netadp

```
h1-cli networking netadp

Synopsis

  $ h1-cli networking netadp <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                          
  list      List netadp [networking_project_netadp_list]            
  show      Returns a single netadp [networking_project_netadp_get] 
  service   Manage services of the netadp                           
  tag       Manage tags of the netadp                               
  event     Manage events of the netadp
```

#### h1-cli networking netadp spec

```
h1-cli networking netadp spec

  Print specification of context 

Synopsis

  $ h1-cli networking netadp spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli networking netadp list

```
h1-cli networking netadp list

  List netadp [networking_project_netadp_list] 

Synopsis

  $ h1-cli networking netadp list <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --assigned.resource string   Filter by assigned.resource 
  --assigned.id string         Filter by assigned.id
```

#### h1-cli networking netadp show

```
h1-cli networking netadp show

  Returns a single netadp [networking_project_netadp_get] 

Synopsis

  $ h1-cli networking netadp show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id
```

#### h1-cli networking netadp service

```
h1-cli networking netadp service

Synopsis

  $ h1-cli networking netadp service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                     
  list   undefined [networking_project_netadp_service_list] 
  show   undefined [networking_project_netadp_service_get]
```

##### h1-cli networking netadp service spec

```
h1-cli networking netadp service spec

  Print specification of context 

Synopsis

  $ h1-cli networking netadp service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking netadp service list

```
h1-cli networking netadp service list

  undefined [networking_project_netadp_service_list] 

Synopsis

  $ h1-cli networking netadp service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id
```

##### h1-cli networking netadp service show

```
h1-cli networking netadp service show

  undefined [networking_project_netadp_service_get] 

Synopsis

  $ h1-cli networking netadp service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id                   
  --service extractid      serviceId
```

#### h1-cli networking netadp tag

```
h1-cli networking netadp tag

Synopsis

  $ h1-cli networking netadp tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [networking_project_netadp_tag_create] 
  list     undefined [networking_project_netadp_tag_list]   
  show     undefined [networking_project_netadp_tag_get]
```

##### h1-cli networking netadp tag spec

```
h1-cli networking netadp tag spec

  Print specification of context 

Synopsis

  $ h1-cli networking netadp tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking netadp tag create

```
h1-cli networking netadp tag create

  undefined [networking_project_netadp_tag_create] 

Synopsis

  $ h1-cli networking netadp tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id                   
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli networking netadp tag list

```
h1-cli networking netadp tag list

  undefined [networking_project_netadp_tag_list] 

Synopsis

  $ h1-cli networking netadp tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id
```

##### h1-cli networking netadp tag show

```
h1-cli networking netadp tag show

  undefined [networking_project_netadp_tag_get] 

Synopsis

  $ h1-cli networking netadp tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id                   
  --tag extractid          tagId
```

#### h1-cli networking netadp event

```
h1-cli networking netadp event

Synopsis

  $ h1-cli networking netadp event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [networking_project_netadp_event_list]
```

##### h1-cli networking netadp event spec

```
h1-cli networking netadp event spec

  Print specification of context 

Synopsis

  $ h1-cli networking netadp event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking netadp event list

```
h1-cli networking netadp event list

  undefined [networking_project_netadp_event_list] 

Synopsis

  $ h1-cli networking netadp event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netadp extractid       netadp Id                   
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli networking netgw

```
h1-cli networking netgw

Synopsis

  $ h1-cli networking netgw <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                        
  create    Create netgw [networking_project_netgw_create]        
  list      List netgw [networking_project_netgw_list]            
  show      Returns a single netgw [networking_project_netgw_get] 
  attach    Action attach [networking_project_netgw_attach]       
  detach    Action detach [networking_project_netgw_detach]       
  service   Manage services of the netgw                          
  tag       Manage tags of the netgw                              
  event     Manage events of the netgw
```

#### h1-cli networking netgw spec

```
h1-cli networking netgw spec

  Print specification of context 

Synopsis

  $ h1-cli networking netgw spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli networking netgw create

```
h1-cli networking netgw create

  Create netgw [networking_project_netgw_create] 

Synopsis

  $ h1-cli networking netgw create <options> 

Options

  --help                       Show help message and exit.  
  --passport-file string       Passport file                
  --project extractid          project Id                   
  --location extractid         location Id                  
  --x-idempotency-key string                                
  --name string                                             
  --public string                                           
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli networking netgw list

```
h1-cli networking netgw list

  List netgw [networking_project_netgw_list] 

Synopsis

  $ h1-cli networking netgw list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli networking netgw show

```
h1-cli networking netgw show

  Returns a single netgw [networking_project_netgw_get] 

Synopsis

  $ h1-cli networking netgw show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id
```

#### h1-cli networking netgw attach

```
h1-cli networking netgw attach

  Action attach [networking_project_netgw_attach] 

Synopsis

  $ h1-cli networking netgw attach <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --netgw extractid            netgw Id                    
  --x-idempotency-key string                               
  --private string
```

#### h1-cli networking netgw detach

```
h1-cli networking netgw detach

  Action detach [networking_project_netgw_detach] 

Synopsis

  $ h1-cli networking netgw detach <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --netgw extractid            netgw Id                    
  --x-idempotency-key string
```

#### h1-cli networking netgw service

```
h1-cli networking netgw service

Synopsis

  $ h1-cli networking netgw service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [networking_project_netgw_service_list] 
  show   undefined [networking_project_netgw_service_get]
```

##### h1-cli networking netgw service spec

```
h1-cli networking netgw service spec

  Print specification of context 

Synopsis

  $ h1-cli networking netgw service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking netgw service list

```
h1-cli networking netgw service list

  undefined [networking_project_netgw_service_list] 

Synopsis

  $ h1-cli networking netgw service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id
```

##### h1-cli networking netgw service show

```
h1-cli networking netgw service show

  undefined [networking_project_netgw_service_get] 

Synopsis

  $ h1-cli networking netgw service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id                    
  --service extractid      serviceId
```

#### h1-cli networking netgw tag

```
h1-cli networking netgw tag

Synopsis

  $ h1-cli networking netgw tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                  
  create   undefined [networking_project_netgw_tag_create] 
  list     undefined [networking_project_netgw_tag_list]   
  show     undefined [networking_project_netgw_tag_get]
```

##### h1-cli networking netgw tag spec

```
h1-cli networking netgw tag spec

  Print specification of context 

Synopsis

  $ h1-cli networking netgw tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking netgw tag create

```
h1-cli networking netgw tag create

  undefined [networking_project_netgw_tag_create] 

Synopsis

  $ h1-cli networking netgw tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id                    
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli networking netgw tag list

```
h1-cli networking netgw tag list

  undefined [networking_project_netgw_tag_list] 

Synopsis

  $ h1-cli networking netgw tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id
```

##### h1-cli networking netgw tag show

```
h1-cli networking netgw tag show

  undefined [networking_project_netgw_tag_get] 

Synopsis

  $ h1-cli networking netgw tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id                    
  --tag extractid          tagId
```

#### h1-cli networking netgw event

```
h1-cli networking netgw event

Synopsis

  $ h1-cli networking netgw event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                  
  list   undefined [networking_project_netgw_event_list]
```

##### h1-cli networking netgw event spec

```
h1-cli networking netgw event spec

  Print specification of context 

Synopsis

  $ h1-cli networking netgw event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking netgw event list

```
h1-cli networking netgw event list

  undefined [networking_project_netgw_event_list] 

Synopsis

  $ h1-cli networking netgw event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --netgw extractid        netgw Id                    
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli networking network

```
h1-cli networking network

Synopsis

  $ h1-cli networking network <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                            
  create    Create network [networking_project_network_create]        
  list      List network [networking_project_network_list]            
  show      Returns a single network [networking_project_network_get] 
  ip        Manage ips of the network                                 
  service   Manage services of the network                            
  tag       Manage tags of the network                                
  event     Manage events of the network
```

#### h1-cli networking network spec

```
h1-cli networking network spec

  Print specification of context 

Synopsis

  $ h1-cli networking network spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli networking network create

```
h1-cli networking network create

  Create network [networking_project_network_create] 

Synopsis

  $ h1-cli networking network create <options> 

Options

  --help                       Show help message and exit.  
  --passport-file string       Passport file                
  --project extractid          project Id                   
  --location extractid         location Id                  
  --x-idempotency-key string                                
  --name string                                             
  --address string                                          
  --gateway string                                          
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli networking network list

```
h1-cli networking network list

  List network [networking_project_network_list] 

Synopsis

  $ h1-cli networking network list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli networking network show

```
h1-cli networking network show

  Returns a single network [networking_project_network_get] 

Synopsis

  $ h1-cli networking network show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id
```

#### h1-cli networking network ip

```
h1-cli networking network ip

Synopsis

  $ h1-cli networking network ip <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                   
  create   undefined [networking_project_network_ip_create] 
  list     undefined [networking_project_network_ip_list]   
  show     undefined [networking_project_network_ip_get]
```

##### h1-cli networking network ip spec

```
h1-cli networking network ip spec

  Print specification of context 

Synopsis

  $ h1-cli networking network ip spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking network ip create

```
h1-cli networking network ip create

  undefined [networking_project_network_ip_create] 

Synopsis

  $ h1-cli networking network ip create <options> 

Options

  --help                   Show help message and exit.  
  --passport-file string   Passport file                
  --project extractid      project Id                   
  --location extractid     location Id                  
  --network extractid      network Id                   
  --address string                                      
  --tag nestedvalue[]      Use as value=value,name=name
```

##### h1-cli networking network ip list

```
h1-cli networking network ip list

  undefined [networking_project_network_ip_list] 

Synopsis

  $ h1-cli networking network ip list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id
```

##### h1-cli networking network ip show

```
h1-cli networking network ip show

  undefined [networking_project_network_ip_get] 

Synopsis

  $ h1-cli networking network ip show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id                  
  --ip extractid           ipId
```

#### h1-cli networking network service

```
h1-cli networking network service

Synopsis

  $ h1-cli networking network service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                      
  list   undefined [networking_project_network_service_list] 
  show   undefined [networking_project_network_service_get]
```

##### h1-cli networking network service spec

```
h1-cli networking network service spec

  Print specification of context 

Synopsis

  $ h1-cli networking network service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking network service list

```
h1-cli networking network service list

  undefined [networking_project_network_service_list] 

Synopsis

  $ h1-cli networking network service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id
```

##### h1-cli networking network service show

```
h1-cli networking network service show

  undefined [networking_project_network_service_get] 

Synopsis

  $ h1-cli networking network service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id                  
  --service extractid      serviceId
```

#### h1-cli networking network tag

```
h1-cli networking network tag

Synopsis

  $ h1-cli networking network tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                    
  create   undefined [networking_project_network_tag_create] 
  list     undefined [networking_project_network_tag_list]   
  show     undefined [networking_project_network_tag_get]
```

##### h1-cli networking network tag spec

```
h1-cli networking network tag spec

  Print specification of context 

Synopsis

  $ h1-cli networking network tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking network tag create

```
h1-cli networking network tag create

  undefined [networking_project_network_tag_create] 

Synopsis

  $ h1-cli networking network tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id                  
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli networking network tag list

```
h1-cli networking network tag list

  undefined [networking_project_network_tag_list] 

Synopsis

  $ h1-cli networking network tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id
```

##### h1-cli networking network tag show

```
h1-cli networking network tag show

  undefined [networking_project_network_tag_get] 

Synopsis

  $ h1-cli networking network tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id                  
  --tag extractid          tagId
```

#### h1-cli networking network event

```
h1-cli networking network event

Synopsis

  $ h1-cli networking network event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   undefined [networking_project_network_event_list]
```

##### h1-cli networking network event spec

```
h1-cli networking network event spec

  Print specification of context 

Synopsis

  $ h1-cli networking network event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli networking network event list

```
h1-cli networking network event list

  undefined [networking_project_network_event_list] 

Synopsis

  $ h1-cli networking network event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --network extractid      network Id                  
  --$limit string          $limit                      
  --$skip string           $skip
```

## h1-cli compute

```
h1-cli compute

Synopsis

  $ h1-cli compute <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context 
  replica   Management of replica          
  vm        Management of vm
```

### h1-cli compute spec

```
h1-cli compute spec

  Print specification of context 

Synopsis

  $ h1-cli compute spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli compute replica

```
h1-cli compute replica

Synopsis

  $ h1-cli compute replica <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                         
  create    Create replica [compute_project_replica_create]        
  list      List replica [compute_project_replica_list]            
  show      Returns a single replica [compute_project_replica_get] 
  service   Manage services of the replica                         
  tag       Manage tags of the replica                             
  event     Manage events of the replica
```

#### h1-cli compute replica spec

```
h1-cli compute replica spec

  Print specification of context 

Synopsis

  $ h1-cli compute replica spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli compute replica create

```
h1-cli compute replica create

  Create replica [compute_project_replica_create] 

Synopsis

  $ h1-cli compute replica create <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --x-idempotency-key string                               
  --hostname string                                        
  --secret string
```

#### h1-cli compute replica list

```
h1-cli compute replica list

  List replica [compute_project_replica_list] 

Synopsis

  $ h1-cli compute replica list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name
```

#### h1-cli compute replica show

```
h1-cli compute replica show

  Returns a single replica [compute_project_replica_get] 

Synopsis

  $ h1-cli compute replica show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id
```

#### h1-cli compute replica service

```
h1-cli compute replica service

Synopsis

  $ h1-cli compute replica service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [compute_project_replica_service_list] 
  show   undefined [compute_project_replica_service_get]
```

##### h1-cli compute replica service spec

```
h1-cli compute replica service spec

  Print specification of context 

Synopsis

  $ h1-cli compute replica service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli compute replica service list

```
h1-cli compute replica service list

  undefined [compute_project_replica_service_list] 

Synopsis

  $ h1-cli compute replica service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id
```

##### h1-cli compute replica service show

```
h1-cli compute replica service show

  undefined [compute_project_replica_service_get] 

Synopsis

  $ h1-cli compute replica service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id                  
  --service extractid      serviceId
```

#### h1-cli compute replica tag

```
h1-cli compute replica tag

Synopsis

  $ h1-cli compute replica tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [compute_project_replica_tag_create] 
  list     undefined [compute_project_replica_tag_list]   
  show     undefined [compute_project_replica_tag_get]
```

##### h1-cli compute replica tag spec

```
h1-cli compute replica tag spec

  Print specification of context 

Synopsis

  $ h1-cli compute replica tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli compute replica tag create

```
h1-cli compute replica tag create

  undefined [compute_project_replica_tag_create] 

Synopsis

  $ h1-cli compute replica tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id                  
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli compute replica tag list

```
h1-cli compute replica tag list

  undefined [compute_project_replica_tag_list] 

Synopsis

  $ h1-cli compute replica tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id
```

##### h1-cli compute replica tag show

```
h1-cli compute replica tag show

  undefined [compute_project_replica_tag_get] 

Synopsis

  $ h1-cli compute replica tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id                  
  --tag extractid          tagId
```

#### h1-cli compute replica event

```
h1-cli compute replica event

Synopsis

  $ h1-cli compute replica event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [compute_project_replica_event_list]
```

##### h1-cli compute replica event spec

```
h1-cli compute replica event spec

  Print specification of context 

Synopsis

  $ h1-cli compute replica event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli compute replica event list

```
h1-cli compute replica event list

  undefined [compute_project_replica_event_list] 

Synopsis

  $ h1-cli compute replica event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --replica extractid      replica Id                  
  --$limit string          $limit                      
  --$skip string           $skip
```

### h1-cli compute vm

```
h1-cli compute vm

Synopsis

  $ h1-cli compute vm <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec             Print specification of context                            
  create           Create vm [compute_project_vm_create]                     
  list             List vm [compute_project_vm_list]                         
  show             Returns a single vm [compute_project_vm_get]              
  start            Action start [compute_project_vm_start]                   
  restart          Action restart [compute_project_vm_restart]               
  stop             Action stop [compute_project_vm_stop]                     
  turnoff          Action turnoff [compute_project_vm_turnoff]               
  rename           Action rename [compute_project_vm_rename]                 
  password_reset   Action password_reset [compute_project_vm_password_reset] 
  flavour          Action flavour [compute_project_vm_flavour]               
  hdd              Manage hdds of the vm                                     
  netadp           Manage netadps of the vm                                  
  console          Manage consoles of the vm                                 
  service          Manage services of the vm                                 
  tag              Manage tags of the vm                                     
  event            Manage events of the vm
```

#### h1-cli compute vm spec

```
h1-cli compute vm spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli compute vm create

```
h1-cli compute vm create

  Create vm [compute_project_vm_create] 

Synopsis

  $ h1-cli compute vm create <options> 

Options

  --help                       Show help message and exit.                                         
  --passport-file string       Passport file                                                       
  --project extractid          project Id                                                          
  --location extractid         location Id                                                         
  --x-idempotency-key string                                                                       
  --name string                                                                                    
  --service string             Provide URI of billing/service                                      
  --image string               Provide URI of storage/image. Require permissions storage/image/use 
  --iso string                 Provide URI of storage/iso. Require permissions storage/iso/use     
  --username string                                                                                
  --password string                                                                                
  --ssh-keys string[]                                                                              
  --user-metadata string                                                                           
  --disk nestedvalue[]         Use as id=id,size=size,service=service,name=name,cloud=cloud        
  --netadp nestedvalue[]       Use as service=service,network=network,ip=ip,firewall=firewall      
  --boot string                                                                                    
  --cloud string                                                                                   
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli compute vm list

```
h1-cli compute vm list

  List vm [compute_project_vm_list] 

Synopsis

  $ h1-cli compute vm list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli compute vm show

```
h1-cli compute vm show

  Returns a single vm [compute_project_vm_get] 

Synopsis

  $ h1-cli compute vm show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

#### h1-cli compute vm start

```
h1-cli compute vm start

  Action start [compute_project_vm_start] 

Synopsis

  $ h1-cli compute vm start <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string
```

#### h1-cli compute vm restart

```
h1-cli compute vm restart

  Action restart [compute_project_vm_restart] 

Synopsis

  $ h1-cli compute vm restart <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string
```

#### h1-cli compute vm stop

```
h1-cli compute vm stop

  Action stop [compute_project_vm_stop] 

Synopsis

  $ h1-cli compute vm stop <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string
```

#### h1-cli compute vm turnoff

```
h1-cli compute vm turnoff

  Action turnoff [compute_project_vm_turnoff] 

Synopsis

  $ h1-cli compute vm turnoff <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string
```

#### h1-cli compute vm rename

```
h1-cli compute vm rename

  Action rename [compute_project_vm_rename] 

Synopsis

  $ h1-cli compute vm rename <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string                               
  --newname string
```

#### h1-cli compute vm password_reset

```
h1-cli compute vm password_reset

  Action password_reset [compute_project_vm_password_reset] 

Synopsis

  $ h1-cli compute vm password_reset <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --vm extractid               vm Id                       
  --x-idempotency-key string                               
  --user-name string                                       
  --modulus string                                         
  --exponent string
```

#### h1-cli compute vm flavour

```
h1-cli compute vm flavour

  Action flavour [compute_project_vm_flavour] 

Synopsis

  $ h1-cli compute vm flavour <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --vm extractid               vm Id                          
  --x-idempotency-key string                                  
  --service string             Provide URI of billing/service
```

#### h1-cli compute vm hdd

```
h1-cli compute vm hdd

Synopsis

  $ h1-cli compute vm hdd <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context            
  create   undefined [compute_project_vm_hdd_create] 
  list     undefined [compute_project_vm_hdd_list]
```

##### h1-cli compute vm hdd spec

```
h1-cli compute vm hdd spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm hdd spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli compute vm hdd create

```
h1-cli compute vm hdd create

  undefined [compute_project_vm_hdd_create] 

Synopsis

  $ h1-cli compute vm hdd create <options> 

Options

  --help                     Show help message and exit.                                       
  --passport-file string     Passport file                                                     
  --project extractid        project Id                                                        
  --location extractid       location Id                                                       
  --vm extractid             vm Id                                                             
  --disk string              Provide URI of storage/disk. Require permissions storage/disk/use 
  --controller-type string
```

##### h1-cli compute vm hdd list

```
h1-cli compute vm hdd list

  undefined [compute_project_vm_hdd_list] 

Synopsis

  $ h1-cli compute vm hdd list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

#### h1-cli compute vm netadp

```
h1-cli compute vm netadp

Synopsis

  $ h1-cli compute vm netadp <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context               
  create   undefined [compute_project_vm_netadp_create] 
  list     undefined [compute_project_vm_netadp_list]
```

##### h1-cli compute vm netadp spec

```
h1-cli compute vm netadp spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm netadp spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli compute vm netadp create

```
h1-cli compute vm netadp create

  undefined [compute_project_vm_netadp_create] 

Synopsis

  $ h1-cli compute vm netadp create <options> 

Options

  --help                   Show help message and exit.                                                   
  --passport-file string   Passport file                                                                 
  --project extractid      project Id                                                                    
  --location extractid     location Id                                                                   
  --vm extractid           vm Id                                                                         
  --service string         Provide URI of billing/service                                                
  --network string         Provide URI of networking/network. Require permissions networking/network/use 
  --ip string              Provide URI of networking/ip. Require permissions networking/ip/use           
  --tag nestedvalue[]      Use as value=value,name=name                                                  
  --firewall string        Provide URI of networking/firewall. Require permissions                       
                           networking/firewall/use
```

##### h1-cli compute vm netadp list

```
h1-cli compute vm netadp list

  undefined [compute_project_vm_netadp_list] 

Synopsis

  $ h1-cli compute vm netadp list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

#### h1-cli compute vm console

```
h1-cli compute vm console

Synopsis

  $ h1-cli compute vm console <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context             
  list   undefined [compute_project_vm_console_get]
```

##### h1-cli compute vm console spec

```
h1-cli compute vm console spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm console spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli compute vm console list

```
h1-cli compute vm console list

  undefined [compute_project_vm_console_get] 

Synopsis

  $ h1-cli compute vm console list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

#### h1-cli compute vm service

```
h1-cli compute vm service

Synopsis

  $ h1-cli compute vm service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context              
  list   undefined [compute_project_vm_service_list] 
  show   undefined [compute_project_vm_service_get]
```

##### h1-cli compute vm service spec

```
h1-cli compute vm service spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli compute vm service list

```
h1-cli compute vm service list

  undefined [compute_project_vm_service_list] 

Synopsis

  $ h1-cli compute vm service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

##### h1-cli compute vm service show

```
h1-cli compute vm service show

  undefined [compute_project_vm_service_get] 

Synopsis

  $ h1-cli compute vm service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id                       
  --service extractid      serviceId
```

#### h1-cli compute vm tag

```
h1-cli compute vm tag

Synopsis

  $ h1-cli compute vm tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context            
  create   undefined [compute_project_vm_tag_create] 
  list     undefined [compute_project_vm_tag_list]   
  show     undefined [compute_project_vm_tag_get]
```

##### h1-cli compute vm tag spec

```
h1-cli compute vm tag spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli compute vm tag create

```
h1-cli compute vm tag create

  undefined [compute_project_vm_tag_create] 

Synopsis

  $ h1-cli compute vm tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id                       
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli compute vm tag list

```
h1-cli compute vm tag list

  undefined [compute_project_vm_tag_list] 

Synopsis

  $ h1-cli compute vm tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id
```

##### h1-cli compute vm tag show

```
h1-cli compute vm tag show

  undefined [compute_project_vm_tag_get] 

Synopsis

  $ h1-cli compute vm tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id                       
  --tag extractid          tagId
```

#### h1-cli compute vm event

```
h1-cli compute vm event

Synopsis

  $ h1-cli compute vm event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   undefined [compute_project_vm_event_list]
```

##### h1-cli compute vm event spec

```
h1-cli compute vm event spec

  Print specification of context 

Synopsis

  $ h1-cli compute vm event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli compute vm event list

```
h1-cli compute vm event list

  undefined [compute_project_vm_event_list] 

Synopsis

  $ h1-cli compute vm event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --vm extractid           vm Id                       
  --$limit string          $limit                      
  --$skip string           $skip
```

## h1-cli billing

```
h1-cli billing

Synopsis

  $ h1-cli billing <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec          Print specification of context 
  reservation   Management of reservation      
  service       Management of service
```

### h1-cli billing spec

```
h1-cli billing spec

  Print specification of context 

Synopsis

  $ h1-cli billing spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli billing reservation

```
h1-cli billing reservation

Synopsis

  $ h1-cli billing reservation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                                 
  create    Create reservation [billing_project_reservation_create]        
  list      List reservation [billing_project_reservation_list]            
  show      Returns a single reservation [billing_project_reservation_get] 
  assign    Action assign [billing_project_reservation_assign]             
  extend    Action extend [billing_project_reservation_extend]             
  service   Manage services of the reservation                             
  tag       Manage tags of the reservation                                 
  event     Manage events of the reservation
```

#### h1-cli billing reservation spec

```
h1-cli billing reservation spec

  Print specification of context 

Synopsis

  $ h1-cli billing reservation spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli billing reservation create

```
h1-cli billing reservation create

  Create reservation [billing_project_reservation_create] 

Synopsis

  $ h1-cli billing reservation create <options> 

Options

  --help                       Show help message and exit.    
  --passport-file string       Passport file                  
  --project extractid          project Id                     
  --location extractid         location Id                    
  --x-idempotency-key string                                  
  --name string                                               
  --service string             Provide URI of billing/service 
  --tag nestedvalue[]          Use as value=value,name=name
```

#### h1-cli billing reservation list

```
h1-cli billing reservation list

  List reservation [billing_project_reservation_list] 

Synopsis

  $ h1-cli billing reservation list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --name string            Filter by name              
  --tag string             Filter by tag
```

#### h1-cli billing reservation show

```
h1-cli billing reservation show

  Returns a single reservation [billing_project_reservation_get] 

Synopsis

  $ h1-cli billing reservation show <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id
```

#### h1-cli billing reservation assign

```
h1-cli billing reservation assign

  Action assign [billing_project_reservation_assign] 

Synopsis

  $ h1-cli billing reservation assign <options> 

Options

  --help                       Show help message and exit.                                   
  --passport-file string       Passport file                                                 
  --project extractid          project Id                                                    
  --location extractid         location Id                                                   
  --reservation extractid      reservation Id                                                
  --x-idempotency-key string                                                                 
  --resource string            Provide URI of compute/vm. Require permissions compute/vm/use
```

#### h1-cli billing reservation extend

```
h1-cli billing reservation extend

  Action extend [billing_project_reservation_extend] 

Synopsis

  $ h1-cli billing reservation extend <options> 

Options

  --help                       Show help message and exit. 
  --passport-file string       Passport file               
  --project extractid          project Id                  
  --location extractid         location Id                 
  --reservation extractid      reservation Id              
  --x-idempotency-key string
```

#### h1-cli billing reservation service

```
h1-cli billing reservation service

Synopsis

  $ h1-cli billing reservation service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                       
  list   undefined [billing_project_reservation_service_list] 
  show   undefined [billing_project_reservation_service_get]
```

##### h1-cli billing reservation service spec

```
h1-cli billing reservation service spec

  Print specification of context 

Synopsis

  $ h1-cli billing reservation service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli billing reservation service list

```
h1-cli billing reservation service list

  undefined [billing_project_reservation_service_list] 

Synopsis

  $ h1-cli billing reservation service list <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id
```

##### h1-cli billing reservation service show

```
h1-cli billing reservation service show

  undefined [billing_project_reservation_service_get] 

Synopsis

  $ h1-cli billing reservation service show <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id              
  --service extractid       serviceId
```

#### h1-cli billing reservation tag

```
h1-cli billing reservation tag

Synopsis

  $ h1-cli billing reservation tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                     
  create   undefined [billing_project_reservation_tag_create] 
  list     undefined [billing_project_reservation_tag_list]   
  show     undefined [billing_project_reservation_tag_get]
```

##### h1-cli billing reservation tag spec

```
h1-cli billing reservation tag spec

  Print specification of context 

Synopsis

  $ h1-cli billing reservation tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli billing reservation tag create

```
h1-cli billing reservation tag create

  undefined [billing_project_reservation_tag_create] 

Synopsis

  $ h1-cli billing reservation tag create <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id              
  --id string                                           
  --value string                                        
  --name string
```

##### h1-cli billing reservation tag list

```
h1-cli billing reservation tag list

  undefined [billing_project_reservation_tag_list] 

Synopsis

  $ h1-cli billing reservation tag list <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id
```

##### h1-cli billing reservation tag show

```
h1-cli billing reservation tag show

  undefined [billing_project_reservation_tag_get] 

Synopsis

  $ h1-cli billing reservation tag show <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id              
  --tag extractid           tagId
```

#### h1-cli billing reservation event

```
h1-cli billing reservation event

Synopsis

  $ h1-cli billing reservation event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                     
  list   undefined [billing_project_reservation_event_list]
```

##### h1-cli billing reservation event spec

```
h1-cli billing reservation event spec

  Print specification of context 

Synopsis

  $ h1-cli billing reservation event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli billing reservation event list

```
h1-cli billing reservation event list

  undefined [billing_project_reservation_event_list] 

Synopsis

  $ h1-cli billing reservation event list <options> 

Options

  --help                    Show help message and exit. 
  --passport-file string    Passport file               
  --project extractid       project Id                  
  --location extractid      location Id                 
  --reservation extractid   reservation Id              
  --$limit string           $limit                      
  --$skip string            $skip
```

### h1-cli billing service

```
h1-cli billing service

Synopsis

  $ h1-cli billing service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                         
  list   List service [billing_project_service_list]            
  show   Returns a single service [billing_project_service_get]
```

#### h1-cli billing service spec

```
h1-cli billing service spec

  Print specification of context 

Synopsis

  $ h1-cli billing service spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli billing service list

```
h1-cli billing service list

  List service [billing_project_service_list] 

Synopsis

  $ h1-cli billing service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --kind string            Filter by kind              
  --name string            Filter by name
```

#### h1-cli billing service show

```
h1-cli billing service show

  Returns a single service [billing_project_service_get] 

Synopsis

  $ h1-cli billing service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --service extractid      service Id
```

## h1-cli vmhost

```
h1-cli vmhost

Synopsis

  $ h1-cli vmhost <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context 
  instance   Management of instance
```

### h1-cli vmhost spec

```
h1-cli vmhost spec

  Print specification of context 

Synopsis

  $ h1-cli vmhost spec <options> 

Options

  --help    Show help message and exit.
```

### h1-cli vmhost instance

```
h1-cli vmhost instance

Synopsis

  $ h1-cli vmhost instance <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                          
  list      List instance [vmhost_project_instance_list]            
  show      Returns a single instance [vmhost_project_instance_get] 
  service   Manage services of the instance                         
  tag       Manage tags of the instance                             
  event     Manage events of the instance
```

#### h1-cli vmhost instance spec

```
h1-cli vmhost instance spec

  Print specification of context 

Synopsis

  $ h1-cli vmhost instance spec <options> 

Options

  --help    Show help message and exit.
```

#### h1-cli vmhost instance list

```
h1-cli vmhost instance list

  List instance [vmhost_project_instance_list] 

Synopsis

  $ h1-cli vmhost instance list <options> 

Options

  --help                      Show help message and exit. 
  --passport-file string      Passport file               
  --project extractid         project Id                  
  --location extractid        location Id                 
  --enabled-services string   Filter by enabledServices
```

#### h1-cli vmhost instance show

```
h1-cli vmhost instance show

  Returns a single instance [vmhost_project_instance_get] 

Synopsis

  $ h1-cli vmhost instance show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

#### h1-cli vmhost instance service

```
h1-cli vmhost instance service

Synopsis

  $ h1-cli vmhost instance service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                   
  list   undefined [vmhost_project_instance_service_list] 
  show   undefined [vmhost_project_instance_service_get]
```

##### h1-cli vmhost instance service spec

```
h1-cli vmhost instance service spec

  Print specification of context 

Synopsis

  $ h1-cli vmhost instance service spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli vmhost instance service list

```
h1-cli vmhost instance service list

  undefined [vmhost_project_instance_service_list] 

Synopsis

  $ h1-cli vmhost instance service list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

##### h1-cli vmhost instance service show

```
h1-cli vmhost instance service show

  undefined [vmhost_project_instance_service_get] 

Synopsis

  $ h1-cli vmhost instance service show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --service extractid      serviceId
```

#### h1-cli vmhost instance tag

```
h1-cli vmhost instance tag

Synopsis

  $ h1-cli vmhost instance tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                 
  create   undefined [vmhost_project_instance_tag_create] 
  list     undefined [vmhost_project_instance_tag_list]   
  show     undefined [vmhost_project_instance_tag_get]
```

##### h1-cli vmhost instance tag spec

```
h1-cli vmhost instance tag spec

  Print specification of context 

Synopsis

  $ h1-cli vmhost instance tag spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli vmhost instance tag create

```
h1-cli vmhost instance tag create

  undefined [vmhost_project_instance_tag_create] 

Synopsis

  $ h1-cli vmhost instance tag create <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --id string                                          
  --value string                                       
  --name string
```

##### h1-cli vmhost instance tag list

```
h1-cli vmhost instance tag list

  undefined [vmhost_project_instance_tag_list] 

Synopsis

  $ h1-cli vmhost instance tag list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id
```

##### h1-cli vmhost instance tag show

```
h1-cli vmhost instance tag show

  undefined [vmhost_project_instance_tag_get] 

Synopsis

  $ h1-cli vmhost instance tag show <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --tag extractid          tagId
```

#### h1-cli vmhost instance event

```
h1-cli vmhost instance event

Synopsis

  $ h1-cli vmhost instance event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                 
  list   undefined [vmhost_project_instance_event_list]
```

##### h1-cli vmhost instance event spec

```
h1-cli vmhost instance event spec

  Print specification of context 

Synopsis

  $ h1-cli vmhost instance event spec <options> 

Options

  --help    Show help message and exit.
```

##### h1-cli vmhost instance event list

```
h1-cli vmhost instance event list

  undefined [vmhost_project_instance_event_list] 

Synopsis

  $ h1-cli vmhost instance event list <options> 

Options

  --help                   Show help message and exit. 
  --passport-file string   Passport file               
  --project extractid      project Id                  
  --location extractid     location Id                 
  --instance extractid     instance Id                 
  --$limit string          $limit                      
  --$skip string           $skip
```

