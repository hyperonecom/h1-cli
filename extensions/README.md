# Extensions management

## Flows

### create extension

- create new package
- create bundle from package and all dependencies (except h1-cli-framework & h1-cli-core)
- upload bundle as package to npm registry with our prefix (scope)

### listing available extension

- list npm modules with prefix on npm registry

### installation

- download pkg from npm (pick latest version if not provided) 
- extract package from npm to ~/.h1/extension/ (without npm)

### deinstallation

- remove directory from ~/.h1/extension/

### loading

- walk over  ~/.h1/extension/ and local cli node_modules (for embedded extensions, because dynamic extensions cannot be installed without extension for management of extensions)
- require & load available extension

## Characteristics

### Advantages

- no npm required on host
- extensions are loaded only when they are necessary (lazy loading), i.e. the extension for "storage" is loaded when operations around "storage" namespace are performed
- ability to update any extensions (even build-in) without updating the CLI engine
- ability to create a new npm repository and share for completely independent development of extensions

### Known limitations

- dynamic extensions are not supported in web-UI and must be installed during building
- dependence on the npm registry
- no locally compiled binary extensions