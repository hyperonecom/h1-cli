'use strict';

const Cli = require('structured-cli');
const _ = require('lodash');

const options = {
    name: {
        description: 'Name'
      , type: 'string'
      , required: true
    }
  , action: {
        description: 'Action'
      , type: 'string'
      , required: true
      , choices: [ 'allow', 'deny' ]
    }
  , priority: {
        description: 'Priority'
      , type: 'int'
      , required: true
    }
  , filter: {
        description: 'Filter'
      , type: 'string'
      , required: true
      , action: 'append'
    }
  , external: {
        description: 'External'
      , type: 'string'
      , required: true
      , action: 'append'
      , defaultValue: [ '0.0.0.0/0' ]
    }
  , internal: {
        description: 'Internal'
      , type: 'string'
      , required: true
      , action: 'append'
      , defaultValue: [ '*' ]
    }
};

module.exports = (table, resource) => Cli.createCommand('add', {
    description: 'Add'
  , plugins: resource.plugins
  , params: resource.params
  , options: Object.assign(options, resource.options)
  , handler: args => args.helpers.api
        .post(`firewall/${args.id}/${table}`, {
            name: args.name
          , priority: args.priority
          , direction: args.direction
          , filter: _.uniq(args.filter)
          , external: _.uniq(args.external)
          , internal: _.uniq(args.internal)
          , action: args.action
        })
        .then(result => args.helpers.sendOutput(args, result.sort((r1, r2) => r1.priority - r2.priority)))
});
