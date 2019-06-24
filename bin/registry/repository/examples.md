# Add tagged repository for registry

```bash
docker login 5d1090990136a7f0da513654.registry.pl-waw-1.hyperone.cloud -u login --password password 

docker pull ubuntu:latest

docker tag ubuntu:latest 5d1090990136a7f0da513654.registry.pl-waw-1.hyperone.cloud/ubuntu:latest

docker push 5d1090990136a7f0da513654.registry.pl-waw-1.hyperone.cloud/ubuntu:latest
```