'use strict';

const Cli = require('lib/cli');

module.exports = resource => {
    const category = Cli.createCategory('notification', {
        description: 'Manage your notifications',
    });

    category.addChild(require('./credits')(resource));

    return category;
};
