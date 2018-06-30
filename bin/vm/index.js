'use strict';

const genericResource = require('bin/generic');
const genericDefaults = require('bin/generic/defaults');
const genericAction = require('bin/generic/action');
const text = require('lib/text');

const resource = {
    name: 'vm',
    defaultQuery: '[].{id:_id,name:name,flavour:flavour,state:state,processing:processing,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'vm',
    plugins: genericDefaults.plugins,
    commands: [ 'list', 'show' ],
    title: 'virtual machine',
};

const childDefaults = Object.assign({}, resource, {
    options: {
        vm: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
            dest: 'id',
        },
    },
    url: args => `${resource.url(args)}/${args.id}`,
});

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./delete')(resource));

category.addChild(require('./history')(childDefaults));
category.addChild(require('./console')(childDefaults));

category.addChild(genericAction(childDefaults, 'stop'));
category.addChild(genericAction(childDefaults, 'start'));
category.addChild(genericAction(childDefaults, 'restart'));
category.addChild(genericAction(childDefaults, 'turnoff'));
category.addChild(require('./action/rename')(childDefaults));
category.addChild(require('./action/userdata')(childDefaults));

category.addChild(require('./disk'));
category.addChild(require('./nic'));
category.addChild(require('./dvd'));
category.addChild(require('./tag'));

category.addChild(require('./ssh/ssh')(childDefaults));
category.addChild(require('./serialport')(resource));
category.addChild(require('./passwordreset')(resource));
category.addChild(require('./metrics')(childDefaults));

module.exports = category;
