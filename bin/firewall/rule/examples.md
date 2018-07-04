# Create a firewall

```bash
{{scope}} firewall create --name secure-zone-fw
```

# List firewall ingress rules

```bash
{{scope}} firewall ingress list --firewall secure-zone-fw
```

# List firewall egress rules

```bash
{{scope}} firewall egress list --firewall secure-zone-fw
```

# Add firewall to allow any incoming HTTP traffic to 10.177.2.2

```bash
{{scope}} firewall ingress add --firewall secure-zone-fw --action allow \
    --priority 300 \
    --filter tcp:80 \ 
    --external 0.0.0.0/0 --internal 10.177.2.2 \
    --name 'Allow HTTP'
```

# Delete firewall rule

```bash
{{scope}} firewall egress delete --firewall secure-zone-fw --rule 5b3a0750db77e0540811669e
```

Note (1): To identify available rules use ```{{scope}} firewall egress list``` or ```{{scope}} firewall ingress list```.
Note (2): The following rules apply implicitly:

 - ingress has deny policy,
 - egress has allow policy, but the server can not receive a response to any packets that have not passed any egress rule.