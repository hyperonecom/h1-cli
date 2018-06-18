# Create a firewall

```bash
h1 firewall create --name secure-zone-fw
```

# List firewall ingress rules

```bash
h1 firewall ingress list --firewall secure-zone-fw
```

# List firewall egress rules

```bash
h1 firewall egress list --firewall secure-zone-fw
```

TODO: Default policy of firewall

# Add firewall to allow any incoming HTTP traffic to 10.177.2.2

```bash
h1 firewall ingress add --firewall secure-zone-fw --action allow \
    --priority 300 \
    --filter tcp:80 \ 
    --external 0.0.0.0/0 --internal 10.177.2.2 \
    --name 'Allow HTTP'
```