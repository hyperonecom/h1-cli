'use strict';

const Cli = require('structured-cli');

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
        description: 'Number between 100 and 999 representing priority'
      , type: 'int'
      , required: true
    }
  , filter: {
        description: 'The filter rule in the form of "protocol:format [, protocol:format...]". ' +
        'Protocol as "icmp" / "udp" / "tcp" / "any". Port as numeric value. ' +
        'Example: "tcp:83"'
      , type: 'string'
      , required: true
      , action: 'append'
    }
  , external: {
        description: 'Ip address or network on internal side.'
      , type: 'string'
      , required: true
      , action: 'append'
      , defaultValue: [ '0.0.0.0/0' ]
    }
  , internal: {
        description: 'Resource tags or * for all'
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
                , filter: [...new Set(args.filter)]
                , external: [...new Set(args.external)]
                , internal: [...new Set(args.internal)]
                , action: args.action
            })
            .then(result => args.helpers.sendOutput(args, result.sort((r1, r2) => r1.priority - r2.priority)))
});
