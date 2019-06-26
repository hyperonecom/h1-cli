#!/usr/bin/env node
'use strict';
require('../lib/injectPath');

const Chalk = require('chalk');

const Cli = require('lib/cli');
const epilog = require('lib/epilog');
const config = require('lib/config');

const Package = require('../package.json');
const scope = process.env.SCOPE_NAME;

const cli = Cli.createCategory(scope, {
    description: Package.description,
    version: Package.version,
    epilog: `
${Chalk.underline('Sample usage:')}
1. Login to your account:'
  ${Chalk.bold(`$ ${scope} login user@example.org`)}
2. Select project:
  ${Chalk.bold(`$ ${scope} project select <project>`)}
`,
});

cli.addChild(require('./config'));
cli.addChild(require('./login'));
cli.addChild(require('./reservation'));
cli.addChild(require('./volume'));
cli.addChild(require('./container'));
cli.addChild(require('./website'));

if (config.get('profile.apiKey') || process.env.NODE_ENV !== 'production') {
    cli.addChild(require('./user'));
    cli.addChild(require('./project'));
    cli.addChild(require('./service'));
    cli.addChild(require('./organisation'));
    cli.addChild(require('./logout'));
    cli.addChild(require('./env'));
}

const cli_resources = [
    'vm', 'disk', 'replica',  'iso', 'network', 'ip', 'dns', 'netgw', 'firewall',
    'vault', 'snapshot', 'image', 'reservation', 'log', 'agent', 'database', 'registry',
];

cli_resources.forEach(resource => cli.addChild(require(`./${resource}`)));

// inject defaultValues from config defaults
const applyDefault = (element, defaults) => {
    Object.entries(defaults).forEach(([name, values]) => {
        const children = element.children.find(children => children.name === name);
        if (!children) {
            return;
        }

        if (children.children) {
            return applyDefault(children, values);
        }

        Object.entries(values).forEach(([key, value]) => {
            const option = Cli.get_command_option(children, key);
            if (!option) {
                return;
            }
            option.defaultValue = value;
            option.required = false;
        });
    });
};



// render & inject markdown examples
Cli.flatten(cli).forEach(node => {
    const options = node.createOptions || {};

    let context = {
        command_name: Cli.get_full_name(node),
        scope: scope,
        scope_uppercase: scope.toUpperCase(),
        scope_full_uppercase: process.env.SCOPE_FULL_NAME.toUpperCase(),

    };
    if (node.parent) {
        context.category_name = Cli.get_full_name(node.parent);
    }

    if (options.resource) {
        context = Object.assign(
            context,
            {
                type: options.resource.name,
                resource_title: options.resource.title,
            },
            options.resource.context,
            options.context);
    }

    context = Object.assign({}, context, options.context);

    if (options.dirname) {
        epilog.examples(node, options.dirname, context);
    }

    if (node.createOptions.earlyAdoptersOnly && !config.is_early_adopters()) {
        node.parent.children = node.parent.children.filter(x => x.name !== node.name);
    }
});

// sort child commands by priority
Cli.flatten(cli).filter(node => node.children).forEach(node => {
    const get_key = (node) => {
        if (!node.createOptions)
            return 50;
        return node.createOptions.priority || 50;
    };

    node.children.sort((a, b) => get_key(a) - get_key(b));
});

applyDefault(cli, config.get('defaults', {}));

// load plugins
config.plugins.forEach(plugin => plugin.load(cli));

cli.run = () => Cli.run(cli).then(data => {
    config.store();
    return data;
});

module.exports = cli;
