'use strict';

const genericResource = require('bin/generic');

module.exports = resource => {

    const category = genericResource({
        name: 'password',
        defaultQuery: resource.defaultQuery,
        url: args => `${resource.url(args)}/password`,
        commands: ['list', 'delete'],
        options: resource.options,
        title: 'password to Vault',
    });

    category.addChild(require('./add')(resource));

    return category;
};

