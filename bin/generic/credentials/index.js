'use strict';

const genericResource = require('bin/generic');

module.exports = resource => {

    const category = genericResource({
        name: 'credentials',
        defaultQuery: '[].{id:_id,name:name,type:type,created:createdOn}',
        url: args => `${resource.url(args)}/certificate`,
        commands: ['show', 'list', 'delete', 'rename'],
        params: resource.params,
        options: resource.options,
        context: resource.context,
        resource: resource,
    });

    category.addChild(require('./add')(resource));

    return category;
};

