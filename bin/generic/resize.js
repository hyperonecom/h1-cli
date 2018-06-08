'use strict';

const Cli = require('lib/cli');

const text = require('lib/text');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`
          , type: 'string'
          , required: true
        },
        size: {
            description: 'New size'
          , type: 'int'
          , required: true
        }
    };

    return Cli.createCommand('resize', {
          description: `Resize ${resource.title}`
        // , dirname: __dirname
        , plugins: resource.plugins
        , params: resource.params
        , options: options
        , handler: args => args.helpers.api
            .post(`${resource.url(args)}/${args[resource.name]}/actions`, {
                name: 'resize'
                , data: {
                    size: args.size
                }
            })
            .then(result => args.helpers.sendOutput(args, result))
    });
};
