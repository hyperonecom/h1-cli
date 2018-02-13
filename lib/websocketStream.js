'use strict';

const websocketStream = require('websocket-stream/stream');
const ProgressBar = require('progress');
const fs = require('fs');

exports.upload = (ws, filePath) => new Promise((resolve, reject) => {
    console.log('waiting for the OK to upload');
    ws.on('message', message => {
        console.log('received', message);
        if (!message.startsWith('OK')) {
            return reject(message);
        }

        const [ , start ] = message.split(' ');

        upload(ws, filePath, parseInt(start)).on('finish', resolve);
    });

    ws.on('error', reject);
});

const upload = (ws, filePath, start) => {

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

        bar.tick(start);

        readStream.on('data', chunk => {
            bar.tick(chunk.length);
        });

        readStream.on('end', () => console.log('\n'));
    });

    const readStream = fs.createReadStream(filePath, { start });

    readStream.pipe(stream);

    return stream;
};
