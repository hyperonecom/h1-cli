'use strict';
// const genericDefaults = require('bin/generic/defaults');
// const genericResource = require('bin/generic');
// const text = require('lib/text');
const Cli = require('lib/cli');

module.exports = (resource) => {

    const category = Cli.createCategory('config', {
        description: 'Manage config of integrated software',
        priority: 25,
    });

    category.addChild(require('./docker')(resource));

    return category;
};
