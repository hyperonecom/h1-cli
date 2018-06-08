'use strict';

const Cli = require('structured-cli');

const resource = {
    name: 'dns',
    title: 'DNS'
};

const category = Cli.createCategory(resource.name.toLowerCase(), {
    description: `Manage your ${resource.title} - zones and records`
});

category.addChild(require('./zone'));
category.addChild(require('./record-set'));

module.exports = category;
