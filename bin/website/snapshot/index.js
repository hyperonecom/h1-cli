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
        name: {
            description: 'Snapshot name',
            type: 'string',
            required: true,
            onCreate: true,
        },
    };

    const resource = {
        name: 'snapshot',
        defaultQuery: '[].{id:id}',
        url: args => `${parent.url(args)}/${args[parent.name]}/snapshot`,
        options: Object.assign({}, parent.options, options),
        plugins: genericDefaults.plugins,
        commands: ['show', 'create', 'list', 'delete'],
        extraCommands: [],
        schema: schema,
        dirname: __dirname,
        title: `snapshot of ${parent.title}`,
        context: {
            showParams: `--${parent.name} my-${parent.name}`,
            listParams: `--${parent.name} my-${parent.name}`,
            deleteParams: `--${parent.name} my-${parent.name}`,
        },
    };

    const category = genericResource(resource);

    category.addChild(require('./download')(resource));

    return category;
};
