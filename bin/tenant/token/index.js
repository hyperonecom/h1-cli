'use strict';

const genericResource = require('bin/generic');

module.exports = parent => {

    const resource = {
        name: 'token'
      , description: `Manage your ${parent.name.toUpperCase()} tokens`
      , defaultQuery: '[].{token:_id,name:name,createdOn:createdOn,createdBy:createdBy}'
      , url: args => `${parent.url(args)}/credential/authtoken`
      , params: parent.params
      , commands: ['list', 'delete']
      , plugins: parent.plugins
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource));
    category.addChild(require('./access')(resource));

    return category;
};

