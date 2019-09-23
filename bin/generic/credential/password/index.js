'use strict';

const genericResource = require('bin/generic');

module.exports = (parent) => {

    const resource = {
        name: 'password',
        title: `password ${parent.title}`,
        description: `Manage your password ${parent.resource.title}`,
        defaultQuery: parent.defaultQuery,
        url: args => parent.url(args),
        commands: [],
        options: parent.options,
        plugins: parent.plugins,
        context: parent.context,
        deprecated: true,
        prefetch_delete: true,
        credential_types: parent.credential_types,
    };

    const category = genericResource(resource);

    ['list', 'show', 'rename', 'delete'].forEach(cmd => {
        category.addChild(require(`bin/generic/${cmd}`)({ ...resource, url: args => `${resource.url(args)}/credential/password`}));
    });
    category.addChild(require('./add')(resource));
    category.addChild(require('./../listType')(resource, resource.name));

    return category;
};

