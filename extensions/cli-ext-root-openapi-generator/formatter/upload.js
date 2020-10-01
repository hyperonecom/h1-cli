import { upload } from './websocketStream';
import WebSocket from 'ws';

const logger = console.log;
const verbose = true;

const createWebSocket = (url, options={}) => new Promise((resolve, reject) => {

    const ws = new WebSocket(url, options);

    if (!ws) {
        logger('error', 'did not managed to create websocket');
    }

    ws.on('open', () => {
        if (verbose) {
            logger('verbose', 'websocket opened');
        }
        resolve(ws);
    });

    ws.on('close', () => {
        if (verbose) {
            logger('verbose', 'websocket closed');
        }
    });
    ws.on('message', logger);
    ws.on('error', reject);
});

export default {
    afterRenderOptions: (options) => {
        options.push({
            name: 'source-file',
        });
        return options;
    },
    afterRenderBody: async (requestBody, opts) => {
        const optsAll = opts._all || opts;
        if (!optsAll['source-file']) return;
        const fileSize = require('fs').statSync(optsAll['source-file']).size;
        requestBody.size = fileSize / 1024 ** 3;
        requestBody.metadata = {
            source: {
                filename: require('path').basename(optsAll['source-file']),
                size: fileSize,
            },
        };
        return requestBody;
    },
    afterResponse: async (resp, opts, requestBody) => {
        const optsAll = opts._all || opts;
        console.log({optsAll});
        if (!optsAll['source-file']) return resp;

        const ws = await createWebSocket(`wss://download.hyperone.com/ws/iso/${optsAll.iso}/upload`, {
            headers: {
                "x-auth-token": opts.config.get('auth.token.refresh_token'),
                "x-project": optsAll.project,
            },
        });
        await upload(ws, optsAll['source-file']);
        return resp;
        // return opts.api.get(resp.uri);
    },
};
