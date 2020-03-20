'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

module.exports = (parent) => {

    const resource = {
        name: 'env',
        defaultQuery: '[].{id:id, name:name, value:value}',
        url: args => `${parent.url(args)}/env`,
        options: parent.options,
        plugins: genericDefaults.plugins,
        dirname: __dirname,
        commands: ['create', 'show', 'list', 'delete', 'access/resource'],
        extraCommands: [],
        schema: {
            name: {
                description: 'Environment variable name',
                type: 'string',
                required: true,
                onCreate: true,
            },
            value: {
                description: 'Environment variable value',
                type: 'string',
                required: true,
                onCreate: true,
            },
        },
        title: `environment variables of ${parent.title}`,
    };

    return genericResource(resource);
};
