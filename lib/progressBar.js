'use strict';
const ProgressBar = require('progress');

module.exports = {
    showProgressBar: (req, response) => {
        console.log();
        const bar = new ProgressBar('  downloading [:bar] :rate/Bps :percent :etas', {
            complete: '=',
            incomplete: ' ',
            total: parseInt(response.headers['content-length']),
            stream: process.stderr,
        });
        req.on('data', chunk => bar.tick(chunk.length));
    },
};
