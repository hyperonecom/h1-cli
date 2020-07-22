## h1 iam

```
h1 iam

Synopsis

  $ h1 iam <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  organisation   Management of organisation          
  spec           Print specification of context      
  user           Management of user resource         
  project        Management of project resource      
  organisation   Management of organisation resource 
  policy         Management of policy resource       
  role           Management of role resource         
  sa             Management of sa resource
```

### h1 iam organisation

```
h1 iam organisation

Synopsis

  $ h1 iam organisation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  policy   Management of policy resource 
  role     Management of role resource
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

  --help    Show help message and exit. 

Operation options
```

##### h1 iam organisation policy create

```
h1 iam organisation policy create

  Create iam/policy [iam_organisation_policy_create] 

Synopsis

  $ h1 iam organisation policy create <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri     Organisation Id                                                         
  --x-idempotency-key string   Idempotency key                                                         
  --name string                Policy name                                                             
  --service id-or-uri          Policy service. Provide ID or URI of billing/service                    
  --role uri                   Policy role. Provide URI of iam/role. Requires permissions iam/role/use 
  --resource string            Policy resource                                                         
  --tag key=key,value=value    Tag collection
```

##### h1 iam organisation policy list

```
h1 iam organisation policy list

  List iam/policy [iam_organisation_policy_list] 

Synopsis

  $ h1 iam organisation policy list <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id     
  --name string              Filter by name      
  --tag.value string         Filter by tag.value 
  --tag.key string           Filter by tag.key
```

##### h1 iam organisation policy show

```
h1 iam organisation policy show

  Get iam/policy [iam_organisation_policy_get] 

Synopsis

  $ h1 iam organisation policy show <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id
```

##### h1 iam organisation policy update

```
h1 iam organisation policy update

  Update iam/policy [iam_organisation_policy_update] 

Synopsis

  $ h1 iam organisation policy update <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id                                          
  --policy id-or-uri         Policy Id                                                
  --name string              Policy name. Requires permissions iam/policy.name/update
```

##### h1 iam organisation policy delete

```
h1 iam organisation policy delete

  Delete iam/policy [iam_organisation_policy_delete] 

Synopsis

  $ h1 iam organisation policy delete <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id
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

  --help    Show help message and exit. 

Operation options
```

###### h1 iam organisation policy actor create

```
h1 iam organisation policy actor create

  Create iam/policy.actor [iam_organisation_policy_actor_create] 

Synopsis

  $ h1 iam organisation policy actor create <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --value string             Actor value
```

###### h1 iam organisation policy actor list

```
h1 iam organisation policy actor list

  List iam/policy.actor [iam_organisation_policy_actor_list] 

Synopsis

  $ h1 iam organisation policy actor list <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id
```

###### h1 iam organisation policy actor show

```
h1 iam organisation policy actor show

  Get iam/policy.actor [iam_organisation_policy_actor_get] 

Synopsis

  $ h1 iam organisation policy actor show <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --actor id-or-uri          actorId
```

###### h1 iam organisation policy actor delete

```
h1 iam organisation policy actor delete

  Delete iam/policy.actor [iam_organisation_policy_actor_delete] 

Synopsis

  $ h1 iam organisation policy actor delete <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --actor id-or-uri          actorId
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

  --help    Show help message and exit. 

Operation options
```

###### h1 iam organisation policy service list

```
h1 iam organisation policy service list

  List iam/policy.service [iam_organisation_policy_service_list] 

Synopsis

  $ h1 iam organisation policy service list <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id
```

###### h1 iam organisation policy service show

```
h1 iam organisation policy service show

  Get iam/policy.service [iam_organisation_policy_service_get] 

Synopsis

  $ h1 iam organisation policy service show <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --service id-or-uri        serviceId
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

  --help    Show help message and exit. 

Operation options
```

###### h1 iam organisation policy tag create

```
h1 iam organisation policy tag create

  Create iam/policy.tag [iam_organisation_policy_tag_create] 

Synopsis

  $ h1 iam organisation policy tag create <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --key string               Tag key         
  --value string             Tag value
```

###### h1 iam organisation policy tag list

```
h1 iam organisation policy tag list

  List iam/policy.tag [iam_organisation_policy_tag_list] 

Synopsis

  $ h1 iam organisation policy tag list <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id
```

###### h1 iam organisation policy tag show

```
h1 iam organisation policy tag show

  Get iam/policy.tag [iam_organisation_policy_tag_get] 

Synopsis

  $ h1 iam organisation policy tag show <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --tag id-or-uri            tagId
```

###### h1 iam organisation policy tag delete

```
h1 iam organisation policy tag delete

  Delete iam/policy.tag [iam_organisation_policy_tag_delete] 

Synopsis

  $ h1 iam organisation policy tag delete <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --tag id-or-uri            tagId
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
```

###### h1 iam organisation policy event spec

```
h1 iam organisation policy event spec

  Print specification of context 

Synopsis

  $ h1 iam organisation policy event spec <options> 

Global options

  --help    Show help message and exit. 

Operation options
```

###### h1 iam organisation policy event list

```
h1 iam organisation policy event list

  List iam/policy.event [iam_organisation_policy_event_list] 

Synopsis

  $ h1 iam organisation policy event list <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --$limit string            $limit          
  --$skip string             $skip
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

  --help    Show help message and exit. 

Operation options
```

##### h1 iam organisation role create

