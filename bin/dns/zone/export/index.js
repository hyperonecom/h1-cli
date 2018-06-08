'use strict';

const Cli = require('lib/cli');

const options = {
    'zone-name': {
        description: 'DNS zone name',
        type: 'string',
        required: true
    }
};

const handle = (args) => {
    const url = `${args.$node.parent.config.url(args)}/${args['zone-name']}`;

    return args.helpers.api.get(url, {
        name: args['zone-name']
    }).then(result => {
        result.rrsets.forEach(item => {
            item.records.filter(r=>!r.disabled).map(r=>{
                console.log([item.name, 'IN', item.ttl, item.type, r.content].join('\t'));
            });
        });
    });
};

module.exports = (resource) => Cli.createCommand('export', {
        description: `Export ${resource.title}`,
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options),
        handler: handle
    });
