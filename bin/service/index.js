'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'service',
    description: 'Explore available services',
    defaultQuery: '[].{id:id, name:name, resource:resource, type:type, PLN:billing.price.PLN, period:billing.period}',
    plugins: genericDefaults.plugins,
    url: () => 'service',
    commands: [ 'show', 'access/resource'],
    title: 'Service',
};

const category = genericResource(resource);

category.addChild(require('./list')(resource));

module.exports = category;
