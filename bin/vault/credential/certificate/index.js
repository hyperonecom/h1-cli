'use strict';

const genericResource = require('bin/generic');

module.exports = resource => {

    const category = genericResource({
        name: 'cert',
        defaultQuery: resource.defaultQuery,
        url: args => `${resource.url(args)}/certificate`,
        commands: ['list', 'delete'],
        params: resource.params,
        title: 'certificate to Vault',
    });

    category.addChild(require('./add')(resource));

    return category;
};
