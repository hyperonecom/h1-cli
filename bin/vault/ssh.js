'use strict';

const Cli = require('structured-cli');

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('ssh', {
    description: 'Connect to Vault using SSH'
  , plugins: resource.plugins
  , params: params
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
