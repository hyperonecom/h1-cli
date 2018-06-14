'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'snapshot',
    defaultQuery: '[].{id:_id,name:name,size:sizeUsed,state:state,processing:processing}',
    url: () => 'snapshot',
    extraCommands: ['rename'],
};

const category = genericResource(resource);

module.exports = category;
