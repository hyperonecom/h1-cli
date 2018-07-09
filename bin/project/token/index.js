'use strict';

const genericResource = require('bin/generic');

module.exports = parent => {

    const resource = {
        name: 'token',
        description: `Manage your ${parent.title} tokens`,
        defaultQuery: '[].{token:_id,name:name,createdOn:createdOn,createdBy:createdBy}',
        url: args => `${parent.url(args)}/credential/authtoken`,
        params: parent.params,
        options: parent.options,
        commands: ['show', 'list', 'delete', 'rename'],
        plugins: parent.plugins,
        title: 'token',
        dirname: __dirname,
        context: {
            historyParams: '--project my-project',
            deleteParams: '--project my-project',
        },
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource));
    category.addChild(require('./access')(resource));

    return category;
};

