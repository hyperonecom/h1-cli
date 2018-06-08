'use strict';

const Cli = require('structured-cli');

const text = require('lib/text');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`
          , type: 'string'
          , required: true
          , dest: 'id'
        },
        'new-name': {
            description: 'New name'
          , type: 'string'
          , required: true
        }
    };

    return Cli.createCommand('rename', {
        description: `Rename ${resource.title}`
        , plugins: resource.plugins
        , params: resource.params
        , options: Object.assign({}, resource.options, options)
        , handler: args => args.helpers.api
            .patch(`${args.$node.parent.config.url(args)}/${args.id}`, {
                name: args['new-name']
            })
            .then(result => args.helpers.sendOutput(args, result))
    });
};
