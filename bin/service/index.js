'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'service'
    , defaultQuery: '[].{id:_id,resource:resource,type:type,name:name}'
    , commands: ['list', 'show']
};

const category = genericResource(resource);

module.exports = category;
