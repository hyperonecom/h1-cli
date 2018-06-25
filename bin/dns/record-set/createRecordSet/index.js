'use strict';

const Cli = require('lib/cli');

const addTrailingDot = require('../../lib').addTrailingDot;
const formatRecordName = require('../../lib').formatRecordName;
const recordOptions = require('../common').recordOptions;

const options = {
    name: {
        description: 'Record Set name',
        type: 'string',
        required: true,
    },
    ttl: {
        description: 'Record Set Time To Live (TTL)',
        type: 'int',
        defaultValue: 3600,
    },
};

const handleCreate = args => {

    const url = args.$node.parent.config.url(args);

    args.zone = addTrailingDot(args.zone);


    const data = {
        name: formatRecordName(args.name, args.zone),
        ttl: args.ttl,
        records: args.values.map(value => ({ content: value, disabled: false })),
    };

    return args.helpers.api
        .post(url, data)
        .then(result => args.helpers.sendOutput(args, result))
    ;
};

module.exports = (resource) => Cli.createCommand('create', {
    dirname: __dirname,
    description: 'Create record-set',
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options, recordOptions),
    handler: handleCreate,
});
