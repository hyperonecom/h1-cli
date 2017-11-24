'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'iso',
    defaultQuery: '[].{id:_id,name:name,size:size,state:state,processing:processing}',
    url: () => 'iso',
    extraCommands: ['rename']
};

const category = genericResource(resource);

category.addChild(require('bin/generic/access')(resource));

category.addChild(require('./create'));

module.exports = category;