```
h1 iam organisation role create

  Create iam/role [iam_organisation_role_create] 

Synopsis

  $ h1 iam organisation role create <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri     Organisation Id                                    
  --x-idempotency-key string   Idempotency key                                    
  --name string                Role name                                          
  --service id-or-uri          Role service. Provide ID or URI of billing/service 
  --description string         Role description                                   
  --permission value=value     Permission collection                              
  --tag key=key,value=value    Tag collection
```

##### h1 iam organisation role list

```
h1 iam organisation role list

  List iam/role [iam_organisation_role_list] 

Synopsis

  $ h1 iam organisation role list <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id     
  --name string              Filter by name      
  --tag.value string         Filter by tag.value 
  --tag.key string           Filter by tag.key
```

##### h1 iam organisation role show

```
h1 iam organisation role show

  Get iam/role [iam_organisation_role_get] 

Synopsis

  $ h1 iam organisation role show <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id
```

##### h1 iam organisation role update

```
h1 iam organisation role update

  Update iam/role [iam_organisation_role_update] 

Synopsis

  $ h1 iam organisation role update <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id                                                    
  --role id-or-uri           Role Id                                                            
  --name string              Role name. Requires permissions iam/role.name/update               
  --description string       Role description. Requires permissions iam/role.description/update
```

##### h1 iam organisation role delete

```
h1 iam organisation role delete

  Delete iam/role [iam_organisation_role_delete] 

Synopsis

  $ h1 iam organisation role delete <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id
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

  --help    Show help message and exit. 

Operation options
```

###### h1 iam organisation role permission create

```
h1 iam organisation role permission create

  Create iam/role.permission [iam_organisation_role_permission_create] 

Synopsis

  $ h1 iam organisation role permission create <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id  
  --role id-or-uri           Role Id          
  --value string             Permission value
```

###### h1 iam organisation role permission list

```
h1 iam organisation role permission list

  List iam/role.permission [iam_organisation_role_permission_list] 

Synopsis

  $ h1 iam organisation role permission list <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id
```

###### h1 iam organisation role permission show

```
h1 iam organisation role permission show

  Get iam/role.permission [iam_organisation_role_permission_get] 

Synopsis

  $ h1 iam organisation role permission show <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --permission id-or-uri     permissionId
```

###### h1 iam organisation role permission delete

```
h1 iam organisation role permission delete

  Delete iam/role.permission [iam_organisation_role_permission_delete] 

Synopsis

  $ h1 iam organisation role permission delete <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --permission id-or-uri     permissionId
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

  --help    Show help message and exit. 

Operation options
```

###### h1 iam organisation role service list

```
h1 iam organisation role service list

  List iam/role.service [iam_organisation_role_service_list] 

Synopsis

  $ h1 iam organisation role service list <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id
```

###### h1 iam organisation role service show

```
h1 iam organisation role service show

  Get iam/role.service [iam_organisation_role_service_get] 

Synopsis

  $ h1 iam organisation role service show <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --service id-or-uri        serviceId
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

  --help    Show help message and exit. 

Operation options
```

###### h1 iam organisation role tag create

```
h1 iam organisation role tag create

  Create iam/role.tag [iam_organisation_role_tag_create] 

Synopsis

  $ h1 iam organisation role tag create <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --key string               Tag key         
  --value string             Tag value
```

###### h1 iam organisation role tag list

```
h1 iam organisation role tag list

  List iam/role.tag [iam_organisation_role_tag_list] 

Synopsis

  $ h1 iam organisation role tag list <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id
```

###### h1 iam organisation role tag show

```
h1 iam organisation role tag show

  Get iam/role.tag [iam_organisation_role_tag_get] 

Synopsis

  $ h1 iam organisation role tag show <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --tag id-or-uri            tagId
```

###### h1 iam organisation role tag delete

```
h1 iam organisation role tag delete

  Delete iam/role.tag [iam_organisation_role_tag_delete] 

Synopsis

  $ h1 iam organisation role tag delete <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --tag id-or-uri            tagId
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
```

###### h1 iam organisation role event spec

```
h1 iam organisation role event spec

  Print specification of context 

Synopsis

  $ h1 iam organisation role event spec <options> 

Global options

  --help    Show help message and exit. 

Operation options
```

###### h1 iam organisation role event list

```
h1 iam organisation role event list

  List iam/role.event [iam_organisation_role_event_list] 

Synopsis

  $ h1 iam organisation role event list <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --$limit string            $limit          
  --$skip string             $skip
```

### h1 iam spec

```
h1 iam spec

  Print specification of context 

Synopsis

  $ h1 iam spec <options> 

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

### h1 iam user

```
h1 iam user

Synopsis

  $ h1 iam user <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec         Print specification of context 
  show         Get iam/user [user_get]        
  update       Update iam/user [user_update]  
  invitation   Manage invitations of the user 
  credential   Manage credentials of the user 
  service      Manage services of the user
```

#### h1 iam user spec

```
h1 iam user spec

  Print specification of context 

Synopsis

  $ h1 iam user spec <options> 

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

#### h1 iam user show

```
h1 iam user show

  Get iam/user [user_get] 

Synopsis

  $ h1 iam user show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri   User Id
```

#### h1 iam user update

```
h1 iam user update

  Update iam/user [user_update] 

Synopsis

  $ h1 iam user update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri       User Id                                                          
  --name string          User name. Requires permissions iam/user.name/update             
  --family-name string   User familyName. Requires permissions iam/user.familyName/update 
  --phone string         User phone. Requires permissions iam/user.phone/update           
  --lang string          User lang. Requires permissions iam/user.lang/update
```

#### h1 iam user invitation

```
h1 iam user invitation

Synopsis

  $ h1 iam user invitation <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec      Print specification of context                  
  list      List iam/user.invitation [user_invitation_list] 
  accept    Manage accepts of the invitation                
  decline   Manage declines of the invitation
```

