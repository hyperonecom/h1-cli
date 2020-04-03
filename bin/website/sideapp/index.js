'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const text = require('lib/text');

module.exports = (parent) => {
    const options = {
        [parent.name]: {
            description: `${text.toTitleCase(parent.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };

    const schema = {
        flavour: {
            type: 'string',
            description: 'Flavour name or ID',
            required: true,
            onCreate: true,
        },
    };

    const resource = {
        name: 'sideapp',
        defaultQuery: '[].{id:id, flavour: flavour, url: url}',
        url: args => `${parent.url(args)}/sideapp`,
        options: Object.assign({}, parent.options, options),
        plugins: genericDefaults.plugins,
        commands: ['show', 'create', 'list', 'delete', 'access/resource'],
        extraCommands: [],
        schema: schema,
        dirname: __dirname,
        title: `sideapp of ${parent.title}`,
        context: {
            showParams: `--${parent.name} my-${parent.name}`,
            listParams: `--${parent.name} my-${parent.name}`,
            deleteParams: `--${parent.name} my-${parent.name}`,
        },
    };

    const category = genericResource(resource);

    return category;
};
