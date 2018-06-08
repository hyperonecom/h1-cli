'use strict';

const Cli = require('structured-cli');

const options = {
    all: {
        description: 'Display all projects'
      , type: 'boolean'
      , defaultValue: false
    }
};

module.exports = resource => Cli.createCommand('list', {
    description: `List ${resource.title}`
  , plugins: resource.plugins
  , options: options
  , handler: args => args.helpers.api
        .get(resource.url(args), args.all ? {} : { active: true })
        .then(result => args.helpers.sendOutput(args, result))
});
