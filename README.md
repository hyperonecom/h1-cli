# h1-cli v2

[![Build Status](https://travis-ci.org/hyperonecom/h1-cli.svg?branch=master)](https://travis-ci.org/hyperonecom/h1-cli)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

h1-cli is a tool designed to manage the HyperOne cloud infrastructure. You can use it for your own administrative work as well as for creating automation scripts.

h1-cli v2 is revisited CLI for managed cloud. The basic goal is to solve the scalability problems of the previous version, both in development and execution. It also makes it possible to meet new requirements.

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

Detailed instruction about installation is available at [HyperOne.com](https://www.hyperone.com/tools/cli/guides/installation.html) for:

* Linux distro:
  * Debian & Ubuntu – via Apt repository
  * Fedora & CentOS – via Yum repository
  * Alpine - via Apk repository
  * other Linux distro – via executable
* macOS - via executable
* Windows - via executable

## Usage

The commands are composed of the following components:

```bash
h1 {namespace} {resource} [subresource ...] {action} [[options] ...]
```

This structure is repeated in all application commands.

To start the work you should log in via the command:

```bash
h1 auth user --username {{user_email}} --password {{user_password}}
```

After correctly logging in, you will receive a message about obtained identity.

The credentials have been saved in ``$HOME/.h1/config.json``. You must ensure the confidentiality of these files.

If you carry out operations constantly in one project, you might select actively used by downloading the proper identifier:

```bash
h1 iam project list
```

Then, confirm this choice:

```bash
h1 project select --project {{project}}
```

### Autocomplete

CLI support autocomplete for popular Linux shell. To use autocomplete setup update shell configuration is required.

To update shell configuration use:

```bash
h1 config autocomplete install
```

A restart of the shell may be required after updating the configuration.

After running, you can check the operation by executing:

```bash
h1 iam proje<TAB><TAB>
```

### Docker credential helper

CLI may act as Docker credential helper. To use credential helper update Docker configuration is required.
To update Docker configuration use command `h1 container registry helper setup`.

### Development

Project contains two main directories with source code - `packages` and `extensions`. Each of them contain relevant Javascript packages as modules.

Directory `packages` contain building primitives for CLI and entrypoint to start it.

Directory `extensions` contain specific packages to particular CLI elements, e.g. related to specific forms of authentication or namespace operations.

To install your project use:

```
yarn install
```

During the development of CLI:

```
nodejs packages/cli-device-node/bin/h1
```

To build project use:

```
yarn build
```

To start CLI on desktop use:

```bash
nodejs packages/cli-device-node/dist/h1
```

To start CLI in browser use:

```bash
cd packages/cli-device-browser-demo
npm run serve
```

### Testing

To start end-to-end tests for desktop use:

```bash
nodejs packages/cli-device-node/dist/h1
npm run test
```

### Environment variables

CLI support following environment variables:

* `HYPERONE_OPENAPI_URL` - allows to specify link to OpenAPI specification to reach platform API. Example value: `https://api.hyperone.com/v2/openapi.json`

Certain external libraries may support consume environment variables, e.g. for purpose of authentication to AWS, GCP, Azure platforms.

### Reporting problems and comments

If you encounter any errors with the tool, please report the problem through the notification system in the administration panel or the [Issues] tab in the [repository].

[Releases]: https://github.com/hyperonecom/h1-cli/releases/latest
[repository]: https://github.com/hyperonecom/h1-cli
[Issues]: https://github.com/hyperonecom/h1-cli/issues
[reference documentation]: docs/index.md
