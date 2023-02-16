import ProgressBar from 'progress';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client } from '@aws-sdk/client-s3';
import path from 'node:path';

import { Command } from '@hyperone/cli-framework';
import { openapi } from '@hyperone/cli-core';

export default new Command({
    name: 'upload',
    summary: 'Upload a single file',
    options: [
        { name: 'project', required: true, defaultSource: 'project' },
        { name: 'bucket', required: true },
        { name: 'file', required: true },
        { name: 'no-progress', default: false,  type: Boolean },
    ],
    handler: async (opts, cmd) => {
        const { device } = cmd;

        const optsAll = opts._all || opts;
        const noProgress = optsAll['no-progress'];

        const url = openapi.getUrl(
            '/storage/pl-waw-1/project/{projectId}/bucket/{bucketId}/actions/upload',
            {
                projectId: optsAll.project,
                bucketId: optsAll.bucket,
            },
            { servers: [ { url: '/v3' }] }
        );

        const filePath = optsAll.file;
        const name = path.basename(filePath);
        const stream = device.createReadStream(filePath);
        const stat = await device.statFile(filePath);

        let result = await opts.api.post(url, { json: { name }});
        const credential = result.bodyJson;

        const s3Client = new S3Client({
            endpoint: credential.endpoint,
            region: credential.region,
            credentials: {
                accessKeyId: credential.accessKeyId,
                secretAccessKey: credential.secretAccessKey,
                sessionToken: credential.sessionToken,
            },
            forcePathStyle: true,
            logger: {
                log: (...args) => opts.logger.debug(...args),
            },
        });

        const upload = new Upload({
            client: s3Client,
            params: {
                Bucket: credential.bucket,
                Key: credential.key,
                Body: stream,
                ContentType: 'application/octet-stream',
            },
        });

        if (!noProgress) {
            const bar = new ProgressBar(`uploading -- ${name}: [:bar] :rate/Bps :percent :etas`, {
                complete: '=',
                incomplete: ' ',
                total: stat.size,
                stream: process.stdout,
            });

            let prev_loaded = 0;
            upload.on('httpUploadProgress', ({ loaded }) => {
                bar.tick(loaded - prev_loaded);
                prev_loaded = loaded;
            });
        }

        await upload.done();

        result = await opts.api.get(url.replace('/actions/upload', '/object'));
        const object = result.bodyJson.find(o => o.name === name);

        return opts.format(object);
    },
});
