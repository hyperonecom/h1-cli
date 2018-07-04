'use strict';

const genericResource = require('bin/generic');

module.exports = resource => {

    const category = genericResource({
        name: 'cert',
        defaultQuery: resource.defaultQuery,
        url: args => `${resource.url(args)}/certificate`,
        commands: ['list', 'delete'],
        options: resource.options,
        title: 'certificate to Vault',
        context: resource.context,
    });

    category.addChild(require('./add')(resource));

    return category;
};
