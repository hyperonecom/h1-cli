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


module.exports = (resource, type) => Cli.createCommand('delete-record', {
    dirname: __dirname,
    description: 'Delete record',
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options, recordOptions),
    resource: resource,
    handler: async args => {
        const rset = await findRRset(resource, args, type);
        const url = `${resource.url(args)}/recordset/${rset.id}`;

        rset.record = rset.record.filter(record => !args.values.includes(record.content));

        return args.helpers.api
            .patch(url, rset)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
