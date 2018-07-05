'use strict';

const WebSocketStream = require('ws-streamify').default;
const ProgressBar = require('progress');
const fs = require('fs');

exports.upload = (ws, filePath, options = {}) => new Promise((resolve, reject) => {

    const fileSize = fs.statSync(filePath).size;

    console.log('waiting for the OK to upload');
    ws.once('message', message => {
        console.log('received', message);
        if (!message.startsWith('OK')) {
            return reject(message);
        }

        const [, start] = message.split(' ');

        if (start > fileSize) {
            return reject('destination file is bigger than source file');
        }

        const stream = new WebSocketStream(ws, {highWaterMark: 1024});

        // remove WebSocketStream finished handler that causes crash
        // more info @ https://github.com/hyperonecom/h1-cli/issues/44
        delete stream._events.finish;

        stream.on('close', msg => {
            if (!msg.wasClean) {
                reject('connection was lost');
            }
        });

        upload(stream, filePath, fileSize, parseInt(start), options)
            .on('finish', resolve);

    });

    ws.on('error', reject);
});

const upload = (stream, filePath, fileSize, start, options = {}) => {

    if (options.progress) {
        stream.on('pipe', readStream => {
            console.log();
            const bar = new ProgressBar('  uploading [:bar] :rate/Bps :percent :etas', {
                complete: '=',
                incomplete: ' ',
                total: fileSize,
                stream: process.stdout,
            });

            bar.tick(start);

            readStream.on('data', chunk => {
                bar.tick(chunk.length);
            });

            readStream.on('end', () => console.log('\n'));
        });
    }
    const readStream = fs.createReadStream(filePath, {start});

    readStream.pipe(stream);

    return stream;
}
;