##### h1 iam user invitation spec

```
h1 iam user invitation spec

  Print specification of context 

Synopsis

  $ h1 iam user invitation spec <options> 

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

##### h1 iam user invitation list

```
h1 iam user invitation list

  List iam/user.invitation [user_invitation_list] 

Synopsis

  $ h1 iam user invitation list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri   User Id
```

##### h1 iam user invitation accept

```
h1 iam user invitation accept

Synopsis

  $ h1 iam user invitation accept <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                         
  create   Create iam/user.accept [user_invitation_accept_create]
```

###### h1 iam user invitation accept spec

```
h1 iam user invitation accept spec

  Print specification of context 

Synopsis

  $ h1 iam user invitation accept spec <options> 

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

###### h1 iam user invitation accept create

```
h1 iam user invitation accept create

  Create iam/user.accept [user_invitation_accept_create] 

Synopsis

  $ h1 iam user invitation accept create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri         User Id      
  --invitation id-or-uri   invitationId
```

##### h1 iam user invitation decline

```
h1 iam user invitation decline

Synopsis

  $ h1 iam user invitation decline <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                           
  create   Create iam/user.decline [user_invitation_decline_create]
```

###### h1 iam user invitation decline spec

```
h1 iam user invitation decline spec

  Print specification of context 

Synopsis

  $ h1 iam user invitation decline spec <options> 

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

###### h1 iam user invitation decline create

```
h1 iam user invitation decline create

  Create iam/user.decline [user_invitation_decline_create] 

Synopsis

  $ h1 iam user invitation decline create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri         User Id      
  --invitation id-or-uri   invitationId
```

#### h1 iam user credential

```
h1 iam user credential

Synopsis

  $ h1 iam user credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                      
  create   Create iam/user.credential [user_credential_create] 
  list     List iam/user.credential [user_credential_list]     
  show     Get iam/user.credential [user_credential_get]       
  update   Update iam/user.credential [user_credential_patch]  
  delete   Delete iam/user.credential [user_credential_delete]
```

##### h1 iam user credential spec

```
h1 iam user credential spec

  Print specification of context 

Synopsis

  $ h1 iam user credential spec <options> 

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

##### h1 iam user credential create

```
h1 iam user credential create

  Create iam/user.credential [user_credential_create] 

Synopsis

  $ h1 iam user credential create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri   User Id          
  --name string      Credential name  
  --type string      Credential type  
  --value string     Credential value 
  --token string     Credential token
```

##### h1 iam user credential list

```
h1 iam user credential list

  List iam/user.credential [user_credential_list] 

Synopsis

  $ h1 iam user credential list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri   User Id
```

##### h1 iam user credential show

```
h1 iam user credential show

  Get iam/user.credential [user_credential_get] 

Synopsis

  $ h1 iam user credential show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri         User Id      
  --credential id-or-uri   credentialId
```

##### h1 iam user credential update

```
h1 iam user credential update

  Update iam/user.credential [user_credential_patch] 

Synopsis

  $ h1 iam user credential update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri         User Id                                                               
  --credential id-or-uri   credentialId                                                          
  --name string            Credential name. Requires permissions iam/user.credential.name/update
```

##### h1 iam user credential delete

```
h1 iam user credential delete

  Delete iam/user.credential [user_credential_delete] 

Synopsis

  $ h1 iam user credential delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri         User Id      
  --credential id-or-uri   credentialId
```

#### h1 iam user service

```
h1 iam user service

Synopsis

  $ h1 iam user service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   List iam/user.service [user_service_list] 
  show   Get iam/user.service [user_service_get]
```

##### h1 iam user service spec

```
h1 iam user service spec

  Print specification of context 

Synopsis

  $ h1 iam user service spec <options> 

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

##### h1 iam user service list

```
h1 iam user service list

  List iam/user.service [user_service_list] 

Synopsis

  $ h1 iam user service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri   User Id
```

##### h1 iam user service show

```
h1 iam user service show

  Get iam/user.service [user_service_get] 

Synopsis

  $ h1 iam user service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --user id-or-uri      User Id   
  --service id-or-uri   serviceId
```

### h1 iam project

```
h1 iam project

Synopsis

  $ h1 iam project <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec       Print specification of context      
  create     Create iam/project [project_create] 
  list       List iam/project [project_list]     
  show       Get iam/project [project_get]       
  update     Update iam/project [project_update] 
  delete     Delete iam/project [project_delete] 
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
  select     Select default project
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --x-idempotency-key string   Idempotency key                                                               
  --name string                Project name                                                                  
  --organisation uri           Project organisation. Provide URI of iam/organisation. Requires permissions   
                               iam/project/create                                                            
  --tag key=key,value=value    Tag collection
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --name string           Filter by name         
  --$limit string         Filter by $limit       
  --active string         Filter by active       
  --organisation string   Filter by organisation 
  --$lean string          Filter by $lean        
  --tag.value string      Filter by tag.value    
  --tag.key string        Filter by tag.key
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id                                                 
  --name string         Project name. Requires permissions iam/project.name/update
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id
```

#### h1 iam project stats

```
h1 iam project stats

Synopsis

  $ h1 iam project stats <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context              
  list   List iam/project.stats [project_stats_list]
```

##### h1 iam project stats spec

```
h1 iam project stats spec

  Print specification of context 

Synopsis

  $ h1 iam project stats spec <options> 

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

##### h1 iam project stats list

```
h1 iam project stats list

  List iam/project.stats [project_stats_list] 

Synopsis

  $ h1 iam project stats list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id
```

