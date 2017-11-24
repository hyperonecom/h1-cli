'use strict';

const genericResource = require('bin/generic');

const params = {
    id: {
        description: 'Resource id'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => {

    const category = genericResource({
        name: 'tag'
      , defaultQuery: '[].{key:key, value:value}'
      , url: args => `${resource.url(args)}/${args.id}/tag`
      , transform: data => Object.entries(data).map(([key, value]) => ({ key, value }))
      , commands: ['list']
      , params: Object.assign({}, resource.params, params)
    });

    resource = Object.assign({}, resource, { params: Object.assign({}, resource.params, params) });

    category.addChild(require('./add')(resource));
    category.addChild(require('./remove')(resource));

    return category;
};
