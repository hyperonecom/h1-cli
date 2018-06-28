'use strict';

const ProgressBar = require('progress');
const Cli = require('lib/cli');
const fs = require('fs');

const options = {
    disk: {
        description: 'Disk name or ID',
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
};


module.exports = resource => Cli.createCommand('download', {
    description: `Download ${resource.title} to a file`,
    plugins: resource.plugins,
    options: options,
    params: resource.params,
    handler: async args => {

        const disk = await args.helpers.api.get(`${resource.url(args)}/${args.disk}`);

        return new Promise((resolve, reject) => {
            const writeStream = fs.createWriteStream(args['destination-file']);
            const req = args.helpers.api.download(disk.downloadUrl);
            // const req = args.helpers.api.download(`http://localhost:3000/disk/${disk._id}`);
            req.on('error', reject);
            req.on('end', resolve);
            req.on('response', response => {

                if (response.statusCode !== 200) {
                    return reject(`${response.statusMessage} ${response.request.href}`);
                }

                if (!args['no-progress']) {
                    showProgressBar(req, response);
                }

                req.pipe(writeStream);
            });
        });
    },
});

const showProgressBar = (req, response) => {

    console.log();
    const bar = new ProgressBar('  downloading [:bar] :rate/Bps :percent :etas', {
        complete: '=',
        incomplete: ' ',
        total: parseInt(response.headers['content-length']),
        stream: process.stderr,
    });
    req.on('data', chunk => bar.tick(chunk.length));
};
