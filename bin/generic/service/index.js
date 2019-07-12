'use strict';

const Cli = require('lib/cli');
const text = require('lib/text');
const genericDefaults = require('bin/generic/defaults');

module.exports = (parent) => {
    const availableCommands = {
        list: {
            path: './list',
            url: args => `${parent.url(args)}/${args[parent.name]}/services`,
        },
        show: {
            path: './../show',
            url: args => `${parent.url(args)}/${args[parent.name]}/services`,
        },
        change: {
            path: './change',
            url: args => `${parent.url(args)}/${args[parent.name]}`,
        },
    };

    const resource = {
        title: `Service for ${parent.title}`,
        name: 'service',
        url: args => `${parent.url(args)}/${args[parent.name]}/services`,
        commands: ['show', 'list'],
        plugins: genericDefaults.plugins,
        context: Object.assign({}, parent.context, {
            parent_name: parent.name,
            showParams: `--${parent.name} my-${parent.name}`,
        }),
        options: Object.assign({}, parent.options, {
            [parent.name]: {
                description: `${text.toTitleCase(parent.title)} ID or name`,
                type: 'string',
                required: true,
            },
        }),
    };

    const cmd = parent.serviceCommands || ['list', 'show'];

    const category = Cli.createCategory(resource.name, {
        description: `Manage your services of ${parent.title}`,
        defaultQuery: '[].{id:id,name:name,type:type}',
        context: parent.context,
        resource: resource,
    });

    cmd.forEach(cmd =>
        category.addChild(require(availableCommands[cmd].path)(
            Object.assign({}, resource, {
                url: availableCommands[cmd].url,
            })
        ))
    );

    return category;
};
