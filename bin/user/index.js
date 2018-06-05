'use strict';

const Cli = require('structured-cli');

const childDefaults = {
    url: () => 'user/me'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
};

const category = Cli.createCategory('user', {
    description: 'Manage your User'
});

category.addChild(require('./create'));

category.addChild(require('bin/generic/credentials')(Object.assign(
    {}
  , childDefaults
  , { url: args => `${childDefaults.url(args)}/credential`}
)));

category.addChild(require('./2FA')(childDefaults));

module.exports = category;
