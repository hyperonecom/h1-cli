# Create 10 GB SSD disk

```bash
{{command_name}} --name db-disk --type ssd --size 10
```

# Create disk from .vhdx file

```bash
{{command_name}} --name new-disk --size 1 --type ssd --source-file ./my-disk.vhdx
```

# Clone disk

```bash
{{command_name}} --name new-disk --source-disk existing-disk
```
