'use strict';

const Cli = require('structured-cli');

module.exports = function(resource) {

    const category = Cli.createCategory('access', {
        description: `Manage your ${resource.name.toUpperCase()} Access Rights`,
        defaultQuery: '[].{id:id,role:role}',
        url: args => `${resource.url(args)}/accessrights`,
        params: resource.params
    });

    category.addChild(require('./grant')(resource));
    category.addChild(require('./revoke')(resource));

    category.addChild(require('bin/generic/list')(resource));

    return category;
};
