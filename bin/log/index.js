'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic/root');

const schema = {
    name: {
        description: 'Name of log archive',
        type: 'string',
        required: true,
        onCreate: true,
    },
    // retention: {
    //     description: 'Data retention period (in days)',
    //     type: 'int',
    //     required: true,
    //     defaultValue: 30,
    //     onCreate: true
    // },
};

const resource = {
    name: 'log',
    apiName: 'logArchive',
    defaultQuery: '[].{id:_id,name:name,retention:retention,sizeUsed:sizeUsed,state:state,processing:processing}',
    extraCommands: ['create',  'credential'],
    plugins: genericDefaults.plugins,
    url: () => 'logArchive',
    dirname: __dirname,
    schema: schema,
    earlyAdoptersOnly: true,
    title: 'Journal',
    credential_types: ['sha512'],
};

const category = genericResource(resource);

category.addChild(require('./stream')(resource));
category.addChild(require('./logger')(resource));

module.exports = category;
