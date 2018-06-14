'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'ip',
    title: 'IP address',
    defaultQuery: '[].{id:_id,address:address,mac:mac,ptrRecord:ptrRecord,network:network,processing:processing,fip:associated.fip,state:state}',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./associate')(resource));
category.addChild(require('./disassociate')(resource));
category.addChild(require('./ptr')(resource));

module.exports = category;
