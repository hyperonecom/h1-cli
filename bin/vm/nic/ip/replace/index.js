'use strict';

const Cli = require('lib/cli');

const options = {
    ip: {
        description: 'IP address or ID of attached IP',
        type: 'string',
        required: true,
    },
    'new-ip': {
        description: 'New public IP address or ID of IP',
        type: 'string',
        required: true,
    },

};

module.exports = resource => Cli.createCommand('replace', {
    description: `Replace ${resource.title}`,
    plugins: resource.plugins,
    options: Object.assign({}, resource.options, options),
    dirname: __dirname,
    handler: args => args.helpers.api
        .post(`vm/${args.vm}/netadp/${args.nic}/actions`,
            {
                name: 'ip_replace',
                data: {
                    oldIP: args.ip,
                    newIP: args['new-ip'],
                },
            }
        )
        .then(result => args.helpers.sendOutput(args, result)),
});
