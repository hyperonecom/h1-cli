'use strict';

const Cli = require('structured-cli');

const options = {
    tag: {
        description: 'New Tag'
      , type: 'string'
      , action: 'append'
      , required: true
    }
};

const handler = args => {
    const body = {};
    args.tag.forEach(tag => {
        const [ key, value ] = tag.split('=');
        body[key] = value || '';
    });

    return args.helpers.api
        .patch(args.$node.parent.config.url(args), body)
        .then(result => args.helpers.sendOutput(args, result));
};

module.exports = resource => Cli.createCommand('add', {
    description: 'Add a Tag'
  , plugins: resource.plugins
  , params: resource.params
  , options: Object.assign(options, resource.options)
  , handler: handler
});
