'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const text = require('lib/text');
const Cli = require('lib/cli');

const resource = {
    name: 'log',
    defaultQuery: '[].{id:_id,name:name,retention:retention}',
    commands: ['delete', 'rename', 'list', 'history'],
    plugins: genericDefaults.plugins,
    url: () => 'logArchive',
    title: 'log archive',
};

const category = genericResource(resource);

const show = resource => {
    // Replace to generic one after some time
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('show', {
        description: `Show ${resource.title}`,
        // dirname: __dirname,
        resource: resource,
        options: Object.assign({}, resource.options, options),
        handler: args => args.helpers.api
            .get(`${resource.url(args)}/${args[resource.name]}`)
            .then(result => args.helpers.sendOutput(args, result)),
    });
};

const credential_type = ['password'];

category.addChild(show(resource));
category.addChild(require('./create')(resource));
category.addChild(require('./stream')(resource));
category.addChild(require('../generic/credential')(resource, credential_type));
category.addChild(require('./read')(resource));

module.exports = category;
