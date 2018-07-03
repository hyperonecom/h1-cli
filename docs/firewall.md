# TOC

  * [h1 firewall list](#h1-firewall-list) - List firewall
  * [h1 firewall show](#h1-firewall-show) - Show firewall
  * [h1 firewall delete](#h1-firewall-delete) - Delete firewall
  * [h1 firewall history](#h1-firewall-history) - History of firewall
  * [h1 firewall create](#h1-firewall-create) - Create firewall
  * [h1 firewall attach](#h1-firewall-attach) - Attach firewall to a network
  * [h1 firewall detach](#h1-firewall-detach) - Detach firewall from network
  * [h1 firewall ingress](#h1-firewall-ingress) - Manage ingress rules of firewall
    * [h1 firewall ingress list](#h1-firewall-ingress-list) - List rule ingress of firewall
    * [h1 firewall ingress add](#h1-firewall-ingress-add) - Add rule ingress of firewall
    * [h1 firewall ingress delete](#h1-firewall-ingress-delete) - Add rule ingress of firewall
  * [h1 firewall egress](#h1-firewall-egress) - Manage egress rules of firewall
    * [h1 firewall egress list](#h1-firewall-egress-list) - List rule egress of firewall
    * [h1 firewall egress add](#h1-firewall-egress-add) - Add rule egress of firewall
    * [h1 firewall egress delete](#h1-firewall-egress-delete) - Add rule egress of firewall


# Specification

## h1 firewall

Manage your firewall

## h1 firewall list

List firewall

### Syntax

```h1 firewall list | ```

## h1 firewall show

Show firewall

### Syntax

```h1 firewall show | --firewall FIREWALL```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall delete

Delete firewall

### Syntax

```h1 firewall delete | --firewall FIREWALL```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall history

History of firewall

### Syntax

```h1 firewall history | --firewall FIREWALL```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall create

Create firewall

### Syntax

```h1 firewall create | --name NAME```

### Examples

#### Create a new firewall

```bash
h1 firewall create --name secure-zone-fw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |

## h1 firewall attach

Attach firewall to a network

### Syntax

```h1 firewall attach | --firewall FIREWALL --network NETWORK```

### Examples

#### Attach firewall to network 

```bash
h1 firewall attach --firewall secure-zone-fw --network my-safe-net
```

Hint: Use ```h1 network list``` to list available networks or ```h1 network create``` to create a new one.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--network NETWORK``` |  | Network ID or name |

## h1 firewall detach

Detach firewall from network

### Syntax

```h1 firewall detach | --firewall FIREWALL```

### Examples

#### Detach firewall from network

```bash
h1 firewall detach --firewall secure-zone-fw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall ingress

Manage ingress rules of firewall

### Examples

#### Create a firewall

```bash
h1 firewall create --name secure-zone-fw
```

#### List firewall ingress rules

```bash
h1 firewall ingress list --firewall secure-zone-fw
```

#### List firewall egress rules

```bash
h1 firewall egress list --firewall secure-zone-fw
```

#### Add firewall to allow any incoming HTTP traffic to 10.177.2.2

```bash
h1 firewall ingress add --firewall secure-zone-fw --action allow \
    --priority 300 \
    --filter tcp:80 \ 
    --external 0.0.0.0/0 --internal 10.177.2.2 \
    --name 'Allow HTTP'
```

#### Delete firewall rule

```bash
h1 firewall egress delete --firewall secure-zone-fw --rule 5b3a0750db77e0540811669e
```

Note (1): To identify available rules use ```h1 firewall egress list``` or ```h1 firewall ingress list```.
Note (2): The following rules apply implicitly:

 - ingress has deny policy,
 - egress has allow policy, but the server can not receive a response to any packets that have not passed any egress rule.

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall ingress list

List rule ingress of firewall

### Syntax

```h1 firewall ingress list | --firewall FIREWALL```

### Examples

#### List firewall ingress rules

```bash
h1 firewall ingress list --firewall secure-zone-fw
```

#### List firewall egress rules

```bash
h1 firewall egress list --firewall secure-zone-fw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall ingress add

Add rule ingress of firewall

### Syntax

```h1 firewall ingress add | --firewall FIREWALL --name NAME --action ACTION --priority PRIORITY --filter FILTER [--filter FILTER ...] --external EXTERNAL [--external EXTERNAL ...] --internal INTERNAL [--internal INTERNAL ...]```

### Examples

#### Add firewall to allow any incoming HTTP traffic to 10.177.2.2

```bash
h1 firewall ingress add --firewall secure-zone-fw --action allow \
    --priority 300 \
    --filter tcp:80 \
    --external 0.0.0.0/0 --internal 10.177.2.2 \
    --name 'Allow HTTP'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--name NAME``` |  | Name |
| ```--action ACTION``` |  | Action |
| ```--priority PRIORITY``` |  | Number between 100 and 999 representing priority |
| ```--filter FILTER [--filter FILTER ...]``` |  | The filter rule in the form of "protocol:format [, protocol:format...]". Protocol as "icmp" / "udp" / "tcp" / "any". Port as numeric value. Example: "tcp:83". The parameter may occur repeatedly |
| ```--external EXTERNAL [--external EXTERNAL ...]``` |  | IP address or network on external side. The parameter may occur repeatedly |
| ```--internal INTERNAL [--internal INTERNAL ...]``` |  | Resource tags or * for all. The parameter may occur repeatedly |

## h1 firewall ingress delete

Add rule ingress of firewall

### Syntax

```h1 firewall ingress delete | --firewall FIREWALL --rule RULE```

### Examples

#### Remove firewall rule

```bash
h1 firewall ingress delete --firewall secure-zone-fw --rule 5b1e8988cdfb072cb51dc843
```

Hint: Use ```h1 firewall ingress list ``` or ```h1 firewall egress list ``` to list available rules.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--rule RULE``` |  | Rule identifier |

## h1 firewall egress

Manage egress rules of firewall

### Examples

#### Create a firewall

```bash
h1 firewall create --name secure-zone-fw
```

#### List firewall ingress rules

```bash
h1 firewall ingress list --firewall secure-zone-fw
```

#### List firewall egress rules

```bash
h1 firewall egress list --firewall secure-zone-fw
```

#### Add firewall to allow any incoming HTTP traffic to 10.177.2.2

```bash
h1 firewall ingress add --firewall secure-zone-fw --action allow \
    --priority 300 \
    --filter tcp:80 \ 
    --external 0.0.0.0/0 --internal 10.177.2.2 \
    --name 'Allow HTTP'
```

#### Delete firewall rule

```bash
h1 firewall egress delete --firewall secure-zone-fw --rule 5b3a0750db77e0540811669e
```

Note (1): To identify available rules use ```h1 firewall egress list``` or ```h1 firewall ingress list```.
Note (2): The following rules apply implicitly:

 - ingress has deny policy,
 - egress has allow policy, but the server can not receive a response to any packets that have not passed any egress rule.

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall egress list

List rule egress of firewall

### Syntax

```h1 firewall egress list | --firewall FIREWALL```

### Examples

#### List firewall ingress rules

```bash
h1 firewall ingress list --firewall secure-zone-fw
```

#### List firewall egress rules

```bash
h1 firewall egress list --firewall secure-zone-fw
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |

## h1 firewall egress add

Add rule egress of firewall

### Syntax

```h1 firewall egress add | --firewall FIREWALL --name NAME --action ACTION --priority PRIORITY --filter FILTER [--filter FILTER ...] --external EXTERNAL [--external EXTERNAL ...] --internal INTERNAL [--internal INTERNAL ...]```

### Examples

#### Add firewall to allow any incoming HTTP traffic to 10.177.2.2

```bash
h1 firewall ingress add --firewall secure-zone-fw --action allow \
    --priority 300 \
    --filter tcp:80 \
    --external 0.0.0.0/0 --internal 10.177.2.2 \
    --name 'Allow HTTP'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--name NAME``` |  | Name |
| ```--action ACTION``` |  | Action |
| ```--priority PRIORITY``` |  | Number between 100 and 999 representing priority |
| ```--filter FILTER [--filter FILTER ...]``` |  | The filter rule in the form of "protocol:format [, protocol:format...]". Protocol as "icmp" / "udp" / "tcp" / "any". Port as numeric value. Example: "tcp:83". The parameter may occur repeatedly |
| ```--external EXTERNAL [--external EXTERNAL ...]``` |  | IP address or network on external side. The parameter may occur repeatedly |
| ```--internal INTERNAL [--internal INTERNAL ...]``` |  | Resource tags or * for all. The parameter may occur repeatedly |

## h1 firewall egress delete

Add rule egress of firewall

### Syntax

```h1 firewall egress delete | --firewall FIREWALL --rule RULE```

### Examples

#### Remove firewall rule

```bash
h1 firewall ingress delete --firewall secure-zone-fw --rule 5b1e8988cdfb072cb51dc843
```

Hint: Use ```h1 firewall ingress list ``` or ```h1 firewall egress list ``` to list available rules.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--rule RULE``` |  | Rule identifier |

