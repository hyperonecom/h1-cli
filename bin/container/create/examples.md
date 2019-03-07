# Create nginx container

```bash
{{command_name}} --name nginx --type container --image nginx --expose 80:80
```

# Create container from image stored in private docker registry

```bash
{{command_name}} --name nginx --type container --image registry.example.com/my-app --expose 80:80 --registry-dockercfg reach
```
