'use strict';

const Cli = require('structured-cli');

const options = {
    rule: {
        description: 'Rule identifier'
      , type: 'string'
      , required: true
    }
};

module.exports = (table, resource) => Cli.createCommand('delete', {
    description: `Add ${resource.title}`
  , plugins: resource.plugins
  , params: resource.params
  , options: Object.assign({}, resource.options, options)
  , handler: args => args.helpers.api.delete(`firewall/${args.firewall}/${table}/${args.rule}`)
});
