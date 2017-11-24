'use strict';

const Cli = require('structured-cli');

const options = {
    rule: {
        description: 'Rule identifier'
      , type: 'string'
      , required: true
    }
};

module.exports = (table, resource) => Cli.createCommand('remove', {
    description: 'Remove'
  , plugins: resource.plugins
  , params: resource.params
  , options: Object.assign(options, resource.options)
  , handler: args => args.helpers.api.delete(`firewall/${args.id}/${table}/${args.rule}`)
});
