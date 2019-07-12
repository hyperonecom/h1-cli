'use strict';

const Cli = require('lib/cli');

const options = {
    database: {
        description: 'Database ID or name',
        type: 'string',
        required: true,
    },
    password: Cli.richOption({
        description: 'Password to access database',
        type: 'string',
        env: 'DATABASE_PASSWORD',
        required: true,
    }),
};


module.exports = resource => Cli.createCommand('shell', {
    description: `Connect to ${resource.title} using standard client`,
    plugins: resource.plugins,
    dirname: __dirname,
    options: Object.assign({}, resource.options, options),
    handler: args => args.helpers.api
        .get(`${resource.url(args)}/${args.database}`)
        .then(database => {

            const cmdArgs = [
                '-h', database.fqdn,
                '-u', database.id,
                '--enable-cleartext-plugin',
                database.id,
            ];

            if (cmdArgs.verbose) {
                cmdArgs.push('-v');
            }
            console.log(`${database.flavour} ${cmdArgs.join(' ')}`);

            const spawn = require('child_process').spawn;

            return new Promise((resolve, reject) => {
                const ssh = spawn(database.flavour, cmdArgs, {
                    stdio: 'inherit',
                    env: Object.assign({}, process.env, {
                        MYSQL_PWD: args.password,
                    }),
                });

                ssh.on('close', resolve);
                ssh.on('error', reject);
            });
        }),
});
