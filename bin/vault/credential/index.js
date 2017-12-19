'use strict';

const genericResource = require('bin/generic');

const params = {
    id: {
        description: 'Vault id'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => {

    const defaults = {
        name: 'credential'
      , defaultQuery: '[].{id:_id,name:name,type:type}'
      , url: args => `${resource.url(args)}/${args.id}/credential`
      , commands: []
      , params: params
      , plugins: resource.plugins
    };

    const category = genericResource(defaults);

    category.addChild(require('./certificate')(defaults));
    category.addChild(require('./password')(defaults));

    return category;
};
