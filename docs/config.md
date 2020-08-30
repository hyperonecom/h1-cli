## h1 config

```
h1 config

Synopsis

  $ h1 config <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  settings    Manage settings of CLI   
  extension   Manage extensions of CLI
```

### h1 config settings

```
h1 config settings

Synopsis

  $ h1 config settings <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  get    Get setting value        
  dump   Dump all settings values 
  set    Set setting value
```

#### h1 config settings get

```
h1 config settings get

  Get setting value 

Synopsis

  $ h1 config settings get <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --key string
```

#### h1 config settings dump

```
h1 config settings dump

  Dump all settings values 

Synopsis

  $ h1 config settings dump <options> 

Global options

  --help    Show help message and exit. 

Operation options
```

#### h1 config settings set

```
h1 config settings set

  Set setting value 

Synopsis

  $ h1 config settings set <options> 

Global options

  --help    Show help message and exit. 

Operation options

  --key string      
  --value string
```

### h1 config extension

```
h1 config extension

Synopsis

  $ h1 config extension <group> <command> 

Options

  --help    Show help message and exit. 

Command List

  list        List available and installed extensions 
  install     Install (or update) extension           
  uninstall   Uninstall extension
```

#### h1 config extension list

```
h1 config extension list

  List available and installed extensions 

Synopsis

  $ h1 config extension list <options> 

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

#### h1 config extension install

```
h1 config extension install

  Install (or update) extension 

Synopsis

  $ h1 config extension install <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --extension string   Extension name to install    
  --version string     Extension version to install
```

#### h1 config extension uninstall

```
h1 config extension uninstall

  Uninstall extension 

Synopsis

  $ h1 config extension uninstall <options> 

Global options

  --help                                      Show help message and exit.                        
  --verbose                                   Make the operation more talkative.                 
  -o, --output tsv,list,json,js,id,uri,yaml   Specify output format of command                   
  --query string                              JMESPath query string                              
  --passport-file path                        Passport file. Defaults to ~/.h1/passport.json.    
  --as uri                                    Act as another actor eg. service account           
  --no-wait                                   In case of queued event do not wait for completion 

Operation options

  --extension string   Extension name to install
```

