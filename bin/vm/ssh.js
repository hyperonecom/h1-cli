'use strict';

const Cli = require('structured-cli');

const options = {
    username: {
        description: 'Username for ssh connection'
      , type: 'string'
      , defaultValue: 'guru'
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
};

const handler = args => args.helpers.api.get(`${args.$node.parent.config.url(args)}/${args.id}/netadp`).then(result => {
    result = result.filter(item => item.ip.length > 0);

    if (args.private) {
        result = result.filter(item => item.network.type === 'private');
    }

    if (result.length < 1) {
        throw Cli.error.notFound('No network interfaces with defined ip found for VM');
    }

    const nic = result.find(item => item.network && item.network.type === 'public') || result[0];

    const sshArgs = [
        `${args.username}@${nic.ip[0].address}`
    ];

    if (args.port) {
        sshArgs.push(...['-p', args.port]);
    }

    console.log(`ssh ${sshArgs.join(' ')}`);

    const spawn = require('child_process').spawn;

    return new Promise((resolve, reject) => {
        const ssh = spawn('ssh', sshArgs, { stdio: 'inherit' });

        ssh.on('close', resolve);
        ssh.on('error', reject);
    });
});

module.exports = resource => Cli.createCommand('ssh', {
    description: 'Connect to VM using SSH'
  , plugins: resource.plugins
  , params: params
  , options: Object.assign({}, options, resource.options)
  , handler: handler
});
