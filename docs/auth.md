# TOC

  * [h1 auth user](#h1-auth-user) - Login as user
  * [h1 auth status](#h1-auth-status) - Provide information about current session
  * [h1 auth azure](#h1-auth-azure) - Authenticate using Azure identity
  * [h1 auth aws](#h1-auth-aws) - Authenticate using AWS identity
  * [h1 auth google](#h1-auth-google) - Authenticate using Google identity
  * [h1 auth logout](#h1-auth-logout) - Remove user session


# Specification

## h1 auth

Manage authentication of CLI

## h1 auth user

Login as user

### Syntax

```h1 auth user | [--username USERNAME] [--password PASSWORD]```
### Example

```bash
h1 auth user --username user@example.com
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--username USERNAME``` |  | Username |
| ```--password PASSWORD``` |  | Username |

## h1 auth status

Provide information about current session

### Syntax

```h1 auth status | ```
### Example

```bash
h1 auth status
```

## h1 auth azure

Authenticate using Azure identity

### Syntax

```h1 auth azure | [--token TOKEN] [--discovery]```
### Examples

#### Use CLI

```bash
h1 auth azure --token $(az account get-access-token | jq -r .accessToken)
```

#### Discovery

```bash
h1 auth azure --discovery
```

Attempt to find credentials from the following sources (listed in order of precedence):

* Environment variables
* Azure Instance Metadata Service (IMDS) available from deployment environment

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Azure Access token |
| ```--discovery``` |  | Use standard Azure mechanisms to find credential |

## h1 auth aws

Authenticate using AWS identity

### Syntax

```h1 auth aws | [--access-key-id ACCESS-KEY-ID] [--secret-access-key] [--session-token] [--discovery]```
### Examples

#### Discovery

```bash
h1 auth aws --discovery
```

Attempt to find credentials from the following sources (listed in order of precedence):

* Environment variables
* Shared credentials and config ini files
* EC2/ECS Instance Metadata Service

Credentials is used only to generate the request signature, which only allows you to confirm your identity and does not allow you to make any modifications to AWS resources.

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--access-key-id ACCESS-KEY-ID``` |  | AWS Access Key Id |
| ```--secret-access-key``` |  | AWS Secret Access Key (only required to generate a signature) |
| ```--session-token``` |  | AWS Secret Access Key (only required to generate a signature) |
| ```--discovery``` |  | Use standard AWS mechanisms to find credential |

## h1 auth google

Authenticate using Google identity

### Syntax

```h1 auth google | [--token TOKEN] [--discovery]```
### Examples

#### Use CLI

```bash
h1 auth google --token $(gcloud auth print-access-token)
```

#### Discovery

Use Google Application Default Credentials as a simple way to get authorization credentials.

```bash
h1 auth google --discovery
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--token TOKEN``` |  | Google ID token |
| ```--discovery``` |  | Use standard Google mechanisms to find credential |

## h1 auth logout

Remove user session

### Syntax

```h1 auth logout | ```
### Example

```bash
h1 auth logout
```

