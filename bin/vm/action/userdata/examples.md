# Set userdata for virtual machine

```bash
echo "any-data" > data.txt
 h1 vm userdata --vm test-vm --userdata-file 'data.txt'
```
 
 # Read userdata for virtual machine
 
```bash
$ h1 vm show --vm test-vm --query '[].{data:userMetadata}' --output tsv | openssl base64 -d
```