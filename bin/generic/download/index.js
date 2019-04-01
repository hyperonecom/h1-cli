'use strict';
const {showProgressBar} = require('lib/progressBar');
const Cli = require('lib/cli');
const fs = require('fs');
const text = require('lib/text');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
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


    return Cli.createCommand('download', {
        description: `Download ${resource.title} to a .vhdx file`,
        options: Object.assign({}, resource.options, options),
        dirname: __dirname,
        resource: resource,
        handler: async args => {

            const disk = await args.helpers.api.get(`${resource.url(args)}/${args[resource.title]}`);
            const writeStream = fs.createWriteStream(args['destination-file']);

            return new Promise((resolve, reject) => {
                const req = args.helpers.api.download(disk.downloadUrl);
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
};

