import ProgressBar from 'progress';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client } from '@aws-sdk/client-s3';
import { set } from '@hyperone/cli-core/lib/transform';

const findOptionsForFormat = (options, format) => options.filter(x =>
    x.use && x.use.schema && x.use.schema['x-file'] && (
        x.use.schema.format === format ||
        x.use.schema.oneOf && x.use.schema.oneOf.some(y => y.format === format)
    )
);

export default {
    name: 'uri',
    afterRenderOptions: (options) => {
        const applyOptions = findOptionsForFormat(options, 'uri');
        if (applyOptions) {
            options.push({
                name: 'no-progress',
                default: false,
                type: Boolean,
            });
        }
        return options;
    },
    beforeRequest: async (requestBody, requestUrl, opts, options, cmd) => {
        const optsAll = opts._all || opts;
        const {device} = cmd;
        const noProgress = optsAll['no-progress'];
        const applyOptions = findOptionsForFormat(options, 'uri');
        for (const option of applyOptions) {
            const value = optsAll[option.name];
            if (!value) {
                continue;
            }
            if (!value.startsWith('file://')) {
                continue;
            }
            const path = require('path');
            const filepath = new URL(value).pathname;
            const filename = path.basename(filepath);
            const filestream = device.createReadStream(filepath);
            const filestat = await device.statFile(filepath);
            const filesize = filestat.size;

            const uploadRequestUrl = requestUrl
                .replace('/iso', '/bucket/5fbfd4c073dc5e138e2b0cfb/actions/upload')
                .replace('/disk', '/bucket/5fbfd4c073dc5e138e2b0cfb/actions/upload')
            ;

            const uploadParamsResp = await opts.api.post(uploadRequestUrl, { json: { name: filename } });
            const uploadParams = uploadParamsResp.bodyJson;

            const s3Client = new S3Client({
                endpoint: uploadParams.endpoint,
                region: uploadParams.region,
                credentials: {
                    accessKeyId: uploadParams.accessKeyId,
                    secretAccessKey: uploadParams.secretAccessKey,
                    sessionToken: uploadParams.sessionToken,
                },
                forcePathStyle: true,
                logger: {
                    log: (...args) => opts.logger.debug(...args),
                },
            });

            const upload = new Upload({
                client: s3Client,
                params: {
                    Bucket: uploadParams.bucket,
                    Key: uploadParams.key,
                    Body: filestream,
                    ContentType: 'application/octet-stream',
                },
            });

            if (!noProgress) {
                const bar = new ProgressBar(`uploading for --${option.name}: [:bar] :rate/Bps :percent :etas`, {
                    complete: '=',
                    incomplete: ' ',
                    total: filesize,
                    stream: process.stdout,
                });

                let prev_loaded = 0;
                upload.on('httpUploadProgress', ({ loaded }) => {
                    bar.tick(loaded - prev_loaded);
                    prev_loaded = loaded;
                });
            }

            const uploadData = await upload.done();
            const newValue = uploadData.Location;
            set(requestBody, option.use.field.replace(/\//g, '.'), newValue);
        }
        return requestBody;
    },
};
