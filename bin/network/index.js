'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'network',
    defaultQuery: '[].{id:_id,name:name,type:type,address:address,processing:processing}',
    title: 'network',
    extraCommands: ['rename'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./ip'));

module.exports = category;
