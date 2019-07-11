'use strict';

const Cli = require('lib/cli');

const addTrailingDot = require('../../lib').addTrailingDot;
const formatRecordName = require('../../lib').formatRecordName;
const recordOptions = require('../common').recordOptions;

const options = {
    name: {
        description: 'Record set name',
        type: 'string',
        required: true,
    },
};


module.exports = resource => Cli.createCommand('add-record', {
    dirname: __dirname,
    description: 'Add record',
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options, recordOptions),
    resource: resource,
    handler: async args => {

        args.zone = addTrailingDot(args.zone);
        const name = formatRecordName(args.name, args.zone);
        const url = `${resource.url(args)}/${name}`;

        const new_records = args.values.map(value => ({
            content: value,
            disabled: false,
        }));

        const rset = await args.helpers.api.get(url);
        rset.records.push(...new_records);

        return args.helpers.api
            .patch(url, rset)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
