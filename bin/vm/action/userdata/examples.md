# Set userdata for virtual machine

```bash
$ echo "any-data" > data.txt
$ {{command_name}} --vm test-vm --userdata-file ./data.txt
```
 
 # Read userdata for virtual machine
 
```bash
{{scope}} vm show --vm test-vm --query '[].{data:userMetadata}' --output tsv | openssl base64 -d
```
