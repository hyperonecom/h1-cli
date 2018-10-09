'use strict';

const Cli = require('lib/cli');

const addTrailingDot = require('../../lib').addTrailingDot;
const formatRecordName = require('../../lib').formatRecordName;

const options = {
    name: {
        description: 'Record Set name',
        type: 'string',
        required: true,
    },
};


module.exports = resource => Cli.createCommand('dynamic-dns', {
    dirname: __dirname,
    description: 'Replaces the record-set with the client ip address',
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    resource: resource,
    handler: args => {

        args.zone = addTrailingDot(args.zone);
        const name = formatRecordName(args.name, args.zone);
        const url = `${args.$node.parent.config.url(args)}/${name}/ddns`;

        return args.helpers.api
            .put(url, {})
            .then(result => args.helpers.sendOutput(args, result));

    },
});