#### h1 iam project limit

```
h1 iam project limit

Synopsis

  $ h1 iam project limit <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context            
  list   Get iam/project.limit [project_limit_get]
```

##### h1 iam project limit spec

```
h1 iam project limit spec

  Print specification of context 

Synopsis

  $ h1 iam project limit spec <options> 

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

##### h1 iam project limit list

```
h1 iam project limit list

  Get iam/project.limit [project_limit_get] 

Synopsis

  $ h1 iam project limit list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id    
  --start string           start         
  --end string             end           
  --resource.type string   resource.type
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --service id-or-uri   serviceId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --key string          Tag key    
  --value string        Tag value
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --tag id-or-uri       tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --tag id-or-uri       tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --$limit string       $limit     
  --$skip string        $skip
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id                                                              
  --x-idempotency-key string   Idempotency key                                                         
  --name string                Policy name                                                             
  --service id-or-uri          Policy service. Provide ID or URI of billing/service                    
  --role uri                   Policy role. Provide URI of iam/role. Requires permissions iam/role/use 
  --resource string            Policy resource                                                         
  --tag key=key,value=value    Tag collection
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id          
  --name string         Filter by name      
  --tag.value string    Filter by tag.value 
  --tag.key string      Filter by tag.key
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id                                               
  --policy id-or-uri    Policy Id                                                
  --name string         Policy name. Requires permissions iam/policy.name/update
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id  
  --policy id-or-uri    Policy Id   
  --value string        Actor value
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --actor id-or-uri     actorId
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --actor id-or-uri     actorId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --service id-or-uri   serviceId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --key string          Tag key    
  --value string        Tag value
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --tag id-or-uri       tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --tag id-or-uri       tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --$limit string       $limit     
  --$skip string        $skip
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id                                         
  --x-idempotency-key string   Idempotency key                                    
  --name string                Role name                                          
  --service id-or-uri          Role service. Provide ID or URI of billing/service 
  --description string         Role description                                   
  --permission value=value     Permission collection                              
  --tag key=key,value=value    Tag collection
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id          
  --name string         Filter by name      
  --tag.value string    Filter by tag.value 
  --tag.key string      Filter by tag.key
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri    Project Id                                                         
  --role id-or-uri       Role Id                                                            
  --name string          Role name. Requires permissions iam/role.name/update               
  --description string   Role description. Requires permissions iam/role.description/update
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id       
  --role id-or-uri      Role Id          
  --value string        Permission value
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --role id-or-uri         Role Id      
  --permission id-or-uri   permissionId
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --role id-or-uri         Role Id      
  --permission id-or-uri   permissionId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --service id-or-uri   serviceId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --key string          Tag key    
  --value string        Tag value
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --tag id-or-uri       tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --tag id-or-uri       tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --$limit string       $limit     
  --$skip string        $skip
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri          Project Id                                       
  --x-idempotency-key string   Idempotency key                                  
  --name string                Sa name                                          
  --service id-or-uri          Sa service. Provide ID or URI of billing/service 
  --tag key=key,value=value    Tag collection
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id          
  --name string         Filter by name      
  --tag.value string    Filter by tag.value 
  --tag.key string      Filter by tag.key
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id                                       
  --sa id-or-uri        Sa Id                                            
  --name string         Sa name. Requires permissions iam/sa.name/update
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id
```

##### h1 iam project sa credential

```
h1 iam project sa credential

Synopsis

  $ h1 iam project sa credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                              
  create   Create iam/sa.credential [iam_project_sa_credential_create] 
  list     List iam/sa.credential [iam_project_sa_credential_list]     
  show     Get iam/sa.credential [iam_project_sa_credential_get]       
  update   Update iam/sa.credential [iam_project_sa_credential_patch]  
  delete   Delete iam/sa.credential [iam_project_sa_credential_delete]
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id       
  --sa id-or-uri        Sa Id            
  --name string         Credential name  
  --type string         Credential type  
  --value string        Credential value 
  --token string        Credential token
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --sa id-or-uri           Sa Id        
  --credential id-or-uri   credentialId
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id                                                          
  --sa id-or-uri           Sa Id                                                               
  --credential id-or-uri   credentialId                                                        
  --name string            Credential name. Requires permissions iam/sa.credential.name/update
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri      Project Id   
  --sa id-or-uri           Sa Id        
  --credential id-or-uri   credentialId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --service id-or-uri   serviceId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --key string          Tag key    
  --value string        Tag value
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --tag id-or-uri       tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --tag id-or-uri       tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --$limit string       $limit     
  --$skip string        $skip
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

  spec              Print specification of context                                  
  create            Create iam/organisation [organisation_create]                   
  list              List iam/organisation [organisation_list]                       
  show              Get iam/organisation [organisation_get]                         
  update            Update iam/organisation [organisation_update]                   
  delete            Delete iam/organisation [organisation_delete]                   
  transfer_accept   Transfer accept iam/organisation [organisation_transfer_accept] 
  payment_assign    Payment assign iam/organisation [organisation_payment_assign]   
  billing           Manage billings of the organisation                             
  payment           Manage payments of the organisation                             
  invoice           Manage invoices of the organisation                             
  proforma          Manage proformas of the organisation                            
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --x-idempotency-key string   Idempotency key      
  --name string                Organisation name    
  --billing string             Organisation billing
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --name string              Filter by name            
  --billing.company string   Filter by billing.company 
  --$limit string            Filter by $limit          
  --active string            Filter by active
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id                                                            
  --name string              Organisation name. Requires permissions iam/organisation.name/update       
  --billing string           Organisation billing. Requires permissions iam/organisation.billing/update
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri     Organisation Id      
  --x-idempotency-key string   Idempotency key      
  --payment string             Organisation payment 
  --project string             Organisation project
