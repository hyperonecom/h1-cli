'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

module.exports = (parent) => {
    const schema = {
        project: {
            description: 'Project ID',
            type: 'string',
            required: true,
        },
    };

    const resource = {
        name: 'invitation',
        defaultQuery: '[].{id:id,name:name,type:type}',
        url: () => 'user/me/invitation',
        options: Object.assign({}, parent.options),
        plugins: genericDefaults.plugins,
        commands: ['list'],
        extraCommands: [],
        schema: schema,
        title: `invitation of ${parent.title}`,
    };

    const category = genericResource(resource);

    ['decline', 'accept'].forEach(action => {
        category.addChild(require('./update')(resource, action));
    });

    return category;
};
