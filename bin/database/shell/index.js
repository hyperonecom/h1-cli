'use strict';

const Cli = require('lib/cli');

const options = {
    database: {
        description: 'Database ID or name',
        type: 'string',
        required: true,
    },
    password: {
        description: 'Password to access database. Can be set also via environment variable H1_DATABASE_PASSWORD.',
        type: 'string',
        required: !process.env.H1_DATABASE_PASSWORD,
        defaultValue: process.env.H1_DATABASE_PASSWORD,
    },
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
                '-u', database._id,
                '--enable-cleartext-plugin',
                database._id,
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
