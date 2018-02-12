'use strict';

const websocketStream = require('websocket-stream/stream');
const ProgressBar = require('progress');
const fs = require('fs');

exports.upload = (ws, filePath) => {
    const stream = websocketStream(ws, { binary: true, perMessageDeflate: false });

    const fileSize = fs.statSync(filePath).size;

    stream.on('pipe', readStream => {
        console.log();
        const bar = new ProgressBar('  uploading [:bar] :rate/bps :percent :etas', {
            complete: '='
          , incomplete: ' '
          , total: fileSize
          , stream: process.stdout
        });

        readStream.on('data', chunk => {
            bar.tick(chunk.length);
        });

        readStream.on('end', () => console.log('\n'));
    });

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(stream);

    return stream;
};
