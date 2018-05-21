'use strict';

const Cli = require('structured-cli');

const options = {
    username: {
        description: 'Username for ssh connection'
      , type: 'string'
    }
  , port: {
        description: 'Port for ssh connection'
      , type: 'string'
    }
  , private: {
        description: 'Use first private network, skip public'
      , type: 'boolean'
    }
};

const params = {
    id: {
        description: 'Resource identifier'
        , type: 'string'
        , required: true
    }
  , command: {
        description: 'Command to execute'
      , type: 'string'
    }
}

module.exports = resource => Cli.createCommand('ssh', {
    description: 'Connect to VM using SSH'
  , plugins: resource.plugins
  , params: params
  , options: Object.assign({}, options, resource.options)
  , handler: async args => {
        const vm = await args.helpers.api.get(resource.url(args));

        let netadps = await args.helpers.api.get(`${resource.url(args)}/netadp`);

        netadps = netadps.filter(item => item.ip.length > 0);

        if (args.private) {
            netadps = netadps.filter(item => item.network.type === 'private');
        }

        if (netadps.length < 1) {
            throw Cli.error.notFound('No network interfaces with defined ip found for VM');
        }

        const netadp = netadps.find(item => item.network && item.network.type === 'public') || netadps[0];

        const username = args.username || vm.data.username || 'guru';

        const sshArgs = [
            `${username}@${netadp.ip[0].address}`
        ];

        if (args.port) {
            sshArgs.push(...['-p', args.port]);
        }

        if (args.command) {
            sshArgs.push(args.command);
        }

        console.log(`ssh ${sshArgs.join(' ')}`);

        const spawn = require('child_process').spawn;

        return new Promise((resolve, reject) => {
            const ssh = spawn('ssh', sshArgs, { stdio: 'inherit' });

            ssh.on('close', resolve);
            ssh.on('error', reject);
        });
    }
});
