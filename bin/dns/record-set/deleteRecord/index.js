'use strict';

const Cli = require('lib/cli');

const addTrailingDot = require('../../lib').addTrailingDot;
const formatRecordName = require('../../lib').formatRecordName;
const recordOptions = require('../common').recordOptions;

const handleDeleteRecord = args => {

    args.zone = addTrailingDot(args.zone);
    const name = formatRecordName(args.name, args.zone);
    const url = `${args.$node.parent.config.url(args)}/${name}`;

    return args.helpers.api
        .get(url)
        .then(rset => {
            rset.records = rset.records.filter(record => !args.values.includes(record.content));

            return args.helpers.api
                .patch(url, rset)
                .then(result => args.helpers.sendOutput(args, result))
            ;
        });
};

const options = {
    name: {
        description: 'Record Set name',
        type: 'string',
        required: true,
    },
};


module.exports = (resource) => Cli.createCommand('delete-record', {
    dirname: __dirname,
    description: 'Delete record',
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options, recordOptions),
    handler: handleDeleteRecord,
});
