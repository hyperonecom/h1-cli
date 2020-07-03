# iam

```
Usage: h1-cli iam [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  user
  project
  organisation
  policy
  policy
  role
  role
  sa
  help [command]  display help for command
```

## iam spec

```
Usage: h1-cli iam spec [options]

Options:
  -h, --help  display help for command
```

## iam user

```
Usage: h1-cli iam user [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  help [command]  display help for command
```

### iam user spec

```
Usage: h1-cli iam user spec [options]

Options:
  -h, --help  display help for command
```

## iam project

```
Usage: h1-cli iam project [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  help [command]  display help for command
```

### iam project spec

```
Usage: h1-cli iam project spec [options]

Options:
  -h, --help  display help for command
```

## iam organisation

```
Usage: h1-cli iam organisation [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  help [command]  display help for command
```

### iam organisation spec

```
Usage: h1-cli iam organisation spec [options]

Options:
  -h, --help  display help for command
```

## iam policy

```
Usage: h1-cli iam policy [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  actor             Manage actors of the policy
  service           Manage services of the policy
  tag               Manage tags of the policy
  event             Manage events of the policy
  help [command]    display help for command
```

### iam policy spec

```
Usage: h1-cli iam policy spec [options]

Options:
  -h, --help  display help for command
```

### iam policy create

```
Usage: h1-cli iam policy create [options]

Options:
  --project [ID-OR-URI]              
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --role [ROLE]                      Provide URI of iam/role. Require permissions iam/role/use
  --resource [RESOURCE]              
  --actor [VALUE=VALUE ...]          
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### iam policy list

```
Usage: h1-cli iam policy list [options]

Options:
  --project [ID-OR-URI]            
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy get

