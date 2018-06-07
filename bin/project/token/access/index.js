'use strict';

const genericResource = require('bin/generic');

module.exports = parent => {

    const resource = {
        name: 'access'
      , plugins: parent.plugins
      , description: `Manage your ${parent.name.toUpperCase()} token access`
      , defaultQuery: '[].{id:_id,method:method,path:path}'
      , url: args => `${parent.url(args)}/${args.token}/access`
      , params: parent.params
      , options: Object.assign({
            token: {
                description: 'token id'
              , type: 'string'
              , required: true
            }
        }, parent.options)
      , commands: ['list', 'delete']
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource));

    return category;
};

