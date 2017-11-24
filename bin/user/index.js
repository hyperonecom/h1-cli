'use strict';

/*
const genericResource = require('bin/generic');

const category = genericResource({
    name: 'credentials'
  , defaultQuery: '[].{id:_id,name:name,type:type,created:createdOn}'
  , url: args => `${resource.url(args)}/certificate`
  , commands: ['list', 'delete']
  , params: resource.params
});
*/

const Cli = require('structured-cli');

const category = Cli.createCategory('user', {
    description: 'Manage your User'
});

category.addChild(require('./create'));

category.addChild(require('bin/generic/credentials')({
    url: () => 'user/credential'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
}));

module.exports = category;
