'use strict';

const genericResource = require('bin/generic');
const genericDefaults = require('bin/generic/defaults');
const genericAction = require('bin/generic/action');
const text = require('lib/text');

const resource = {
    name: 'vm',
    defaultQuery: '[].{id:id,name:name,type:flavour,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'vm',
    plugins: genericDefaults.plugins,
    commands: [ 'list', 'show', 'history', 'tag', 'service'],
    serviceCommands: ['list', 'show', 'change'],
    title: 'Virtual machine',
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

category.addChild(genericAction(actionDefault, 'stop'));
category.addChild(genericAction(actionDefault, 'start'));
category.addChild(genericAction(actionDefault, 'restart'));
category.addChild(genericAction(actionDefault, 'turnoff'));
category.addChild(require('./action/rename')(actionDefault));
category.addChild(require('./action/userdata')(actionDefault));
category.addChild(require('./serialport')(actionDefault));

category.addChild(require('./disk'));
category.addChild(require('./nic'));
category.addChild(require('./dvd'));
category.addChild(require('./console')(childDefaults));
category.addChild(require('./ssh/ssh')(childDefaults));
category.addChild(require('./passwordreset')(childDefaults));
category.addChild(require('./metrics')(childDefaults));

module.exports = category;
