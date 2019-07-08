'use strict';

const genericResource = require('bin/generic');

module.exports = (parent) => {

    const resource = {
        name: 'password',
        title: `password to ${parent.resource.title}`,
        description: `Manage your password ${parent.resource.title}`,
        defaultQuery: parent.defaultQuery,
        url: args => parent.url(args),
        commands: ['show', 'rename', 'delete'],
        options: parent.options,
        plugins: parent.plugins,
        context: parent.context,
        deprecated: true,
        credential_types: parent.credential_types,
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource));
    category.addChild(require('./../listType')(resource, resource.name));

    return category;
};