```
Usage: h1-cli iam policy get [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy update

```
Usage: h1-cli iam policy update [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --name [NAME]                    Require permissions iam/policy.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy delete

```
Usage: h1-cli iam policy delete [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy actor

```
Usage: h1-cli iam policy actor [options] [command]

Manage actors of the policy

Options:
  -h, --help                 display help for command

Commands:
  spec
  /actor [options]
  /actor [options]
  /actor [options]
  /actor/:actorid [options]
  /actor/:actorid [options]
  help [command]             display help for command
```

#### iam policy actor spec

```
Usage: h1-cli iam policy actor spec [options]

Options:
  -h, --help  display help for command
```

#### iam policy actor /actor

```
Usage: h1-cli iam policy actor /actor [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy actor /actor

```
Usage: h1-cli iam policy actor /actor [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy actor /actor

```
Usage: h1-cli iam policy actor /actor [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --value [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy actor /actor/:actorid

```
Usage: h1-cli iam policy actor /actor/:actorid [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --actor [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy actor /actor/:actorid

```
Usage: h1-cli iam policy actor /actor/:actorid [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --actor [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy service

```
Usage: h1-cli iam policy service [options] [command]

Manage services of the policy

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### iam policy service spec

```
Usage: h1-cli iam policy service spec [options]

Options:
  -h, --help  display help for command
```

#### iam policy service /service

```
Usage: h1-cli iam policy service /service [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy service /service/:serviceid

```
Usage: h1-cli iam policy service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy tag

```
Usage: h1-cli iam policy tag [options] [command]

Manage tags of the policy

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### iam policy tag spec

```
Usage: h1-cli iam policy tag spec [options]

Options:
  -h, --help  display help for command
```

#### iam policy tag /tag

```
Usage: h1-cli iam policy tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy tag /tag

```
Usage: h1-cli iam policy tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy tag /tag

```
Usage: h1-cli iam policy tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy tag /tag/:tagid

```
Usage: h1-cli iam policy tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy tag /tag/:tagid

```
Usage: h1-cli iam policy tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy event

```
Usage: h1-cli iam policy event [options] [command]

Manage events of the policy

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### iam policy event spec

```
Usage: h1-cli iam policy event spec [options]

Options:
  -h, --help  display help for command
```

#### iam policy event /event

```
Usage: h1-cli iam policy event /event [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## iam policy

```
Usage: h1-cli iam policy [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  actor             Manage actors of the policy
  service           Manage services of the policy
  tag               Manage tags of the policy
  event             Manage events of the policy
  help [command]    display help for command
```

### iam policy spec

```
Usage: h1-cli iam policy spec [options]

Options:
  -h, --help  display help for command
```

### iam policy create

```
Usage: h1-cli iam policy create [options]

Options:
  --project [ID-OR-URI]              
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --role [ROLE]                      Provide URI of iam/role. Require permissions iam/role/use
  --resource [RESOURCE]              
  --actor [VALUE=VALUE ...]          
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### iam policy list

```
Usage: h1-cli iam policy list [options]

Options:
  --project [ID-OR-URI]            
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy get

```
Usage: h1-cli iam policy get [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy update

```
Usage: h1-cli iam policy update [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --name [NAME]                    Require permissions iam/policy.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy delete

```
Usage: h1-cli iam policy delete [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy actor

```
Usage: h1-cli iam policy actor [options] [command]

Manage actors of the policy

Options:
  -h, --help                 display help for command

Commands:
  spec
  /actor [options]
  /actor [options]
  /actor [options]
  /actor/:actorid [options]
  /actor/:actorid [options]
  help [command]             display help for command
```

#### iam policy actor spec

```
Usage: h1-cli iam policy actor spec [options]

Options:
  -h, --help  display help for command
```

#### iam policy actor /actor

```
Usage: h1-cli iam policy actor /actor [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy actor /actor

```
Usage: h1-cli iam policy actor /actor [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy actor /actor

```
Usage: h1-cli iam policy actor /actor [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --value [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy actor /actor/:actorid

```
Usage: h1-cli iam policy actor /actor/:actorid [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --actor [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy actor /actor/:actorid

```
Usage: h1-cli iam policy actor /actor/:actorid [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --actor [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy service

```
Usage: h1-cli iam policy service [options] [command]

Manage services of the policy

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### iam policy service spec

```
Usage: h1-cli iam policy service spec [options]

Options:
  -h, --help  display help for command
```

#### iam policy service /service

```
Usage: h1-cli iam policy service /service [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy service /service/:serviceid

```
Usage: h1-cli iam policy service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy tag

```
Usage: h1-cli iam policy tag [options] [command]

Manage tags of the policy

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### iam policy tag spec

```
Usage: h1-cli iam policy tag spec [options]

Options:
  -h, --help  display help for command
```

#### iam policy tag /tag

```
Usage: h1-cli iam policy tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy tag /tag

```
Usage: h1-cli iam policy tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy tag /tag

```
Usage: h1-cli iam policy tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy tag /tag/:tagid

```
Usage: h1-cli iam policy tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam policy tag /tag/:tagid

```
Usage: h1-cli iam policy tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam policy event

```
Usage: h1-cli iam policy event [options] [command]

Manage events of the policy

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### iam policy event spec

```
Usage: h1-cli iam policy event spec [options]

Options:
  -h, --help  display help for command
```

#### iam policy event /event

```
Usage: h1-cli iam policy event /event [options]

Options:
  --project [ID-OR-URI]            
  --policy [ID-OR-URI]             
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## iam role

```
Usage: h1-cli iam role [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  permission        Manage permissions of the role
  service           Manage services of the role
  tag               Manage tags of the role
  event             Manage events of the role
  help [command]    display help for command
```

### iam role spec

```
Usage: h1-cli iam role spec [options]

Options:
  -h, --help  display help for command
```

### iam role create

```
Usage: h1-cli iam role create [options]

Options:
  --project [ID-OR-URI]              
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --description [DESCRIPTION]        
  --permission [VALUE=VALUE ...]     
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### iam role list

```
Usage: h1-cli iam role list [options]

Options:
  --project [ID-OR-URI]            
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role get

```
Usage: h1-cli iam role get [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role update

```
Usage: h1-cli iam role update [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --name [NAME]                    Require permissions iam/role.name/update
  --description [DESCRIPTION]      Require permissions iam/role.description/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role delete

```
Usage: h1-cli iam role delete [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role permission

```
Usage: h1-cli iam role permission [options] [command]

Manage permissions of the role

Options:
  -h, --help                           display help for command

Commands:
  spec
  /permission [options]
  /permission [options]
  /permission [options]
  /permission/:permissionid [options]
  /permission/:permissionid [options]
  help [command]                       display help for command
```

#### iam role permission spec

```
Usage: h1-cli iam role permission spec [options]

Options:
  -h, --help  display help for command
```

#### iam role permission /permission

```
Usage: h1-cli iam role permission /permission [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role permission /permission

```
Usage: h1-cli iam role permission /permission [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role permission /permission

```
Usage: h1-cli iam role permission /permission [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --value [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role permission /permission/:permissionid

```
Usage: h1-cli iam role permission /permission/:permissionid [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --permission [ID-OR-URI]         
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role permission /permission/:permissionid

```
Usage: h1-cli iam role permission /permission/:permissionid [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --permission [ID-OR-URI]         
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role service

```
Usage: h1-cli iam role service [options] [command]

Manage services of the role

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### iam role service spec

```
Usage: h1-cli iam role service spec [options]

Options:
  -h, --help  display help for command
```

#### iam role service /service

```
Usage: h1-cli iam role service /service [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role service /service/:serviceid

```
Usage: h1-cli iam role service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role tag

```
Usage: h1-cli iam role tag [options] [command]

Manage tags of the role

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### iam role tag spec

```
Usage: h1-cli iam role tag spec [options]

Options:
  -h, --help  display help for command
```

#### iam role tag /tag

```
Usage: h1-cli iam role tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role tag /tag

```
Usage: h1-cli iam role tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role tag /tag

```
Usage: h1-cli iam role tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role tag /tag/:tagid

```
Usage: h1-cli iam role tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role tag /tag/:tagid

```
Usage: h1-cli iam role tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role event

```
Usage: h1-cli iam role event [options] [command]

Manage events of the role

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### iam role event spec

```
Usage: h1-cli iam role event spec [options]

Options:
  -h, --help  display help for command
```

#### iam role event /event

```
Usage: h1-cli iam role event /event [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## iam role

```
Usage: h1-cli iam role [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  permission        Manage permissions of the role
  service           Manage services of the role
  tag               Manage tags of the role
  event             Manage events of the role
  help [command]    display help for command
```

### iam role spec

```
Usage: h1-cli iam role spec [options]

Options:
  -h, --help  display help for command
```

### iam role create

```
Usage: h1-cli iam role create [options]

Options:
  --project [ID-OR-URI]              
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --description [DESCRIPTION]        
  --permission [VALUE=VALUE ...]     
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### iam role list

```
Usage: h1-cli iam role list [options]

Options:
  --project [ID-OR-URI]            
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role get

```
Usage: h1-cli iam role get [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role update

```
Usage: h1-cli iam role update [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --name [NAME]                    Require permissions iam/role.name/update
  --description [DESCRIPTION]      Require permissions iam/role.description/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role delete

```
Usage: h1-cli iam role delete [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role permission

```
Usage: h1-cli iam role permission [options] [command]

Manage permissions of the role

Options:
  -h, --help                           display help for command

Commands:
  spec
  /permission [options]
  /permission [options]
  /permission [options]
  /permission/:permissionid [options]
  /permission/:permissionid [options]
  help [command]                       display help for command
```

#### iam role permission spec

```
Usage: h1-cli iam role permission spec [options]

Options:
  -h, --help  display help for command
```

#### iam role permission /permission

```
Usage: h1-cli iam role permission /permission [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role permission /permission

```
Usage: h1-cli iam role permission /permission [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role permission /permission

```
Usage: h1-cli iam role permission /permission [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --value [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role permission /permission/:permissionid

```
Usage: h1-cli iam role permission /permission/:permissionid [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --permission [ID-OR-URI]         
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role permission /permission/:permissionid

```
Usage: h1-cli iam role permission /permission/:permissionid [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --permission [ID-OR-URI]         
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role service

```
Usage: h1-cli iam role service [options] [command]

Manage services of the role

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### iam role service spec

```
Usage: h1-cli iam role service spec [options]

Options:
  -h, --help  display help for command
```

#### iam role service /service

```
Usage: h1-cli iam role service /service [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role service /service/:serviceid

```
Usage: h1-cli iam role service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role tag

```
Usage: h1-cli iam role tag [options] [command]

Manage tags of the role

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### iam role tag spec

```
Usage: h1-cli iam role tag spec [options]

Options:
  -h, --help  display help for command
```

#### iam role tag /tag

```
Usage: h1-cli iam role tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role tag /tag

```
Usage: h1-cli iam role tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role tag /tag

```
Usage: h1-cli iam role tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role tag /tag/:tagid

```
Usage: h1-cli iam role tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam role tag /tag/:tagid

```
Usage: h1-cli iam role tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam role event

```
Usage: h1-cli iam role event [options] [command]

Manage events of the role

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### iam role event spec

```
Usage: h1-cli iam role event spec [options]

Options:
  -h, --help  display help for command
```

#### iam role event /event

```
Usage: h1-cli iam role event /event [options]

Options:
  --project [ID-OR-URI]            
  --role [ID-OR-URI]               
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## iam sa

```
Usage: h1-cli iam sa [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  credential        Manage credentials of the sa
  service           Manage services of the sa
  tag               Manage tags of the sa
  event             Manage events of the sa
  help [command]    display help for command
```

### iam sa spec

```
Usage: h1-cli iam sa spec [options]

Options:
  -h, --help  display help for command
```

### iam sa create

```
Usage: h1-cli iam sa create [options]

Options:
  --project [ID-OR-URI]              
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### iam sa list

```
Usage: h1-cli iam sa list [options]

Options:
  --project [ID-OR-URI]            
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam sa get

```
Usage: h1-cli iam sa get [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam sa update

```
Usage: h1-cli iam sa update [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --name [NAME]                    Require permissions iam/sa.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam sa delete

```
Usage: h1-cli iam sa delete [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam sa credential

```
Usage: h1-cli iam sa credential [options] [command]

Manage credentials of the sa

Options:
  -h, --help             display help for command

Commands:
  spec
  /credential [options]
  /credential [options]
  help [command]         display help for command
```

#### iam sa credential spec

```
Usage: h1-cli iam sa credential spec [options]

Options:
  -h, --help  display help for command
```

#### iam sa credential /credential

```
Usage: h1-cli iam sa credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam sa credential /credential

```
Usage: h1-cli iam sa credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --name [NAME]                    
  --type [TYPE]                    
  --value [VALUE]                  
  --token [TOKEN]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam sa service

```
Usage: h1-cli iam sa service [options] [command]

Manage services of the sa

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### iam sa service spec

```
Usage: h1-cli iam sa service spec [options]

Options:
  -h, --help  display help for command
```

#### iam sa service /service

```
Usage: h1-cli iam sa service /service [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam sa service /service/:serviceid

```
Usage: h1-cli iam sa service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam sa tag

```
Usage: h1-cli iam sa tag [options] [command]

Manage tags of the sa

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### iam sa tag spec

```
Usage: h1-cli iam sa tag spec [options]

Options:
  -h, --help  display help for command
```

#### iam sa tag /tag

```
Usage: h1-cli iam sa tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam sa tag /tag

```
Usage: h1-cli iam sa tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam sa tag /tag

```
Usage: h1-cli iam sa tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam sa tag /tag/:tagid

```
Usage: h1-cli iam sa tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### iam sa tag /tag/:tagid

```
Usage: h1-cli iam sa tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### iam sa event

```
Usage: h1-cli iam sa event [options] [command]

Manage events of the sa

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### iam sa event spec

```
Usage: h1-cli iam sa event spec [options]

Options:
  -h, --help  display help for command
```

#### iam sa event /event

```
Usage: h1-cli iam sa event /event [options]

Options:
  --project [ID-OR-URI]            
  --sa [ID-OR-URI]                 
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

# provider

```
Usage: h1-cli provider [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  agent
  help [command]  display help for command
```

## provider spec

```
Usage: h1-cli provider spec [options]

Options:
  -h, --help  display help for command
```

## provider agent

```
Usage: h1-cli provider agent [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  enabledServices   Manage enabledServices of the agent
  resource          Manage resources of the agent
  event             Manage events of the agent
  credential        Manage credentials of the agent
  service           Manage services of the agent
  tag               Manage tags of the agent
  event             Manage events of the agent
  help [command]    display help for command
```

### provider agent spec

```
Usage: h1-cli provider agent spec [options]

Options:
  -h, --help  display help for command
```

### provider agent create

```
Usage: h1-cli provider agent create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### provider agent list

```
Usage: h1-cli provider agent list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### provider agent get

```
Usage: h1-cli provider agent get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### provider agent update

```
Usage: h1-cli provider agent update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --name [NAME]                    Require permissions provider/agent.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### provider agent delete

```
Usage: h1-cli provider agent delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### provider agent enabledServices

```
Usage: h1-cli provider agent enabledServices [options] [command]

Manage enabledServices of the agent

Options:
  -h, --help                  display help for command

Commands:
  spec
  /enabledservices [options]
  /enabledservices [options]
  help [command]              display help for command
```

#### provider agent enabledServices spec

```
Usage: h1-cli provider agent enabledServices spec [options]

Options:
  -h, --help  display help for command
```

#### provider agent enabledServices /enabledservices

```
Usage: h1-cli provider agent enabledServices /enabledservices [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### provider agent enabledServices /enabledservices

```
Usage: h1-cli provider agent enabledServices /enabledservices [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### provider agent resource

```
Usage: h1-cli provider agent resource [options] [command]

Manage resources of the agent

Options:
  -h, --help           display help for command

Commands:
  spec
  /resource [options]
  event                Manage events of the resource
  help [command]       display help for command
```

#### provider agent resource spec

```
Usage: h1-cli provider agent resource spec [options]

Options:
  -h, --help  display help for command
```

#### provider agent resource /resource

```
Usage: h1-cli provider agent resource /resource [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### provider agent resource event

```
Usage: h1-cli provider agent resource event [options] [command]

Manage events of the resource

Options:
  -h, --help                             display help for command

Commands:
  spec
  /resource/:resourceid/event [options]
  help [command]                         display help for command
```

##### provider agent resource event spec

```
Usage: h1-cli provider agent resource event spec [options]

Options:
  -h, --help  display help for command
```

##### provider agent resource event /resource/:resourceid/event

```
Usage: h1-cli provider agent resource event /resource/:resourceid/event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --resource [ID-OR-URI]           
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### provider agent event

```
Usage: h1-cli provider agent event [options] [command]

Manage events of the agent

Options:
  -h, --help                             display help for command

Commands:
  spec
  /resource/:resourceid/event [options]
  help [command]                         display help for command
```

#### provider agent event spec

```
Usage: h1-cli provider agent event spec [options]

Options:
  -h, --help  display help for command
```

#### provider agent event /resource/:resourceid/event

```
Usage: h1-cli provider agent event /resource/:resourceid/event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --resource [ID-OR-URI]           
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### provider agent credential

```
Usage: h1-cli provider agent credential [options] [command]

Manage credentials of the agent

Options:
  -h, --help             display help for command

Commands:
  spec
  /credential [options]
  /credential [options]
  help [command]         display help for command
```

#### provider agent credential spec

```
Usage: h1-cli provider agent credential spec [options]

Options:
  -h, --help  display help for command
```

#### provider agent credential /credential

```
Usage: h1-cli provider agent credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### provider agent credential /credential

```
Usage: h1-cli provider agent credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --name [NAME]                    
  --type [TYPE]                    
  --value [VALUE]                  
  --token [TOKEN]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### provider agent service

```
Usage: h1-cli provider agent service [options] [command]

Manage services of the agent

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### provider agent service spec

```
Usage: h1-cli provider agent service spec [options]

Options:
  -h, --help  display help for command
```

#### provider agent service /service

```
Usage: h1-cli provider agent service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### provider agent service /service/:serviceid

```
Usage: h1-cli provider agent service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### provider agent tag

```
Usage: h1-cli provider agent tag [options] [command]

Manage tags of the agent

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### provider agent tag spec

```
Usage: h1-cli provider agent tag spec [options]

Options:
  -h, --help  display help for command
```

#### provider agent tag /tag

```
Usage: h1-cli provider agent tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### provider agent tag /tag

```
Usage: h1-cli provider agent tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### provider agent tag /tag

```
Usage: h1-cli provider agent tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### provider agent tag /tag/:tagid

```
Usage: h1-cli provider agent tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### provider agent tag /tag/:tagid

```
Usage: h1-cli provider agent tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### provider agent event

```
Usage: h1-cli provider agent event [options] [command]

Manage events of the agent

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### provider agent event spec

```
Usage: h1-cli provider agent event spec [options]

Options:
  -h, --help  display help for command
```

#### provider agent event /event

```
Usage: h1-cli provider agent event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --agent [ID-OR-URI]              
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

# container

```
Usage: h1-cli container [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  instance
  registry
  volume
  help [command]  display help for command
```

## container spec

```
Usage: h1-cli container spec [options]

Options:
  -h, --help  display help for command
```

## container instance

```
Usage: h1-cli container instance [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  process           Manage processes of the instance
  service           Manage services of the instance
  tag               Manage tags of the instance
  event             Manage events of the instance
  help [command]    display help for command
```

### container instance spec

```
Usage: h1-cli container instance spec [options]

Options:
  -h, --help  display help for command
```

### container instance create

```
Usage: h1-cli container instance create [options]

Options:
  --project [ID-OR-URI]                                                 
  --location [ID-OR-URI]                                                
  --x-idempotency-key [VALUE]                                           
  --name [NAME]                                                         
  --service [SERVICE]                                                   Provide URI of billing/service
  --image [IMAGE]                                                       
  --registry [REGISTRY]                                                 
  --expose [INTERNAL=INTERNAL,EXTERNAL=EXTERNAL,PROTOCOL=PROTOCOL ...]  
  --env [ENV ...]                                                       
  --command [COMMAND]                                                   
  --volumes [SOURCE=SOURCE,SOURCEPATH=SOURCEPATH,TARGET=TARGET ...]     
  --tag [VALUE=VALUE,NAME=NAME ...]                                     
  --output [OUTPUT]                                                     Specify output format of command
  --query [QUERY]                                                        JMESPath query string
  --passport-file [PASSPORT-FILE]                                       Passport file
  --no-wait                                                             In case of queued event do not wait for completion
  -h, --help                                                            display help for command
```

### container instance list

```
Usage: h1-cli container instance list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container instance get

```
Usage: h1-cli container instance get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container instance update

```
Usage: h1-cli container instance update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --name [NAME]                    Require permissions container/instance.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container instance delete

```
Usage: h1-cli container instance delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container instance process

```
Usage: h1-cli container instance process [options] [command]

Manage processes of the instance

Options:
  -h, --help          display help for command

Commands:
  spec
  /process [options]
  help [command]      display help for command
```

#### container instance process spec

```
Usage: h1-cli container instance process spec [options]

Options:
  -h, --help  display help for command
```

#### container instance process /process

```
Usage: h1-cli container instance process /process [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container instance service

```
Usage: h1-cli container instance service [options] [command]

Manage services of the instance

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### container instance service spec

```
Usage: h1-cli container instance service spec [options]

Options:
  -h, --help  display help for command
```

#### container instance service /service

```
Usage: h1-cli container instance service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container instance service /service/:serviceid

```
Usage: h1-cli container instance service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container instance tag

```
Usage: h1-cli container instance tag [options] [command]

Manage tags of the instance

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### container instance tag spec

```
Usage: h1-cli container instance tag spec [options]

Options:
  -h, --help  display help for command
```

#### container instance tag /tag

```
Usage: h1-cli container instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container instance tag /tag

```
Usage: h1-cli container instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container instance tag /tag

```
Usage: h1-cli container instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container instance tag /tag/:tagid

```
Usage: h1-cli container instance tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container instance tag /tag/:tagid

```
Usage: h1-cli container instance tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container instance event

```
Usage: h1-cli container instance event [options] [command]

Manage events of the instance

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### container instance event spec

```
Usage: h1-cli container instance event spec [options]

Options:
  -h, --help  display help for command
```

#### container instance event /event

```
Usage: h1-cli container instance event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## container registry

```
Usage: h1-cli container registry [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  repository        Manage repositories of the registry
  image             Manage images of the registry
  credential        Manage credentials of the registry
  service           Manage services of the registry
  tag               Manage tags of the registry
  event             Manage events of the registry
  help [command]    display help for command
```

### container registry spec

```
Usage: h1-cli container registry spec [options]

Options:
  -h, --help  display help for command
```

### container registry create

```
Usage: h1-cli container registry create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### container registry list

```
Usage: h1-cli container registry list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container registry get

```
Usage: h1-cli container registry get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container registry update

```
Usage: h1-cli container registry update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --name [NAME]                    Require permissions container/registry.name/update
  --domain [DOMAIN ...]            Require permissions container/registry.domain/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container registry delete

```
Usage: h1-cli container registry delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container registry repository

```
Usage: h1-cli container registry repository [options] [command]

Manage repositories of the registry

Options:
  -h, --help                           display help for command

Commands:
  spec
  /repository [options]
  /repository/:repositoryid [options]
  image                                Manage images of the repository
  help [command]                       display help for command
```

#### container registry repository spec

```
Usage: h1-cli container registry repository spec [options]

Options:
  -h, --help  display help for command
```

#### container registry repository /repository

```
Usage: h1-cli container registry repository /repository [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container registry repository /repository/:repositoryid

```
Usage: h1-cli container registry repository /repository/:repositoryid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --repository [ID-OR-URI]         
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container registry repository image

```
Usage: h1-cli container registry repository image [options] [command]

Manage images of the repository

Options:
  -h, --help                                          display help for command

Commands:
  spec
  /repository/:repositoryid/image [options]
  /repository/:repositoryid/image/:imageid [options]
  /repository/:repositoryid/image/:imageid [options]
  help [command]                                      display help for command
```

##### container registry repository image spec

```
Usage: h1-cli container registry repository image spec [options]

Options:
  -h, --help  display help for command
```

##### container registry repository image /repository/:repositoryid/image

```
Usage: h1-cli container registry repository image /repository/:repositoryid/image [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --repository [ID-OR-URI]         
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

##### container registry repository image /repository/:repositoryid/image/:imageid

```
Usage: h1-cli container registry repository image /repository/:repositoryid/image/:imageid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --repository [ID-OR-URI]         
  --image [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

##### container registry repository image /repository/:repositoryid/image/:imageid

```
Usage: h1-cli container registry repository image /repository/:repositoryid/image/:imageid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --repository [ID-OR-URI]         
  --image [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container registry image

```
Usage: h1-cli container registry image [options] [command]

Manage images of the registry

Options:
  -h, --help                                          display help for command

Commands:
  spec
  /repository/:repositoryid/image [options]
  /repository/:repositoryid/image/:imageid [options]
  /repository/:repositoryid/image/:imageid [options]
  help [command]                                      display help for command
```

#### container registry image spec

```
Usage: h1-cli container registry image spec [options]

Options:
  -h, --help  display help for command
```

#### container registry image /repository/:repositoryid/image

```
Usage: h1-cli container registry image /repository/:repositoryid/image [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --repository [ID-OR-URI]         
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container registry image /repository/:repositoryid/image/:imageid

```
Usage: h1-cli container registry image /repository/:repositoryid/image/:imageid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --repository [ID-OR-URI]         
  --image [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container registry image /repository/:repositoryid/image/:imageid

```
Usage: h1-cli container registry image /repository/:repositoryid/image/:imageid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --repository [ID-OR-URI]         
  --image [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container registry credential

```
Usage: h1-cli container registry credential [options] [command]

Manage credentials of the registry

Options:
  -h, --help             display help for command

Commands:
  spec
  /credential [options]
  /credential [options]
  help [command]         display help for command
```

#### container registry credential spec

```
Usage: h1-cli container registry credential spec [options]

Options:
  -h, --help  display help for command
```

#### container registry credential /credential

```
Usage: h1-cli container registry credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container registry credential /credential

```
Usage: h1-cli container registry credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --name [NAME]                    
  --type [TYPE]                    
  --value [VALUE]                  
  --token [TOKEN]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container registry service

```
Usage: h1-cli container registry service [options] [command]

Manage services of the registry

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### container registry service spec

```
Usage: h1-cli container registry service spec [options]

Options:
  -h, --help  display help for command
```

#### container registry service /service

```
Usage: h1-cli container registry service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container registry service /service/:serviceid

```
Usage: h1-cli container registry service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container registry tag

```
Usage: h1-cli container registry tag [options] [command]

Manage tags of the registry

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### container registry tag spec

```
Usage: h1-cli container registry tag spec [options]

Options:
  -h, --help  display help for command
```

#### container registry tag /tag

```
Usage: h1-cli container registry tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container registry tag /tag

```
Usage: h1-cli container registry tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container registry tag /tag

```
Usage: h1-cli container registry tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container registry tag /tag/:tagid

```
Usage: h1-cli container registry tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container registry tag /tag/:tagid

```
Usage: h1-cli container registry tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container registry event

```
Usage: h1-cli container registry event [options] [command]

Manage events of the registry

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### container registry event spec

```
Usage: h1-cli container registry event spec [options]

Options:
  -h, --help  display help for command
```

#### container registry event /event

```
Usage: h1-cli container registry event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --registry [ID-OR-URI]           
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## container volume

```
Usage: h1-cli container volume [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  service           Manage services of the volume
  tag               Manage tags of the volume
  event             Manage events of the volume
  help [command]    display help for command
```

### container volume spec

```
Usage: h1-cli container volume spec [options]

Options:
  -h, --help  display help for command
```

### container volume create

```
Usage: h1-cli container volume create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --size [SIZE]                      
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### container volume list

```
Usage: h1-cli container volume list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container volume get

```
Usage: h1-cli container volume get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --volume [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container volume update

```
Usage: h1-cli container volume update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --volume [ID-OR-URI]             
  --name [NAME]                    Require permissions container/volume.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container volume delete

```
Usage: h1-cli container volume delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --volume [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container volume service

```
Usage: h1-cli container volume service [options] [command]

Manage services of the volume

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### container volume service spec

```
Usage: h1-cli container volume service spec [options]

Options:
  -h, --help  display help for command
```

#### container volume service /service

```
Usage: h1-cli container volume service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --volume [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container volume service /service/:serviceid

```
Usage: h1-cli container volume service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --volume [ID-OR-URI]             
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container volume tag

```
Usage: h1-cli container volume tag [options] [command]

Manage tags of the volume

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### container volume tag spec

```
Usage: h1-cli container volume tag spec [options]

Options:
  -h, --help  display help for command
```

#### container volume tag /tag

```
Usage: h1-cli container volume tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --volume [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container volume tag /tag

```
Usage: h1-cli container volume tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --volume [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container volume tag /tag

```
Usage: h1-cli container volume tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --volume [ID-OR-URI]             
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container volume tag /tag/:tagid

```
Usage: h1-cli container volume tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --volume [ID-OR-URI]             
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### container volume tag /tag/:tagid

```
Usage: h1-cli container volume tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --volume [ID-OR-URI]             
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### container volume event

```
Usage: h1-cli container volume event [options] [command]

Manage events of the volume

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### container volume event spec

```
Usage: h1-cli container volume event spec [options]

Options:
  -h, --help  display help for command
```

#### container volume event /event

```
Usage: h1-cli container volume event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --volume [ID-OR-URI]             
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

# database

```
Usage: h1-cli database [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  instance
  help [command]  display help for command
```

## database spec

```
Usage: h1-cli database spec [options]

Options:
  -h, --help  display help for command
```

## database instance

```
Usage: h1-cli database instance [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  credential        Manage credentials of the instance
  service           Manage services of the instance
  tag               Manage tags of the instance
  event             Manage events of the instance
  help [command]    display help for command
```

### database instance spec

```
Usage: h1-cli database instance spec [options]

Options:
  -h, --help  display help for command
```

### database instance create

```
Usage: h1-cli database instance create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### database instance list

```
Usage: h1-cli database instance list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### database instance get

```
Usage: h1-cli database instance get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### database instance update

```
Usage: h1-cli database instance update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --name [NAME]                    Require permissions database/instance.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### database instance delete

```
Usage: h1-cli database instance delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### database instance credential

```
Usage: h1-cli database instance credential [options] [command]

Manage credentials of the instance

Options:
  -h, --help             display help for command

Commands:
  spec
  /credential [options]
  /credential [options]
  help [command]         display help for command
```

#### database instance credential spec

```
Usage: h1-cli database instance credential spec [options]

Options:
  -h, --help  display help for command
```

#### database instance credential /credential

```
Usage: h1-cli database instance credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### database instance credential /credential

```
Usage: h1-cli database instance credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --name [NAME]                    
  --type [TYPE]                    
  --value [VALUE]                  
  --token [TOKEN]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### database instance service

```
Usage: h1-cli database instance service [options] [command]

Manage services of the instance

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### database instance service spec

```
Usage: h1-cli database instance service spec [options]

Options:
  -h, --help  display help for command
```

#### database instance service /service

```
Usage: h1-cli database instance service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### database instance service /service/:serviceid

```
Usage: h1-cli database instance service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### database instance tag

```
Usage: h1-cli database instance tag [options] [command]

Manage tags of the instance

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### database instance tag spec

```
Usage: h1-cli database instance tag spec [options]

Options:
  -h, --help  display help for command
```

#### database instance tag /tag

```
Usage: h1-cli database instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### database instance tag /tag

```
Usage: h1-cli database instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### database instance tag /tag

```
Usage: h1-cli database instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### database instance tag /tag/:tagid

```
Usage: h1-cli database instance tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### database instance tag /tag/:tagid

```
Usage: h1-cli database instance tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### database instance event

```
Usage: h1-cli database instance event [options] [command]

Manage events of the instance

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### database instance event spec

```
Usage: h1-cli database instance event spec [options]

Options:
  -h, --help  display help for command
```

#### database instance event /event

```
Usage: h1-cli database instance event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

# insight

```
Usage: h1-cli insight [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  journal
  help [command]  display help for command
```

## insight spec

```
Usage: h1-cli insight spec [options]

Options:
  -h, --help  display help for command
```

## insight journal

```
Usage: h1-cli insight journal [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  credential        Manage credentials of the journal
  service           Manage services of the journal
  tag               Manage tags of the journal
  event             Manage events of the journal
  help [command]    display help for command
```

### insight journal spec

```
Usage: h1-cli insight journal spec [options]

Options:
  -h, --help  display help for command
```

### insight journal create

```
Usage: h1-cli insight journal create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --retention [RETENTION]            
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### insight journal list

```
Usage: h1-cli insight journal list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### insight journal get

```
Usage: h1-cli insight journal get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### insight journal update

```
Usage: h1-cli insight journal update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --name [NAME]                    Require permissions insight/journal.name/update
  --retention [RETENTION]          Require permissions insight/journal.retention/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### insight journal delete

```
Usage: h1-cli insight journal delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### insight journal credential

```
Usage: h1-cli insight journal credential [options] [command]

Manage credentials of the journal

Options:
  -h, --help             display help for command

Commands:
  spec
  /credential [options]
  /credential [options]
  help [command]         display help for command
```

#### insight journal credential spec

```
Usage: h1-cli insight journal credential spec [options]

Options:
  -h, --help  display help for command
```

#### insight journal credential /credential

```
Usage: h1-cli insight journal credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### insight journal credential /credential

```
Usage: h1-cli insight journal credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --name [NAME]                    
  --type [TYPE]                    
  --value [VALUE]                  
  --token [TOKEN]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### insight journal service

```
Usage: h1-cli insight journal service [options] [command]

Manage services of the journal

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### insight journal service spec

```
Usage: h1-cli insight journal service spec [options]

Options:
  -h, --help  display help for command
```

#### insight journal service /service

```
Usage: h1-cli insight journal service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### insight journal service /service/:serviceid

```
Usage: h1-cli insight journal service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### insight journal tag

```
Usage: h1-cli insight journal tag [options] [command]

Manage tags of the journal

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### insight journal tag spec

```
Usage: h1-cli insight journal tag spec [options]

Options:
  -h, --help  display help for command
```

#### insight journal tag /tag

```
Usage: h1-cli insight journal tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### insight journal tag /tag

```
Usage: h1-cli insight journal tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### insight journal tag /tag

```
Usage: h1-cli insight journal tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### insight journal tag /tag/:tagid

```
Usage: h1-cli insight journal tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### insight journal tag /tag/:tagid

```
Usage: h1-cli insight journal tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### insight journal event

```
Usage: h1-cli insight journal event [options] [command]

Manage events of the journal

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### insight journal event spec

```
Usage: h1-cli insight journal event spec [options]

Options:
  -h, --help  display help for command
```

#### insight journal event /event

```
Usage: h1-cli insight journal event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --journal [ID-OR-URI]            
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

# website

```
Usage: h1-cli website [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  instance
  help [command]  display help for command
```

## website spec

```
Usage: h1-cli website spec [options]

Options:
  -h, --help  display help for command
```

## website instance

```
Usage: h1-cli website instance [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  snapshot          Manage snapshots of the instance
  env               Manage envs of the instance
  link              Manage links of the instance
  sideapp           Manage sideapps of the instance
  credential        Manage credentials of the instance
  service           Manage services of the instance
  tag               Manage tags of the instance
  event             Manage events of the instance
  help [command]    display help for command
```

### website instance spec

```
Usage: h1-cli website instance spec [options]

Options:
  -h, --help  display help for command
```

### website instance create

```
Usage: h1-cli website instance create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --image [IMAGE]                    
  --source [SOURCE]                  Provide URI of website/instance.snapshot. Require permissions website/instance.snapshot/use
  --env [NAME=NAME,VALUE=VALUE ...]  
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### website instance list

```
Usage: h1-cli website instance list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### website instance get

```
Usage: h1-cli website instance get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### website instance update

```
Usage: h1-cli website instance update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --name [NAME]                    Require permissions website/instance.name/update
  --domain [DOMAIN ...]            Require permissions website/instance.domain/update
  --image [IMAGE]                  Require permissions website/instance.image/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### website instance delete

```
Usage: h1-cli website instance delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### website instance snapshot

```
Usage: h1-cli website instance snapshot [options] [command]

Manage snapshots of the instance

Options:
  -h, --help           display help for command

Commands:
  spec
  /snapshot [options]
  /snapshot [options]
  help [command]       display help for command
```

#### website instance snapshot spec

```
Usage: h1-cli website instance snapshot spec [options]

Options:
  -h, --help  display help for command
```

#### website instance snapshot /snapshot

```
Usage: h1-cli website instance snapshot /snapshot [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### website instance snapshot /snapshot

```
Usage: h1-cli website instance snapshot /snapshot [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### website instance env

```
Usage: h1-cli website instance env [options] [command]

Manage envs of the instance

Options:
  -h, --help      display help for command

Commands:
  spec
  /env [options]
  /env [options]
  help [command]  display help for command
```

#### website instance env spec

```
Usage: h1-cli website instance env spec [options]

Options:
  -h, --help  display help for command
```

#### website instance env /env

```
Usage: h1-cli website instance env /env [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### website instance env /env

```
Usage: h1-cli website instance env /env [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --name [NAME]                    
  --value [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### website instance link

```
Usage: h1-cli website instance link [options] [command]

Manage links of the instance

Options:
  -h, --help       display help for command

Commands:
  spec
  /link [options]
  /link [options]
  help [command]   display help for command
```

#### website instance link spec

```
Usage: h1-cli website instance link spec [options]

Options:
  -h, --help  display help for command
```

#### website instance link /link

```
Usage: h1-cli website instance link /link [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### website instance link /link

```
Usage: h1-cli website instance link /link [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --actor [ACTOR]                  Provide URI of iam/sa. Require permissions iam/sa/use
  --purpose [PURPOSE]              
  --resource [RESOURCE]            Provide URI of insight/journal. Require permissions insight/journal/use
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### website instance sideapp

```
Usage: h1-cli website instance sideapp [options] [command]

Manage sideapps of the instance

Options:
  -h, --help          display help for command

Commands:
  spec
  /sideapp [options]
  /sideapp [options]
  help [command]      display help for command
```

#### website instance sideapp spec

```
Usage: h1-cli website instance sideapp spec [options]

Options:
  -h, --help  display help for command
```

#### website instance sideapp /sideapp

```
Usage: h1-cli website instance sideapp /sideapp [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### website instance sideapp /sideapp

```
Usage: h1-cli website instance sideapp /sideapp [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --flavour [FLAVOUR]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### website instance credential

```
Usage: h1-cli website instance credential [options] [command]

Manage credentials of the instance

Options:
  -h, --help             display help for command

Commands:
  spec
  /credential [options]
  /credential [options]
  help [command]         display help for command
```

#### website instance credential spec

```
Usage: h1-cli website instance credential spec [options]

Options:
  -h, --help  display help for command
```

#### website instance credential /credential

```
Usage: h1-cli website instance credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### website instance credential /credential

```
Usage: h1-cli website instance credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --name [NAME]                    
  --type [TYPE]                    
  --value [VALUE]                  
  --token [TOKEN]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### website instance service

```
Usage: h1-cli website instance service [options] [command]

Manage services of the instance

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### website instance service spec

```
Usage: h1-cli website instance service spec [options]

Options:
  -h, --help  display help for command
```

#### website instance service /service

```
Usage: h1-cli website instance service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### website instance service /service/:serviceid

```
Usage: h1-cli website instance service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### website instance tag

```
Usage: h1-cli website instance tag [options] [command]

Manage tags of the instance

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### website instance tag spec

```
Usage: h1-cli website instance tag spec [options]

Options:
  -h, --help  display help for command
```

#### website instance tag /tag

```
Usage: h1-cli website instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### website instance tag /tag

```
Usage: h1-cli website instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### website instance tag /tag

```
Usage: h1-cli website instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### website instance tag /tag/:tagid

```
Usage: h1-cli website instance tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### website instance tag /tag/:tagid

```
Usage: h1-cli website instance tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### website instance event

```
Usage: h1-cli website instance event [options] [command]

Manage events of the instance

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### website instance event spec

```
Usage: h1-cli website instance event spec [options]

Options:
  -h, --help  display help for command
```

#### website instance event /event

```
Usage: h1-cli website instance event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

# dns

```
Usage: h1-cli dns [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  zone
  help [command]  display help for command
```

## dns spec

```
Usage: h1-cli dns spec [options]

Options:
  -h, --help  display help for command
```

## dns zone

```
Usage: h1-cli dns zone [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  recordset         Manage recordsets of the zone
  record            Manage records of the zone
  service           Manage services of the zone
  tag               Manage tags of the zone
  event             Manage events of the zone
  help [command]    display help for command
```

### dns zone spec

```
Usage: h1-cli dns zone spec [options]

Options:
  -h, --help  display help for command
```

### dns zone create

```
Usage: h1-cli dns zone create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --dnsName [DNSNAME]                
  --source [SOURCE]                  
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### dns zone list

```
Usage: h1-cli dns zone list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### dns zone get

```
Usage: h1-cli dns zone get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### dns zone update

```
Usage: h1-cli dns zone update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --name [NAME]                    Require permissions dns/zone.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### dns zone delete

```
Usage: h1-cli dns zone delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### dns zone recordset

```
Usage: h1-cli dns zone recordset [options] [command]

Manage recordsets of the zone

Options:
  -h, --help                         display help for command

Commands:
  spec
  /recordset [options]
  /recordset [options]
  /recordset/:recordsetid [options]
  /recordset/:recordsetid [options]
  /recordset/:recordsetid [options]
  record                             Manage records of the recordset
  help [command]                     display help for command
```

#### dns zone recordset spec

```
Usage: h1-cli dns zone recordset spec [options]

Options:
  -h, --help  display help for command
```

#### dns zone recordset /recordset

```
Usage: h1-cli dns zone recordset /recordset [options]

Options:
  --project [ID-OR-URI]                           
  --location [ID-OR-URI]                          
  --zone [ID-OR-URI]                              
  --name [NAME]                                   
  --type [TYPE]                                   
  --ttl [TTL]                                     
  --record [CONTENT=CONTENT,ENABLED=ENABLED ...]  
  --output [OUTPUT]                               Specify output format of command
  --query [QUERY]                                  JMESPath query string
  --passport-file [PASSPORT-FILE]                 Passport file
  --no-wait                                       In case of queued event do not wait for completion
  -h, --help                                      display help for command
```

#### dns zone recordset /recordset

```
Usage: h1-cli dns zone recordset /recordset [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone recordset /recordset/:recordsetid

```
Usage: h1-cli dns zone recordset /recordset/:recordsetid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone recordset /recordset/:recordsetid

```
Usage: h1-cli dns zone recordset /recordset/:recordsetid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone recordset /recordset/:recordsetid

```
Usage: h1-cli dns zone recordset /recordset/:recordsetid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --ttl [TTL]                      Require permissions dns/zone.recordset.ttl/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone recordset record

```
Usage: h1-cli dns zone recordset record [options] [command]

Manage records of the recordset

Options:
  -h, --help                                          display help for command

Commands:
  spec
  /recordset/:recordsetid/record [options]
  /recordset/:recordsetid/record [options]
  /recordset/:recordsetid/record [options]
  /recordset/:recordsetid/record/:recordid [options]
  /recordset/:recordsetid/record/:recordid [options]
  help [command]                                      display help for command
```

##### dns zone recordset record spec

```
Usage: h1-cli dns zone recordset record spec [options]

Options:
  -h, --help  display help for command
```

##### dns zone recordset record /recordset/:recordsetid/record

```
Usage: h1-cli dns zone recordset record /recordset/:recordsetid/record [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --content [CONTENT]              
  --enabled [ENABLED]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

##### dns zone recordset record /recordset/:recordsetid/record

```
Usage: h1-cli dns zone recordset record /recordset/:recordsetid/record [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

##### dns zone recordset record /recordset/:recordsetid/record

```
Usage: h1-cli dns zone recordset record /recordset/:recordsetid/record [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

##### dns zone recordset record /recordset/:recordsetid/record/:recordid

```
Usage: h1-cli dns zone recordset record /recordset/:recordsetid/record/:recordid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --record [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

##### dns zone recordset record /recordset/:recordsetid/record/:recordid

```
Usage: h1-cli dns zone recordset record /recordset/:recordsetid/record/:recordid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --record [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### dns zone record

```
Usage: h1-cli dns zone record [options] [command]

Manage records of the zone

Options:
  -h, --help                                          display help for command

Commands:
  spec
  /recordset/:recordsetid/record [options]
  /recordset/:recordsetid/record [options]
  /recordset/:recordsetid/record [options]
  /recordset/:recordsetid/record/:recordid [options]
  /recordset/:recordsetid/record/:recordid [options]
  help [command]                                      display help for command
```

#### dns zone record spec

```
Usage: h1-cli dns zone record spec [options]

Options:
  -h, --help  display help for command
```

#### dns zone record /recordset/:recordsetid/record

```
Usage: h1-cli dns zone record /recordset/:recordsetid/record [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --content [CONTENT]              
  --enabled [ENABLED]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone record /recordset/:recordsetid/record

```
Usage: h1-cli dns zone record /recordset/:recordsetid/record [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone record /recordset/:recordsetid/record

```
Usage: h1-cli dns zone record /recordset/:recordsetid/record [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone record /recordset/:recordsetid/record/:recordid

```
Usage: h1-cli dns zone record /recordset/:recordsetid/record/:recordid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --record [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone record /recordset/:recordsetid/record/:recordid

```
Usage: h1-cli dns zone record /recordset/:recordsetid/record/:recordid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --recordset [ID-OR-URI]          
  --record [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### dns zone service

```
Usage: h1-cli dns zone service [options] [command]

Manage services of the zone

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### dns zone service spec

```
Usage: h1-cli dns zone service spec [options]

Options:
  -h, --help  display help for command
```

#### dns zone service /service

```
Usage: h1-cli dns zone service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone service /service/:serviceid

```
Usage: h1-cli dns zone service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### dns zone tag

```
Usage: h1-cli dns zone tag [options] [command]

Manage tags of the zone

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### dns zone tag spec

```
Usage: h1-cli dns zone tag spec [options]

Options:
  -h, --help  display help for command
```

#### dns zone tag /tag

```
Usage: h1-cli dns zone tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone tag /tag

```
Usage: h1-cli dns zone tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone tag /tag

```
Usage: h1-cli dns zone tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone tag /tag/:tagid

```
Usage: h1-cli dns zone tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### dns zone tag /tag/:tagid

```
Usage: h1-cli dns zone tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### dns zone event

```
Usage: h1-cli dns zone event [options] [command]

Manage events of the zone

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### dns zone event spec

```
Usage: h1-cli dns zone event spec [options]

Options:
  -h, --help  display help for command
```

#### dns zone event /event

```
Usage: h1-cli dns zone event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --zone [ID-OR-URI]               
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

# storage

```
Usage: h1-cli storage [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  disk
  image
  iso
  snapshot
  vault
  help [command]  display help for command
```

## storage spec

```
Usage: h1-cli storage spec [options]

Options:
  -h, --help  display help for command
```

## storage disk

```
Usage: h1-cli storage disk [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  service           Manage services of the disk
  tag               Manage tags of the disk
  event             Manage events of the disk
  help [command]    display help for command
```

### storage disk spec

```
Usage: h1-cli storage disk spec [options]

Options:
  -h, --help  display help for command
```

### storage disk create

```
Usage: h1-cli storage disk create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --size [SIZE]                      
  --source [SOURCE]                  Provide URI of storage/disk. Require permissions storage/disk/use
  --cloud [CLOUD]                    
  --metadata [METADATA]              
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### storage disk list

```
Usage: h1-cli storage disk list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage disk get

```
Usage: h1-cli storage disk get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --disk [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage disk update

```
Usage: h1-cli storage disk update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --disk [ID-OR-URI]               
  --name [NAME]                    Require permissions storage/disk.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage disk delete

```
Usage: h1-cli storage disk delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --disk [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage disk service

```
Usage: h1-cli storage disk service [options] [command]

Manage services of the disk

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### storage disk service spec

```
Usage: h1-cli storage disk service spec [options]

Options:
  -h, --help  display help for command
```

#### storage disk service /service

```
Usage: h1-cli storage disk service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --disk [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage disk service /service/:serviceid

```
Usage: h1-cli storage disk service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --disk [ID-OR-URI]               
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage disk tag

```
Usage: h1-cli storage disk tag [options] [command]

Manage tags of the disk

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### storage disk tag spec

```
Usage: h1-cli storage disk tag spec [options]

Options:
  -h, --help  display help for command
```

#### storage disk tag /tag

```
Usage: h1-cli storage disk tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --disk [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage disk tag /tag

```
Usage: h1-cli storage disk tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --disk [ID-OR-URI]               
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage disk tag /tag

```
Usage: h1-cli storage disk tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --disk [ID-OR-URI]               
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage disk tag /tag/:tagid

```
Usage: h1-cli storage disk tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --disk [ID-OR-URI]               
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage disk tag /tag/:tagid

```
Usage: h1-cli storage disk tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --disk [ID-OR-URI]               
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage disk event

```
Usage: h1-cli storage disk event [options] [command]

Manage events of the disk

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### storage disk event spec

```
Usage: h1-cli storage disk event spec [options]

Options:
  -h, --help  display help for command
```

#### storage disk event /event

```
Usage: h1-cli storage disk event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --disk [ID-OR-URI]               
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## storage image

```
Usage: h1-cli storage image [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  service           Manage services of the image
  tag               Manage tags of the image
  event             Manage events of the image
  help [command]    display help for command
```

### storage image spec

```
Usage: h1-cli storage image spec [options]

Options:
  -h, --help  display help for command
```

### storage image create

```
Usage: h1-cli storage image create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --vm [VM]                          Provide URI of compute/vm. Require permissions compute/vm/use
  --replica [REPLICA]                Provide URI of compute/replica. Require permissions compute/replica/use
  --description [DESCRIPTION]        
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### storage image list

```
Usage: h1-cli storage image list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage image get

```
Usage: h1-cli storage image get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --image [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage image update

```
Usage: h1-cli storage image update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --image [ID-OR-URI]              
  --name [NAME]                    Require permissions storage/image.name/update
  --description [DESCRIPTION]      Require permissions storage/image.description/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage image delete

```
Usage: h1-cli storage image delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --image [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage image service

```
Usage: h1-cli storage image service [options] [command]

Manage services of the image

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### storage image service spec

```
Usage: h1-cli storage image service spec [options]

Options:
  -h, --help  display help for command
```

#### storage image service /service

```
Usage: h1-cli storage image service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --image [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage image service /service/:serviceid

```
Usage: h1-cli storage image service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --image [ID-OR-URI]              
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage image tag

```
Usage: h1-cli storage image tag [options] [command]

Manage tags of the image

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### storage image tag spec

```
Usage: h1-cli storage image tag spec [options]

Options:
  -h, --help  display help for command
```

#### storage image tag /tag

```
Usage: h1-cli storage image tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --image [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage image tag /tag

```
Usage: h1-cli storage image tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --image [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage image tag /tag

```
Usage: h1-cli storage image tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --image [ID-OR-URI]              
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage image tag /tag/:tagid

```
Usage: h1-cli storage image tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --image [ID-OR-URI]              
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage image tag /tag/:tagid

```
Usage: h1-cli storage image tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --image [ID-OR-URI]              
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage image event

```
Usage: h1-cli storage image event [options] [command]

Manage events of the image

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### storage image event spec

```
Usage: h1-cli storage image event spec [options]

Options:
  -h, --help  display help for command
```

#### storage image event /event

```
Usage: h1-cli storage image event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --image [ID-OR-URI]              
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## storage iso

```
Usage: h1-cli storage iso [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  service           Manage services of the iso
  tag               Manage tags of the iso
  event             Manage events of the iso
  help [command]    display help for command
```

### storage iso spec

```
Usage: h1-cli storage iso spec [options]

Options:
  -h, --help  display help for command
```

### storage iso create

```
Usage: h1-cli storage iso create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --size [SIZE]                      
  --source [SOURCE]                  
  --cloud [CLOUD]                    
  --metadata [METADATA]              
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### storage iso list

```
Usage: h1-cli storage iso list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage iso get

```
Usage: h1-cli storage iso get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --iso [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage iso update

```
Usage: h1-cli storage iso update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --iso [ID-OR-URI]                
  --name [NAME]                    Require permissions storage/iso.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage iso delete

```
Usage: h1-cli storage iso delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --iso [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage iso service

```
Usage: h1-cli storage iso service [options] [command]

Manage services of the iso

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### storage iso service spec

```
Usage: h1-cli storage iso service spec [options]

Options:
  -h, --help  display help for command
```

#### storage iso service /service

```
Usage: h1-cli storage iso service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --iso [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage iso service /service/:serviceid

```
Usage: h1-cli storage iso service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --iso [ID-OR-URI]                
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage iso tag

```
Usage: h1-cli storage iso tag [options] [command]

Manage tags of the iso

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### storage iso tag spec

```
Usage: h1-cli storage iso tag spec [options]

Options:
  -h, --help  display help for command
```

#### storage iso tag /tag

```
Usage: h1-cli storage iso tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --iso [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage iso tag /tag

```
Usage: h1-cli storage iso tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --iso [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage iso tag /tag

```
Usage: h1-cli storage iso tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --iso [ID-OR-URI]                
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage iso tag /tag/:tagid

```
Usage: h1-cli storage iso tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --iso [ID-OR-URI]                
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage iso tag /tag/:tagid

```
Usage: h1-cli storage iso tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --iso [ID-OR-URI]                
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage iso event

```
Usage: h1-cli storage iso event [options] [command]

Manage events of the iso

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### storage iso event spec

```
Usage: h1-cli storage iso event spec [options]

Options:
  -h, --help  display help for command
```

#### storage iso event /event

```
Usage: h1-cli storage iso event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --iso [ID-OR-URI]                
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## storage snapshot

```
Usage: h1-cli storage snapshot [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  service           Manage services of the snapshot
  tag               Manage tags of the snapshot
  event             Manage events of the snapshot
  help [command]    display help for command
```

### storage snapshot spec

```
Usage: h1-cli storage snapshot spec [options]

Options:
  -h, --help  display help for command
```

### storage snapshot create

```
Usage: h1-cli storage snapshot create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --vault [VAULT]                    Provide URI of storage/vault. Require permissions storage/vault.snapshot/create
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### storage snapshot list

```
Usage: h1-cli storage snapshot list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --vault [VALUE]                  
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage snapshot get

```
Usage: h1-cli storage snapshot get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --snapshot [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage snapshot update

```
Usage: h1-cli storage snapshot update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --snapshot [ID-OR-URI]           
  --name [NAME]                    Require permissions storage/snapshot.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage snapshot delete

```
Usage: h1-cli storage snapshot delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --snapshot [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage snapshot service

```
Usage: h1-cli storage snapshot service [options] [command]

Manage services of the snapshot

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### storage snapshot service spec

```
Usage: h1-cli storage snapshot service spec [options]

Options:
  -h, --help  display help for command
```

#### storage snapshot service /service

```
Usage: h1-cli storage snapshot service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --snapshot [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage snapshot service /service/:serviceid

```
Usage: h1-cli storage snapshot service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --snapshot [ID-OR-URI]           
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage snapshot tag

```
Usage: h1-cli storage snapshot tag [options] [command]

Manage tags of the snapshot

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### storage snapshot tag spec

```
Usage: h1-cli storage snapshot tag spec [options]

Options:
  -h, --help  display help for command
```

#### storage snapshot tag /tag

```
Usage: h1-cli storage snapshot tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --snapshot [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage snapshot tag /tag

```
Usage: h1-cli storage snapshot tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --snapshot [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage snapshot tag /tag

```
Usage: h1-cli storage snapshot tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --snapshot [ID-OR-URI]           
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage snapshot tag /tag/:tagid

```
Usage: h1-cli storage snapshot tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --snapshot [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage snapshot tag /tag/:tagid

```
Usage: h1-cli storage snapshot tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --snapshot [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage snapshot event

```
Usage: h1-cli storage snapshot event [options] [command]

Manage events of the snapshot

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### storage snapshot event spec

```
Usage: h1-cli storage snapshot event spec [options]

Options:
  -h, --help  display help for command
```

#### storage snapshot event /event

```
Usage: h1-cli storage snapshot event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --snapshot [ID-OR-URI]           
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## storage vault

```
Usage: h1-cli storage vault [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  credential        Manage credentials of the vault
  service           Manage services of the vault
  tag               Manage tags of the vault
  event             Manage events of the vault
  help [command]    display help for command
```

### storage vault spec

```
Usage: h1-cli storage vault spec [options]

Options:
  -h, --help  display help for command
```

### storage vault create

```
Usage: h1-cli storage vault create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --size [SIZE]                      
  --snapshot [SNAPSHOT]              Provide URI of storage/snapshot. Require permissions storage/vault.snapshot/use
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### storage vault list

```
Usage: h1-cli storage vault list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage vault get

```
Usage: h1-cli storage vault get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage vault update

```
Usage: h1-cli storage vault update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --name [NAME]                    Require permissions storage/vault.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage vault delete

```
Usage: h1-cli storage vault delete [options]

Options:
  --project [ID-OR-URI]                      
  --location [ID-OR-URI]                     
  --vault [ID-OR-URI]                        
  --removeAllSnapshots [REMOVEALLSNAPSHOTS]  
  --output [OUTPUT]                          Specify output format of command
  --query [QUERY]                             JMESPath query string
  --passport-file [PASSPORT-FILE]            Passport file
  --no-wait                                  In case of queued event do not wait for completion
  -h, --help                                 display help for command
```

### storage vault credential

```
Usage: h1-cli storage vault credential [options] [command]

Manage credentials of the vault

Options:
  -h, --help             display help for command

Commands:
  spec
  /credential [options]
  /credential [options]
  help [command]         display help for command
```

#### storage vault credential spec

```
Usage: h1-cli storage vault credential spec [options]

Options:
  -h, --help  display help for command
```

#### storage vault credential /credential

```
Usage: h1-cli storage vault credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage vault credential /credential

```
Usage: h1-cli storage vault credential /credential [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --name [NAME]                    
  --type [TYPE]                    
  --value [VALUE]                  
  --token [TOKEN]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage vault service

```
Usage: h1-cli storage vault service [options] [command]

Manage services of the vault

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### storage vault service spec

```
Usage: h1-cli storage vault service spec [options]

Options:
  -h, --help  display help for command
```

#### storage vault service /service

```
Usage: h1-cli storage vault service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage vault service /service/:serviceid

```
Usage: h1-cli storage vault service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage vault tag

```
Usage: h1-cli storage vault tag [options] [command]

Manage tags of the vault

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### storage vault tag spec

```
Usage: h1-cli storage vault tag spec [options]

Options:
  -h, --help  display help for command
```

#### storage vault tag /tag

```
Usage: h1-cli storage vault tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage vault tag /tag

```
Usage: h1-cli storage vault tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage vault tag /tag

```
Usage: h1-cli storage vault tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage vault tag /tag/:tagid

```
Usage: h1-cli storage vault tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### storage vault tag /tag/:tagid

```
Usage: h1-cli storage vault tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### storage vault event

```
Usage: h1-cli storage vault event [options] [command]

Manage events of the vault

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### storage vault event spec

```
Usage: h1-cli storage vault event spec [options]

Options:
  -h, --help  display help for command
```

#### storage vault event /event

```
Usage: h1-cli storage vault event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vault [ID-OR-URI]              
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

# networking

```
Usage: h1-cli networking [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  firewall
  ip
  netadp
  netgw
  network
  help [command]  display help for command
```

## networking spec

```
Usage: h1-cli networking spec [options]

Options:
  -h, --help  display help for command
```

## networking firewall

```
Usage: h1-cli networking firewall [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  ingress           Manage ingresses of the firewall
  egress            Manage egresses of the firewall
  service           Manage services of the firewall
  tag               Manage tags of the firewall
  event             Manage events of the firewall
  help [command]    display help for command
```

### networking firewall spec

```
Usage: h1-cli networking firewall spec [options]

Options:
  -h, --help  display help for command
```

### networking firewall create

```
Usage: h1-cli networking firewall create [options]

Options:
  --project [ID-OR-URI]                                                                                        
  --location [ID-OR-URI]                                                                                       
  --x-idempotency-key [VALUE]                                                                                  
  --name [NAME]                                                                                                
  --service [SERVICE]                                                                                          Provide URI of billing/service
  --ingress [NAME=NAME,ACTION=ACTION,PRIORITY=PRIORITY,FILTER=FILTER,EXTERNAL=EXTERNAL,INTERNAL=INTERNAL ...]  
  --egress [NAME=NAME,ACTION=ACTION,PRIORITY=PRIORITY,FILTER=FILTER,EXTERNAL=EXTERNAL,INTERNAL=INTERNAL ...]   
  --tag [VALUE=VALUE,NAME=NAME ...]                                                                            
  --output [OUTPUT]                                                                                            Specify output format of command
  --query [QUERY]                                                                                               JMESPath query string
  --passport-file [PASSPORT-FILE]                                                                              Passport file
  --no-wait                                                                                                    In case of queued event do not wait for completion
  -h, --help                                                                                                   display help for command
```

### networking firewall list

```
Usage: h1-cli networking firewall list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking firewall get

```
Usage: h1-cli networking firewall get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking firewall update

```
Usage: h1-cli networking firewall update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --name [NAME]                    Require permissions networking/firewall.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking firewall delete

```
Usage: h1-cli networking firewall delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking firewall ingress

```
Usage: h1-cli networking firewall ingress [options] [command]

Manage ingresses of the firewall

Options:
  -h, --help          display help for command

Commands:
  spec
  /ingress [options]
  /ingress [options]
  /ingress [options]
  help [command]      display help for command
```

#### networking firewall ingress spec

```
Usage: h1-cli networking firewall ingress spec [options]

Options:
  -h, --help  display help for command
```

#### networking firewall ingress /ingress

```
Usage: h1-cli networking firewall ingress /ingress [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking firewall ingress /ingress

```
Usage: h1-cli networking firewall ingress /ingress [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking firewall ingress /ingress

```
Usage: h1-cli networking firewall ingress /ingress [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --name [NAME]                    
  --action [ACTION]                
  --priority [PRIORITY]            
  --filter [FILTER ...]            
  --external [EXTERNAL ...]        
  --internal [INTERNAL ...]        
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking firewall egress

```
Usage: h1-cli networking firewall egress [options] [command]

Manage egresses of the firewall

Options:
  -h, --help         display help for command

Commands:
  spec
  /egress [options]
  /egress [options]
  /egress [options]
  help [command]     display help for command
```

#### networking firewall egress spec

```
Usage: h1-cli networking firewall egress spec [options]

Options:
  -h, --help  display help for command
```

#### networking firewall egress /egress

```
Usage: h1-cli networking firewall egress /egress [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking firewall egress /egress

```
Usage: h1-cli networking firewall egress /egress [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking firewall egress /egress

```
Usage: h1-cli networking firewall egress /egress [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --name [NAME]                    
  --action [ACTION]                
  --priority [PRIORITY]            
  --filter [FILTER ...]            
  --external [EXTERNAL ...]        
  --internal [INTERNAL ...]        
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking firewall service

```
Usage: h1-cli networking firewall service [options] [command]

Manage services of the firewall

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### networking firewall service spec

```
Usage: h1-cli networking firewall service spec [options]

Options:
  -h, --help  display help for command
```

#### networking firewall service /service

```
Usage: h1-cli networking firewall service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking firewall service /service/:serviceid

```
Usage: h1-cli networking firewall service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking firewall tag

```
Usage: h1-cli networking firewall tag [options] [command]

Manage tags of the firewall

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### networking firewall tag spec

```
Usage: h1-cli networking firewall tag spec [options]

Options:
  -h, --help  display help for command
```

#### networking firewall tag /tag

```
Usage: h1-cli networking firewall tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking firewall tag /tag

```
Usage: h1-cli networking firewall tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking firewall tag /tag

```
Usage: h1-cli networking firewall tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking firewall tag /tag/:tagid

```
Usage: h1-cli networking firewall tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking firewall tag /tag/:tagid

```
Usage: h1-cli networking firewall tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking firewall event

```
Usage: h1-cli networking firewall event [options] [command]

Manage events of the firewall

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### networking firewall event spec

```
Usage: h1-cli networking firewall event spec [options]

Options:
  -h, --help  display help for command
```

#### networking firewall event /event

```
Usage: h1-cli networking firewall event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --firewall [ID-OR-URI]           
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## networking ip

```
Usage: h1-cli networking ip [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  service           Manage services of the ip
  tag               Manage tags of the ip
  event             Manage events of the ip
  help [command]    display help for command
```

### networking ip spec

```
Usage: h1-cli networking ip spec [options]

Options:
  -h, --help  display help for command
```

### networking ip create

```
Usage: h1-cli networking ip create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --network [NETWORK]                Provide URI of networking/network. Require permissions networking/network/use
  --ptrRecord [PTRRECORD]            
  --address [ADDRESS]                
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### networking ip list

```
Usage: h1-cli networking ip list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [VALUE]                
  --type [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking ip get

```
Usage: h1-cli networking ip get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --ip [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking ip update

```
Usage: h1-cli networking ip update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --ip [ID-OR-URI]                 
  --ptrRecord [PTRRECORD]          Require permissions networking/ip.ptrRecord/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking ip delete

```
Usage: h1-cli networking ip delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --ip [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking ip service

```
Usage: h1-cli networking ip service [options] [command]

Manage services of the ip

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### networking ip service spec

```
Usage: h1-cli networking ip service spec [options]

Options:
  -h, --help  display help for command
```

#### networking ip service /service

```
Usage: h1-cli networking ip service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --ip [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking ip service /service/:serviceid

```
Usage: h1-cli networking ip service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --ip [ID-OR-URI]                 
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking ip tag

```
Usage: h1-cli networking ip tag [options] [command]

Manage tags of the ip

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### networking ip tag spec

```
Usage: h1-cli networking ip tag spec [options]

Options:
  -h, --help  display help for command
```

#### networking ip tag /tag

```
Usage: h1-cli networking ip tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --ip [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking ip tag /tag

```
Usage: h1-cli networking ip tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --ip [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking ip tag /tag

```
Usage: h1-cli networking ip tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --ip [ID-OR-URI]                 
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking ip tag /tag/:tagid

```
Usage: h1-cli networking ip tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --ip [ID-OR-URI]                 
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking ip tag /tag/:tagid

```
Usage: h1-cli networking ip tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --ip [ID-OR-URI]                 
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking ip event

```
Usage: h1-cli networking ip event [options] [command]

Manage events of the ip

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### networking ip event spec

```
Usage: h1-cli networking ip event spec [options]

Options:
  -h, --help  display help for command
```

#### networking ip event /event

```
Usage: h1-cli networking ip event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --ip [ID-OR-URI]                 
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## networking netadp

```
Usage: h1-cli networking netadp [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  list [options]
  get [options]
  update [options]
  service           Manage services of the netadp
  tag               Manage tags of the netadp
  event             Manage events of the netadp
  help [command]    display help for command
```

### networking netadp spec

```
Usage: h1-cli networking netadp spec [options]

Options:
  -h, --help  display help for command
```

### networking netadp list

```
Usage: h1-cli networking netadp list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --assigned.resource [VALUE]      
  --assigned.id [VALUE]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking netadp get

```
Usage: h1-cli networking netadp get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netadp [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking netadp update

```
Usage: h1-cli networking netadp update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netadp [ID-OR-URI]             
  --firewall [FIREWALL]            Provide URI of networking/firewall. Require permissions networking/firewall/use, networking/netadp.firewall/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking netadp service

```
Usage: h1-cli networking netadp service [options] [command]

Manage services of the netadp

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### networking netadp service spec

```
Usage: h1-cli networking netadp service spec [options]

Options:
  -h, --help  display help for command
```

#### networking netadp service /service

```
Usage: h1-cli networking netadp service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netadp [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking netadp service /service/:serviceid

```
Usage: h1-cli networking netadp service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netadp [ID-OR-URI]             
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking netadp tag

```
Usage: h1-cli networking netadp tag [options] [command]

Manage tags of the netadp

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### networking netadp tag spec

```
Usage: h1-cli networking netadp tag spec [options]

Options:
  -h, --help  display help for command
```

#### networking netadp tag /tag

```
Usage: h1-cli networking netadp tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netadp [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking netadp tag /tag

```
Usage: h1-cli networking netadp tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netadp [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking netadp tag /tag

```
Usage: h1-cli networking netadp tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netadp [ID-OR-URI]             
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking netadp tag /tag/:tagid

```
Usage: h1-cli networking netadp tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netadp [ID-OR-URI]             
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking netadp tag /tag/:tagid

```
Usage: h1-cli networking netadp tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netadp [ID-OR-URI]             
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking netadp event

```
Usage: h1-cli networking netadp event [options] [command]

Manage events of the netadp

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### networking netadp event spec

```
Usage: h1-cli networking netadp event spec [options]

Options:
  -h, --help  display help for command
```

#### networking netadp event /event

```
Usage: h1-cli networking netadp event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netadp [ID-OR-URI]             
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## networking netgw

```
Usage: h1-cli networking netgw [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  service           Manage services of the netgw
  tag               Manage tags of the netgw
  event             Manage events of the netgw
  help [command]    display help for command
```

### networking netgw spec

```
Usage: h1-cli networking netgw spec [options]

Options:
  -h, --help  display help for command
```

### networking netgw create

```
Usage: h1-cli networking netgw create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --public [PUBLIC]                  
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### networking netgw list

```
Usage: h1-cli networking netgw list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking netgw get

```
Usage: h1-cli networking netgw get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netgw [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking netgw update

```
Usage: h1-cli networking netgw update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netgw [ID-OR-URI]              
  --name [NAME]                    Require permissions networking/netgw.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking netgw delete

```
Usage: h1-cli networking netgw delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netgw [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking netgw service

```
Usage: h1-cli networking netgw service [options] [command]

Manage services of the netgw

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### networking netgw service spec

```
Usage: h1-cli networking netgw service spec [options]

Options:
  -h, --help  display help for command
```

#### networking netgw service /service

```
Usage: h1-cli networking netgw service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netgw [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking netgw service /service/:serviceid

```
Usage: h1-cli networking netgw service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netgw [ID-OR-URI]              
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking netgw tag

```
Usage: h1-cli networking netgw tag [options] [command]

Manage tags of the netgw

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### networking netgw tag spec

```
Usage: h1-cli networking netgw tag spec [options]

Options:
  -h, --help  display help for command
```

#### networking netgw tag /tag

```
Usage: h1-cli networking netgw tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netgw [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking netgw tag /tag

```
Usage: h1-cli networking netgw tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netgw [ID-OR-URI]              
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking netgw tag /tag

```
Usage: h1-cli networking netgw tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netgw [ID-OR-URI]              
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking netgw tag /tag/:tagid

```
Usage: h1-cli networking netgw tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netgw [ID-OR-URI]              
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking netgw tag /tag/:tagid

```
Usage: h1-cli networking netgw tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netgw [ID-OR-URI]              
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking netgw event

```
Usage: h1-cli networking netgw event [options] [command]

Manage events of the netgw

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### networking netgw event spec

```
Usage: h1-cli networking netgw event spec [options]

Options:
  -h, --help  display help for command
```

#### networking netgw event /event

```
Usage: h1-cli networking netgw event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --netgw [ID-OR-URI]              
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## networking network

```
Usage: h1-cli networking network [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  ip                Manage ips of the network
  service           Manage services of the network
  tag               Manage tags of the network
  event             Manage events of the network
  help [command]    display help for command
```

### networking network spec

```
Usage: h1-cli networking network spec [options]

Options:
  -h, --help  display help for command
```

### networking network create

```
Usage: h1-cli networking network create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --address [ADDRESS]                
  --gateway [GATEWAY]                
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### networking network list

```
Usage: h1-cli networking network list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking network get

```
Usage: h1-cli networking network get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking network update

```
Usage: h1-cli networking network update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --name [NAME]                    Require permissions networking/network.name/update
  --gateway [GATEWAY]              Require permissions networking/network.gateway/update
  --firewall [FIREWALL]            Provide URI of networking/firewall. Require permissions networking/firewall/use, networking/network.firewall/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking network delete

```
Usage: h1-cli networking network delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking network ip

```
Usage: h1-cli networking network ip [options] [command]

Manage ips of the network

Options:
  -h, --help           display help for command

Commands:
  spec
  /ip [options]
  /ip [options]
  /ip/:ipid [options]
  /ip/:ipid [options]
  help [command]       display help for command
```

#### networking network ip spec

```
Usage: h1-cli networking network ip spec [options]

Options:
  -h, --help  display help for command
```

#### networking network ip /ip

```
Usage: h1-cli networking network ip /ip [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking network ip /ip

```
Usage: h1-cli networking network ip /ip [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --network [ID-OR-URI]              
  --address [ADDRESS]                
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

#### networking network ip /ip/:ipid

```
Usage: h1-cli networking network ip /ip/:ipid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --ip [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking network ip /ip/:ipid

```
Usage: h1-cli networking network ip /ip/:ipid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --ip [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking network service

```
Usage: h1-cli networking network service [options] [command]

Manage services of the network

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### networking network service spec

```
Usage: h1-cli networking network service spec [options]

Options:
  -h, --help  display help for command
```

#### networking network service /service

```
Usage: h1-cli networking network service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking network service /service/:serviceid

```
Usage: h1-cli networking network service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking network tag

```
Usage: h1-cli networking network tag [options] [command]

Manage tags of the network

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### networking network tag spec

```
Usage: h1-cli networking network tag spec [options]

Options:
  -h, --help  display help for command
```

#### networking network tag /tag

```
Usage: h1-cli networking network tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking network tag /tag

```
Usage: h1-cli networking network tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking network tag /tag

```
Usage: h1-cli networking network tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking network tag /tag/:tagid

```
Usage: h1-cli networking network tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### networking network tag /tag/:tagid

```
Usage: h1-cli networking network tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### networking network event

```
Usage: h1-cli networking network event [options] [command]

Manage events of the network

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### networking network event spec

```
Usage: h1-cli networking network event spec [options]

Options:
  -h, --help  display help for command
```

#### networking network event /event

```
Usage: h1-cli networking network event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --network [ID-OR-URI]            
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

# compute

```
Usage: h1-cli compute [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  replica
  vm
  help [command]  display help for command
```

## compute spec

```
Usage: h1-cli compute spec [options]

Options:
  -h, --help  display help for command
```

## compute replica

```
Usage: h1-cli compute replica [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  delete [options]
  service           Manage services of the replica
  tag               Manage tags of the replica
  event             Manage events of the replica
  help [command]    display help for command
```

### compute replica spec

```
Usage: h1-cli compute replica spec [options]

Options:
  -h, --help  display help for command
```

### compute replica create

```
Usage: h1-cli compute replica create [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --x-idempotency-key [VALUE]      
  --hostname [HOSTNAME]            
  --secret [SECRET]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute replica list

```
Usage: h1-cli compute replica list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute replica get

```
Usage: h1-cli compute replica get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --replica [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute replica delete

```
Usage: h1-cli compute replica delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --replica [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute replica service

```
Usage: h1-cli compute replica service [options] [command]

Manage services of the replica

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### compute replica service spec

```
Usage: h1-cli compute replica service spec [options]

Options:
  -h, --help  display help for command
```

#### compute replica service /service

```
Usage: h1-cli compute replica service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --replica [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute replica service /service/:serviceid

```
Usage: h1-cli compute replica service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --replica [ID-OR-URI]            
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute replica tag

```
Usage: h1-cli compute replica tag [options] [command]

Manage tags of the replica

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### compute replica tag spec

```
Usage: h1-cli compute replica tag spec [options]

Options:
  -h, --help  display help for command
```

#### compute replica tag /tag

```
Usage: h1-cli compute replica tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --replica [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute replica tag /tag

```
Usage: h1-cli compute replica tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --replica [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute replica tag /tag

```
Usage: h1-cli compute replica tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --replica [ID-OR-URI]            
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute replica tag /tag/:tagid

```
Usage: h1-cli compute replica tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --replica [ID-OR-URI]            
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute replica tag /tag/:tagid

```
Usage: h1-cli compute replica tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --replica [ID-OR-URI]            
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute replica event

```
Usage: h1-cli compute replica event [options] [command]

Manage events of the replica

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### compute replica event spec

```
Usage: h1-cli compute replica event spec [options]

Options:
  -h, --help  display help for command
```

#### compute replica event /event

```
Usage: h1-cli compute replica event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --replica [ID-OR-URI]            
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## compute vm

```
Usage: h1-cli compute vm [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  hdd               Manage hdds of the vm
  netadp            Manage netadps of the vm
  service           Manage services of the vm
  tag               Manage tags of the vm
  event             Manage events of the vm
  help [command]    display help for command
```

### compute vm spec

```
Usage: h1-cli compute vm spec [options]

Options:
  -h, --help  display help for command
```

### compute vm create

```
Usage: h1-cli compute vm create [options]

Options:
  --project [ID-OR-URI]                                                   
  --location [ID-OR-URI]                                                  
  --x-idempotency-key [VALUE]                                             
  --name [NAME]                                                           
  --service [SERVICE]                                                     Provide URI of billing/service
  --image [IMAGE]                                                         Provide URI of storage/image. Require permissions storage/image/use
  --iso [ISO]                                                             Provide URI of storage/iso. Require permissions storage/iso/use
  --username [USERNAME]                                                   
  --password [PASSWORD]                                                   
  --sshKeys [SSHKEYS ...]                                                 
  --userMetadata [USERMETADATA]                                           
  --disk [ID=ID,SIZE=SIZE,SERVICE=SERVICE,NAME=NAME,CLOUD=CLOUD ...]      
  --netadp [SERVICE=SERVICE,NETWORK=NETWORK,IP=IP,FIREWALL=FIREWALL ...]  
  --boot [BOOT]                                                           
  --cloud [CLOUD]                                                         
  --tag [VALUE=VALUE,NAME=NAME ...]                                       
  --output [OUTPUT]                                                       Specify output format of command
  --query [QUERY]                                                          JMESPath query string
  --passport-file [PASSPORT-FILE]                                         Passport file
  --no-wait                                                               In case of queued event do not wait for completion
  -h, --help                                                              display help for command
```

### compute vm list

```
Usage: h1-cli compute vm list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute vm get

```
Usage: h1-cli compute vm get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute vm update

```
Usage: h1-cli compute vm update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --userMetadata [USERMETADATA]    Require permissions compute/vm.userMetadata/update
  --name [NAME]                    Require permissions compute/vm.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute vm delete

```
Usage: h1-cli compute vm delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --removeDisks [REMOVEDISKS ...]  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute vm hdd

```
Usage: h1-cli compute vm hdd [options] [command]

Manage hdds of the vm

Options:
  -h, --help      display help for command

Commands:
  spec
  /hdd [options]
  /hdd [options]
  help [command]  display help for command
```

#### compute vm hdd spec

```
Usage: h1-cli compute vm hdd spec [options]

Options:
  -h, --help  display help for command
```

#### compute vm hdd /hdd

```
Usage: h1-cli compute vm hdd /hdd [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute vm hdd /hdd

```
Usage: h1-cli compute vm hdd /hdd [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --vm [ID-OR-URI]                   
  --disk [DISK]                      Provide URI of storage/disk. Require permissions storage/disk/use
  --controllerType [CONTROLLERTYPE]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### compute vm netadp

```
Usage: h1-cli compute vm netadp [options] [command]

Manage netadps of the vm

Options:
  -h, --help                   display help for command

Commands:
  spec
  /netadp [options]
  /netadp [options]
  /netadp/:netadpid [options]
  help [command]               display help for command
```

#### compute vm netadp spec

```
Usage: h1-cli compute vm netadp spec [options]

Options:
  -h, --help  display help for command
```

#### compute vm netadp /netadp

```
Usage: h1-cli compute vm netadp /netadp [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute vm netadp /netadp

```
Usage: h1-cli compute vm netadp /netadp [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --vm [ID-OR-URI]                   
  --service [SERVICE]                Provide URI of billing/service
  --network [NETWORK]                Provide URI of networking/network. Require permissions networking/network/use
  --ip [IP]                          Provide URI of networking/ip. Require permissions networking/ip/use
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --firewall [FIREWALL]              Provide URI of networking/firewall. Require permissions networking/firewall/use
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

#### compute vm netadp /netadp/:netadpid

```
Usage: h1-cli compute vm netadp /netadp/:netadpid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --netadp [ID-OR-URI]             
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute vm service

```
Usage: h1-cli compute vm service [options] [command]

Manage services of the vm

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### compute vm service spec

```
Usage: h1-cli compute vm service spec [options]

Options:
  -h, --help  display help for command
```

#### compute vm service /service

```
Usage: h1-cli compute vm service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute vm service /service/:serviceid

```
Usage: h1-cli compute vm service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute vm tag

```
Usage: h1-cli compute vm tag [options] [command]

Manage tags of the vm

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### compute vm tag spec

```
Usage: h1-cli compute vm tag spec [options]

Options:
  -h, --help  display help for command
```

#### compute vm tag /tag

```
Usage: h1-cli compute vm tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute vm tag /tag

```
Usage: h1-cli compute vm tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute vm tag /tag

```
Usage: h1-cli compute vm tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute vm tag /tag/:tagid

```
Usage: h1-cli compute vm tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### compute vm tag /tag/:tagid

```
Usage: h1-cli compute vm tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### compute vm event

```
Usage: h1-cli compute vm event [options] [command]

Manage events of the vm

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### compute vm event spec

```
Usage: h1-cli compute vm event spec [options]

Options:
  -h, --help  display help for command
```

#### compute vm event /event

```
Usage: h1-cli compute vm event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --vm [ID-OR-URI]                 
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

# billing

```
Usage: h1-cli billing [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  reservation
  service
  help [command]  display help for command
```

## billing spec

```
Usage: h1-cli billing spec [options]

Options:
  -h, --help  display help for command
```

## billing reservation

```
Usage: h1-cli billing reservation [options] [command]

Options:
  -h, --help        display help for command

Commands:
  spec
  create [options]
  list [options]
  get [options]
  update [options]
  delete [options]
  service           Manage services of the reservation
  tag               Manage tags of the reservation
  event             Manage events of the reservation
  help [command]    display help for command
```

### billing reservation spec

```
Usage: h1-cli billing reservation spec [options]

Options:
  -h, --help  display help for command
```

### billing reservation create

```
Usage: h1-cli billing reservation create [options]

Options:
  --project [ID-OR-URI]              
  --location [ID-OR-URI]             
  --x-idempotency-key [VALUE]        
  --name [NAME]                      
  --service [SERVICE]                Provide URI of billing/service
  --tag [VALUE=VALUE,NAME=NAME ...]  
  --output [OUTPUT]                  Specify output format of command
  --query [QUERY]                     JMESPath query string
  --passport-file [PASSPORT-FILE]    Passport file
  --no-wait                          In case of queued event do not wait for completion
  -h, --help                         display help for command
```

### billing reservation list

```
Usage: h1-cli billing reservation list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --name [VALUE]                   
  --tag [VALUE]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### billing reservation get

```
Usage: h1-cli billing reservation get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --reservation [ID-OR-URI]        
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### billing reservation update

```
Usage: h1-cli billing reservation update [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --reservation [ID-OR-URI]        
  --name [NAME]                    Require permissions billing/reservation.name/update
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### billing reservation delete

```
Usage: h1-cli billing reservation delete [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --reservation [ID-OR-URI]        
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### billing reservation service

```
Usage: h1-cli billing reservation service [options] [command]

Manage services of the reservation

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### billing reservation service spec

```
Usage: h1-cli billing reservation service spec [options]

Options:
  -h, --help  display help for command
```

#### billing reservation service /service

```
Usage: h1-cli billing reservation service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --reservation [ID-OR-URI]        
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### billing reservation service /service/:serviceid

```
Usage: h1-cli billing reservation service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --reservation [ID-OR-URI]        
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### billing reservation tag

```
Usage: h1-cli billing reservation tag [options] [command]

Manage tags of the reservation

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### billing reservation tag spec

```
Usage: h1-cli billing reservation tag spec [options]

Options:
  -h, --help  display help for command
```

#### billing reservation tag /tag

```
Usage: h1-cli billing reservation tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --reservation [ID-OR-URI]        
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### billing reservation tag /tag

```
Usage: h1-cli billing reservation tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --reservation [ID-OR-URI]        
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### billing reservation tag /tag

```
Usage: h1-cli billing reservation tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --reservation [ID-OR-URI]        
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### billing reservation tag /tag/:tagid

```
Usage: h1-cli billing reservation tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --reservation [ID-OR-URI]        
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### billing reservation tag /tag/:tagid

```
Usage: h1-cli billing reservation tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --reservation [ID-OR-URI]        
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### billing reservation event

```
Usage: h1-cli billing reservation event [options] [command]

Manage events of the reservation

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### billing reservation event spec

```
Usage: h1-cli billing reservation event spec [options]

Options:
  -h, --help  display help for command
```

#### billing reservation event /event

```
Usage: h1-cli billing reservation event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --reservation [ID-OR-URI]        
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

## billing service

```
Usage: h1-cli billing service [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  list [options]
  get [options]
  help [command]  display help for command
```

### billing service spec

```
Usage: h1-cli billing service spec [options]

Options:
  -h, --help  display help for command
```

### billing service list

```
Usage: h1-cli billing service list [options]

Options:
  --project [ID-OR-URI]            
  --kind [VALUE]                   
  --name [VALUE]                   
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### billing service get

```
Usage: h1-cli billing service get [options]

Options:
  --project [ID-OR-URI]            
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

# vmhost

```
Usage: h1-cli vmhost [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  instance
  help [command]  display help for command
```

## vmhost spec

```
Usage: h1-cli vmhost spec [options]

Options:
  -h, --help  display help for command
```

## vmhost instance

```
Usage: h1-cli vmhost instance [options] [command]

Options:
  -h, --help      display help for command

Commands:
  spec
  list [options]
  get [options]
  service         Manage services of the instance
  tag             Manage tags of the instance
  event           Manage events of the instance
  help [command]  display help for command
```

### vmhost instance spec

```
Usage: h1-cli vmhost instance spec [options]

Options:
  -h, --help  display help for command
```

### vmhost instance list

```
Usage: h1-cli vmhost instance list [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --enabledServices [VALUE]        
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### vmhost instance get

```
Usage: h1-cli vmhost instance get [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### vmhost instance service

```
Usage: h1-cli vmhost instance service [options] [command]

Manage services of the instance

Options:
  -h, --help                     display help for command

Commands:
  spec
  /service [options]
  /service/:serviceid [options]
  help [command]                 display help for command
```

#### vmhost instance service spec

```
Usage: h1-cli vmhost instance service spec [options]

Options:
  -h, --help  display help for command
```

#### vmhost instance service /service

```
Usage: h1-cli vmhost instance service /service [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### vmhost instance service /service/:serviceid

```
Usage: h1-cli vmhost instance service /service/:serviceid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --service [ID-OR-URI]            
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### vmhost instance tag

```
Usage: h1-cli vmhost instance tag [options] [command]

Manage tags of the instance

Options:
  -h, --help             display help for command

Commands:
  spec
  /tag [options]
  /tag [options]
  /tag [options]
  /tag/:tagid [options]
  /tag/:tagid [options]
  help [command]         display help for command
```

#### vmhost instance tag spec

```
Usage: h1-cli vmhost instance tag spec [options]

Options:
  -h, --help  display help for command
```

#### vmhost instance tag /tag

```
Usage: h1-cli vmhost instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### vmhost instance tag /tag

```
Usage: h1-cli vmhost instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### vmhost instance tag /tag

```
Usage: h1-cli vmhost instance tag /tag [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --id [ID]                        
  --value [VALUE]                  
  --name [NAME]                    
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### vmhost instance tag /tag/:tagid

```
Usage: h1-cli vmhost instance tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

#### vmhost instance tag /tag/:tagid

```
Usage: h1-cli vmhost instance tag /tag/:tagid [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --tag [ID-OR-URI]                
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

### vmhost instance event

```
Usage: h1-cli vmhost instance event [options] [command]

Manage events of the instance

Options:
  -h, --help        display help for command

Commands:
  spec
  /event [options]
  help [command]    display help for command
```

#### vmhost instance event spec

```
Usage: h1-cli vmhost instance event spec [options]

Options:
  -h, --help  display help for command
```

#### vmhost instance event /event

```
Usage: h1-cli vmhost instance event /event [options]

Options:
  --project [ID-OR-URI]            
  --location [ID-OR-URI]           
  --instance [ID-OR-URI]           
  --$limit [VALUE]                 
  --$skip [VALUE]                  
  --output [OUTPUT]                Specify output format of command
  --query [QUERY]                   JMESPath query string
  --passport-file [PASSPORT-FILE]  Passport file
  --no-wait                        In case of queued event do not wait for completion
  -h, --help                       display help for command
```

