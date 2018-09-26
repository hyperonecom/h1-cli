'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'network',
    defaultQuery: '[].{id:_id,name:name,type:type,address:address,tags:join(\',\',keys(tag || `{}`) ) }',
    title: 'network',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./ip'));

module.exports = category;
