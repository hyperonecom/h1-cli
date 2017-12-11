'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'reservation'
  , defaultQuery: '[].{id:_id,name:name,resource:resource,type:services[0].type,assigned:assigned}'
  , url: () => 'reservation'
  , plugins: genericDefaults.plugins
  , commands: [ 'list', 'show' ]
};

const category = genericResource(resource);
category.addChild(require('./create')(resource));
category.addChild(require('./assign')(resource));

module.exports = category;
