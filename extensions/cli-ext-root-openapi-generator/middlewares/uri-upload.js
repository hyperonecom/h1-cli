import ProgressBar from 'progress';
import { S3 } from 'aws-sdk';
import { set } from '@hyperone/cli-core/lib/transform';

const findOptionsForFormat = (options, format) => options.filter(x =>
    x.use && x.use.schema && (
        x.use.schema.format == format ||
        x.use.schema.oneOf && x.use.schema.oneOf.some(y => y.format == format)
    ));

export default {
    name: 'uri-upload',
    afterRenderOptions: (options) => {
        const applyOptions = findOptionsForFormat(options, 'uri-upload');
        if (applyOptions) {
            options.push({
                name: 'no-progress',
                default: false,
                type: Boolean,
            });
        }
        return options;
    },
    beforeRequest: async (requestBody, requestUrl, opts, options, device) => {
        const optsAll = opts._all || opts;
        const noProgress = optsAll['no-progress'];
        const applyOptions = findOptionsForFormat(options, 'uri-upload');
        for (const option of applyOptions) {
            const value = optsAll[option.name];
            if (!value) continue;
            if (!value.startsWith('file://')) continue;
            const path = require('path');
            const filepath = new URL(value).pathname;
            const filename = path.basename(filepath);
            const filestream = device.createReadStream(filepath);
            const filestat = await device.statFile(filepath);
            const filesize = filestat.size;

            const uploadRequestUrl = requestUrl
                .replace('/iso', '/bucket/temp/actions/upload')
                .replace('/disk', '/bucket/temp/actions/upload');

            const uploadParams = await opts.api.post(uploadRequestUrl, { json: { name: filename } });

            const s3Client = new S3({
                endpoint: uploadParams.endpoint,
                accessKeyId: uploadParams.accessKeyId,
                sessionToken: uploadParams.sessionToken,
                secretAccessKey: uploadParams.secretAccessKey,
                region: uploadParams.region,
                s3BucketEndpoint: true,
                s3ForcePathStyle: true,
                signatureVersion: 'v4',
                logger: {
                    log: (...args) => opts.logger.debug(...args),
                },
            });

            const managedUpload = s3Client.upload({
                Bucket: uploadParams.bucket,
                Key: uploadParams.key,
                Body: filestream,
                ContentType: 'application/octet-stream',
            });

            if (!noProgress) {
                const bar = new ProgressBar(`uploading for --${option.name}: [:bar] :rate/Bps :percent :etas`, {
                    complete: '=',
                    incomplete: ' ',
                    total: filesize,
                    stream: process.stdout,
                });

                let prev_loaded = 0;
                managedUpload.on('httpUploadProgress', ({ loaded }) => {
                    bar.tick(loaded - prev_loaded);
                    prev_loaded = loaded;
                });
            }

            const uploadData = await managedUpload.promise();
            const newValue = uploadData.Location;
            set(requestBody, option.use.field.replace(/\//g, '.'), newValue);
        }
        return requestBody;
    },
};
