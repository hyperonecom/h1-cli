'use strict';

const Cli = require('structured-cli');

const interactive = require('lib/interactive');

const params = {
    'remove-id': {
        description: 'Identifier'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('delete', {
    description: 'Resource delete'
  , plugins: [
        ...resource.plugins
      , require('bin/_plugins/confirmYes')
    ]
  , params: Object.assign({}, resource.params, params)
  , options: resource.options
  , handler: args => {
        let ret = Promise.resolve();

        if (!args.yes) {
            ret = ret
                .then(() => interactive.confirm(`Are you sure you want to delete resource "${args['remove-id']}"?`))
                .then(answer => {
                    if (answer.value !== true) {
                        throw Cli.error.cancelled('Canceled', undefined);
                    }
                });
        }

        return ret
            .then(() => args.helpers.api.delete(`${resource.url(args)}/${args['remove-id']}`, args.helpers.body || {}))
            .then(result => args.helpers.sendOutput(args, result))
        ;
    }
});
