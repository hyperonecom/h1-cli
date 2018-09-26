'use strict';

const Cli = require('lib/cli');

module.exports = resource => {
    const category = Cli.createCategory('credits', {
        description: 'Manage your threshold of credit limits',
        defaultQuery: '[].{limit: @}',
    });

    category.addChild(require('./add')(resource));
    category.addChild(require('./list')(resource));
    category.addChild(require('./delete')(resource));

    return category;
};
