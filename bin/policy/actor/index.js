'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

module.exports = (parent) => {

    const resource = {
        name: 'actor',
        defaultQuery: '[].{id:id, value:value}',
        url: args => `${parent.url(args)}/actor`,
        options: parent.options,
        plugins: genericDefaults.plugins,
        dirname: __dirname,
        commands: ['create', 'show', 'list', 'delete'],
        extraCommands: [],
        schema: {
            value: {
                description: 'Actor value',
                type: 'string',
                required: true,
                onCreate: true,
            },
        },
        title: `actor of ${parent.title}`,
    };

    return genericResource(resource);
};
