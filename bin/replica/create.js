'use strict';

const child_process = require('child_process');
const crypto = require('crypto');
const path = require('path');
const os = require('os');
const fs = require('fs');

const Cli = require('structured-cli');

const options = {
    'local-vm': {
        description: 'local vm id or name'
      , type: 'string'
      , required: true
    }
};

const spawn = (command, args, options) => new Promise((resolve, reject) => {
    const child = child_process.spawn(command, args, options);

    child.on('close', resolve);
    child.on('error', reject);
});

const copy = (source, target) => {
    // const utils = require('util');
    // const copyFile = utils.promisify(fs.copyFile);
    // if (process.pkg) {
        return new Promise((resolve, reject) => {
            // use stream pipe to reduce memory usage
            // when loading a large file into memory.
            const read = fs.createReadStream(source);
            const write = fs.createWriteStream(target);

            read.pipe(write);

            read.once('error', reject);
            write.once('error', reject);
            write.once('close', resolve);
        });
    // }
    // return copyFile(source, target);
};

module.exports = resource => Cli.createCommand('create', {
    description: 'Setup VM replication'
  , plugins: resource.plugins
  , options: options
  , handler: async args => {

        const code = await spawn(
            'powershell'
          , ['-Command', `& { Get-VM -Name ${args['local-vm']} ; Exit(!$?) }`]
          , { stdio: [ 'ignore', 'inherit', 'inherit' ] }
        );

        if (code !== 0) {
            return;
        }

        const secret = crypto.randomBytes(32).toString('hex');

        const config = await args.helpers.api.post(resource.url(args), {
            hostname: os.hostname()
          , secret: secret
        });

        const ps1File = path.join(process.env.TEMP, `${crypto.randomBytes(10).toString('hex')}.ps1`);
        await copy(path.join(__dirname, 'enable-replication.ps1'), ps1File);

        const caFile = path.join(process.env.TEMP, `${crypto.randomBytes(10).toString('hex')}.cer`);
        await copy(path.join(__dirname, 'HyperOneCa.cer'), caFile);

        const psArgs = [
            '-NonInteractive'
          , '-File'
          , ps1File
          , '-VM'
          , args['local-vm']
          , '-ReplicaServerName'
          , config.replicaServer
          , '-CertificateBase64'
          , config.cert
          , '-CACertificatePath'
          , caFile
          , '-Secret'
          , secret
        ];

        return spawn('powershell', psArgs, { stdio: [ 'ignore', 'inherit', 'inherit' ] });
    }
});
