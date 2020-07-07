# h1-cli-v2

h1-cli is a console tool designed to manage the HyperOne cloud infrastructure. You can use it for your own administrative work as well as for creating automation scripts.

h1-cli v2 is revisited CLI for managed cloud. The basic goal is to solve the scalability problems of the previous version, both in development and execution. It also makes it possible to meet new requirements.

Design docs: https://hackmd.io/wyFxJMe1RCyZ_kK1z4n4lQ

## Installation

To install CLI:

```bash
npm install
npm link
```

## Start

To start CLI use:

```bash
h1 --help
```

Authentication:

* Currently, the only supported form of authentication is to use a passport file - use the ```--passport-file``` parameter.

## Documentation

To generate docs use:

```bash
npm run docs
```
