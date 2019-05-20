'use strict';

const genericResource = require('bin/generic');

module.exports = (parent, type) => {

    const resource = {
        name: 'password',
        title: `password to ${parent.resource.title}`,
        description: `Manage your password to ${parent.resource.title}`,
        defaultQuery: parent.defaultQuery,
        url: args => `${parent.url(args)}/password`,
        commands: ['show', 'list', 'rename', 'delete'],
        options: parent.options,
        plugins: parent.plugins,
        context: parent.context,
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource, type));

    return category;
};

