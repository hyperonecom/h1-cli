'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');

const resource = {
    name: 'nic',
    defaultQuery: "[].{id:_id,mac:macaddress,speed:speed,ipaddress:join(',',ip[].address),processing:processing}",
    url: args => `vm/${args['vm-id']}/netadp`,
    options: {
        'vm-id': {
            description: 'VM id',
            type: 'string',
            required: true
        }
    },
    plugins: defaults.plugins
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('bin/generic/delete')(resource));
category.addChild(require('./ip')(resource));

module.exports = category;
