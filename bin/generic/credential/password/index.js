'use strict';

const genericResource = require('bin/generic');

module.exports = resource => {
    const childResource = Object.assign({},
        resource,
        {
            url: args => `${resource.url(args)}/password`,
        },
    );

    const category = genericResource({
        name: 'password',
        defaultQuery: resource.defaultQuery,
        commands: ['show', 'list', 'rename', 'delete'],
        options: resource.options,
        title: `password to ${resource.title}`,
        context: resource.context,
        resource: resource,
    });

    category.addChild(require('./add')(childResource));

    return category;
};

