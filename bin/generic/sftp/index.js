'use strict';

const Cli = require('lib/cli');
const text = require('lib/text');


module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('sftp', {
        description: `Connect to ${text.toTitleCase(resource.title)} using SFTP`,
        plugins: resource.plugins,
        dirname: __dirname,
        resource: resource,
        options: { ...resource.options, ...options},
        handler: args => args.helpers.api
            .get(`${resource.url(args)}/${args[resource.name]}`)
            .then(result => {
                const sshArgs = [
                    `${result.id}@${result.fqdn}`,
                ];

                console.log(`sftp ${sshArgs.join(' ')}`);

                const spawn = require('child_process').spawn;

                return new Promise((resolve, reject) => {
                    const ssh = spawn('sftp', sshArgs, {stdio: 'inherit'});

                    ssh.on('close', resolve);
                    ssh.on('error', reject);
                });
            }),
    });
};
