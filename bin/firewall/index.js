'use strict';

const genericResource = require('bin/generic');
const genericDefaults = require('bin/generic/defaults');

const resource = {
    name: 'firewall',
    defaultQuery: '[].{id:_id,name:name,network:network,state:state,processing:processing}',
    url: () => 'firewall',
    plugins: genericDefaults.plugins,
    title: 'firewall',
    extraCommands: ['rename' ],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./attach')(resource));
category.addChild(require('./detach')(resource));
category.addChild(require('./rule')('ingress', resource));
category.addChild(require('./rule')('egress', resource));

module.exports = category;
