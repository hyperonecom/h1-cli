# Add firewall to allow any incoming HTTP traffic to 10.177.2.2

```bash
h1 firewall ingress add --firewall secure-zone-fw --action allow \
    --priority 300 \
    --filter tcp:80 \
    --external 0.0.0.0/0 --internal 10.177.2.2 \
    --name 'Allow HTTP'
```