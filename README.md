# h1-cli

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5e85806098ca486991d4bc1b568cb743)](https://app.codacy.com/app/hyperonecom/h1-cli?utm_source=github.com&utm_medium=referral&utm_content=hyperonecom/h1-cli&utm_campaign=badger)
[![Build Status](https://travis-ci.org/hyperonecom/h1-cli.svg?branch=master)](https://travis-ci.org/hyperonecom/h1-cli)
[![Docker Repository on Quay](https://quay.io/repository/hyperone/cli/status "Docker Repository on Quay")](https://quay.io/repository/hyperone/cli)

h1-cli is a console tool designed to manage the HyperOne cloud infrastructure. You can use it for your own administrative work as well as for creating automation scripts.

## Features overview

* control of all resources provided by the platform, in particular:

   * changing server - creating, stoping and deleting them,
   * manipulation of IP addresses - associate them, modification of the PTR record,
   * modifying disks - creating, detach / attach from the server, resize,
   * update DNS zone - add DNS records, import & exports whole zone

* various forms of authentication,
* choice of output format, in order to use it in additional tools.

The [reference documentation] contains a complete set of information on the possible actions to be taken and their options.

## Installation

The installation is basically limited to downloading the executable copy of the software, which is available in the [Releases] tab of the [repository].

### Linux environment

Run the downloaded binary file after granting executables rights:

```bash
$ chmod +x h1_client.bin
$ ./h1_client.bin
```

The application should work correctly without installing additional libraries / packages.

If you intend to use the software constantly, you can install for the user or at the system level.

Installation for the user can be carried out by:

```bash
$ cp h1_client.bin ~/.local/bin/h1
$ h1
```

Installation at the system level can be carried out by:

```bash
$ cp h1_client.bin /usr/local/bin/h1
$ h1
```

### Windows environment

> Introduction for Windows requires development taking into account the specificity of the platform.

### macOS environment

> Introduction for the macOS system requires development taking into account the specificity of the platform.

### Docker container

It is possible to run CLI as a Docker container using the following command:

```bash
docker run -it -v ~/.h1-cli:/root/.h1-cli quay.io/hyperone/cli:master h1 vm list
```

For long-term use, we recommend append to ``~/.bashrc`` following function:

```bash
function h1() {
	docker run -it -v ~/.h1-cli:/root/.h1-cli -v /tmp/:/mnt quay.io/hyperone/cli:latest h1 "$@";
}
```

## Usage

The commands are composed of the following components:

```bash
$ h1 [categories [...]] command [[options] ...]
```

This structure is repeated in all application commands.

To start the work you should log in via the command:

```bash
$ h1 login --username {{user_email}}
```

You will be asked to enter the password:

> ? Password: ********************

After correctly logging in, you will receive a message about obtaining the API key for the session:

> info: You successfully logged and stored your apiKey in config file

The credentials have been saved in ``$HOME/.h1-cli/conf.json``. You must ensure the confidentiality of these files.

If you use more than 1 project you must select actively used by downloading the proper identifier:

```bash
$ h1 project list
```

Then, confirm this choice:

```bash
$ h1 project select --project {{project}}
```

### Creating a server

Below is an example session presenting the basic actions - creating a server

```bash
$ h1 vm list
ID                        NAME           FLAVOUR    STATE    PROCESSING  TAGS
5b3f7c863adfaa0d10f7b445  docker-node    a1.small   Off      false       
5b3f8b7b3adfaa0d10f7bed4  docker-laas    a1.micro   Running  false       zabbix_agent
5b439f6b3adfaa0d10f90820  docker-node-2  m2.medium  Running  false       zabbix_agent,docker_registry

$ h1 user credentials list
ID                        NAME    TYPE  CREATED
5b30d80cddd5b3c5e9ee8dfe  my-ssh  ssh   2018-06-25T11:54:52.159Z

$ h1 vm create --name vm-tutorial --ssh my-ssh --image ubuntu:18.04 --type a1.micro --os-disk ssd,10
ID                        NAME         FLAVOUR   STATE    PROCESSING  TAGS
5b44b43511b0b1e6f24eb623  vm-tutorial  a1.micro  Running  false  

$ h1 vm list
ID                        NAME           FLAVOUR    STATE    PROCESSING  TAGS
5b44b43511b0b1e6f24eb623  vm-tutorial    a1.micro   Running  false       
```

Description of the basic command parameters``h1 vm create --name vm-tutorial --ssh my-ssh --image ubuntu:18.04 --type a1.micro --os-disk ssd,10``:

* ``--name vm-tutorial`` - server name chosen by the user
* ``--sshkey my-ssh`` - SSH key name can be listed through ``h1 user credentials list`` or ```h1 project credentials list```,
* ``--image ubuntu:18.04`` - the system operating image identifier possible to obtain through``h1 image list --recommended``,
* ``--type a1.micro`` - virtual machine type that can be obtained via ``h1 service list --resource vm --type flavour``,
* ``--os-disk ssd,10`` - the type and size of the system disk.

The SSH key is available after importing it. For example via the command ``h1 user credentials add --sshkey-file ~/.ssh/id_rsa.pub --name $(hostname)``..

### Servers managements

The following are the basic actions that can be performed with servers in the form of example commands:

* ``h1 vm list`` - list available servers
* ``h1 vm show --vm vm-tutorial`` - show details about server ``vm-tutorial``,
* ``h1 vm stop --vm vm-tutorial`` - stop server ``vm-tutorial`` without removing them,
* ``h1 vm start --vm vm-tutorial`` - start server ``vm-tutorial``,
* ``h1 vm turnoff --vm vm-tutorial`` - turn off server ``vm-tutorial`` without removing them,
* ``h1 vm destroy --vm vm-tutorial`` - delete server``vm-tutorial``.

It is also possible to make changes regarding disks attached to the server:

* ``h1 vm disk attach --vm vm-tutorial --disk vm-disk-2`` - attach a previously created disk, e.g. via``h1 disk create --name 'vm-disk-2' --type ssd --size 1``,
* ``h1 vm disk detach --vm vm-tutorial --disk vm-disk-2`` - detach dysk without removing them.

These operations do not require disabling virtual machines for non-system disks.

### Disks managements

Disks are data carriers for servers. It is possible to switch them and modify them during the operation of virtual machines.

The following are the basic actions that can be performed with disks in the form of example commands:

* ``h1 disk list`` - list available disk
* ``h1 disk show --disk vm-disk-2`` - show details about vm ``vm-disk-2``,
* ``h1 disk delete --disk vm-disk-2`` - delete disk``vm-disk-2``,
* ``h1 disk rename --disk vm-disk-2 --new-name vm-disk-new`` - changes name of disk ``vm-disk-2`` to ``vm-disk-new``,
* ``h1 disk create --name vm-disk-4 --type ssd --size 25`` - create disk SSD with size 25 GB and name ``vm-disk-4``,
* ``h1 disk resize --disk vm-disk-4 --size 30`` - resize ``vm-disk-4`` to 30 GB.

Disk extension is not possible for system disks on running server. In the case of a system disk, you have to shut down the server first. In other cases you can resize disk when virtual machine and operating system is running.

### Images management

You can create virtual machine images as well as manage them. The image allow you to create servers with the same configuration or to create a temporary copy of the instance, e.g. to protect the system state from significant updates.

The following are the basic actions that can be taken with images in the form of example commands:

* ``h1 image create --vm vm-tutorial --name vm-tutorial-$(date +"%Y-%m-%d")`` - will create image and save it with the given name,
* ``h1 image list`` - list your images
* ``h1 image list --recommended`` - list images provided & recommended by platform
* ``h1 image delete --image vm-tutorial-2017-09-15`` - remove image``vm-tutorial-2017-09-15``,
* ``h1 image show --image vm-tutorial-2017-09-15`` - show details about image ``vm-tutorial-2017-09-15``,

### Managing other resources

It is worth paying attention to:

* ``h1 vm nic list --vm vm-id`` - lists, among others virtual machine IP addresses.

For other resources, use the ``--help`` parameter, which documents the CLI features in a full and up-to-date manner.
 
The [reference documentation] of the other commands is available in the repository.

### Reporting problems and comments

If you encounter any errors with the tool, please report the problem through the notification system in the administration panel or the [Issues] tab in the [repository].

[Releases]: https://github.com/hyperonecom/h1-cli/releases/latest
[repository]: https://github.com/hyperonecom/h1-cli
[Issues]: https://github.com/hyperonecom/h1-cli/issues
[reference documentation]: docs/index.md
