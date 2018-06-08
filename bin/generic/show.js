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
        }
    };

    return Cli.createCommand('show', {
        description: `Show ${resource.title}`
        , plugins: resource.plugins
        , params: resource.params
        , options: options
        , handler: args => args.helpers.api
            .get(`${resource.url(args)}/${args.id}`)
            .then(result => args.helpers.sendOutput(args, result))
    });
};
