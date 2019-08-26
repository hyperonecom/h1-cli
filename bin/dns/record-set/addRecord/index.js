'use strict';

const Cli = require('lib/cli');

const findRRset = require('../../lib').findRRset;

const recordOptions = require('../common').recordOptions;

const options = {
    name: {
        description: 'Record set name',
        type: 'string',
        required: true,
    },
};


module.exports = (resource, type) => Cli.createCommand('add-record', {
    dirname: __dirname,
    description: 'Add record',
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options, recordOptions),
    resource: resource,
    handler: async args => {
        const rset = await findRRset(resource, args, type);
        const url = `${resource.url(args)}/recordset/${rset.id}`;

        const new_records = args.values.map(value => ({
            content: value,
            enabled: true,
        }));

        rset.record.push(...new_records);

        return args.helpers.api
            .patch(url, rset)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
