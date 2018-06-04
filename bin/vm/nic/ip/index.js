'use strict';

const genericResource = require('bin/generic');

module.exports = parent => {

    const resource = {
        name: 'ip'
      , defaultQuery: '[].{id:_id,address:address,mac:mac,ptrRecord:ptrRecord,network:network,processing:processing,fip:associated.fip,state:state}'
      , url: args => `${parent.url(args)}/${args['nic-id']}/ip`
      , plugins: parent.plugins
      , options: Object.assign({}, parent.options, {
            nic: {
                description: 'NIC name of ID'
              , type: 'string'
              , required: true
            }
        })
      , commands: [ 'list', 'delete' ]
      , transform: data => data.ip || data
    };

    const category = genericResource(resource);

    category.addChild(require('./add')(resource));

    return category;
};
