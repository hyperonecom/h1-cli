'use strict';

const Cli = require('lib/cli');

module.exports = (resource) => {

    const category = Cli.createCategory('access', {
        description: `Manage your ${resource.title} access rights`,
    });

    category.addChild(require('bin/generic/rule')(resource));

    return category;
};
