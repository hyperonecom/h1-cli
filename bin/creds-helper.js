#!/usr/bin/env node
'use strict';

require('../lib/injectPath');

const Cli = require('lib/cli');
const scope = process.env.SCOPE_NAME;

const Package = require('../package.json');

const cli = Cli.createCategory(`docker-credential-${scope}-login`, {
    description: Package.description,
    version: Package.version,
});

cli.addChild(require('bin/registry/creds-helper/get'));
cli.addChild(require('bin/registry/creds-helper/store'));
cli.addChild(require('bin/registry/creds-helper/erase'));

Cli.run(cli);

module.exports = cli;
