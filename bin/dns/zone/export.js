'use strict';

const Cli = require('structured-cli');

const options = {
    'zone-name': {
        description: 'Dns zone name',
        type: 'string',
        required: true
    }
};


module.exports = function(resource) {
    return Cli.createCommand('export', {
        description: 'Export dns zone',
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options),
        handler: handleCommand(resource)
    });
};

function handleCommand() {
    return function(args) {

        const url = `${args.$node.parent.config.url(args)}/${args['zone-name']}`;

        return args.helpers.api.get(url)
        .then(result => {
            result.rrsets.forEach(item => {
                item.records.filter(r=>!r.disabled).map(r=>{
                    console.log([item.name, 'IN', item.ttl, item.type, r.content].join('\t'));
                });
            });
        });
    };
}
