'use strict';

const Cli = require('lib/cli');

const options = {
    website: {
        description: 'Website ID or name',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('sftp', {
    description: `Connect to ${resource.title} using SFTP`,
    plugins: resource.plugins,
    dirname: __dirname,
    options: Object.assign({}, resource.options, options),
    handler: args => args.helpers.api
        .get(`${resource.url(args)}/${args.website}`)
        .then(result => {
            const sshArgs = [
                `${result._id}@${result.fqdn}`,
            ];

            console.log(`sftp ${sshArgs.join(' ')}`);

            const spawn = require('child_process').spawn;

            return new Promise((resolve, reject) => {
                const ssh = spawn('sftp', sshArgs, { stdio: 'inherit' });

                ssh.on('close', resolve);
                ssh.on('error', reject);
            });
        }),
});
