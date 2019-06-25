# Add tagged repository for registry

```bash

docker login registry-id.registry.pl-waw-1.hyperone.cloud -u login --password password 

docker pull ubuntu:latest

docker tag ubuntu:latest registry-id.registry.pl-waw-1.hyperone.cloud/ubuntu:latest

docker push registry-id.registry.pl-waw-1.hyperone.cloud/ubuntu:latest
```

Note (1): To identify registry id use ```h1 registry list```.

Note (2): To login to registry using Docker use your Hyperone panel e-mail as login and password you provided creating registry as password.

