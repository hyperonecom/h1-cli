'use strict';

const Cli = require('lib/cli');

const category = Cli.createCategory('autocomplete', {
    description: 'Manage autocomplete for CLI',
    priority: 25,
});

category.addChild(require('./init'));
category.addChild(require('./remove'));

module.exports = category;