```

#### h1 iam organisation payment_assign

```
h1 iam organisation payment_assign

  Payment assign iam/organisation [organisation_payment_assign] 

Synopsis

  $ h1 iam organisation payment_assign <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri     Organisation Id      
  --x-idempotency-key string   Idempotency key      
  --payment string             Organisation payment 
  --project string             Organisation project
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --start string             start           
  --end string               end             
  --resource.type string     resource.type
```

#### h1 iam organisation payment

```
h1 iam organisation payment

Synopsis

  $ h1 iam organisation payment <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                            
  list   List iam/organisation.payment [organisation_payment_list]
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id
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
  download   Create iam/organisation.actions [organisation_invoice_actions_download_create]
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --invoice id-or-uri        invoiceId
```

##### h1 iam organisation invoice download

```
h1 iam organisation invoice download

  Create iam/organisation.actions [organisation_invoice_actions_download_create] 

Synopsis

  $ h1 iam organisation invoice download <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --invoice id-or-uri        invoiceId
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
  download   Create iam/organisation.actions [organisation_proforma_actions_download_create]
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id                                                               
  --amount string            Proforma amount                                                               
  --project uri              Proforma project. Provide URI of iam/project. Requires permissions            
                             iam/project/get
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --proforma id-or-uri       proformaId
```

##### h1 iam organisation proforma download

```
h1 iam organisation proforma download

  Create iam/organisation.actions [organisation_proforma_actions_download_create] 

Synopsis

  $ h1 iam organisation proforma download <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --proforma id-or-uri       proformaId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --$limit string            $limit          
  --$skip string             $skip
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri     Organisation Id                                                         
  --x-idempotency-key string   Idempotency key                                                         
  --name string                Policy name                                                             
  --service id-or-uri          Policy service. Provide ID or URI of billing/service                    
  --role uri                   Policy role. Provide URI of iam/role. Requires permissions iam/role/use 
  --resource string            Policy resource                                                         
  --tag key=key,value=value    Tag collection
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id     
  --name string              Filter by name      
  --tag.value string         Filter by tag.value 
  --tag.key string           Filter by tag.key
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id                                          
  --policy id-or-uri         Policy Id                                                
  --name string              Policy name. Requires permissions iam/policy.name/update
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --value string             Actor value
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --actor id-or-uri          actorId
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --actor id-or-uri          actorId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --service id-or-uri        serviceId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --key string               Tag key         
  --value string             Tag value
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --tag id-or-uri            tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --tag id-or-uri            tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --policy id-or-uri         Policy Id       
  --$limit string            $limit          
  --$skip string             $skip
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri     Organisation Id                                    
  --x-idempotency-key string   Idempotency key                                    
  --name string                Role name                                          
  --service id-or-uri          Role service. Provide ID or URI of billing/service 
  --description string         Role description                                   
  --permission value=value     Permission collection                              
  --tag key=key,value=value    Tag collection
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id     
  --name string              Filter by name      
  --tag.value string         Filter by tag.value 
  --tag.key string           Filter by tag.key
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id                                                    
  --role id-or-uri           Role Id                                                            
  --name string              Role name. Requires permissions iam/role.name/update               
  --description string       Role description. Requires permissions iam/role.description/update
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id  
  --role id-or-uri           Role Id          
  --value string             Permission value
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --permission id-or-uri     permissionId
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --permission id-or-uri     permissionId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --service id-or-uri        serviceId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --key string               Tag key         
  --value string             Tag value
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --tag id-or-uri            tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --tag id-or-uri            tagId
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
  --no-wait                                   In case of queued event do not wait for completion 

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
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --organisation id-or-uri   Organisation Id 
  --role id-or-uri           Role Id         
  --$limit string            $limit          
  --$skip string             $skip
```

### h1 iam policy

```
h1 iam policy

Synopsis

  $ h1 iam policy <group> <command> 

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

#### h1 iam policy spec

```
h1 iam policy spec

  Print specification of context 

Synopsis

  $ h1 iam policy spec <options> 

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

#### h1 iam policy create

```
h1 iam policy create

  Create iam/policy [iam_project_policy_create] 

Synopsis

  $ h1 iam policy create <options> 

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
  --x-idempotency-key string   Idempotency key                                                         
  --name string                Policy name                                                             
  --service id-or-uri          Policy service. Provide ID or URI of billing/service                    
  --role uri                   Policy role. Provide URI of iam/role. Requires permissions iam/role/use 
  --resource string            Policy resource                                                         
  --tag key=key,value=value    Tag collection
```

#### h1 iam policy list

```
h1 iam policy list

  List iam/policy [iam_project_policy_list] 

Synopsis

  $ h1 iam policy list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id          
  --name string         Filter by name      
  --tag.value string    Filter by tag.value 
  --tag.key string      Filter by tag.key
```

#### h1 iam policy show

```
h1 iam policy show

  Get iam/policy [iam_project_policy_get] 

Synopsis

  $ h1 iam policy show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id
```

#### h1 iam policy update

```
h1 iam policy update

  Update iam/policy [iam_project_policy_update] 

Synopsis

  $ h1 iam policy update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id                                               
  --policy id-or-uri    Policy Id                                                
  --name string         Policy name. Requires permissions iam/policy.name/update
```

#### h1 iam policy delete

```
h1 iam policy delete

  Delete iam/policy [iam_project_policy_delete] 

