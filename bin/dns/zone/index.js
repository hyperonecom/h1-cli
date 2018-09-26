'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');

const resource = {
    name: 'zone',
    defaultQuery: '[].{id:_id,name:name}',
    plugins: defaults.plugins,
    url: () => 'dns/zone',
    title: 'DNS zone',
    commands: ['list', 'show', 'delete'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./import')(resource));
category.addChild(require('./export')(resource));

module.exports = category;
