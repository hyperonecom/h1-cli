'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');

const resource = {
    name: 'zone',
    defaultQuery: '[].{id:id,name:name}',
    plugins: defaults.plugins,
    url: () => 'dns/zone',
    title: 'DNS zone'
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./export')(resource));

module.exports = category;
