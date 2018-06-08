'use strict';

const Cli = require('structured-cli');

const options = {
    vault: {
        description: 'Vault ID or name'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('ssh', {
    description: `Connect to ${resource.title} using SSH`
  , plugins: resource.plugins
  , options: Object.assign({}, resource.options, options)
  , handler: args => args.helpers.api
        .get(`${args.$node.parent.config.url(args)}/${args.id}`)
        .then(result => {

            const sshArgs = [
                `${result._id}@vault.pl-waw-1.hyperone.com`
            ];

            console.log(`ssh ${sshArgs.join(' ')}`);

            const spawn = require('child_process').spawn;

            return new Promise((resolve, reject) => {
                const ssh = spawn('ssh', sshArgs, { stdio: 'inherit' });

                ssh.on('close', resolve);
                ssh.on('error', reject);
            });
        })
});
