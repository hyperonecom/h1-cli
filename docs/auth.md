## h1 auth

```
h1 auth

Synopsis

  $ h1 auth <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  user     Authenticate as user of Platform   
  aws      Authenticate using AWS identity    
  azure    Authenticate using Azure identity  
  google   Authenticate using Google identity
```

### h1 auth user

```
h1 auth user

  Authenticate as user of Platform 

Synopsis

  $ h1 auth user <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --username string    
  --password string
```

### h1 auth aws

```
h1 auth aws

  Authenticate using AWS identity 

Synopsis

  $ h1 auth aws <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --access-key-id string       AWS Access Key Id                                         
  --secret-access-key string   AWS Secret Access Key (only used to generate a signature) 
  --session-token string       AWS Session Token                                         
  --discovery                  Use standard AWS mechanisms to find credential
```

### h1 auth azure

```
h1 auth azure

  Authenticate using Azure identity 

Synopsis

  $ h1 auth azure <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --token string   Azure Access token                               
  --discovery      Use standard Azure mechanisms to find credential
```

### h1 auth google

```
h1 auth google

  Authenticate using Google identity 

Synopsis

  $ h1 auth google <options> 

Global options

  --help                                      Show help message and exit.                                        
  --verbose                                   Make the operation more talkative.                                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command. Default value is yaml            
  --query string                              JMESPath query string                                              
  --passport-file path                        Passport file. Default value is ~/.h1/passport.json, if available. 
  --as uri                                    Act as another actor eg. service account                           
  --no-wait                                   In case of queued event do not wait for completion                 

Operation options

  --token string   Google Access token                               
  --discovery      Use standard Google mechanisms to find credential
```

