#!/usr/bin/env node
'use strict';

require('../lib/injectPath');

const Cli = require('structured-cli');
const Chalk = require('chalk');
const path = require('path');
const config = require('lib/config');

const Package = require('../package.json');
const scope = path.basename(process.argv[1]);

const cli = Cli.createCategory('app', {
    description: Package.description,
    version: Package.version,
    epilog: `${Chalk.underline('Sample usage:')  }\n`
        + '1. Login to your account:' + `\n${
         Chalk.bold(`  $ ${scope} login user@example.org`)  }\n`
        + '2. Select tenant:' + `\n${
         Chalk.bold(`  $ ${scope} tenant select <objectid>`)  }\n`
});

cli.addChild(require('./config'));
cli.addChild(require('./user'));
cli.addChild(require('./login'));
cli.addChild(require('./tenant'));

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

const printArguments = (element, prefix) => {
    element.forEach(entry => {

       const field = [];
       if (entry.options) {
           field.push(...Object.entries(entry.options).map(([name, value]) => {
                if(value.required){
                    return `--${name} ${name.toUpperCase()}`
                }
                return `[--${name} ${name.toUpperCase()}]`
           }))
       }
       if (entry.params) {
           field.push(...Object.entries(entry.params).map(([name, value]) => {
                if(value.required){
                    return `${name}`
                }
                return `[${name}]`
           }))
       }
       const field_help = field.join(' ');
       console.log(`${prefix} ${entry.name} | ${field_help}`);

       if (!entry.children) {
            return
       }
       printArguments(entry.children, `${prefix} ${entry.name}`);
    });
};

printArguments(cli.children, 'h1');

// load plugins
config.plugins.forEach(plugin => plugin.load(cli));

cli.run = () => Cli.run(cli).then(data => { config.store(); return data; });

module.exports = cli;
