'use strict';

const Cli = require('lib/cli');

const addTrailingDot = require('../../lib').addTrailingDot;
const formatRecordName = require('../../lib').formatRecordName;

const handleDelete = args => {
    args.zone = addTrailingDot(args.zone);

    const name = formatRecordName(args.name, args.zone);
    const url = `${args.$node.parent.config.url(args)}/${name}`;

    return args.helpers.api
        .delete(url)
        .then(result => args.helpers.sendOutput(args, result))
    ;
};

const options = {
    name: {
        description: 'Record Set name',
        type: 'string',
        required: true,
    },
};

module.exports = (resource) => Cli.createCommand('delete', {
    dirname: __dirname,
    description: 'Delete record-set',
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    handler: handleDelete,
});
