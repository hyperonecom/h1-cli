#!/usr/bin/env node
'use strict';
require('../lib/injectPath');

const Cli = require('lib/cli');
const Chalk = require('chalk');

const config = require('lib/config');

const Package = require('../package.json');
const scope = process.env.SCOPE_NAME;

const cli = Cli.createCategory('app', {
    description: Package.description,
    version: Package.version,
    epilog: `
${Chalk.underline('Sample usage:')}
1. Login to your account:'
  ${Chalk.bold(`$ ${scope} login user@example.org`)}
2. Select project:
  ${Chalk.bold(`$ ${scope} project select <project>`)}
`});

cli.addChild(require('./config'));
cli.addChild(require('./user'));
cli.addChild(require('./login'));
cli.addChild(require('./project'));

cli.addChild(require('./disk'));
cli.addChild(require('./vm'));
cli.addChild(require('./image'));
cli.addChild(require('./iso'));
cli.addChild(require('./network'));
cli.addChild(require('./ip'));
cli.addChild(require('./dns'));
cli.addChild(require('./service'));
cli.addChild(require('./netgw'));
cli.addChild(require('./firewall'));
cli.addChild(require('./vault'));
cli.addChild(require('./snapshot'));

// inject defaultValues from config defaults
const applyDefault = (element, defaults) => {
    Object.entries(defaults).forEach(([name, values]) => {
        const children = element.children.find(children => children.name === name);
        if (!children) { return; }

        if (children.children) {
            return applyDefault(children, values);
        }

        Object.entries(values).forEach(([key, value]) => {
            const option = children.options[key];
            if (!option) { return; }

            // console.log('defaultValue', element.name, name, key, value);
            option.defaultValue = value;
            option.required = false;
        });
    });
};
applyDefault(cli, config.get('defaults', {}));

// load plugins
config.plugins.forEach(plugin => plugin.load(cli));

cli.run = () => Cli.run(cli).then(data => { config.store(); return data; });

module.exports = cli;
