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
        size: {
            description: 'New size'
          , type: 'int'
          , required: true
        }
    };

    return Cli.createCommand('resize', {
        description: `Resize ${resource.title}`
        , plugins: resource.plugins
        , params: resource.params
        , options: options
        , handler: args => args.helpers.api
            .post(`${resource.url(args)}/${args.id}/actions`, {
                name: 'resize'
                , data: {
                    size: args.size
                }
            })
            .then(result => args.helpers.sendOutput(args, result))
    });
};