Synopsis

  $ h1 iam policy delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id
```

#### h1 iam policy actor

```
h1 iam policy actor

Synopsis

  $ h1 iam policy actor <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                            
  create   Create iam/policy.actor [iam_project_policy_actor_create] 
  list     List iam/policy.actor [iam_project_policy_actor_list]     
  show     Get iam/policy.actor [iam_project_policy_actor_get]       
  delete   Delete iam/policy.actor [iam_project_policy_actor_delete]
```

##### h1 iam policy actor spec

```
h1 iam policy actor spec

  Print specification of context 

Synopsis

  $ h1 iam policy actor spec <options> 

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

##### h1 iam policy actor create

```
h1 iam policy actor create

  Create iam/policy.actor [iam_project_policy_actor_create] 

Synopsis

  $ h1 iam policy actor create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id  
  --policy id-or-uri    Policy Id   
  --value string        Actor value
```

##### h1 iam policy actor list

```
h1 iam policy actor list

  List iam/policy.actor [iam_project_policy_actor_list] 

Synopsis

  $ h1 iam policy actor list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id
```

##### h1 iam policy actor show

```
h1 iam policy actor show

  Get iam/policy.actor [iam_project_policy_actor_get] 

Synopsis

  $ h1 iam policy actor show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --actor id-or-uri     actorId
```

##### h1 iam policy actor delete

```
h1 iam policy actor delete

  Delete iam/policy.actor [iam_project_policy_actor_delete] 

Synopsis

  $ h1 iam policy actor delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --actor id-or-uri     actorId
```

#### h1 iam policy service

```
h1 iam policy service

Synopsis

  $ h1 iam policy service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                            
  list   List iam/policy.service [iam_project_policy_service_list] 
  show   Get iam/policy.service [iam_project_policy_service_get]
```

##### h1 iam policy service spec

```
h1 iam policy service spec

  Print specification of context 

Synopsis

  $ h1 iam policy service spec <options> 

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

##### h1 iam policy service list

```
h1 iam policy service list

  List iam/policy.service [iam_project_policy_service_list] 

Synopsis

  $ h1 iam policy service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id
```

##### h1 iam policy service show

```
h1 iam policy service show

  Get iam/policy.service [iam_project_policy_service_get] 

Synopsis

  $ h1 iam policy service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --service id-or-uri   serviceId
```

#### h1 iam policy tag

```
h1 iam policy tag

Synopsis

  $ h1 iam policy tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                        
  create   Create iam/policy.tag [iam_project_policy_tag_create] 
  list     List iam/policy.tag [iam_project_policy_tag_list]     
  show     Get iam/policy.tag [iam_project_policy_tag_get]       
  delete   Delete iam/policy.tag [iam_project_policy_tag_delete]
```

##### h1 iam policy tag spec

```
h1 iam policy tag spec

  Print specification of context 

Synopsis

  $ h1 iam policy tag spec <options> 

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

##### h1 iam policy tag create

```
h1 iam policy tag create

  Create iam/policy.tag [iam_project_policy_tag_create] 

Synopsis

  $ h1 iam policy tag create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --key string          Tag key    
  --value string        Tag value
```

##### h1 iam policy tag list

```
h1 iam policy tag list

  List iam/policy.tag [iam_project_policy_tag_list] 

Synopsis

  $ h1 iam policy tag list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id
```

##### h1 iam policy tag show

```
h1 iam policy tag show

  Get iam/policy.tag [iam_project_policy_tag_get] 

Synopsis

  $ h1 iam policy tag show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --tag id-or-uri       tagId
```

##### h1 iam policy tag delete

```
h1 iam policy tag delete

  Delete iam/policy.tag [iam_project_policy_tag_delete] 

Synopsis

  $ h1 iam policy tag delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --tag id-or-uri       tagId
```

#### h1 iam policy event

```
h1 iam policy event

Synopsis

  $ h1 iam policy event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                        
  list   List iam/policy.event [iam_project_policy_event_list]
```

##### h1 iam policy event spec

```
h1 iam policy event spec

  Print specification of context 

Synopsis

  $ h1 iam policy event spec <options> 

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

##### h1 iam policy event list

```
h1 iam policy event list

  List iam/policy.event [iam_project_policy_event_list] 

Synopsis

  $ h1 iam policy event list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --policy id-or-uri    Policy Id  
  --$limit string       $limit     
  --$skip string        $skip
```

### h1 iam role

```
h1 iam role

Synopsis

  $ h1 iam role <group> <command> 

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

#### h1 iam role spec

```
h1 iam role spec

  Print specification of context 

Synopsis

  $ h1 iam role spec <options> 

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

#### h1 iam role create

```
h1 iam role create

  Create iam/role [iam_project_role_create] 

Synopsis

  $ h1 iam role create <options> 

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
  --x-idempotency-key string   Idempotency key                                    
  --name string                Role name                                          
  --service id-or-uri          Role service. Provide ID or URI of billing/service 
  --description string         Role description                                   
  --permission value=value     Permission collection                              
  --tag key=key,value=value    Tag collection
```

#### h1 iam role list

```
h1 iam role list

  List iam/role [iam_project_role_list] 

Synopsis

  $ h1 iam role list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id          
  --name string         Filter by name      
  --tag.value string    Filter by tag.value 
  --tag.key string      Filter by tag.key
```

#### h1 iam role show

```
h1 iam role show

  Get iam/role [iam_project_role_get] 

Synopsis

  $ h1 iam role show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id
```

#### h1 iam role update

```
h1 iam role update

  Update iam/role [iam_project_role_update] 

