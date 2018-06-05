'use strict';

const Cli = require('structured-cli');

const interactive = require('lib/interactive');

const params = {
    'delete-id': {
        description: 'Resource name or ID'
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
  , handler: async args => {
        if (!args.yes) {
            const answer = await interactive.confirm(`Are you sure you want to delete resource "${args['delete-id']}"?`);
            if (answer.value !== true) {
                throw Cli.error.cancelled('Canceled', undefined);
            }
        }

        const result = await args.helpers.api.delete(`${resource.url(args)}/${args['delete-id']}`, args.helpers.body || {});

        return args.helpers.sendOutput(args, result);
    }
});
