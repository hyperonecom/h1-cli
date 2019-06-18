# TOC

  * [h1 registry create](#h1-registry-create) - Create Registry
<<<<<<< HEAD
<<<<<<< HEAD
  * [h1 registry list](#h1-registry-list) - List Registry
  * [h1 registry show](#h1-registry-show) - Show Registry
  * [h1 registry delete](#h1-registry-delete) - Delete Registry
  * [h1 registry history](#h1-registry-history) - History of Registry
  * [h1 registry rename](#h1-registry-rename) - Rename Registry
  * [h1 registry service](#h1-registry-service) - Manage your services of Registry
    * [h1 registry service list](#h1-registry-service-list) - List service for Registry
    * [h1 registry service show](#h1-registry-service-show) - Show service for Registry
  * [h1 registry start](#h1-registry-start) - Start Registry
  * [h1 registry stop](#h1-registry-stop) - Stop Registry
  * [h1 registry transfer](#h1-registry-transfer) - Transfer Registry to other project
  * [h1 registry repository](#h1-registry-repository) - Manage your Repository of Registry
    * [h1 registry repository list](#h1-registry-repository-list) - List Repository of Registry
    * [h1 registry repository tag](#h1-registry-repository-tag) - Manage your Tag in repository
      * [h1 registry repository tag list](#h1-registry-repository-tag-list) - List Tag in repository
      * [h1 registry repository tag delete](#h1-registry-repository-tag-delete) - Delete Tag in repository
<<<<<<< HEAD
=======
  * [h1 registry service](#h1-registry-service) - Manage your services of Registry
    * [h1 registry service list](#h1-registry-service-list) - List service for Registry
    * [h1 registry service show](#h1-registry-service-show) - Show service for Registry
=======
  * [h1 registry list](#h1-registry-list) - List Registry
  * [h1 registry show](#h1-registry-show) - Show Registry
>>>>>>> 7590c0d...    Documentation
  * [h1 registry delete](#h1-registry-delete) - Delete Registry
  * [h1 registry history](#h1-registry-history) - History of Registry
  * [h1 registry rename](#h1-registry-rename) - Rename Registry
  * [h1 registry service](#h1-registry-service) - Manage your services of Registry
    * [h1 registry service list](#h1-registry-service-list) - List service for Registry
    * [h1 registry service show](#h1-registry-service-show) - Show service for Registry
  * [h1 registry start](#h1-registry-start) - Start Registry
  * [h1 registry stop](#h1-registry-stop) - Stop Registry
  * [h1 registry transfer](#h1-registry-transfer) - Transfer Registry to other project
  * [h1 registry repository](#h1-registry-repository) - Manage your Repository of Registry
    * [h1 registry repository list](#h1-registry-repository-list) - List Repository of Registry
    * [h1 registry repository tag](#h1-registry-repository-tag) - Manage your tag
      * [h1 registry repository tag list](#h1-registry-repository-tag-list) - List tag
      * [h1 registry repository tag add](#h1-registry-repository-tag-add) - Add a tag to Repository of Registry
      * [h1 registry repository tag delete](#h1-registry-repository-tag-delete) - Delete a tag of Repository of Registry
<<<<<<< HEAD
  * [h1 registry show](#h1-registry-show) - Show Registry
  * [h1 registry list](#h1-registry-list) - List Registry
  * [h1 registry start](#h1-registry-start) - Start Registry
  * [h1 registry stop](#h1-registry-stop) - Stop Registry
  * [h1 registry transfer](#h1-registry-transfer) - Transfer Registry to other project
>>>>>>> 883c19a...   Added documentation for registry
=======
>>>>>>> 7590c0d...    Documentation
=======
>>>>>>> 0b17333...   Modified documentation
  * [h1 registry credential](#h1-registry-credential) - Manage your credentials to Registry
    * [h1 registry credential password](#h1-registry-credential-password) - Manage your password to Registry
      * [h1 registry credential password show](#h1-registry-credential-password-show) - Show password to Registry
      * [h1 registry credential password list](#h1-registry-credential-password-list) - List password to Registry
      * [h1 registry credential password rename](#h1-registry-credential-password-rename) - Rename password to Registry
      * [h1 registry credential password delete](#h1-registry-credential-password-delete) - Delete password to Registry
      * [h1 registry credential password add](#h1-registry-credential-password-add) - Add password to Registry
  * [h1 registry tag](#h1-registry-tag) - Manage your tag
    * [h1 registry tag list](#h1-registry-tag-list) - List tag
    * [h1 registry tag add](#h1-registry-tag-add) - Add a tag to Registry
    * [h1 registry tag delete](#h1-registry-tag-delete) - Delete a tag of Registry


# Specification

## h1 registry

Manage your Registry

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

<<<<<<< HEAD
<<<<<<< HEAD
### Examples

#### Create new container registry
=======
### Examples

<<<<<<< HEAD
#### Create new registry for container
>>>>>>> 1bb9150...       Modified registry.md
=======
#### Create new container registry
>>>>>>> 5065a01... Changed documentation for registry and repository

```bash
h1 registry --name my-registry --type container --password my-password
```

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 25f8f8c... Updated documentation for registry and repository
Note (1): To identify available registry type use ```h1 service list --resource registry``` .

Note (2): To add new resources to registry repository you must set password.

<<<<<<< HEAD
=======
>>>>>>> 883c19a...   Added documentation for registry
=======
>>>>>>> 1bb9150...       Modified registry.md
=======
>>>>>>> 25f8f8c... Updated documentation for registry and repository
## h1 registry create

Create Registry

### Syntax

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1bb9150...       Modified registry.md
```h1 registry create | --name NAME --type TYPE [--password PASSWORD [--password PASSWORD ...]] [--tag TAG [--tag TAG ...]]```
### Examples

#### Create new registry for container

```bash
h1 registry create --name my-registry --type container --password my-password
```

<<<<<<< HEAD
=======
```h1 registry create | --name NAME [--tag TAG [--tag TAG ...]]```
>>>>>>> 883c19a...   Added documentation for registry
=======
>>>>>>> 1bb9150...       Modified registry.md
### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Registry name |
<<<<<<< HEAD
<<<<<<< HEAD
| ```--type TYPE``` |  | Registry type name or ID |
=======
>>>>>>> 883c19a...   Added documentation for registry
=======
| ```--type TYPE``` |  | Registry type name or ID |
>>>>>>> 1bb9150...       Modified registry.md

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
<<<<<<< HEAD
<<<<<<< HEAD
| ```--password PASSWORD [--password PASSWORD ...]``` |  | Password to access. The parameter may occur repeatedly |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 registry list

List Registry

### Syntax

```h1 registry list | ```
### Example

```bash
h1 registry list
```

## h1 registry show

Show Registry

### Syntax

```h1 registry show | --registry REGISTRY```
### Example

```bash
h1 registry show --registry my-registry
=======
=======
| ```--password PASSWORD [--password PASSWORD ...]``` |  | Password to access. The parameter may occur repeatedly |
>>>>>>> 1bb9150...       Modified registry.md
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 registry list

List Registry

### Syntax

```h1 registry list | ```
### Example

```bash
h1 registry list
```

## h1 registry show

Show Registry

### Syntax

```h1 registry show | --registry REGISTRY```
### Example

```bash
<<<<<<< HEAD
h1 registry service show --service my-service --registry my-registry
>>>>>>> 883c19a...   Added documentation for registry
=======
h1 registry show --registry my-registry
>>>>>>> 7590c0d...    Documentation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |
<<<<<<< HEAD
<<<<<<< HEAD
=======
| ```--service SERVICE``` |  | Service for Registry ID or name |
>>>>>>> 883c19a...   Added documentation for registry
=======
>>>>>>> 7590c0d...    Documentation

## h1 registry delete

Delete Registry

### Syntax

```h1 registry delete | --registry REGISTRY```
### Example

```bash
h1 registry delete --registry my-registry
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |

## h1 registry history

History of Registry

### Syntax

```h1 registry history | --registry REGISTRY```
### Example

```bash
h1 registry history --registry my-registry
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |

## h1 registry rename

Rename Registry

### Syntax

```h1 registry rename | --registry REGISTRY --new-name NEW-NAME```
### Example

```bash
h1 registry rename --registry my-registry --new-name my-renamed-registry
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |
| ```--new-name NEW-NAME``` |  | New name |

<<<<<<< HEAD
<<<<<<< HEAD
## h1 registry service

Manage your services of Registry

## h1 registry service list

List service for Registry

### Syntax

```h1 registry service list | --registry REGISTRY```
### Example

```bash
h1 registry service list --registry test-registry
=======
## h1 registry repository
=======
## h1 registry service
>>>>>>> 7590c0d...    Documentation

Manage your services of Registry

## h1 registry service list

List service for Registry

### Syntax

```h1 registry service list | --registry REGISTRY```
### Example

```bash
<<<<<<< HEAD
h1 registry repository list
>>>>>>> 883c19a...   Added documentation for registry
=======
h1 registry service list --registry test-registry
>>>>>>> 7590c0d...    Documentation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |

<<<<<<< HEAD
<<<<<<< HEAD
## h1 registry service show

Show service for Registry

### Syntax

```h1 registry service show | --registry REGISTRY --service SERVICE```
### Example

```bash
h1 registry service show --service my-service --registry my-registry
=======
## h1 registry repository tag

Manage your tag

## h1 registry repository tag list
=======
## h1 registry service show
>>>>>>> 7590c0d...    Documentation

Show service for Registry

### Syntax

```h1 registry service show | --registry REGISTRY --service SERVICE```
### Example

```bash
<<<<<<< HEAD
h1 registry repository tag list --repository my-repository
>>>>>>> 883c19a...   Added documentation for registry
=======
h1 registry service show --service my-service --registry my-registry
>>>>>>> 7590c0d...    Documentation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |
<<<<<<< HEAD
<<<<<<< HEAD
| ```--service SERVICE``` |  | Service for Registry ID or name |

## h1 registry start

Start Registry

### Syntax

```h1 registry start | --registry REGISTRY```
### Example

```
h1 registry start --registry my-registry
=======
| ```--repository REPOSITORY``` |  | Repository of Registry ID or name |
=======
| ```--service SERVICE``` |  | Service for Registry ID or name |
>>>>>>> 7590c0d...    Documentation

## h1 registry start

Start Registry

### Syntax

```h1 registry start | --registry REGISTRY```
### Example

<<<<<<< HEAD
```bash
h1 registry repository tag add --repository test-repository --tag prod=true
>>>>>>> 883c19a...   Added documentation for registry
=======
```
h1 registry start --registry my-registry
>>>>>>> 7590c0d...    Documentation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |
<<<<<<< HEAD
<<<<<<< HEAD

## h1 registry stop

Stop Registry

### Syntax

```h1 registry stop | --registry REGISTRY```
### Example

```
h1 registry stop --registry my-registry
=======
| ```--repository REPOSITORY``` |  | Repository of Registry ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
=======
>>>>>>> 7590c0d...    Documentation

## h1 registry stop

Stop Registry

### Syntax

```h1 registry stop | --registry REGISTRY```
### Example

<<<<<<< HEAD
```bash
h1 registry repository tag delete --repository test-repository --tag prod
>>>>>>> 883c19a...   Added documentation for registry
=======
```
h1 registry stop --registry my-registry
>>>>>>> 7590c0d...    Documentation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
<<<<<<< HEAD
<<<<<<< HEAD
| ```--registry REGISTRY``` |  | Registry ID or name |

## h1 registry transfer

Transfer Registry to other project

### Syntax

```h1 registry transfer | --registry REGISTRY --new-project NEW-PROJECT```
### Example

```bash
h1 registry transfer --registry test-registry --new-project OtherProject
=======
| ```--tag TAG``` |  | Tag |
=======
>>>>>>> 7590c0d...    Documentation
| ```--registry REGISTRY``` |  | Registry ID or name |

## h1 registry transfer

Transfer Registry to other project

### Syntax

```h1 registry transfer | --registry REGISTRY --new-project NEW-PROJECT```
### Example

```bash
<<<<<<< HEAD
h1 registry show --registry my-registry
>>>>>>> 883c19a...   Added documentation for registry
=======
h1 registry transfer --registry test-registry --new-project OtherProject
>>>>>>> 7590c0d...    Documentation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |
<<<<<<< HEAD
<<<<<<< HEAD
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 registry repository

Manage your Repository of Registry

### Examples

#### Add tagged repository for registry

```bash
docker login registry-id.registry.pl-waw-1.hyperone.cloud -u login --password password
<<<<<<< HEAD

docker pull ubuntu:latest

docker tag ubuntu:latest registry-id.registry.pl-waw-1.hyperone.cloud/ubuntu:latest

docker push registry-id.registry.pl-waw-1.hyperone.cloud/ubuntu:latest
```

Note (1): To identify registry id use ```h1 registry list```.

Note (2): To login to registry using Docker use your Hyperone panel e-mail as login and password you provided creating registry as password

## h1 registry repository list

List Repository of Registry

### Syntax

```h1 registry repository list | --registry REGISTRY```
### Example

```bash
h1 registry repository list
=======
=======
| ```--new-project NEW-PROJECT``` |  | New name |
>>>>>>> 7590c0d...    Documentation

## h1 registry repository

Manage your Repository of Registry

### Examples

#### Add tagged repository for registry

```bash
docker login 5d1090990136a7f0da513654.registry.pl-waw-1.hyperone.cloud -u login --password password
=======
>>>>>>> 25f8f8c... Updated documentation for registry and repository

docker pull ubuntu:latest

docker tag ubuntu:latest registry-id.registry.pl-waw-1.hyperone.cloud/ubuntu:latest

docker push registry-id.registry.pl-waw-1.hyperone.cloud/ubuntu:latest
```

Note (1): To identify registry id use ```h1 registry list```.

Note (2): To login to registry using Docker use your Hyperone panel e-mail as login and password you provided creating registry as password

## h1 registry repository list

List Repository of Registry

### Syntax

```h1 registry repository list | --registry REGISTRY```
### Example

```bash
h1 registry repository list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |

## h1 registry repository tag

Manage your Tag in repository

## h1 registry repository tag list

List Tag in repository

### Syntax

```h1 registry repository tag list | --registry REGISTRY --repository REPOSITORY```
### Example

<<<<<<< HEAD
```
h1 registry start --registry my-registry
>>>>>>> 883c19a...   Added documentation for registry
=======
```bash
<<<<<<< HEAD
h1 registry repository tag list --repository my-repository
>>>>>>> 7590c0d...    Documentation
=======
h1 registry repository tag list
>>>>>>> 0b17333...   Modified documentation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |
| ```--repository REPOSITORY``` |  | Repository of Registry ID |

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
## h1 registry repository tag

Manage your Tag in repository

## h1 registry repository tag list

List Tag in repository

### Syntax

```h1 registry repository tag list | --registry REGISTRY --repository REPOSITORY```
### Example

```bash
h1 registry repository tag list
=======
## h1 registry stop
=======
## h1 registry repository tag add
>>>>>>> 7590c0d...    Documentation

Add a tag to Repository of Registry

### Syntax

```h1 registry repository tag add | --registry REGISTRY --repository REPOSITORY [--tag TAG [--tag TAG ...]]```
### Example

<<<<<<< HEAD
```
h1 registry stop --registry my-registry
>>>>>>> 883c19a...   Added documentation for registry
=======
```bash
h1 registry repository tag add --repository test-repository --tag prod=true
>>>>>>> 7590c0d...    Documentation
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |
<<<<<<< HEAD
<<<<<<< HEAD
| ```--repository REPOSITORY``` |  | Repository of Registry ID |

## h1 registry repository tag delete

Delete Tag in repository

### Syntax

```h1 registry repository tag delete | --tag TAG --registry REGISTRY --repository REPOSITORY```
### Example

```bash
h1 registry repository tag delete --tag my-tag --registry my-registry --repository my-repository
<<<<<<< HEAD
=======
=======
| ```--repository REPOSITORY``` |  | Repository of Registry ID or name |
>>>>>>> 7590c0d...    Documentation

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

=======
>>>>>>> 0b17333...   Modified documentation
## h1 registry repository tag delete

Delete Tag in repository

### Syntax

```h1 registry repository tag delete | --tag TAG --registry REGISTRY --repository REPOSITORY```
### Example

```bash
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
h1 registry transfer --registry test-registry --new-project OtherProject
>>>>>>> 883c19a...   Added documentation for registry
=======
h1 registry repository tag delete --repository test-repository --tag prod
>>>>>>> 7590c0d...    Documentation
=======
h1 registry repository tag delete --tag my-tag --registry my-registry --repository busybox --tag 1.26
>>>>>>> 0b17333...   Modified documentation
=======
h1 registry repository tag delete --tag my-tag
>>>>>>> 06ea422... Updated documentation
=======
>>>>>>> 689fb24... Changed repository tag delete context
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
| ```--tag TAG``` |  | Tag in repository ID |
| ```--registry REGISTRY``` |  | Registry ID or name |
| ```--repository REPOSITORY``` |  | Repository of Registry ID |
=======
| ```--registry REGISTRY``` |  | Registry ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |
>>>>>>> 883c19a...   Added documentation for registry
=======
| ```--tag TAG``` |  | Tag |
| ```--registry REGISTRY``` |  | Registry ID or name |
| ```--repository REPOSITORY``` |  | Repository of Registry ID or name |
>>>>>>> 7590c0d...    Documentation
=======
| ```--registry REGISTRY``` |  | Registry ID or name |
| ```--repository REPOSITORY``` |  | Repository of Registry ID or name |
| ```--tag TAG``` |  | Tag in repository ID or name |
>>>>>>> 0b17333...   Modified documentation
=======
| ```--tag TAG``` |  | Tag in repository ID |
| ```--registry REGISTRY``` |  | Registry ID or name |
| ```--repository REPOSITORY``` |  | Repository of Registry ID |
>>>>>>> 06ea422... Updated documentation

## h1 registry credential

Manage your credentials to Registry

## h1 registry credential password

Manage your password to Registry

## h1 registry credential password show

Show password to Registry

### Syntax

```h1 registry credential password show | --registry REGISTRY --password PASSWORD```
### Example

```bash
h1 registry credential password show --password my-password
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |
| ```--password PASSWORD``` |  | Password to Registry ID or name |

## h1 registry credential password list

List password to Registry

### Syntax

```h1 registry credential password list | --registry REGISTRY```
### Example

```bash
h1 registry credential password list --registry my-registry
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |

## h1 registry credential password rename

Rename password to Registry

### Syntax

```h1 registry credential password rename | --registry REGISTRY --password PASSWORD --new-name NEW-NAME```
### Example

```bash
h1 registry credential password rename --password my-password --new-name my-renamed-password --registry my-registry
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |
| ```--password PASSWORD``` |  | Password to Registry ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 registry credential password delete

Delete password to Registry

### Syntax

<<<<<<< HEAD
<<<<<<< HEAD
```h1 registry credential password delete | --password PASSWORD --registry REGISTRY```
=======
```h1 registry credential password delete | --registry REGISTRY --password PASSWORD```
>>>>>>> 883c19a...   Added documentation for registry
=======
```h1 registry credential password delete | --password PASSWORD --registry REGISTRY```
>>>>>>> 06ea422... Updated documentation
### Example

```bash
h1 registry credential password delete --password my-password --registry my-registry
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
<<<<<<< HEAD
<<<<<<< HEAD
| ```--password PASSWORD``` |  | Password to Registry ID or name |
| ```--registry REGISTRY``` |  | Registry ID or name |
=======
| ```--registry REGISTRY``` |  | Registry ID or name |
| ```--password PASSWORD``` |  | Password to Registry ID or name |
>>>>>>> 883c19a...   Added documentation for registry
=======
| ```--password PASSWORD``` |  | Password to Registry ID or name |
| ```--registry REGISTRY``` |  | Registry ID or name |
>>>>>>> 06ea422... Updated documentation

## h1 registry credential password add

Add password to Registry

### Syntax

```h1 registry credential password add | --registry REGISTRY --name NAME [--password PASSWORD]```
### Example

```bash
h1 registry credential password add --name my-pass --password secret-password --registry my-registry
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |
| ```--name NAME``` |  | Name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--password PASSWORD``` |  | Password. It will be generated and shown if it is not specified. |

## h1 registry tag

Manage your tag

## h1 registry tag list

List tag

### Syntax

```h1 registry tag list | --registry REGISTRY```
### Example

```bash
h1 registry tag list --registry my-registry
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |

## h1 registry tag add

Add a tag to Registry

### Syntax

```h1 registry tag add | --registry REGISTRY [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 registry tag add --registry test-registry --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--registry REGISTRY``` |  | Registry ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 registry tag delete

Delete a tag of Registry

### Syntax

```h1 registry tag delete | --tag TAG --registry REGISTRY```
### Example

```bash
h1 registry tag delete --registry test-registry --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--registry REGISTRY``` |  | Registry ID or name |