Synopsis

  $ h1 iam role update <options> 

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
  --role id-or-uri       Role Id                                                            
  --name string          Role name. Requires permissions iam/role.name/update               
  --description string   Role description. Requires permissions iam/role.description/update
```

#### h1 iam role delete

```
h1 iam role delete

  Delete iam/role [iam_project_role_delete] 

Synopsis

  $ h1 iam role delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id
```

#### h1 iam role permission

```
h1 iam role permission

Synopsis

  $ h1 iam role permission <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                                  
  create   Create iam/role.permission [iam_project_role_permission_create] 
  list     List iam/role.permission [iam_project_role_permission_list]     
  show     Get iam/role.permission [iam_project_role_permission_get]       
  delete   Delete iam/role.permission [iam_project_role_permission_delete]
```

##### h1 iam role permission spec

```
h1 iam role permission spec

  Print specification of context 

Synopsis

  $ h1 iam role permission spec <options> 

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

##### h1 iam role permission create

```
h1 iam role permission create

  Create iam/role.permission [iam_project_role_permission_create] 

Synopsis

  $ h1 iam role permission create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id       
  --role id-or-uri      Role Id          
  --value string        Permission value
```

##### h1 iam role permission list

```
h1 iam role permission list

  List iam/role.permission [iam_project_role_permission_list] 

Synopsis

  $ h1 iam role permission list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id
```

##### h1 iam role permission show

```
h1 iam role permission show

  Get iam/role.permission [iam_project_role_permission_get] 

Synopsis

  $ h1 iam role permission show <options> 

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
  --role id-or-uri         Role Id      
  --permission id-or-uri   permissionId
```

##### h1 iam role permission delete

```
h1 iam role permission delete

  Delete iam/role.permission [iam_project_role_permission_delete] 

Synopsis

  $ h1 iam role permission delete <options> 

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
  --role id-or-uri         Role Id      
  --permission id-or-uri   permissionId
```

#### h1 iam role service

```
h1 iam role service

Synopsis

  $ h1 iam role service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                        
  list   List iam/role.service [iam_project_role_service_list] 
  show   Get iam/role.service [iam_project_role_service_get]
```

##### h1 iam role service spec

```
h1 iam role service spec

  Print specification of context 

Synopsis

  $ h1 iam role service spec <options> 

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

##### h1 iam role service list

```
h1 iam role service list

  List iam/role.service [iam_project_role_service_list] 

Synopsis

  $ h1 iam role service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id
```

##### h1 iam role service show

```
h1 iam role service show

  Get iam/role.service [iam_project_role_service_get] 

Synopsis

  $ h1 iam role service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --service id-or-uri   serviceId
```

#### h1 iam role tag

```
h1 iam role tag

Synopsis

  $ h1 iam role tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                    
  create   Create iam/role.tag [iam_project_role_tag_create] 
  list     List iam/role.tag [iam_project_role_tag_list]     
  show     Get iam/role.tag [iam_project_role_tag_get]       
  delete   Delete iam/role.tag [iam_project_role_tag_delete]
```

##### h1 iam role tag spec

```
h1 iam role tag spec

  Print specification of context 

Synopsis

  $ h1 iam role tag spec <options> 

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

##### h1 iam role tag create

```
h1 iam role tag create

  Create iam/role.tag [iam_project_role_tag_create] 

Synopsis

  $ h1 iam role tag create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --key string          Tag key    
  --value string        Tag value
```

##### h1 iam role tag list

```
h1 iam role tag list

  List iam/role.tag [iam_project_role_tag_list] 

Synopsis

  $ h1 iam role tag list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id
```

##### h1 iam role tag show

```
h1 iam role tag show

  Get iam/role.tag [iam_project_role_tag_get] 

Synopsis

  $ h1 iam role tag show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --tag id-or-uri       tagId
```

##### h1 iam role tag delete

```
h1 iam role tag delete

  Delete iam/role.tag [iam_project_role_tag_delete] 

Synopsis

  $ h1 iam role tag delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --tag id-or-uri       tagId
```

#### h1 iam role event

```
h1 iam role event

Synopsis

  $ h1 iam role event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   List iam/role.event [iam_project_role_event_list]
```

##### h1 iam role event spec

```
h1 iam role event spec

  Print specification of context 

Synopsis

  $ h1 iam role event spec <options> 

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

##### h1 iam role event list

```
h1 iam role event list

  List iam/role.event [iam_project_role_event_list] 

Synopsis

  $ h1 iam role event list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --role id-or-uri      Role Id    
  --$limit string       $limit     
  --$skip string        $skip
```

### h1 iam sa

```
h1 iam sa

Synopsis

  $ h1 iam sa <group> <command> 

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

#### h1 iam sa spec

```
h1 iam sa spec

  Print specification of context 

Synopsis

  $ h1 iam sa spec <options> 

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

#### h1 iam sa create

```
h1 iam sa create

  Create iam/sa [iam_project_sa_create] 

Synopsis

  $ h1 iam sa create <options> 

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
  --x-idempotency-key string   Idempotency key                                  
  --name string                Sa name                                          
  --service id-or-uri          Sa service. Provide ID or URI of billing/service 
  --tag key=key,value=value    Tag collection
```

#### h1 iam sa list

```
h1 iam sa list

  List iam/sa [iam_project_sa_list] 

Synopsis

  $ h1 iam sa list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id          
  --name string         Filter by name      
  --tag.value string    Filter by tag.value 
  --tag.key string      Filter by tag.key
```

#### h1 iam sa show

```
h1 iam sa show

  Get iam/sa [iam_project_sa_get] 

