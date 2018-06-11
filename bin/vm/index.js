'use strict';

const genericResource = require('bin/generic');
const genericDefaults = require('bin/generic/defaults');

const resource = {
    name: 'vm'
  , defaultQuery: '[].{id:_id,name:name,flavour:flavour,state:state,processing:processing}'
  , url: () => 'vm'
  , plugins: genericDefaults.plugins
  , commands: [ 'list', 'show' ]
  , title: 'Virtual machine'
};

const childDefaults = Object.assign({}, resource, {
    options: {
        vm: {
            description: `${resource.title} ID or name`,
            type: 'string',
            required: true,
            dest: 'id'
        }
    }
  , url: args => `${resource.url(args)}/${args.id}`
});

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./delete')(resource));

category.addChild(require('./queue')(childDefaults));
category.addChild(require('./console')(childDefaults));

category.addChild(require('./action/generic')(childDefaults, 'stop'));
category.addChild(require('./action/generic')(childDefaults, 'start'));
category.addChild(require('./action/generic')(childDefaults, 'restart'));
category.addChild(require('./action/generic')(childDefaults, 'turnoff'));
category.addChild(require('./action/rename')(resource));
category.addChild(require('./action/userdata')(resource));

category.addChild(require('./disk'));
category.addChild(require('./nic'));
category.addChild(require('./dvd'));
category.addChild(require('./tag'));

category.addChild(require('./ssh')(childDefaults));
category.addChild(require('./serialport')(resource));
category.addChild(require('./passwordreset')(resource));
category.addChild(require('./metrics')(childDefaults));

module.exports = category;
