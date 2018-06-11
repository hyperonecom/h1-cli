'use strict';

const Cli = require('structured-cli');

module.exports = resource => Cli.createCommand('logs', {
    description: `${resource.title} logs`
  , plugins: resource.plugins
  , options: resource.options
  , handler: args => new Promise((resolve, reject) => args.helpers.api
        .raw('get', `${resource.url(args)}/logs`)
        .pipe(process.stdout)
        .on('error', reject)
        .on('end', resolve)
    )
});
