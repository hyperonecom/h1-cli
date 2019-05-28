# Available formats

* ```table``` - Simple results as tabular (default).
* ```list``` - Subsequent properties line by line.
* ```tsv``` - Mostly works like tabular format, but without the header row. Efficiently usable in ```awk``` and shell.
* ```json``` - Raw response of API
* ```yaml``` - Full response displayed as YAML
* ```id``` - Just resource ID line by line

## Examples

### View all disks in tsv format

```bash
{{scope}} disk list -o tsv
```

### View all networks in list format

```bash
{{scope}} network list -o list
```

### View all virtual machines in table format

```bash
{{scope}} vm list -o table
```
