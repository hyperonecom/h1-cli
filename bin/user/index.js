'use strict';

const Cli = require('lib/cli');

const resource = {
    name: 'user',
    title: 'user'
};

const childDefaults = {
    url: () => 'user/me'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
};

const category = Cli.createCategory(resource.name, {
    description: `Manage your ${resource.title}`
});

category.addChild(require('./create'));

category.addChild(require('bin/generic/credentials')(Object.assign(
    {}
  , resource
  , childDefaults
  , { url: args => `${childDefaults.url(args)}/credential`}
)));

category.addChild(require('./2fa')(childDefaults));

module.exports = category;