Synopsis

  $ h1 iam sa show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id
```

#### h1 iam sa update

```
h1 iam sa update

  Update iam/sa [iam_project_sa_update] 

Synopsis

  $ h1 iam sa update <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id                                       
  --sa id-or-uri        Sa Id                                            
  --name string         Sa name. Requires permissions iam/sa.name/update
```

#### h1 iam sa delete

```
h1 iam sa delete

  Delete iam/sa [iam_project_sa_delete] 

Synopsis

  $ h1 iam sa delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id
```

#### h1 iam sa credential

```
h1 iam sa credential

Synopsis

  $ h1 iam sa credential <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                              
  create   Create iam/sa.credential [iam_project_sa_credential_create] 
  list     List iam/sa.credential [iam_project_sa_credential_list]     
  show     Get iam/sa.credential [iam_project_sa_credential_get]       
  update   Update iam/sa.credential [iam_project_sa_credential_patch]  
  delete   Delete iam/sa.credential [iam_project_sa_credential_delete]
```

##### h1 iam sa credential spec

```
h1 iam sa credential spec

  Print specification of context 

Synopsis

  $ h1 iam sa credential spec <options> 

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

##### h1 iam sa credential create

```
h1 iam sa credential create

  Create iam/sa.credential [iam_project_sa_credential_create] 

Synopsis

  $ h1 iam sa credential create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id       
  --sa id-or-uri        Sa Id            
  --name string         Credential name  
  --type string         Credential type  
  --value string        Credential value 
  --token string        Credential token
```

##### h1 iam sa credential list

```
h1 iam sa credential list

  List iam/sa.credential [iam_project_sa_credential_list] 

Synopsis

  $ h1 iam sa credential list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id
```

##### h1 iam sa credential show

```
h1 iam sa credential show

  Get iam/sa.credential [iam_project_sa_credential_get] 

Synopsis

  $ h1 iam sa credential show <options> 

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
  --sa id-or-uri           Sa Id        
  --credential id-or-uri   credentialId
```

##### h1 iam sa credential update

```
h1 iam sa credential update

  Update iam/sa.credential [iam_project_sa_credential_patch] 

Synopsis

  $ h1 iam sa credential update <options> 

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
  --sa id-or-uri           Sa Id                                                               
  --credential id-or-uri   credentialId                                                        
  --name string            Credential name. Requires permissions iam/sa.credential.name/update
```

##### h1 iam sa credential delete

```
h1 iam sa credential delete

  Delete iam/sa.credential [iam_project_sa_credential_delete] 

Synopsis

  $ h1 iam sa credential delete <options> 

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
  --sa id-or-uri           Sa Id        
  --credential id-or-uri   credentialId
```

#### h1 iam sa service

```
h1 iam sa service

Synopsis

  $ h1 iam sa service <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                    
  list   List iam/sa.service [iam_project_sa_service_list] 
  show   Get iam/sa.service [iam_project_sa_service_get]
```

##### h1 iam sa service spec

```
h1 iam sa service spec

  Print specification of context 

Synopsis

  $ h1 iam sa service spec <options> 

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

##### h1 iam sa service list

```
h1 iam sa service list

  List iam/sa.service [iam_project_sa_service_list] 

Synopsis

  $ h1 iam sa service list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id
```

##### h1 iam sa service show

```
h1 iam sa service show

  Get iam/sa.service [iam_project_sa_service_get] 

Synopsis

  $ h1 iam sa service show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --service id-or-uri   serviceId
```

#### h1 iam sa tag

```
h1 iam sa tag

Synopsis

  $ h1 iam sa tag <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec     Print specification of context                
  create   Create iam/sa.tag [iam_project_sa_tag_create] 
  list     List iam/sa.tag [iam_project_sa_tag_list]     
  show     Get iam/sa.tag [iam_project_sa_tag_get]       
  delete   Delete iam/sa.tag [iam_project_sa_tag_delete]
```

##### h1 iam sa tag spec

```
h1 iam sa tag spec

  Print specification of context 

Synopsis

  $ h1 iam sa tag spec <options> 

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

##### h1 iam sa tag create

```
h1 iam sa tag create

  Create iam/sa.tag [iam_project_sa_tag_create] 

Synopsis

  $ h1 iam sa tag create <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --key string          Tag key    
  --value string        Tag value
```

##### h1 iam sa tag list

```
h1 iam sa tag list

  List iam/sa.tag [iam_project_sa_tag_list] 

Synopsis

  $ h1 iam sa tag list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id
```

##### h1 iam sa tag show

```
h1 iam sa tag show

  Get iam/sa.tag [iam_project_sa_tag_get] 

Synopsis

  $ h1 iam sa tag show <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --tag id-or-uri       tagId
```

##### h1 iam sa tag delete

```
h1 iam sa tag delete

  Delete iam/sa.tag [iam_project_sa_tag_delete] 

Synopsis

  $ h1 iam sa tag delete <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --tag id-or-uri       tagId
```

#### h1 iam sa event

```
h1 iam sa event

Synopsis

  $ h1 iam sa event <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  spec   Print specification of context                
  list   List iam/sa.event [iam_project_sa_event_list]
```

##### h1 iam sa event spec

```
h1 iam sa event spec

  Print specification of context 

Synopsis

  $ h1 iam sa event spec <options> 

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

##### h1 iam sa event list

```
h1 iam sa event list

  List iam/sa.event [iam_project_sa_event_list] 

Synopsis

  $ h1 iam sa event list <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --project id-or-uri   Project Id 
  --sa id-or-uri        Sa Id      
  --$limit string       $limit     
  --$skip string        $skip
```

