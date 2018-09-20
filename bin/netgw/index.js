'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'netgw',
    defaultQuery: '[].{id:_id,name:name,IP:primaryIP,network:network, tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'netgw',
    title: 'network gateway',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./detach')(resource));
category.addChild(require('./attach')(resource));

module.exports = category;
