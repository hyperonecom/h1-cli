'use strict';

const ProgressBar = require('progress');
const Cli = require('structured-cli');
const fs = require('fs');

const options = {
    destination: {
        description: 'destination disk path'
      , type: 'string'
      , required: true
    }
};

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('download', {
    description: 'Download'
  , plugins: resource.plugins
  , options: options
  , params: params
  , handler: async args => {

        const disk = await args.helpers.api.get(`${resource.url(args)}/${args.id}`);

        return new Promise((resolve, reject) => {
            const writeStream = fs.createWriteStream(args.destination);
            const req = args.helpers.api.download(disk.downloadUrl);
            // const req = args.helpers.api.download(`http://localhost:3000/disk/${disk._id}`);
            req.on('error', reject);
            req.on('end', resolve);
            req.on('response', response => {

                if (response.statusCode !== 200) {
                    return reject(`${response.statusMessage} ${response.request.href}`);
                }

                showProgressBar(req, response);
                req.pipe(writeStream);
            });
        });
    }
});

const showProgressBar = (req, response) => {

    console.log();
    const bar = new ProgressBar('  downloading [:bar] :rate/Bps :percent :etas', {
        complete: '='
      , incomplete: ' '
      , total: parseInt(response.headers['content-length'])
      , stream: process.stdout
    });
    req.on('data', chunk => bar.tick(chunk.length));
};
