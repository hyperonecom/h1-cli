'use strict';

const genericResource = require('bin/generic');

module.exports = parent => {

    const resource = {
        name: 'token',
        description: `Manage your ${parent.title} tokens`,
        defaultQuery: '[].{id:_id,name:name,createdOn:createdOn,createdBy:createdBy}',
        url: args => `${parent.url(args)}/credential/authtoken`,
        params: parent.params,
        options: parent.options,
        commands: ['show', 'list', 'delete', 'rename'],
        plugins: parent.plugins,
        title: 'Token',
        dirname: __dirname,
        context: {
            historyParams: '--project my-project',
            deleteParams: '--project my-project',
        },
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource));

    const childDefaults = Object.assign({}, resource, {
        options: Object.assign({},
            resource.options,
            {
                token: {
                    description: 'Token ID',
                    type: 'string',
                    required: true,
                },
            }
        ),
        url: args => `${resource.url(args)}/${args.token}`,
    });

    category.addChild(require('./access')(childDefaults));
    category.addChild(require('./env')(childDefaults));

    return category;
};

