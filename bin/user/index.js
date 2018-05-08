'use strict';

const Cli = require('structured-cli');

const category = Cli.createCategory('user', {
    description: 'Manage your User'
});

category.addChild(require('./create'));

category.addChild(require('bin/generic/credentials')({
    url: () => 'user/me/credential'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
}));

module.exports = category;
