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
        purpose: {
            type: 'string',
            description: 'Purpose',
            choices: ['logs'],
            required: true,
            onCreate: true,
        },
        actor: {
            description: 'Actor ID',
            type: 'string',
            required: true,
            onCreate: true,
        },
        resource: {
            description: 'Target resource ID',
            type: 'string',
            required: true,
            onCreate: true,
        },
    };

    const resource = {
        name: 'link',
        defaultQuery: '[].{id:id, purpose: purpose, actor:actor, resource:resource}',
        url: args => `${parent.url(args)}/${args[parent.name]}/link`,
        options: Object.assign({}, parent.options, options),
        plugins: genericDefaults.plugins,
        commands: ['show', 'create', 'list', 'delete', 'access/resource'],
        extraCommands: [],
        schema: schema,
        dirname: __dirname,
        title: `link of ${parent.title}`,
        context: {
            showParams: `--${parent.name} my-${parent.name}`,
            listParams: `--${parent.name} my-${parent.name}`,
            deleteParams: `--${parent.name} my-${parent.name}`,
        },
    };

    const category = genericResource(resource);

    return category;
};
