'use strict';

const genericResource = require('bin/generic');

module.exports = resource => {

    const category = genericResource({
        name: 'credentials',
        defaultQuery: '[].{id:_id,name:name,type:type,created:createdOn}',
        url: args => `${resource.url(args)}/certificate`,
        commands: ['list', 'delete'],
        params: resource.params,
        options: resource.options,
        resource: resource,
    });

    category.addChild(require('./add')(resource));

    return category;
};

