'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'ip'
    ,defaultQuery: '[].{id:_id,address:address,mac:mac,ptrRecord:ptrRecord,network:network,processing:processing,fip:associated.fip,state:state}'
};

const category = genericResource(resource);

category.addChild(require('./disassociate'));
category.addChild(require('./associate'));
category.addChild(require('./create'));
category.addChild(require('./ptr'));

module.exports = category;
