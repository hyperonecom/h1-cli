'use strict';

const genericResource = require('bin/generic');

module.exports = parent => {

    const resource = {
        name: 'cert',
        defaultQuery: parent.defaultQuery,
        url: args => `${parent.url(args)}/credential`,
        commands: ['show', 'rename', 'list', 'delete'],
        options: parent.options,
        title: `certificate to ${parent.resource.title}`,
        context: parent.context,
        deprecated: true,
        credential_types: parent.credential_types,
        resource: parent,
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource));
    category.addChild(require('./../listType')(resource, parent.name));

    return category;
};
