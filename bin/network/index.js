'use strict';

const genericResource = require('bin/generic');

const resource = {
    name: 'network',
    defaultQuery: '[].{id:id,name:name,type:type,firewall:firewall,address:address,tags:join(\',\',keys(tag || `{}`) ) }',
    title: 'Network',
    extraCommands: ['firewall'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./ip'));

module.exports = category;
