'use strict';

const genericResource = require('bin/generic');

module.exports = parent => {

    const resource = {
        name: 'cert',
        defaultQuery: parent.defaultQuery,
        url: parent.url,
        commands: [],
        options: parent.options,
        description: `Manage your certificate ${parent.title}`,
        title: `certificate ${parent.title}`,
        context: parent.context,
        plugins: parent.plugins,
        deprecated: true,
        credential_types: parent.credential_types,
        resource: parent,
    };

    const category = genericResource(resource);

    ['list', 'show', 'rename', 'delete'].forEach(cmd => {
        category.addChild(require(`bin/generic/${cmd}`)(Object.assign({}, resource, {
            url: args => `${resource.url(args)}/credential/certificate`,
        })));
    });

    category.addChild(require('./add')(resource));
    category.addChild(require('./../listType')(resource, 'certificate'));

    return category;
};
