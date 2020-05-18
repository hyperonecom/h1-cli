'use strict';

const Cli = require('lib/cli');

const category = Cli.createCategory('auth', {
    description: 'Manage authentication of CLI',
    priority: 25,
});

category.addChild(require('./user'));
category.addChild(require('./status'));
category.addChild(require('./logout'));
category.addChild(require('./azure'));
category.addChild(require('./aws'));
category.addChild(require('./google'));

module.exports = category;
