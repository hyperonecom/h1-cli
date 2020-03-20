'use strict';

const Cli = require('lib/cli');

const category = Cli.createCategory('docker', {
    description: 'Docker credentials helper',
});

category.addChild(require('./get'));

module.exports = category;
