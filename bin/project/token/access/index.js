'use strict';

const genericResource = require('bin/generic');


module.exports = parent => {

    const options = Object.assign({}, {
        token: {
            description: 'Token ID',
            type: 'string',
            required: true,
        },
    }, parent.options);

    const resource = {
        name: 'access',
        plugins: parent.plugins,
        description: `Manage your ${parent.name} access`,
        defaultQuery: '[].{id:_id,method:method,path:path}',
        url: args => `${parent.url(args)}/${args.token}/access`,
        params: parent.params,
        options: options,
        commands: ['list', 'show', 'delete'],
        title: 'access rule',
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource));

    return category;
};

