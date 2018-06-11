'use strict';

const Cli = require('structured-cli');

const options = {
    tag: {
        description: 'Tag'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('delete', {
    description: `Add a tag of ${resource.title}`
  , plugins: resource.plugins
  , params: resource.params
  , options: Object.assign(options, resource.options)
  , handler: args => args.helpers.api
        .delete(`${args.$node.parent.config.url(args)}/${args.tag.split('=')[0]}`)
        .then(result => args.helpers.sendOutput(args, result))
});
