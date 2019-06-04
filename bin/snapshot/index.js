'use strict';

const genericResource = require('bin/generic');

const schema = {
    vault: {
        description: 'Vault ID or name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    name: {
        description: 'Snapshot name',
        type: 'string',
        required: true,
        onCreate: true,
    },
};

const resource = {
    name: 'snapshot',
    defaultQuery: '[].{id:_id,name:name,size:sizeUsed,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'snapshot',
    extraCommands: ['create'],
    dirname: __dirname,
    schema,
};

const category = genericResource(resource);

module.exports = category;
