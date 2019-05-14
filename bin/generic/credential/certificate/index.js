'use strict';

const genericResource = require('bin/generic');

module.exports = resource => {

    const category = genericResource({
        name: 'cert',
        defaultQuery: resource.defaultQuery,
        url: args => `${resource.url(args)}/certificate`,
        commands: ['show', 'rename', 'list', 'delete'],
        options: resource.options,
        title: `certificate to ${resource.title}`,
        context: resource.context,
        resource: resource,
    });

    category.addChild(require('./add')(resource));

    return category;
};
