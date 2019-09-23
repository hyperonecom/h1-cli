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

const loadModules = (cli, modules) => modules
    .filter(resource => process.argv.includes(resource) || // load if apply to resource
        process.env.NODE_ENV !== 'production' || // optimize only in production for docs, tests etc.
        process.argv.filter(x => x.startsWith('--')).length < 3 // allow "h1 --help"
    )
    .forEach(resource => cli.addChild(require(`./${resource}`)));

loadModules(cli, [
    'config',
    'login',
]);

if (config.get('profile.apiKey') || process.env.NODE_ENV !== 'production') {
    loadModules(cli, [
        'project',
        'user',
        'service',
        'organisation',
        'logout',
        'env',
    ]);
}

loadModules(cli, [
    'agent',
    'container',
    'database',
    'disk',
    'dns',
    'firewall',
    'image',
    'ip',
    'iso',
    'journal',
    'netgw',
    'network',
    'registry',
    'replica',
    'reservation',
    'snapshot',
    'vault',
    'vm',
    'volume',
    'website',
]);

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

    context = { ...context, ...options.context};

    if (options.dirname && process.argv.includes('--help')) {
        epilog.examples(node, options.dirname, context);
    }

    if (node.createOptions.earlyAdoptersOnly && !config.isEarlyAdopters()) {
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
