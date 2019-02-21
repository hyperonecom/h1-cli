'use strict';

const Cli = require('lib/cli');

module.exports = resource => {
    const category = Cli.createCategory('notification', {
        description: 'Manage your notifications',
    });

    category.addChild(require('./credits')(Object.assign({}, resource, {
        url: args => `${resource.url(args)}/threshold/credits/levels`,
    })));

    return category;
};
