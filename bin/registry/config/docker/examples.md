## Register as a Docker credential helper

```bash
{{command_name}} --registry My-Registry --mode helper
```

Command adds the Docker ```credHelper``` entry to Docker's configuration file, or creates the file if it doesn't exist. If the Docker configuration already contains a ```credHelper``` or ```auths``` entry, it will be overwritten.

## Login in Docker using temporary token

```bash
{{command_name}} --registry My-Registry --mode token
```

Command adds the Docker ```auths``` entry to Docker's configuration file, or creates the file if it doesn't exist. If the Docker configuration already contains a ```credHelper``` or ```auths``` entry, it will be overwritten.

Note, ```docker``` need to be on system ```PATH``` to work correctly.
