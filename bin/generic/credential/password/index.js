'use strict';

const genericResource = require('bin/generic/index');

module.exports = resource => {

    const category = genericResource({
        name: 'password',
        defaultQuery: resource.defaultQuery,
        url: args => `${resource.url(args)}/password`,
        commands: ['show', 'list', 'rename', 'delete'],
        options: resource.options,
        title: `password to ${resource.title}`,
        context: resource.context,
        resource: resource,
    });

    category.addChild(require('./add/index')(resource));

    return category;
};

