'use strict';

const genericResource = require('bin/generic/root');
const genericDefaults = require('bin/generic/defaults');
const text = require('lib/text');

const resource = {
    name: 'vm',
    defaultQuery: '[].{id:_id,name:name,type:flavour,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'vm',
    plugins: genericDefaults.plugins,
    serviceCommands: ['list', 'show', 'change'],
    title: 'Virtual machine',
    ignoreGeneric: ['delete', 'rename'],
};

const childDefaults = Object.assign({}, resource, {
    options: {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    },
    url: args => `${resource.url(args)}/${args[resource.name]}`,
    dirname: __dirname,
});

const actionDefault = Object.assign({}, childDefaults, {
    dirname: `${__dirname}/action`,
});

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./delete')(resource));
category.addChild(require('./console')(resource));

category.addChild(require('./action/rename')(actionDefault));
category.addChild(require('./action/userdata')(actionDefault));
category.addChild(require('./serialport')(actionDefault));

category.addChild(require('./disk'));
category.addChild(require('./nic'));
category.addChild(require('./dvd'));

category.addChild(require('./ssh/ssh')(childDefaults));
category.addChild(require('./passwordreset')(resource));
category.addChild(require('./metrics')(childDefaults));

module.exports = category;
