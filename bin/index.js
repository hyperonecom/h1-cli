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

if (config.get('profile.apiKey') || process.env.NODE_ENV !== 'production') {
    cli.addChild(require('./user'));
    cli.addChild(require('./project'));
    cli.addChild(require('./service'));
}

const cli_resources = [
    'vm', 'disk', 'image', 'iso', 'network', 'ip',
    'dns', 'netgw', 'firewall', 'vault', 'snapshot',
    'replica',
];


const cli_config = config.get('cli', {});

if ('resources' in cli_config) {
    cli_resources
        .filter(resource => cli_config.resources.includes(resource))
        .forEach(resource => cli.addChild(require(`./${resource}`)));
}

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
            const option = Cli.get_commnad_option(children, key);
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
});


applyDefault(cli, config.get('defaults', {}));

// load plugins
config.plugins.forEach(plugin => plugin.load(cli));

cli.run = () => Cli.run(cli).then(data => {
    config.store();
    return data;
});

module.exports = cli;
