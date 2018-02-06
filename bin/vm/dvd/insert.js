'use strict';

const Cli = require('structured-cli');

const options = {
    iso: {
        description: 'ISO id'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('insert', {
    description: 'Insert ISO into DVD drive'
  , plugins: resource.plugins
  , params: resource.params
  , options: Object.assign({}, options, resource.options)
  , handler: args => args.helpers.api
        .put(args.$node.parent.config.url(args), { iso: args.iso })
        .then(result => args.helpers.sendOutput(args, result))
});
