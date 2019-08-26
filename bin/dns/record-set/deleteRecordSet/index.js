'use strict';

const Cli = require('lib/cli');

const findRRset = require('../../lib').findRRset;

const options = {
    name: {
        description: 'Record set name',
        type: 'string',
        required: true,
    },
};

module.exports = (resource, type) => Cli.createCommand('delete', {
    dirname: __dirname,
    description: 'Delete record set',
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    resource: resource,
    handler: async args => {
        const rset = await findRRset(resource, args, type);
        const url = `${resource.url(args)}/recordset/${rset.id}`;

        return args.helpers.api.delete(url)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
