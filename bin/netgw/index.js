'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'netgw'
  , defaultQuery: '[].{id:_id,name:name,IP:primaryIP,processing:processing,network:network._id}'
  , url: () => 'netgw'
  , title: 'network gateway'
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./detach')(resource));
category.addChild(require('./attach')(resource));
category.addChild(require('bin/generic/access')(resource));

module.exports = category;
