'use strict';

const Cli = require('lib/cli');
const fs = require('fs');

module.exports = resource => {
    const options = {
        snapshot: {
            description: 'Snapshot name or ID',
            type: 'string',
            required: true,
        },
        'destination-file': {
            description: 'Path to .vhdx file to save',
            type: 'string',
            required: true,
        },
        'no-progress': {
            description: 'Disable progress bar',
            type: 'boolean',
        },
        difference: {
            description: 'Snapshot relative to which difference should be downloaded',
            type: 'string',
        },
    };

    return Cli.createCommand('download', {
        description: `Download ${resource.title} to a ZFS file`,
        options: { ...resource.options, ...options},
        dirname: __dirname,
        resource: resource,
        handler: async args => {
            const writeStream = fs.createWriteStream(args['destination-file']);
            return new Promise((resolve, reject) => {
                const req = args.helpers.api
                    .download(`${resource.url(args)}/${args[resource.name]}/download`)
                    .query({incremental: args.incremental});
                req.on('error', reject);
                req.on('end', resolve);
                req.pipe(writeStream);
            });
        },
    });
};
