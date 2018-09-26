'use strict';

const genericResource = require('bin/generic');

module.exports = (parent) => {

    const resource = {
        name: 'rule',
        description: `Manage your ${parent.title} network access control rule`,
        // eslint-disable-next-line quotes
        defaultQuery: '[].{id:_id,name:name,type:type,value:value}',
        plugins: parent.plugins,
        options: parent.options,
        url: args => `${parent.url(args)}/networkAcl`,
        commands: ['show', 'list', 'rename', 'delete'],
        title: 'network access rule',
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource));

    return category;
};
