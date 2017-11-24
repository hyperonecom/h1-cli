'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'network',
    defaultQuery: '[].{id:_id,name:name,type:type,address:address,processing:processing}'
};

const category = genericResource(resource);

category.addChild(require('./create'));
category.addChild(require('./ip'));

module.exports = category;
