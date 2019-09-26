'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'ip',
    title: 'IP address',
    defaultQuery: '[].{id:id, name:name, type:flavour, address:address, mac:mac, ptrRecord:ptrRecord, network:network, fip:associated.fip, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    commands: ['list', 'show', 'delete', 'history', 'tag', 'transfer', 'service'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./associate')(resource));
category.addChild(require('./disassociate')(resource));
category.addChild(require('./ptr')(resource));

module.exports = category;
