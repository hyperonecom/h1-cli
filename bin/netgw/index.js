'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'netgw'
  , defaultQuery: '[].{id:_id,name:name,IP:primaryIP,processing:processing,network:network._id}'
  , url: () => 'netgw'
};

const category = genericResource(resource);

category.addChild(require('bin/generic/access')(resource));

category.addChild(require('./detach'));
category.addChild(require('./attach'));
category.addChild(require('./create'));

module.exports = category;
