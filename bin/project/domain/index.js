'use strict';

const genericResource = require('bin/generic');

module.exports = parent => {

    const resource = {
        name: 'domain',
        description: `Manage your ${parent.title} domains`,
        defaultQuery: '[].{_id:_id,name:name,challenge:challenge}',
        url: args => `${parent.url(args)}/domainVerification`,
        params: parent.params,
        options: parent.options,
        commands: ['show', 'list', 'delete' ],
        plugins: parent.plugins,
        title: 'validated domain',
        dirname: __dirname,
        context: {
            deleteParams: '--project my-project',
            showParams: '--project my-project',
            listParams: '--project my-project',
        },
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource));

    return category;
};
