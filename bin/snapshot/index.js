'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'snapshot',
    defaultQuery: '[].{id:_id,name:name,size:sizeUsed,state:state,processing:processing}',
    url: () => 'snapshot',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));

module.exports = category;
