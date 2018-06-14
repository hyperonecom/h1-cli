'use strict';

const Cli = require('lib/cli');

module.exports = resource => {

    resource.title = 'authentication factory';

    const category = Cli.createCategory('2fa', {
        description: 'Manage two factor authentication',
        url: () => 'user/me/credential/password',
        defaultQuery: '[].{id: _id, type: type, name: name, createdOn: createdOn}'
    });

    category.addChild(require('./enable')(resource));
    category.addChild(require('./disable')(resource));
    category.addChild(require('bin/generic/list')(resource));

    return category;
};
