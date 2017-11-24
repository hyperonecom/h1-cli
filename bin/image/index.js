'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'image',
    defaultQuery: '[].{id:_id,name:name,fileSize:ceil(fileSize),created:createdOn,state:state,processing:processing}',
    commands: ['show', 'delete', 'rename'],
    url: () => 'image'
};

const category = genericResource(resource);

category.addChild(require('./create'));
category.addChild(require('./list'));

category.addChild(require('bin/generic/access')(resource));

module.exports = category;
