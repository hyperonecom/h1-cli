'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');

const options = {
    vm: {
        description: 'Virtual machine name or ID',
        type: 'string',
        required: true
    }
};

const resource = {
    name: 'nic',
    // eslint-disable-next-line quotes
    defaultQuery: "[].{id:_id,mac:macaddress,speed:speed,ipaddress:join(',',ip[].address),processing:processing}",
    url: args => `vm/${args.vm}/netadp`,
    options: options,
    plugins: defaults.plugins,
    title: 'Network adapter'
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('bin/generic/delete')(resource));

category.addChild(require('./ip'));

module.exports = category;
