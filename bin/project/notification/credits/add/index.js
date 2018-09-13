'use strict';

const Cli = require('lib/cli');

const options = {
    limit: {
        description: 'New limit of credits',
        type: 'int',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('add', {
    description: 'Delete credits limits',
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api'),
    ],
    options: Object.assign({}, resource.options, options),
    handler: args => args.helpers.api
        .get(resource.url(args))
        .then(project => {
            const levels = project.threshold.credits.levels;
            levels.push(args.limit);
            return levels;
        })
        .then(levels => args.helpers.api
            .put(`${resource.url(args)}/threshold/credits/levels`, levels))
        .then(result => args.helpers.sendOutput(args, result)),
});
