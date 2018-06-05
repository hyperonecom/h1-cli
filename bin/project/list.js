'use strict';

const Cli = require('structured-cli');

const options = {
    all: {
        description: 'display all projects'
      , type: 'boolean'
      , default: false
    }
};

module.exports = resource => Cli.createCommand('list', {
    description: 'Resource list'
  , plugins: resource.plugins
  , options: options
  , handler: args => args.helpers.api
        .get(resource.url(args), args.all ? {} : { active: true })
        .then(result => args.helpers.sendOutput(args, result))
});
