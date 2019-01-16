'use strict';

const Cli = require('lib/cli');
const text = require('lib/text');
const defaults = require('bin/generic/defaults');
const config = require('lib/config');

module.exports = (parent) => {

    const options = {
        [parent.name]: {
            description: `${text.toTitleCase(parent.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };

    if (options.project) {
        const active_project = config.get_active_project();
        options.project = {
            description: `${options.project.description}. Active project by default`,
            type: 'string',
            required: !active_project,
            defaultValue: active_project,
        };
    }
    const resource = {
        title: `access rights for ${parent.title}`,
        description: `Manage your ${parent.title} access rights`,
        defaultQuery: '[].{id:id,role:role}',
        url: args => `${parent.url(args)}/${args[parent.name]}/accessrights`,
        options: options,
        plugins: defaults.plugins,
        context: {
            grantParams: `--${parent.name} my-${parent.name}`,
            revokeParams: `--${parent.name} my-${parent.name}`,
            listParams: `--${parent.name} my-${parent.name}`,
        },
    };

    const category = Cli.createCategory('access', resource);

    category.addChild(require('./grant')(resource));
    category.addChild(require('./revoke')(resource));
    category.addChild(require('bin/generic/list')(resource));

    // category.addChild(require('bin/generic/rule')(resource));

    return category;
};
